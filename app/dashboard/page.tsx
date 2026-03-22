'use client';

import { motion } from 'motion/react';
import GlassCard from '@/components/ui/GlassCard';
import { Activity, Users, Zap, Database, TrendingUp, Cpu } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: '00:00', value: 400 },
  { name: '04:00', value: 300 },
  { name: '08:00', value: 600 },
  { name: '12:00', value: 800 },
  { name: '16:00', value: 500 },
  { name: '20:00', value: 900 },
  { name: '24:00', value: 1000 },
];

const stats = [
  { title: 'Neural Activity', value: '98.4%', icon: Activity, color: 'text-red-400', glow: 'red' },
  { title: 'Active Nodes', value: '1,204', icon: Database, color: 'text-orange-400', glow: 'orange' },
  { title: 'Processing Power', value: '4.2 TH/s', icon: Cpu, color: 'text-yellow-400', glow: 'yellow' },
  { title: 'System Load', value: '42%', icon: Zap, color: 'text-red-400', glow: 'red' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-12">
      <header className="flex items-center justify-between mb-12">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500 text-glow-red"
          >
            SYSTEM OVERVIEW
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 font-poppins mt-2"
          >
            Real-time monitoring of rudra_x_bomb core infrastructure.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-4 glass-panel px-6 py-3 rounded-full border-red-500/30 box-glow-red"
        >
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]" />
          <span className="font-orbitron text-sm text-red-100 tracking-widest">STATUS: OPTIMAL</span>
        </motion.div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {/* ✅ FIXED LINE (no wrong casting) */}
            <GlassCard glowColor={stat.glow} className="h-full">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-white/5 ${stat.color} bg-opacity-10 backdrop-blur-md border border-white/10`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-slate-400 font-poppins text-sm mb-1">{stat.title}</h3>
              <p className={`text-3xl font-orbitron font-bold ${stat.color} text-glow`}>{stat.value}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <GlassCard className="h-[400px] flex flex-col">
            <h3 className="text-xl font-orbitron font-semibold text-red-100 mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-red-500" />
              Network Throughput
            </h3>
            <div className="flex-1 w-full min-h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.5)" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', backdropFilter: 'blur(10px)' }}
                    itemStyle={{ color: '#ef4444', fontFamily: 'var(--font-orbitron)' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <GlassCard glowColor="orange" className="h-[400px] flex flex-col">
            <h3 className="text-xl font-orbitron font-semibold text-orange-100 mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-400" />
              Active Synapses
            </h3>
            <div className="flex-1 flex flex-col justify-center gap-6">
              {[
                { label: 'Core Alpha', value: 85, color: 'bg-red-500' },
                { label: 'Core Beta', value: 62, color: 'bg-orange-500' },
                { label: 'Core Gamma', value: 94, color: 'bg-yellow-500' },
                { label: 'Core Delta', value: 45, color: 'bg-red-700' },
              ].map((item, i) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex justify-between text-sm font-poppins">
                    <span className="text-slate-300">{item.label}</span>
                    <span className="text-white font-mono">{item.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className={`h-full ${item.color} shadow-[0_0_10px_currentColor]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}

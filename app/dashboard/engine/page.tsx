'use client';

import { motion } from 'motion/react';
import GlassCard from '@/components/ui/GlassCard';
import { Cpu, Zap, Activity, Shield } from 'lucide-react';

export default function EnginePage() {
  return (
    <div className="space-y-8 pb-12">
      <header className="flex items-center justify-between mb-12">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-400 text-glow-pink"
          >
            NEURAL ENGINE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 font-poppins mt-2"
          >
            Core processing unit configuration and status.
          </motion.p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard glowColor="pink" className="h-[300px] flex flex-col items-center justify-center gap-4">
            <Cpu className="w-16 h-16 text-pink-400 animate-pulse" />
            <h3 className="text-xl font-orbitron font-semibold text-pink-100">Core Alpha</h3>
            <p className="text-pink-400 font-mono">STATUS: ONLINE</p>
          </GlassCard>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GlassCard glowColor="blue" className="h-[300px] flex flex-col items-center justify-center gap-4">
            <Zap className="w-16 h-16 text-cyan-400 animate-pulse" />
            <h3 className="text-xl font-orbitron font-semibold text-cyan-100">Core Beta</h3>
            <p className="text-cyan-400 font-mono">STATUS: ONLINE</p>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}

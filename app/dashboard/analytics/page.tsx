'use client';

import { motion } from 'motion/react';
import GlassCard from '@/components/ui/GlassCard';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 pb-12">
      <header className="flex items-center justify-between mb-12">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400 text-glow-purple"
          >
            ANALYTICS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 font-poppins mt-2"
          >
            Deep dive into neural processing metrics.
          </motion.p>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard glowColor="purple" className="h-[600px] flex items-center justify-center">
          <p className="text-purple-400 font-orbitron text-2xl animate-pulse text-glow-purple">
            GATHERING QUANTUM DATA...
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}

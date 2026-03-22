'use client';

import { motion } from 'motion/react';
import Tester from '@/components/Tester';

export default function NetworkPage() {
  return (
    <div className="space-y-8 pb-12">
      <header className="flex items-center justify-between mb-12">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-400 text-glow-blue"
          >
            NETWORK PENETRATION
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 font-poppins mt-2"
          >
            Execute high-frequency API testing protocols.
          </motion.p>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Tester />
      </motion.div>
    </div>
  );
}

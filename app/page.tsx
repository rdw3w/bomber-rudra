'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import BackgroundSystem from '@/components/3d/BackgroundSystem';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black selection:bg-red-500/30">
      <BackgroundSystem />
      
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-red-500/30 text-red-400 text-sm font-poppins tracking-wider uppercase"
        >
          <Sparkles className="w-4 h-4" />
          <span>Next-Generation AI Platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, type: 'spring' }}
          className="text-6xl md:text-8xl font-bold font-orbitron mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-red-200 to-red-900 text-glow-red"
        >
          rudra_x_bomb
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-2xl text-slate-300 font-poppins max-w-2xl mb-12 font-light leading-relaxed"
        >
          Experience the future of artificial intelligence with our immersive, magical, and hyper-advanced interface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Link href="/dashboard" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-500/10 hover:bg-red-500/20 border border-red-500/50 rounded-full font-orbitron text-lg text-red-50 transition-all duration-300 box-glow-red overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Initialize System <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </Link>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs font-mono text-red-500 uppercase tracking-[0.3em]">System Online</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-red-500 to-transparent" />
      </div>
    </main>
  );
}

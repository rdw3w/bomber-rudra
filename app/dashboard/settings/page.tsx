'use client';

import { motion } from 'motion/react';
import GlassCard from '@/components/ui/GlassCard';
import { Settings, Shield, Key, Bell } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-8 pb-12">
      <header className="flex items-center justify-between mb-12">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 text-glow-white"
          >
            SYSTEM SETTINGS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 font-poppins mt-2"
          >
            Configure rudra_x_bomb parameters and security.
          </motion.p>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 gap-6"
      >
        <GlassCard className="flex items-center gap-6 p-6">
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <Shield className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-xl font-orbitron font-semibold text-white mb-1">Security Protocols</h3>
            <p className="text-slate-400 font-poppins text-sm">Manage firewall rules and intrusion detection.</p>
          </div>
        </GlassCard>

        <GlassCard className="flex items-center gap-6 p-6">
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <Key className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h3 className="text-xl font-orbitron font-semibold text-white mb-1">API Keys</h3>
            <p className="text-slate-400 font-poppins text-sm">Manage authentication tokens and access keys.</p>
          </div>
        </GlassCard>

        <GlassCard className="flex items-center gap-6 p-6">
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <Bell className="w-8 h-8 text-pink-400" />
          </div>
          <div>
            <h3 className="text-xl font-orbitron font-semibold text-white mb-1">Notifications</h3>
            <p className="text-slate-400 font-poppins text-sm">Configure system alerts and monitoring events.</p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}

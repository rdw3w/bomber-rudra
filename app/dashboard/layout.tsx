'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Activity, 
  Cpu, 
  Network, 
  Settings, 
  LogOut,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import BackgroundSystem from '@/components/3d/BackgroundSystem';

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: Activity, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: Cpu, label: 'Neural Engine', href: '/dashboard/engine' },
  { icon: Network, label: 'Network', href: '/dashboard/network' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  { icon: ShieldAlert, label: 'Admin Panel', href: '/admin' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex selection:bg-red-500/30">
      <BackgroundSystem />
      
      {/* Sidebar */}
      <motion.aside
        initial={{ width: 80 }}
        animate={{ width: isHovered ? 240 : 80 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative z-20 h-screen border-r border-white/10 glass-panel flex flex-col justify-between py-8 transition-all duration-300 overflow-hidden"
      >
        <div className="flex flex-col gap-8 px-4">
          <div className="flex items-center gap-4 px-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.5)]">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <motion.span 
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
              className="font-orbitron font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500 whitespace-nowrap"
            >
              rudra_x_bomb
            </motion.span>
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <div className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group relative ${isActive ? 'bg-red-500/20 text-red-300' : 'hover:bg-white/5 text-slate-400 hover:text-white'}`}>
                    {isActive && (
                      <motion.div layoutId="activeNav" className="absolute inset-0 border border-red-500/50 rounded-xl box-glow-red" />
                    )}
                    <item.icon className={`w-6 h-6 shrink-0 relative z-10 ${isActive ? 'text-red-400' : 'group-hover:text-red-400 transition-colors'}`} />
                    <motion.span 
                      animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                      className="font-poppins font-medium whitespace-nowrap relative z-10"
                    >
                      {item.label}
                    </motion.span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="px-4">
          <Link href="/">
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-all duration-300 group">
              <LogOut className="w-6 h-6 shrink-0 group-hover:text-red-400 transition-colors" />
              <motion.span 
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                className="font-poppins font-medium whitespace-nowrap"
              >
                Disconnect
              </motion.span>
            </div>
          </Link>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="relative z-10 flex-1 h-screen overflow-y-auto custom-scrollbar p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}

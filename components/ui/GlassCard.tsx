'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'red' | 'orange' | 'yellow';
}

export default function GlassCard({ children, className = '', glowColor = 'red' }: GlassCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowClass = 
    glowColor === 'red' ? 'hover:box-glow-red border-red-500/20' :
    glowColor === 'orange' ? 'hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] border-orange-500/20' :
    'hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] border-yellow-500/20';

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl p-6 glass-panel transition-all duration-300 ${glowClass} ${className}`}
    >
      <div style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </motion.div>
  );
}

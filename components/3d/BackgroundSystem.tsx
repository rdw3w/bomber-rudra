'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useState, useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { motion } from 'motion/react';

// Scene: Red Fire Particles over the Knight Image
function RedFireParticles() {
  const ref = useRef<THREE.Points>(null);
  const time = useRef(0);
  
  const [positions, colors] = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color('#ef4444'); // Red
    const color2 = new THREE.Color('#f97316'); // Orange
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return [positions, colors];
  }, []);

  useFrame((_, delta) => {
    time.current += delta;
    if (ref.current) {
      ref.current.rotation.y = Math.sin(time.current * 0.1) * 0.1;
      ref.current.rotation.x = Math.cos(time.current * 0.1) * 0.05;
      
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < 3000; i++) {
        // Upward movement simulating fire
        positions[i * 3 + 1] += delta * (1 + Math.random() * 2);
        if (positions[i * 3 + 1] > 10) {
          positions[i * 3 + 1] = -10;
        }
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial transparent vertexColors size={0.06} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
    </Points>
  );
}

export default function BackgroundSystem() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#0a0a0e] overflow-hidden">
      {/* 3D Parallax Image Background */}
      <motion.div
        animate={{
          x: mousePos.x * -1,
          y: mousePos.y * -1,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        className="absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('/knight-bg.jpg')`, // User needs to save their image as public/knight-bg.jpg
        }}
      />

      {/* 3D WebGL Particles */}
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} className="absolute inset-0">
        <RedFireParticles />
      </Canvas>
      
      {/* Vignette / Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 pointer-events-none" />
    </div>
  );
}

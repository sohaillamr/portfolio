"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const roles = ["Creative Technologist", "AI Integration Specialist", "Full-Stack Developer", "Growth Designer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Sohail Amr Anwar</h1>
        
        <div className="h-12 mb-8">
          <motion.p
            key={roleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-xl md:text-2xl text-gray-400 font-light"
          >
            {roles[roleIndex]}
          </motion.p>
        </div>

        <div className="flex gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full glassmorphism text-white font-medium hover:bg-white/10 transition-colors">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
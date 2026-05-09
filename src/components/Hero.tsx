"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
      {/* Dynamic Animated Particles / Background */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 40, 0], scale: [1, 1.2, 1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-[120px] -z-10" 
      />
      <motion.div 
        animate={{ y: [0, 50, 0], x: [0, -40, 0], scale: [1, 1.3, 1] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-[120px] -z-10" 
      />
      <motion.div 
        animate={{ y: [0, -50, 0], x: [0, -60, 0], scale: [1, 1.5, 1] }} 
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] -z-10 transform -translate-x-1/2 -translate-y-1/2" 
      />

      {/* Floating Small Orbs for modern aesthetic */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [Math.random() * -100, Math.random() * 100, Math.random() * -100],
            x: [Math.random() * -100, Math.random() * 100, Math.random() * -100],
          }}
          transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-2 h-2 bg-white/40 rounded-full blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="text-center z-10 p-8 glassmorphism rounded-3xl border border-white/10"
      >
        <motion.h1 
          className="text-5xl md:text-8xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-violet-500 pb-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Sohail Amr Anwar
        </motion.h1>
        
        <div className="h-12 mb-8">
          <motion.p
            key={roleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-xl md:text-3xl text-gray-300 font-medium"
          >
            {roles[roleIndex]}
          </motion.p>
        </div>

        <div className="flex gap-6 justify-center">
          <motion.a 
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(16, 185, 129, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all"
          >
            Explore Projects
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="px-8 py-4 rounded-full glassmorphism text-white font-bold hover:bg-white/20 transition-all shadow-lg"
          >
            Let`'`s Connect
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}


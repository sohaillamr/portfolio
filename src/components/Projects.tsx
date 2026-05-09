"use client";
import { motion, useAnimation } from "framer-motion";
import { ExternalLink, Layers, Rocket } from "lucide-react";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Synapse",
    description: "An AI-powered efficiency ecosystem designed to streamline workflows for executives and founders.",
    link: "https://synapse-green.vercel.app",
    tags: ["AI Integration", "Full-Stack", "Productivity"],
    icon: <Layers size={48} className="text-emerald-400 group-hover:scale-110 transition-transform duration-500" />,
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
  },
  {
    title: "Tafrah",
    description: "A comprehensive educational management platform engineered to modernize and scale operations for specialized educational centers.",
    link: "https://tafrah-project.vercel.app",
    tags: ["Next.js", "Project Management", "B2B SaaS"],
    icon: <Rocket size={48} className="text-violet-400 group-hover:scale-110 transition-transform duration-500" />,
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "group-hover:border-violet-500/50"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-7xl mx-auto py-32 px-6 overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-black mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
      >
        Featured Innovatons
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.2, type: "spring" }}
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              transitionSpeed={2500}
              className="h-full"
            >
              <div className={`group h-full glassmorphism p-10 rounded-3xl border border-white/10 ${project.border} transition-colors duration-500 overflow-hidden relative flex flex-col justify-between`}>
                
                {/* Abstract Background for the project view */}
                <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${project.gradient} rounded-full blur-[80px] -z-10 group-hover:scale-150 transition-transform duration-700`} />
                
                <div className="mb-12 relative flex items-center justify-center h-48 bg-black/40 rounded-2xl border border-white/5 overflow-hidden">
                   {project.icon}
                   <motion.div 
                     animate={{ y: [0, -10, 0] }} 
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" 
                   />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {project.title}
                    </h3>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transform hover:rotate-12 transition-all">
                      <ExternalLink size={28} />
                    </a>
                  </div>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-sm font-semibold px-4 py-2 rounded-full bg-white/5 text-gray-300 backdrop-blur-md border border-white/10 shadow-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


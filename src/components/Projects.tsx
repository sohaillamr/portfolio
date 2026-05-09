"use client";
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Synapse",
    description: "An AI-powered efficiency ecosystem designed to streamline workflows for executives and founders.",
    link: "https://synapse-green.vercel.app",
    tags: ["AI Integration", "Full-Stack", "Productivity"]
  },
  {
    title: "Tafrah",
    description: "A comprehensive educational management platform engineered to modernize and scale operations for specialized educational centers.",
    link: "https://tafrah-project.vercel.app",
    tags: ["Next.js", "Project Management", "B2B SaaS"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto py-24 px-6">
      <motion.h2 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-16 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glassmorphism p-8 rounded-3xl"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <ExternalLink size={24} />
              </a>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
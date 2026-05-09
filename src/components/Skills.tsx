"use client";
import Marquee from "react-fast-marquee";

const skills = [
  "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "Python", "Gemini API", "Groq API", "WordPress",
  "UI/UX Design", "Motion Graphics", "Adobe Creative Suite", "Figma"
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-32 px-6 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#050505] to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center relative z-20 mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Skills & Arsenal</h2>
        <p className="text-xl text-gray-400">The tools that power the vision</p>
      </div>

      <div className="relative z-20">
        <Marquee gradient={true} gradientColor="#050505" speed={50} className="py-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="mx-6 px-8 py-4 glassmorphism rounded-2xl text-xl font-bold text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer border border-white/5"
            >
              {skill}
            </div>
          ))}
        </Marquee>
        <Marquee gradient={true} gradientColor="#050505" speed={40} direction="right" className="py-4 mt-8">
          {skills.map((skill, index) => (
            <div 
              key={`reverse-${index}`}
              className="mx-6 px-8 py-4 glassmorphism rounded-2xl text-xl font-bold text-white/50 hover:text-white hover:bg-white/10 transition-all cursor-pointer border border-white/5"
            >
              {skill}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}


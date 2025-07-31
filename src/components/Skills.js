"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
  FaCode,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiDjango,
  SiPostgresql,
  SiFlask,
  SiCplusplus,
  SiExpress,
  SiSupabase,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function Skills() {
  const skills = [
    // Frontend
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },

    // Backend
    { name: "Node.js", icon: <FaNode className="text-green-500 text-4xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-white text-4xl" /> },
    { name: "Django", icon: <SiDjango className="text-green-300 text-4xl" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-100 text-4xl" /> },

    // Databases
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-4xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300 text-4xl" /> },
    { name: "Supabase", icon: <SiSupabase className="text-emerald-400 text-4xl" /> },

    // Automations
    { name: "n8n", icon: <GiArtificialIntelligence className="text-orange-400 text-4xl" /> },

    // Languages
    { name: "Python", icon: <FaPython className="text-yellow-300 text-4xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-400 text-4xl" /> },
    { name: "C#", icon: <span className="text-purple-400 text-2xl font-bold">C#</span> },

    // Tools
    { name: "GitHub", icon: <FaGithub className="text-gray-300 text-4xl" /> },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-8 md:px-12 lg:px-24 text-white font-pop"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="relative inline-block text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-white bg-clip-text text-transparent">
          Skills
          <span
            className="absolute inset-0 -z-10 blur-2xl opacity-60 pointer-events-none animate-pulse"
            style={{
              background:
                "radial-gradient(circle at center, rgba(3,169,244,0.5) 0%, transparent 70%)",
            }}
          />
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-base">
          Technologies and tools I work with daily to build professional-grade applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.04] hover:shadow-cyan-500/20"
          >
            {skill.icon}
            <span className="mt-3 text-gray-300 font-medium text-sm sm:text-base">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

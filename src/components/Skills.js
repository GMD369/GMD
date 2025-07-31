"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiDjango,
  SiPostgresql,
  SiFlask,
  SiCsharp,
  SiCplusplus,
  SiExpress,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    // Frontend
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },

    // Backend
    { name: "Node.js", icon: <FaNode className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "Django", icon: <SiDjango className="text-green-300" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-200" /> },

    // Databases
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },

    // Languages
    { name: "Python", icon: <FaPython className="text-yellow-300" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
    {
      name: "C#",
      icon: <span className="text-purple-400 text-3xl font-bold">C#</span>,
    },

    // Tools
    { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 px-6 sm:px-10 lg:px-24 text-white font-pop"
    >
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-3">
          Tools & Technologies I work with to build professional applications
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-md transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-purple-500/10 hover:scale-105 hover:shadow-cyan-500/20"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

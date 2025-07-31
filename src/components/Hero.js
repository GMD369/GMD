"use client";

import dynamic from "next/dynamic";
import { ArrowRight, Mail } from "lucide-react";

const Cube = dynamic(() => import("./Globe"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-10 overflow-visible"
    >
      {/* 🔵 Diagonal background glow from top-left */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-cyan-400/25 via-blue-400/20 to-transparent blur-[140px]"></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl w-full">
        {/* TEXT */}
        <div className="flex-1 text-center md:text-left space-y-5 font-pop">
          <span className=" p-8 inline-block rounded-full bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/50 px-4 py-1 text-[11px] sm:text-xs tracking-wide text-cyan-300 shadow-md backdrop-blur-sm hover:from-cyan-400/20 hover:via-blue-500/20 hover:to-purple-500/20 transition-all">
            Full-Stack Web Developer &nbsp;|&nbsp; MERN Stack &nbsp;|&nbsp; Next.js &nbsp;|&nbsp; Django &nbsp;|&nbsp; PostgreSQL &nbsp;|&nbsp; Automation
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-white">
            Hi, I&apos;m&nbsp;
            <span className="inline-block bg-[linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
              Ghulam Mohiyu Ud Din
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I&apos;m a dedicated full-stack web developer with a strong focus on building
            <strong> modern</strong>, <strong>responsive</strong>, and <strong>secure</strong> applications.
            From crafting robust backend APIs using <strong>Node.js</strong> and <strong>Django</strong>
            to developing scalable frontend interfaces with <strong>React</strong> and <strong>Next.js</strong>,
            I turn ideas into reality with clean code and pixel-perfect UI powered by
            <strong> Tailwind CSS</strong>, <strong>MongoDB</strong>, and <strong>PostgreSQL</strong>.
            I also integrate <strong>AI-powered solutions</strong> and <strong>workflow automations</strong>
            to make businesses more efficient.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
            {/* Contact Me Button (Globe Color) */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#003d66] via-[#005b99] to-[#007acc] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.04] hover:shadow-cyan-500/40"
            >
              <Mail size={16} /> Contact Me
            </a>

            {/* View Projects Button */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white shadow-md backdrop-blur-md transition-all hover:bg-white/10 hover:scale-[1.04]"
            >
              <ArrowRight size={16} /> View Projects
            </a>
          </div>
        </div>

        {/* Cube */}
        <div
          className="flex-1 relative w-full h-[260px] sm:h-[320px] md:h-[380px] 
          max-w-[280px] sm:max-w-[340px] md:max-w-[400px] overflow-visible"
        >
          <Cube />
        </div>
      </div>
    </section>
  );
}

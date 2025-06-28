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
        <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-transparent blur-[120px]"></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl w-full">
        {/* TEXT */}
        <div className="flex-1 text-center md:text-left space-y-5 font-pop">
          <span className="inline-block rounded-full border border-cyan-400/60 px-3 py-0.5 text-xs tracking-wide text-cyan-300">
            Full-Stack Developer | MERN | Django | PostgreSQL
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-white">
            Hi, I&apos;m&nbsp;
            <span className="inline-block bg-[linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
              Ghulam Mohiyu Ud Din
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I&apos;m a passionate full-stack web developer focused on building modern, responsive, and secure applications.
            From robust backend APIs in <strong>Node.js</strong> and <strong>Django</strong> to scalable frontend interfaces in <strong>React</strong> and <strong>Next.js</strong>,
            I bring ideas to life with clean code and elegant UI powered by <strong>Tailwind CSS</strong>, <strong>MongoDB</strong>, and <strong>PostgreSQL</strong>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 pt-1">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-xs sm:text-sm font-semibold text-black hover:from-cyan-500 hover:to-blue-600 transition"
            >
              <Mail size={14} /> Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              <ArrowRight size={14} /> View Projects
            </a>
          </div>
        </div>

        {/* Cube */}
        <div className="flex-1 relative min-w-[240px] w-full max-w-[360px] h-[300px] sm:h-[340px] md:h-[380px] overflow-visible">
          <Cube />
        </div>
      </div>
    </section>
  );
}

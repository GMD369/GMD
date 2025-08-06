"use client";


import dynamic from "next/dynamic";
import { ArrowRight, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const Cube = dynamic(() => import("./Globe"), { ssr: false });

export default function Hero() {
  const typeRef = useRef(null);

  useEffect(() => {
    if (!typeRef.current) return;
    const text = "Ghulam Mohiyu Ud Din";
    let i = 0;
    let timeout;
    function type() {
      if (i <= text.length) {
        typeRef.current.textContent = text.slice(0, i);
        i++;
        timeout = setTimeout(type, 90);
      }
    }
    type();
    return () => clearTimeout(timeout);
  }, []);

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
          <span className="relative flex items-center gap-1 sm:gap-2 pl-3 pr-4 py-1.5 sm:pl-4 sm:pr-6 sm:py-2 rounded-full bg-white/10 shadow-2xl border border-white/10 backdrop-blur-xl text-[10px] sm:text-base font-semibold tracking-wide text-white/90 overflow-hidden max-w-full">
            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-500 rounded-l-full sm:w-1.5"></span>
            <span className="relative z-10 flex items-center gap-1 sm:gap-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
              <span className="truncate">Full-Stack Web Developer <span className="text-cyan-400">|</span> MERN Stack <span className="text-cyan-400">|</span> Next.js <span className="text-cyan-400">|</span> Django <span className="text-cyan-400">|</span> PostgreSQL <span className="text-cyan-400">|</span> Automation</span>
            </span>
          </span>


          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-white">
            Hi, I&apos;m&nbsp;
            <span
              ref={typeRef}
              className="inline-block bg-[linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x whitespace-pre"
              aria-label="Ghulam Mohiyu Ud Din"
            ></span>
            <span className="text-cyan-400 animate-pulse">|</span>
          </h1>

          {/* Niche/USP Section */}
          <div className="mt-2 mb-2 text-left md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-700/80 via-blue-700/80 to-purple-700/80 shadow border border-cyan-400/20 text-xs sm:text-sm font-semibold text-cyan-200 mb-2">
              <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
             AI-Powered, Automated, & Scalable Web Solutions
            </div>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-cyan-100/90 space-y-1">
              <li>Full-Stack SaaS & Job Platforms (MERN, Next.js, Django)</li>
              <li>AI/ML Integrations & Automation Workflows</li>
              <li>Custom Dashboards, Admin Panels, Productivity Tools</li>
              <li>Modern UI/UX, Responsive & Secure Web Apps</li>
              <li>Database Engineering & Backend APIs</li>
            </ul>
          </div>

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

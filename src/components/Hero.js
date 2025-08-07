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
      className="relative min-h-[90vh] flex items-center justify-center px-2 sm:px-4 md:px-10 pt-8 overflow-visible"
    >
      {/* 🔵 Diagonal background glow from top-left */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-cyan-400/25 via-blue-400/20 to-transparent blur-[140px]"></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-10 md:gap-12 max-w-6xl w-full">
        {/* TEXT */}
        <div className="flex-1 text-center md:text-left space-y-4 sm:space-y-5 font-pop">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug text-white break-words">
            Hi, I&apos;m&nbsp;
            <span
              ref={typeRef}
              className="inline-block bg-[linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x whitespace-pre"
              aria-label="Ghulam Mohiyu Ud Din"
            ></span>
            <span className="text-cyan-400 animate-pulse">|</span>
          </h1>

          {/* Niche/USP Section */}
          <div className="mt-2 mb-2 text-center md:text-left w-full max-w-full mx-auto md:mx-0 overflow-visible">
            <div className="inline-flex flex-wrap items-center gap-1 sm:gap-2 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gradient-to-r from-cyan-700/80 via-blue-700/80 to-purple-700/80 shadow border border-cyan-400/20 text-xs sm:text-base font-semibold text-cyan-200 mb-1 sm:mb-2">
              AI-Powered, Automated, & Scalable Web Solutions
            </div>
            <ul className="list-disc pl-0 sm:pl-5 text-xs sm:text-base text-cyan-100/90 space-y-0.5 sm:space-y-1 break-words text-center md:text-left w-full">
              <li className="break-words">Full-Stack SaaS & Job Platforms</li>
              <li className="break-words">AI/ML & Automation Workflows</li>
              <li className="break-words">Dashboards, Admin Panels, Tools</li>
              <li className="break-words">Modern UI/UX, Secure Apps</li>
              <li className="break-words">Database & Backend APIs</li>
            </ul>
          </div>

          <p className="text-gray-300 text-xs sm:text-base leading-relaxed break-words">
            I help startups and businesses build modern, scalable, and AI-powered web solutions.<br />
            My expertise: SaaS platforms, automation workflows, dashboards, and secure APIs using MERN, Next.js, Django, and more.
          </p>

          <span className="relative flex flex-wrap items-center gap-x-1 gap-y-0.5 sm:gap-2 pl-2 pr-3 py-1 sm:pl-4 sm:pr-6 sm:py-2 rounded-full bg-white/10 shadow-2xl border border-white/10 backdrop-blur-xl text-xs sm:text-base font-semibold tracking-wide text-white/90 w-full max-w-full min-w-0 break-words">
            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-500 rounded-l-full sm:w-1.5"></span>
            <span className="relative z-10 flex flex-wrap gap-x-1 gap-y-0.5 sm:gap-2 w-full min-w-0 items-center">
              <span className="break-words gap-2 whitespace-normal flex items-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0 mr-2" style={{ display: 'inline', verticalAlign: 'middle' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
                <span className="ml-1">Full-Stack Web Developer</span>
                <span className="text-cyan-400">|</span> MERN Stack <span className="text-cyan-400">|</span> Next.js <span className="text-cyan-400">|</span> Django <span className="text-cyan-400">|</span> PostgreSQL <span className="text-cyan-400">|</span> Automation
              </span>
            </span>
          </span>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 pt-2">
            {/* Contact Me Button (Globe Color) */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#003d66] via-[#005b99] to-[#007acc] px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.04] hover:shadow-cyan-500/40"
            >
              <Mail size={16} /> Contact Me
            </a>

            {/* View Projects Button */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-md backdrop-blur-md transition-all hover:bg-white/10 hover:scale-[1.04]"
            >
              <ArrowRight size={16} /> View Projects
            </a>
          </div>
        </div>

        {/* Cube */}
        <div
          className="flex-1 relative w-full h-[220px] sm:h-[320px] md:h-[400px] max-w-[240px] sm:max-w-[340px] md:max-w-[520px] overflow-visible"
        >
          <Cube />
        </div>
      </div>
    </section>
  );
}

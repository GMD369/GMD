
"use client";
import React from "react";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink, Events } from "react-scroll";

const navItems = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Resume", to: "resume" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // Listen to scroll events to update active link
  React.useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur-lg shadow-lg font-grotesk border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <ScrollLink
          to="hero"
          smooth
          duration={500}
          offset={-80}
          className="relative select-none cursor-pointer flex items-center gap-2 group"
          onClick={() => setActive("hero")}
        >
          <span className="text-6xl font-black bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 bg-clip-text text-transparent drop-shadow-2xl transition group-hover:scale-110 group-hover:from-gray-600 group-hover:to-gray-900 tracking-tight flex items-end">
            <span>G</span>
            <span className="ml-1 mb-2 inline-block w-3 h-3 rounded-full animate-pulse shadow-lg bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800"></span>
          </span>
          <span className="font-[cursive] text-2xl text-gray-100 group-hover:text-white transition tracking-wide ml-1 drop-shadow-sm">
            Portfolio
          </span>
        </ScrollLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center space-x-2 text-white font-medium">
          {navItems.map(({ name, to }) => (
            <li key={to}>
              <ScrollLink
                to={to}
                smooth
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={() => setActive(to)}
                className={`cursor-pointer px-4 py-2 rounded-lg transition font-semibold text-base
                  ${active === to ? "bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 text-white shadow-md" : "hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-600 hover:to-gray-800 hover:text-white text-gray-200"}`}
              >
                {name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* CTA (desktop only) */}
          <a
            href="#contact"
            className="hidden sm:inline-block relative overflow-hidden rounded-xl px-6 py-2 text-base font-bold text-white shadow-lg transition-all duration-300 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 hover:from-gray-600 hover:to-gray-900 hover:scale-105 backdrop-blur-md group"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-sm"></span>
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              Get Started
            </span>
          </a>

          {/* Burger menu (mobile only) */}
          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* === Mobile Overlay === */}
      {open && (
        <div className="fixed inset-0 h-screen w-screen z-[999] md:hidden flex flex-col items-center justify-center gap-10 bg-black/95 backdrop-blur-lg">
          {navItems.map(({ name, to }) => (
            <ScrollLink
              key={to}
              to={to}
              smooth
              duration={500}
              offset={-80}
              spy={true}
              onSetActive={() => setActive(to)}
              onClick={() => setOpen(false)}
              className={`text-2xl font-semibold px-8 py-3 rounded-lg transition
                ${active === to ? "bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 text-white shadow-md" : "hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-600 hover:to-gray-800 hover:text-white text-white"}`}
            >
              {name}
            </ScrollLink>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="relative overflow-hidden rounded-xl px-10 py-4 text-xl font-bold text-white shadow-lg transition-all duration-300 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 hover:from-gray-600 hover:to-gray-900 hover:scale-105 backdrop-blur-md group"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-sm"></span>
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              Get Started
            </span>
          </a>
        </div>
      )}
    </nav>
  );
}

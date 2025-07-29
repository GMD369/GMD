"use client";

import { useState } from "react";
import { Menu, X, Moon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Resume", to: "resume" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur-md shadow-md font-grotesk">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        {/* Logo */}
        <div className="relative select-none text-2xl font-bold text-white">
          <span>G</span><span className="font-extrabold">.</span> Portfolio
          <div className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-cyan-400" />
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
          {navItems.map(({ name, to }) => (
            <li key={to}>
              <ScrollLink
                to={to}
                smooth
                duration={500}
                offset={-80}
                className="cursor-pointer transition hover:text-cyan-400"
              >
                {name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* <button className="rounded-full bg-[#1f1f1f]/80 p-2 text-white hover:bg-[#2a2a2a]/90">
            <Moon size={18} />
          </button> */}

          {/* CTA (desktop only) */}
          <a
            href="#contact"
            className="hidden sm:inline-block rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:from-cyan-500 hover:to-blue-600"
          >
            Get Started
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
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold text-white hover:text-cyan-400 transition"
            >
              {name}
            </ScrollLink>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-lg font-semibold text-black hover:from-cyan-500 hover:to-blue-600"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

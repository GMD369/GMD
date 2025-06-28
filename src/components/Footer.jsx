"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10 text-sm text-gray-400">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold text-xl mb-1">
            Ghulam Mohiyu Ud Din
          </h3>
          <p className="text-sm text-gray-400">
            Full-Stack Developer & AI Enthusiast
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-8 text-2xl">
          <a
            href="https://github.com/GMD369"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ghulam-mohiyu-ud-din-854026294/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Mohiyu_Ud_Din"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-xs">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

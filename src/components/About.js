"use client";

import { Briefcase, Code2, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative py-20 px-4 sm:px-8 md:px-12 lg:px-24 font-pop text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row">
        {/* ─── Avatar ─── */}
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-cyan-400/30 shadow-2xl bg-gradient-to-br from-[#1f2937] to-[#0f172a]">
          <Image
            src="/IMG_4009.jpg"
            alt="Profile"
            fill
            className="h-full w-full object-cover rounded-3xl hover:scale-105 transition-all duration-500"
            priority
          />
        </div>

        {/* ─── Text ─── */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          {/* Title */}
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <motion.span
              className="absolute inset-0 -z-10 blur-xl opacity-60 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(3,169,244,0.3) 0%, transparent 70%)",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I&apos;m{" "}
            <span className="font-semibold text-white">Ghulam Mohiyu Ud Din</span>, a{" "}
            <span className="font-semibold text-cyan-300">Full-Stack Web Developer</span>{" "}
            from Pakistan with <strong>2+ years</strong> of experience in building{" "}
            <strong>responsive</strong>, <strong>secure</strong>, and
            <strong> scalable</strong> web applications.
            I craft solutions using{" "}
            <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>,
            and <strong>Django</strong>, backed by
            <strong> PostgreSQL</strong> & <strong>MongoDB</strong>.
            Skilled at creating high-performance UI/UX with
            <strong> Tailwind CSS</strong> and integrating{" "}
            <strong>AI-powered solutions</strong> & <strong>automations</strong>
            to enhance efficiency.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
            <StatCard
              icon={<Briefcase size={28} className="mb-2 text-cyan-400" />}
              value="10+"
              label="Projects"
              color="text-cyan-300"
            />
            <StatCard
              icon={<Code2 size={28} className="mb-2 text-purple-300" />}
              value="2+ Years"
              label="Experience"
              color="text-purple-300"
            />
            <StatCard
              icon={<BrainCircuit size={28} className="mb-2 text-pink-300" />}
              value="Full Stack"
              label="Specialty"
              color="text-pink-300"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ─── Stat Card Component ─── */
function StatCard({ icon, value, label, color }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:scale-105 hover:shadow-md hover:shadow-cyan-500/10">
      {icon}
      <span className={`text-xl font-bold ${color}`}>{value}</span>
      <span className="text-xs uppercase tracking-wide text-gray-400">{label}</span>
    </div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SkillBridge — Job Platform",
    description: "Full‑stack MERN application with role‑based auth, file uploads and admin dashboard.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    live: "https://job-web-app-tau.vercel.app/",
    code: "https://github.com/GMD369/Job-Web-App",
    image: "/job.png",
  },
  {
    title: "Twitter UI Clone (X.com)",
    description: "A responsive frontend clone of Twitter (X.com) built using Tailwind CSS and vanilla JavaScript.",
    tech: ["Tailwind CSS", "HTML5", "JavaScript"],
    live: "https://twitter-clone3.netlify.app/",
    code: "https://github.com/GMD369/Twiiter-clone",
    image: "/twitter.png",
  },
  {
    title: "Netflix UI Clone",
    description: "A responsive static clone of Netflix's homepage layout designed using HTML5 and CSS3.",
    tech: ["HTML", "CSS"],
    live: "https://netflix-clone-git-master-ghulam-mohiyu-ud-dins-projects.vercel.app/",
    code: "https://github.com/GMD369/Netflix_Clone",
    image: "/netflix.png",
  },
  {
    title: "Password Manager Browser",
    description: "A full-stack MERN password manager with secure UI and backend validation.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    live: "https://passwordmanagerbrowser.netlify.app/",
    code: "https://github.com/GMD369/Passwords_Manager_Project",
    image: "/pass.png",
  },
  {
    title: "Todo App",
    description: "A full-stack productivity app with persistent task storage.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    live: "https://todoappbrowser.netlify.app/",
    code: "https://github.com/GMD369/Todo-App",
    image: "/todo.png",
  },
  {
    title: "AI Customer Segmentation",
    description: "ML pipeline to segment customers for marketing.",
    tech: ["Python", "Pandas", "Scikit‑Learn"],
    live: "#",
    code: "https://github.com/GMD369/AI-CustomerSegmentation",
    image: "/Customer.png",
  },
  {
    title: "Relational Database Management System",
    description: "Custom RDBMS with CRUD and SQL execution (Flask + SQLite).",
    tech: ["Flask", "Python", "Jinja2", "SQLite"],
    live: "",
    code: "https://github.com/GMD369/RelationalDB",
    image: "/rdbms.png",
  },
  {
    title: "Blog Application",
    description: "RESTful blog platform with authentication (DRF).",
    tech: ["Django REST Framework", "Python", "SQLite"],
    live: "",
    code: "https://github.com/GMD369/Blog-DRF",
    image: "/blog.png",
  },
  {
    title: "Hospital Management System – HealthWave",
    description: "Console-based C++ app managing patients and billing.",
    tech: ["C++", "File Handling", "OOP"],
    live: "",
    code: "https://github.com/GMD369/HMS",
    image: "/Heal.png",
  },
  {
    title: "Clinic Management System",
    description: "Desktop app with C# Windows Forms for patient data.",
    tech: ["C#", ".NET", "Windows Forms"],
    live: "",
    code: "https://github.com/GMD369/CMS",
    image: "/Doctor.png",
  },
  {
    title: "Car Obstacle Game",
    description: "Console-based 2D car game in C++ with ASCII graphics.",
    tech: ["C++", "OOP", "ASCII Graphics"],
    live: "",
    code: "https://github.com/GMD369/Console_Car_Game",
    image: "/car.png",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="relative py-20 px-4 sm:px-8 md:px-12 lg:px-24 font-pop text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* 🔥 Animated Title */}
      <div className="mb-14 text-center">
        <h2 className="relative inline-block text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-white bg-clip-text text-transparent">
          Projects
          <span
            className="pointer-events-none absolute inset-0 -z-10 blur-xl opacity-60 animate-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(3,169,244,0.5) 0%, transparent 70%)",
            }}
          />
          <span
            className="pointer-events-none absolute inset-0 -z-20 blur-3xl opacity-40 animate-ping"
            style={{
              background:
                "radial-gradient(circle, rgba(0,212,255,0.35) 0%, transparent 60%)",
            }}
          />
        </h2>
      </div>

      {/* 📱 Responsive Grid (1‑2‑3 columns) */}
      <motion.div
        className="mx-auto grid max-w-6xl gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-cyan-500/30"
          >
            {/* 📸 Thumbnail */}
            {p.image ? (
              <div className="relative w-full pt-[56.25%]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ) : (
              <div className="h-48 w-full bg-gradient-to-br from-cyan-600/40 to-blue-800/40" />
            )}

            {/* 📝 Content */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-gray-300">{p.description}</p>

              {/* 💻 Tech stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-xs text-cyan-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* 🔗 Buttons */}
              <div className="mt-6 flex gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl bg-cyan-600 py-2 text-center text-sm font-medium transition-colors hover:bg-cyan-700"
                >
                  Live
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl bg-gray-700 py-2 text-center text-sm font-medium transition-colors hover:bg-gray-800"
                >
                  Code
                </a>
              </div>
            </div>

            {/* ✨ Hover glow */}
            <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-40 group-hover:bg-gradient-to-br group-hover:from-transparent group-hover:via-transparent group-hover:to-cyan-500" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

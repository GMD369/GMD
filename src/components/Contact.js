"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-8 md:px-12 lg:px-24 font-pop text-white"
    >
      {/* ───── Title with Fire Glow ───── */}
      <div className="text-center mb-12">
        <h2 className="relative inline-block text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-white bg-clip-text text-transparent">
          Contact
          <span
            className="pointer-events-none absolute inset-0 -z-10 blur-xl opacity-60 animate-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 70%)",
            }}
          />
          <span
            className="pointer-events-none absolute inset-0 -z-20 blur-3xl opacity-40 animate-ping"
            style={{
              background:
                "radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 60%)",
            }}
          />
        </h2>
      </div>

      {/* ───── Contact Form ───── */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 space-y-6 shadow-xl"
      >
        <div>
          <label className="block text-gray-300 mb-1 text-sm">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1 text-sm">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="What's on your mind?"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-transform transform hover:scale-105 font-semibold shadow-lg"
        >
          ✉️ Send Message
        </button>

        {status && (
          <p className="text-center text-sm text-gray-300 mt-2">{status}</p>
        )}
      </form>
    </section>
  );
}

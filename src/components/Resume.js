export default function Resume() {
  return (
    <section
      id="resume"
      className="relative py-20 px-4 sm:px-8 md:px-12 lg:px-24 font-pop text-white text-center"
    >
      {/* ===== Fire-Glowing Title ===== */}
      <div className="mb-12">
        <h2 className="relative inline-block text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-white bg-clip-text text-transparent">
          Resume
          {/* Blue aura pulse */}
          <span
            className="pointer-events-none absolute inset-0 -z-10 blur-xl opacity-60 animate-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 70%)",
            }}
          />
          {/* Outer soft ring flicker */}
          <span
            className="pointer-events-none absolute inset-0 -z-20 blur-3xl opacity-40 animate-ping"
            style={{
              background:
                "radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 60%)",
            }}
          />
        </h2>
      </div>

      {/* ===== Description ===== */}
      <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
        Take a look at my resume highlighting my experience, education, and core skills. Click the button below to preview it.
      </p>

      {/* ===== Preview Button Only ===== */}
      <a
        href="/Resume-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-7 py-3 text-sm sm:text-base font-medium rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-transform transform hover:scale-105 text-white shadow-lg"
      >
        Preview Resume
      </a>
    </section>
  );
}

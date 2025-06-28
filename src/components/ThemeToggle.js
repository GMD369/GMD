"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Optional: you can use react-icons or emoji

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-white/10 border border-white/20 hover:scale-110 transition"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-500" />}
    </button>
  );
}

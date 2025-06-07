"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        // className="fixed top-[74px] right-2 z-50 px-3 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg"
        // className="fixed top-4 right-4 z-50 px-3 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg"
        className="sm:text-sm md:text-base text-xl px-2 py-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? "☀ Light" : "🌙 Dark"}
      </button>
      {/* {children} */}
    </>
  );
}

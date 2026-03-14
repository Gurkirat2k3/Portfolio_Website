import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;

    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }

    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}   
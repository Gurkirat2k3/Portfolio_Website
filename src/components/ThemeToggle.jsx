import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="fixed top-8 left-8 z-[9999]">
      <button
        onClick={() => setDark(!dark)}
        className="
          relative w-20 h-10 rounded-full
          bg-black/10 dark:bg-white/10
          backdrop-blur-xl
          border border-black/10 dark:border-white/20
          flex items-center
          px-1
        "
      >
        {/* Sliding Knob */}
        <motion.div
          className="absolute w-8 h-8 rounded-full bg-white dark:bg-black shadow-md"
          animate={{ x: dark ? 40 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />

        {/* Sun */}
        <motion.span
          className="absolute left-2 text-yellow-500 text-sm"
          animate={{
            rotate: dark ? 90 : 0,
            scale: dark ? 0 : 1,
            opacity: dark ? 0 : 1
          }}
          transition={{ duration: 0.4 }}
        >
          ☀️
        </motion.span>

        {/* Moon */}
        <motion.span
          className="absolute right-2 text-white text-sm"
          animate={{
            rotate: dark ? 0 : -90,
            scale: dark ? 1 : 0,
            opacity: dark ? 1 : 0
          }}
          transition={{ duration: 0.4 }}
        >
          🌙
        </motion.span>
      </button>
    </div>
  );
}
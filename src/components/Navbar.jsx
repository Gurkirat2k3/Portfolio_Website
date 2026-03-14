import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const sections = [
    "hero",
    "skills",
    "experience",
    "projects",
    "certificates",
    "contact"
  ];

  const [active, setActive] = useState("hero");
  const [hovered, setHovered] = useState(null);

  const current = hovered || active;

  const scrollToSection = (id) => {
    const section = document.querySelector(`#${id}`);
    if (!section) return;

    const yOffset = -120;
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let sec of sections) {
        const element = document.getElementById(sec);
        if (!element) continue;

        if (
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActive(sec);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 right-6 z-50
                 bg-white/60 dark:bg-white/10
                 backdrop-blur-xl
                 border border-black/10 dark:border-white/20
                 shadow-md dark:shadow-none
                 px-6 py-3 rounded-full
                 flex gap-2 text-sm
                 transition-colors duration-500"
    >
      {sections.map((sec) => (
        <motion.button
          key={sec}
          onClick={() => scrollToSection(sec)}
          onHoverStart={() => setHovered(sec)}
          onHoverEnd={() => setHovered(null)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="relative px-4 py-2 rounded-full font-medium capitalize"
        >
          {current === sec && (
            <motion.div
              layoutId="navSlider"
              transition={{
                type: "spring",
                stiffness: 360,
                damping: 26,
                mass: 0.9
              }}
              className="absolute inset-0 rounded-full overflow-hidden"
            >
              {/* Glass Gradient Base */}
              <div
                className="
                  absolute inset-0 rounded-full
                  bg-gradient-to-r
                  from-black/10 via-black/20 to-black/10
                  dark:from-white/20 dark:via-white/30 dark:to-white/20
                  backdrop-blur-md
                "
              />

              {/* Glow Pulse */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(0,0,0,0)",
                    "0 0 25px rgba(0,0,0,0.15)",
                    "0 0 0px rgba(0,0,0,0)"
                  ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Shimmer Sweep */}
              <motion.div
                className="
                  absolute top-0 left-[-100%] h-full w-1/2
                  bg-gradient-to-r
                  from-transparent via-white/40 to-transparent
                  dark:via-white/20
                  skew-x-12
                "
                animate={{ left: ["-100%", "150%"] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          )}

          <motion.span
            className="relative z-10"
            animate={{
              scale: current === sec ? 1.08 : 1,
              fontWeight: current === sec ? 600 : 500
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {sec}
          </motion.span>
        </motion.button>
      ))}
    </motion.nav>
  );
}
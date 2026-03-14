import { motion } from "framer-motion";

export default function TiltCard({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 30,
        mass: 0.4
      }}
      className="
  bg-white/60 dark:bg-white/10
  backdrop-blur-xl
  border border-black/10 dark:border-white/20
  shadow-md dark:shadow-none
  rounded-2xl
  p-8
  transition-colors duration-500
"
    >
      {children}
    </motion.div>
  );
}
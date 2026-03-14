import { motion } from "framer-motion";

export default function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    >
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        src={image}
        alt="Preview"
        className="max-h-[80vh] rounded-2xl"
      />
    </div>
  );
}
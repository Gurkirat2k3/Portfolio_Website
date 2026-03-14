import { useEffect, useState } from "react";

export default function CursorMagnet() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed w-64 h-64 bg-purple-500 opacity-20 blur-3xl rounded-full pointer-events-none transition-transform duration-200"
      style={{
        transform: `translate(${pos.x - 128}px, ${pos.y - 128}px)`
      }}
    />
  );
}
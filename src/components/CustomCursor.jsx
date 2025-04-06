import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  useEffect(() => {
    const moveCursor = (e) => {
      const target = e.target.closest(".magnetic, a, button, .cursor-pointer");
      if (target) {
        setHovering(true);
        const rect = target.getBoundingClientRect();
        const targetX = rect.left + rect.width / 2;
        const targetY = rect.top + rect.height / 2;

        // Smooth magnetic pull toward center of element
        const diffX = (targetX - e.clientX) * 0.2;
        const diffY = (targetY - e.clientY) * 0.2;

        mouseX.set(e.clientX + diffX);
        mouseY.set(e.clientY + diffY);
      } else {
        setHovering(false);
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className={`pointer-events-none fixed z-[9999] top-0 left-0 rounded-full 
          ${hovering ? "bg-white scale-150" : "bg-cyan-400 scale-100"} 
          transition-all duration-300`}
        style={{
          x: springX,
          y: springY,
          width: 20,
          height: 20,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Glow Trail */}
      <motion.div
        className="pointer-events-none fixed z-[9998] top-0 left-0 w-32 h-32 
        rounded-full bg-cyan-400 opacity-20 blur-3xl"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default CustomCursor;

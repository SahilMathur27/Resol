"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function BlendCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, {
    damping: 25,
    stiffness: 250,
    mass: 0.5,
  });

  const springY = useSpring(cursorY, {
    damping: 25,
    stiffness: 250,
    mass: 0.5,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 40);
      cursorY.set(e.clientY - 40);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[99999]
        hidden
        h-20
        w-20
        rounded-full
        md:block
      "
      style={{
        x: springX,
        y: springY,
        backgroundColor: "rgba(255,255,255,0.85)",
        mixBlendMode: "difference",
      }}
    />
  );
}
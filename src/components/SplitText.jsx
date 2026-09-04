"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SplitText({
  text,
  className = "",
  delay = 0,
}) {
  const headingRef = useRef(null);

  useEffect(() => {
    const words = headingRef.current.querySelectorAll(".split-word");

    gsap.fromTo(
      words,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: delay,
        stagger: 0.12,
        ease: "power4.out",
      }
    );
  }, [delay]);

  return (
    <h2
      ref={headingRef}
      className={`overflow-hidden ${className}`}
      aria-label={text}
    >
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className="split-word mr-[0.25em] inline-block"
        >
          {word}
        </span>
      ))}
    </h2>
  );
}
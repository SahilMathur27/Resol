"use client";

import { useCallback, useEffect, useRef } from "react";

const clamp = (value, min, max) => {
  return value < min ? min : value > max ? max : value;
};

const smoothstep = (edge0, edge1, value) => {
  const t = clamp(
    (value - edge0) / (edge1 - edge0 || 0.000001),
    0,
    1
  );

  return t * t * (3 - 2 * t);
};

export default function Cta() {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const hintRef = useRef(null);
  const scrimRef = useRef(null);

  const applyProgress = useCallback((progress) => {
    const frame = frameRef.current;
    const video = videoRef.current;

    if (!frame || !video) return;

    const ease = smoothstep(0, 1, progress);

    // Starting Size
    const startWidth = 42;
    const startHeight = 58;

    // Expand to Full Screen
    const width = startWidth + (100 - startWidth) * ease;
    const height = startHeight + (100 - startHeight) * ease;

    const insetX = Math.max(0, (100 - width) / 2);
    const insetY = Math.max(0, (100 - height) / 2);

    // Border Radius Animation
    const radius = 24 + (0 - 24) * ease;

    frame.style.clipPath = `
      inset(
        ${insetY}% 
        ${insetX}% 
        ${insetY}% 
        ${insetX}% 
        round ${radius}px
      )
    `;

    // Video Zoom Out
    const videoScale = 1.35 + (1 - 1.35) * ease;
    video.style.transform = `scale(${videoScale})`;

    // Dark Overlay
    if (scrimRef.current) {
      scrimRef.current.style.opacity = `${0.45 * ease}`;
    }

    // Main Title Hide
    if (titleRef.current) {
      const titleProgress = smoothstep(0.4, 0.88, progress);

      titleRef.current.style.opacity = `${1 - titleProgress}`;

      titleRef.current.style.transform = `
        translate3d(0, ${-30 * titleProgress}px, 0)
        scale(${1 + 0.06 * titleProgress})
      `;
    }

    // Scroll Hint Hide
    if (hintRef.current) {
      const hintProgress = smoothstep(0, 0.12, progress);

      hintRef.current.style.opacity = `${1 - hintProgress}`;

      hintRef.current.style.transform = `
        translate3d(0, ${10 * hintProgress}px, 0)
      `;
    }

    // Content Show
    if (contentRef.current) {
      const contentProgress = smoothstep(0.68, 1, progress);

      contentRef.current.style.opacity = `${contentProgress}`;

      contentRef.current.style.transform = `
        translate3d(0, ${25 * (1 - contentProgress)}px, 0)
      `;
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;

    if (!track || !stage) return;

    let animationFrame;
    let current = 0;
    let target = 0;
    let stageHeight = 0;
    let isRunning = false;

    const scrollDistance = 1.2;
    const holdDistance = 0.35;
    const smoothing = 0.1;

    const measure = () => {
      stageHeight = window.innerHeight;

      stage.style.height = `${stageHeight}px`;

      track.style.height = `${
        stageHeight * (1 + scrollDistance + holdDistance)
      }px`;

      const width = window.innerWidth;

      stage.style.setProperty(
        "--title-size",
        `${clamp(width * 0.075, 24, 84)}px`
      );
    };

    const getProgress = () => {
      const scrollSpan = stageHeight * scrollDistance;

      const trackTop = track.getBoundingClientRect().top;

      return clamp(-trackTop / scrollSpan, 0, 1);
    };

    const animate = () => {
      const smoothingFactor =
        1 - Math.exp(-1 / (60 * smoothing));

      current += (target - current) * smoothingFactor;

      if (Math.abs(target - current) < 0.0004) {
        current = target;
        isRunning = false;
      }

      applyProgress(current);

      if (isRunning) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const startAnimation = () => {
      if (isRunning) return;

      isRunning = true;

      animationFrame = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      target = getProgress();
      startAnimation();
    };

    const handleResize = () => {
      measure();

      target = getProgress();
      current = target;

      applyProgress(current);
    };

    measure();

    target = getProgress();
    current = target;

    applyProgress(current);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    const resizeObserver = new ResizeObserver(handleResize);

    if (rootRef.current) {
      resizeObserver.observe(rootRef.current);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      resizeObserver.disconnect();
    };
  }, [applyProgress]);

  return (
    <section
      ref={rootRef}
      className="relative w-full bg-[#0b0b0b]"
    >
      <div ref={trackRef} className="relative w-full">
        {/* Sticky Full Screen Section */}
        <div
          ref={stageRef}
          className="sticky top-0 w-full overflow-hidden [--title-size:4rem]"
        >
          {/* Expandable Video */}
          <div
            ref={frameRef}
            className="absolute inset-0 overflow-hidden [clip-path:inset(21%_29%_21%_29%_round_24px)] [will-change:clip-path]"
          >
            {/* Video */}
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full origin-center object-cover [will-change:transform]"
              src="/13753874_1280_720_25fps.mp4"
              poster="/images/chemical-banner.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />

            {/* Dark Gradient Overlay */}
            <div
              ref={scrimRef}
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.15)_50%,rgba(0,0,0,0.35))] opacity-0"
            />

            {/* Content Appears After Expansion */}
            <div
              ref={contentRef}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white opacity-0 [will-change:opacity,transform]"
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#d4af37] md:text-base">
                Chemical Solutions
              </p>

              <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Powering Industries With
                <span className="block text-[#d4af37]">
                  Quality & Innovation
                </span>
              </h2>

            </div>
          </div>

          {/* Starting Center Title */}
          <div
            ref={titleRef}
            className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center font-bold leading-none tracking-[-0.03em] text-white [font-size:var(--title-size)] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)] [will-change:opacity,transform]"
          >
            Your Trusted Chemical
            <br />
            <span className="text-[#d4af37]">Solutions Partner</span>
          </div>

          {/* Scroll Text */}
          <div
            ref={hintRef}
            className="pointer-events-none absolute inset-x-0 bottom-8 text-center text-xs uppercase tracking-[0.25em] text-white/60 [will-change:opacity,transform]"
          >
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const materials = [
  "PVC RESIN",
  "CALCIUM CARBONATE",
  "EVA RESIN",
  "PET RESIN",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function AboutUs() {
  /* =====================================================
     SECTION REF
  ===================================================== */

  const sectionRef = useRef(null);

  /* =====================================================
     SCROLL ANIMATION
  ===================================================== */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white text-black"
    >
      {/* =====================================================
          BACKGROUND SVG
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.045]"
        aria-hidden="true"
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Technical Grid */}
            <pattern
              id="resol-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="#D4A017"
                strokeWidth="1"
              />

              <circle
                cx="0"
                cy="0"
                r="2"
                fill="#D4A017"
              />
            </pattern>

            {/* Gold Glow */}
            <radialGradient id="resol-glow">
              <stop
                offset="0%"
                stopColor="#D4A017"
                stopOpacity="0.18"
              />

              <stop
                offset="70%"
                stopColor="#D4A017"
                stopOpacity="0.04"
              />

              <stop
                offset="100%"
                stopColor="#D4A017"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>

          {/* Grid */}
          <rect
            width="1200"
            height="800"
            fill="url(#resol-grid)"
          />

          {/* Top Right Glow */}
          <ellipse
            cx="950"
            cy="180"
            rx="420"
            ry="280"
            fill="url(#resol-glow)"
          />

          {/* Bottom Left Glow */}
          <ellipse
            cx="180"
            cy="650"
            rx="350"
            ry="250"
            fill="url(#resol-glow)"
          />
        </svg>
      </div>

      {/* =====================================================
          TOP EDITORIAL HEADER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 pb-16 pt-24 sm:px-8 md:px-12 md:pb-15 md:pt-8 lg:px-16 lg:pt-10">
        <div className="flex items-start justify-between">
          {/* SMALL LABEL */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#D4A017]" />

            <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#D4A017]">
              About Resol
            </span>
          </motion.div>
        </div>

        {/* HUGE TITLE */}

        <div className="relative mt-8 md:mt-6">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              select-none
              text-[16vw]
              font-black
              uppercase
              leading-[0.72]
              tracking-[-0.08em]
              text-black
              sm:text-[15vw]
              md:text-[14vw]
              lg:text-[13vw]
            "
          >
            RESOL
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              z-10
              ml-[8%]
              mt-3
              flex
              items-center
              gap-4
              md:ml-[18%]
              md:mt-6
            "
          >
            <span className="h-[2px] w-10 bg-[#D4A017] md:w-20" />

            <span
              className="
                text-[9vw]
                font-light
                uppercase
                leading-none
                tracking-[-0.06em]
                text-[#D4A017]
                sm:text-[8vw]
                md:text-[7vw]
              "
            >
              Industries
            </span>
          </motion.div>

          {/* FLOATING YEAR */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="
              absolute
              right-[4%]
              top-[32%]
              hidden
              h-28
              w-28
              items-center
              justify-center
              border
              border-black/10
              md:flex
              lg:h-36
              lg:w-36
            "
          >
            <div className="text-center">
              <span className="block text-[11px] uppercase tracking-[3px] text-black/40">
                Established
              </span>

              <span className="mt-2 block text-3xl font-black lg:text-4xl">
                2005
              </span>
            </div>
          </motion.div>
        </div>
      </div>

     {/* =====================================================
    MATERIAL MARQUEE — SEAMLESS INFINITE LOOP
===================================================== */}

<div className="relative z-10 overflow-hidden border-y border-black/10 py-5">
  <motion.div
    className="flex w-max"
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
      x: {
        duration: 25,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    }}
  >
    {/* FIRST SET */}
    <div className="flex shrink-0">
      {materials.map((item, index) => (
        <div
          key={`first-${index}`}
          className="flex shrink-0 items-center"
        >
          <span className="mx-3 text-[15px] font-bold uppercase tracking-[3px] text-black/50 md:mx-7">
            {item}
          </span>

          <span className="h-1.5 w-1.5 shrink-0 bg-[#D4A017]" />
        </div>
      ))}
    </div>

    {/* SECOND IDENTICAL SET */}
    <div className="flex shrink-0">
      {materials.map((item, index) => (
        <div
          key={`second-${index}`}
          className="flex shrink-0 items-center"
        >
          <span className="mx-3 text-[15px] font-bold uppercase tracking-[3px] text-black/50 md:mx-7">
            {item}
          </span>

          <span className="h-1.5 w-1.5 shrink-0 bg-[#D4A017]" />
        </div>
      ))}
    </div>
  </motion.div>
</div>
      {/* =====================================================
          MAIN STORY
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 pb-13 pt-16 sm:px-8 md:px-12 md:pb-15 md:pt-20 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
          {/* =================================================
              LEFT INDEX
          ================================================= */}

          <div className="hidden lg:col-span-1 lg:block">
            <div className="sticky top-32">
              <div className="flex flex-col items-center">
                <span className="text-[11px] font-bold tracking-[3px] text-[#D4A017]">
                  01
                </span>

                <div className="mt-6 h-28 w-px bg-black/15" />

                <span
                  className="
                    mt-6
                    [writing-mode:vertical-rl]
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[4px]
                    text-black/30
                  "
                >
                  Who We Are
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              IMAGE COMPOSITION
          ================================================= */}

          <div className="relative lg:col-span-6">
            <motion.div
              style={{ y: imageY }}
              className="relative"
            >
              {/* MAIN IMAGE */}

              <div
                className="
                  relative
                  h-[500px]
                  overflow-hidden
                  bg-[#e9e9e7]
                  sm:h-[600px]
                  md:h-[680px]
                "
              >
                <Image
                  src="/factory (1).webp"
                  alt="Resol Industries"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="
                    object-cover
                    transition-transform
                    duration-[1800ms]
                    hover:scale-[1.035]
                  "
                />

                {/* IMAGE GRADIENT */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                {/* TOP IMAGE LABEL */}

                <div className="absolute left-6 top-6 md:left-8 md:top-8">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-[#D4A017]" />

                    <span className="text-[8px] font-bold uppercase tracking-[4px] text-white/80">
                      New Delhi · India
                    </span>
                  </div>
                </div>

                {/* BOTTOM IMAGE CONTENT */}

                <div className="absolute bottom-7 left-6 right-6 md:bottom-9 md:left-8 md:right-8">
                  <span className="block text-[9px] font-bold uppercase tracking-[4px] text-[#D4A017]">
                    Industrial Material Solutions
                  </span>

                  <div className="mt-3 h-px w-full bg-white/20" />

                  <div className="mt-4 flex items-end justify-between">
                    <span className="text-xs font-medium uppercase tracking-[2px] text-white/90">
                      Sourcing · Distribution · Trust
                    </span>

                    <span className="text-[9px] uppercase tracking-[2px] text-white/50">
                      2005 — Present
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING YEAR BLOCK
              ================================================= */}

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                }}
                className="
                  absolute
                  -right-4
                  -top-5
                  z-20
                  flex
                  h-28
                  w-28
                  flex-col
                  items-center
                  justify-center
                  bg-black
                  md:-right-8
                  md:-top-8
                  md:h-36
                  md:w-36
                "
              >
                <span className="text-[8px] uppercase tracking-[3px] text-white/40">
                  Established
                </span>

                <span className="mt-2 text-3xl font-black tracking-[-2px] text-white md:text-4xl">
                  2005
                </span>

                <span className="mt-1 h-px w-7 bg-[#D4A017]" />
              </motion.div>

              {/* GOLD CORNER */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-7
                  -left-4
                  h-24
                  w-24
                  border-b
                  border-l
                  border-[#D4A017]
                  md:-bottom-10
                  md:-left-6
                  md:h-36
                  md:w-36
                "
              />
            </motion.div>
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <motion.div
            style={{ y: textY }}
            className="
              relative
              mt-16
              flex
              flex-col
              justify-center
              lg:col-span-5
              lg:mt-0
              lg:pl-12
            "
          >
            {/* VERTICAL GOLD LINE */}

            <div className="absolute -left-1 top-0 hidden h-full w-px bg-black/10 lg:block">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "35%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                }}
                className="w-full bg-[#D4A017]"
              />
            </div>

            {/* EYEBROW */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3"
            >
              <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#D4A017]">
                Who We Are
              </span>
            </motion.div>

            {/* HEADING */}

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-6
                max-w-xl
                text-4xl
                font-medium
                leading-[0.95]
                tracking-[-2.5px]
                sm:text-5xl
                md:text-6xl
                lg:text-[57px]
              "
            >
              <span className="text-[#D4A017]">
                PVC Resin & Calcium Carbonate
              </span>

              <br />

              Importer
            </motion.h2>

            {/* DESCRIPTION */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="
                mt-9
                max-w-lg
                space-y-5
                text-sm
                leading-7
                text-black/60
                md:text-[15px]
                md:leading-8
              "
            >
              <p>
                Resol Industries Ltd. (RIL) is a trusted PVC Resin importer
                and distributor based in New Delhi, India. Established in
                2005, we have built our business around dependable sourcing,
                consistent quality and long-term customer relationships.
              </p>

              <p>
                We import and distribute PVC Resin, Calcium Carbonate and
                other industrial materials to customers across India,
                supporting manufacturers across diverse industrial sectors.
              </p>

              <p>
                Our sourcing network connects customers with dependable
                material solutions while maintaining a strong focus on
                quality, service and timely distribution.
              </p>
            </motion.div>

            {/* SIGNATURE LINE */}

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              className="mt-10 h-px max-w-lg bg-black/15"
            />

            {/* SIGNATURE */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="mt-5 flex max-w-lg items-center justify-between"
            >
              <span className="text-[9px] font-bold uppercase tracking-[3px] text-black/40">
                Resol Industries Ltd.
              </span>

              <span className="text-[9px] uppercase tracking-[3px] text-black/30">
                Since 2005
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STAT COMPONENT
========================================================= */

function Stat({ number, label }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        border-b
        border-white/10
        px-4
        py-8
        first:border-l-0
        md:border-b-0
        md:border-l
        md:px-8
        lg:px-10
      "
    >
      <span className="block text-4xl font-black tracking-[-2px] text-white md:text-5xl lg:text-6xl">
        {number}
      </span>

      <span className="mt-3 block text-[8px] font-semibold uppercase tracking-[3px] text-white/40 md:text-[9px]">
        {label}
      </span>
    </motion.div>
  );
}
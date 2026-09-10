"use client";

import Image from "next/image";
import Link from "next/link";
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
  const sectionRef = useRef(null);

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
          TOP EDITORIAL HEADER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1600px] px-5 pb-16 pt-24 sm:px-8 md:px-12 md:pb-24 md:pt-8 lg:px-16 lg:pt-10">

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

          {/* INDEX */}

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden text-[10px] font-semibold tracking-[3px] text-black/30 md:block"
          >
            RIL / 01
          </motion.span>
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
              <span className="block text-[9px] uppercase tracking-[3px] text-black/40">
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
          MATERIAL MARQUEE
      ===================================================== */}

      <div className="relative overflow-hidden border-y border-black/10 py-5">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max"
        >
          {[...materials, ...materials].map((item, index) => (
            <div
              key={index}
              className="flex items-center"
            >
              <span className="mx-6 text-[10px] font-bold uppercase tracking-[3px] text-black/50 md:mx-10">
                {item}
              </span>

              <span className="h-1.5 w-1.5 bg-[#D4A017]" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* =====================================================
          MAIN STORY
      ===================================================== */}

      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:px-12 md:py-15 lg:px-16 lg:py-15">

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-10">

          {/* LEFT NUMBER */}

          <div className="hidden lg:col-span-1 lg:block">
            <div className="sticky top-32">
              <span className="text-[10px] font-bold tracking-[3px] text-[#D4A017]">
                01
              </span>

              <div className="mt-5 h-24 w-px bg-black/15" />

              <span
                className="
                  mt-5
                  block
                  [writing-mode:vertical-rl]
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[4px]
                  text-black/35
                "
              >
                Our Story
              </span>
            </div>
          </div>

          {/* IMAGE AREA */}

          <div className="relative lg:col-span-6">

            <motion.div
              style={{ y: imageY }}
              className="relative"
            >
              {/* IMAGE */}

              <div className="relative h-[470px] overflow-hidden bg-[#e9e9e7] sm:h-[600px] md:h-[680px]">

                <Image
                  src="/About/about-us-4.webp"
                  alt="Resol Industries"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="
                    object-cover
                    transition-transform
                    duration-[1800ms]
                    hover:scale-[1.04]
                  "
                />

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                {/* IMAGE LABEL */}

                <div className="absolute bottom-0 left-0 p-6 md:p-8">

                  <span className="block text-[9px] font-semibold uppercase tracking-[4px] text-[#D4A017]">
                    New Delhi · India
                  </span>

                  <span className="mt-2 block text-sm font-medium uppercase tracking-[2px] text-white">
                    Industrial Material Solutions
                  </span>

                </div>

              </div>

              {/* GOLD OFFSET FRAME */}

              <div className="pointer-events-none absolute -bottom-5 -right-5 h-32 w-32 border-b border-r border-[#D4A017] md:-bottom-8 md:-right-8 md:h-44 md:w-44" />

              <div className="pointer-events-none absolute -left-3 -top-3 h-20 w-20 border-l border-t border-[#D4A017] md:-left-5 md:-top-5 md:h-28 md:w-28" />
            </motion.div>

          </div>

          {/* CONTENT */}

          <motion.div
            style={{ y: textY }}
            className="flex flex-col justify-center lg:col-span-5 lg:pl-10"
          >

            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[10px] font-bold uppercase tracking-[4px] text-[#D4A017]"
            >
              Who We Are
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="
                mt-7
                text-4xl
                font-medium
                leading-[0.95]
                tracking-[-2px]
                sm:text-5xl
                md:text-6xl
              "
            >
              Materials that
              <br />
              <span className="text-[#D4A017]">
                move industries.
              </span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mt-9 max-w-xl space-y-6 text-sm leading-8 text-black/60 md:text-base"
            >
              <p>
                Resol Industries Ltd. (RIL) is a trusted PVC Resin importer
                and distributor based in New Delhi, India. Established in
                2005, we have built our business around reliable sourcing,
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

            {/* MINI LINE */}

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              className="mt-10 h-px max-w-md bg-black/15"
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
              className="mt-7 flex items-center justify-between max-w-md"
            >
              <div>

                <span className="mt-1 block text-[8px] uppercase tracking-[3px] text-black/40">
                  Resol Industries Ltd.
                </span>
              </div>

              <span className="text-[9px] uppercase tracking-[3px] text-black/35">
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
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Quality-Focused Sourcing",
    description:
      "We work with established international sources to bring reliable industrial materials to the Indian market.",
    bg: "bg-[#D4A017]",
  },
  {
    title: "Consistent Product Standards",
    description:
      "We focus on maintaining consistent quality across our range to meet the requirements of different industrial applications.",
    bg: "bg-[#1C1C1C]",
  },
  {
    title: "Diverse Product Portfolio",
    description:
      "Our product range includes PVC Resin, Calcium Carbonate, EVA Resin, PET Resin, Plasticizers, and other industrial materials.",
    bg: "bg-[#D4A017]",
  },
  {
    title: "Customer-Focused Approach",
    description:
      "We understand the specific requirements of our customers and work to provide suitable products with dependable service.",
    bg: "bg-[#1C1C1C]",
  },
  {
    title: "Strong Business Relationships",
    description:
      "We value long-term relationships with our customers and international suppliers, built on trust, transparency, and mutual growth.",
    bg: "bg-[#D4A017]",
  },
  {
    title: "Reliable Import",
    description:
      "With our established importing and distribution network, we serve customers across India with a dependable supply of industrial materials.",
    bg: "bg-[#1C1C1C]",
  },
];

function ServiceCard({ service, index, progress }) {
  /*
    IMPORTANT:
    Every card gets its own scroll range.
    This makes the stacking animation clearly visible.
  */
  const start = index * 0.13;

  const scale = useTransform(
    progress,
    [start, Math.min(start + 0.45, 1)],
    [1, 0.88]
  );

  const opacity = useTransform(
    progress,
    [start, Math.min(start + 0.25, 1)],
    [1, 0.96]
  );

  return (
    <motion.div
      style={{
        scale,
        opacity,
        top: `${index * 24}px`,
        zIndex: index + 1,
      }}
      className="sticky mb-8 w-full"
    >
      <div
        className={`group relative min-h-[320px] w-full overflow-hidden border border-black/5 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:min-h-[350px] md:p-10 ${service.bg}`}
      >
        {/* Decorative Number */}
        <div className="pointer-events-none absolute -right-2 -top-8 select-none font-[var(--font-outfit)] text-[150px] font-bold leading-none text-white/[0.08] md:text-[190px]">
          0{index + 1}
        </div>

        {/* Top Row */}
        <div className="relative flex items-center justify-between">
          <span className="font-[var(--font-lexend-deca)] text-xs font-semibold tracking-[3px] text-white/60">
            0{index + 1}
          </span>

          <span className="font-[var(--font-lexend-deca)] text-[10px] uppercase tracking-[2px] text-white/50">
            Resol Industries
          </span>
        </div>

        {/* Accent */}
        <div className="relative mt-7 h-[3px] w-14 bg-white/50 transition-all duration-500 group-hover:w-24" />

        {/* Content */}
        <div className="relative mt-7 max-w-2xl">
          <h3 className="font-[var(--font-outfit)] text-3xl font-bold leading-[1.1] text-white md:text-[35px]">
            {service.title}
          </h3>

          <p className="mt-6 max-w-xl font-[var(--font-lexend-deca)] text-[14px] leading-7 text-white/75 md:text-[15px] md:leading-8">
            {service.description}
          </p>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/10">
          <div className="h-full w-1/4 bg-white/40 transition-all duration-700 group-hover:w-1/2" />
        </div>

        {/* Subtle Glow */}
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:bg-white/20" />
      </div>
    </motion.div>
  );
}

export default function Capa() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={container}
      className="relative bg-white py-13 md:py-13 lg:py-15"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* ================================================= */}
        {/* LEFT SIDE */}
        {/* ================================================= */}

        <div className="lg:sticky lg:top-24 lg:h-fit">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#D4A017]" />

            <span className="font-[var(--font-lexend-deca)] text-xs font-semibold uppercase tracking-[3px] text-[#D4A017]">
              Our Commitment
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-5 max-w-xl font-[var(--font-outfit)] text-4xl font-bold leading-[1.08] tracking-tight text-[#1C1C1C] md:text-4xl lg:text-[55px]">
            Commitment to{" "}
            <span className="text-[#D4A017]">
              Quality & Reliability
            </span>
          </h2>

          {/* Accent */}
          <div className="mt-6 h-1 w-16 bg-[#D4A017]" />

          {/* Description */}
          <p className="mt-6 max-w-xl font-[var(--font-lexend-deca)] text-base leading-8 text-gray-600 md:text-lg">
            At Resol Industries, we are committed to providing reliable
            industrial materials through quality-focused sourcing, consistent
            product standards, dependable service and strong business
            relationships.
          </p>

          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="group relative mt-8 h-[280px] w-full max-w-xl overflow-hidden md:h-[350px]"
          >
            <Image
              src="/Polystyrene.webp"
              alt="Resol Industries - Quality and Reliability"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* Image Text */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <div className="mb-3 h-[3px] w-12 bg-[#D4A017]" />

              <p className="font-[var(--font-outfit)] text-xl font-semibold text-white">
                Built Around Reliability
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE - SCROLL STACK */}
        {/* ================================================= */}

        <div className="relative pt-2 lg:pt-10">
          {/* Section Label */}
          <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-5">
            <span className="font-[var(--font-lexend-deca)] text-xs uppercase tracking-[2px] text-gray-400">
              What Defines Us
            </span>

            <span className="font-[var(--font-lexend-deca)] text-xs uppercase tracking-[2px] text-gray-400">
              06 Principles
            </span>
          </div>

          {/* STACK */}
          <div className="relative">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


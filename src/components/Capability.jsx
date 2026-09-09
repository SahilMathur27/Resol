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
  const scale = useTransform(
    progress,
    [index * 0.14, 1],
    [1, 0.88 + index * 0.02]
  );

  const position = index % 2 === 0 ? "mr-auto" : "ml-auto";

  return (
    <motion.div
      style={{
        scale,
        top: `${index * 28}px`,
      }}
      className={`sticky mb-8 min-h-[320px] w-full max-w-[90%] rounded-3xl p-8 text-white shadow-2xl md:min-h-[350px] md:p-10 ${position} ${service.bg}`}
    >
      <div className="flex min-h-[250px] flex-col justify-center">
        {/* Number */}
        <span className="mb-5 font-[var(--font-lexend-deca)] text-sm font-semibold tracking-[3px] text-white/60">
          0{index + 1}
        </span>

        {/* Accent Line */}
        <div className="mb-5 h-1 w-16 rounded-full bg-white/40" />

        {/* Title */}
        <h3 className="font-[var(--font-outfit)] text-3xl font-bold leading-tight md:text-4xl">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-5 font-[var(--font-lexend-deca)] text-base leading-7 text-white/80">
          {service.description}
        </p>
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
      className="relative bg-white py-24 lg:py-15"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 lg:grid-cols-2 lg:gap-17">

        {/* ================= LEFT SIDE ================= */}
        <div className="lg:sticky lg:top-28 lg:h-fit">

          {/* Small Tag */}
          <span className="font-[var(--font-lexend-deca)] text-sm font-semibold uppercase tracking-[3px] text-[#D4A017]">
            Our Commitment
          </span>

          {/* Heading */}
          <h2 className="mt-2 max-w-xl font-[var(--font-outfit)] text-4xl font-bold leading-[1.15] text-[#1f2d3d] md:text-5xl lg:text-[58px]">
            Commitment to{" "}
            <span className="text-[#D4A017]">
              Quality & Reliability
            </span>
          </h2>

          {/* Accent Line */}
          <div className="mt-4 h-1 w-20 rounded-full bg-[#D4A017]" />

          {/* Description */}
          <p className="mt-4 max-w-xl font-[var(--font-lexend-deca)] text-base leading-8 text-gray-600 md:text-lg">
            At Resol Industries, we are committed to providing reliable
            industrial materials through quality-focused sourcing, consistent
            product standards, dependable service and strong business
            relationships.
          </p>

          {/* ================= IMAGE ================= */}
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="relative mt-6 h-[280px] w-full max-w-xl overflow-hidden rounded-3xl md:h-[350px]"
          >
            <Image
              src="/Polystyrene.webp"
              alt="Resol Industries - Quality and Reliability"
              fill
              priority={false}
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

          
          </motion.div>
        </div>

        {/* ================= RIGHT SIDE - STACK CARDS ================= */}
        <div className="relative pt-4">
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
    </section>
  );
}



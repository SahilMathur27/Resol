"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    title: "PVC Resin",
    image: "/resol products.webp",
    link: "/products/pvc-resin",
  },
  {
    title: "EVA Resin",
    image: "/resol products.webp",
    link: "/products/eva-resin",
  },
  {
    title: "Polyethylene (PE)",
    image: "/resol products.webp",
    link: "/products/polyethylene",
  },
  {
    title: "Polypropylene (PP)",
    image: "/resol products.webp",
    link: "/products/polypropylene",
  },
  {
    title: "Polystyrene",
    image: "/resol products.webp",
    link: "/products/polystyrene",
  },
  {
    title: "POE",
    image: "/resol products.webp",
    link: "/products/poe",
  },
];

export default function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduct = products[activeIndex];

  return (
    <section className="overflow-hidden bg-[#F8F5EE] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl md:mb-16"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
            Our Products
          </span>

          <h2 className="text-3xl font-bold leading-tight text-black md:text-5xl lg:text-6xl">
            Premium Polymer
            <br />
            <span className="font-normal">Solutions</span>
          </h2>

          <div className="mt-6 h-[3px] w-16 bg-[#D4A017]" />

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#5F5A52] md:text-lg">
            Discover our range of high-quality polymer products designed for
            diverse industrial applications.
          </p>
        </motion.div>

        {/* ================= PRODUCT WALL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden h-[560px] overflow-hidden rounded-[28px] bg-black lg:flex"
        >
          {products.map((product, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={product.title}
                onMouseEnter={() => setActiveIndex(index)}
                animate={{
                  flex: isActive ? 5 : 1,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative min-w-0 cursor-pointer overflow-hidden border-r border-white/10 last:border-r-0"
              >

                {/* ================= BACKGROUND IMAGE ================= */}
                <AnimatePresence mode="sync">
                  {isActive && (
                    <motion.div
                      key={`image-${index}`}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 1280px) 100vw, 1200px"
                        className="object-contain p-10"
                      />

                      {/* IMAGE OVERLAY */}
                      <div className="absolute inset-0 bg-black/30" />

                      {/* BOTTOM GRADIENT */}
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ================= GOLD TOP LINE ================= */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-0 z-20 h-1 w-full bg-[#D4A017]"
                />

                {/* ================= NUMBER ================= */}
                <div
                  className={`absolute left-5 top-6 z-30 text-sm font-semibold tracking-[2px] transition-all duration-500 ${
                    isActive
                      ? "text-[#D4A017]"
                      : "text-white/50"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* ================= ACTIVE CONTENT ================= */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.15,
                      }}
                      className="absolute bottom-0 left-0 z-30 w-full p-8 xl:p-10"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D4A017]">
                        Premium Polymer
                      </span>

                      <h3 className="mt-3 max-w-xl text-4xl font-bold leading-tight text-white xl:text-5xl">
                        {product.title}
                      </h3>

                      <div className="my-5 h-[2px] w-14 bg-[#D4A017]" />

                      <Link
                        href={product.link}
                        className="inline-flex items-center gap-3 rounded-full bg-[#D4A017] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-white"
                      >
                        View Product
                        <span className="text-lg">→</span>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ================= VERTICAL TITLE ================= */}
                {!isActive && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div
                      className="whitespace-nowrap text-sm font-semibold uppercase tracking-[2px] text-white/80"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {product.title}
                    </div>
                  </div>
                )}

                {/* ================= HOVER GLOW ================= */}
                <motion.div
                  animate={{
                    opacity: isActive ? 0 : 1,
                  }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ================= MOBILE VERSION ================= */}
        <div className="space-y-3 lg:hidden">
          {products.map((product, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                onClick={() => setActiveIndex(index)}
                className="overflow-hidden rounded-[20px] bg-black"
              >
                {/* MOBILE HEADER */}
                <div className="flex items-center justify-between px-5 py-5">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#D4A017]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-lg font-bold text-white">
                      {product.title}
                    </h3>
                  </div>

                  <span className="text-xl text-[#D4A017]">
                    {isActive ? "−" : "+"}
                  </span>
                </div>

                {/* MOBILE EXPANDED CONTENT */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="relative h-[300px] overflow-hidden bg-[#EEEEEB]">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="100vw"
                          className="object-contain p-5"
                        />

                        <div className="absolute inset-0 bg-black/5" />
                      </div>

                      <div className="p-5 pt-4">
                        <Link
                          href={product.link}
                          className="inline-flex items-center gap-2 rounded-full bg-[#D4A017] px-5 py-3 text-sm font-semibold text-black"
                        >
                          View Product
                          <span>→</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM NOTE ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex items-center justify-between border-t border-black/10 pt-5"
        >
          <p className="text-xs uppercase tracking-[2px] text-[#77716A]">
            Explore our product range
          </p>

          <p className="text-xs font-semibold uppercase tracking-[2px] text-[#D4A017]">
            06 Products
          </p>
        </motion.div>

      </div>
    </section>
  );
}
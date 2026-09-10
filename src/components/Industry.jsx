"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const industries = [
  {
    id: 1,
    name: "Footwear",
    description:
      "PVC Resin and Calcium Carbonate solutions for footwear manufacturing, soles, and related applications.",
    image: "/footwear.webp",
  },
  {
    id: 2,
    name: "PVC Panels",
    description:
      "High-quality raw materials supporting the production of durable PVC panels and interior applications.",
    image: "/pvc penal.webp",
  },
  {
    id: 3,
    name: "Adhesives",
    description:
      "Specialized materials used in adhesive formulations for reliable bonding and consistent performance.",
    image: "/Adhesives.webp",
  },
  {
    id: 4,
    name: "Textile",
    description:
      "Raw materials supporting textile manufacturing, fabric coating, and a wide range of industrial processes.",
    image: "/textile.webp",
  },
  {
    id: 5,
    name: "Pipes & Fittings",
    description:
      "PVC Resin solutions for manufacturing pipes, fittings, and other durable PVC products.",
    image: "/pipe.webp",
  },
  {
    id: 6,
    name: "Packaging",
    description:
      "Reliable materials for flexible and rigid packaging applications across different industries.",
    image: "/industry (3).webp",
  },
  // {
  //   id: 7,
  //   name: "Plastics",
  //   description:
  //     "PVC Resin and Calcium Carbonate for a broad range of plastic manufacturing applications.",
  //   image: "/pvc penal.webp",
  // },
  // {
  //   id: 8,
  //   name: "Paints & Coatings",
  //   description:
  //     "Quality materials for paints, coatings, surface finishing, and related industrial applications.",
  //   image: "/paints (1).webp",
  // },
];

export default function IndustriesAccordion() {
  const [active, setActive] = useState(0);

  const activeIndustry = industries[active];

  return (
    <section className="relative overflow-hidden bg-[#f3f3f1] py-10 md:py-12 lg:py-15">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg,#000 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#D4A017]/10" />

        <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#D4A017]/10" />

      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-8">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-14 md:mb-20"
        >

          <div className="mb-5 flex items-center gap-4">

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-[2px] bg-[#D4A017]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4A017]">
              Industries We Serve
            </span>

          </div>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">

            <h2 className="max-w-5xl overflow-hidden text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-[#171717] md:text-6xl lg:text-[82px]">

              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                Materials that power
              </motion.span>

              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block text-[#D4A017]"
              >
                every industry.
              </motion.span>

            </h2>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-md text-sm leading-7 text-gray-600 md:text-base"
            >
              From footwear and plastics to pipes, packaging and coatings,
              our imported raw materials support diverse manufacturing
              applications across India.
            </motion.p>

          </div>

        </motion.div>

        {/* =====================================================
            MAIN ACCORDION AREA
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* =================================================
              LEFT IMAGE
          ================================================= */}

          <div className="relative lg:sticky lg:top-24 lg:h-[650px]">

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative h-[420px] overflow-hidden bg-black md:h-[550px] lg:h-full"
            >

              <AnimatePresence mode="sync">

                <motion.div
                  key={activeIndustry.image}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0"
                >

                  <Image
                    src={activeIndustry.image}
                    alt={activeIndustry.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />

                </motion.div>

              </AnimatePresence>

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

              {/* Golden vertical line */}

              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "35%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
                className="absolute left-0 top-0 w-[3px] bg-[#D4A017]"
              />

              {/* Image Number */}

              <div className="absolute left-6 top-6 md:left-8 md:top-8">

                <span className="text-[90px] font-black leading-none tracking-[-0.08em] text-white/20 md:text-[120px]">
                  {String(activeIndustry.id).padStart(2, "0")}
                </span>

              </div>

              {/* Image Bottom Content */}

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-10">

                <div className="mb-4 flex items-center gap-3">

                  <span className="h-[2px] w-10 bg-[#D4A017]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/70">
                    Current Industry
                  </span>

                </div>

                <AnimatePresence mode="wait">

                  <motion.h3
                    key={activeIndustry.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.45 }}
                    className="text-3xl font-semibold tracking-tight text-white md:text-5xl"
                  >
                    {activeIndustry.name}
                  </motion.h3>

                </AnimatePresence>

              </div>

              {/* Corner Lines */}

              <div className="absolute bottom-6 right-6 h-14 w-14 border-b border-r border-[#D4A017]/70" />

            </motion.div>

          </div>

          {/* =================================================
              RIGHT ACCORDION
          ================================================= */}

          <div className="border-t border-[#222]/20">

            {industries.map((industry, index) => {

              const isActive = active === index;

              return (
                <motion.div
                  key={industry.id}
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
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                  }}
                  className="border-b border-[#222]/20"
                >

                  {/* =========================================
                      ACCORDION HEADER
                  ========================================= */}

                  <button
                    onClick={() => setActive(index)}
                    className="group flex w-full items-center gap-5 py-7 text-left md:py-4"
                  >

                    {/* Number */}

                    <span
                      className={`min-w-[45px] text-xs font-bold tracking-[0.15em] transition-colors duration-300 ${
                        isActive
                          ? "text-[#D4A017]"
                          : "text-gray-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Title */}

                    <span
                      className={`flex-1 text-3xl font-bold tracking-[-0.04em] transition-all duration-500 md:text-5xl lg:text-[35px] ${
                        isActive
                          ? "translate-x-2 text-[#171717]"
                          : "text-[#555] group-hover:translate-x-2 group-hover:text-[#171717]"
                      }`}
                    >
                      {industry.name}
                    </span>

                    {/* Arrow */}

                    <span
                      className={`relative flex h-11 w-11 shrink-0 items-center justify-center border transition-all duration-500 md:h-14 md:w-14 ${
                        isActive
                          ? "rotate-0 border-[#D4A017] bg-[#D4A017] text-black"
                          : "border-gray-300 text-gray-400 group-hover:border-[#D4A017] group-hover:text-[#D4A017]"
                      }`}
                    >

                      <motion.span
                        animate={{
                          rotate: isActive ? 45 : 0,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        className="text-xl"
                      >
                        ↗
                      </motion.span>

                    </span>

                  </button>

                  {/* =========================================
                      ACCORDION CONTENT
                  ========================================= */}

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
                          height: {
                            duration: 0.55,
                            ease: [0.16, 1, 0.3, 1],
                          },
                          opacity: {
                            duration: 0.3,
                          },
                        }}
                        className="overflow-hidden"
                      >

                        <div className="grid gap-6 pb-8 pl-[65px] md:grid-cols-[1fr_auto] md:items-end md:gap-10 md:pb-10">

                          <motion.p
                            initial={{
                              opacity: 0,
                              y: 20,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay: 0.15,
                              duration: 0.5,
                            }}
                            className="max-w-xl text-sm leading-7 text-gray-600 md:text-base"
                          >
                            {industry.description}
                          </motion.p>

                          <motion.button
                            initial={{
                              opacity: 0,
                              x: 20,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              delay: 0.2,
                              duration: 0.5,
                            }}
                            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#171717]"
                          >


                  

                          </motion.button>

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            BOTTOM LINE
        ===================================================== */}

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.3,
          }}
          className="mt-16 h-px bg-[#222]/20"
        >

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "22%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="h-full bg-[#D4A017]"
          />

        </motion.div>
      </div>
    </section>
  );
}
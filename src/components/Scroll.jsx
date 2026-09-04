"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import SplitText from "./SplitText";

const capabilities = [
  {
    number: "01",
    title: "20+ Years of Industry Experience",
    description:
      "Established in 2005, Resol Industries brings extensive experience in importing and distributing industrial materials across India.",
    image: "/industry (3).webp",
  },
  {
    number: "02",
    title: "Trusted Importing Network",
    description:
      "We work with an established network of international sources to bring high-quality industrial materials to businesses across the Indian market.",
    image: "/industry (3).webp",
  },
  {
    number: "03",
    title: "Wide Product Applications",
    description:
      "Our materials serve diverse industries including PVC pipes and fittings, footwear, flooring, packaging, plastics, adhesives, textiles and coatings.",
    image: "/industry (3).webp",
  },
  {
    number: "04",
    title: "Reliable Supply Solutions",
    description:
      "We focus on consistent product quality, dependable supply and transparent business practices while building long-term customer relationships.",
    image: "/industry (3).webp",
  },
];

export default function Scroll() {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  // Calculate actual scroll distance needed
  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth);
      }
      setViewportWidth(window.innerWidth);
    };

    updateWidths();
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Calculate exact translation needed based on actual widths
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(containerWidth - viewportWidth)],
    { clamp: true }
  );

  return (
    <section
      ref={targetRef}
      className="relative bg-[#f8f8f6]"
      style={{ height: `${containerWidth ? Math.max((containerWidth - viewportWidth) / 5 + 100, 200) : 500}vh` }}
    >
      {/* Sticky Section */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex w-max items-center gap-6 px-5 lg:gap-8 lg:px-10"
        >
          {/* =====================================================
              ABOUT US SECTION
          ====================================================== */}
          <div className="flex h-[600px] w-[92vw] shrink-0 overflow-hidden rounded-[30px] bg-[#f8f8f6] shadow-xl lg:w-[1250px]">
            
            <div className="grid h-full w-full lg:grid-cols-[0.9fr_1.1fr]">
              
              {/* LEFT IMAGES */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative hidden h-full bg-[#ecece7] p-6 lg:block"
              >
                {/* Experience Card */}
                <div className="absolute left-6 top-6 z-30 flex h-[170px] w-[170px] flex-col items-center justify-center rounded-[20px] bg-[#102533] text-center text-white shadow-xl">
                  <h3 className="text-5xl font-bold">
                    20<span className="text-[#D4A017]">+</span>
                  </h3>

                  <p className="mt-3 text-base font-semibold">
                    Years of
                    <br />
                    Experience
                  </p>
                </div>

                {/* Top Image */}
                <div className="absolute right-6 top-6 h-[330px] w-[75%] overflow-hidden rounded-[22px]">
                  <Image
                    src="/industry (3).webp"
                    alt="Resol Industries"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Dots */}
                <div className="absolute left-8 top-[210px] grid grid-cols-7 gap-2">
                  {Array.from({ length: 42 }).map((_, index) => (
                    <span
                      key={index}
                      className="h-1.5 w-1.5 rounded-full bg-[#D4A017]"
                    />
                  ))}
                </div>

                {/* Bottom Image */}
                <div className="absolute bottom-6 left-6 h-[280px] w-[78%] overflow-hidden rounded-[22px] border-[5px] border-[#f8f8f6] shadow-lg">
                  <Image
                    src="/industry (3).webp"
                    alt="PVC Resin and Calcium Carbonate"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* RIGHT CONTENT */}
              <div className="flex h-full flex-col justify-center overflow-y-auto p-7 md:p-10 lg:p-12">
                
                   <h2 className="text-5xl font-semibold">PVC Resin & Calcium Carbonate</h2>
               

                <div className="mt-6 max-w-2xl space-y-4 text-sm leading-6 text-gray-600 md:text-base md:leading-7">
                  <p>
                    Resol Industries Ltd. (RIL) is a trusted{" "}
                    <span className="font-semibold text-[#1f2d3d]">
                      PVC Resin importer
                    </span>{" "}
                    based in New Delhi, India. Established in 2005, we
                    specialize in importing and distributing high-quality PVC
                    Resin and Calcium Carbonate for a wide range of industrial
                    applications across India.
                  </p>

                  <p>
                    With an established international sourcing network, we
                    import products from trusted sources and make them available
                    to businesses across industries such as PVC pipes and
                    fittings, footwear, PVC flooring, packaging, plastics,
                    adhesives, textiles, paints & coatings, and vinyl.
                  </p>

                  <p className="hidden xl:block">
                    Our business is built on quality, reliability, and customer
                    satisfaction with a focus on dependable supply and
                    long-term business relationships.
                  </p>
                </div>

                {/* Features */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 font-semibold text-[#1f2d3d]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4A017] text-sm text-white">
                      ✓
                    </span>
                    Quality & Reliability
                  </div>

                  <div className="flex items-center gap-3 font-semibold text-[#1f2d3d]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4A017] text-sm text-white">
                      ✓
                    </span>
                    Trusted Global Network
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-7">
                  <div className="mb-3 flex items-center justify-between text-sm font-semibold text-[#1f2d3d]">
                    <span>Reliable Supply Solutions</span>
                    <span className="text-[#D4A017]">100%</span>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-[#D4A017]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              WHY CHOOSE US INTRO
          ====================================================== */}
          <div className="flex h-[600px] w-[88vw] shrink-0 flex-col justify-center rounded-[30px] bg-[#102533] p-8 md:p-14 lg:w-[680px] lg:p-16">
            
            <span className="text-sm font-bold uppercase tracking-[3px] text-[#D4A017]">
              Our Value
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Why Choose
              <br />
              <span className="text-[#D4A017]">
                Resol Industries
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/70 md:text-lg">
              We combine industry experience, trusted international sourcing,
              quality-focused products and reliable supply solutions to support
              businesses across diverse manufacturing applications.
            </p>

            <div className="mt-8 h-1 w-20 rounded-full bg-[#D4A017]" />

          </div>

          {/* =====================================================
              CAPABILITY CARDS
          ====================================================== */}
          {capabilities.map((item) => (
            <div
              key={item.number}
              className="group relative h-[600px] w-[85vw] shrink-0 overflow-hidden rounded-[30px] sm:w-[520px]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-[#081B33]/60 to-[#081B33]/10" />

              {/* Number */}
              <span className="absolute right-7 top-6 text-6xl font-bold text-white/30">
                {item.number}
              </span>

              {/* Gold Line */}
              <div className="absolute left-8 top-10 h-[3px] w-14 bg-[#D4A017]" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-7 md:p-9">
                <span className="text-sm font-bold tracking-[3px] text-[#D4A017]">
                  WHY CHOOSE US
                </span>

                <h3 className="mt-4 text-3xl font-bold leading-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-white/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* =====================================================
              FINAL CTA CARD
          ====================================================== */}
          <div className="flex h-[600px] w-[85vw] shrink-0 flex-col justify-center rounded-[30px] bg-[#D4A017] p-8 md:p-14 sm:w-[520px]">
            
            <span className="text-sm font-bold tracking-[3px] text-[#102533]/70">
              RESOL INDUSTRIES LTD.
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#102533] md:text-5xl">
              Quality Materials.
              <br />
              Reliable Partnerships.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#102533]/70">
              Building long-term relationships through dependable supply,
              consistent quality and transparent business practices.
            </p>

            <a
              href="/contact"
              className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#102533] px-7 py-4 font-semibold text-white transition hover:scale-105"
            >
              Contact Us
              <span className="text-[#D4A017]">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
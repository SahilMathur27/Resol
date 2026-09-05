"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth);
      }

      setViewportWidth(window.innerWidth);
    };

    updateWidths();

    window.addEventListener("resize", updateWidths);

    return () => {
      window.removeEventListener("resize", updateWidths);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const scrollDistance = Math.max(containerWidth - viewportWidth, 0);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollDistance]
  );

  return (
    <section
      ref={targetRef}
      className="relative bg-[#F8F5EE]"
      style={{
        height: `${
          containerWidth
            ? Math.max(scrollDistance / 5 + 100, 200)
            : 500
        }vh`,
      }}
    >
      {/* STICKY HORIZONTAL SECTION */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex w-max items-center gap-5 px-5 lg:gap-8 lg:px-10"
        >
          {/* =========================================
              ABOUT US SECTION
          ========================================== */}
          <div className="flex h-[600px] w-[92vw] shrink-0 overflow-hidden rounded-[30px] bg-[#FFFDF8] shadow-2xl lg:w-[1250px]">
            <div className="grid h-full w-full lg:grid-cols-[0.9fr_1.1fr]">
              {/* LEFT IMAGES */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative hidden h-full bg-[#EEE9DE] p-6 lg:block"
              >
                {/* EXPERIENCE CARD */}
                <div className="absolute left-6 top-6 z-30 flex h-[175px] w-[175px] flex-col items-center justify-center rounded-[22px] bg-[#111111] text-center text-white shadow-2xl">
                  <h3 className="text-5xl font-bold">
                    20<span className="text-[#D4A017]">+</span>
                  </h3>

                  <p className="mt-3 text-base font-semibold leading-6">
                    Years of
                    <br />
                    Experience
                  </p>
                </div>

                {/* TOP IMAGE */}
                <div className="absolute right-6 top-6 h-[330px] w-[75%] overflow-hidden rounded-[22px]">
                  <Image
                    src="/industry (3).webp"
                    alt="Resol Industries"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* GOLD DOTS */}
                <div className="absolute left-8 top-[215px] grid grid-cols-7 gap-2">
                  {Array.from({ length: 42 }).map((_, index) => (
                    <span
                      key={index}
                      className="h-1.5 w-1.5 rounded-full bg-[#D4A017]"
                    />
                  ))}
                </div>

                {/* BOTTOM IMAGE */}
                <div className="absolute bottom-6 left-6 h-[280px] w-[78%] overflow-hidden rounded-[22px] border-[5px] border-[#FFFDF8] shadow-xl">
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
                <span className="text-sm font-bold uppercase tracking-[3px] text-[#D4A017]">
                  About Resol Industries
                </span>

                <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] md:text-5xl">
                  PVC Resin &amp;
                  <br />
                  Calcium Carbonate
                </h2>

                <div className="mt-6 max-w-2xl space-y-4 text-sm leading-6 text-[#5F5A52] md:text-base md:leading-7">
                  <p>
                    Resol Industries Ltd. (RIL) is a trusted{" "}
                    <span className="font-semibold text-[#111111]">
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
                    adhesives, textiles, paints &amp; coatings, and vinyl.
                  </p>

                  <p className="hidden xl:block">
                    Our business is built on quality, reliability, and customer
                    satisfaction with a focus on dependable supply and
                    long-term business relationships.
                  </p>
                </div>

                {/* FEATURES */}
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3 font-semibold text-[#111111]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4A017] text-sm font-bold text-black shadow-md">
                      ✓
                    </span>
                    Quality &amp; Reliability
                  </div>

                  <div className="flex items-center gap-3 font-semibold text-[#111111]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4A017] text-sm font-bold text-black shadow-md">
                      ✓
                    </span>
                    Trusted Global Network
                  </div>
                </div>

                {/* PROGRESS BAR */}
                <div className="mt-8">
                  <div className="mb-3 flex items-center justify-between text-sm font-semibold text-[#111111]">
                    <span>Reliable Supply Solutions</span>

                    <span className="text-[#D4A017]">100%</span>
                  </div>

                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#E6DED0]">
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

          {/* =========================================
              WHY CHOOSE US INTRO
          ========================================== */}
          <div className="relative flex h-[600px] w-[88vw] shrink-0 flex-col justify-center overflow-hidden rounded-[30px] bg-[#111111] p-8 shadow-2xl md:p-14 lg:w-[680px] lg:p-16">
            {/* GOLD DECORATIVE CIRCLES */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#D4A017]/40" />

            <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-[#D4A017]/30" />

            <span className="relative z-10 text-sm font-bold uppercase tracking-[3px] text-[#D4A017]">
              Our Value
            </span>

            <h2 className="relative z-10 mt-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Why Choose
              <br />
              <span className="text-[#D4A017]">
                Resol Industries
              </span>
            </h2>

            <p className="relative z-10 mt-7 max-w-xl text-base leading-8 text-white/70 md:text-lg">
              We combine industry experience, trusted international sourcing,
              quality-focused products and reliable supply solutions to support
              businesses across diverse manufacturing applications.
            </p>

            <div className="relative z-10 mt-8 h-1 w-24 rounded-full bg-[#D4A017]" />
          </div>

          {/* =========================================
              CAPABILITY CARDS
          ========================================== */}
          {capabilities.map((item) => (
            <div
              key={item.number}
              className="group relative h-[600px] w-[85vw] shrink-0 overflow-hidden rounded-[30px] shadow-2xl sm:w-[520px]"
            >
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* BLACK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/10" />

              {/* GOLD TOP LINE */}
              <div className="absolute left-0 top-0 z-10 h-1.5 w-full bg-[#D4A017]" />

              {/* NUMBER */}
              <span className="absolute right-7 top-7 z-10 text-6xl font-bold text-white/25">
                {item.number}
              </span>

              {/* GOLD LINE */}
              <div className="absolute left-8 top-12 z-10 h-[3px] w-16 bg-[#D4A017]" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 z-10 w-full p-7 md:p-9">
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

          {/* =========================================
              FINAL CTA
          ========================================== */}
          <div className="relative flex h-[600px] w-[85vw] shrink-0 flex-col justify-center overflow-hidden rounded-[30px] bg-[#D4A017] p-8 shadow-2xl md:p-14 sm:w-[520px]">
            {/* DECORATION */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[20px] border-white/15" />

            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border-[20px] border-black/10" />

            <span className="relative z-10 text-sm font-bold tracking-[3px] text-black/70">
              RESOL INDUSTRIES LTD.
            </span>

            <h2 className="relative z-10 mt-5 text-4xl font-bold leading-tight text-black md:text-5xl">
              Quality Materials.
              <br />
              Reliable Partnerships.
            </h2>

            <p className="relative z-10 mt-6 text-lg leading-8 text-black/70">
              Building long-term relationships through dependable supply,
              consistent quality and transparent business practices.
            </p>

            <a
              href="/contact"
              className="relative z-10 mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-black px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-[#222222]"
            >
              Contact Us

              <span className="text-xl text-[#D4A017]">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
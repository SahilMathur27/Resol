"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

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
      "We work with an established network of international sources to bring a diverse range of products to the Indian market.",
    image: "industry (3).webp",
  },
  {
    number: "03",
    title: "Wide Product Portfolio",
    description:
      "Robust nylon and stainless steel fittings, including hinges, indicators, brackets, and adjustable support legs for dependable daily operation.",
    image: "industry (3).webp",
  },
  {
    number: "04",
    title: "Smart Space Planning",
    description:
      "Efficient washroom layouts designed to maximize available space, improve user privacy, and create a clean, organized appearance.",
    image: "industry (3).webp",
  },
];

export default function Scroll() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[350vh] bg-[#081B33]"
    >
      {/* Sticky View */}
      <div className="sticky top-0 flex h-[700px] items-center overflow-hidden">
        
        {/* Horizontal Content */}
        <motion.div
          style={{ x }}
          className="flex gap-6 px-5 lg:px-12"
        >
          {/* Intro Card */}
          <div className="flex min-h-[500px] w-[85vw] shrink-0 flex-col justify-center px-4 sm:w-[650px]">
            
            <span className="text-sm font-bold tracking-[3px] text-[#f5bd24]">
            Our Value
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
             Why Choose Resol Industries 
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
             Explore our wide range of high-quality industrial chemicals and raw materials
designed to meet diverse manufacturing requirements, ensure consistent
performance, and support applications across multiple industries.
            </p>

            <div className="mt-8 h-1 w-20 rounded-full bg-[#f5bd24]" />
          </div>

          {/* Capability Cards */}
          {capabilities.map((item) => (
            <div
              key={item.number}
              className="group relative h-[500px] w-[85vw] shrink-0 overflow-hidden rounded-[30px] sm:w-[520px]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-[#081B33]/50 to-transparent" />

              {/* Number */}
              <span className="absolute right-7 top-6 text-6xl font-bold text-white/30">
                {item.number}
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-7 md:p-9">
                <span className="text-sm font-bold tracking-[3px] text-[#f5bd24]">
                  CAPABILITY
                </span>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-white/70">
                  {item.description}
                </p>


              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
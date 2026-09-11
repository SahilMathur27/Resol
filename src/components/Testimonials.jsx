"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "ABC Polymers",
    location: "New Delhi",
    role: "Procurement Manager",
    quote:
      "We have been sourcing PVC Resin from them for our manufacturing requirements. The material quality and overall service have been consistently reliable.",
  },
  {
    id: 2,
    name: "Amit Sharma",
    company: "Sharma Footwear Industries",
    location: "Agra",
    role: "Director",
    quote:
      "Their product quality and timely supply have helped us maintain a smooth production process. A dependable partner for our raw material requirements.",
  },
  {
    id: 3,
    name: "Vikash Gupta",
    company: "Gupta Packaging Solutions",
    location: "Noida",
    role: "Purchase Head",
    quote:
      "Professional communication, reliable material quality and good support throughout the ordering process. We are satisfied with the overall experience.",
  },
  {
    id: 4,
    name: "Sandeep Verma",
    company: "Verma PVC Industries",
    location: "Faridabad",
    role: "Managing Partner",
    quote:
      "We appreciate their consistent support and quality materials. Their team understands industrial requirements and provides reliable solutions.",
  },
  {
    id: 5,
    name: "Manoj Agarwal",
    company: "Agarwal Coatings",
    location: "Jaipur",
    role: "Business Owner",
    quote:
      "A professional supplier with good product knowledge and responsive service. The entire process from inquiry to delivery was handled efficiently.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const testimonial = testimonials[active];

  /* ================= AUTO SLIDER ================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        py-10
        md:py-12
        lg:flex
        lg:items-center
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute right-[-120px] top-[-160px] h-[400px] w-[400px] rounded-full bg-[#D4A017]/[0.055] blur-[110px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-150px] h-[400px] w-[400px] rounded-full bg-black/[0.025] blur-[110px]" />

      {/* Large decorative quote */}

      <div className="pointer-events-none absolute right-[4%] top-[2%] select-none font-serif text-[250px] leading-none text-[#D4A017]/[0.045] md:text-[380px]">
        “
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-7 grid items-end gap-5 lg:grid-cols-[1fr_330px]"
        >

          {/* LEFT */}

          <div>

            <div className="mb-3 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#D4A017]" />

              <span className="font-[var(--font-lexend-deca)] text-[9px] font-semibold uppercase tracking-[3px] text-[#D4A017]">
                Client Testimonials
              </span>

            </div>

            <h2 className="font-[var(--font-outfit)] text-4xl font-bold  leading-[0.9] tracking-[-1.5px] text-[#171717] sm:text-4xl md:text-5xl lg:text-[55px]">

              Trusted clients.
              <br />

              <span className="text-[#D4A017]">
                Real experiences.
              </span>

            </h2>

          </div>

          {/* RIGHT */}

          <div className="lg:pb-1">

            <div className="mb-3 h-px w-14 bg-[#D4A017]" />

            <p className="font-[var(--font-lexend-deca)] text-xs leading-6 text-gray-500 md:text-sm">
              Reliable materials, responsive service and long-term
              partnerships have helped us build lasting relationships
              across industries.
            </p>

          </div>

        </motion.div>

        {/* =====================================================
            MAIN SECTION
        ====================================================== */}

        <div className="grid items-center gap-8 lg:grid-cols-[44%_56%]">

          {/* ==================================================
              LEFT CONTENT
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* Label */}

            <div className="mb-4 flex items-center gap-3">

              <span className="font-[var(--font-outfit)] text-sm font-semibold text-[#D4A017]">
                {String(active + 1).padStart(2, "0")}
              </span>

              <span className="h-px w-7 bg-black/15" />

              <span className="font-[var(--font-lexend-deca)] text-[8px] uppercase tracking-[2px] text-gray-400">
                What our clients say
              </span>

            </div>

            {/* Heading */}

            <h3 className="max-w-xl font-[var(--font-outfit)] text-3xl font-medium leading-[1.05] tracking-[-1px] text-[#242424] sm:text-4xl md:text-5xl">

              Built on

              <span className="text-[#D4A017]">
                {" "}trust,
              </span>

              <br />

              strengthened by

              <span className="text-[#D4A017]">
                {" "}partnership.
              </span>

            </h3>

            {/* Paragraph */}

            <p className="mt-5 max-w-md font-[var(--font-lexend-deca)] text-xs leading-6 text-gray-500 md:text-sm">
              From sourcing to delivery, we focus on consistency,
              quality and dependable support for every customer.
            </p>

            {/* CTA */}

            <button
              type="button"
              className="group mt-6 flex items-center gap-3"
            >

              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  transition-all
                  duration-300
                  group-hover:border-[#D4A017]
                  group-hover:bg-[#D4A017]
                "
              >
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                />
              </span>

              <span className="font-[var(--font-lexend-deca)] text-[9px] font-bold uppercase tracking-[1.8px] text-[#242424]">
                Our Client Stories
              </span>

            </button>

            {/* Stats */}

            <div className="mt-6 flex items-center gap-7 border-t border-black/10 pt-5">

              <div>

                <p className="font-[var(--font-outfit)] text-2xl font-semibold text-[#242424]">
                  20+
                </p>

                <p className="mt-1 font-[var(--font-lexend-deca)] text-[7px] uppercase tracking-[1.5px] text-gray-400">
                  Years Experience
                </p>

              </div>

              <div className="h-8 w-px bg-black/10" />

              <div>

                <p className="font-[var(--font-outfit)] text-2xl font-semibold text-[#242424]">
                  1500+
                </p>

                <p className="mt-1 font-[var(--font-lexend-deca)] text-[7px] uppercase tracking-[1.5px] text-gray-400">
                  Customers
                </p>

              </div>

            </div>

          </motion.div>

          {/* ==================================================
              RIGHT TESTIMONIAL
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 lg:pl-4"
          >

            {/* BACK LAYER */}

            <div
              className="
                absolute
                -right-2
                -top-2
                h-full
                w-full
                rotate-[1.3deg]
                bg-[#d7d7d7]
              "
            />

            {/* SECOND BACK LAYER */}

            <div
              className="
                absolute
                -left-2
                top-2
                h-full
                w-full
                -rotate-[1deg]
                bg-[#e8e8e8]
              "
            />

            {/* MAIN CARD */}

            <div className="relative z-20 overflow-hidden bg-[#f7f7f7] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">

              {/* Gold Top */}

              <div className="h-[4px] w-full bg-[#D4A017]" />

              <div className="p-6 sm:p-8 md:p-9">

                {/* RATING */}

                <div className="flex items-start justify-between">

                  <div>

                    <div className="flex items-center gap-2">

                      <span className="font-[var(--font-outfit)] text-4xl font-semibold leading-none text-[#171717]">
                        4.9
                      </span>

                      <span className="text-lg text-[#D4A017]">
                        ★
                      </span>

                    </div>

                    <p className="mt-1 font-[var(--font-lexend-deca)] text-[8px] uppercase tracking-[1px] text-gray-400">
                      Out of 5 stars
                    </p>

                  </div>

                  <span className="font-serif text-7xl leading-none text-black/[0.07]">
                    “
                  </span>

                </div>

                {/* QUOTE */}

                <div className="mt-6 min-h-[165px] sm:min-h-[180px]">

                  <AnimatePresence mode="wait">

                    <motion.p
                      key={testimonial.id}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -15,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="font-[var(--font-outfit)] text-xl font-medium leading-[1.4] text-[#424242] sm:text-2xl"
                    >
                      {testimonial.quote}
                    </motion.p>

                  </AnimatePresence>

                </div>

                {/* CLIENT */}

                <div className="border-t border-black/10 pt-5">

                  <AnimatePresence mode="wait">

                    <motion.div
                      key={`client-${testimonial.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-between gap-4"
                    >

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#242424] font-[var(--font-outfit)] text-xs font-semibold text-white">
                          {testimonial.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </div>

                        <div>

                          <h4 className="font-[var(--font-outfit)] text-sm font-semibold text-[#242424]">
                            {testimonial.name}
                          </h4>

                          <p className="mt-1 font-[var(--font-lexend-deca)] text-[8px] uppercase tracking-[1px] text-gray-400">
                            {testimonial.company}
                          </p>

                        </div>

                      </div>

                      <div className="hidden text-right sm:block">

                        <p className="font-[var(--font-lexend-deca)] text-[8px] uppercase tracking-[1.5px] text-[#D4A017]">
                          Location
                        </p>

                        <p className="mt-1 font-[var(--font-outfit)] text-xs text-gray-500">
                          {testimonial.location}
                        </p>

                      </div>

                    </motion.div>

                  </AnimatePresence>

                </div>

              </div>

              {/* BLACK FOOTER */}

              <div className="flex items-center justify-between bg-[#171717] px-6 py-3.5 sm:px-8">

                <div>

                  <p className="font-[var(--font-lexend-deca)] text-[7px] uppercase tracking-[1.8px] text-[#D4A017]">
                    Client Feedback
                  </p>

                  <p className="mt-0.5 font-[var(--font-outfit)] text-[10px] text-white/45">
                    {testimonial.role}
                  </p>

                </div>

                <span className="font-[var(--font-outfit)] text-[10px] text-white/30">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>

              </div>

            </div>

            {/* ==================================================
                ARROWS
            =================================================== */}

            <div className="relative z-30 mt-5 flex items-center justify-between">

              {/* PROGRESS */}

              <div className="flex items-center gap-1.5">

                {testimonials.map((item, index) => (

                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`
                      h-[3px]
                      transition-all
                      duration-500
                      ${
                        active === index
                          ? "w-9 bg-[#D4A017]"
                          : "w-4 bg-black/15 hover:bg-black/40"
                      }
                    `}
                  />

                ))}

              </div>

              {/* ARROW BUTTONS */}

              <div className="flex items-center gap-2">

                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="
                    relative
                    z-40
                    flex
                    h-11
                    w-11
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/15
                    bg-white
                    text-[#171717]
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-[#D4A017]
                    hover:bg-[#D4A017]
                    hover:text-black
                  "
                >
                  <ArrowLeft
                    size={18}
                    strokeWidth={2}
                  />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="
                    relative
                    z-40
                    flex
                    h-11
                    w-11
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    bg-[#171717]
                    text-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:bg-[#D4A017]
                    hover:text-black
                  "
                >
                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                  />
                </button>

              </div>

            </div>

          </motion.div>

        </div>

        {/* =====================================================
            CLIENT STRIP
        ====================================================== */}

        <div className="mt-7 border-t border-black/10 pt-4">

          <div className="flex items-center gap-6 overflow-hidden whitespace-nowrap">

            <span className="shrink-0 font-[var(--font-lexend-deca)] text-[8px] font-semibold uppercase tracking-[2px] text-gray-400">
              Trusted across industries
            </span>

            {testimonials.map((item, index) => (

              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={`
                  shrink-0
                  font-[var(--font-outfit)]
                  text-xs
                  transition-colors
                  duration-300
                  ${
                    active === index
                      ? "text-[#D4A017]"
                      : "text-black/25 hover:text-black"
                  }
                `}
              >
                {item.company}
              </button>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import AnimatedTitle from "@/components/AnimatedTitle";

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-14 lg:py-16">

      {/* =====================================================
          BACKGROUND ELEMENTS
      ===================================================== */}

      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#D4A017]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-black/[0.025] blur-3xl" />


      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 md:px-12 lg:px-16">

        {/* =====================================================
            TOP INTRO
        ===================================================== */}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">

          {/* LEFT LABEL */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            className="lg:col-span-4"
          >

            <div className="flex items-center gap-4">

              <span className="h-[1px] w-14 bg-[#D4A017]" />

              <span className="text-xs font-semibold uppercase tracking-[5px] text-[#D4A017]">
                About Resol
              </span>

            </div>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#666] md:text-base">
              A trusted name in industrial materials, connecting global
              sources with India's growing manufacturing ecosystem.
            </p>

          </motion.div>


          {/* MAIN HEADING */}

          <div className="lg:col-span-8">

            <AnimatedTitle
              text="ABOUT"
              highlight="RESOL INDUSTRIES"
              delay={0.1}
              duration={0.8}
              letterDelay={0.035}
              color="#111111"
              highlightColor="#D4A017"
              className="
                text-[45px]
                font-black
                uppercase
                leading-[0.88]
                tracking-[-3px]
                sm:text-[58px]
                md:text-[74px]
                lg:text-[88px]
                xl:text-[96px]
              "
            />

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="my-16 h-[1px] w-full bg-black/10 md:my-24" />


        {/* =====================================================
            MAIN ABOUT CONTENT
        ===================================================== */}

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">

          {/* =================================================
              IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 70,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-6"
          >

            <div className="relative h-[430px] overflow-hidden bg-[#E8E7E3] sm:h-[520px] lg:h-[650px]">

              <Image
                src="/About/about-us-4.webp"
                alt="Resol Industries"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover
                  transition-transform
                  duration-[1400ms]
                  ease-out
                  hover:scale-[1.04]
                "
              />


              {/* GOLD FRAME */}

              <div className="pointer-events-none absolute left-5 top-5 h-20 w-20 border-l border-t border-[#D4A017] md:left-7 md:top-7" />

              <div className="pointer-events-none absolute bottom-5 right-5 h-20 w-20 border-b border-r border-[#D4A017] md:bottom-7 md:right-7" />


              {/* YEAR */}

              <div className="absolute bottom-0 left-0 bg-black px-6 py-5 md:px-8 md:py-6">

                <span className="block text-[9px] font-semibold uppercase tracking-[4px] text-[#D4A017]">
                  Established
                </span>

                <span className="mt-1 block text-3xl font-black text-white md:text-4xl">
                  2005
                </span>

              </div>

            </div>

          </motion.div>


          {/* =================================================
              CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col justify-center lg:col-span-6"
          >

            <span className="mb-5 text-[10px] font-semibold uppercase tracking-[4px] text-[#D4A017]">
              Who We Are
            </span>


            <h3 className="
              max-w-2xl
              text-3xl
              font-medium
              leading-[1.05]
              tracking-[-1.5px]
              text-black
              sm:text-4xl
              md:text-5xl
            ">
              Reliable materials.
              <br />
              <span className="text-[#D4A017]">
                Stronger industries.
              </span>
            </h3>


            <div className="mt-8 space-y-6 text-sm leading-8 text-[#666] md:text-base">

              <p>
                Resol Industries Ltd. (RIL) is a trusted PVC Resin importer
                and distributor based in New Delhi, India. Established in
                2005, we have built our business around reliable sourcing,
                consistent quality and long-term customer relationships.
              </p>

              <p>
                We import and distribute PVC Resin, Calcium Carbonate and
                other industrial materials to customers across India,
                supporting manufacturers in a wide range of industries.
              </p>

              <p>
                Our sourcing network enables us to connect customers with
                dependable material solutions while maintaining a strong
                focus on quality, service and timely distribution.
              </p>

            </div>


            {/* =================================================
                HIGHLIGHTS
            ================================================= */}

            <div className="mt-10 grid grid-cols-2 border-y border-black/10">

              <div className="border-r border-black/10 py-6 pr-5">

                <span className="block text-3xl font-black text-black md:text-4xl">
                  20+
                </span>

                <span className="mt-2 block text-[9px] font-semibold uppercase tracking-[2px] text-[#777]">
                  Years Experience
                </span>

              </div>


              <div className="py-6 pl-5">

                <span className="block text-3xl font-black text-black md:text-4xl">
                  Pan India
                </span>

                <span className="mt-2 block text-[9px] font-semibold uppercase tracking-[2px] text-[#777]">
                  Distribution Network
                </span>

              </div>

            </div>


            {/* =================================================
                BUTTON
            ================================================= */}

            <div className="mt-10">

              <Link
                href="/about-us"
                className="
                  group
                  inline-flex
                  items-center
                  gap-5
                  bg-black
                  px-7
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#D4A017]
                  hover:text-black
                "
              >

                More About Us

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>

              </Link>

            </div>

          </motion.div>

        </div>


      </div>

    </section>
  );
}


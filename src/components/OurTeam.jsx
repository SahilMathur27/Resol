"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const teamMembers = [
  {

    name: "Mr. Krishan Kumar Bansal",
    role: "Founder Director",
    image: "/mr-krishan-kumar-bansal.webp",
  },
  {
   
    name: "Mr. Parth Dodeja",
    role: "Director",
    image: "/mr-parth-dodeja-big-377x474.webp",
  },
  { 
    name: "Mr. Vijay Kr. Rawal",
    role: "Director",
    image: "/vijay-rawal-377x474.webp",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function OurTeam() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 md:py-13 lg:py-15">
      {/* BACKGROUND DETAILS */}
      <div className="pointer-events-none absolute -right-40 top-[15%] h-[500px] w-[500px] rounded-full bg-[#D4A017]/[0.07] blur-[140px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-black/[0.035] blur-[130px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-[1fr_420px] lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#D4A017]" />

              <span className="font-[var(--font-lexend-deca)] text-[10px] font-semibold uppercase tracking-[3px] text-[#D4A017]">
                Our Leadership
              </span>
            </div>

            <h2 className="max-w-[800px] font-[var(--font-outfit)] text-[50px] font-semibold leading-[0.88] tracking-[-0.06em] text-[#1c1c1c]">
              The people
              <span className="block text-[#D4A017]">
                behind RIL.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-5 h-px w-full bg-black/10" />

            <p className="max-w-md font-[var(--font-lexend-deca)] text-[13px] leading-7 text-black/55 md:text-sm">
              Experienced leadership combining industry knowledge,
              dependable relationships and a long-term vision for
              industrial material distribution.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            STAGGERED TEAM LAYOUT
        ===================================================== */}
        <div className="relative">

          {/* DESKTOP DECORATIVE LINE */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px bg-black/[0.07] lg:block" />

          <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0">

            {teamMembers.map((member, index) => (
              <motion.article
                key={member.number}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                className={`
                  group relative
                  ${
                    index === 0
                      ? "lg:translate-y-0"
                      : index === 1
                      ? "lg:translate-y-20"
                      : "lg:translate-y-40"
                  }
                `}
              >
                {/* NUMBER */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-[var(--font-outfit)] text-[12px] font-semibold tracking-[2px] text-[#D4A017]">
                    {member.number}
                  </span>

                  <span className="h-px w-10 bg-black/10 transition-all duration-500 group-hover:w-20 group-hover:bg-[#D4A017]" />
                </div>

                {/* IMAGE */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#eeeeee]">

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                  {/* GOLD CORNER */}
                  <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#D4A017] transition-all duration-500 group-hover:w-full" />

                  {/* ARROW */}
                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/30 bg-black/20 text-white backdrop-blur-sm transition-all duration-500 group-hover:border-[#D4A017] group-hover:bg-[#D4A017] group-hover:text-black">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.7}
                      className="transition-transform duration-500 group-hover:rotate-45"
                    />
                  </div>

                  {/* ROLE INSIDE IMAGE */}
                  <div className="absolute bottom-5 left-5">
                    <span className="font-[var(--font-lexend-deca)] text-[9px] font-semibold uppercase tracking-[2.5px] text-white/75">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* NAME */}
                <div className="relative mt-5 border-b border-black/10 pb-5">

                  <h3 className="font-[var(--font-outfit)] text-xl font-semibold tracking-[-0.5px] text-[#1c1c1c] transition-colors duration-300 group-hover:text-[#D4A017] sm:text-[22px]">
                    {member.name}
                  </h3>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-[var(--font-lexend-deca)] text-[9px] uppercase tracking-[2px] text-black/35">
                      Resol Industries Ltd.
                    </span>

                    <span className="h-px w-8 bg-[#D4A017]/50 transition-all duration-500 group-hover:w-14" />
                  </div>
                </div>
              </motion.article>
            ))}

          </div>
        </div>


      </div>
    </section>
  );
}


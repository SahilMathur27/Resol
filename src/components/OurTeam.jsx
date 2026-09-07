"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    number: "01",
    name: "Mr. Krishan Kumar Bansal",
    role: "Founder Director",
    image: "/mr-krishan-kumar-bansal.webp",
  },
  {
    number: "02",
    name: "Mr. Parth Dodeja",
    role: "Director",
    image: "/mr-parth-dodeja-big-377x474.webp",
  },
  {
    number: "03",
    name: "Mr. Vijay Kr. Rawal",
    role: "Director",
    image: "/vijay-rawal-377x474.webp",
  },
];

export default function OurTeam() {
  return (
    <section className="relative overflow-hidden bg-[#f5f4ef] py-10 md:py-13">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#D4A017]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-black/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <div className="flex items-center gap-4">

            <span className="h-[2px] w-12 bg-[#D4A017]" />

            <span className="font-[var(--font-lexend-deca)] text-xs font-semibold uppercase tracking-[3px] text-[#D4A017]">
              Our Leadership
            </span>

          </div>

          <h2 className="mt-5 font-[var(--font-outfit)] text-4xl font-bold leading-tight text-[#303030] md:text-5xl lg:text-6xl">
            Meet the people
            <br />

            <span className="text-[#D4A017]">
              driving our vision.
            </span>
          </h2>

          <p className="mt-5 max-w-xl font-[var(--font-lexend-deca)] text-base leading-7 text-gray-600 md:text-lg">
            Experienced leadership focused on building strong relationships,
            reliable supply networks and long-term growth in the industrial
            materials sector.
          </p>
        </motion.div>

        {/* ================= TEAM ================= */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{
                opacity: 0,
                y: 50,
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
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="group"
            >

              {/* CARD */}
              <div
                className="
                  relative overflow-hidden
                  rounded-[30px]
                  bg-white
                  p-3
                  shadow-md
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >

                {/* IMAGE */}
                <div className="relative h-[400px] overflow-hidden rounded-[24px] md:h-[450px] lg:h-[430px]">

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Image Gradient */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/75
                      via-black/15
                      to-transparent
                    "
                  />

                  {/* Number */}
                  <div className="absolute right-5 top-5">
                    <span className="font-[var(--font-outfit)] text-6xl font-bold text-white/30">
                      {member.number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">

                    {/* Gold Line */}
                    <div className="mb-4 h-[3px] w-12 rounded-full bg-[#D4A017] transition-all duration-500 group-hover:w-20" />

                    {/* Role */}
                    <p className="mb-2 font-[var(--font-lexend-deca)] text-xs font-semibold uppercase tracking-[2px] text-[#D4A017]">
                      {member.role}
                    </p>

                    {/* Name */}
                    <h3 className="font-[var(--font-outfit)] text-2xl font-bold leading-tight text-white md:text-[27px]">
                      {member.name}
                    </h3>

                  </div>
                </div>

                {/* BOTTOM INFO */}
                <div className="flex items-center justify-between px-4 py-5">

                  <div>
                    <p className="font-[var(--font-lexend-deca)] text-xs uppercase tracking-[2px] text-gray-400">
                      Leadership
                    </p>

                    <p className="mt-1 font-[var(--font-outfit)] text-sm text-[#303030]">
                      Experience • Trust • Growth
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      border border-[#D4A017]
                      text-[#D4A017]
                      transition-all duration-500
                      group-hover:bg-[#D4A017]
                      group-hover:text-white
                    "
                  >
                    →
                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
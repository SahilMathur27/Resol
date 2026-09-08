"use client";

import {
  FaIndustry,
  FaUsers,
  FaBusinessTime,
} from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const counters = [
  {
    number: 10,
    suffix: "+",
    title: "Industries Served",
    description: "Across diverse industrial sectors",
    icon: FaIndustry,
  },
  {
    number: 30,
    suffix: "+",
    title: "Resource Strength",
    description: "Experienced & dedicated team",
    icon: GrResources,
  },
  {
    number: 25,
    suffix: "+",
    title: "Years in Business",
    description: "Built on trust & experience",
    icon: FaBusinessTime,
  },
  {
    number: 1500,
    suffix: "+",
    title: "Strong Customer Base",
    description: "Long-term business relationships",
    icon: FaUsers,
  },
];

function CountUp({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const incrementTime = 25;
    const totalSteps = duration / incrementTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function Counter() {
  return (
    <section className="relative overflow-hidden bg-[#f5f3ef] py-10 md:py-15">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full border-[60px] border-[#b08d57]/5" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full border-[70px] border-[#b08d57]/5" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end"
        >

          <div>
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#b08d57]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
                Our Strength
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#1c1c1c] sm:text-4xl md:text-5xl">
              Numbers that speak for our
              <span className="ml-2 text-[#D4A017]">
                journey.
              </span>
            </h2>
          </div>

        </motion.div>


        {/* ================= COUNTERS ================= */}

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-4">

          {counters.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                }}
                className={`group relative overflow-hidden rounded-[24px] border border-[#ded8cf] bg-white ${
                  index % 2 === 1
                    ? "lg:translate-y-8"
                    : ""
                }`}
              >

                {/* ================= GIANT BACKGROUND NUMBER ================= */}

                <div className="pointer-events-none absolute -right-5 -top-5 select-none text-[100px] font-bold leading-none text-[#b08d57]/[0.06] transition-all duration-700 group-hover:scale-110 group-hover:text-[#b08d57]/[0.1] sm:text-[120px]">
                  {String(index + 1).padStart(2, "0")}
                </div>


                {/* ================= TOP ACCENT ================= */}

                <div className="absolute left-0 top-0 h-1 w-full bg-[#b08d57]/20">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.4 + index * 0.1,
                    }}
                    className="h-full bg-[#b08d57]"
                  />
                </div>


                {/* ================= CONTENT ================= */}

                <div className="relative flex min-h-[250px] flex-col p-5 sm:min-h-[290px] sm:p-7 md:p-8">

                  {/* Icon + Number */}

                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b08d57]/30 bg-[#f8f4ec] text-[#b08d57] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#b08d57] group-hover:text-white sm:h-14 sm:w-14">
                      <Icon className="text-lg sm:text-xl" />
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#aaa39a]">
                      0{index + 1}
                    </span>

                  </div>


                  {/* NUMBER */}

                  <div className="mt-8">

                    <h3 className="text-4xl font-bold tracking-tight text-[#1c1c1c] sm:text-5xl md:text-6xl">
                      <CountUp
                        end={item.number}
                        suffix={item.suffix}
                      />
                    </h3>

                    <div className="mt-4 h-[2px] w-8 bg-[#b08d57] transition-all duration-500 group-hover:w-14" />

                  </div>


                  {/* TITLE */}

                  <div className="mt-auto pt-6">

                    <h4 className="text-sm font-semibold text-[#252525] sm:text-base">
                      {item.title}
                    </h4>

                    <p className="mt-1 max-w-[180px] text-xs leading-5 text-[#77736d] sm:text-sm">
                      {item.description}
                    </p>

                  </div>


                  {/* ================= SIDE LINE ================= */}

                  <div className="absolute bottom-0 left-0 h-0 w-[3px] bg-[#b08d57] transition-all duration-500 group-hover:h-full" />

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
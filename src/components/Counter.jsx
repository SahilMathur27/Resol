"use client";
import { FaIndustry, FaUsers, FaBusinessTime } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const counters = [
  {
    number: 10,
    suffix: "+",
    title: "Industries Served",
    icon: FaIndustry,
  },
  {
    number: 30,
    suffix: "+",
    title: "Resource Strength",
    icon: GrResources,
  },
  {
    number: 25,
    suffix: "+",
    title: "Years in Business",
    icon:FaBusinessTime,
  },
  {
    number: 1500,
    suffix: "+",
    title: "Strong Customer Base",
    icon: FaUsers,
  },
];

function CountUp({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const incrementTime = 30;
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
    <section className="bg-[#f5f3ef] py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b08d57]">
            Our Strength
          </p>

          <h2 className="text-3xl font-semibold text-[#1c1c1c] md:text-5xl">
            Numbers That Define Our Journey
          </h2>
        </motion.div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-3">

          {counters.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-2xl border border-[#ded8cf] bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:p-4"
            >
              {/* Background Decorative Circle */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border-[18px] border-[#b08d57]/10 transition-transform duration-500 group-hover:scale-125" />

              {/* Icon */}
              <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 text-xl text-[#d4af6a] md:h-14 md:w-14 md:text-2xl">
                <item.icon />
              </div>

              {/* Number */}
              <div className="relative">
                <h3 className="text-3xl font-bold leading-none text-[#1c1c1c] sm:text-4xl md:text-5xl">
                  <CountUp
                    end={item.number}
                    suffix={item.suffix}
                  />
                </h3>

                {/* Golden Line */}
                <div className="my-4 h-[2px] w-10 bg-[#b08d57] transition-all duration-500 group-hover:w-16" />

                {/* Title */}
                <p className="text-sm font-medium leading-relaxed text-[#6b6b6b] sm:text-base md:text-lg">
                  {item.title}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#b08d57] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
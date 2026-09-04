"use client";

import { motion } from "framer-motion";

const products = [
  "PVC Resin",
  "Calcium Carbonate",
  "EVA Resin",
  "PET Resin",
  "DOP",
  "DOTP",
  "Precipitated Silica",
  "Carbon Black",
  "Zinc Oxide",
  "Titanium Dioxide",
];

export default function About() {
  const marqueeItems = [...products, ...products, ...products];

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-orange-500">
          Our Product Range
        </p>

        <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
          Quality Materials For Every Industry
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
          Explore our extensive range of premium raw materials designed for
          diverse industrial applications.
        </p>
      </div>

      {/* Curved Area */}
      <div className="relative mt-16 h-[240px] md:h-[300px]">
        
        {/* Background Curved Shape */}
        <div className="absolute left-[-10%] top-[55px] h-[150px] w-[120%] rotate-[-3deg] rounded-[50%] bg-slate-900 md:top-[65px] md:h-[180px]" />

        {/* Orange Border Effect */}
        <div className="absolute left-[-10%] top-[50px] h-[160px] w-[120%] rotate-[-3deg] rounded-[50%] border-y-2 border-orange-500 md:top-[58px] md:h-[195px]" />

        {/* Marquee */}
        <div className="absolute left-0 top-[92px] w-full overflow-hidden md:top-[115px]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max items-center gap-4 md:gap-6"
          >
            {marqueeItems.map((product, index) => (
              <div
                key={index}
                className="flex items-center gap-4 whitespace-nowrap"
              >
                {/* Product Number/Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-bold text-orange-400 backdrop-blur-md md:h-14 md:w-14">
                  {String((index % products.length) + 1).padStart(2, "0")}
                </div>

                {/* Product Name */}
                <span className="text-lg font-semibold text-white md:text-2xl">
                  {product}
                </span>

                {/* Separator */}
                <span className="ml-3 text-2xl text-orange-500 md:text-3xl">
                  •
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto mt-4 flex max-w-7xl flex-col items-center justify-center gap-3 px-5 text-center sm:flex-row"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-xl text-orange-500">
          ✦
        </div>

        <p className="text-base text-slate-600 md:text-lg">
          Empowering Industries with{" "}
          <span className="font-bold text-orange-500">
            Premium Raw Materials
          </span>
        </p>
      </motion.div>
    </section>
  );
}
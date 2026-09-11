"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  {
    logo: "/astrallogo.webp",
    name: "Astral",
  },
  {
    logo: "/nilkamal-ltd.webp",
    name: "Nilkamal",
  },
  {
    logo: "/prince-pipes-fittings.webp",
    name: "Prince Pipes",
  },
  {
    logo: "/cosmo-films.webp",
    name: "Cosmo Films",
  },
  {
    logo: "/finolex-industries.webp",
    name: "Finolex Industries",
  },
  {
    logo: "/uflex-ltd.webp",
    name: "UFlex",
  },
];

export default function OurBrands() {
  return (
    <section className="relative overflow-hidden bg-white py-19 md:py-10">

      {/* =====================================================
          TOP LINE
      ===================================================== */}

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-5">

          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#D4A017]" />

            <span className="text-[8px] font-bold uppercase tracking-[4px] text-black/45">
              Trusted Network
            </span>
          </div>

          <span className="hidden text-[7px] font-bold uppercase tracking-[3px] text-black/25 sm:block">
            Industry Partners
          </span>

        </div>

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="mb-9 grid grid-cols-1 gap-5 md:grid-cols-[1fr_auto] md:items-end">

          <div>
            <h2 className="text-[38px] font-black leading-[0.9] tracking-[-2px] text-[#111111] sm:text-[40px] md:text-[55px]">
              Brands
              <span className="text-[#D4A017]"> We Trust</span>
            </h2>

          
          </div>


        </div>
      </div>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <div className="relative">

        {/* LEFT FADE */}

        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-24 md:w-36" />

        {/* RIGHT FADE */}

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-24 md:w-36" />

        {/* GOLD CENTER LINE */}

        <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-[1] h-px -translate-y-1/2 bg-black/[0.06]" />

        <motion.div
          className="flex w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >

          {/* FIRST SET */}

          <div className="flex shrink-0 items-center">

            {brands.map((brand, index) => (
              <BrandItem
                key={`first-${index}`}
                brand={brand}
              />
            ))}

          </div>

          {/* DUPLICATE SET
              Required for seamless infinite loop */}

          <div className="flex shrink-0 items-center">

            {brands.map((brand, index) => (
              <BrandItem
                key={`second-${index}`}
                brand={brand}
              />
            ))}

          </div>

        </motion.div>
      </div>

    </section>
  );
}


/* ============================================================
   BRAND ITEM
============================================================ */

function BrandItem({ brand }) {
  return (
    <div
      className="
        group
        relative
        flex
        h-[105px]
        w-[190px]
        shrink-0
        items-center
        justify-center
        border-r
        border-black/[0.08]
        px-8
        sm:h-[120px]
        sm:w-[230px]
        md:h-[135px]
        md:w-[270px]
      "
    >

      {/* TOP GOLD ACCENT */}

      <span
        className="
          absolute
          left-1/2
          top-0
          h-[2px]
          w-0
          -translate-x-1/2
          bg-[#D4A017]
          transition-all
          duration-500
          group-hover:w-12
        "
      />

      {/* LOGO */}

      <Image
        src={brand.logo}
        alt={brand.name}
        width={220}
        height={100}
        sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 220px"
        className="
          h-auto
          max-h-[48px]
          w-auto
          max-w-[155px]
          object-contain
          opacity-55
          grayscale
          transition-all
          duration-500
          group-hover:opacity-100
          group-hover:grayscale-0
          group-hover:scale-105
          sm:max-h-[55px]
          sm:max-w-[180px]
          md:max-h-[62px]
          md:max-w-[210px]
        "
      />

      {/* SMALL NUMBER */}

      <span
        className="
          absolute
          bottom-3
          left-4
          text-[6px]
          font-bold
          tracking-[2px]
          text-black/15
          transition-colors
          duration-300
          group-hover:text-[#D4A017]
        "
      >
        PARTNER
      </span>

    </div>
  );
}
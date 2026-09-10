"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedTitle from "@/components/AnimatedTitle";

const products = [
  {
    number: "01",
    title: "PVC Resin",
    image: "/resol products.webp",
    link: "/products/pvc-resin",
    size: "large",
  },
  {
    number: "02",
    title: "EVA Resin",
    image: "/resol products.webp",
    link: "/products/eva-resin",
    size: "small",
  },
  {
    number: "03",
    title: "Polyethylene (PE)",
    image: "/resol products.webp",
    link: "/products/polyethylene",
    size: "small",
  },
  {
    number: "04",
    title: "Polypropylene (PP)",
    image: "/resol products.webp",
    link: "/products/polypropylene",
    size: "large",
  },
  {
    number: "05",
    title: "Polystyrene",
    image: "/resol products.webp",
    link: "/products/polystyrene",
    size: "large",
  },
  {
    number: "06",
    title: "POE",
    image: "/resol products.webp",
    link: "/products/poe",
    size: "small",
  },
];

function ProductItem({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        group
        relative
        ${
          product.size === "large"
            ? "lg:col-span-7"
            : "lg:col-span-5"
        }
      `}
    >
      <Link href={product.link} className="block">

        {/* IMAGE AREA */}

        <div
          className={`
            relative
            overflow-hidden
            bg-[#E8E7E3]
            ${
              product.size === "large"
                ? "h-[390px] sm:h-[480px] lg:h-[560px]"
                : "h-[330px] sm:h-[420px] lg:h-[430px]"
            }
          `}
        >

          <Image
            src={product.image}
            alt={product.title}
            fill
            priority={index < 2}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="
              object-cover
              transition-transform
              duration-[1200ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:scale-[1.08]
            "
          />

          {/* IMAGE OVERLAY */}

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="
              absolute
              inset-0
              bg-black/10
              transition-opacity
              duration-500
            "
          />

          {/* NUMBER */}

          <div className="absolute left-5 top-5 z-10 sm:left-7 sm:top-7">

            <span
              className="
                text-xs
                font-medium
                tracking-[4px]
                text-white
                drop-shadow-md
              "
            >
              {product.number}
            </span>

          </div>


          {/* GOLD CORNER */}

          <div
            className="
              absolute
              right-0
              top-0
              h-20
              w-20
              border-b
              border-l
              border-[#D4A017]
              opacity-0
              transition-all
              duration-500
              group-hover:opacity-100
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              h-20
              w-20
              border-r
              border-t
              border-[#D4A017]
              opacity-0
              transition-all
              duration-500
              group-hover:opacity-100
            "
          />


          {/* CENTER ARROW */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-16
              w-16
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              border
              border-[#D4A017]
              bg-black
              text-xl
              text-[#D4A017]
              opacity-0
              scale-75
              transition-all
              duration-500
              group-hover:scale-100
              group-hover:opacity-100
            "
          >
            ↗
          </div>

        </div>


        {/* PRODUCT INFORMATION */}

        <div className="relative">

          <div className="flex items-start justify-between gap-5 border-b border-black/15 py-6 md:py-7">

            <div>

              <div className="mb-3 flex items-center gap-3">

                <span className="h-[2px] w-8 bg-[#D4A017] transition-all duration-500 group-hover:w-14" />

                <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#888]">
                  Polymer Material
                </span>

              </div>

              <h3
                className="
                  text-[27px]
                  font-medium
                  leading-none
                  tracking-[-1.2px]
                  text-black
                  transition-colors
                  duration-300
                  group-hover:text-[#D4A017]
                  sm:text-[34px]
                  md:text-[40px]
                "
              >
                {product.title}
              </h3>

            </div>


            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                border
                border-black/15
                text-lg
                text-black
                transition-all
                duration-500
                group-hover:border-[#D4A017]
                group-hover:bg-[#D4A017]
              "
            >
              ↗
            </div>

          </div>

        </div>

      </Link>
    </motion.div>
  );
}


export default function ProductsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute right-[-150px] top-[300px] h-[500px] w-[500px] rounded-full bg-[#D4A017]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute left-[-200px] bottom-[300px] h-[500px] w-[500px] rounded-full bg-black/[0.025] blur-3xl" />


      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 md:px-12 lg:px-16">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-20 md:mb-28 lg:mb-36">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">

            {/* LEFT */}

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
              }}
              transition={{
                duration: 0.8,
              }}
              className="lg:col-span-4"
            >

              <div className="flex items-center gap-4">

                <span className="h-[1px] w-14 bg-[#D4A017]" />

                <span className="text-xs font-semibold uppercase tracking-[5px] text-[#D4A017]">
                  03 — Products
                </span>

              </div>

              <p className="mt-7 max-w-sm text-sm leading-7 text-[#666] md:text-base">
                A dependable portfolio of polymer and industrial materials
                supplied for demanding applications across India.
              </p>

            </motion.div>


            {/* RIGHT */}

            <div className="lg:col-span-8">

              <AnimatedTitle
                text="PRODUCTS"
                highlight="BUILT FOR INDUSTRY"
                delay={0.1}
                duration={0.8}
                letterDelay={0.035}
                color="#111111"
                highlightColor="#D4A017"
                className="
                  text-[48px]
                  font-black
                  uppercase
                  leading-[0.86]
                  tracking-[-3px]
                  sm:text-[62px]
                  md:text-[78px]
                  lg:text-[94px]
                  xl:text-[105px]
                "
              />

            </div>

          </div>


          {/* HEADER LINE */}

          <div className="mt-10 h-[1px] w-full bg-black/15 md:mt-14" />

        </div>


        {/* =====================================================
            CREATIVE PRODUCT GRID
        ===================================================== */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:gap-x-10 md:gap-y-28 lg:grid-cols-12 lg:gap-y-36">

          {/* =================================================
              PRODUCT 01
          ================================================= */}

          <ProductItem
            product={products[0]}
            index={0}
          />


          {/* =================================================
              PRODUCT 02
          ================================================= */}

          <div className="lg:col-span-5 lg:mt-[180px]">

            <ProductItem
              product={products[1]}
              index={1}
            />

          </div>


          {/* =================================================
              PRODUCT 03
          ================================================= */}

          <div className="lg:col-span-5 lg:ml-[8%]">

            <ProductItem
              product={products[2]}
              index={2}
            />

          </div>


          {/* =================================================
              PRODUCT 04
          ================================================= */}

          <div className="lg:col-span-7 lg:mt-[140px]">

            <ProductItem
              product={products[3]}
              index={3}
            />

          </div>


          {/* =================================================
              PRODUCT 05
          ================================================= */}

          <div className="lg:col-span-7 lg:mt-[100px]">

            <ProductItem
              product={products[4]}
              index={4}
            />

          </div>


          {/* =================================================
              PRODUCT 06
          ================================================= */}

          <div className="lg:col-span-5 lg:mt-[260px]">

            <ProductItem
              product={products[5]}
              index={5}
            />

          </div>

        </div>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-24
            border-t
            border-black/15
            pt-10
            md:mt-36
            md:flex
            md:items-end
            md:justify-between
          "
        >

          <div>

            <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[4px] text-[#D4A017]">
              Explore Our Range
            </span>

            <h3 className="max-w-2xl text-3xl font-medium tracking-[-1.5px] text-black md:text-5xl">
              Materials that keep
              <span className="text-[#D4A017]"> industry moving.</span>
            </h3>

          </div>


          <Link
            href="/products"
            className="
              group
              mt-8
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
              md:mt-0
            "
          >

            View All Products

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>

          </Link>

        </motion.div>

      </div>

    </section>
  );
}

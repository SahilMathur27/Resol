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
  const isLarge = product.size === "large";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <Link href={product.link} className="block">

        {/* =========================================
            IMAGE
        ========================================= */}

        <div
          className={`
            relative
            overflow-hidden
            bg-[#E9E9E6]
            ${isLarge
              ? "h-[400px] sm:h-[500px] lg:h-[590px]"
              : "h-[340px] sm:h-[430px] lg:h-[450px]"
            }
          `}
        >

          {/* IMAGE */}

          <Image
            src={product.image}
            alt={product.title}
            fill
            priority={index < 2}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="
              object-cover
              transition-transform
              duration-[1400ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:scale-[1.07]
            "
          />

          {/* DARK IMAGE GRADIENT */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/65
              via-black/5
              to-transparent
              opacity-70
              transition-opacity
              duration-700
              group-hover:opacity-90
            "
          />

          {/* TOP LEFT NUMBER */}

          <div
            className="
              absolute
              left-6
              top-6
              z-10
              sm:left-8
              sm:top-8
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span className="h-px w-8 bg-[#D4A017] transition-all duration-500 group-hover:w-14" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[4px]
                  text-white
                "
              >
                {product.number}
              </span>
            </div>
          </div>

          {/* LARGE EDITORIAL NUMBER */}

          <div
            className="
              pointer-events-none
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              select-none
              opacity-10
              transition-all
              duration-700
              group-hover:opacity-20
              group-hover:translate-x-[-8px]
              sm:right-8
            "
          >
            <span
              className="
                text-[130px]
                font-black
                leading-none
                tracking-[-10px]
                text-white
                sm:text-[180px]
              "
            >
              {product.number}
            </span>
          </div>

          {/* GOLD CORNER */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-24
              w-24
              border-b
              border-l
              border-[#D4A017]
              opacity-0
              translate-x-5
              -translate-y-5
              transition-all
              duration-700
              group-hover:translate-x-0
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          />

          {/* BOTTOM GOLD LINE */}

          <div
            className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-0
              bg-[#D4A017]
              transition-all
              duration-700
              group-hover:w-full
            "
          />

          {/* CENTER ARROW */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-20
              flex
              h-[72px]
              w-[72px]
              -translate-x-1/2
              -translate-y-1/2
              scale-75
              items-center
              justify-center
              border
              border-[#D4A017]
              bg-black
              text-[24px]
              text-[#D4A017]
              opacity-0
              transition-all
              duration-500
              group-hover:scale-100
              group-hover:opacity-100
            "
          >
            ↗
          </div>

          {/* BOTTOM IMAGE LABEL */}

          <div
            className="
              absolute
              bottom-6
              left-6
              right-6
              z-10
              sm:bottom-8
              sm:left-8
              sm:right-8
            "
          >
            <div
              className="
                flex
                items-end
                justify-between
                gap-5
              "
            >

              <div>
                <span
                  className="
                    mb-2
                    block
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[3px]
                    text-[#D4A017]
                  "
                >
                  Polymer Material
                </span>

                <span
                  className="
                    block
                    text-[12px]
                    uppercase
                    tracking-[2px]
                    text-white/70
                  "
                >
                  Industrial Grade
                </span>
              </div>

              <span
                className="
                  hidden
                  text-[9px]
                  uppercase
                  tracking-[3px]
                  text-white/50
                  sm:block
                "
              >
                Resol Industries
              </span>

            </div>
          </div>

        </div>


        {/* =========================================
            PRODUCT INFORMATION
        ========================================= */}

        <div className="relative">

          <div
            className="
              relative
              flex
              items-start
              justify-between
              gap-6
              border-b
              border-black/15
              py-6
              md:py-7
            "
          >

            {/* GOLD ACTIVE LINE */}

            <span
              className="
                absolute
                bottom-[-1px]
                left-0
                h-[2px]
                w-0
                bg-[#D4A017]
                transition-all
                duration-700
                group-hover:w-full
              "
            />

            <div>

              {/* CATEGORY */}

              <div className="mb-3 flex items-center gap-3">

                <span
                  className="
                    h-[2px]
                    w-8
                    bg-[#D4A017]
                    transition-all
                    duration-500
                    group-hover:w-14
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[3px]
                    text-[#888]
                  "
                >
                  Polymer Material
                </span>

              </div>

              {/* TITLE */}

              <h3
                className="
                  text-[28px]
                  font-medium
                  leading-[0.95]
                  tracking-[-1.5px]
                  text-black
                  transition-colors
                  duration-400
                  group-hover:text-[#D4A017]
                  sm:text-[36px]
                  md:text-[43px]
                "
              >
                {product.title}
              </h3>

            </div>


            {/* ARROW */}

            <div
              className="
                mt-1
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                border
                border-black/20
                text-[18px]
                text-black
                transition-all
                duration-500
                group-hover:border-[#D4A017]
                group-hover:bg-[#D4A017]
                group-hover:text-black
              "
            >
              <span
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                ↗
              </span>
            </div>

          </div>

        </div>

      </Link>
    </motion.div>
  );
}


export default function ProductsSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        md:py-32
        lg:py-40
      "
    >

      {/* =========================================
          BACKGROUND DETAILS
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[350px]
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#D4A017]/[0.035]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[400px]
          left-[-220px]
          h-[550px]
          w-[550px]
          rounded-full
          bg-black/[0.025]
          blur-3xl
        "
      />


      <div
        className="
          relative
          mx-auto
          max-w-[1500px]
          px-5
          sm:px-8
          md:px-12
          lg:px-16
        "
      >

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mb-16 md:mb-24 lg:mb-28">

          <div
            className="
              grid
              grid-cols-1
              gap-10
              lg:grid-cols-12
              lg:items-end
            "
          >

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

                <span
                  className="
                    h-px
                    w-14
                    bg-[#D4A017]
                  "
                />

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[5px]
                    text-[#D4A017]
                  "
                >
                  03 — Products
                </span>

              </div>

              <p
                className="
                  mt-6
                  max-w-sm
                  text-sm
                  leading-7
                  text-[#666]
                  md:text-base
                "
              >
                A dependable portfolio of polymer and industrial
                materials supplied for demanding applications across India.
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


          {/* LINE */}

          <div
            className="
              mt-10
              h-px
              w-full
              bg-black/15
              md:mt-14
            "
          />

        </div>


        {/* =========================================
            PRODUCT GRID
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-x-8
            gap-y-20
            md:gap-x-10
            md:gap-y-28
            lg:grid-cols-12
            lg:gap-y-32
          "
        >

          {/* 01 */}

          <div className="lg:col-span-7">
            <ProductItem
              product={products[0]}
              index={0}
            />
          </div>


          {/* 02 */}

          <div
            className="
              lg:col-span-5
              lg:mt-[150px]
            "
          >
            <ProductItem
              product={products[1]}
              index={1}
            />
          </div>


          {/* 03 */}

          <div
            className="
              lg:col-span-5
              lg:ml-[8%]
            "
          >
            <ProductItem
              product={products[2]}
              index={2}
            />
          </div>


          {/* 04 */}

          <div
            className="
              lg:col-span-7
              lg:mt-[120px]
            "
          >
            <ProductItem
              product={products[3]}
              index={3}
            />
          </div>


          {/* 05 */}

          <div
            className="
              lg:col-span-7
              lg:mt-[70px]
            "
          >
            <ProductItem
              product={products[4]}
              index={4}
            />
          </div>


          {/* 06 */}

          <div
            className="
              lg:col-span-5
              lg:mt-[220px]
            "
          >
            <ProductItem
              product={products[5]}
              index={5}
            />
          </div>

        </div>


        {/* =========================================
            BOTTOM CTA
        ========================================= */}

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
            md:mt-32
            md:flex
            md:items-end
            md:justify-between
          "
        >

          <div>

            <span
              className="
                mb-4
                block
                text-[10px]
                font-semibold
                uppercase
                tracking-[4px]
                text-[#D4A017]
              "
            >
              Explore Our Range
            </span>

            <h3
              className="
                max-w-2xl
                text-3xl
                font-medium
                tracking-[-1.5px]
                text-black
                md:text-5xl
              "
            >
              Materials that keep
              <span className="text-[#D4A017]">
                {" "}industry moving.
              </span>
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

            <span
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            >
              →
            </span>

          </Link>

        </motion.div>

      </div>

    </section>
  );
}


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedTitle from "@/components/AnimatedTitle";

const products = [
  {
    number: "01",
    title: "PVC Resin",
    category: "POLYMER MATERIAL",
    image: "/resol products.webp",
    link: "/products/pvc-resin",
  },
  {
    number: "02",
    title: "EVA Resin",
    category: "POLYMER MATERIAL",
    image: "/resol products.webp",
    link: "/products/eva-resin",
  },
  {
    number: "03",
    title: "Polyethylene (PE)",
    category: "POLYMER MATERIAL",
    image: "/resol products.webp",
    link: "/products/polyethylene",
  },
  {
    number: "04",
    title: "Polypropylene (PP)",
    category: "POLYMER MATERIAL",
    image: "/resol products.webp",
    link: "/products/polypropylene",
  },
  {
    number: "05",
    title: "Polystyrene",
    category: "POLYMER MATERIAL",
    image: "/resol products.webp",
    link: "/products/polystyrene",
  },
  {
    number: "06",
    title: "POE",
    category: "POLYMER MATERIAL",
    image: "/resol products.webp",
    link: "/products/poe",
  },
];

function ProductItem({ product, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      <Link href={product.link} className="block">

        {/* IMAGE */}

        <div
          className="
            relative
            mx-auto
            h-[280px]
            w-full
            overflow-hidden
            bg-[#F0F0ED]
            sm:h-[330px]
            lg:h-[360px]
          "
        >

          <Image
            src={product.image}
            alt={product.title}
            fill
            priority={index < 2}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="
              object-cover
              transition-transform
              duration-[1200ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:scale-[1.06]
            "
          />

          {/* LIGHT OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-black/0
              transition-all
              duration-500
              group-hover:bg-black/10
            "
          />

          {/* TOP NUMBER */}

          <div
            className="
              absolute
              left-5
              top-5
              flex
              items-center
              gap-3
            "
          >
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
                text-[10px]
                font-semibold
                tracking-[4px]
                text-white
                drop-shadow-md
              "
            >
              {product.number}
            </span>
          </div>

          {/* GOLD FRAME EFFECT */}

          <div
            className="
              pointer-events-none
              absolute
              inset-4
              border
              border-[#D4A017]
              opacity-0
              scale-[1.04]
              transition-all
              duration-700
              group-hover:scale-100
              group-hover:opacity-100
            "
          />

          {/* CENTER ACTION */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-14
              w-14
              -translate-x-1/2
              -translate-y-1/2
              scale-75
              items-center
              justify-center
              bg-[#D4A017]
              text-xl
              text-black
              opacity-0
              transition-all
              duration-500
              group-hover:scale-100
              group-hover:opacity-100
            "
          >
            ↗
          </div>

          {/* BOTTOM LABEL */}

          <div
            className="
              absolute
              bottom-5
              left-5
              right-5
              flex
              items-end
              justify-between
            "
          >
            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[3px]
                text-white
                drop-shadow-md
              "
            >
              Resol Industries
            </span>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[2px]
                text-white/70
              "
            >
              Industrial
            </span>
          </div>

        </div>


        {/* PRODUCT INFO */}

        <div
          className="
            relative
            border-b
            border-black/15
            py-5
          "
        >

          {/* ANIMATED GOLD LINE */}

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

          <div
            className="
              flex
              items-center
              justify-between
              gap-5
            "
          >

            <div className="min-w-0">

              <div
                className="
                  mb-2
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[3px]
                    text-[#999]
                  "
                >
                  {product.category}
                </span>
              </div>

              <h3
                className="
                  text-[25px]
                  font-medium
                  leading-none
                  tracking-[-1.2px]
                  text-black
                  transition-colors
                  duration-300
                  group-hover:text-[#D4A017]
                  sm:text-[30px]
                "
              >
                {product.title}
              </h3>

            </div>


            {/* ARROW */}

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                border
                border-black/20
                text-[17px]
                text-black
                transition-all
                duration-500
                group-hover:border-[#D4A017]
                group-hover:bg-[#D4A017]
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
    </motion.article>
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
        lg:py-36
      "
    >

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-[300px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#D4A017]/[0.035]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[300px]
          left-[-200px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-black/[0.025]
          blur-3xl
        "
      />


      <div
        className="
          relative
          mx-auto
          max-w-[1450px]
          px-5
          sm:px-8
          md:px-12
          lg:px-16
        "
      >

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mb-16 md:mb-24">

          <div
            className="
              grid
              grid-cols-1
              gap-10
              lg:grid-cols-12
              lg:items-end
            "
          >

            {/* LEFT TEXT */}

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


            {/* HEADING */}

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
            PRODUCT SHOWCASE
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-x-10
            gap-y-20
            md:grid-cols-2
            md:gap-y-24
            lg:gap-x-14
            lg:gap-y-28
          "
        >

          {products.map((product, index) => (
            <div
              key={product.number}
              className={`
                ${
                  index === 1
                    ? "lg:mt-[100px]"
                    : ""
                }

                ${
                  index === 3
                    ? "lg:mt-[80px]"
                    : ""
                }

                ${
                  index === 5
                    ? "lg:mt-[100px]"
                    : ""
                }
              `}
            >
              <ProductItem
                product={product}
                index={index}
              />
            </div>
          ))}

        </div>


        {/* =========================================
            BOTTOM STATEMENT
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
                leading-[1]
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


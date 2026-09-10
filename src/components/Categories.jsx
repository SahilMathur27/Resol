"use client";

import { motion } from "framer-motion";
import AnimatedTitle from "@/components/AnimatedTitle";

/* ============================================================
   PRODUCT CATEGORIES
============================================================ */

const categories = [
  {
    number: "01",
    name: "PVC Resin",
    image: "/Adhesives.webp",
    description:
      "High-quality PVC resin solutions for pipes, profiles, flooring and diverse industrial applications.",
  },
  {
    number: "02",
    name: "Calcium Carbonate",
    image: "/Calcium carbonate.webp",
    description:
      "Reliable mineral filler material designed for improved processing, performance and cost efficiency.",
  },
  {
    number: "03",
    name: "Citric Acid",
    image: "/Citric Acid.webp",
    description:
      "Versatile citric acid solutions suitable for industrial, food and specialty chemical applications.",
  },
  {
    number: "04",
    name: "Plasticizers",
    image: "/Plasticizers.webp",
    description:
      "Performance-oriented plasticizers supporting flexibility, durability and processing requirements.",
  },
  {
    number: "05",
    name: "Melamine",
    image: "/Melamine-2 (1).webp",
    description:
      "Industrial-grade melamine material for coatings, laminates, resins and specialized applications.",
  },
];

/* ============================================================
   ANIMATION VARIANTS
============================================================ */

const rowVariants = {
  rest: {
    opacity: 1,
  },

  hover: {
    opacity: 1,
  },
};

const imageVariants = {
  rest: {
    opacity: 0,
    x: 140,
    scale: 0.55,
    rotateY: -65,
    rotateZ: 10,
  },

  hover: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    rotateZ: 0,

    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ============================================================
   CATEGORY COMPONENT
============================================================ */

function CategoryRow({ category, index }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={rowVariants}
      className="
        group
        relative
        border-b
        border-black/10
      "
    >

      {/* ======================================================
          DESKTOP
      ====================================================== */}

      <div
        className="
          relative
          hidden
          min-h-[170px]
          items-center
          overflow-visible
          py-8
          lg:flex
        "
      >

        {/* ====================================================
            LEFT GOLDEN ACTIVE LINE
        ==================================================== */}

        <motion.div
          variants={{
            rest: {
              scaleY: 0,
            },

            hover: {
              scaleY: 1,
            },
          }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            left-0
            top-0
            h-full
            w-[4px]
            origin-top
            bg-[#D4A017]
          "
        />


        {/* ====================================================
            NUMBER
        ==================================================== */}

        <div className="w-[110px] shrink-0 pl-6">

          <motion.span
            variants={{
              rest: {
                color: "rgba(0,0,0,0.30)",
              },

              hover: {
                color: "#D4A017",
              },
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              block
              text-[12px]
              font-bold
              tracking-[3px]
            "
          >
            {category.number}
          </motion.span>

        </div>


        {/* ====================================================
            CATEGORY CONTENT
        ==================================================== */}

        <div className="relative z-10 flex-1">

          {/* TITLE LINE */}

          <div className="flex items-center gap-4">

            <motion.span
              variants={{
                rest: {
                  width: 30,
                },

                hover: {
                  width: 55,
                },
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                block
                h-[1px]
                bg-[#D4A017]
              "
            />

            <motion.h3
              variants={{
                rest: {
                  x: 0,
                  color: "#171717",
                },

                hover: {
                  x: 8,
                  color: "#D4A017",
                },
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-[36px]
                font-black
                uppercase
                leading-none
                tracking-[-2px]
                sm:text-[42px]
                xl:text-[50px]
              "
            >
              {category.name}
            </motion.h3>

          </div>


          {/* DESCRIPTION */}

          <motion.p
            variants={{
              rest: {
                opacity: 0.45,
                x: 0,
              },

              hover: {
                opacity: 0.70,
                x: 8,
              },
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              mt-5
              max-w-[520px]
              text-[12px]
              leading-6
              text-black
            "
          >
            {category.description}
          </motion.p>

        </div>


        {/* ====================================================
            HOVER IMAGE
            HIDDEN BY DEFAULT
        ==================================================== */}

        <motion.div
          variants={imageVariants}
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
          className="
            pointer-events-none
            absolute
            right-[95px]
            top-1/2
            z-30
            h-[145px]
            w-[225px]
            -translate-y-1/2
            overflow-hidden
            bg-white
            shadow-[0_25px_60px_rgba(0,0,0,0.20)]
          "
        >

          {/* PRODUCT IMAGE */}

          <img
            src={category.image}
            alt={category.name}
            className="
              h-full
              w-full
              object-cover
            "
          />


          {/* IMAGE OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-tr
              from-black/30
              via-transparent
              to-white/10
            "
          />


          {/* IMAGE BOTTOM LABEL */}

          <div
            className="
              absolute
              bottom-3
              left-3
              flex
              items-center
              gap-2
            "
          >

            <motion.span
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                text-[16px]
                text-white
              "
            >
              ↻
            </motion.span>

            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[2px]
                text-white
              "
            >
              Product
            </span>

          </div>

        </motion.div>


        {/* ====================================================
            GOLDEN ARROW
        ==================================================== */}

        <motion.div
          variants={{
            rest: {
              backgroundColor: "transparent",
              borderColor: "rgba(0,0,0,0.15)",
              color: "rgba(0,0,0,0.45)",
              scale: 1,
            },

            hover: {
              backgroundColor: "#D4A017",
              borderColor: "#D4A017",
              color: "#111111",
              scale: 1.08,
            },
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            absolute
            right-3
            flex
            h-11
            w-11
            items-center
            justify-center
            border
            text-lg
          "
        >
          →
        </motion.div>

      </div>


      {/* ======================================================
          MOBILE
          IMAGE REMAINS HIDDEN
      ====================================================== */}

      <div
        className="
          flex
          flex-col
          py-7
          lg:hidden
        "
      >

        {/* TOP META */}

        <div className="flex items-center gap-4">

          <span
            className="
              text-[10px]
              font-bold
              tracking-[3px]
              text-[#D4A017]
            "
          >
            {category.number}
          </span>

          <span className="h-px w-8 bg-black/15" />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[2px]
              text-black/35
            "
          >
            Industrial Material
          </span>

        </div>


        {/* TITLE */}

        <div className="mt-5">

          <h3
            className="
              text-[27px]
              font-black
              uppercase
              leading-[0.95]
              tracking-[-1px]
              text-[#171717]
            "
          >
            {category.name}
          </h3>

          <p
            className="
              mt-3
              max-w-[520px]
              text-[11px]
              leading-5
              text-black/45
            "
          >
            {category.description}
          </p>

        </div>


        {/* BOTTOM */}

        <div className="mt-6 flex items-center justify-between">

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[2px]
              text-black/35
            "
          >
            Explore Product
          </span>


          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              bg-[#D4A017]
              text-sm
              font-medium
              text-black
            "
          >
            →
          </span>

        </div>

      </div>

    </motion.div>
  );
}


/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function Categories() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f5f3ef]
        py-20
        md:py-28
      "
    >

      {/* ======================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[180px]
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-black/[0.045]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[80px]
          -top-[80px]
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-black/[0.045]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[200px]
          -left-[180px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#D4A017]/[0.035]
          blur-[100px]
        "
      />


      {/* ======================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1380px]
          px-5
          sm:px-8
          lg:px-12
        "
      >

        {/* ====================================================
            HEADER
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            border-b
            border-black/10
            pb-12
            lg:grid-cols-[1fr_0.7fr]
            lg:items-end
          "
        >

          {/* LEFT HEADER */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <div
              className="
                mb-6
                flex
                items-center
                gap-4
              "
            >

              <span className="h-[2px] w-12 bg-[#D4A017]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[4px]
                  text-black/50
                "
              >
                Our Products
              </span>

            </div>


            {/* REUSABLE TITLE */}

            <AnimatedTitle
              text="PRODUCT"
              highlight="CATEGORIES"
              delay={0.15}
              duration={0.8}
              letterDelay={0.04}
              color="#111111"
              highlightColor="#D4A017"
              className="
                text-[46px]
                font-black
                uppercase
                leading-[0.86]
                tracking-[-3px]
                sm:text-[60px]
                md:text-[74px]
                lg:text-[86px]
              "
            />

          </motion.div>


          {/* RIGHT HEADER */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
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
              duration: 0.7,
              delay: 0.15,
            }}
          >

            <p
              className="
                max-w-xl
                text-sm
                leading-7
                text-black/55
                md:text-[15px]
              "
            >
              Explore our carefully selected range of industrial raw
              materials and specialty chemicals, sourced to deliver
              consistency, reliability and dependable performance.
            </p>


            <div
              className="
                mt-7
                flex
                items-center
                gap-5
              "
            >

              <span
                className="
                  text-4xl
                  font-black
                  tracking-[-2px]
                  text-[#111111]
                "
              >
                05
              </span>

              <div>

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[3px]
                    text-black/40
                  "
                >
                  Product
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-black/70
                  "
                >
                  Categories
                </p>

              </div>

            </div>

          </motion.div>

        </div>


        {/* ====================================================
            CATEGORIES
        ==================================================== */}

        <div className="mt-8">

          {categories.map((category, index) => (
            <CategoryRow
              key={category.name}
              category={category}
              index={index}
            />
          ))}

        </div>


        {/* ====================================================
            BOTTOM INFO
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-4
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p
            className="
              text-[10px]
              uppercase
              tracking-[2px]
              text-black/30
            "
          >
            Quality Materials • Reliable Sourcing • Consistent Performance
          </p>


          <div className="flex items-center gap-3">

            <span className="h-[1px] w-10 bg-[#D4A017]" />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[3px]
                text-black/40
              "
            >
              Resol Industries
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaCheck,
  FaGlobe,
  FaHandshake,
  FaIndustry,
  FaBoxOpen,
  FaUsers,
  FaAward,
  FaLocationDot,
} from "react-icons/fa6";
import Scroll from "@/components/Scroll";
import Counter from "@/components/Counter";
import OurTeam from "@/components/OurTeam";

/* ============================================================
   ANIMATION VARIANTS
============================================================ */

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* ============================================================
   JOURNEY DATA
============================================================ */

const journey = [
  {
    year: "2005",
    title: "The Beginning",
    text: "Resol Industries began its journey in 2005 with a focus on importing and distributing PVC Resin and other industrial materials. With a clear focus on customer requirements and dependable sourcing, the company steadily developed its presence in the Indian market.",
  },
  {
    year: "01",
    title: "Expanding Our Product Portfolio",
    text: "Over the years, we expanded beyond PVC Resin to include products such as Calcium Carbonate, EVA Resin, Polyethylene, Polypropylene, PET Resin, Plasticizers, Rubber, Fillers, Activators and Colourants.",
  },
  {
    year: "02",
    title: "Growing Market Presence",
    text: "With an experienced team and established business relationships, we have continued to strengthen our presence across India and serve customers from diverse industrial sectors.",
  },
  {
    year: "03",
    title: "Strong International Relationships",
    text: "Our long-term relationships with international sources form an important part of our business. These connections help us maintain a diverse sourcing network and respond to changing market and customer requirements.",
  },
  {
    year: "Today",
    title: "Where We Stand Today",
    text: "Today, Resol Industries continues to operate as an established importer of PVC Resin and other industrial materials, serving customers across India. Our growth has been driven by product-focused sourcing, reliable service, and relationships built over the years.",
  },
];

/* ============================================================
   DIFFERENTIATORS
============================================================ */

const differentiators = [
  {
    icon: <FaAward />,
    title: "Established Industry Experience",
    text: "Founded in 2005, we bring extensive experience in importing and distributing industrial materials for customers across India.",
  },
  {
    icon: <FaUsers />,
    title: "Customer-Focused Approach",
    text: "We focus on understanding customer requirements and building long-term relationships through responsive service, reliability, and transparent business practices.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Diverse Product Portfolio",
    text: "From PVC Resin and Calcium Carbonate to EVA Resin, PET Resin, Plasticizers, Rubber, Fillers, Activators, and Colourants, our portfolio caters to varied industrial requirements.",
  },
  {
    icon: <FaGlobe />,
    title: "Pan-India Market Reach",
    text: "Our operations and distribution network enable us to serve customers across different regions and industries throughout India.",
  },
];

/* ============================================================
   QUALITY DATA
============================================================ */

const commitments = [
  {
    number: "01",
    title: "Quality-Focused Sourcing",
    text: "We work with established international sources to bring reliable industrial materials to the Indian market.",
  },
  {
    number: "02",
    title: "Consistent Product Standards",
    text: "We focus on maintaining consistent standards across our product range to meet diverse industrial requirements.",
  },
  {
    number: "03",
    title: "Diverse Product Portfolio",
    text: "Our range includes PVC Resin, Calcium Carbonate, EVA Resin, PET Resin, Plasticizers, Rubber, Fillers, Activators, Colourants, and other industrial materials.",
  },
  {
    number: "04",
    title: "Customer-Centric Approach",
    text: "We understand the requirements of different industries and work to provide suitable products and dependable service.",
  },
  {
    number: "05",
    title: "Long-Term Relationships",
    text: "We believe in building lasting relationships with customers and international business partners through integrity, transparency, and reliability.",
  },
  {
    number: "06",
    title: "Pan-India Reach",
    text: "Our established operations enable us to serve customers across different regions and industries throughout India.",
  },
];

/* ============================================================
   MAIN PAGE
============================================================ */

export default function AboutUs() {
  return (
    
    <main className="min-h-screen overflow-hidden bg-[#FAF9F4] text-[#17130B]">

      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#D4A017]/[0.07]
            blur-[130px]
          "
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            top-[900px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#D4A017]/[0.05]
            blur-[140px]
          "
        />

      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          z-10
          px-5
          pb-16
          pt-28
          md:px-8
          md:pb-24
          md:pt-36
        "
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

            {/* HERO CONTENT */}

            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer}
            >

              <motion.div
                variants={fadeUp}
                className="mb-6 flex items-center gap-3"
              >

                <span className="h-px w-10 bg-[#D4A017]" />

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#B8860B]
                  "
                >
                  About Resol Industries
                </span>

              </motion.div>

              {/* HEADING */}

              <motion.h1
                variants={staggerContainer}
                className="
                  text-4xl
                  font-bold
                  leading-[1.08]
                  tracking-tight
                  text-[#17130B]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
              >

                <motion.span
                  variants={fadeUp}
                  className="block"
                >
                  Built on Experience.
                </motion.span>

                <motion.span
                  variants={fadeUp}
                  className="block text-[#C28E0B]"
                >
                  Driven by Reliability.
                </motion.span>

              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="
                  mt-7
                  max-w-2xl
                  text-base
                  leading-7
                  text-[#6F695F]
                  md:text-lg
                  md:leading-8
                "
              >
                Resol Industries Ltd. is an established importer and
                distributor of industrial materials, serving businesses
                across India through dependable sourcing and long-term
                relationships.
              </motion.p>

              {/* BUTTONS */}

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-4"
              >

                <Link
                  href="/products"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#D4A017]
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_10px_30px_rgba(212,160,23,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#B8860B]
                    hover:shadow-[0_15px_35px_rgba(212,160,23,0.28)]
                  "
                >
                  Explore Our Products

                  <FaArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </Link>

                <Link
                  href="/contact-us"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#DED7C8]
                    bg-white
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-[#302B21]
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#D4A017]
                    hover:shadow-md
                  "
                >
                  Contact Us
                </Link>

              </motion.div>

            </motion.div>

            {/* HERO IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                x: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease,
              }}
              className="relative"
            >

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >

                <div
                  className="
                    absolute
                    -right-5
                    -top-5
                    h-32
                    w-32
                    rounded-full
                    bg-[#D4A017]/10
                    blur-3xl
                  "
                />

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-[#E4DCCB]
                    bg-white
                    p-3
                    shadow-[0_25px_70px_rgba(50,40,20,0.10)]
                  "
                >

                  <motion.div
                    initial={{ scale: 1.12 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 1.4,
                      ease,
                    }}
                    className="
                      relative
                      min-h-[380px]
                      overflow-hidden
                      rounded-[22px]
                      bg-[#F1EBDD]
                      md:min-h-[470px]
                    "
                  >

                    <Image
                      src="/About/pvc resin cate.webp"
                      alt="Resol Industries"
                      fill
                      priority
                      className="object-cover"
                    />

                  </motion.div>

                  {/* EXPERIENCE BADGE */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 25,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.8,
                      ease,
                    }}
                    className="
                      absolute
                      bottom-8
                      left-8
                      rounded-2xl
                      border
                      border-white/60
                      bg-white/95
                      px-5
                      py-4
                      shadow-xl
                      backdrop-blur-md
                    "
                  >

                    <p
                      className="
                        text-3xl
                        font-bold
                        text-[#B8860B]
                      "
                    >
                      2005
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-[#777066]
                      "
                    >
                      Established
                    </p>

                  </motion.div>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ABOUT SECTION
      ====================================================== */}

      <section
        className="
          relative
          z-10
          border-y
          border-[#E9E2D4]
          bg-white
          px-5
          py-13
          md:px-8
          md:py-15
        "
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* IMAGE */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="
                relative
                order-2
                lg:order-1
              "
            >

              <motion.div
                animate={{
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -bottom-5
                  -left-5
                  h-28
                  w-28
                  border
                  border-[#D4A017]/30
                "
              />

              <div
                className="
                  relative
                  min-h-[380px]
                  overflow-hidden
                  rounded-[26px]
                  bg-[#F1EBDD]
                  shadow-[0_20px_60px_rgba(50,40,20,0.08)]
                  md:min-h-[600px]
                "
              >

                <motion.div
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    ease,
                  }}
                  className="absolute inset-0"
                >

                  <Image
                    src="/About/about-us-4.webp"
                    alt="About Resol Industries"
                    fill
                    className="object-cover"
                  />

                </motion.div>

              </div>

            </motion.div>

            {/* CONTENT */}

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="order-1 lg:order-2"
            >

              <SectionLabel text="Who We Are" />

              <h2
                className="
                  mt-5
                  text-3xl
                  font-bold
                  leading-tight
                  text-[#17130B]
                  md:text-5xl
                "
              >
                About

                <span className="text-[#C28E0B]">
                  {" "}Resol Industries Ltd.
                </span>
              </h2>

              <div
                className="
                  mt-7
                  space-y-5
                  text-base
                  leading-7
                  text-[#6D675D]
                "
              >

                <p>
                  Resol Industries Ltd. (RIL) is an established{" "}
                  <span className="font-semibold text-[#29241B]">
                    PVC Resin importer
                  </span>{" "}
                  founded in 2005, with its head office in New Delhi,
                  India. We specialize in importing and distributing a
                  diverse range of industrial materials.
                </p>

                <p>
                  Our product portfolio includes{" "}
                  <span className="font-semibold text-[#29241B]">
                    PVC Resin, Calcium Carbonate, EVA Resin, LLDPE,
                    LDPE, PET Resin, Plasticizers, Natural & Synthetic
                    Rubber, Fillers, Activators and Colorants.
                  </span>
                </p>

                <p>
                  Over the years, we have built a strong presence in
                  the Indian market by developing reliable international
                  sourcing networks and long-term business relationships.
                </p>

                <p>
                  Our imported products serve a wide range of industries,
                  including PVC pipes and fittings, footwear, PVC
                  flooring, packaging, plastics, adhesives, textiles,
                  paints & coatings, and vinyl.
                </p>

              </div>

              {/* VALUES */}
{/* STATS */}

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                }}
                className="mt-8 grid grid-cols-3 gap-3"
              >

                <Stat
                  number="2005"
                  label="Founded"
                />

                <Stat
                  number="20+"
                  label="Years Experience"
                />

                <Stat
                  number="Pan India"
                  label="Market Reach"
                />

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          OUR BUSINESS
      ====================================================== */}

      <section
  className="
    relative
    z-10
    overflow-hidden
    px-5
    py-16
    md:px-8
    md:py-20
  "
>
  {/* =====================================================
      PARALLAX BACKGROUND
  ====================================================== */}

  <div className="absolute inset-0 -z-20">
    <motion.div
      initial={{ scale: 1.08 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="absolute inset-0"
    >
      <img
        src="/Calcium carbonate.webp"
        alt=""
        className="
          h-full
          w-full
          object-cover
          object-center
        "
      />
    </motion.div>
  </div>


  {/* =====================================================
      BLACK OVERLAY
  ====================================================== */}

  <div
    className="
      absolute
      inset-0
      -z-10
      bg-black/75
    "
  />


  {/* =====================================================
      GOLD PARALLAX GLOW
  ====================================================== */}

  <motion.div
    animate={{
      y: [0, -25, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      -right-32
      top-20
      -z-10
      h-[400px]
      w-[400px]
      rounded-full
      bg-[#D4A017]/10
      blur-[120px]
    "
  />


  <div className="relative mx-auto max-w-7xl">

    {/* =================================================
        HEADING + CONTENT
    ================================================= */}

    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

      {/* HEADING */}

      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >

        <SectionLabel text="Our Business" />

        <h2
          className="
            mt-5
            text-3xl
            font-bold
            leading-tight
            text-white
            md:text-5xl
          "
        >
          Connecting Global

          <span className="block text-[#D4A017]">
            Sources With India.
          </span>
        </h2>

      </motion.div>


      {/* CONTENT */}

      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          space-y-6
          text-base
          leading-6
          text-gray-300
        "
      >

        <p>
          Our business is built around international sourcing and
          the import of industrial materials for the Indian market.
          We work with established global sources to maintain a
          diverse product portfolio and dependable availability.
        </p>

        <p>
          Our products are marketed under the{" "}
          <span className="font-semibold text-white">
            Resol Industries brand
          </span>
          , allowing us to build a consistent presence in the
          Indian market while maintaining our focus on product
          quality and customer requirements.
        </p>

        <p>
          With operations serving customers across India, we
          continue to expand our product portfolio and strengthen
          our market presence through responsible business
          practices and long-term partnerships.
        </p>

      </motion.div>

    </div>


    {/* =================================================
        BUSINESS CARDS
    ================================================= */}

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="
        mt-14
        grid
        gap-4
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >

      <BusinessCard
        icon={<FaGlobe />}
        title="Global Sourcing"
        text="Established international sourcing networks."
      />

      <BusinessCard
        icon={<FaIndustry />}
        title="Industrial Materials"
        text="Diverse materials for multiple industries."
      />

      <BusinessCard
        icon={<FaHandshake />}
        title="Long-Term Partners"
        text="Relationships built on reliability and trust."
      />

      <BusinessCard
        icon={<FaLocationDot />}
        title="Pan-India Reach"
        text="Serving customers across India."
      />

    </motion.div>

  </div>

</section>

    {/* Our Teams  */}


      <OurTeam/>

      {/* =====================================================
          JOURNEY
      ====================================================== */}

      <section
        className="
          relative
          z-10
          overflow-hidden
          bg-white
          px-5
          py-13
          md:px-8
          md:py-15
        "
      >

        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mb-14"
          >

            <SectionLabel text="Our Journey" />

            <h2
              className="
                mt-5
                max-w-3xl
                text-3xl
                font-bold
                leading-tight
                md:text-5xl
              "
            >
              More Than Two Decades

              <span className="text-[#C28E0B]">
                {" "}of Progress.
              </span>
            </h2>

          </motion.div>

          {/* TIMELINE */}

          <div className="relative">

            {/* ANIMATED CENTER LINE */}

            <motion.div
              initial={{
                scaleY: 0,
                originY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 1.5,
                ease,
              }}
              className="
                absolute
                bottom-0
                left-[19px]
                top-0
                w-px
                bg-[#E4DCCB]
                md:left-1/2
                md:-translate-x-1/2
              "
            />

            <div className="space-y-10 md:space-y-16">

              {journey.map((item, index) => (

                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -60 : 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease,
                  }}
                  className="
                    relative
                    grid
                    gap-6
                    pl-14
                    md:grid-cols-2
                    md:gap-16
                    md:pl-0
                  "
                >

                  {/* DOT */}

                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08 + 0.2,
                    }}
                    className="
                      absolute
                      left-[10px]
                      top-1
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      border-4
                      border-white
                      bg-[#D4A017]
                      shadow-[0_0_0_3px_rgba(212,160,23,0.15)]
                      md:left-1/2
                      md:-translate-x-1/2
                    "
                  />

                  {/* YEAR */}

                  <div
                    className={`
                      ${
                        index % 2 === 0
                          ? "md:text-right"
                          : "md:order-2 md:text-left"
                      }
                    `}
                  >

                    <span
                      className="
                        text-4xl
                        font-bold
                        text-[#D4A017]/40
                        md:text-5xl
                      "
                    >
                      {item.year}
                    </span>

                  </div>

                  {/* CONTENT */}

                  <div
                    className={`
                      ${
                        index % 2 === 0
                          ? "md:order-2"
                          : "md:order-1"
                      }
                    `}
                  >

                    <motion.div
                      whileHover={{
                        y: -5,
                      }}
                      className="
                        rounded-2xl
                        border
                        border-[#E5DDCC]
                        bg-[#FAF9F4]
                        p-6
                        shadow-[0_8px_30px_rgba(50,40,20,0.04)]
                        transition-shadow
                        duration-300
                        hover:shadow-[0_18px_40px_rgba(50,40,20,0.08)]
                      "
                    >

                      <h3
                        className="
                          text-xl
                          font-bold
                          text-[#211D15]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-sm
                          leading-7
                          text-[#716B61]
                        "
                      >
                        {item.text}
                      </p>

                    </motion.div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHAT SETS US APART
      ====================================================== */}

      <section
        className="
          relative
          z-10
          bg-[#FAF9F4]
          px-5
          py-13
          md:px-8
          md:py-15
        "
      >

        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            className="mb-12"
          >

            <SectionLabel text="Why Resol Industries" />

            <h2
              className="
                mt-5
                text-3xl
                font-bold
                md:text-5xl
              "
            >
              What Sets Us

              <span className="text-[#C28E0B]">
                {" "}Apart
              </span>
            </h2>

          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid gap-5 md:grid-cols-2"
          >

            {differentiators.map((item, index) => (

              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#E4DCCB]
                  bg-white
                  p-6
                  shadow-[0_8px_30px_rgba(50,40,20,0.04)]
                  transition-all
                  duration-300
                  hover:border-[#D4A017]/50
                  hover:shadow-[0_18px_45px_rgba(50,40,20,0.08)]
                  md:p-8
                "
              >

                <span
                  className="
                    absolute
                    right-5
                    top-1
                    text-7xl
                    font-bold
                    text-[#17130B]/[0.035]
                  "
                >
                  0{index + 1}
                </span>

                <div className="relative">

                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#D4A017]/10
                      text-[#B8860B]
                      transition-all
                      duration-300
                      group-hover:bg-[#D4A017]
                      group-hover:text-white
                    "
                  >
                    {item.icon}
                  </motion.div>

                  <h3
                    className="
                      mt-5
                      text-xl
                      font-bold
                      text-[#211D15]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-[#716B61]
                    "
                  >
                    {item.text}
                  </p>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          QUALITY SECTION
      ====================================================== */}

      <section
        className="
          relative
          z-10
          overflow-hidden
          bg-[#17130B]
          px-5
          py-12
          text-white
          md:px-8
          md:py-15
        "
      >

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -right-40
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#D4A017]/10
            blur-[130px]
          "
        />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            {/* HEADING */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#D4A017]
                "
              >
                Our Commitment
              </p>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-bold
                  leading-tight
                  md:text-5xl
                "
              >
                Quality &

                <span className="block text-[#D4A017]">
                  Reliability
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-md
                  text-sm
                  leading-7
                  text-white/55
                "
              >
                Our approach is built around responsible sourcing,
                consistent standards, customer understanding and
                relationships that create long-term value.
              </p>

            </motion.div>

            {/* COMMITMENTS */}

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="grid gap-3 sm:grid-cols-2"
            >

              {commitments.map((item) => (

                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -5,
                    borderColor: "rgba(212,160,23,0.4)",
                  }}
                  className="
                    group
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-5
                    transition-all
                    duration-300
                    hover:bg-[#D4A017]/[0.07]
                  "
                >

                  <div className="flex items-center justify-between">

          

                  </div>

                  <h3
                    className="
                      mt-5 text-[20px]
                  
                      font-bold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                </motion.div>

              ))}

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="
          relative
          z-10
          bg-[#FAF9F4]
          px-5
          py-14
          md:px-8
          md:py-15
        "
      >

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              bg-[#D4A017]
              px-6
              py-12
              md:px-12
              md:py-16
            "
          >

            {/* DECORATION */}

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-24
                -top-32
                h-80
                w-80
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                items-start
                justify-between
                gap-8
                md:flex-row
                md:items-center
              "
            >

              <div className="max-w-2xl">

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-white/70
                  "
                >
                  Let&apos;s Discuss Your Requirements
                </p>

                <h2
                  className="
                    mt-4
                    text-3xl
                    font-bold
                    leading-tight
                    text-white
                    md:text-4xl
                  "
                >
                  Looking for PVC Resin or
                  other imported industrial materials?
                </h2>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-6
                    text-white/75
                  "
                >
                  Get in touch with Resol Industries to discuss your
                  requirements and find the right products for your
                  business.
                </p>

              </div>

              <motion.div
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >

                <Link
                  href="/contact-us"
                  className="
                    group
                    flex
                    flex-shrink-0
                    items-center
                    gap-3
                    rounded-full
                    bg-white
                    px-7
                    py-4
                    text-sm
                    font-bold
                    text-[#302B21]
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >

                  Contact Us Today

                  <FaArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </Link>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}

/* ============================================================
   SECTION LABEL
============================================================ */

function SectionLabel({ text }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -15,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex items-center gap-3"
    >

      <motion.span
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 32,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
        }}
        className="h-px bg-[#D4A017]"
      />

      <span
        className="
          text-xs
          font-bold
          uppercase
          tracking-[0.25em]
          text-[#B8860B]
        "
      >
        {text}
      </span>

    </motion.div>
  );
}

/* ============================================================
   BUSINESS CARD
============================================================ */

function BusinessCard({
  icon,
  title,
  text,
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        group
        rounded-2xl
        border
        border-[#E4DCCB]
        bg-white
        p-5
        shadow-[0_8px_25px_rgba(50,40,20,0.04)]
        transition-all
        duration-300
        hover:border-[#D4A017]/40
        hover:shadow-[0_18px_40px_rgba(50,40,20,0.08)]
      "
    >

      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.1,
        }}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-[#D4A017]/10
          text-[#B8860B]
          transition-all
          duration-300
          group-hover:bg-[#D4A017]
          group-hover:text-white
        "
      >
        {icon}
      </motion.div>

      <h3
        className="
          mt-5
          text-[19px]
          font-bold
          text-[#211D15]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          text-
          leading-6
          text-[#777066]
        "
      >
        {text}
      </p>

    </motion.div>
  );
}

/* ============================================================
   STAT
============================================================ */

function Stat({
  number,
  label,
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -5,
      }}
      className="
        rounded-2xl
        border
        border-[#E5DDCC]
        bg-[#FAF9F4]
        px-3
        py-4
        text-center
        transition-shadow
        duration-300
        hover:shadow-md
      "
    >

      <p
        className="
          text-lg
          font-bold
          text-[#B8860B]
          sm:text-xl
        "
      >
        {number}
      </p>

      <p
        className="
          mt-1
          text-[9px]
          font-bold
          uppercase
          tracking-wider
          text-[#858075]
          sm:text-[10px]
        "
      >
        {label}
      </p>

    </motion.div>
   
  //  Smooth Scroler 
 
  );
}
 <Scroll/>
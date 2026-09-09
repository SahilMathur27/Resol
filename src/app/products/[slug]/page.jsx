"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GOLD = "#D4A017";
const GOLD_DARK = "#B8860B";

const product = {
  name: "PVC Resin",
  category: "PVC Resin",

  images: [
    "/pvc resin cate.webp",
    "/pvc resin.webp",
    "/pvc resin cate.webp",
  ],

  titleBackground: "/Polymers.webp",

  price: "₹ 200",

  shortDescription:
    "RIL is a reliable PVC Resin Importer, offering Suspension Grade PVC Resin suitable for rigid PVC profile manufacturing. The imported resin is selected for consistent specifications, reliable processing, and suitability for industrial PVC applications.",

  specifications: [
    ["K Value", "57"],
    ["Grade", "Suspension"],
    ["Application", "Profiles"],
    ["Form", "Powder"],
    ["Polymer Type", "PVC Resin"],
    ["Plasticizer Use", "Rigid"],
    ["Color", "White"],
    ["Packaging Size", "25 kg"],
  ],

  benefits: [
    {
      title: "High Purity",
      text: "Consistent quality",
    },
    {
      title: "Excellent Processability",
      text: "Reliable processing",
    },
    {
      title: "Consistent Supply",
      text: "Dependable sourcing",
    },
  ],

  grades: [
    {
      number: "01",
      title: "Suspension Grade",
      description:
        "The most widely used PVC Resin grade, valued for its versatility, ease of processing, and excellent mechanical properties. Suitable for profiles, pipes, sheets, films, cable insulation, and other rigid PVC applications.",
    },
    {
      number: "02",
      title: "Emulsion Grade",
      description:
        "Ideal for applications requiring fine particle size and high surface area, including synthetic leather, flooring, coatings, and adhesives. It offers good dispersion and plasticizer absorption for suitable processing requirements.",
    },
  ],

  applications: [
    {
      title: "PVC Profiles",
      text: "Window frames, door profiles, and construction profiles",
    },
    {
      title: "Pipes & Fittings",
      text: "Rigid PVC pipes and related components",
    },
    {
      title: "Sheets & Films",
      text: "Industrial and commercial sheet and film applications",
    },
    {
      title: "Cable Insulation",
      text: "Insulation and protective applications for wires and cables",
    },
    {
      title: "Construction Products",
      text: "Various rigid PVC products used in construction",
    },
  ],

  whyChoose: [
    {
      title: "Trusted PVC Resin Importer",
      text: "Reliable sourcing of PVC Resin for industrial requirements",
    },
    {
      title: "Consistent Quality",
      text: "Products selected to meet defined grade and specification requirements",
    },
    {
      title: "Reliable Supply",
      text: "Dependable sourcing and availability for regular requirements",
    },
    {
      title: "Application-Focused Solutions",
      text: "Suitable PVC Resin options for different manufacturing needs",
    },
    {
      title: "Professional Service",
      text: "Responsive support from enquiry and sourcing through delivery",
    },
  ],

  aboutRIL: [
    "Trusted PVC Resin Importer",
    "Quality-focused sourcing and supply",
    "Reliable product solutions for industrial needs",
    "Commitment to consistent standards",
  ],
};

export default function ProductPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="bg-[#FBF7EC] text-[#222222]">
      {/* =====================================================
          TITLE SECTION
      ====================================================== */}

      <section className="relative mt-20 flex min-h-[320px] items-center justify-center overflow-hidden md:min-h-[380px] lg:min-h-[420px]">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{
            backgroundImage: `url("${product.titleBackground}")`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60" />

        <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-[#D4A017]/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#D4A017]/10 blur-3xl" />

        <div className="relative z-10 px-5 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm uppercase tracking-[0.3em] text-white/80 md:text-base"
          >
            Industrial Raw Material
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {product.name}
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-7 h-[3px] rounded-full"
            style={{
              backgroundColor: GOLD,
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-sm uppercase tracking-[0.2em] text-white/70"
          >
            Premium Quality • Industrial Grade
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <div className="mx-auto max-w-[1600px] px-5 py-4 sm:px-8 lg:px-12">
        <nav className="text-sm text-gray-500">
          <Link
            href="/"
            className="transition-colors hover:text-[#D4A017]"
          >
            Home
          </Link>

          <span className="mx-2">/</span>

          <Link
            href="/products"
            className="transition-colors hover:text-[#D4A017]"
          >
            Products
          </Link>

          <span className="mx-2">/</span>

          <span className="font-medium text-[#D4A017]">
            {product.name}
          </span>
        </nav>
      </div>

      {/* =====================================================
    PRODUCT HERO
====================================================== */}

<section className="mx-auto max-w-[1600px] px-5 py-8 sm:px-8 lg:py-12">
  <div
    className="
      grid
      grid-cols-1
      items-start
      gap-6
      lg:grid-cols-[minmax(0,1fr)_minmax(430px,0.85fr)_320px]
      lg:gap-8
    "
  >

    {/* =================================================
        STICKY PRODUCT MEDIA
        THUMBNAILS + MAIN IMAGE STICK TOGETHER
    ================================================= */}

    <div
      className="
        order-1
        self-start
        lg:sticky
        lg:top-[100px]
        lg:z-20
      "
    >
      <div
        className="
          grid
          grid-cols-[72px_minmax(0,1fr)]
          items-start
          gap-5
        "
      >

        {/* =============================================
            THUMBNAILS
        ============================================== */}

        <div className="flex flex-col gap-3">
          {product.images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`
                relative
                h-[68px]
                w-[68px]
                flex-shrink-0
                overflow-hidden
                rounded-lg
                border-2
                bg-white
                transition-all
                duration-300
                lg:h-[72px]
                lg:w-[72px]

                ${
                  activeImage === index
                    ? "scale-105 border-[#D4A017] shadow-lg shadow-[#D4A017]/20"
                    : "border-[#E4D8B8] hover:border-[#D4A017]"
                }
              `}
            >
              <Image
                src={image}
                alt={`${product.name} ${index + 1}`}
                fill
                className="object-contain p-1 "
                sizes="72px"
              />

              {activeImage === index && (
                <div className="absolute inset-0 rounded-lg border-2 border-[#D4A017]/30" />
              )}
            </button>
          ))}
        </div>

        {/* =============================================
            MAIN PRODUCT IMAGE
        ============================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="min-w-0"
        >
          <div
            className="
              relative
              flex
              h-[420px]
              w-full
              items-center
              justify-center
            "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

            {/* ACTUAL PRODUCT IMAGE */}

            <motion.div
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="
                relative
                h-full
                w-full
              "
            >
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                priority
                className="
                  object-contain
                  p-2 rounded-4xl
                "
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </motion.div>

            {/* ZOOM LABEL */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
              className="
                pointer-events-none
                absolute
                bottom-4
                right-4
                rounded-full
                bg-black/60
                px-3
                py-1.5
                text-xs
                text-white
                backdrop-blur-sm
              "
            >
              🔍 Zoom
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>


    {/* =================================================
        PRODUCT INFORMATION
    ================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: 0.1,
      }}
      className="order-2 self-start"
    >

      <div className="mb-4 inline-block rounded-full border border-[#D4A017]/20 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#B8860B]">
        {product.category}
      </div>

      <h2 className="mb-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[52px]">
        {product.name}
      </h2>

      <div
        className="mb-7 h-[3px] w-20 rounded-full"
        style={{
          backgroundColor: GOLD,
        }}
      />

      <p className="mb-8 text-lg leading-8 text-gray-600 lg:text-[19px]">
        {product.shortDescription}
      </p>

      {/* DETAILS */}

      <div className="overflow-hidden rounded-lg border-y border-[#DDCFAB] bg-[#FFFDF7] px-5 shadow-sm">
        <DetailRow label="K Value" value="57" />
        <DetailRow label="Grade" value="Suspension" />
        <DetailRow label="Application" value="Profiles" />
        <DetailRow label="Form" value="Powder" />
        <DetailRow label="Color" value="White" />
        <DetailRow label="Packaging" value="25 kg" />
      </div>

      {/* BUTTONS */}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">

        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-lg
              bg-gradient-to-r
              from-[#D4A017]
              to-[#B8860B]
              px-8
              py-4
              text-base
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-xl
            "
          >
            <span className="mr-2">📄</span>
            Get a Quote
          </Link>
        </motion.div>


        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          <a
            href="https://wa.me/919810929486"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              rounded-lg
              bg-gradient-to-r
              from-[#25A244]
              to-[#1D7A33]
              px-8
              py-4
              text-base
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-xl
            "
          >
            <span className="mr-2">💬</span>
            WhatsApp Now
          </a>
        </motion.div>

      </div>
    </motion.div>


    {/* =================================================
        WHY CHOOSE RIL
    ================================================= */}

    <motion.aside
      initial={{
        opacity: 0,
        x: 25,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      className="
        order-3
        self-start
        rounded-2xl
        border
        border-[#E3D4AF]
        bg-[#FFFDF7]
        p-6
        shadow-lg
        transition-shadow
        duration-300
        hover:shadow-xl
        sm:p-7
      "
    >

      {/* LOGO */}

      <div className="mb-8">
        <img
          src="/New-Project-6-e1775111050628.webp"
          alt="RIL"
          className="
            w-20
            object-contain
            transition-transform
            duration-300
            hover:scale-110
          "
        />
      </div>

      <h3 className="mb-6 text-xl font-semibold text-[#B8860B]">
        Why Choose RIL
      </h3>

      <div className="space-y-4">

        {[
          "Imported PVC resin from reliable sources",
          "Consistent product specifications",
          "Reliable supply for industrial applications",
          "Suitable for rigid PVC manufacturing",
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.1,
            }}
            className="group flex items-start gap-3"
          >
            <span
              className="
                mt-[8px]
                h-2.5
                w-2.5
                flex-shrink-0
                rounded-full
                transition-all
                duration-300
                group-hover:scale-125
              "
              style={{
                backgroundColor: GOLD,
              }}
            />

            <p className="text-base leading-7 text-gray-600 transition-colors group-hover:text-gray-800">
              {item}
            </p>
          </motion.div>
        ))}

      </div>


      {/* ABOUT */}

      <div className="mt-8 border-t border-[#E5D9BA] pt-8">

        <h3 className="mb-5 text-xl font-semibold text-[#B8860B]">
          About Resol Industries Ltd.
        </h3>

        <div className="space-y-4">

          {product.aboutRIL.map((item, index) => (
            <p
              key={index}
              className="
                text-base
                leading-7
                text-gray-600
                transition-colors
                hover:text-gray-800
              "
            >
              {item}
            </p>
          ))}

        </div>

      </div>

    </motion.aside>

  </div>
</section>

      {/* =====================================================
          TABS
      ====================================================== */}

      <section className="mt-8 border-t border-[#E3D5B3] bg-[#FFFDF7]">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

          {/* TAB BUTTONS */}

          <div className="flex justify-center">
            <div className="flex overflow-hidden rounded-t-xl border-b border-[#E0D5B8] bg-[#FBF7EC]">

              <button
                type="button"
                onClick={() => setActiveTab("description")}
                className={`
                  relative
                  px-6
                  py-5
                  text-base
                  font-medium
                  transition-all
                  duration-300
                  sm:px-12
                  sm:py-6
                  sm:text-lg
                  ${
                    activeTab === "description"
                      ? "bg-white text-black"
                      : "text-gray-500 hover:text-black"
                  }
                `}
              >
                📋 Description

                {activeTab === "description" && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full"
                    style={{
                      backgroundColor: GOLD,
                    }}
                  />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("specification")}
                className={`
                  relative
                  px-6
                  py-5
                  text-base
                  font-medium
                  transition-all
                  duration-300
                  sm:px-12
                  sm:py-6
                  sm:text-lg
                  ${
                    activeTab === "specification"
                      ? "bg-white text-black"
                      : "text-gray-500 hover:text-black"
                  }
                `}
              >
                📊 Specification

                {activeTab === "specification" && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full"
                    style={{
                      backgroundColor: GOLD,
                    }}
                  />
                )}
              </button>

            </div>
          </div>

          {/* TAB CONTENT */}

          <div className="py-14 lg:py-20">
            <AnimatePresence mode="wait">

              {/* =================================================
                  DESCRIPTION TAB
              ================================================= */}

              {activeTab === "description" && (
                <motion.div
                  key="description"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >

                  {/* OVERVIEW */}

                  <div className="max-w-[1250px]">
                    <p
                      className="mb-4 text-base font-medium uppercase tracking-[0.2em]"
                      style={{
                        color: GOLD_DARK,
                      }}
                    >
                      Product Overview
                    </p>

                    <h2 className="mb-7 text-4xl font-bold leading-tight sm:text-5xl lg:text-[52px]">
                      Reliable PVC Resin for Industrial Applications
                    </h2>

                    <div className="space-y-6 text-lg leading-8 text-gray-600 lg:text-[19px]">
                      <p>
                        PVC Resin is a versatile thermoplastic raw material
                        widely used in industrial manufacturing. It is valued
                        for its consistent processing characteristics,
                        durability, and suitability for producing rigid PVC
                        products.
                      </p>

                      <p>
                        As a PVC Resin Importer, Resol Industries Ltd. (RIL)
                        sources and supplies PVC Resin for manufacturers and
                        industrial users looking for dependable raw materials
                        with consistent specifications and application
                        performance.
                      </p>
                    </div>
                  </div>

                  {/* BENEFITS */}

                  <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {product.benefits.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          y: -8,
                          scale: 1.01,
                        }}
                        className="
                          rounded-xl
                          border
                          border-[#E4D6B3]
                          bg-gradient-to-br
                          from-[#FBF3DD]
                          to-[#F5E8CC]
                          p-7
                          transition-all
                          duration-300
                          hover:border-[#C59A4B]
                          hover:shadow-xl
                        "
                      >
                        <span
                          className="text-base font-semibold"
                          style={{
                            color: GOLD_DARK,
                          }}
                        >
                          0{index + 1}
                        </span>

                        <h3 className="mb-3 mt-5 text-xl font-semibold">
                          {item.title}
                        </h3>

                        <p className="text-base leading-7 text-gray-600">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* GRADES */}

                  <div className="mt-20">
                    <p
                      className="mb-4 text-base font-medium uppercase tracking-[0.2em]"
                      style={{
                        color: GOLD_DARK,
                      }}
                    >
                      Product Range
                    </p>

                    <h2 className="mb-10 text-4xl font-bold sm:text-5xl">
                      Available Grades
                    </h2>

                    <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
                      {product.grades.map((grade, index) => (
                        <motion.div
                          key={index}
                          whileHover={{
                            y: -6,
                            scale: 1.01,
                          }}
                          className="
                            rounded-xl
                            border
                            border-[#E3D5B3]
                            bg-gradient-to-br
                            from-[#FBF3DD]
                            to-[#F5E8CC]
                            p-8
                            transition-all
                            duration-300
                            hover:border-[#C59A4B]
                            hover:shadow-xl
                          "
                        >
                          <div className="flex items-start gap-6">
                            <span
                              className="text-4xl font-light"
                              style={{
                                color: GOLD_DARK,
                              }}
                            >
                              {grade.number}
                            </span>

                            <div>
                              <h3 className="mb-4 text-2xl font-semibold">
                                {grade.title}
                              </h3>

                              <p className="text-lg leading-8 text-gray-600">
                                {grade.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* APPLICATIONS */}

                  <div className="mt-20">
                    <p
                      className="mb-4 text-base font-medium uppercase tracking-[0.2em]"
                      style={{
                        color: GOLD_DARK,
                      }}
                    >
                      Applications
                    </p>

                    <h2 className="mb-10 text-4xl font-bold sm:text-5xl">
                      Where PVC Resin Is Used
                    </h2>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {product.applications.map((item, index) => (
                        <ApplicationCard
                          key={index}
                          title={item.title}
                          text={item.text}
                          number={index + 1}
                        />
                      ))}
                    </div>
                  </div>

                  {/* WHY CHOOSE */}

                  <div className="mt-20">
                    <p
                      className="mb-4 text-base font-medium uppercase tracking-[0.2em]"
                      style={{
                        color: GOLD_DARK,
                      }}
                    >
                      RIL Advantage
                    </p>

                    <h2 className="mb-10 text-4xl font-bold sm:text-5xl lg:text-[52px]">
                      Why Choose Us
                    </h2>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {product.whyChoose.map((item, index) => (
                        <WhyChooseCard
                          key={index}
                          title={item.title}
                          text={item.text}
                        />
                      ))}
                    </div>
                  </div>

                </motion.div>
              )}

              {/* =================================================
                  SPECIFICATION TAB
              ================================================= */}

              {activeTab === "specification" && (
                <motion.div
                  key="specification"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <div className="mx-auto max-w-[1200px]">

                    <div className="mb-12 text-center">
                      <p
                        className="mb-4 text-base font-medium uppercase tracking-[0.2em]"
                        style={{
                          color: GOLD_DARK,
                        }}
                      >
                        Product Details
                      </p>

                      <h2 className="text-4xl font-bold sm:text-5xl">
                        PVC Resin Specification
                      </h2>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-[#DED0AA] bg-gradient-to-br from-[#FBF3DD] to-[#F5E8CC] shadow-lg">

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">

                          <thead>
                            <tr
                              className="text-white"
                              style={{
                                background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`,
                              }}
                            >
                              <th className="w-1/2 border-r border-white/30 px-5 py-5 text-left text-base font-semibold sm:w-2/5 sm:px-8 sm:text-lg">
                                Specifications
                              </th>

                              <th className="px-5 py-5 text-left text-base font-semibold sm:px-8 sm:text-lg">
                                Details
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {product.specifications.map(
                              ([label, value], index) => (
                                <tr
                                  key={label}
                                  className={`
                                    border-b
                                    border-[#E5D8BA]
                                    transition-colors
                                    last:border-b-0
                                    hover:bg-[#F5E8CC]
                                    ${
                                      index % 2 === 0
                                        ? "bg-[#FFFDF7]"
                                        : "bg-[#FBF3DD]"
                                    }
                                  `}
                                >
                                  <td className="w-1/2 border-r border-[#E5D8BA] px-5 py-5 text-base font-semibold sm:w-2/5 sm:px-8 sm:py-6 sm:text-lg">
                                    {label}
                                  </td>

                                  <td className="px-5 py-5 text-base text-gray-600 sm:px-8 sm:py-6 sm:text-lg">
                                    {value}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>

                        </table>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`,
          }}
        />

        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/5 blur-2xl" />

        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/5 blur-2xl" />

        <div className="relative mx-auto max-w-[1600px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

            <div>
              <p className="mb-3 text-base uppercase tracking-[0.18em] text-white/85">
                Need Industrial PVC Resin?
              </p>

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[42px]">
                Get in touch with Resol Industries Ltd.
              </h2>
            </div>

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Link
                href="/contact"
                className="
                  inline-flex
                  whitespace-nowrap
                  rounded-lg
                  bg-white
                  px-9
                  py-4
                  text-base
                  font-semibold
                  text-black
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-gray-100
                "
              >
                Get a Quote →
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}


/* ============================================================
   DETAIL ROW
============================================================ */

function DetailRow({ label, value }) {
  return (
    <div
      className="
        group
        -mx-2
        flex
        items-center
        justify-between
        gap-5
        rounded-lg
        border-b
        border-[#E8DEC5]
        px-2
        py-4
        transition-colors
        last:border-b-0
        hover:bg-[#FBF3DD]/50
      "
    >
      <span className="text-base text-gray-500 transition-colors group-hover:text-gray-700">
        {label}
      </span>

      <span className="text-right text-base font-semibold transition-colors group-hover:text-[#B8860B]">
        {value}
      </span>
    </div>
  );
}


/* ============================================================
   APPLICATION CARD
============================================================ */

function ApplicationCard({ title, text, number }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="
        group
        rounded-xl
        border
        border-[#E1D4B5]
        bg-gradient-to-br
        from-[#FBF3DD]
        to-[#F5E8CC]
        p-7
        transition-all
        duration-300
        hover:border-[#C59A4B]
        hover:shadow-xl
      "
    >
      <div className="mb-8 flex items-center justify-between">
        <span
          className="text-base font-semibold"
          style={{
            color: GOLD_DARK,
          }}
        >
          {String(number).padStart(2, "0")}
        </span>

        <span className="text-xl text-gray-400 transition-colors group-hover:text-[#C59A4B]">
          ↗
        </span>
      </div>

      <h3 className="mb-4 text-xl font-semibold transition-colors group-hover:text-[#B8860B]">
        {title}
      </h3>

      <p className="text-base leading-7 text-gray-600">
        {text}
      </p>
    </motion.div>
  );
}


/* ============================================================
   WHY CHOOSE CARD
============================================================ */

function WhyChooseCard({ title, text }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
      }}
      className="
        group
        flex
        gap-5
        rounded-xl
        border
        border-[#E1D4B5]
        bg-gradient-to-br
        from-[#FBF3DD]
        to-[#F5E8CC]
        p-7
        transition-all
        duration-300
        hover:border-[#C59A4B]
        hover:shadow-xl
      "
    >
      <div
        className="
          mt-2.5
          h-2.5
          w-2.5
          flex-shrink-0
          rounded-full
          transition-transform
          duration-300
          group-hover:scale-125
        "
        style={{
          backgroundColor: GOLD,
        }}
      />

      <div>
        <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-[#B8860B]">
          {title}
        </h3>

        <p className="text-base leading-7 text-gray-600">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
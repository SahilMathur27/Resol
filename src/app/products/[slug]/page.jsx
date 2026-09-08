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

      <section className="relative min-h-[320px] md:min-h-[380px] lg:min-h-[420px] overflow-hidden flex items-center justify-center mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url("${product.titleBackground}")`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60" />

        <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4A017]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#D4A017]/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/80 text-sm md:text-base uppercase tracking-[0.3em] mb-4"
          >
            Industrial Raw Material
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            {product.name}
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-[3px] mx-auto mt-7 rounded-full"
            style={{ backgroundColor: GOLD }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/70 text-sm uppercase tracking-[0.2em] mt-6"
          >
            Premium Quality • Industrial Grade
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-4">
        <nav className="text-sm text-gray-500">
          <span className="hover:text-[#D4A017] cursor-pointer">
            Home
          </span>

          <span className="mx-2">/</span>

          <span className="hover:text-[#D4A017] cursor-pointer">
            Products
          </span>

          <span className="mx-2">/</span>

          <span className="text-[#D4A017] font-medium">
            {product.name}
          </span>
        </nav>
      </div>

      {/* =====================================================
          PRODUCT HERO
      ====================================================== */}

      <section className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-8 lg:py-12">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[72px_minmax(0,1.45fr)_minmax(430px,0.85fr)_320px]
            gap-6
            lg:gap-8
            items-start
          "
        >
          {/* =================================================
              THUMBNAILS
          ================================================= */}

          <div className="order-2 lg:order-1 flex lg:flex-col gap-3">
            {product.images.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`
                  relative
                  w-[68px]
                  h-[68px]
                  lg:w-[72px]
                  lg:h-[72px]
                  flex-shrink-0
                  overflow-hidden
                  border-2
                  bg-white
                  transition-all
                  duration-300
                  rounded-lg
                  ${
                    activeImage === index
                      ? "border-[#D4A017] shadow-lg shadow-[#D4A017]/20 scale-105"
                      : "border-[#E4D8B8] hover:border-[#D4A017]"
                  }
                `}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-contain p-1"
                  sizes="72px"
                />

                {activeImage === index && (
                  <div className="absolute inset-0 border-2 border-[#D4A017]/30 rounded-lg" />
                )}
              </button>
            ))}
          </div>

          {/* =================================================
              MAIN IMAGE
              
              IMPORTANT:
              THIS IS NOW THE STICKY ELEMENT ITSELF.
              NO EXTRA OUTER STICKY DIV.
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="
              order-1
              lg:order-2
              min-w-0
              self-start
              h-fit
              lg:sticky
              lg:top-[100px]
              z-20
            "
          >
            <div
              className="
                relative
                w-full
                h-[420px]
                sm:h-[500px]
                lg:h-[600px]
                xl:h-[650px]
                bg-gradient-to-br
                from-[#F1E6C9]
                to-[#E8D9B8]
                overflow-hidden
                rounded-2xl
                shadow-xl
              "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                priority
                className="
                  object-contain
                  p-5
                  lg:p-8
                  xl:p-10
                  transition-transform
                  duration-700
                "
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              <div className="absolute inset-0 rounded-2xl shadow-inner shadow-[#D4A017]/10 pointer-events-none" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                }}
                className="
                  absolute
                  bottom-4
                  right-4
                  bg-black/60
                  backdrop-blur-sm
                  text-white
                  text-xs
                  px-3
                  py-1.5
                  rounded-full
                "
              >
                🔍 Zoom
              </motion.div>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <div
                className="h-[3px] w-20 rounded-full"
                style={{
                  backgroundColor: GOLD,
                }}
              />

              <p className="text-sm uppercase tracking-[0.18em] text-gray-500 font-medium">
                Industrial Grade Material
              </p>
            </div>
          </motion.div>

          {/* =================================================
              PRODUCT INFORMATION
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="order-3 self-start"
          >
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-[#D4A017]/10 text-[#B8860B] border border-[#D4A017]/20">
              {product.category}
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[52px] leading-[1.05] font-bold mb-6">
              {product.name}
            </h2>

            <div
              className="w-20 h-[3px] mb-7 rounded-full"
              style={{
                backgroundColor: GOLD,
              }}
            />

            <p className="text-lg lg:text-[19px] text-gray-600 leading-8 mb-8">
              {product.shortDescription}
            </p>

            {/* DETAILS */}

            <div className="border-y border-[#DDCFAB] bg-[#FFFDF7] px-5 rounded-lg overflow-hidden shadow-sm">
              <DetailRow label="K Value" value="57" />
              <DetailRow label="Grade" value="Suspension" />
              <DetailRow label="Application" value="Profiles" />
              <DetailRow label="Form" value="Powder" />
              <DetailRow label="Color" value="White" />
              <DetailRow label="Packaging" value="25 kg" />
            </div>

            {/* BUTTONS */}

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-8
                    py-4
                    text-white
                    text-base
                    font-semibold
                    transition-all
                    duration-300
                    hover:shadow-xl
                    hover:-translate-y-0.5
                    rounded-lg
                    bg-gradient-to-r
                    from-[#D4A017]
                    to-[#B8860B]
                  "
                >
                  <span className="mr-2">📄</span>
                  Get a Quote
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-8
                    py-4
                    text-base
                    font-semibold
                    transition-all
                    duration-300
                    hover:shadow-xl
                    hover:-translate-y-0.5
                    rounded-lg
                    bg-gradient-to-r
                    from-[#25A244]
                    to-[#1D7A33]
                    text-white
                  "
                >
                  <span className="mr-2">💬</span>
                  WhatsApp Now
                </Link>
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
              order-4
              bg-[#FFFDF7]
              border
              border-[#E3D4AF]
              p-6
              sm:p-7
              shadow-lg
              rounded-2xl
              self-start
              hover:shadow-xl
              transition-shadow
              duration-300
            "
          >
            <div className="text-3xl lg:text-4xl font-bold tracking-wide mb-8">
              <img
                src="/New-Project-6-e1775111050628.webp"
                alt="RIL"
                className="w-20 hover:scale-110 transition-transform duration-300"
              />
            </div>

            <h3 className="text-xl font-semibold mb-6 text-[#B8860B]">
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
                  className="flex gap-3 items-start group"
                >
                  <span
                    className="
                      mt-[8px]
                      w-2.5
                      h-2.5
                      rounded-full
                      flex-shrink-0
                      transition-all
                      duration-300
                      group-hover:scale-125
                    "
                    style={{
                      backgroundColor: GOLD,
                    }}
                  />

                  <p className="text-base text-gray-600 leading-7 group-hover:text-gray-800">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ABOUT */}

            <div className="border-t border-[#E5D9BA] mt-8 pt-8">
              <h3 className="text-xl font-semibold mb-5 text-[#B8860B]">
                About Resol Industries Ltd.
              </h3>

              <div className="space-y-4">
                {product.aboutRIL.map((item, index) => (
                  <p
                    key={index}
                    className="text-base text-gray-600 leading-7 hover:text-gray-800"
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

      <section className="border-t border-[#E3D5B3] bg-[#FFFDF7] mt-8">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">

          <div className="flex justify-center">
            <div className="flex border-b border-[#E0D5B8] bg-[#FBF7EC] rounded-t-xl overflow-hidden">

              <button
                type="button"
                onClick={() => setActiveTab("description")}
                className={`
                  relative
                  px-8
                  sm:px-12
                  py-6
                  text-base
                  sm:text-lg
                  font-medium
                  transition-all
                  duration-300
                  ${
                    activeTab === "description"
                      ? "text-black bg-white"
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
                  px-8
                  sm:px-12
                  py-6
                  text-base
                  sm:text-lg
                  font-medium
                  transition-all
                  duration-300
                  ${
                    activeTab === "specification"
                      ? "text-black bg-white"
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

          {/* =================================================
              TAB CONTENT
          ================================================= */}

          <div className="py-14 lg:py-20">
            <AnimatePresence mode="wait">

              {/* DESCRIPTION */}

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
                      className="text-base uppercase tracking-[0.2em] mb-4 font-medium"
                      style={{
                        color: GOLD_DARK,
                      }}
                    >
                      Product Overview
                    </p>

                    <h2 className="text-4xl sm:text-5xl lg:text-[52px] leading-tight font-bold mb-7">
                      Reliable PVC Resin for Industrial Applications
                    </h2>

                    <div className="space-y-6 text-lg lg:text-[19px] text-gray-600 leading-8">

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

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

                    {product.benefits.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          y: -8,
                          scale: 1.01,
                        }}
                        className="
                          bg-gradient-to-br
                          from-[#FBF3DD]
                          to-[#F5E8CC]
                          border
                          border-[#E4D6B3]
                          p-7
                          rounded-xl
                          hover:border-[#C59A4B]
                          hover:shadow-xl
                          transition-all
                          duration-300
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

                        <h3 className="text-xl font-semibold mt-5 mb-3">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 text-base leading-7">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}

                  </div>

                  {/* GRADES */}

                  <div className="mt-20">

                    <p
                      className="text-base uppercase tracking-[0.2em] mb-4 font-medium"
                      style={{
                        color: GOLD_DARK,
                      }}
                    >
                      Product Range
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-bold mb-10">
                      Available Grades
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

                      {product.grades.map((grade, index) => (
                        <motion.div
                          key={index}
                          whileHover={{
                            y: -6,
                            scale: 1.01,
                          }}
                          className="
                            bg-gradient-to-br
                            from-[#FBF3DD]
                            to-[#F5E8CC]
                            border
                            border-[#E3D5B3]
                            p-8
                            rounded-xl
                            hover:border-[#C59A4B]
                            hover:shadow-xl
                            transition-all
                            duration-300
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

                              <h3 className="text-2xl font-semibold mb-4">
                                {grade.title}
                              </h3>

                              <p className="text-lg text-gray-600 leading-8">
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
                      className="text-base uppercase tracking-[0.2em] mb-4 font-medium"
                      style={{
                        color: GOLD_DARK,
                      }}
                    >
                      Applications
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-bold mb-10">
                      Where PVC Resin Is Used
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

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
                      className="text-base uppercase tracking-[0.2em] mb-4 font-medium"
                      style={{
                        color: GOLD_DARK,
                      }}
                    >
                      RIL Advantage
                    </p>

                    <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold mb-10">
                      Why Choose Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
                  SPECIFICATION
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

                  <div className="max-w-[1200px] mx-auto">

                    <div className="text-center mb-12">

                      <p
                        className="text-base uppercase tracking-[0.2em] mb-4 font-medium"
                        style={{
                          color: GOLD_DARK,
                        }}
                      >
                        Product Details
                      </p>

                      <h2 className="text-4xl sm:text-5xl font-bold">
                        PVC Resin Specification
                      </h2>

                    </div>

                    <div className="bg-gradient-to-br from-[#FBF3DD] to-[#F5E8CC] border border-[#DED0AA] overflow-hidden rounded-xl shadow-lg">

                      <table className="w-full border-collapse">

                        <thead>

                          <tr
                            className="text-white"
                            style={{
                              background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`,
                            }}
                          >

                            <th className="w-1/2 sm:w-2/5 px-5 sm:px-8 py-5 text-left text-base sm:text-lg font-semibold border-r border-white/30">
                              Specifications
                            </th>

                            <th className="px-5 sm:px-8 py-5 text-left text-base sm:text-lg font-semibold">
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
                                  last:border-b-0
                                  border-[#E5D8BA]
                                  ${
                                    index % 2 === 0
                                      ? "bg-[#FFFDF7]"
                                      : "bg-[#FBF3DD]"
                                  }
                                  hover:bg-[#F5E8CC]
                                  transition-colors
                                `}
                              >

                                <td className="w-1/2 sm:w-2/5 px-5 sm:px-8 py-5 sm:py-6 font-semibold text-base sm:text-lg border-r border-[#E5D8BA]">
                                  {label}
                                </td>

                                <td className="px-5 sm:px-8 py-5 sm:py-6 text-gray-600 text-base sm:text-lg">
                                  {value}
                                </td>

                              </tr>
                            )
                          )}

                        </tbody>

                      </table>

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

        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

        <div className="relative max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-16">

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            <div>

              <p className="text-white/85 text-base uppercase tracking-[0.18em] mb-3">
                Need Industrial PVC Resin?
              </p>

              <h2 className="text-white text-3xl sm:text-4xl lg:text-[42px] leading-tight font-bold">
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
                  bg-white
                  px-9
                  py-4
                  text-base
                  font-semibold
                  text-black
                  hover:bg-gray-100
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  whitespace-nowrap
                  rounded-lg
                  shadow-xl
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
        flex
        items-center
        justify-between
        gap-5
        py-4
        border-b
        last:border-b-0
        border-[#E8DEC5]
        group
        hover:bg-[#FBF3DD]/50
        px-2
        -mx-2
        rounded-lg
        transition-colors
      "
    >
      <span className="text-base text-gray-500 group-hover:text-gray-700">
        {label}
      </span>

      <span className="text-base font-semibold text-right group-hover:text-[#B8860B]">
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
        bg-gradient-to-br
        from-[#FBF3DD]
        to-[#F5E8CC]
        border
        border-[#E1D4B5]
        p-7
        rounded-xl
        hover:border-[#C59A4B]
        hover:shadow-xl
        transition-all
        duration-300
      "
    >

      <div className="flex items-center justify-between mb-8">

        <span
          className="text-base font-semibold"
          style={{
            color: GOLD_DARK,
          }}
        >
          {String(number).padStart(2, "0")}
        </span>

        <span className="text-gray-400 group-hover:text-[#C59A4B] text-xl">
          ↗
        </span>

      </div>

      <h3 className="text-xl font-semibold mb-4 group-hover:text-[#B8860B]">
        {title}
      </h3>

      <p className="text-gray-600 text-base leading-7">
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
        bg-gradient-to-br
        from-[#FBF3DD]
        to-[#F5E8CC]
        flex
        gap-5
        border
        border-[#E1D4B5]
        p-7
        rounded-xl
        hover:border-[#C59A4B]
        hover:shadow-xl
        transition-all
        duration-300
        group
      "
    >

      <div
        className="
          w-2.5
          h-2.5
          rounded-full
          mt-2.5
          flex-shrink-0
          group-hover:scale-125
        "
        style={{
          backgroundColor: GOLD,
        }}
      />

      <div>

        <h3 className="text-xl font-semibold mb-3 group-hover:text-[#B8860B]">
          {title}
        </h3>

        <p className="text-gray-600 text-base leading-7">
          {text}
        </p>

      </div>

    </motion.div>
  );
}
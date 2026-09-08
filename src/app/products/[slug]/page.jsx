"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GOLD = "#D4A017";

const product = {
  name: "PVC Resin",
  category: "PVC Resin",

  images: [
    "/pvc resin cate.webp",
    "/pvc resin cate.webp",
    "/pvc resin cate.webp",
  ],

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

  return (
    <main className="bg-[#F7F7F5] text-[#222222]">

      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <section className="border-b border-[#E7E7E4] bg-[#F7F7F5] mt-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

          <div className="flex items-center gap-2 text-sm text-gray-500">

          </div>

        </div>
      </section>

      {/* =====================================================
          PRODUCT HERO
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">

       <div className="grid grid-cols-1 lg:grid-cols-[64px_minmax(0,1fr)_minmax(400px,1fr)_260px] gap-6 lg:gap-8 items-start">

          {/* =================================================
              THUMBNAILS
          ================================================= */}

          <div className="order-2 lg:order-1 flex lg:flex-col ">

            {product.images.map((image, index) => (

              <button
                key={index}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`relative w-[64px] h-[64px] overflow-hidden border bg-white transition-all ${
                  activeImage === index
                    ? "border-[#C59A4B]"
                    : "border-[#DDDDD9] hover:border-[#999999]"
                }`}
              >

                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="64px"
                />

              </button>

            ))}

          </div>

          {/* =================================================
              MAIN IMAGE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
      <div className="lg:sticky lg:top-24 self-start">
            <div className="relative aspect-square bg-[#EEEEEB] overflow-hidden">
  <Image
    src={product.images[activeImage]}
    alt={product.name}
    fill
    priority
    className="object-contain"
    sizes="(max-width: 1024px) 100vw, 45vw"
  />
</div>
</div>

          </motion.div>

          {/* =================================================
              PRODUCT INFORMATION
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-3"
          >

            <p
              className="text-sm uppercase tracking-[0.18em] mb-4"
              style={{ color: GOLD }}
            >
              {product.category}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] leading-tight font-semibold mb-5">
              {product.name}
            </h1>

            <div
              className="w-14 h-[2px] mb-6"
              style={{ backgroundColor: GOLD }}
            />

            <p className="text-gray-600 leading-7 mb-4">
              {product.shortDescription}
            </p>

            {/* PRODUCT DETAILS */}

            <div className="border-y border-[#DDDDD9]">

              <DetailRow
                label="K Value"
                value="57"
              />

              <DetailRow
                label="Grade"
                value="Suspension"
              />

              <DetailRow
                label="Application"
                value="Profiles"
              />

              <DetailRow
                label="Form"
                value="Powder"
              />

              <DetailRow
                label="Color"
                value="White"
              />

              <DetailRow
                label="Packaging"
                value="25 kg"
              />

            </div>

            {/* PRICE */}

            <div className="mt-4">

            </div>

            {/* BUTTONS */}

            <div className="mt-7 flex flex-col sm:flex-row gap-3">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-4 text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  backgroundColor: GOLD,
                }}
              >
                Get a Quote
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-4 font-medium transition-all duration-300 hover:bg-[#C59A4B] hover:text-white"
                style={{
                  background: "Green",
                  color: "white",
                }}
              >
                WhatsApp Now 
              </Link>

            </div>

          </motion.div>

          {/* =================================================
              RESOL CARD
          ================================================= */}

          <motion.aside
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="order-4 bg-white border border-[#E0E0DC] p-5 sm:p-6"
          >

            <div
              className="text-2xl font-bold tracking-wide mb-7"
              style={{ color: GOLD }}
            >
              Resol
            </div>

            <h3 className="text-lg font-semibold mb-5 p-1">
              Why Choose RIL
            </h3>

            <div className="space-y-3">

              {[
                "Imported PVC resin from reliable sources",
                "Consistent product specifications",
                "Reliable supply for industrial applications",
                "Suitable for rigid PVC manufacturing",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex gap-3 items-start"
                >

                  <span
                    className="mt-[7px] w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: GOLD,
                    }}
                  />

                  <p className="text-sm text-gray-600 leading-6">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            <div className="border-t border-[#E5E5E1] mt-7 pt-7">

              <h3 className="text-lg font-semibold mb-4">
                About Resol Industries Ltd. (RIL)
              </h3>

              <div className="space-y-3">

                {product.aboutRIL.map((item, index) => (

                  <p
                    key={index}
                    className="text-sm text-gray-600 leading-6"
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
          TABS SECTION
      ====================================================== */}

      <section className="border-t border-[#E4E4E0] bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* TAB BUTTONS */}

          <div className="flex justify-center">

            <div className="flex border-b border-[#E0E0DC]">

              {/* DESCRIPTION TAB */}

              <button
                type="button"
                onClick={() => setActiveTab("description")}
                className={`relative px-7 sm:px-10 py-5 text-sm sm:text-base font-medium transition-colors ${
                  activeTab === "description"
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >

                Description

                {activeTab === "description" && (

                  <motion.span
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{
                      backgroundColor: GOLD,
                    }}
                  />

                )}

              </button>

              {/* SPECIFICATION TAB */}

              <button
                type="button"
                onClick={() => setActiveTab("specification")}
                className={`relative px-7 sm:px-10 py-5 text-sm sm:text-base font-medium transition-colors ${
                  activeTab === "specification"
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >

                Specification

                {activeTab === "specification" && (

                  <motion.span
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
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

          <div className="py-12 lg:py-16">

            <AnimatePresence mode="wait">

              {/* =================================================
                  DESCRIPTION
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

                  {/* PRODUCT OVERVIEW */}

                  <div className="max-w-4xl">

                    <p
                      className="text-sm uppercase tracking-[0.18em] mb-3"
                      style={{
                        color: GOLD,
                      }}
                    >
                      Product Overview
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
                      Reliable PVC Resin for Industrial Applications
                    </h2>

                    <p className="text-gray-600 leading-8 mb-5">
                      PVC Resin is a versatile thermoplastic raw material
                      widely used in industrial manufacturing. It is valued
                      for its consistent processing characteristics,
                      durability, and suitability for producing rigid PVC
                      products.
                    </p>

                    <p className="text-gray-600 leading-8">
                      As a PVC Resin Importer, Resol Industries Ltd. (RIL)
                      sources and supplies PVC Resin for manufacturers and
                      industrial users looking for dependable raw materials
                      with consistent specifications and application
                      performance.
                    </p>

                  </div>

                  {/* BENEFITS */}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">

                    {product.benefits.map((item, index) => (

                      <div
                        key={index}
                        className="bg-[#F7F7F5] border border-[#E2E2DE] p-6 hover:border-[#C59A4B] transition-colors"
                      >

                        <span
                          className="text-sm font-semibold"
                          style={{
                            color: GOLD,
                          }}
                        >
                          0{index + 1}
                        </span>

                        <h3 className="text-lg font-semibold mt-4 mb-2">
                          {item.title}
                        </h3>

                        <p className="text-gray-500 text-sm">
                          {item.text}
                        </p>

                      </div>

                    ))}

                  </div>

                  {/* AVAILABLE GRADES */}

                  <div className="mt-16">

                    <p
                      className="text-sm uppercase tracking-[0.18em] mb-3"
                      style={{
                        color: GOLD,
                      }}
                    >
                      Product Range
                    </p>

                    <h2 className="text-3xl font-semibold mb-8">
                      Available Grade
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                      {product.grades.map((grade, index) => (

                        <motion.div
                          key={index}
                          whileHover={{
                            y: -5,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="bg-white border border-[#E1E1DD] p-7 hover:border-[#C59A4B] transition-colors"
                        >

                          <div className="flex items-start gap-5">

                            <span
                              className="text-3xl font-light"
                              style={{
                                color: GOLD,
                              }}
                            >
                              {grade.number}
                            </span>

                            <div>

                              <h3 className="text-xl font-semibold mb-3">
                                {grade.title}
                              </h3>

                              <p className="text-gray-600 leading-7">
                                {grade.description}
                              </p>

                            </div>

                          </div>

                        </motion.div>

                      ))}

                    </div>

                  </div>

                  {/* APPLICATIONS */}

                  <div className="mt-16">

                    <p
                      className="text-sm uppercase tracking-[0.18em] mb-3"
                      style={{
                        color: GOLD,
                      }}
                    >
                      Applications
                    </p>

                    <h2 className="text-3xl font-semibold mb-8">
                      Where PVC Resin Is Used
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

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

                  {/* WHY CHOOSE US */}

                  <div className="mt-16">

                    <p
                      className="text-sm uppercase tracking-[0.18em] mb-3"
                      style={{
                        color: GOLD,
                      }}
                    >
                      RIL Advantage
                    </p>

                    <h2 className="text-3xl font-semibold mb-8">
                      Why Choose Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

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

                  <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-10">

                      <p
                        className="text-sm uppercase tracking-[0.18em] mb-3"
                        style={{
                          color: GOLD,
                        }}
                      >
                        Product Details
                      </p>

                      <h2 className="text-3xl sm:text-4xl font-semibold">
                        PVC Resin Specification
                      </h2>

                    </div>

                    <div className="bg-white border border-[#DFDFDB] overflow-hidden">

                      <table className="w-full border-collapse">

                        <tbody>

                          {product.specifications.map(
                            ([label, value], index) => (

                              <tr
                                key={label}
                                className={`border-b last:border-b-0 border-[#E5E5E1] ${
                                  index % 2 === 0
                                    ? "bg-white"
                                    : "bg-[#F8F8F6]"
                                }`}
                              >

                                <td className="w-1/2 sm:w-2/5 px-4 sm:px-7 py-4 sm:py-5 font-medium text-sm sm:text-base border-r border-[#E5E5E1]">
                                  {label}
                                </td>

                                <td className="px-4 sm:px-7 py-4 sm:py-5 text-gray-600 text-sm sm:text-base">
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

      <section
        className="mt-0"
        style={{
          backgroundColor: "#D4A017",
        }}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          <div className="flex flex-col md:flex-row items-center justify-between gap-7">

            <div>

              <p className="text-white/80 text-sm uppercase tracking-[0.15em] mb-2">
                Need Industrial PVC Resin?
              </p>

              <h2 className="text-white text-2xl sm:text-3xl font-semibold">
                Get in touch with Resol Industries Ltd.
              </h2>

            </div>

            <Link
              href="/contact"
              className="bg-white px-7 py-4 font-medium text-black hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get a Quote
            </Link>

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
    <div className="flex items-center justify-between gap-5 py-3.5 border-b last:border-b-0 border-[#E8E8E4]">

      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span className="text-sm font-medium text-right">
        {value}
      </span>

    </div>
  );
}

/* ============================================================
   APPLICATION CARD
============================================================ */

function ApplicationCard({
  title,
  text,
  number,
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="group bg-[#F8F8F6] border border-[#E1E1DD] p-6 hover:border-[#C59A4B] transition-colors"
    >

      <div className="flex items-center justify-between mb-7">

        <span
          className="text-sm font-semibold"
          style={{
            color: GOLD,
          }}
        >
          {String(number).padStart(2, "0")}
        </span>

        <span className="text-gray-300 group-hover:text-[#C59A4B] transition-colors">
          ↗
        </span>

      </div>

      <h3 className="text-lg font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-500 text-sm leading-6">
        {text}
      </p>

    </motion.div>
  );
}

/* ============================================================
   WHY CHOOSE CARD
============================================================ */

function WhyChooseCard({
  title,
  text,
}) {
  return (
    <div className="bg-[#F8F8F6] flex gap-5 border border-[#E1E1DD] p-6 hover:border-[#C59A4B] transition-colors">

      <div
        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
        style={{
          backgroundColor: GOLD,
        }}
      />

      <div>

        <h3 className="text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-6">
          {text}
        </p>

      </div>

    </div>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  FileText,
  MessageCircle,
} from "lucide-react";

/* ============================================================
   COLORS
============================================================ */

const GOLD = "#D4A017";
const GOLD_DARK = "#B8860B";

/* ============================================================
   PRODUCT DATA
============================================================ */

const product = {
  name: "PVC Resin",
  category: "PVC Resin",

  images: [
    "/pvc resin.webp",
    "/pvc resin cate.webp",
    "/pvc resin.webp",
  ],

  titleBackground: "/Polymers.webp",

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
};

/* ============================================================
   MAIN PRODUCT PAGE
============================================================ */

export default function ProductPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <main className="min-h-screen bg-white text-[#161616]">
      {/* ============================================================
          PRODUCT HERO
      ============================================================ */}

      <section className="relative mt-20 min-h-[320px] overflow-hidden bg-[#101010] md:min-h-[370px]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage: `url("${product.titleBackground}")`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:70px_70px]" />

        <div className="relative mx-auto flex min-h-[320px] max-w-[1600px] items-center px-5 py-14 sm:px-8 md:min-h-[370px] lg:px-12 xl:px-16">
          <div className="w-full">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[#D4A017]" />

              <span className="font-[var(--font-lexend-deca)] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4A017]">
                Industrial Raw Material
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-[var(--font-outfit)] text-[clamp(3rem,6vw,50px)] font-semibold leading-[0.9] tracking-[-0.05em] text-white"
            >
              {product.name}
              <span className="text-[#D4A017]">.</span>
            </motion.h1>

            {/* Hero Meta */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              <span className="font-[var(--font-lexend-deca)] text-[10px] uppercase tracking-[0.22em] text-white/55">
                Suspension Grade
              </span>

              <span className="h-1 w-1 bg-[#D4A017]" />

              <span className="font-[var(--font-lexend-deca)] text-[10px] uppercase tracking-[0.22em] text-white/55">
                Industrial Applications
              </span>

              <span className="h-1 w-1 bg-[#D4A017]" />

              <span className="font-[var(--font-lexend-deca)] text-[10px] uppercase tracking-[0.22em] text-white/55">
                RIL
              </span>
            </motion.div>
          </div>

          {/* Product Number */}
          <div className="absolute bottom-5 right-5 hidden lg:block xl:right-16">
            <span className="font-[var(--font-outfit)] text-[11px] uppercase tracking-[0.3em] text-white/25">
              Product 01
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          BREADCRUMB
      ============================================================ */}

      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center px-5 py-3 sm:px-8 lg:px-12 xl:px-16">
          <nav className="flex items-center gap-2 font-[var(--font-lexend-deca)] text-[10px] uppercase tracking-[0.12em]">
            <Link
              href="/"
              className="text-black/40 transition-colors hover:text-[#B8860B]"
            >
              Home
            </Link>

            <ChevronRight size={12} className="text-black/20" />

            <Link
              href="/products"
              className="text-black/40 transition-colors hover:text-[#B8860B]"
            >
              Products
            </Link>

            <ChevronRight size={12} className="text-black/20" />

            <span className="text-[#B8860B]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* ============================================================
          MAIN PRODUCT AREA
      ============================================================ */}

      <section className="mx-auto max-w-[1600px] px-5 py-10 sm:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(400px,0.8fr)_260px] lg:gap-10 xl:gap-14">
          {/* ========================================================
              PRODUCT IMAGE AREA
          ======================================================== */}

          <div className="self-start lg:sticky lg:top-[105px]">
            <div className="grid grid-cols-[62px_minmax(0,1fr)] gap-4">
              {/* THUMBNAILS */}
              <div className="flex flex-col gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`View ${product.name} image ${index + 1}`}
                    className={`relative h-[62px] w-[62px] overflow-hidden border bg-white transition-all duration-300 lg:h-[70px] lg:w-[70px] ${
                      activeImage === index
                        ? "border-[#D4A017]"
                        : "border-black/10 hover:border-black/30"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      sizes="70px"
                      className="object-contain p-1"
                    />

                    {activeImage === index && (
                      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#D4A017]" />
                    )}
                  </button>
                ))}
              </div>

              {/* MAIN IMAGE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative min-w-0"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-white">
                  <Image
                    key={product.images[activeImage]}
                    src={product.images[activeImage]}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 60vw"
                    className="object-contain p-2 transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>
              </motion.div>
            </div>

            {/* IMAGE COUNTER */}
            <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-3">
              <span className="font-[var(--font-lexend-deca)] text-[9px] uppercase tracking-[0.2em] text-black/35">
                Product Images
              </span>

              <span className="font-[var(--font-outfit)] text-xs font-medium text-black/40">
                {String(activeImage + 1).padStart(2, "0")} /{" "}
                {String(product.images.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* ========================================================
              PRODUCT INFORMATION
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="self-start"
          >
            {/* CATEGORY */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 bg-[#D4A017]" />

              <span className="font-[var(--font-lexend-deca)] text-[9px] font-semibold uppercase tracking-[0.25em] text-[#B8860B]">
                {product.category}
              </span>
            </div>

            {/* TITLE */}
            <h2 className="font-[var(--font-outfit)] text-[clamp(2.5rem,4vw,50px)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#171717]">
              {product.name}
            </h2>

            <div className="mt-5 h-[2px] w-16 bg-[#D4A017]" />

            {/* DESCRIPTION */}
            <p className="mt-5 font-[var(--font-lexend-deca)] text-[13px] leading-7 text-black/55 md:text-sm">
              {product.shortDescription}
            </p>

            {/* QUICK SPECS */}
            <div className="mt-6 border-y border-black/10">
              <QuickSpec label="Grade" value="Suspension" />
              <QuickSpec label="K Value" value="57" />
              <QuickSpec label="Application" value="Profiles" />
              <QuickSpec label="Form" value="Powder" />
              <QuickSpec label="Packaging" value="25 kg" />
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#151515] px-6 py-4 font-[var(--font-outfit)] text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#D4A017] hover:text-black"
              >
                <FileText size={15} strokeWidth={1.5} />

                Get a Quote

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href="https://wa.me/919810929486"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 border border-black/15 px-6 py-4 font-[var(--font-outfit)] text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:border-[#D4A017] hover:bg-[#D4A017]"
              >
                <MessageCircle size={15} strokeWidth={1.5} />

                WhatsApp

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </motion.div>

          {/* ========================================================
              RIL SIDEBAR
          ======================================================== */}

          <motion.aside
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="self-start border-l border-black/10 pl-0 lg:pl-6"
          >
            {/* RIL LOGO */}
            <div className="mb-5 flex items-center justify-between">
              <Image
                src="/New-Project-6-e1775111050628.webp"
                alt="Resol Industries Ltd."
                width={90}
                height={50}
                className="h-auto w-[85px] object-contain object-left"
              />

              <span className="font-[var(--font-outfit)] text-[10px] tracking-[0.15em] text-black/25">
                RIL
              </span>
            </div>

            {/* SIDEBAR TITLE */}
            <div className="mb-5">
              <span className="font-[var(--font-lexend-deca)] text-[9px] font-semibold uppercase tracking-[0.25em] text-[#B8860B]">
                RIL Advantage
              </span>

              <h3 className="mt-3 font-[var(--font-outfit)] text-2xl font-semibold leading-tight tracking-[-0.04em]">
                Why choose
                <span className="block text-[#B8860B]">RIL?</span>
              </h3>
            </div>

            {/* WHY CHOOSE LIST */}
            <div className="border-t border-black/10">
              {product.whyChoose.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className="group border-b border-black/10 py-3.5"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 font-[var(--font-outfit)] text-[10px] font-semibold text-[#D4A017]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h4 className="font-[var(--font-outfit)] text-sm font-semibold leading-5 text-black transition-colors group-hover:text-[#B8860B]">
                        {item.title}
                      </h4>

                      <p className="mt-1 font-[var(--font-lexend-deca)] text-[10px] leading-5 text-black/45">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ABOUT RIL */}
            <div className="mt-6 border-t-2 border-[#D4A017] pt-4">
              <span className="font-[var(--font-lexend-deca)] text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
                About RIL
              </span>

              <p className="mt-2 font-[var(--font-lexend-deca)] text-[11px] leading-6 text-black/50">
                Resol Industries Ltd. supplies industrial raw materials with a
                focus on dependable sourcing, consistent specifications and
                long-term customer relationships.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* ============================================================
          CENTERED TABS
      ============================================================ */}

      <section className="border-y border-black/10 bg-[#F8F8F6]">
        <div className="mx-auto flex max-w-[1600px] justify-center px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex w-full justify-center overflow-x-auto">
            <div className="flex items-center justify-center">
              <TabButton
                active={activeTab === "description"}
                onClick={() => setActiveTab("description")}
              >
                Description
              </TabButton>

              <TabButton
                active={activeTab === "specification"}
                onClick={() => setActiveTab("specification")}
              >
                Specifications
              </TabButton>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TAB CONTENT
      ============================================================ */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <AnimatePresence mode="wait">
            {/* ======================================================
                DESCRIPTION TAB
            ====================================================== */}

            {activeTab === "description" && (
              <motion.div
                key="description"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="py-10 md:py-12 lg:py-16"
              >
                {/* OVERVIEW */}
                <div className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-14">
                  <SectionLabel number="01" label="Overview" />

                  <div className="max-w-[1050px]">
                    <h2 className="font-[var(--font-outfit)] text-[clamp(2.3rem,4.5vw,50px)] font-semibold leading-[0.92] tracking-[-0.055em]">
                      Reliable PVC Resin
                      <span className="block text-[#D4A017]">
                        for industrial applications.
                      </span>
                    </h2>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      <p className="font-[var(--font-lexend-deca)] text-sm leading-7 text-black/55">
                        PVC Resin is a versatile thermoplastic raw material
                        widely used in industrial manufacturing. It is valued
                        for its consistent processing characteristics,
                        durability, and suitability for producing rigid PVC
                        products.
                      </p>

                      <p className="font-[var(--font-lexend-deca)] text-sm leading-7 text-black/55">
                        As a PVC Resin Importer, Resol Industries Ltd. sources
                        and supplies PVC Resin for manufacturers and industrial
                        users looking for dependable raw materials with
                        consistent specifications and application performance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ==================================================
                    RIL EDITORIAL SECTION
                ================================================== */}

                <section className="relative mt-12 overflow-hidden bg-[#111111]">
                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#D4A017]/[0.07] blur-[120px]" />

                  <div className="pointer-events-none absolute -left-40 bottom-[-200px] h-[450px] w-[450px] rounded-full bg-[#D4A017]/[0.035] blur-[100px]" />

                  {/* Grid */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:70px_70px]" />

                  <div className="relative px-6 py-10 sm:px-8 md:py-12 lg:px-12">
                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.5fr] lg:items-center lg:gap-16">
                      {/* LEFT */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="flex items-center gap-4">
                          <span className="h-px w-10 bg-[#D4A017]" />

                          <span className="font-[var(--font-lexend-deca)] text-[9px] font-semibold uppercase tracking-[0.28em] text-[#D4A017]">
                            RIL At A Glance
                          </span>
                        </div>

                        <h2 className="mt-5 max-w-xl font-[var(--font-outfit)] text-[clamp(2.5rem,4.5vw,50px)] font-semibold leading-[0.92] tracking-[-0.045em] text-white">
                          Built on
                          <span className="block text-[#D4A017]">
                            reliability.
                          </span>
                        </h2>

                        <p className="mt-5 max-w-lg font-[var(--font-lexend-deca)] text-xs leading-7 text-white/45 md:text-sm">
                          Resol Industries Ltd. combines dependable
                          international sourcing with consistent product
                          quality and responsive industrial supply support
                          across India.
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                          <span className="h-[2px] w-16 bg-[#D4A017]" />

                          <span className="font-[var(--font-outfit)] text-[9px] uppercase tracking-[0.25em] text-white/30">
                            Since 2005
                          </span>
                        </div>
                      </motion.div>

                      {/* RIGHT CARDS */}
                      <div className="grid grid-cols-2 border-l border-t border-white/10">
                        <RILCard
                          number="01"
                          value="20+"
                          title="Years of Experience"
                          text="Established in 2005 with long-term industrial sourcing experience."
                          delay={0}
                        />

                        <RILCard
                          number="02"
                          value="PAN"
                          title="India Distribution"
                          text="Industrial material supply and distribution across India."
                          delay={0.1}
                        />

                        <RILCard
                          number="03"
                          value="PVC"
                          title="Resin Focus"
                          text="Reliable PVC Resin sourcing for diverse manufacturing requirements."
                          delay={0.2}
                        />

                        <RILCard
                          number="04"
                          value="RIL"
                          title="Trusted Supply"
                          text="Quality-focused sourcing backed by professional customer support."
                          delay={0.3}
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* ==================================================
                    BENEFITS
                ================================================== */}

                <div className="mt-12 border-t border-black/10 pt-7">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {product.benefits.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="border-b border-black/10 px-0 py-5 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                      >
                        <span className="font-[var(--font-outfit)] text-3xl font-light text-[#D4A017]">
                          0{index + 1}
                        </span>

                        <h3 className="mt-3 font-[var(--font-outfit)] text-xl font-semibold tracking-[-0.02em]">
                          {item.title}
                        </h3>

                        <p className="mt-2 font-[var(--font-lexend-deca)] text-xs leading-6 text-black/45">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ==================================================
                    GRADES
                ================================================== */}

                <div className="mt-14">
                  <div className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-14">
                    <SectionLabel number="02" label="Product Range" />

                    <div>
                      <h2 className="font-[var(--font-outfit)] text-[clamp(2.3rem,4vw,50px)] font-semibold leading-[0.9] tracking-[-0.05em]">
                        Available
                        <span className="text-[#D4A017]"> Grades</span>
                      </h2>

                      <div className="mt-6 border-t border-black/10">
                        {product.grades.map((grade) => (
                          <motion.div
                            key={grade.number}
                            whileHover={{ x: 6 }}
                            className="grid gap-5 border-b border-black/10 py-6 md:grid-cols-[70px_240px_1fr] md:items-start"
                          >
                            <span className="font-[var(--font-outfit)] text-3xl font-light text-[#D4A017]">
                              {grade.number}
                            </span>

                            <h3 className="font-[var(--font-outfit)] text-xl font-semibold">
                              {grade.title}
                            </h3>

                            <p className="max-w-2xl font-[var(--font-lexend-deca)] text-xs leading-6 text-black/50 md:text-sm">
                              {grade.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ==================================================
                    APPLICATIONS
                ================================================== */}

                <div className="mt-14">
                  <div className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-14">
                    <SectionLabel number="03" label="Applications" />

                    <div>
                      <h2 className="max-w-4xl font-[var(--font-outfit)] text-[clamp(2.3rem,4vw,50px)] font-semibold leading-[0.9] tracking-[-0.05em]">
                        Where PVC Resin
                        <span className="block text-[#D4A017]">
                          is used.
                        </span>
                      </h2>

                      <div className="mt-6 grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
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
                  </div>
                </div>

                {/* ==================================================
                    WHY CHOOSE RIL
                ================================================== */}

                <div className="mt-14 border-t border-black/10 pt-10">
                  <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-14">
                    <div>
                      <SectionLabel
                        number="04"
                        label="RIL Advantage"
                      />

                      <h2 className="mt-6 font-[var(--font-outfit)] text-[clamp(2.4rem,4.5vw,50px)] font-semibold leading-[0.88] tracking-[-0.06em]">
                        Why
                        <span className="block text-[#D4A017]">
                          Choose RIL?
                        </span>
                      </h2>
                    </div>

                    <div className="border-t border-black/10">
                      {product.whyChoose.map((item, index) => (
                        <WhyChooseRow
                          key={index}
                          number={index + 1}
                          title={item.title}
                          text={item.text}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ======================================================
                SPECIFICATION TAB
            ====================================================== */}

            {activeTab === "specification" && (
              <motion.div
                key="specification"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="py-10 md:py-12 lg:py-16"
              >
                <div className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-14">
                  <SectionLabel number="01" label="Technical Data" />

                  <div>
                    <h2 className="max-w-4xl font-[var(--font-outfit)] text-[clamp(2.4rem,4.5vw,50px)] font-semibold leading-[0.9] tracking-[-0.055em]">
                      PVC Resin
                      <span className="block text-[#D4A017]">
                        Specification
                      </span>
                    </h2>

                    <p className="mt-5 max-w-2xl font-[var(--font-lexend-deca)] text-sm leading-7 text-black/45">
                      Technical specifications for the selected PVC Resin
                      product and its intended industrial application.
                    </p>

                    {/* TABLE */}
                    <div className="mt-7 overflow-x-auto border-y border-black/15">
                      <table className="w-full min-w-[600px] border-collapse">
                        <thead>
                          <tr className="border-b-2 border-[#D4A017]">
                            <th className="w-1/2 px-5 py-4 text-left font-[var(--font-outfit)] text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 sm:px-8">
                              Specification
                            </th>

                            <th className="px-5 py-4 text-left font-[var(--font-outfit)] text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 sm:px-8">
                              Details
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {product.specifications.map(([label, value]) => (
                            <tr
                              key={label}
                              className="group border-b border-black/10 transition-colors last:border-b-0 hover:bg-[#F8F8F6]"
                            >
                              <td className="border-r border-black/10 px-5 py-4 font-[var(--font-lexend-deca)] text-xs font-medium text-black/60 sm:px-8 sm:py-5 sm:text-sm">
                                {label}
                              </td>

                              <td className="px-5 py-4 font-[var(--font-outfit)] text-sm font-semibold text-black sm:px-8 sm:py-5">
                                {value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* NOTE */}
                    <div className="mt-6 flex gap-4 border-l-2 border-[#D4A017] bg-[#F8F8F6] px-5 py-4 sm:px-7">
                      <Check
                        size={18}
                        className="mt-0.5 flex-shrink-0 text-[#B8860B]"
                      />

                      <p className="font-[var(--font-lexend-deca)] text-xs leading-6 text-black/50">
                        Product specifications may vary according to grade,
                        source and application requirements. Contact the RIL
                        team for current availability and technical details.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

/* ================================================================
   QUICK SPEC
================================================================ */

function QuickSpec({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-black/10 py-3.5 last:border-b-0">
      <span className="font-[var(--font-lexend-deca)] text-[10px] uppercase tracking-[0.12em] text-black/40">
        {label}
      </span>

      <span className="font-[var(--font-outfit)] text-sm font-semibold text-black">
        {value}
      </span>
    </div>
  );
}

/* ================================================================
   TAB BUTTON
================================================================ */

function TabButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative whitespace-nowrap px-7 py-4 font-[var(--font-outfit)] text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 sm:px-10 ${
        active
          ? "text-black"
          : "text-black/35 hover:text-black"
      }`}
    >
      {children}

      {active && (
        <motion.span
          layoutId="product-tab"
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#D4A017]"
        />
      )}
    </button>
  );
}

/* ================================================================
   SECTION LABEL
================================================================ */

function SectionLabel({ number, label }) {
  return (
    <div className="flex items-start gap-4">
      <span className="font-[var(--font-outfit)] text-sm font-semibold text-[#D4A017]">
        {number}
      </span>

      <div>
        <span className="block h-px w-8 bg-[#D4A017]" />

        <span className="mt-2 block font-[var(--font-lexend-deca)] text-[9px] font-semibold uppercase tracking-[0.22em] text-black/35">
          {label}
        </span>
      </div>
    </div>
  );
}

/* ================================================================
   APPLICATION CARD
================================================================ */

function ApplicationCard({ title, text, number }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group border-b border-r border-black/10 p-5 transition-colors duration-300 hover:bg-[#F8F8F6] sm:p-7"
    >
      <div className="flex items-center justify-between">
        <span className="font-[var(--font-outfit)] text-3xl font-light text-[#D4A017]">
          {String(number).padStart(2, "0")}
        </span>

        <ArrowUpRight
          size={17}
          strokeWidth={1.4}
          className="text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D4A017]"
        />
      </div>

      <h3 className="mt-6 font-[var(--font-outfit)] text-lg font-semibold tracking-[-0.02em] transition-colors group-hover:text-[#B8860B]">
        {title}
      </h3>

      <p className="mt-2 font-[var(--font-lexend-deca)] text-[10px] leading-6 text-black/45">
        {text}
      </p>
    </motion.div>
  );
}

/* ================================================================
   WHY CHOOSE ROW
================================================================ */

function WhyChooseRow({ number, title, text }) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="group grid grid-cols-[40px_1fr] gap-4 border-b border-black/10 py-5 md:grid-cols-[60px_210px_1fr] md:gap-7"
    >
      <span className="font-[var(--font-outfit)] text-sm font-semibold text-[#D4A017]">
        {String(number).padStart(2, "0")}
      </span>

      <h3 className="font-[var(--font-outfit)] text-lg font-semibold leading-6 transition-colors group-hover:text-[#B8860B]">
        {title}
      </h3>

      <p className="col-start-2 font-[var(--font-lexend-deca)] text-xs leading-6 text-black/45 md:col-start-auto">
        {text}
      </p>
    </motion.div>
  );
}

/* ================================================================
   RIL CARD
================================================================ */

function RILCard({ number, value, title, text, delay }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      className="group border-b border-r border-white/10 p-5 sm:p-7 md:p-8"
    >
      <span className="font-[var(--font-outfit)] text-[10px] font-semibold tracking-[0.2em] text-[#D4A017]">
        {number}
      </span>

      <div className="mt-4 font-[var(--font-outfit)] text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
        {value}
      </div>

      <h3 className="mt-2 font-[var(--font-outfit)] text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 max-w-[220px] font-[var(--font-lexend-deca)] text-[10px] leading-5 text-white/35">
        {text}
      </p>

      <div className="mt-5 h-px w-0 bg-[#D4A017] transition-all duration-500 group-hover:w-12" />
    </motion.div>
  );
}
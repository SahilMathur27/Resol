"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Truck,
  Factory,
  Star,
  PackageCheck,
} from "lucide-react";

const product = {
  name: "PVC Resin",
  category: "POLYMER & RESIN",

  image: "/pvc resin cate.webp",

  shortDescription:
    "High-quality PVC Resin suitable for a wide range of industrial applications, offering excellent processing performance, consistency, and mechanical properties.",

  description:
    "PVC Resin is a versatile thermoplastic raw material widely used across various industrial applications. It provides excellent processing characteristics, durability, chemical resistance, and consistent performance.",

  grades: [
    {
      number: "01",
      title: "Suspension Grade",
      description:
        "The most widely used grade of PVC resin, known for its versatility, ease of processing, and excellent mechanical properties. Common applications include pipes, profiles, films, sheets, and cable insulation.",
    },
    {
      number: "02",
      title: "Emulsion Grade",
      description:
        "Ideal for fine particle size and high surface area needs, such as synthetic leather, flooring, coatings, and adhesives. It provides superior dispersion and better plasticizer absorption.",
    },
  ],

  specifications: [
    ["Product Name", "PVC Resin"],
    ["Grade", "Suspension / Emulsion"],
    ["Form", "White Powder"],
    ["Application", "Industrial & Commercial"],
    ["Packaging", "25 Kg / 50 Kg Bags"],
    ["Usage", "Pipes, Profiles, Films, Sheets & Coatings"],
    ["Origin", "Imported / Domestic"],
    ["Supply Type", "Bulk & Regular Supply"],
  ],

  applications: [
    "PVC Pipes & Fittings",
    "Profiles & Sheets",
    "Cable Insulation",
    "Synthetic Leather",
    "Flooring",
    "Coatings",
    "Adhesives",
    "Flexible PVC Products",
  ],
};

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <main className="bg-[#faf9f6] text-[#17253a]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#faf9f6] mt-30">

        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#c59a4b]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-20">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">

            {/* PRODUCT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-[26px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                />

                {/* Badge */}
                <div className="absolute left-5 top-5 rounded-full bg-[#c59a4b] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg">
                  Premium Quality
                </div>

              </div>
            </motion.div>

            {/* PRODUCT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#b28332]">
                {product.category}
              </p>

              <h1 className="text-4xl font-semibold tracking-tight text-[#14243a] sm:text-5xl lg:text-[58px]">
                {product.name}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#657184] sm:text-lg sm:leading-8">
                {product.shortDescription}
              </p>

              {/* GRADE PILLS */}
              <div className="mt-7 flex flex-wrap gap-3">

                <div className="flex items-center gap-2 rounded-xl bg-[#f2eee6] px-4 py-3 text-sm font-medium">
                  <PackageCheck className="h-4 w-4 text-[#b28332]" />
                  Suspension Grade
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-[#f2eee6] px-4 py-3 text-sm font-medium">
                  <PackageCheck className="h-4 w-4 text-[#b28332]" />
                  Emulsion Grade
                </div>

              </div>

              {/* FEATURES */}
              <div className="mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-4">

                <Feature
                  icon={<ShieldCheck />}
                  title="Consistent"
                  subtitle="Quality"
                />

                <Feature
                  icon={<Factory />}
                  title="Industrial"
                  subtitle="Grade"
                />

                <Feature
                  icon={<Truck />}
                  title="Bulk"
                  subtitle="Supply"
                />

                <Feature
                  icon={<CheckCircle2 />}
                  title="Reliable"
                  subtitle="Performance"
                />

              </div>

              {/* CTA */}
              <div className="mt-9 flex flex-wrap gap-3">

                <Link
                  href="/contact-us"
                  className="group flex items-center gap-3 rounded-full bg-[#bd8d38] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(189,141,56,0.25)] transition duration-300 hover:bg-[#a77a2d]"
                >
                  Get a Quote

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full border border-[#c9a15c] bg-white px-7 py-4 text-sm font-semibold text-[#17253a] transition duration-300 hover:bg-[#f7f1e5]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Inquiry
                </a>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          TABS
      ====================================================== */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="flex justify-center border-b border-black/10">

            <div className="flex w-full max-w-[650px] items-center justify-center">

              {/* DESCRIPTION TAB */}
              <button
                onClick={() => setActiveTab("description")}
                className={`relative flex flex-1 items-center justify-center gap-2 px-5 py-6 text-xs font-semibold uppercase tracking-[0.12em] transition sm:text-sm ${
                  activeTab === "description"
                    ? "text-[#17253a]"
                    : "text-[#697383] hover:text-[#17253a]"
                }`}
              >

                <PackageCheck className="h-4 w-4" />

                Description

                {activeTab === "description" && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#bd8d38]"
                  />
                )}

              </button>


              {/* REVIEWS TAB */}
              <button
                onClick={() => setActiveTab("reviews")}
                className={`relative flex flex-1 items-center justify-center gap-2 px-5 py-6 text-xs font-semibold uppercase tracking-[0.12em] transition sm:text-sm ${
                  activeTab === "reviews"
                    ? "text-[#17253a]"
                    : "text-[#697383] hover:text-[#17253a]"
                }`}
              >

                <Star className="h-4 w-4" />

                Customer Reviews

                {activeTab === "reviews" && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#bd8d38]"
                  />
                )}

              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TAB CONTENT
      ====================================================== */}
      <section className="bg-white py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {activeTab === "description" && (
            <motion.div
              key="description"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >

              {/* TOP CONTENT */}
              <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">

                {/* OVERVIEW */}
                <div>

                  <SectionLabel>
                    Product Overview
                  </SectionLabel>

                  <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight text-[#17253a] sm:text-4xl">
                    Reliable material for demanding applications.
                  </h2>

                  <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#657184]">
                    {product.description}
                  </p>

                  <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#657184]">
                    Our PVC Resin is suitable for manufacturers and industrial
                    users looking for dependable raw material with consistent
                    processing characteristics and application performance.
                  </p>


                  {/* MINI BENEFITS */}
                  <div className="mt-9 grid grid-cols-3 gap-4">

                    <MiniBenefit
                      icon="✦"
                      title="High Purity"
                      text="Consistent quality"
                    />

                    <MiniBenefit
                      icon="◈"
                      title="Excellent"
                      text="Processability"
                    />

                    <MiniBenefit
                      icon="□"
                      title="Long Shelf Life"
                      text="Maintains quality"
                    />

                  </div>

                </div>


                {/* GRADES */}
                <div>

                  <SectionLabel>
                    Available Grades
                  </SectionLabel>

                  <h2 className="mt-4 text-2xl font-semibold text-[#17253a] sm:text-3xl">
                    Choose the right PVC Resin grade
                  </h2>

                  <div className="mt-7 space-y-4">

                    {product.grades.map((grade, index) => (
                      <motion.div
                        key={grade.title}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1,
                        }}
                        className="rounded-2xl border border-black/[0.07] bg-[#faf9f6] p-6 transition hover:border-[#c59a4b]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-7"
                      >

                        <div className="flex gap-5">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c59a4b] text-xs font-bold text-white">
                            {grade.number}
                          </div>

                          <div>

                            <h3 className="text-lg font-semibold text-[#17253a]">
                              {grade.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-[#657184]">
                              {grade.description}
                            </p>

                          </div>

                        </div>

                      </motion.div>
                    ))}

                  </div>

                </div>

              </div>


              {/* SPECIFICATIONS + APPLICATIONS */}
              <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.8fr]">

                {/* SPECIFICATIONS */}
                <div className="rounded-[24px] border border-black/[0.07] bg-[#faf9f6] p-6 sm:p-8">

                  <SectionLabel>
                    Product Specifications
                  </SectionLabel>

                  <div className="mt-5">

                    {product.specifications.map(([label, value], index) => (
                      <div
                        key={label}
                        className={`grid grid-cols-2 gap-4 border-b border-black/[0.07] py-3.5 text-sm ${
                          index === product.specifications.length - 1
                            ? "border-b-0"
                            : ""
                        }`}
                      >

                        <span className="font-medium text-[#17253a]">
                          {label}
                        </span>

                        <span className="text-[#657184]">
                          {value}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>


                {/* APPLICATIONS */}
                <div className="rounded-[24px] border border-black/[0.07] bg-[#faf9f6] p-6 sm:p-8">

                  <SectionLabel>
                    Applications
                  </SectionLabel>

                  <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">

                    {product.applications.map((application) => (
                      <div
                        key={application}
                        className="flex items-start gap-2 text-sm text-[#536174]"
                      >

                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#bd8d38]" />

                        <span>{application}</span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </motion.div>
          )}


          {/* =================================================
              REVIEWS
          ================================================== */}
          {activeTab === "reviews" && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-4xl"
            >

              <div className="text-center">

                <SectionLabel>
                  Customer Reviews
                </SectionLabel>

                <h2 className="mt-4 text-3xl font-semibold text-[#17253a] sm:text-4xl">
                  What our customers say
                </h2>

                <div className="mt-5 flex justify-center gap-1">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-[#bd8d38] text-[#bd8d38]"
                    />
                  ))}

                </div>

              </div>


              {/* DUMMY REVIEW */}
              <div className="mt-10 rounded-[24px] border border-black/[0.07] bg-[#faf9f6] p-7 sm:p-9">

                <div className="flex items-center justify-between gap-5">

                  <div>
                    <h3 className="font-semibold text-[#17253a]">
                      Rajesh Kumar
                    </h3>

                    <p className="mt-1 text-sm text-[#8a929e]">
                      Industrial Buyer
                    </p>
                  </div>

                  <div className="flex gap-1">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-[#bd8d38] text-[#bd8d38]"
                      />
                    ))}

                  </div>

                </div>

                <p className="mt-6 text-[15px] leading-7 text-[#657184]">
                  "The PVC Resin quality was consistent and the material was
                  supplied as per our requirement. The overall experience and
                  product performance have been very good."
                </p>

              </div>

            </motion.div>
          )}

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="bg-[#17253a] py-14 sm:py-16">

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-10">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c59a4b]">
              Need PVC Resin?
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Get the right grade for your application.
            </h2>

          </div>

          <Link
            href="/contact-us"
            className="group flex items-center gap-3 rounded-full bg-[#c59a4b] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#a77a2d]"
          >
            Send Inquiry

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   COMPONENTS
========================================================= */

function Feature({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3 border-black/10 sm:border-r sm:pr-4 last:border-r-0">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c59a4b] text-[#b28332]">
        {icon && (
          <div className="h-5 w-5">
            {icon}
          </div>
        )}
      </div>

      <div>
        <p className="text-xs font-medium text-[#4d5a6b]">
          {title}
        </p>

        <p className="text-xs text-[#4d5a6b]">
          {subtitle}
        </p>
      </div>

    </div>
  );
}


function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#b28332]">
      <span>{children}</span>
      <span className="h-px w-8 bg-[#c59a4b]" />
    </div>
  );
}


function MiniBenefit({ icon, title, text }) {
  return (
    <div>

      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c59a4b] text-[#b28332]">
        {icon}
      </div>

      <p className="mt-3 text-xs font-semibold text-[#17253a]">
        {title}
      </p>

      <p className="mt-1 text-[10px] leading-4 text-[#7b8491]">
        {text}
      </p>

    </div>
  );
}
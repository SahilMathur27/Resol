"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
{
badge: "WELCOME TO RESOL INDUSTRIES LTD.",
title: "Trusted",
highlight: "PVC Resin Importer",
subtitle: "in India",
description:
"Established in 2005, Resol Industries Ltd. is a trusted PVC Resin importer based in New Delhi, India. We specialize in importing and distributing high-quality PVC Resin and Calcium Carbonate for industrial applications across India.",
image: "/pvc resin.webp",
buttonText: "Explore Our Products",
buttonLink: "/products",


stat1: "2005",
stat1Text: "Established",
stat2: "India",
stat2Text: "Nationwide Supply",
stat3: "100%",
stat3Text: "Quality Focused",

cardTitle: "Trusted Supply",
cardText: "Quality You Can Rely On",
topLabel: "Specialized In",
topCardTitle: "PVC Resin",


},

{
badge: "QUALITY MATERIALS. RELIABLE SOURCING.",
title: "High-Quality Materials for",
highlight: "Industrial Growth",
subtitle: "",
description:
"Through our established international sourcing network, we import products from trusted sources and make them available to businesses across India with a focus on consistent quality and dependable supply.",
image: "/pvc resin.webp",
buttonText: "Explore Products",
buttonLink: "/products",


stat1: "19+",
stat1Text: "Years of Experience",
stat2: "Trusted",
stat2Text: "Global Sources",
stat3: "Reliable",
stat3Text: "Supply Network",

cardTitle: "Global Sourcing",
cardText: "Trusted International Sources",
topLabel: "Our Focus",
topCardTitle: "Calcium Carbonate",


},

{
badge: "RELIABLE PARTNER FOR INDIAN INDUSTRIES",
title: "Quality Products.",
highlight: "Dependable Supply.",
subtitle: "",
description:
"Serving industries including PVC pipes and fittings, footwear, flooring, packaging, plastics, adhesives, textiles, paints and coatings, and vinyl with quality-focused products and transparent business practices.",
image: "/pvc resin.webp",
buttonText: "Get in Touch",
buttonLink: "/contact",


stat1: "8+",
stat1Text: "Major Industries Served",
stat2: "Long-Term",
stat2Text: "Business Relationships",
stat3: "Across India",
stat3Text: "Growing Presence",

cardTitle: "Customer Focused",
cardText: "Building Long-Term Relationships",
topLabel: "Built On",
topCardTitle: "Quality & Reliability",


},
];

const containerVariants = {
hidden: {},
visible: {
transition: {
staggerChildren: 0.15,
},
},
};

const textVariants = {
hidden: {
opacity: 0,
y: 40,
},
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.7,
ease: "easeOut",
},
},
};

const imageVariants = {
hidden: {
opacity: 0,
x: 60,
scale: 0.97,
},
visible: {
opacity: 1,
x: 0,
scale: 1,
transition: {
duration: 0.9,
ease: "easeOut",
},
},
};

function HeroContent({ slide }) {
return (
/*
SAME HEIGHT FOR EVERY SLIDE
Mobile: 720px
Desktop: 760px
*/ <div className="relative h-[720px] overflow-hidden bg-white pt-[110px] md:h-[760px] lg:pt-[120px]">


  {/* LIGHT BACKGROUND GLOW */}
  <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#f5bd24]/10 blur-[130px]" />

  <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#f5bd24]/15 blur-[130px]" />

  {/* LIGHT GRID PATTERN */}
  <div
    className="absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage:
        "linear-gradient(#26364f 1px, transparent 1px), linear-gradient(90deg, #26364f 1px, transparent 1px)",
      backgroundSize: "70px 70px",
    }}
  />

  {/* BOTTOM GOLD LINE */}
  <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#f5bd24] to-transparent" />

  {/* CONTENT */}
  <div className="relative z-10 mx-auto grid h-full max-w-7xl items-center gap-10 px-5 pb-10 md:px-8 lg:grid-cols-2 lg:gap-14">
    
    {/* ================= LEFT CONTENT ================= */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      {/* BADGE */}
      <motion.div variants={textVariants}>
        <span className="inline-flex items-center gap-3 rounded-full border border-[#f5bd24]/50 bg-white px-5 py-2 text-xs font-bold tracking-[1.5px] text-[#26364f] shadow-sm">
          <span className="h-2 w-2 rounded-full pt-5 bg-[#f5bd24]" />
          {slide.badge}
        </span>
      </motion.div>

      {/* HEADING */}
      <motion.h1
        variants={textVariants}
        className=" max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-[#202936] sm:text-3xl lg:text-5xl"
      >
        {slide.title}{" "}
        <span className="text-[#d89b00]">
          {slide.highlight}
        </span>{" "}
        {slide.subtitle}
      </motion.h1>

      {/* ACCENT LINE */}
      <motion.div
        variants={textVariants}
        className="mt-6 h-[4px] w-20 rounded-full bg-[#f5bd24]"
      />

      {/* DESCRIPTION */}
      <motion.p
        variants={textVariants}
        className="mt-6 max-w-xl text-base leading-7 text-[#667085] md:text-lg md:leading-6"
      >
        {slide.description}
      </motion.p>

      {/* BUTTON */}
      <motion.div variants={textVariants} className="mt-8">
        <Link
          href={slide.buttonLink}
          className="group inline-flex items-center gap-4 rounded-xl bg-[#f5bd24] px-7 py-3.5 font-semibold text-[#202936] shadow-lg shadow-[#f5bd24]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e8ac17]"
        >
          {slide.buttonText}

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#202936] text-lg text-white transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </motion.div>

      {/* STATS */}
      <motion.div
        variants={textVariants}
        className="mt-10 flex flex-wrap gap-5 border-t border-[#26364f]/10 pt-6 md:gap-7"
      >
        <div>
          <h3 className="text-2xl font-bold text-[#b98200] md:text-3xl">
            {slide.stat1}
          </h3>
          <p className="mt-1 text-sm text-[#667085]">
            {slide.stat1Text}
          </p>
        </div>

        <div className="hidden h-12 w-px bg-[#26364f]/15 sm:block" />

        <div>
          <h3 className="text-2xl font-bold text-[#b98200] md:text-3xl">
            {slide.stat2}
          </h3>
          <p className="mt-1 text-sm text-[#667085]">
            {slide.stat2Text}
          </p>
        </div>

        <div className="hidden h-12 w-px bg-[#26364f]/15 sm:block" />

        <div>
          <h3 className="text-2xl font-bold text-[#b98200] md:text-3xl">
            {slide.stat3}
          </h3>
          <p className="mt-1 text-sm text-[#667085]">
            {slide.stat3Text}
          </p>
        </div>
      </motion.div>
    </motion.div>

    {/* ================= RIGHT IMAGE ================= */}
    <motion.div
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto hidden w-full max-w-[600px] lg:block"
    >
      {/* GOLD BACKGROUND GLOW */}
      <div className="absolute -right-10 -top-10 h-[280px] w-[280px] rounded-full bg-[#f5bd24]/20 blur-3xl" />

      {/* IMAGE BOX */}
      <div className="relative rounded-[30px] border border-[#26364f]/10 bg-white p-2 shadow-2xl shadow-[#26364f]/10">
        <div className="relative h-[520px] overflow-hidden rounded-[24px]">
          <img
            src={slide.image}
            alt={slide.highlight}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#26364f]/30 via-transparent to-transparent" />
        </div>
      </div>

      {/* BOTTOM FLOATING CARD */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-5 -left-10 rounded-2xl border border-[#26364f]/10 bg-white/95 p-5 shadow-xl backdrop-blur-md"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5bd24] text-xl text-[#202936]">
            ✦
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#202936]">
              {slide.cardTitle}
            </h4>

            <p className="text-sm text-[#667085]">
              {slide.cardText}
            </p>
          </div>
        </div>
      </motion.div>

      {/* TOP FLOATING CARD */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-12 top-10 rounded-2xl border border-[#26364f]/10 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-[#667085]">
          {slide.topLabel}
        </p>

        <h4 className="mt-1 text-lg font-bold text-[#b98200]">
          {slide.topCardTitle}
        </h4>
      </motion.div>

      {/* DECORATIVE DOTS */}
      <div className="absolute -bottom-10 right-5 grid grid-cols-5 gap-2 opacity-60">
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-2 w-2 rounded-full bg-[#d89b00]"
          />
        ))}
      </div>
    </motion.div>
  </div>
</div>


);
}

export default function Hero() {
return ( <section className="hero-slider relative h-[720px] overflow-hidden bg-white md:h-[760px]">
<Swiper
modules={[Navigation, Autoplay]}
slidesPerView={1}
loop={true}
speed={900}
navigation={{
nextEl: ".hero-next",
prevEl: ".hero-prev",
}}
autoplay={{
delay: 6000,
disableOnInteraction: false,
pauseOnMouseEnter: true,
}}
className="h-full w-full"
>
{slides.map((slide, index) => ( <SwiperSlide key={index} className="h-full"> <HeroContent slide={slide} /> </SwiperSlide>
))} </Swiper>


  {/* PREVIOUS ARROW */}
  <button
    className="hero-prev absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#26364f]/10 bg-white text-2xl text-[#26364f] shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#f5bd24] md:left-8 md:h-14 md:w-14"
    aria-label="Previous Slide"
  >
    ←
  </button>

  {/* NEXT ARROW */}
  <button
    className="hero-next absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#26364f]/10 bg-white text-2xl text-[#26364f] shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#f5bd24] md:right-8 md:h-14 md:w-14"
    aria-label="Next Slide"
  >
    →
  </button>
</section>


);
}

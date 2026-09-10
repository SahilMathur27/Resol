"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

const GOLD = "#D4A017";
const ORANGE = "#D26D00";

const banners = [
  {
    image: "/pvc resin.webp",
    title: "PVC",
    highlight: "RESIN",
    description:
      "High-quality PVC Resin for reliable processing, consistent performance and diverse industrial applications.",
    category: "POLYMER MATERIAL",
    video: null,
  },

  {
    image: "/pvc resin.webp",
    title: "CALCIUM",
    highlight: "CARBONATE",
    description:
      "Reliable Calcium Carbonate material designed for consistent quality across a wide range of industrial applications.",
    category: "INDUSTRIAL MINERAL",
    video: "/13753874_1280_720_25fps.mp4",
  },

  {
    image: "/pvc resin.webp",
    title: "POLYSTYRENE",
    highlight: "MATERIAL",
    description:
      "Consistent polymer material offering dependable processing and performance for modern industrial requirements.",
    category: "POLYMER MATERIAL",
    video: null,
  },
];

/* ============================================================
   SPLIT LETTER ANIMATION
============================================================ */

function AnimatedWord({
  text,
  className = "",
  delay = 0,
  color = "#171717",
}) {
  const letters = text.split("");

  return (
    <span
      className={`relative block overflow-hidden whitespace-nowrap ${className}`}
      style={{
        color,
        perspective: "1000px",
      }}
    >
      <span className="inline-flex">
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            initial={{
              y: "120%",
              rotateX: -75,
              opacity: 0,
            }}
            animate={{
              y: "0%",
              rotateX: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.85,
              delay: delay + index * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              display: "inline-block",
              transformOrigin: "bottom",
              transformStyle: "preserve-3d",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

/* ============================================================
   SMALL LINE ANIMATION
============================================================ */

function AnimatedLine() {
  return (
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: 55 }}
      transition={{
        duration: 0.8,
        delay: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="block h-[2px] bg-[#D26D00]"
    />
  );
}

/* ============================================================
   HERO
============================================================ */

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative mt-20 w-full overflow-hidden bg-[#c98505]">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 5200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".pvc-next",
          prevEl: ".pvc-prev",
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="w-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                relative
                min-h-[650px]
                w-full
                overflow-hidden
                bg-[#c98505]
                sm:min-h-[680px]
                lg:min-h-[720px]
              "
            >
              {/* ==================================================
                  BACKGROUND
              ================================================== */}

              {banner.video ? (
                <>
                  <motion.video
                    key={banner.video}
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 7,
                      ease: "easeOut",
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                  >
                    <source
                      src={banner.video}
                      type="video/mp4"
                    />
                  </motion.video>

                  {/* VIDEO OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-[#8b5600]/75
                      via-[#c98505]/45
                      to-[#5d3900]/80
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/10
                    "
                  />
                </>
              ) : (
                <>
                  <motion.div
                    key={`bg-${activeIndex}`}
                    initial={{
                      scale: 1.15,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 7,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-[#e8b52c]
                      via-[#cb8907]
                      to-[#955900]
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-white/5
                      via-transparent
                      to-black/20
                    "
                  />
                </>
              )}

              {/* ==================================================
                  GIANT BACKGROUND TEXT
              ================================================== */}

              <motion.div
                key={`big-text-${activeIndex}`}
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  pointer-events-none
                  absolute
                  right-[-3%]
                  top-[2%]
                  z-[1]
                  select-none
                  text-[150px]
                  font-black
                  uppercase
                  leading-none
                  tracking-[-12px]
                  text-white/[0.08]
                  sm:text-[220px]
                  lg:text-[310px]
                  xl:text-[360px]
                "
              >
                {banner.title}
              </motion.div>

              {/* ==================================================
                  BIG CIRCLE
              ================================================== */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  right-[-100px]
                  top-1/2
                  z-[2]
                  hidden
                  h-[650px]
                  w-[650px]
                  -translate-y-1/2
                  rounded-full
                  border
                  border-white/10
                  lg:block
                "
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 65,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  right-[-35px]
                  top-1/2
                  z-[2]
                  hidden
                  h-[520px]
                  w-[520px]
                  -translate-y-1/2
                  rounded-full
                  border
                  border-white/[0.08]
                  lg:block
                "
              />

              {/* ==================================================
                  GOLDEN GLOW
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[5%]
                  top-[5%]
                  z-[2]
                  h-[500px]
                  w-[500px]
                  rounded-full
                  bg-[#f9d76b]/20
                  blur-[110px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-20%]
                  right-[15%]
                  z-[2]
                  h-[450px]
                  w-[450px]
                  rounded-full
                  bg-[#f5bd28]/20
                  blur-[110px]
                "
              />

              {/* ==================================================
                  WHITE EDITORIAL PANEL
              ================================================== */}

              <motion.div
                key={`panel-${activeIndex}`}
                initial={{
                  x: -150,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  left-[2%]
                  top-[4%]
                  z-10
                  h-[92%]
                  w-[58%]
                  overflow-hidden
                  rounded-[4px]
                  bg-[#f8f5ec]
                  shadow-[20px_30px_70px_rgba(0,0,0,0.18)]
                  sm:left-[3%]
                  sm:w-[56%]
                  lg:left-[5%]
                  lg:w-[52%]
                  xl:w-[50%]
                "
              >
                {/* PANEL DECORATIVE SHAPE */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[-100px]
                    top-[-100px]
                    h-[260px]
                    w-[260px]
                    rounded-full
                    border-[45px]
                    border-[#D4A017]/10
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[-80px]
                    left-[-80px]
                    h-[220px]
                    w-[220px]
                    rounded-full
                    border-[35px]
                    border-[#D26D00]/10
                  "
                />

                {/* VERTICAL LINE */}

                <motion.div
                  initial={{
                    height: 0,
                  }}
                  animate={{
                    height: "72%",
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    absolute
                    left-0
                    top-[14%]
                    w-[3px]
                    bg-[#D26D00]
                  "
                />

                {/* ==================================================
                    CONTENT
                ================================================== */}

                <div
                  className="
                    relative
                    flex
                    h-full
                    flex-col
                    justify-center
                    px-8
                    sm:px-10
                    md:px-12
                    lg:px-16
                    xl:px-20
                  "
                >
                  {/* CATEGORY */}

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
                      delay: 0.2,
                    }}
                    className="
                      mb-5
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <AnimatedLine />

                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[2.5px]
                        text-[#777]
                        sm:text-[10px]
                      "
                    >
                      {banner.category}
                    </span>
                  </motion.div>

                  {/* SMALL NUMBER */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                    }}
                    className="
                      mb-4
                      text-[11px]
                      font-bold
                      tracking-[2px]
                      text-[#999]
                    "
                  >
                    0{index + 1} / 0{banners.length}
                  </motion.div>

                  {/* ==================================================
                      MAIN HEADING
                  ================================================== */}

                  <div
                    className="overflow-hidden"
                    style={{
                      perspective: "1000px",
                    }}
                  >
                    <AnimatedWord
                      text={banner.title}
                      delay={0.25}
                      className="
                        text-[48px]
                        font-black
                        uppercase
                        leading-[0.82]
                        tracking-[-3px]
                        sm:text-[62px]
                        md:text-[72px]
                        lg:text-[82px]
                        xl:text-[92px]
                      "
                    />

                    <AnimatedWord
                      text={banner.highlight}
                      delay={0.48}
                      color={ORANGE}
                      className="
                        mt-2
                        text-[48px]
                        font-black
                        uppercase
                        leading-[0.82]
                        tracking-[-3px]
                        sm:text-[62px]
                        md:text-[72px]
                        lg:text-[82px]
                        xl:text-[92px]
                      "
                    />
                  </div>

                  {/* UNDERLINE */}

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: 100,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.85,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      mt-6
                      h-[3px]
                      bg-[#D4A017]
                    "
                  />

                  {/* ==================================================
                      DESCRIPTION
                  ================================================== */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.95,
                    }}
                    className="
                      mt-6
                      max-w-[450px]
                      text-[11px]
                      font-medium
                      leading-5
                      text-[#444]
                      sm:text-xs
                      sm:leading-6
                      md:text-sm
                    "
                  >
                    {banner.description}
                  </motion.p>

                  {/* ==================================================
                      BUTTON
                  ================================================== */}

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
                      duration: 0.7,
                      delay: 1.15,
                    }}
                    className="mt-7"
                  >
                    <button
                      className="
                        group
                        relative
                        overflow-hidden
                        bg-[#D26D00]
                        px-7
                        py-3.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[1.8px]
                        text-white
                        transition-all
                        duration-300
                        hover:bg-[#b85c00]
                        hover:shadow-[0_15px_35px_rgba(210,109,0,0.30)]
                      "
                    >
                      <span
                        className="
                          relative
                          z-10
                          flex
                          items-center
                          gap-4
                        "
                      >
                        Explore More

                        <span
                          className="
                            text-base
                            transition-transform
                            duration-300
                            group-hover:translate-x-2
                          "
                        >
                          →
                        </span>
                      </span>

                      <span
                        className="
                          absolute
                          inset-0
                          -translate-x-full
                          bg-white/15
                          transition-transform
                          duration-500
                          group-hover:translate-x-0
                        "
                      />
                    </button>
                  </motion.div>
                </div>
              </motion.div>

              {/* ==================================================
                  PRODUCT IMAGE
              ================================================== */}

              <motion.div
                key={`product-${activeIndex}`}
                initial={{
                  opacity: 0,
                  x: 220,
                  scale: 0.55,
                  rotate: 7,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 1.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  absolute
                  left-[48%]
                  top-1/2
                  z-30
                  w-[290px]
                  -translate-y-1/2
                  sm:left-[48%]
                  sm:w-[390px]
                  md:left-[47%]
                  md:w-[470px]
                  lg:left-[48%]
                  lg:w-[540px]
                  xl:left-[47%]
                  xl:w-[620px]
                "
              >
                {/* PRODUCT GLOW */}

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.25, 0.4, 0.25],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[60%]
                    w-[60%]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-white/20
                    blur-[70px]
                  "
                />

                {/* PRODUCT */}

                <motion.div
                  animate={{
                    y: [0, -14, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <Image
                    src={banner.image}
                    alt={`${banner.title} ${banner.highlight}`}
                    width={800}
                    height={800}
                    priority={index === 0}
                    className="
                      relative
                      z-10
                      h-auto
                      w-full
                      object-contain
                      drop-shadow-[0_40px_35px_rgba(0,0,0,0.35)]
                    "
                  />
                </motion.div>
              </motion.div>

              {/* ==================================================
                  PRODUCT SIDE LABEL
              ================================================== */}

              <motion.div
                key={`side-${activeIndex}`}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 1,
                }}
                className="
                  absolute
                  right-5
                  top-1/2
                  z-40
                  hidden
                  -translate-y-1/2
                  rotate-90
                  items-center
                  gap-3
                  lg:flex
                "
              >
                <span className="h-px w-12 bg-white/50" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[3px]
                    text-white/70
                  "
                >
                  Resol Industries
                </span>
              </motion.div>

              {/* ==================================================
                  BOTTOM NAVIGATION
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-6
                  right-5
                  z-50
                  flex
                  items-center
                  gap-3
                  sm:bottom-8
                  sm:right-10
                "
              >
                <button
                  className="
                    pvc-prev
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    text-sm
                    text-white
                    transition-all
                    duration-300
                    hover:border-white
                    hover:bg-white
                    hover:text-black
                    sm:h-11
                    sm:w-11
                  "
                >
                  ←
                </button>

                <button
                  className="
                    pvc-next
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    text-sm
                    text-white
                    transition-all
                    duration-300
                    hover:border-white
                    hover:bg-white
                    hover:text-black
                    sm:h-11
                    sm:w-11
                  "
                >
                  →
                </button>
              </div>

              {/* ==================================================
                  BOTTOM PROGRESS
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-7
                  left-6
                  z-50
                  hidden
                  items-center
                  gap-4
                  sm:flex
                  sm:left-10
                "
              >
                <span
                  className="
                    text-[11px]
                    font-bold
                    tracking-[2px]
                    text-white
                  "
                >
                  0{index + 1}
                </span>

                <div
                  className="
                    h-[1px]
                    w-16
                    overflow-hidden
                    bg-white/30
                  "
                >
                  <motion.div
                    key={`progress-${activeIndex}`}
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "100%",
                    }}
                    transition={{
                      duration: 5.2,
                      ease: "linear",
                    }}
                    className="h-full bg-white"
                  />
                </div>

                <span
                  className="
                    text-[10px]
                    font-medium
                    tracking-[2px]
                    text-white/60
                  "
                >
                  0{banners.length}
                </span>
              </div>

              {/* ==================================================
                  TOP RIGHT DOTS
              ================================================== */}

              <div
                className="
                  absolute
                  right-6
                  top-7
                  z-50
                  flex
                  items-center
                  gap-2
                  sm:right-10
                  sm:top-9
                "
              >
                {banners.map((_, dotIndex) => (
                  <motion.span
                    key={dotIndex}
                    animate={{
                      width:
                        activeIndex === dotIndex ? 28 : 7,
                      opacity:
                        activeIndex === dotIndex ? 1 : 0.4,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      block
                      h-[5px]
                      rounded-full
                      bg-white
                    "
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-slide {
          overflow: hidden;
        }

        .swiper-wrapper {
          align-items: stretch;
        }

        .swiper-button-prev,
        .swiper-button-next {
          display: none;
        }

        @media (max-width: 767px) {
          .pvc-prev,
          .pvc-next {
            width: 34px;
            height: 34px;
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
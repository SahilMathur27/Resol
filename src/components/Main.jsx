"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const banners = [
  {
    image: "/resol2.webp",
    eyebrow: "TRUSTED POLYMERS",
    eyebrow2: "FOR A BRIGHTER TOMORROW",
    title: "POLYETHYLENE",
    highlight: "(PE)",
    description: "RELIABLE MATERIAL",
    description2: "FOR DIVERSE APPLICATIONS",
    features: [
      "HIGH PURITY",
      "CONSISTENT QUALITY",
      "VERSATILE APPLICATIONS",
      "TRUSTED PERFORMANCE",
    ],
  },
  {
    image: "/resol3.webp",
    eyebrow: "ADVANCED POLYMER",
    eyebrow2: "FOR MODERN INDUSTRIES",
    title: "POLYSTYRENE",
    highlight: "(PS)",
    description: "CONSISTENT MATERIAL",
    description2: "FOR MULTIPLE APPLICATIONS",
    features: [
      "HIGH QUALITY",
      "CONSISTENT SUPPLY",
      "EASY PROCESSING",
      "RELIABLE PERFORMANCE",
    ],
  },
  {
    image: "/resol1.webp",
    eyebrow: "INDUSTRIAL MATERIALS",
    eyebrow2: "BUILT FOR PERFORMANCE",
    title: "PVC RESIN",
    highlight: "(PVC)",
    description: "RELIABLE RAW MATERIAL",
    description2: "FOR INDUSTRIAL APPLICATIONS",
    features: [
      "HIGH PURITY",
      "STABLE QUALITY",
      "WIDE APPLICATIONS",
      "DEPENDABLE SUPPLY",
    ],
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative mt-27 w-full overflow-hidden bg-[#f7f5ef] p-0">
      <div className="w-full p-0">
        <div className="relative w-full overflow-hidden">

          <Swiper
            modules={[
              Navigation,
              Autoplay,
              EffectFade,
            ]}
            slidesPerView={1}
            loop={true}
            speed={900}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".banner-next",
              prevEl: ".banner-prev",
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            className="w-full"
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={index}>

                <div className="relative min-h-[520px] w-full overflow-hidden sm:min-h-[600px] lg:min-h-0">

                  {/* =================================
                      BACKGROUND IMAGE
                  ================================= */}

                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      lg:relative
                      lg:h-auto
                    "
                  />

                  {/* =================================
                      LEFT OVERLAY
                  ================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-[#f7f5ef]/98
                      via-[#f7f5ef]/40
                      to-transparent
                    "
                  />

                  {/* =================================
                      CONTENT
                  ================================= */}

                  <div className="absolute inset-y-0 left-0 z-10 flex w-full items-center">

                    <div
                      className="
                        w-full
                        px-7
                        sm:px-10
                        md:px-14
                        lg:w-[53%]
                        lg:px-16
                        xl:px-20
                      "
                    >

                      {/* =================================
                          EYEBROW
                      ================================= */}

                      <div className="mb-3 sm:mb-4">

                        <p
                          className="
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[4px]
                            text-[#3e3e3e]
                            sm:text-xs
                          "
                        >
                          {banner.eyebrow}
                        </p>

                        <p
                          className="
                            mt-1
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[4px]
                            text-[#3e3e3e]
                            sm:text-xs
                          "
                        >
                          {banner.eyebrow2}
                        </p>

                        <span className="mt-3 block h-[2px] w-10 bg-[#D4A017] sm:mt-4 sm:w-14" />

                      </div>

                      {/* =================================
                          TYPEWRITER HEADING
                      ================================= */}

                      <TypewriterHeading
                        key={activeIndex}
                        title={banner.title}
                        highlight={banner.highlight}
                      />

                      {/* =================================
                          DESCRIPTION
                      ================================= */}

                      <div className="mt-4 sm:mt-5">

                        <p
                          className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[4px]
                            text-[#444]
                            sm:text-xs
                          "
                        >
                          {banner.description}
                        </p>

                        <p
                          className="
                            mt-1
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[4px]
                            text-[#444]
                            sm:text-xs
                          "
                        >
                          {banner.description2}
                        </p>

                      </div>

                      {/* =================================
                          FEATURES
                      ================================= */}

                      <div
                        className="
                          mt-6
                          flex
                          max-w-[520px]
                          items-start
                          gap-0
                          sm:mt-7
                        "
                      >

                        {banner.features.map(
                          (feature, featureIndex) => (
                            <div
                              key={feature}
                              className="
                                flex
                                min-w-0
                                flex-1
                                flex-col
                                items-center
                                border-r
                                border-black/20
                                px-2
                                last:border-r-0
                                sm:px-3
                              "
                            >

                              <div
                                className="
                                  flex
                                  h-10
                                  w-10
                                  items-center
                                  justify-center
                                  rounded-full
                                  border
                                  border-[#D4A017]
                                  bg-[#D4A017]/20
                                  shadow-sm
                                  sm:h-12
                                  sm:w-12
                                "
                              >
                                <span
                                  className="
                                    text-lg
                                    font-bold
                                    text-[#222]
                                    sm:text-xl
                                  "
                                >
                                  {featureIndex === 0 && "✓"}
                                  {featureIndex === 1 && "⚙"}
                                  {featureIndex === 2 && "◇"}
                                  {featureIndex === 3 && "✓"}
                                </span>
                              </div>

                              <p
                                className="
                                  mt-2
                                  text-center
                                  text-[7px]
                                  font-bold
                                  uppercase
                                  leading-[1.3]
                                  tracking-[0.5px]
                                  text-[#333]
                                  sm:text-[8px]
                                  sm:tracking-[1px]
                                "
                              >
                                {feature}
                              </p>

                            </div>
                          )
                        )}

                      </div>

                    </div>
                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

          {/* =================================
              PREVIOUS
          ================================= */}

          <button
            className="
              banner-prev
              absolute
              left-3
              top-1/2
              z-30
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/90
              text-xl
              text-[#222]
              shadow-lg
              transition-all
              duration-300
              hover:scale-110
              hover:bg-[#D4A017]
              sm:left-5
              sm:h-11
              sm:w-11
            "
            aria-label="Previous Banner"
          >
            ←
          </button>

          {/* =================================
              NEXT
          ================================= */}

          <button
            className="
              banner-next
              absolute
              right-3
              top-1/2
              z-30
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/90
              text-xl
              text-[#222]
              shadow-lg
              transition-all
              duration-300
              hover:scale-110
              hover:bg-[#D4A017]
              sm:right-5
              sm:h-11
              sm:w-11
            "
            aria-label="Next Banner"
          >
            →
          </button>

        </div>
      </div>
    </section>
  );
}


/* =====================================================
   TYPEWRITER HEADING
===================================================== */

function TypewriterHeading({ title, highlight }) {
  const fullText = `${title}${highlight}`;

  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    setText("");

    const typingInterval = setInterval(() => {
      currentIndex += 1;

      setText(fullText.slice(0, currentIndex));

      if (currentIndex >= fullText.length) {
        clearInterval(typingInterval);

        setTimeout(() => {
          setShowCursor(false);
        }, 700);
      }
    }, 85);

    return () => {
      clearInterval(typingInterval);
    };
  }, [fullText]);

  /*
    Title aur highlight ko separate render karne ke liye
    text length ke according split kar rahe hain.
  */

  const titleLength = title.length;

  const typedTitle = text.slice(0, titleLength);

  const typedHighlight = text.slice(titleLength);

  return (
    <div
      className="
        min-h-[95px]
        sm:min-h-[135px]
        md:min-h-[155px]
        lg:min-h-[145px]
      "
    >
      {/* MAIN HEADING */}

      <h1
        className="
          text-[42px]
          font-black
          uppercase
          leading-[0.88]
          tracking-[-2px]
          text-[#171717]
          sm:text-6xl
          md:text-7xl
          lg:text-[64px]
          xl:text-[76px]
        "
      >
        {typedTitle}
        {showCursor && (
          <span className="ml-1 inline-block text-[#D4A017]">
            |
          </span>
        )}
      </h1>

      {/* GOLD HIGHLIGHT */}

      <div
        className="
          mt-1
          min-h-[43px]
          text-[43px]
          font-black
          uppercase
          leading-none
          tracking-[-2px]
          text-[#D4A017]
          sm:min-h-[60px]
          sm:text-6xl
          md:text-7xl
          lg:min-h-[65px]
          lg:text-[65px]
          xl:text-[76px]
        "
      >
        {typedHighlight}
        {showCursor && typedTitle.length === titleLength && (
          <span className="ml-1 text-[#D4A017]">
            |
          </span>
        )}
      </div>
    </div>
  );
}
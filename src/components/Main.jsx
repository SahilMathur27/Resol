"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const banners = [
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
  {
    image: "/reso4.webp",
    eyebrow: "TRUSTED POLYMERS",
    eyebrow2: "FOR A BRIGHTER TOMORROW",
    title: "Calcium ",
    highlight: "Carbonate",
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
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative mt-20 w-full overflow-hidden bg-[#f7f5ef] p-0">
      <div className="w-full p-0">
        <div className="relative w-full overflow-hidden">

          <Swiper
            modules={[Navigation, Autoplay, EffectFade, Pagination]}
            slidesPerView={1}
            loop={true}
            speed={900}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".banner-next",
              prevEl: ".banner-prev",
            }}
            pagination={{
              el: ".banner-pagination",
              clickable: true,
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            className="w-full"
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[480px] w-full overflow-hidden sm:h-[520px] md:h-[580px] lg:h-[620px] xl:h-[680px]">

                  {/* BACKGROUND IMAGE WITH OVERLAY */}
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* MULTI-LAYER GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5ef]/95 via-[#f7f5ef]/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

                  {/* DECORATIVE GOLD ACCENT */}
                  <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#D4A017]/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
                  <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-[#D4A017]/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

                  {/* CONTENT */}
                  <div className="absolute inset-y-0 left-0 z-10 flex w-full items-center">
                    <div className="w-full px-7 sm:px-10 md:px-14 lg:w-[55%] lg:px-16 xl:px-20">

                      {/* EYEBROW WITH ANIMATED LINE */}
                      <div className="mb-4 sm:mb-5">
                        <div className="flex items-center gap-4">
                          <div className="flex flex-col">
                            <p className="text-[11px] font-medium uppercase tracking-[5px] text-[#3e3e3e] sm:text-xs">
                              {banner.eyebrow}
                            </p>
                            <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[5px] text-[#3e3e3e] sm:text-xs">
                              {banner.eyebrow2}
                            </p>
                          </div>
                          <span className="h-[2px] w-12 bg-[#D4A017] sm:w-16" />
                        </div>
                      </div>

                      {/* TYPEWRITER HEADING */}
                      <TypewriterHeading
                        key={activeIndex}
                        title={banner.title}
                        highlight={banner.highlight}
                      />

                      {/* DESCRIPTION */}
                      <div className="mt-5 sm:mt-6">
                        <p className="text-[11px] font-semibold uppercase tracking-[5px] text-[#444] sm:text-xs">
                          {banner.description}
                        </p>
                        <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[5px] text-[#444] sm:text-xs">
                          {banner.description2}
                        </p>
                      </div>

                      {/* FEATURES - MODERN DESIGN */}
                      <div className="mt-7 flex max-w-[600px] items-start gap-0 sm:mt-8">
                        {banner.features.map((feature, featureIndex) => (
                          <div
                            key={feature}
                            className="flex min-w-0 flex-1 flex-col items-center border-r border-black/15 px-2 last:border-r-0 sm:px-3"
                          >
                            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D4A017] bg-[#D4A017]/15 shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#D4A017]/30 sm:h-12 sm:w-12">
                              <span className="text-lg font-bold text-[#222] sm:text-xl">
                                {featureIndex === 0 && "✦"}
                                {featureIndex === 1 && "⚡"}
                                {featureIndex === 2 && "◆"}
                                {featureIndex === 3 && "★"}
                              </span>
                            </div>
                            <p className="mt-2 text-center text-[8px] font-bold uppercase leading-tight tracking-[0.5px] text-[#333] sm:text-[9px] sm:tracking-[1px]">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* CTA BUTTON */}
                      <div className="mt-8">
                        <button className="group flex items-center gap-3 bg-[#D4A017] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B8860B] hover:shadow-xl hover:-translate-y-0.5">
                          <span>EXPLORE MORE</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </button>
                      </div>

                    </div>
                  </div>

                  {/* SLIDE INDICATOR */}
                  <div className="absolute bottom-6 right-8 z-20 flex items-center gap-3 text-sm font-medium text-white/70">
                    <span className="text-lg font-bold text-[#D4A017]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-[1px] w-8 bg-white/30" />
                    <span className="text-white/50">{String(banners.length).padStart(2, "0")}</span>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM NAVIGATION BUTTONS */}
          <button
            className="banner-prev absolute left-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-[#222] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#D4A017] hover:text-white sm:left-6 sm:h-12 sm:w-12"
            aria-label="Previous Banner"
          >
            ←
          </button>

          <button
            className="banner-next absolute right-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-[#222] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#D4A017] hover:text-white sm:right-6 sm:h-12 sm:w-12"
            aria-label="Next Banner"
          >
            →
          </button>

          {/* CUSTOM PAGINATION DOTS */}
          <div className="banner-pagination absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2" />

          {/* STYLE FOR CUSTOM PAGINATION */}
          <style jsx>{`
            .custom-bullet {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.4);
              cursor: pointer;
              transition: all 0.3s ease;
              border: 2px solid transparent;
            }
            .custom-bullet-active {
              background: #D4A017;
              border-color: #D4A017;
              box-shadow: 0 0 20px rgba(212, 160, 23, 0.4);
              width: 28px;
              border-radius: 5px;
            }
          `}</style>

        </div>
      </div>
    </section>
  );
}

/* =====================================================
   TYPEWRITER HEADING - ENHANCED
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
        }, 800);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const titleLength = title.length;
  const typedTitle = text.slice(0, titleLength);
  const typedHighlight = text.slice(titleLength);

  return (
    <div className="min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[130px]">
      {/* MAIN HEADING */}
      <h1 className="text-[38px] font-black uppercase leading-[0.88] tracking-[-1.5px] text-[#171717] sm:text-5xl md:text-6xl lg:text-[60px] xl:text-[72px]">
        {typedTitle}
        {showCursor && (
          <span className="ml-0.5 inline-block text-[#D4A017] animate-pulse">|</span>
        )}
      </h1>

      {/* GOLD HIGHLIGHT */}
      <div className="mt-1 min-h-[35px] text-[38px] font-black uppercase leading-none tracking-[-1.5px] text-[#D4A017] sm:min-h-[48px] sm:text-5xl md:text-6xl lg:min-h-[55px] lg:text-[60px] xl:text-[72px]">
        {typedHighlight}
        {showCursor && typedTitle.length === titleLength && (
          <span className="ml-0.5 text-[#D4A017] animate-pulse">|</span>
        )}
      </div>
    </div>
  );
}
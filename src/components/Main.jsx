"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const bannerImages = [
  "/banner (21).webp",
   "/Polystyrene banner.webp",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5ef]">
      <div className="mx-auto max-w-[1600px] px-0 py-0 md:px-8 lg:px-0">
        
        {/* ONLY IMAGE SLIDER */}
        <div className="relative w-full overflow-hidden rounded-[10px]">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            slidesPerView={1}
            loop={true}
            speed={900}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".banner-next",
              prevEl: ".banner-prev",
            }}
            className="w-full"
          >
            {bannerImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative top-0 w-full">
                  <img
                    src={image}
                    alt={`Industrial Chemical Banner ${index + 1}`}
                    className="block h-auto w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* PREVIOUS */}
          <button
            className="
              banner-prev
              absolute left-4 top-1/2 z-20
              flex h-11 w-11 -translate-y-1/2
              items-center justify-center
              rounded-full
              bg-white/95
              text-2xl text-[#26364f]
              shadow-xl
              transition-all duration-300
              hover:scale-110
              hover:bg-[#f5bd24]
              md:left-6 md:h-13 md:w-13
            "
            aria-label="Previous Banner"
          >
            ←
          </button>

          {/* NEXT */}
          <button
            className="
              banner-next
              absolute right-4 top-1/2 z-20
              flex h-11 w-11 -translate-y-1/2
              items-center justify-center
              rounded-full
              bg-white/95
              text-2xl text-[#26364f]
              shadow-xl
              transition-all duration-300
              hover:scale-110
              hover:bg-[#f5bd24]
              md:right-6 md:h-13 md:w-13
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
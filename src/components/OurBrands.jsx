"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const brands = [
  {
    logo: "/astrallogo.webp",
    name: "PVC Resin",
  },
  {
    logo: "/nilkamal-ltd.webp",
    name: "Calcium Carbonate",
  },
  {
    logo: "/prince-pipes-fittings.webp",
    name: "EVA Resin",
  },
  {
    logo: "/cosmo-films.webp",
    name: "PET Resin",
  },
   {
    logo: "/finolex-industries.webp",
    name: "PET Resin",
  },
   {
    logo: "/uflex-ltd.webp",
    name: "PET Resin",
  },
];

export default function OurBrands() {
  return (
    <section className="relative overflow-hidden bg-[#f5f4ef] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="relative">

          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            speed={800}
            spaceBetween={14}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".brand-next",
              prevEl: ".brand-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            className="!overflow-visible"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    group relative
                    flex h-[135px]
                    items-center justify-center
                    overflow-hidden
                    rounded-2xl
                    border border-black/[0.07]
                    bg-white
                    px-2
                    shadow-sm
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-[#D4A017]/50
                    hover:shadow-lg
                  "
                >
                  {/* Gold Top Accent */}
                  <span
                    className="
                      absolute left-1/2 top-0
                      h-[3px] w-0
                      -translate-x-1/2
                      bg-[#D4A017]
                      transition-all duration-500
                      group-hover:w-16
                    "
                  />

                  {/* LOGO ONLY */}
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={200}
                    height={100}
                    className="
                      h-auto
                      max-h-[100px]
                      w-auto
                      max-w-[200px]
                      object-contain
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* PREVIOUS */}
          <button
            className="
              brand-prev
              absolute left-0 top-1/2 z-20
              flex h-9 w-9
              -translate-x-1/2
              -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-black/10
              bg-white
              text-lg text-[#303030]
              shadow-md
              transition-all duration-300
              hover:scale-110
              hover:bg-[#D4A017]
              hover:text-white
              md:h-10 md:w-10
            "
            aria-label="Previous"
          >
            ←
          </button>

          {/* NEXT */}
          <button
            className="
              brand-next
              absolute right-0 top-1/2 z-20
              flex h-9 w-9
              translate-x-1/2
              -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-black/10
              bg-white
              text-lg text-[#303030]
              shadow-md
              transition-all duration-300
              hover:scale-110
              hover:bg-[#D4A017]
              hover:text-white
              md:h-10 md:w-10
            "
            aria-label="Next"
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}
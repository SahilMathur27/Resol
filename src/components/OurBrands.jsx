"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const brands = [
  {
    logo: "/astrallogo.webp",
    name: "Astral",
  },
  {
    logo: "/nilkamal-ltd.webp",
    name: "Nilkamal",
  },
  {
    logo: "/prince-pipes-fittings.webp",
    name: "Prince Pipes",
  },
  {
    logo: "/cosmo-films.webp",
    name: "Cosmo Films",
  },
  {
    logo: "/finolex-industries.webp",
    name: "Finolex Industries",
  },
  {
    logo: "/uflex-ltd.webp",
    name: "UFlex",
  },
];

export default function OurBrands() {
  return (
    <section className="relative overflow-hidden bg-[#f5f4ef] py-11 md:py-13">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative">

          <Swiper
            modules={[Autoplay]}
            loop={true}
            loopAdditionalSlides={brands.length}
            speed={10000}
            spaceBetween={18}
            slidesPerView={4}
            allowTouchMove={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 22,
              },
            }}
            className="!overflow-hidden !pb-2"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    group
                    relative
                    flex
                    h-[145px]
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-black/[0.07]
                    bg-white
                    px-2
                    py-2
                    shadow-sm
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#D4A017]/50
                    hover:shadow-lg
                  "
                >
                  {/* GOLD TOP ACCENT */}
                  <span
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-[3px]
                      w-0
                      -translate-x-1/2
                      bg-[#D4A017]
                      transition-all
                      duration-500
                      group-hover:w-20
                    "
                  />

                  {/* LOGO */}
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={100}
                    height={100}
                    priority={index < 5}
                    className="
                      h-10
                      w-40
                   
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
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
              absolute
              left-0
              top-1/2
              z-20
              flex
              h-9
              w-9
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-black/10
              bg-white
              text-lg
              text-[#303030]
              shadow-md
              transition-all
              duration-100
              hover:scale-110
              hover:bg-[#D4A017]
              hover:text-white
              md:h-10
              md:w-10
            "
            aria-label="Previous"
            onClick={() => {
              document
                .querySelector(".swiper")
                ?.swiper.slidePrev();
            }}
          >
            ←
          </button>

          {/* NEXT */}
          <button
            className="
              brand-next
              absolute
              right-0
              top-1/2
              z-20
              flex
              h-9
              w-9
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-black/10
              bg-white
              text-lg
              text-[#303030]
              shadow-md
              transition-all
              duration-300
              hover:scale-110
              hover:bg-[#D4A017]
              hover:text-white
              md:h-10
              md:w-10
            "
            aria-label="Next"
            onClick={() => {
              document
                .querySelector(".swiper")
                ?.swiper.slideNext();
            }}
          >
            →
          </button>

        </div>
      </div>
    </section>
  );
}
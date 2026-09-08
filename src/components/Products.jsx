"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    title: "PVC Resin",
    image: "/resol products.webp",
    link: "/products/pvc-resin",
  },
  {
    title: "EVA Resin",
    image: "/resol products.webp",
    link: "/products/eva-resin",
  },
  {
    title: "Polyethylene (PE)",
    image: "/resol products.webp",
    link: "/products/polyethylene",
  },
  {
    title: "Polypropylene (PP)",
    image: "/resol products.webp",
    link: "/products/polypropylene",
  },
  {
    title: "Polystyrene",
    image: "/resol products.webp",
    link: "/products/polystyrene",
  },
  {
    title: "POE",
    image: "/resol products.webp",
    link: "/products/poe",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-[#F8F5EE] py-12 md:py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
            Our Products
          </span>

          <h2 className="text-3xl font-bold text-black md:text-5xl">
            Explore Our Premium Products
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-16 bg-[#D4A017]" />

          <p className="mt-5 text-base leading-7 text-[#5F5A52] md:text-lg">
            Discover our range of high-quality polymer products designed for
            diverse industrial applications.
          </p>
        </motion.div>

        {/* ================= SLIDER AREA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative products-slider-wrapper"
        >

          {/* LEFT ARROW - OUTSIDE */}
          <button
            className="products-prev absolute left-[-22px] top-[42%] z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-xl font-bold text-[#D4A017] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#D4A017] hover:text-black lg:flex"
            aria-label="Previous products"
          >
            ←
          </button>

          {/* RIGHT ARROW - OUTSIDE */}
          <button
            className="products-next absolute right-[-22px] top-[42%] z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-xl font-bold text-[#D4A017] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#D4A017] hover:text-black lg:flex"
            aria-label="Next products"
          >
            →
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: ".products-prev",
              nextEl: ".products-next",
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="products-swiper !pb-16"
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.title}>

                <div className="group h-full overflow-hidden rounded-[22px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                  {/* ================= IMAGE ================= */}
                  <div className="relative h-[250px] overflow-hidden bg-[#EEEEEB]">

                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      priority={index < 3}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* SOFT OVERLAY */}
                    <div className="absolute inset-0 bg-black/5 transition-all duration-500 group-hover:bg-transparent" />

                    {/* GOLD TOP LINE */}
                    <div className="absolute left-0 top-0 z-10 h-1.5 w-full bg-[#D4A017]" />

                    {/* NUMBER */}
                    <div className="absolute left-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#D4A017]/60 bg-black text-sm font-bold text-[#D4A017] shadow-lg">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="p-6">

                    <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D4A017]">
                      Premium Polymer
                    </span>

                    <h3 className="mt-3 text-2xl font-bold text-black transition-colors duration-300 group-hover:text-[#D4A017]">
                      {product.title}
                    </h3>

                    {/* GOLD LINE */}
                    <div className="my-4 h-[3px] w-12 bg-[#D4A017] transition-all duration-500 group-hover:w-24" />

                    {/* BUTTON */}
                    <Link
                      href={product.link}
                      className="mt-2 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:gap-4 hover:bg-[#D4A017] hover:text-black"
                    >
                      Read More
                      <span className="text-lg">→</span>
                    </Link>

                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>

          {/* ================= CUSTOM SWIPER CSS ================= */}
          <style jsx global>{`

            .products-slider-wrapper {
              padding-left: 28px;
              padding-right: 28px;
            }

            /* DESKTOP ARROWS */
            .products-prev,
            .products-next {
              display: flex;
            }

            /* SWIPER PAGINATION */
            .products-swiper .swiper-pagination {
              bottom: 0 !important;
            }

            .products-swiper .swiper-pagination-bullet {
              width: 9px;
              height: 9px;
              background: #000000;
              opacity: 0.3;
              transition: all 0.3s ease;
            }

            .products-swiper .swiper-pagination-bullet-active {
              width: 28px;
              border-radius: 10px;
              background: #d4a017;
              opacity: 1;
            }

            /* REMOVE DEFAULT SWIPER ARROWS */
            .products-swiper .swiper-button-next,
            .products-swiper .swiper-button-prev {
              display: none !important;
            }

            /* MOBILE */
            @media (max-width: 1023px) {
              .products-slider-wrapper {
                padding-left: 0;
                padding-right: 0;
              }

              .products-prev,
              .products-next {
                display: none !important;
              }
            }

            /* MOBILE IMAGE */
            @media (max-width: 639px) {
              .products-swiper .swiper-slide {
                height: auto;
              }
            }

          `}</style>

        </motion.div>
      </div>
    </section>
  );
}
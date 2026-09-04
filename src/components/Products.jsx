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
    description:
      "High-quality PVC resin suitable for pipes, fittings, profiles and various industrial applications.",
    image: "/pvc resin.webp",
    link: "/products/pvc-resin",
  },
  {
    title: "EVA Resin",
    description:
      "Premium Ethylene Vinyl Acetate resin known for flexibility, durability and excellent performance.",
    image: "/pvc resin.webp",
    link: "/products/eva-resin",
  },
  {
    title: "Polyethylene (PE)",
    description:
      "Versatile polyethylene resin suitable for packaging, films, containers and industrial applications.",
    image: "/pvc resin.webp",
    link: "/products/polyethylene",
  },
  {
    title: "Polypropylene (PP)",
    description:
      "Strong and lightweight polypropylene material with excellent durability and chemical resistance.",
    image: "/pvc resin.webp",
    link: "/products/polypropylene",
  },
  {
    title: "Polystyrene",
    description:
      "Reliable polystyrene resin ideal for packaging, disposable products and industrial applications.",
    image: "/pvc resin.webp",
    link: "/products/polystyrene",
  },
  {
    title: "POE",
    description:
      "High-performance Polyolefin Elastomer offering excellent flexibility and impact resistance.",
    image: "/pvc resin.webp",
    link: "/products/poe",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-slate-50 py-10 md:py-15 lg:py-15">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[4px] text-orange-500">
            Our Products
          </span>

          <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
            Explore Our Premium Products
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            Discover our range of high-quality polymer products designed for
            diverse industrial applications.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
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
                slidesPerView: 3,
              },
            }}
            className="products-swiper !pb-14"
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.title}>
                <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

                  {/* Image */}
                  <div className="relative h-[230px] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      priority={index < 3}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-slate-900/10 transition-opacity duration-500 group-hover:opacity-0" />

                    {/* Number */}
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-[3px] text-orange-500">
                      Premium Polymer
                    </span>

                    <h3 className="mt-3 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-orange-500">
                      {product.title}
                    </h3>

                    <div className="my-4 h-[3px] w-12 bg-orange-500 transition-all duration-500 group-hover:w-20" />

                    <p className="text-sm leading-7 text-slate-600">
                      {product.description}
                    </p>

                    <Link
                      href={product.link}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:gap-4 hover:bg-orange-500"
                    >
                      Read More
                      <span className="text-lg">→</span>
                    </Link>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}
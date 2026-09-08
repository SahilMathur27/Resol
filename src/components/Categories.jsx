"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    name: "PVC Resin",
    image: "/pet resin.webp",
  },
  {
    name: "Calcium Carbonate",
    image: "/Calcium carbonate.webp",
  },
  {
    name: "Citric Acid",
    image: "/Citric Acid.webp",
  },
  {
    name: "Plasticizers",
    image: "/Plasticizers.webp",
  },
  {
    name: "Melamine",
    image: "/Melamine-2 (1).webp",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#f5f3ef] py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-1 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b08d57]">
            Our Products
          </p>

          <h2 className="text-3xl font-semibold text-[#1c1c1c] md:text-5xl">
            Product Categories
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6b6b6b] md:text-base">
            Explore our wide range of quality industrial raw materials and
            specialty chemical products.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              whileHover={{
                y: -8,
              }}
              className="group cursor-pointer"
            >
              {/* Image Card */}
              <div
                className="
                  relative
                  h-[230px]
                  overflow-hidden
                  rounded-2xl
                  border border-[#ded8cf]
                  bg-white
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  sm:h-[300px]
                  lg:h-[300px]
                "
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Image Highlight */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/65
                    via-black/10
                    to-transparent
                    transition-all
                    duration-500
                    group-hover:from-black/75
                  "
                />

                {/* Shine Effect */}
                <div
                  className="
                    absolute
                    -left-[120%]
                    top-0
                    h-full
                    w-[70%]
                    rotate-[15deg]
                    bg-white/15
                    blur-xl
                    transition-all
                    duration-1000
                    group-hover:left-[120%]
                  "
                />

                {/* Category Name */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div
                    className="
                      rounded-xl
                      border border-white/30
                      bg-white/95
                      px-3
                      py-3
                      text-center
                      shadow-lg
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      group-hover:border-[#b08d57]
                      group-hover:bg-[#b08d57]
                    "
                  >
                    <h3
                      className="
                        text-sm
                        font-semibold
                        text-[#1c1c1c]
                        transition-colors
                        duration-500
                        group-hover:text-white
                        md:text-base
                      "
                    >
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
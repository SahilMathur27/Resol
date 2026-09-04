'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

const industries = [
  {
    id: 1,
    name: 'Footwear',
    description:
      'PVC Resin and Calcium Carbonate solutions for footwear manufacturing, soles, and related applications.',
    image: '/footwear.webp',
  },
  {
    id: 2,
    name: 'PVC Panels',
    description:
      'High-quality raw materials supporting the production of durable PVC panels and interior applications.',
    image: '/pvc penal.webp',
  },
  {
    id: 3,
    name: 'Adhesives',
    description:
      'Specialized materials used in adhesive formulations for reliable bonding and consistent performance.',
    image: '/Adhesives.webp',
  },
  {
    id: 4,
    name: 'Textile',
    description:
      'Raw materials supporting textile manufacturing, fabric coating, and a wide range of industrial processes.',
    image: '/textile.webp',
  },
  {
    id: 5,
    name: 'Pipes & Fittings',
    description:
      'PVC Resin solutions for manufacturing pipes, fittings, and other durable PVC products.',
    image: '/pipe.webp',
  },
  {
    id: 6,
    name: 'Packaging',
    description:
      'Reliable materials for flexible and rigid packaging applications across different industries.',
    image: '/industry (3).webp',
  },
  {
    id: 7,
    name: 'Plastics',
    description:
      'PVC Resin and Calcium Carbonate for a broad range of plastic manufacturing applications.',
    image: '/pvc penal.webp',
  },
  {
    id: 8,
    name: 'Paints & Coatings',
    description:
      'Quality materials for paints, coatings, surface finishing, and related industrial applications.',
    image: '/paints (1).webp',
  },
];

export default function IndustriesSlider() {
  const swiperRef = useRef(null);

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-10 md:py-13">

      {/* Background Decoration */}
      <div className="absolute left-0 top-0 h-full w-full opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5">

        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-amber-500" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Industries We Serve
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-[#1d1d1d] md:text-5xl lg:text-6xl">
              Materials that power
              <br />
              <span className="text-amber-600">every industry.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-md"
          >
            <p className="text-base leading-8 text-gray-600">
              We supply quality imported raw materials that support diverse
              manufacturing sectors across India with reliable solutions for
              multiple industrial applications.
            </p>

            {/* Navigation */}
            <div className="mt-7 flex gap-3">
              <button
                onClick={() => swiperRef.current?.swiper.slidePrev()}
                className="industry-prev flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-xl transition-all duration-300 hover:-translate-x-1 hover:border-amber-500 hover:bg-amber-500 hover:text-white"
              >
                ←
              </button>

              <button
                onClick={() => swiperRef.current?.swiper.slideNext()}
                className="industry-next flex h-12 w-12 items-center justify-center rounded-full bg-[#1d1d1d] text-xl text-white transition-all duration-300 hover:translate-x-1 hover:bg-amber-500"
              >
                →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Slider */}
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.4,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          className="industries-premium-slider !overflow-visible"
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={industry.id}>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative h-[480px] cursor-pointer overflow-hidden rounded-[2px]"
              >

                {/* Image */}
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Default Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-all duration-500 group-hover:from-black/90" />

                {/* Large Number */}
                <span className="absolute right-5 top-3 text-7xl font-bold text-white/20 transition-all duration-500 group-hover:text-amber-400/30">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Top Label */}
                <div className="absolute left-6 top-6">
                  <span className="border border-white/40 bg-black/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    Industry
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">

                  {/* Accent Line */}
                  <div className="mb-5 h-[3px] w-12 bg-amber-500 transition-all duration-500 group-hover:w-20" />

                  <h3 className="text-2xl font-semibold text-white md:text-3xl">
                    {industry.name}
                  </h3>

                  {/* Hidden Content - Hover */}
                  <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="mt-4 max-w-sm translate-y-5 text-sm leading-7 text-gray-300 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        {industry.description}
                      </p>

                      <button className="mt-5 flex translate-y-5 items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-amber-400 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        Explore Industry
                        <span className="text-lg">→</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Border */}
                <div className="pointer-events-none absolute inset-0 border border-white/10 transition-all duration-500 group-hover:border-amber-400/70" />

              </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Progress Decoration */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-12 h-px bg-gray-300"
        >
          <div className="h-full w-1/4 bg-amber-500" />
        </motion.div>

      </div>
    </section>
  );
}
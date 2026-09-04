"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "ABC Polymers",
    location: "New Delhi",
    quote:
      "We have been sourcing PVC Resin from them for our manufacturing requirements. The material quality and overall service have been consistently reliable.",
  },
  {
    id: 2,
    name: "Amit Sharma",
    company: "Sharma Footwear Industries",
    location: "Agra",
    quote:
      "Their product quality and timely supply have helped us maintain a smooth production process. A dependable partner for our raw material requirements.",
  },
  {
    id: 3,
    name: "Vikash Gupta",
    company: "Gupta Packaging Solutions",
    location: "Noida",
    quote:
      "Professional communication, reliable material quality and good support throughout the ordering process. We are satisfied with the overall experience.",
  },
  {
    id: 4,
    name: "Sandeep Verma",
    company: "Verma PVC Industries",
    location: "Faridabad",
    quote:
      "We appreciate their consistent support and quality materials. Their team understands industrial requirements and provides reliable solutions.",
  },
  {
    id: 5,
    name: "Manoj Agarwal",
    company: "Agarwal Coatings",
    location: "Jaipur",
    quote:
      "A professional supplier with good product knowledge and responsive service. The entire process from inquiry to delivery was handled efficiently.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-20 md:py-28"
      style={{
        backgroundImage: "url('/testimonial-bg.webp')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#07111f]/90" />

      {/* Extra Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b14]/95 via-[#07111f]/85 to-[#07111f]/70" />

      {/* Decorative Lines */}
      <div className="absolute left-[8%] top-0 h-full w-px bg-white/10" />
      <div className="absolute right-[8%] top-0 h-full w-px bg-white/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-amber-500" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              Client Testimonials
            </span>

            <span className="h-[2px] w-10 bg-amber-500" />
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            What our clients
            <br />
            <span className="text-amber-400">say about us.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300">
            Building long-term relationships through quality materials,
            reliable supply and professional service across industries.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          className="testimonial-dark-slider !overflow-visible !pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden border border-white/10 bg-white/[0.07] p-7 backdrop-blur-md transition-all duration-500 hover:border-amber-400/70 hover:bg-white/[0.12] md:p-8"
              >
                {/* Large Quote */}
                <div className="absolute right-5 top-2 font-serif text-[120px] leading-none text-white/[0.05] transition-all duration-500 group-hover:text-amber-400/10">
                  “
                </div>

                {/* Number */}
                <span className="absolute left-0 top-0 border-r border-b border-white/10 px-4 py-2 text-[11px] font-bold tracking-widest text-amber-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="relative z-10 mt-10">

                  {/* Stars */}
                  <div className="mb-7 flex gap-1 text-amber-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>

                  <p className="text-base leading-8 text-gray-200">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Client */}
                <div className="relative z-10 mt-8 border-t border-white/10 pt-6">

                  <div className="flex items-center gap-4">

                    {/* Avatar */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 text-sm font-bold text-amber-400 transition-all duration-300 group-hover:bg-amber-400 group-hover:text-[#07111f]">
                      {testimonial.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {testimonial.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-400">
                        {testimonial.company}
                      </p>

                      <p className="mt-1 text-[11px] uppercase tracking-wider text-amber-400">
                        {testimonial.location}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-amber-400 transition-all duration-500 group-hover:w-full" />

              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Swiper Styles */}
      <style jsx global>{`
        .testimonial-dark-slider .swiper-slide {
          height: auto;
          padding: 5px 2px;
        }

        .testimonial-dark-slider .swiper-pagination {
          bottom: 0 !important;
        }

        .testimonial-dark-slider .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          background: #ffffff;
          opacity: 0.3;
          transition: all 0.3s ease;
        }

        .testimonial-dark-slider .swiper-pagination-bullet-active {
          width: 34px;
          border-radius: 10px;
          background: #fbbf24;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
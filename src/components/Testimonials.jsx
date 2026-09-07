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
    <section className="relative overflow-hidden bg-[#f5f3ef] py-10 md:py-15">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full border-[50px] border-[#b08d57]/[0.06]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border-[60px] border-[#b08d57]/[0.05]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3">

            <span className="h-[2px] w-10 bg-[#b08d57]" />

            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#a27d45]">
              Client Testimonials
            </span>

          </div>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#1c1c1c] sm:text-4xl md:text-5xl">

            Trusted by businesses.
            
            <span className="block text-[#b08d57]">
              Valued by our clients.
            </span>

          </h2>

        </motion.div>


        {/* =====================================================
            MAIN SECTION
        ===================================================== */}

        <div className="grid items-center gap-10 lg:grid-cols-[42%_58%] lg:gap-0">


          {/* =================================================
              LEFT : PVC RESIN IMAGE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 min-w-0 lg:pr-8"
          >

            {/* Image Frame */}

            <div className="relative overflow-hidden rounded-[28px] border border-[#d7c29c] bg-white p-1">

              <div className="relative aspect-[4/4.4] overflow-hidden rounded-[24px]">

                <img
                  src="/pvc resin cate.webp"
                  alt="PVC Resin"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />


                {/* Product Information */}

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">

                  <div className="rounded-2xl border border-white/20 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:p-5">

                    <div className="flex items-center gap-4">

                      {/* Icon */}

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5eee1]">

                        <span className="text-xl text-[#b08d57]">
                          ◆
                        </span>

                      </div>


                      <div>

                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b08d57]">
                          Featured Material
                        </p>

                        <h3 className="mt-1 text-xl font-bold tracking-wide text-[#17253a]">
                          PVC RESIN
                        </h3>

                        <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#777]">
                          Reliable Industrial Raw Material
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* Decorative Border */}

            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-[28px] border border-[#b08d57]/30" />


            {/* Floating Number */}

            <div className="absolute -left-4 -top-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#17253a] text-xs font-bold tracking-[0.2em] text-white shadow-xl sm:-left-6">

              01

            </div>

          </motion.div>


          {/* =================================================
              RIGHT : TESTIMONIAL SLIDER
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 min-w-0 overflow-hidden lg:pl-8"
          >

            {/* Slider */}

            <div className="w-full overflow-hidden">

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
                spaceBetween={20}
                slidesPerView={1}
                className="testimonial-slider !w-full !overflow-hidden !pb-14"
              >

                {testimonials.map((testimonial, index) => (

                  <SwiperSlide key={testimonial.id}>

                    {/* ================= CARD ================= */}

                    <div className="group relative min-h-[410px] w-full overflow-hidden rounded-[26px] border border-[#ded8cf] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.07)]">

                      {/* Gold Left Line */}

                      <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#b08d57]" />


                      {/* Large Quote Background */}

                      <div className="pointer-events-none absolute -right-2 -top-8 font-serif text-[180px] leading-none text-[#b08d57]/[0.06]">
                        “
                      </div>


                      <div className="relative flex min-h-[410px] flex-col p-7 sm:p-9">


                        {/* TOP */}

                        <div className="flex items-center justify-between">

                          {/* Stars */}

                          <div className="flex gap-1">

                            {[1, 2, 3, 4, 5].map((star) => (

                              <span
                                key={star}
                                className="text-base text-[#b08d57]"
                              >
                                ★
                              </span>

                            ))}

                          </div>


                          {/* Number */}

                          <span className="text-xs font-bold tracking-[0.2em] text-[#17253a]/20">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                        </div>


                        {/* QUOTE ICON */}

                        <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5eee1]">

                          <span className="font-serif text-3xl leading-none text-[#b08d57]">
                            “
                          </span>

                        </div>


                        {/* QUOTE */}

                        <div className="mt-7 flex-1">

                          <p className="max-w-2xl text-lg leading-8 text-[#454b54] sm:text-xl sm:leading-9">
                            {testimonial.quote}
                          </p>

                        </div>


                        {/* CLIENT */}

                        <div className="mt-8 border-t border-[#e9e5de] pt-5">

                          <div className="flex items-center justify-between gap-4">

                            <div className="flex items-center gap-3">

                              {/* Initials */}

                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#17253a] text-xs font-bold text-white transition-all duration-300 group-hover:bg-[#b08d57]">

                                {testimonial.name
                                  .split(" ")
                                  .map((word) => word[0])
                                  .join("")}

                              </div>


                              <div>

                                <h3 className="text-sm font-bold text-[#17253a]">
                                  {testimonial.name}
                                </h3>

                                <p className="mt-1 text-xs text-[#777]">
                                  {testimonial.company}
                                </p>

                              </div>

                            </div>


                            {/* Location */}

                            <div className="hidden text-right sm:block">

                              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#b08d57]">
                                Location
                              </p>

                              <p className="mt-1 text-xs text-[#777]">
                                {testimonial.location}
                              </p>

                            </div>

                          </div>

                        </div>

                      </div>


                      {/* Bottom Gold Animation */}

                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#b08d57] transition-all duration-700 group-hover:w-full" />

                    </div>

                  </SwiperSlide>

                ))}

              </Swiper>

            </div>

          </motion.div>

        </div>


      </div>


    </section>
  );
}
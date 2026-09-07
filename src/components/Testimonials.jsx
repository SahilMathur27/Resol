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
return ( <section className="relative overflow-hidden bg-[#FFF9D8] py-10 md:py-13">
{/* Background Pattern */} <div className="absolute inset-0 opacity-[0.035]">
<div
className="h-full w-full"
style={{
backgroundImage:
"radial-gradient(#111 1px, transparent 1px)",
backgroundSize: "22px 22px",
}}
/> </div>

  {/* Golden Decorative Shapes */}
  <div className="absolute -left-20 top-20 h-64 w-64 rounded-full border-[40px] border-[#c6a15b]/10" />
  <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full border border-[#c6a15b]/20" />

  <div className="relative z-10 mx-auto max-w-7xl px-5">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-14 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
    >
      <div className="max-w-2xl">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[2px] w-12 bg-[#c6a15b]" />

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#a88342]">
            Client Testimonials
          </span>
        </div>

        <h2 className="text-4xl font-bold leading-[1.1] text-[#1d1d1b] md:text-5xl lg:text-6xl">
          Trusted by businesses.
          <span className="block mt-2 text-[#c6a15b]">
            Valued by clients.
          </span>
        </h2>
      </div>

      <p className="max-w-md text-base leading-8 text-[#6b6b65] lg:text-right">
        Our clients value consistent product quality, dependable supply
        and professional support for their industrial requirements.
      </p>
    </motion.div>

    {/* Testimonials */}
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
      className="modern-testimonial-slider !overflow-visible !pb-16"
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
              y: -8,
            }}
            className="group relative flex min-h-[390px] flex-col justify-between bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:p-8"
          >
            {/* Top Golden Line */}
            <div className="absolute left-0 top-0 h-1 w-16 bg-[#c6a15b] transition-all duration-500 group-hover:w-full" />

            {/* Quote Icon */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex gap-1 text-[#c6a15b]">
                <span className="text-sm">★</span>
                <span className="text-sm">★</span>
                <span className="text-sm">★</span>
                <span className="text-sm">★</span>
                <span className="text-sm">★</span>
              </div>

              <span className="font-serif text-6xl leading-none text-[#c6a15b]/20">
                “
              </span>
            </div>

            {/* Quote */}
            <div className="flex-1">
              <p className="text-[17px] leading-8 text-[#44443f]">
                {testimonial.quote}
              </p>
            </div>

            {/* Bottom */}
            <div className="mt-10 flex items-center justify-between border-t border-[#e9e7e2] pt-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1d1d1b] text-sm font-bold text-white transition-all duration-300 group-hover:bg-[#c6a15b]">
                  {testimonial.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <h3 className="font-bold text-[#1d1d1b]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#777770]">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a88342]">
                {testimonial.location}
              </span>
            </div>

            {/* Number */}
            <span className="absolute bottom-4 right-6 text-5xl font-bold leading-none text-[#1d1d1b]/[0.035]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  <style jsx global>{`
    .modern-testimonial-slider .swiper-slide {
      height: auto;
      padding: 5px 2px;
    }

    .modern-testimonial-slider .swiper-pagination {
      bottom: 0 !important;
    }

    .modern-testimonial-slider .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background: #1d1d1b;
      opacity: 0.2;
      transition: all 0.3s ease;
    }

    .modern-testimonial-slider .swiper-pagination-bullet-active {
      width: 32px;
      border-radius: 10px;
      background: #c6a15b;
      opacity: 1;
    }
  `}</style>
</section>

);
}

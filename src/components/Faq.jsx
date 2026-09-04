"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    question: "What is the current PVC Resin price in India?",
    answer:
      "The PVC Resin price in India can vary based on the grade, quantity, market conditions, and sourcing. Contact Resol Industries for the latest PVC Resin price based on your requirement.",
  },
  {
    question: "What is the PVC Resin price per kg?",
    answer:
      "The PVC Resin price per kg depends on the product grade, order quantity, and prevailing market rates. You can contact us to enquire about the current price for your required PVC Resin grade.",
  },
  {
    question: "Which PVC Resin grades does Resol Industries import?",
    answer:
      "Resol Industries imports different PVC Resin grades, including Suspension Grade and Emulsion Grade, for various industrial applications.",
  },
  {
    question: "Where can I buy PVC Resin in India?",
    answer:
      "You can contact Resol Industries for your PVC Resin requirements. We import PVC Resin and distribute it to customers across India for applications such as pipes and fittings, flooring, footwear, and other industries.",
  },
  {
    question: "What is the current Calcium Carbonate price?",
    answer:
      "Calcium Carbonate prices vary depending on the grade, quantity, specifications, and market conditions. Contact Resol Industries to enquire about the latest Calcium Carbonate price.",
  },
];

export default function Map() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#f3f4f2] py-13 lg:py-15">
      
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2">
        
        {/* ================= LEFT FAQ ================= */}
        <div className="px-5 pb-12 lg:px-12 lg:pb-0 xl:px-16">
          
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h2 className="relative mt-3 inline-block text-4xl font-bold leading-tight text-[#26354a] md:text-5xl">
              Frequently Asked
              <br />
              Questions

              {/* Yellow Underline */}
              <span className="absolute -bottom-1 left-0 h-[5px] w-[170px] rounded-full bg-[#f5bd24]" />
            </h2>
          </motion.div>

          {/* FAQ LIST */}
          <div className="mt-12 space-y-7">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="overflow-hidden rounded-[22px] border border-white/60 bg-white/80 shadow-sm backdrop-blur-sm"
                >
                  {/* Question */}
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-7 py-7 text-left transition hover:bg-white md:px-8"
                  >
                    <span className="text-xl font-semibold tracking-wide text-[#26354a] md:text-2xl">
                      {faq.question}
                    </span>

                    {/* Plus / Minus Icon */}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white transition duration-300 ${
                        isOpen
                          ? "bg-[#0f514c]"
                          : "bg-[#174d4a]"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-7 md:px-8">
                          <p className="max-w-2xl text-base leading-7 text-[#667085]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT IMAGE SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="relative min-h-[550px] lg:min-h-[720px]"
        >
          {/* Main Image */}
          <img
            src="/industry (3).webp"
            alt="Megha Systems Toilet Cubicle Solutions"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-[#0f514c]/10" />

          {/* Floating Image */}
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            animate={{
              y: [0, -10, 0],
            }}
            className="absolute bottom-5 left-5 h-[240px] w-[240px] overflow-hidden rounded-[28px] border-[8px] border-white shadow-2xl md:bottom-8 md:left-8 md:h-[290px] md:w-[290px]"
          >
            <img
              src="/pvc resin.webp"
              alt="Premium Partition Solutions"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="absolute right-5 top-8 rounded-2xl border border-white/30 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md md:right-8"
          >
            <p className="text-3xl font-bold text-[#0f514c]">
              19+
            </p>

            <p className="mt-1 text-sm font-medium text-[#667085]">
              Years Experience
            </p>
          </motion.div>

          {/* Decorative Dots */}
          <div className="absolute bottom-6 right-6 grid grid-cols-5 gap-3 md:bottom-8 md:right-8">
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={index}
                className="h-2.5 w-2.5 rounded-full bg-[#0f514c]"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
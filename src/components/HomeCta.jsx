"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function HomeCta() {
  return (
    
            <section className="relative border-b border-white/[0.07] bg-black">
    
              <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-24 xl:px-16">
    
                <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
    
                  {/* LEFT */}
    
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                  >
    
                    <div className="mb-6 flex items-center gap-4">
    
                      <span className="h-px w-10 bg-[#D4A017]" />
    
                      <span
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.3em]
                          text-[#D4A017]
                        "
                      >
                        Resol Industries Ltd.
                      </span>
    
                    </div>
    
    
                    <h2
                      className="
                        max-w-[950px]
                        font-(--font-outfit)
                        text-[clamp(2.8rem,6vw,6.5rem)]
                        font-semibold
                        leading-[0.9]
                        tracking-[-0.055em]
                        text-white
                        text-[55px]
                      "
                    >
                      Reliable
                      <span className="text-[#D4A017]"> materials.</span>
                      <br />
                      Stronger
                      <span className="text-white/35"> industries.</span>
                    </h2>
    
                  </motion.div>
    
    
                  {/* RIGHT */}
    
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15,
                    }}
                    className="lg:pb-2"
                  >
    
                    <Link
                      href="/contact-us"
                      className="
                        group
                        inline-flex
                        items-center
                        gap-5
                        border
                        border-[#D4A017]/40
                        px-6
                        py-4
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-white
                        transition-all
                        duration-300
                        hover:bg-[#D4A017]
                        hover:text-[#111111]
                      "
                    >
    
                      <span>
                        Start a Conversation
                      </span>
    
                      <FaArrowRight
                        size={13}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
    
                    </Link>
    
                  </motion.div>
    
                </div>
    
              </div>
    
            </section>
  );
}
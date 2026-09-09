"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhone, FaArrowUp } from "react-icons/fa6";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =====================================================
          FLOATING WHATSAPP
      ====================================================== */}

      <motion.a
        href="https://wa.me/919810929486"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 200,
        }}
        className="
          fixed
          bottom-36
          right-5
          z-[999]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_8px_30px_rgba(37,211,102,0.3)]
          transition-all
          duration-300
          hover:scale-110
          md:right-7
        "
      >
        <FaWhatsapp size={30} />
      </motion.a>


      {/* =====================================================
          FLOATING CALL
      ====================================================== */}

      <motion.a
        href="tel:+919810929486"
        aria-label="Call us"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          delay: 0.7,
          type: "spring",
          stiffness: 200,
        }}
        className="
          fixed
          bottom-20
          right-5
          z-[999]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#ec190a]
          text-white
          shadow-[0_8px_30px_rgba(212,160,23,0.3)]
          transition-all
          duration-300
          hover:scale-110
          md:right-7
        "
      >
        <FaPhone size={23} />
      </motion.a>


      {/* =====================================================
          BACK TO TOP
      ====================================================== */}

      <motion.button
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: showTop ? 1 : 0,
          scale: showTop ? 1 : 0.7,
        }}
        transition={{
          duration: 0.25,
        }}
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`
          fixed
          bottom-4
          right-5
          z-[999]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-gray-200
          bg-white
          text-gray-700
          shadow-lg
          transition-all
          duration-300
          hover:bg-[#D4A017]
          hover:text-black
          hover:border-[#D4A017]
          md:right-7

          ${
            showTop
              ? "pointer-events-auto"
              : "pointer-events-none"
          }
        `}
      >
        <FaArrowUp size={15} />
      </motion.button>
    </>
  );
}
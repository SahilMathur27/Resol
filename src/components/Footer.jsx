"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaArrowUp,
} from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  /* ================= BACK TO TOP ================= */

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
          FOOTER
      ====================================================== */}

      <footer className="relative overflow-hidden bg-[#010205] text-white">

        {/* ================= BACKGROUND DECORATION ================= */}

        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-white/[0.035]" />

        <div className="pointer-events-none absolute -right-16 top-36 h-64 w-64 rounded-full border border-white/[0.035]" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full border border-[#D4A017]/[0.04]" />

        {/* ================= MAIN FOOTER ================= */}

        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-16">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.9fr_1fr] lg:gap-14">

            {/* =================================================
                COMPANY
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              {/* LOGO */}

              <Link
                href="/"
                className="mb-6 inline-block"
              >
                <img
                  src="/New-Project-6-e1775111050628.webp"
                  alt="Resol"
                  className="w-[150px] object-contain"
                />
              </Link>

              {/* DESCRIPTION */}

              <p className="max-w-sm text-sm leading-7 text-gray-400">
                Your trusted partner in polymers, resins, pet resin, and more.
                Quality products for your industrial needs.
              </p>

              {/* SOCIAL ICONS */}

              <div className="mt-7 flex items-center gap-3">

                {/* Facebook */}

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017] hover:bg-[#D4A017] hover:text-black"
                >
                  <FaFacebookF size={14} />
                </a>

                {/* X */}

                <a
                  href="#"
                  aria-label="X"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017] hover:bg-[#D4A017] hover:text-black"
                >
                  <FaXTwitter size={14} />
                </a>

                {/* Instagram */}

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017] hover:bg-[#D4A017] hover:text-black"
                >
                  <FaInstagram size={15} />
                </a>

                {/* YouTube */}

                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017] hover:bg-[#D4A017] hover:text-black"
                >
                  <FaYoutube size={15} />
                </a>

              </div>

            </motion.div>

            {/* =================================================
                CONTACT US INFO
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
            >

              {/* HEADING */}

              <h3 className="mb-4 text-lg font-bold text-white">
                Contact Us Info
              </h3>

              {/* HEADING LINE */}

              <div className="mb-7 h-[2px] w-full bg-white/10">
                <div className="h-[2px] w-36 bg-[#D4A017]" />
              </div>

              {/* ================= LOCATIONS ================= */}

              <div className="space-y-5">

                {/* REGISTERED OFFICE */}

                <div>

                  <p className="mb-1 text-sm font-semibold text-white">
                    Registered Office (New Delhi):
                  </p>

                  <p className="text-sm leading-6 text-gray-400">
                    Office No. DSM-321, DLF Tower, Shivaji Marg,
                    New Delhi 110015
                  </p>

                </div>

                {/* MAHARASHTRA */}

                <div>

                  <p className="mb-1 text-sm font-semibold text-white">
                    Maharashtra Office:
                  </p>

                  <p className="text-sm leading-6 text-gray-400">
                    Ground Floor, House No. 1859 Gala 39 Building
                    No. A14, Prerna Complex, Anjurphata Road,
                    Val Village, Bhiwandi, Thane, Maharashtra,
                    421302
                  </p>

                </div>

                {/* GUJARAT */}

                <div>

                  <p className="mb-1 text-sm font-semibold text-white">
                    Gujarat Office:
                  </p>

                  <p className="text-sm leading-6 text-gray-400">
                    Phase 5 R.S. No. 258/3, Plot No. 2, Ambaji
                    Warehouse Park, Pragpar Mundra, Port Highway,
                    Jarpra, Kachchh, Gujarat, 370405
                  </p>

                </div>

                {/* CHENNAI */}

                <div>

                  <p className="mb-1 text-sm font-semibold text-white">
                    Chennai Office:
                  </p>

                  <p className="text-sm leading-6 text-gray-400">
                    Office No. 124, DLF Cybercity, Block 10,
                    Mount Poonamallee High Road, Manapakkam,
                    Chennai, Tamil Nadu, 600089
                  </p>

                </div>

              </div>

            </motion.div>

            {/* =================================================
                FOLLOW US / CONTACT
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >

              {/* HEADING */}

              <h3 className="mb-4 text-lg font-bold text-white">
                Follow Us
              </h3>

              {/* HEADING LINE */}

              <div className="mb-7 h-[2px] w-full bg-white/10">
                <div className="h-[2px] w-24 bg-[#D4A017]" />
              </div>

              {/* ================= PHONE ================= */}

              <div className="mb-6">

                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">

                  <FaPhone
                    size={12}
                    className="text-[#D4A017]"
                  />

                  Phone Number :

                </p>

                <div className="ml-5 space-y-1">

                  <a
                    href="tel:+911141417725"
                    className="block text-sm text-gray-400 transition-colors hover:text-[#D4A017]"
                  >
                    +91-11-41417725
                  </a>

                  <a
                    href="tel:+911141417825"
                    className="block text-sm text-gray-400 transition-colors hover:text-[#D4A017]"
                  >
                    +91-11-41417825
                  </a>

                </div>

              </div>

              {/* ================= MOBILE ================= */}

              <div className="mb-6">

                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">

                  <FaPhone
                    size={12}
                    className="text-[#D4A017]"
                  />

                  Mobile Number :

                </p>

                <div className="ml-5 space-y-1">

                  <a
                    href="tel:+919999995255"
                    className="block text-sm text-gray-400 transition-colors hover:text-[#D4A017]"
                  >
                    +91-9999995255
                  </a>

                  <a
                    href="tel:+919999997765"
                    className="block text-sm text-gray-400 transition-colors hover:text-[#D4A017]"
                  >
                    +91-9999997765
                  </a>

                  <a
                    href="tel:+919810929486"
                    className="block text-sm text-gray-400 transition-colors hover:text-[#D4A017]"
                  >
                    +91-9810929486
                  </a>

                </div>

              </div>

              {/* ================= EMAIL ================= */}

              <div className="mb-6">

                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">

                  <FaEnvelope
                    size={12}
                    className="text-[#D4A017]"
                  />

                  Email :

                </p>

                <div className="ml-5">

                  <a
                    href="mailto:info@resolvinyls.com"
                    className="break-all text-sm text-gray-400 transition-colors hover:text-[#D4A017]"
                  >
                    info@resolvinyls.com
                  </a>

                </div>

              </div>

              {/* ================= LOCATION ================= */}

            </motion.div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM FOOTER
        ====================================================== */}

        <div className="border-t border-white/10">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-center md:flex-row md:px-8 md:text-left">

            {/* COPYRIGHT */}

            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Resol. All rights reserved.
            </p>

            {/* DESIGN CREDIT */}

            <p className="text-xs text-gray-500">

              Website Designed By Inquiry Bazaar Pvt. Ltd.

              <Link
                href="https://inquirybazaar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-gray-300 transition-colors hover:text-[#D4A017]"
              >
                B2B Marketplace
              </Link>

            </p>

          </div>

        </div>

      </footer>

      {/* =====================================================
          WHATSAPP BUTTON
      ====================================================== */}

      <a
        href="https://wa.me/919810929486"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 md:right-7"
      >
        <FaWhatsapp size={31} />
      </a>

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
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-4 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white text-gray-600 shadow-lg transition-all duration-300 hover:bg-[#D4A017] hover:text-black md:right-7 ${
          showTop
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
      >
        <FaArrowUp size={15} />
      </motion.button>
    </>
  );
}
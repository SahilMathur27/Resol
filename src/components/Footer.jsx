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
  FaArrowRight,
} from "react-icons/fa6";
import { useEffect, useState } from "react";

/* ============================================================
   OFFICE DATA
============================================================ */

const offices = [
  {
    id: "01",
    title: "New Delhi",
    type: "Registered Office",
    text: "Office No. DSM-321, DLF Tower, Shivaji Marg, New Delhi 110015",
  },
  {
    id: "02",
    title: "Maharashtra",
    type: "Regional Office",
    text: "Ground Floor, House No. 1859 Gala 39 Building No. A14, Prerna Complex, Anjurphata Road, Val Village, Bhiwandi, Thane, Maharashtra, 421302",
  },
  {
    id: "03",
    title: "Gujarat",
    type: "Regional Office",
    text: "Phase 5 R.S. No. 258/3, Plot No. 2, Ambaji Warehouse Park, Pragpar Mundra, Port Highway, Jarpra, Kachchh, Gujarat, 370405",
  },
  {
    id: "04",
    title: "Chennai",
    type: "Regional Office",
    text: "Office No. 124, DLF Cybercity, Block 10, Mount Poonamallee High Road, Manapakkam, Chennai, Tamil Nadu, 600089",
  },
];


/* ============================================================
   FOOTER
============================================================ */

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


  /* ================= SCROLL TO TOP ================= */

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

      <footer className="relative overflow-hidden bg-[#080705] text-white">


        {/* =====================================================
            BACKGROUND DECORATIONS
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0">

          {/* GOLD GLOW LEFT */}

          <div
            className="
              absolute
              -left-40
              top-20
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#D4A017]/[0.035]
              blur-[130px]
            "
          />


          {/* GOLD GLOW RIGHT */}

          <div
            className="
              absolute
              -right-40
              bottom-[-150px]
              h-[550px]
              w-[550px]
              rounded-full
              bg-[#D4A017]/[0.04]
              blur-[140px]
            "
          />


          {/* CIRCLE */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[550px]
              w-[550px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-[#D4A017]/[0.025]
            "
          />


          {/* SMALL CIRCLE */}

          <div
            className="
              absolute
              right-20
              top-20
              h-40
              w-40
              rounded-full
              border
              border-white/[0.025]
            "
          />

        </div>


        {/* =====================================================
            TOP CTA
        ====================================================== */}

        <section className="relative border-y border-[#D4A017]/20">

          <div className="mx-auto max-w-7xl px-5 py-5 md:px-8 lg:py-6">

            <div
              className="
                flex
                flex-col
                gap-6
                md:flex-row
                md:items-center
                md:justify-between
              "
            >

              {/* TEXT */}

              <div>

                <p
                  className="
                    mb-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#D4A017]
                  "
                >
                  Industrial Material Solutions
                </p>

                <h2
                  className="
                    text-2xl
                    font-semibold
                    leading-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  Need reliable industrial materials?
                </h2>

              </div>


              {/* BUTTON */}

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#D4A017]
                  bg-[#D4A017]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-transparent
                  hover:text-[#D4A017]
                "
              >

                Get In Touch

                <FaArrowRight
                  size={12}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-20">


          {/* =================================================
              BRAND SECTION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              mb-14
              flex
              flex-col
              gap-6
              border-b
              border-white/10
              pb-8
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >

            {/* BRAND */}

            <div>

              <Link
                href="/"
                className="inline-block"
              >

                <img
                  src="/footerlogo.webp"
                  alt="Resol Industries Ltd."
                  className="
                    w-[130px]
                    object-contain
                  "
                />

              </Link>


              <p
                className="
                  mt-3
                  max-w-xl
                  text-base
                  leading-5
                  text-gray-500
                "
              >
                Your trusted partner for polymers, resins, PET resin and
                industrial raw materials. We focus on dependable sourcing,
                consistent quality and reliable supply solutions.
              </p>

            </div>


            {/* SOCIAL */}

            <div>

              <p
                className="
                  mb-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-gray-500
                "
              >
                Connect With Us
              </p>


              <div className="flex gap-2.5">

                <SocialIcon
                  href="#"
                  label="Facebook"
                  icon={<FaFacebookF size={14} />}
                />

                <SocialIcon
                  href="#"
                  label="Instagram"
                  icon={<FaInstagram size={15} />}
                />

                <SocialIcon
                  href="#"
                  label="YouTube"
                  icon={<FaYoutube size={15} />}
                />

                <SocialIcon
                  href="#"
                  label="X"
                  icon={<FaXTwitter size={14} />}
                />

              </div>

            </div>

          </motion.div>


          {/* =================================================
              CONTENT GRID
          ================================================= */}

          <div
            className="
              grid
              gap-14
              lg:grid-cols-[1.45fr_0.8fr]
              lg:gap-20
            "
          >


            {/* =================================================
                OFFICE LOCATIONS
            ================================================= */}

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
              }}
              transition={{
                duration: 0.6,
              }}
            >

              {/* HEADING */}

              <div
                className="
                  mb-7
                  flex
                  items-center
                  justify-between
                "
              >

                <div>

                  <p
                    className="
                      mb-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#D4A017]
                    "
                  >
                    Our Presence
                  </p>

                  <h3
                    className="
                      text-2xl
                      font-semibold
                      text-white
                    "
                  >
                    Office Locations
                  </h3>

                </div>


                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D4A017]/20
                    bg-[#D4A017]/[0.05]
                  "
                >

                  <FaLocationDot
                    size={18}
                    className="text-[#D4A017]"
                  />

                </div>

              </div>


              {/* LOCATION CARDS */}

              <div
                className="
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >

                {offices.map((office, index) => (

                  <motion.div
                    key={office.id}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      p-5
                      transition-all
                      duration-300
                      hover:border-[#D4A017]/40
                      hover:bg-[#D4A017]/[0.045]
                    "
                  >

                    {/* NUMBER */}

                    <div
                      className="
                        absolute
                        right-4
                        top-2
                        text-4xl
                        font-bold
                        text-white/[0.035]
                      "
                    >
                      {office.id}
                    </div>


                    {/* TITLE */}

                    <div
                      className="
                        relative
                        mb-3
                        flex
                        items-center
                        gap-2
                      "
                    >

                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#D4A017]
                        "
                      />

                      <h4
                        className="
                          text-sm
                          font-bold
                          uppercase
                          tracking-wider
                          text-white
                        "
                      >
                        {office.title}
                      </h4>

                    </div>


                    {/* OFFICE TYPE */}

                    <p
                      className="
                        mb-2
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-[#D4A017]/70
                      "
                    >
                      {office.type}
                    </p>


                    {/* ADDRESS */}

                    <p
                      className="
                        text-sm
                        leading-6
                        text-gray-500
                        transition-colors
                        duration-300
                        group-hover:text-gray-400
                      "
                    >
                      {office.text}
                    </p>

                  </motion.div>

                ))}

              </div>

            </motion.div>


            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

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
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
            >

              <p
                className="
                  mb-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#D4A017]
                "
              >
                Let's Talk
              </p>


              <h3
                className="
                  mb-8
                  text-2xl
                  font-semibold
                  text-white
                "
              >
                Contact Information
              </h3>


              {/* PHONE */}

              <ContactBlock
                icon={<FaPhone size={14} />}
                title="Phone"
              >

                <a
                  href="tel:+911141417725"
                  className="
                    block
                    transition-colors
                    hover:text-[#D4A017]
                  "
                >
                  +91-11-41417725
                </a>

                <a
                  href="tel:+911141417825"
                  className="
                    block
                    transition-colors
                    hover:text-[#D4A017]
                  "
                >
                  +91-11-41417825
                </a>

              </ContactBlock>


              {/* MOBILE */}

              <ContactBlock
                icon={<FaPhone size={14} />}
                title="Mobile"
              >

                <a
                  href="tel:+919999995255"
                  className="
                    block
                    transition-colors
                    hover:text-[#D4A017]
                  "
                >
                  +91-9999995255
                </a>

                <a
                  href="tel:+919999997765"
                  className="
                    block
                    transition-colors
                    hover:text-[#D4A017]
                  "
                >
                  +91-9999997765
                </a>

                <a
                  href="tel:+919810929486"
                  className="
                    block
                    transition-colors
                    hover:text-[#D4A017]
                  "
                >
                  +91-9810929486
                </a>

              </ContactBlock>


              {/* EMAIL */}

              <ContactBlock
                icon={<FaEnvelope size={14} />}
                title="Email"
              >

                <a
                  href="mailto:info@resolvinyls.com"
                  className="
                    break-all
                    transition-colors
                    hover:text-[#D4A017]
                  "
                >
                  info@resolvinyls.com
                </a>

              </ContactBlock>


              {/* WHATSAPP CARD */}

              <a
                href="https://wa.me/919810929486"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-7
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-[#25D366]/20
                  bg-[#25D366]/[0.04]
                  px-5
                  py-4
                  transition-all
                  duration-300
                  hover:border-[#25D366]/50
                  hover:bg-[#25D366]/10
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#25D366]
                      text-white
                    "
                  >

                    <FaWhatsapp size={20} />

                  </div>


                  <div>

                    <p className="text-xs text-gray-500">
                      Quick Inquiry
                    </p>

                    <p className="text-sm font-semibold text-white">
                      Chat on WhatsApp
                    </p>

                  </div>

                </div>


                <FaArrowRight
                  size={13}
                  className="
                    text-gray-500
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#25D366]
                  "
                />

              </a>

            </motion.div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className="
            relative
            border-t
            border-white/[0.08]
          "
        >

          <div
            className="
              mx-auto
              flex
              max-w-7xl
              flex-col
              gap-4
              px-5
              py-6
              text-center
              md:flex-row
              md:items-center
              md:justify-between
              md:px-8
              md:text-left
            "
          >

            {/* COPYRIGHT */}

            <p className="text-xs text-gray-600">

              © {new Date().getFullYear()} Resol Industries Ltd.
              All rights reserved.

            </p>


            {/* LINKS */}

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-4
                text-xs
                text-gray-600
              "
            >

              <Link
                href="/privacy-policy"
                className="
                  transition-colors
                  hover:text-[#D4A017]
                "
              >
                Privacy Policy
              </Link>


              <span className="h-3 w-px bg-white/10" />


              <Link
                href="/terms-and-conditions"
                className="
                  transition-colors
                  hover:text-[#D4A017]
                "
              >
                Terms & Conditions
              </Link>


              <span className="h-3 w-px bg-white/10" />


              <p>

                Website Designed By{" "}

                <Link
                  href="https://inquirybazaar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-400
                    transition-colors
                    hover:text-[#D4A017]
                  "
                >
                  Inquiry Bazaar Pvt. Ltd.
                </Link>

              </p>

            </div>

          </div>

        </div>

      </footer>


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
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 200,
        }}
        className="
          fixed
          bottom-20
          right-5
          z-50
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

        <FaWhatsapp size={31} />

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
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`
          fixed
          bottom-4
          right-5
          z-50
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white
          text-gray-600
          shadow-lg
          transition-all
          duration-300
          hover:bg-[#D4A017]
          hover:text-black
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


/* ============================================================
   SOCIAL ICON COMPONENT
============================================================ */

function SocialIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.025]
        text-gray-500
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#D4A017]
        hover:bg-[#D4A017]
        hover:text-black
      "
    >
      {icon}
    </a>
  );
}


/* ============================================================
   CONTACT BLOCK COMPONENT
============================================================ */

function ContactBlock({
  icon,
  title,
  children,
}) {
  return (
    <div className="mb-6 flex gap-4">

      {/* ICON */}

      <div
        className="
          flex
          h-9
          w-9
          flex-shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-[#D4A017]/20
          bg-[#D4A017]/[0.06]
          text-[#D4A017]
        "
      >
        {icon}
      </div>


      {/* CONTENT */}

      <div>

        <p
          className="
            mb-1
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-gray-500
          "
        >
          {title}
        </p>

        <div
          className="
            space-y-1
            text-sm
            leading-6
            text-gray-400
          "
        >
          {children}
        </div>

      </div>

    </div>
  );
}
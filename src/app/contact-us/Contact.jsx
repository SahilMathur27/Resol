"use client";

import Popup from "@/components/Popup";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaLocationDot,
  FaArrowRight,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa6";

/* ============================================================
   OFFICE DATA
============================================================ */

const offices = [
  {
    id: "01",
    title: "Delhi Office",
    type: "Registered Office",
    address:
      "Plot No. 106/47, Khata No. 89, Khasra No. 106/23, Village Khera Kalan, Delhi-110082",
    email: "info@resolvinyls.com",
    phone: "+91-11-41417825",
    map:
      "https://www.google.com/maps?q=Plot+No.+106/47,+Khata+No.+89,+Khasra+No.+106/23,+Village+Khera+Kalan,+Delhi+110082&output=embed",
  },

  {
    id: "02",
    title: "Gujarat Office",
    type: "Regional Office",
    address:
      "Phase 5 R.S. No. 258/3, Plot No. 2, Ambaji Warehouse Park, Pragpar Mundra, Port Highway, Jarpra, Kachchh, Gujarat - 370405",
    email: "info@resolvinyls.com",
    phone: "+91-9999995255",
    map:
      "https://www.google.com/maps?q=Phase+5+R.S.+No.+258/3,+Plot+No.+2,+Ambaji+Warehouse+Park,+Pragpar+Mundra,+Kachchh,+Gujarat+370405&output=embed",
  },

  {
    id: "03",
    title: "Maharashtra Office",
    type: "Regional Office",
    address:
      "Ground Floor, House No. 1859 Gala 39 Building No. A14, Prerna Complex, Anjurphata Road, Val Village, Bhiwandi, Thane, Maharashtra - 421302",
    email: "info@resolvinyls.com",
    phone: "+91-9999997765",
    map:
      "https://www.google.com/maps?q=Ground+Floor,+House+No.+1859+Gala+39+Building+No.+A14,+Prerna+Complex,+Anjurphata+Road,+Val+Village,+Bhiwandi,+Thane,+Maharashtra+421302&output=embed",
  },

  {
    id: "04",
    title: "Chennai Office",
    type: "Regional Office",
    address:
      "Office No. 124, DLF Cybercity, Block 10, Mount Poonamallee High Road, Manapakkam, Chennai, Tamil Nadu - 600089",
    email: "info@resolvinyls.com",
    phone: "+91-9999997765",
    map:
      "https://www.google.com/maps?q=Office+No.+124,+DLF+Cybercity,+Block+10,+Mount+Poonamallee+High+Road,+Manapakkam,+Chennai,+Tamil+Nadu+600089&output=embed",
  },

  {
    id: "05",
    title: "Haryana Office",
    type: "Regional Office",
    address:
      "Plot No. 20, Street No. 4, Sector 7A, Jhajjar Farrukhnagar Road, Reliance Model Economic Township, Yaqbpur, Jhajjar, Haryana - 124103",
    email: "info@resolvinyls.com",
    phone: "+91-9999997765",
    map:
      "https://www.google.com/maps?q=Plot+No.+20,+Street+No.+4,+Sector+7A,+Jhajjar+Farrukhnagar+Road,+Reliance+Model+Economic+Township,+Yaqbpur,+Jhajjar,+Haryana+124103&output=embed",
  },

  {
    id: "06",
    title: "Telangana Office",
    type: "Regional Office",
    address:
      "D No. 8-2-293/82/A/75, Plot No. 75, Road Number 9, Jubilee Hills, Hyderabad, Telangana - 500033",
    email: "info@resolvinyls.com",
    phone: "+91-9999995255",
    map:
      "https://www.google.com/maps?q=D+No.+8-2-293/82/A/75,+Plot+No.+75,+Road+Number+9,+Jubilee+Hills,+Hyderabad,+Telangana+500033&output=embed",
  },
];

/* ============================================================
   PHONE DATA
============================================================ */

const phones = [
  "+91-11-41417725",
  "+91-11-41417825",
];

const mobiles = [
  "+91-9999995255",
  "+91-9999997765",
  "+91-9810929486",
];

/* ============================================================
   MAIN CONTACT PAGE
============================================================ */

export default function ContactUs() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF9F4] text-[#17130B]">

      {/* =====================================================
          GLOBAL DECORATIONS
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <div
          className="
            absolute
            -left-40
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#D4A017]/[0.08]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-40
            top-[700px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#D4A017]/[0.06]
            blur-[130px]
          "
        />

      </div>


      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative z-10 px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

            {/* =================================================
                HERO CONTENT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              {/* SMALL TITLE */}

              <div className="mb-6 flex items-center gap-3">

                <span className="h-px w-10 bg-[#D4A017]" />

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#B8860B]
                  "
                >
                  Get In Touch
                </span>

              </div>


              {/* MAIN HEADING */}

              <h1
                className="
                  max-w-3xl
                  text-4xl
                  font-bold
                  leading-[1.08]
                  tracking-tight
                  text-[#17130B]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
              >
                Let&apos;s Build

                <span className="block text-[#C28E0B]">
                  Something Reliable.
                </span>
              </h1>


              {/* DESCRIPTION */}

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-base
                  leading-7
                  text-[#6B665D]
                  md:text-lg
                  md:leading-8
                "
              >
                Have an inquiry about polymers, resins, PET resin or
                industrial raw materials? Get in touch with our team
                for dependable sourcing and reliable supply solutions.
              </p>


              {/* BUTTONS */}

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="#contact-form"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#D4A017]
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_10px_30px_rgba(212,160,23,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#B8860B]
                  "
                >
                  Send an Inquiry

                  <FaArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </a>


                <a
                  href="https://wa.me/919810929486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#DED7C8]
                    bg-white
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-[#302B21]
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#25D366]/40
                    hover:text-[#218B47]
                  "
                >

                  <FaWhatsapp
                    size={18}
                    className="text-[#25D366]"
                  />

                  WhatsApp Us

                </a>

              </div>

            </motion.div>


            {/* =================================================
                CONTACT CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#E5DDCC]
                bg-white
                p-6
                shadow-[0_20px_70px_rgba(48,40,20,0.08)]
                md:p-8
              "
            >

              {/* CARD GOLD LINE */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-full
                  bg-[#D4A017]
                "
              />


              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  h-52
                  w-52
                  rounded-full
                  bg-[#D4A017]/[0.08]
                  blur-3xl
                "
              />


              <div className="relative">

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#B8860B]
                  "
                >
                  Direct Contact
                </p>


                <h2
                  className="
                    mt-3
                    text-2xl
                    font-bold
                    text-[#17130B]
                    md:text-3xl
                  "
                >
                  We&apos;re here to help.
                </h2>


                <div className="mt-8 space-y-7">

                  {/* PHONE */}

                  <ContactItem
                    icon={<FaPhone size={15} />}
                    title="Phone"
                  >

                    {phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                        className="
                          block
                          text-[#555047]
                          transition-colors
                          hover:text-[#B8860B]
                        "
                      >
                        {phone}
                      </a>
                    ))}

                  </ContactItem>


                  {/* MOBILE */}

                  <ContactItem
                    icon={<FaPhone size={15} />}
                    title="Mobile"
                  >

                    {mobiles.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                        className="
                          block
                          text-[#555047]
                          transition-colors
                          hover:text-[#B8860B]
                        "
                      >
                        {phone}
                      </a>
                    ))}

                  </ContactItem>


                  {/* EMAIL */}

                  <ContactItem
                    icon={<FaEnvelope size={15} />}
                    title="Email"
                  >

                    <a
                      href="mailto:info@resolvinyls.com"
                      className="
                        break-all
                        text-[#555047]
                        transition-colors
                        hover:text-[#B8860B]
                      "
                    >
                      info@resolvinyls.com
                    </a>

                  </ContactItem>


                  {/* WHATSAPP */}

                  <a
                    href="https://wa.me/919810929486"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-[#25D366]/20
                      bg-[#25D366]/[0.05]
                      p-4
                      transition-all
                      duration-300
                      hover:border-[#25D366]/40
                      hover:bg-[#25D366]/[0.09]
                    "
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-full
                          bg-[#25D366]
                          text-white
                        "
                      >
                        <FaWhatsapp size={21} />
                      </div>


                      <div>

                        <p className="text-xs text-[#8A8479]">
                          Quick Inquiry
                        </p>

                        <p className="mt-0.5 text-sm font-bold text-[#27231B]">
                          Chat on WhatsApp
                        </p>

                      </div>

                    </div>


                    <FaArrowRight
                      size={13}
                      className="
                        text-[#999083]
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-[#25D366]
                      "
                    />

                  </a>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FORM SECTION
      ====================================================== */}

      <section
        id="contact-form"
        className="
          relative
          z-10
          border-y
          border-[#E9E2D4]
          bg-white
          px-5
          py-13
          md:px-8
          md:py-15
        "
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            {/* =================================================
                LEFT SIDE
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
            >

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-[#D4A017]" />

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#B8860B]
                  "
                >
                  Send Message
                </span>

              </div>


              <h2
                className="
                  mt-5
                  text-3xl
                  font-bold
                  leading-tight
                  text-[#17130B]
                  md:text-5xl
                "
              >
                Tell us what

                <span className="block text-[#C28E0B]">
                  you need.
                </span>

              </h2>


              <p
                className="
                  mt-5
                  max-w-md
                  text-base
                  leading-7
                  text-[#716B61]
                "
              >
                Share your requirements with our team and we will
                get back to you with the right information and
                supply solution.
              </p>


              {/* INFO ITEMS */}

              <div className="mt-10 space-y-7">

                <InfoBox
                  icon={<FaPaperPlane size={15} />}
                  title="Quick Response"
                  text="Our team is available to respond to your business inquiries."
                />

                <InfoBox
                  icon={<FaLocationDot size={15} />}
                  title="Multiple Locations"
                  text="Connect with our offices across Delhi, Maharashtra, Gujarat and Chennai."
                />

                <InfoBox
                  icon={<FaClock size={15} />}
                  title="Business Support"
                  text="Get assistance regarding products, sourcing and supply requirements."
                />

              </div>

            </motion.div>


            {/* =================================================
                FORM
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="
                rounded-[10px]
                border
                border-[#E5DDCC]
                bg-[#FAF9F4]
                p-6
                shadow-[0_20px_60px_rgba(48,40,20,0.06)]
                md:p-6
              "
            >

              <form className="space-y-5">

                {/* NAME + Email */}

                <div className="grid gap-5 md:grid-cols-2">

                  <FormField
                    label="Your Name"
                    type="text"
                    placeholder="your name"
                  />

                   <FormField
                    label="Email ID"
                    type="email"
                    placeholder="Enter email "
                  />

                  
                </div>


                {/* Place + PHONE */}

                <div className="grid gap-5 md:grid-cols-2">

                   <FormField
                    label="Mobile Number"
                    type="tel"
                    placeholder="Enter Mobile"
                  />

                  <FormField
                    label="Place"
                    type="text"
                    placeholder="Enter Place"
                  />


                </div>


                {/* MESSAGE */}

                <div>

                  <label
                    className="
                      mb-2
                      block
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#6D675D]
                    "
                  >
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your requirement..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-[#DED7C8]
                      bg-white
                      px-4
                      py-3.5
                      text-sm
                      text-[#252119]
                      outline-none
                      transition-all
                      placeholder:text-[#AAA398]
                      focus:border-[#D4A017]
                      focus:ring-4
                      focus:ring-[#D4A017]/10
                    "
                  />

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[#D4A017]
                    px-6
                    py-4
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_10px_25px_rgba(212,160,23,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#B8860B]
                  "
                >

                  Send Inquiry

                  <FaArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </button>

              </form>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OFFICE LOCATIONS
      ====================================================== */}

      {/* =====================================================
    OFFICE LOCATIONS
===================================================== */}

<section
  className="
    relative
    z-10
    bg-[#FAF9F4]
    px-5
    py-13
    md:px-8
    md:py-15
  "
>
  <div className="mx-auto max-w-7xl">

    {/* SECTION HEADING */}

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
      className="mb-12"
    >

      <div className="flex items-center gap-3">

        <span className="h-px w-8 bg-[#D4A017]" />

        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.25em]
            text-[#B8860B]
          "
        >
          Our Presence
        </span>

      </div>


      <div
        className="
          mt-5
          flex
          flex-col
          justify-between
          gap-4
          md:flex-row
          md:items-end
        "
      >

        <h2
          className="
            text-3xl
            font-bold
            text-[#17130B]
            md:text-5xl
          "
        >
          Our Office Locations
        </h2>

        <p
          className="
            max-w-lg
            text-sm
            leading-6
            text-[#746E64]
          "
        >
          Connect with our offices across India for business,
          sourcing and supply requirements.
        </p>

      </div>

    </motion.div>


    {/* =================================================
        OFFICE CARDS
    ================================================= */}

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

      {offices.map((office, index) => (

        <motion.div
          key={office.id}
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
            amount: 0.12,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.06,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[#E4DCCB]
            bg-white
            shadow-[0_8px_30px_rgba(50,40,20,0.05)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#D4A017]/50
            hover:shadow-[0_18px_45px_rgba(50,40,20,0.09)]
          "
        >

          {/* GOLD TOP LINE */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-1
              bg-[#D4A017]
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />


          {/* NUMBER */}

          <span
            className="
              absolute
              right-5
              top-1
              text-7xl
              font-bold
              text-[#17130B]/[0.035]
              transition-colors
              duration-300
              group-hover:text-[#D4A017]/[0.09]
            "
          >
            {office.id}
          </span>


          <div className="relative p-6 md:p-7">

            {/* =================================================
                TITLE
            ================================================= */}

            <div className="mb-5 flex items-center gap-3">

              <div
                className="
                  flex
                  h-11
                  w-11
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#D4A017]/25
                  bg-[#D4A017]/[0.07]
                  text-[#B8860B]
                  transition-all
                  duration-300
                  group-hover:bg-[#D4A017]
                  group-hover:text-white
                "
              >
                <FaLocationDot size={16} />
              </div>


              <div>

                <h3
                  className="
                    text-lg
                    font-bold
                    text-[#211D15]
                  "
                >
                  {office.title}
                </h3>

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#B8860B]
                  "
                >
                  {office.type}
                </p>

              </div>

            </div>


            {/* =================================================
                ADDRESS
            ================================================= */}

            <div className="flex gap-3">

              <FaLocationDot
                size={15}
                className="
                  mt-1
                  flex-shrink-0
                  text-[#D4A017]
                "
              />

              <p
                className="
                  text-sm
                  leading-6
                  text-[#706A60]
                "
              >
                {office.address}
              </p>

            </div>


            {/* =================================================
                EMAIL
            ================================================= */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-3
                border-t
                border-[#EEE8DC]
                pt-4
              "
            >

              <div
                className="
                  flex
                  h-8
                  w-8
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#D4A017]/[0.08]
                  text-[#B8860B]
                "
              >
                <FaEnvelope size={13} />
              </div>


              <a
                href={`mailto:${office.email}`}
                className="
                  text-sm
                  text-[#555047]
                  transition-colors
                  hover:text-[#B8860B]
                "
              >
                {office.email}
              </a>

            </div>


            {/* =================================================
                PHONE
            ================================================= */}

            <div className="mt-3 flex items-center gap-3">

              <div
                className="
                  flex
                  h-8
                  w-8
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#D4A017]/[0.08]
                  text-[#B8860B]
                "
              >
                <FaPhone size={13} />
              </div>


              <a
                href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                className="
                  text-sm
                  text-[#555047]
                  transition-colors
                  hover:text-[#B8860B]
                "
              >
                {office.phone}
              </a>

            </div>


            {/* =================================================
                MAP
            ================================================= */}

            <div
              className="
                mt-5
                overflow-hidden
                rounded-xl
                border
                border-[#E5DDCC]
                bg-[#F5F2EA]
              "
            >

              <iframe
                src={office.map}
                title={`${office.title} Google Map`}
                width="100%"
                height="190"
                loading="lazy"
                className="
                  block
                  w-full
                  border-0
                  grayscale-[20%]
                  transition-all
                  duration-500
                  group-hover:grayscale-0
                "
              />

            </div>


            {/* MAP LINK */}

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                office.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group/map
                mt-3
                flex
                items-center
                justify-between
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-[#B8860B]
              "
            >

              <span>
                Open in Google Maps
              </span>

              <FaArrowRight
                size={11}
                className="
                  transition-transform
                  duration-300
                  group-hover/map:translate-x-1
                "
              />

            </a>

          </div>

        </motion.div>

      ))}

    </div>


  </div>
</section>

    </main>
  );
}


/* ============================================================
   CONTACT ITEM
============================================================ */

function ContactItem({ icon, title, children }) {
  return (
    <div className="flex gap-4">

      <div
        className="
          flex
          h-10
          w-10
          flex-shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-[#D4A017]/25
          bg-[#D4A017]/[0.07]
          text-[#B8860B]
        "
      >
        {icon}
      </div>


      <div>

        <p
          className="
            mb-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#8A847A]
          "
        >
          {title}
        </p>

        <div
          className="
            space-y-0.5
            text-sm
            leading-6
          "
        >
          {children}
        </div>

      </div>

    </div>
  );
}


/* ============================================================
   INFO BOX
============================================================ */

function InfoBox({ icon, title, text }) {
  return (
    <div className="flex gap-4">

      <div
        className="
          flex
          h-10
          w-10
          flex-shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-[#D4A017]/25
          bg-[#D4A017]/[0.07]
          text-[#B8860B]
        "
      >
        {icon}
      </div>


      <div>

        <h3
          className="
            text-sm
            font-bold
            text-[#252119]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1
            text-sm
            leading-6
            text-[#777066]
          "
        >
          {text}
        </p>

      </div>

    </div>
  );
}


/* ============================================================
   FORM FIELD
============================================================ */

function FormField({
  label,
  type,
  placeholder,
}) {
  return (
    <div>

      <label
        className="
          mb-2
          block
          text-xs
          font-bold
          uppercase
          tracking-wider
          text-[#6D675D]
        "
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-[#DED7C8]
          bg-white
          px-4
          py-3.5
          text-sm
          text-[#252119]
          outline-none
          transition-all
          placeholder:text-[#AAA398]
          focus:border-[#D4A017]
          focus:ring-4
          focus:ring-[#D4A017]/10
        "
      />

    </div>
    
  );
 
}


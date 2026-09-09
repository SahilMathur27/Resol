"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaXmark,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaMessage,
  FaPaperPlane,
  FaArrowRight,
  FaShieldHalved,
  FaGlobe,
  FaHandshake,
  FaCircleCheck,
} from "react-icons/fa6";

export default function Popup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    place: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Inquiry Submitted:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();

      setFormData({
        name: "",
        email: "",
        mobile: "",
        place: "",
        message: "",
      });
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-x-hidden
            bg-black/70
            px-3
            py-5
            backdrop-blur-md
            sm:px-5
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* =====================================================
              MAIN MODAL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              flex
              min-w-0
              max-h-[88vh]
              w-full
              max-w-4xl
              overflow-hidden
              rounded-2xl
              bg-[#FAF9F4]
              shadow-[0_25px_80px_rgba(0,0,0,0.4)]
            "
          >
            {/* =====================================================
                CLOSE BUTTON
            ====================================================== */}

            <button
              onClick={onClose}
              aria-label="Close popup"
              className="
                absolute
                right-3
                top-3
                z-50
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                bg-white
                text-gray-600
                shadow-md
                transition-all
                duration-300
                hover:rotate-90
                hover:border-[#D4A017]
                hover:bg-[#D4A017]
                hover:text-black
                sm:right-4
                sm:top-4
              "
            >
              <FaXmark size={16} />
            </button>

            {/* =====================================================
                LEFT BRAND PANEL
            ====================================================== */}

            <div
              className="
                relative
                hidden
                w-[38%]
                min-w-0
                overflow-hidden
                bg-[#F5F0E4]
                p-7
                pt-18
                lg:block
              "
            >
              {/* DECORATIVE CIRCLE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-56
                  w-56
                  rounded-full
                  border-[28px]
                  border-[#D4A017]/10
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-28
                  -left-20
                  h-60
                  w-60
                  rounded-full
                  bg-[#D4A017]/10
                "
              />

              <div className="relative z-10 flex h-full flex-col">
                {/* LOGO */}

                <img
                  src="/footerlogo.webp"
                  alt="Resol Industries Ltd."
                  className="mb-7 w-[135px] max-w-full object-contain"
                />

                {/* LABEL */}

                <div className="mb-2 flex items-center gap-2">
                  <span className="h-[2px] w-8 shrink-0 bg-[#D4A017]" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#B8860B]
                    "
                  >
                    Let's Work Together
                  </span>
                </div>

                {/* HEADING */}

                <h2
                  className="
                    text-4xl
                    font-bold
                    leading-[1.05]
                    text-[#171511]
                  "
                >
                  Get a
                  <span className="px-2 text-[#B8860B]">
                    Quote
                  </span>
                </h2>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    max-w-[280px]
                    text-sm
                    leading-6
                    text-gray-600
                  "
                >
                  Tell us your requirements and our team
                  will get back to you with the best solution
                  and competitive pricing.
                </p>

                {/* BENEFITS */}

                <div className="mt-auto space-y-4">
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT FORM PANEL
            ====================================================== */}

            <div
              className="
                relative
                min-w-0
                w-full
                overflow-x-hidden
                overflow-y-auto
                overscroll-contain
                bg-white
                p-5
                sm:p-6
                lg:w-[62%]
                lg:p-8
              "
            >
              {/* DECORATIVE CIRCLE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-24
                  h-48
                  w-48
                  rounded-full
                  border-[24px]
                  border-[#D4A017]/[0.06]
                "
              />

              <div className="relative z-10 min-w-0">
                {/* MOBILE BRAND */}

                <div className="mb-5 lg:hidden">
                  <img
                    src="/footerlogo.webp"
                    alt="Resol Industries Ltd."
                    className="w-[125px] max-w-full"
                  />

                  <div className="mt-4 h-[2px] w-8 bg-[#D4A017]" />
                </div>

                {/* TITLE */}

                <p
                  className="
                    mb-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#B8860B]
                  "
                >
                  Quick Inquiry
                </p>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#171511]
                    sm:text-3xl
                  "
                >
                  Fill in Your Details
                </h3>

                <p
                  className="
                    mt-2
                    max-w-lg
                    text-sm
                    leading-5
                    text-gray-500
                  "
                >
                  Share your requirements with us and we'll
                  get back to you as soon as possible.
                </p>

                {/* =================================================
                    SUCCESS MESSAGE
                ================================================= */}

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                      }}
                      className="
                        mt-5
                        rounded-xl
                        border
                        border-green-200
                        bg-green-50
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-green-700
                      "
                    >
                      ✓ Thank you! Your inquiry has been submitted.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* =================================================
                    FORM
                ================================================= */}

                <form
                  onSubmit={handleSubmit}
                  className="mt-6 min-w-0"
                >
                  {/* ROW 1 */}

                  <div className="grid min-w-0 gap-4 md:grid-cols-2">
                    <FormInput
                      label="Your Name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      icon={<FaUser size={13} />}
                      value={formData.name}
                      onChange={handleChange}
                    />

                    <FormInput
                      label="Email ID"
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      icon={<FaEnvelope size={13} />}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* ROW 2 */}

                  <div className="mt-4 grid min-w-0 gap-4 md:grid-cols-2">
                    <FormInput
                      label="Mobile Number"
                      name="mobile"
                      type="tel"
                      placeholder="Enter Mobile"
                      icon={<FaPhone size={13} />}
                      value={formData.mobile}
                      onChange={handleChange}
                    />

                    <FormInput
                      label="Place"
                      name="place"
                      type="text"
                      placeholder="Enter Place"
                      icon={<FaLocationDot size={13} />}
                      value={formData.place}
                      onChange={handleChange}
                    />
                  </div>

                  {/* MESSAGE */}

                  <div className="mt-4 min-w-0">
                    <label
                      className="
                        mb-1.5
                        block
                        text-xs
                        font-bold
                        uppercase
                        tracking-wide
                        text-gray-600
                      "
                    >
                      Message
                    </label>

                    <div className="relative min-w-0">
                      <div
                        className="
                          pointer-events-none
                          absolute
                          left-4
                          top-4
                          text-gray-400
                        "
                      >
                        <FaMessage size={13} />
                      </div>

                      <textarea
                        name="message"
                        rows="3"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirement..."
                        className="
                          block
                          min-w-0
                          w-full
                          max-w-full
                          resize-none
                          rounded-xl
                          border
                          border-[#DDD6C8]
                          bg-[#FFFEFC]
                          px-11
                          py-3.5
                          text-sm
                          text-gray-800
                          outline-none
                          transition-all
                          duration-300
                          placeholder:text-gray-400
                          focus:border-[#D4A017]
                          focus:ring-4
                          focus:ring-[#D4A017]/10
                        "
                      />
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      group
                      mt-5
                      flex
                      w-full
                      max-w-full
                      items-center
                      justify-center
                      gap-2.5
                      rounded-xl
                      bg-[#D4A017]
                      px-5
                      py-3.5
                      text-sm
                      font-bold
                      text-white
                      shadow-[0_10px_25px_rgba(212,160,23,0.22)]
                      transition-all
                      duration-300
                      hover:bg-[#B8860B]
                    "
                  >
                    <FaPaperPlane
                      size={13}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />

                    <span>Send Inquiry</span>

                    <FaArrowRight
                      size={13}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </motion.button>

                  {/* SECURITY */}

                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      justify-center
                      gap-1.5
                      text-[11px]
                      text-gray-400
                    "
                  >

                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ============================================================
   FORM INPUT
============================================================ */

function FormInput({
  label,
  name,
  type,
  placeholder,
  icon,
  value,
  onChange,
}) {
  return (
    <div className="min-w-0">
      <label
        className="
          mb-1.5
          block
          text-xs
          font-bold
          uppercase
          tracking-wide
          text-gray-600
        "
      >
        {label}
      </label>

      <div className="relative min-w-0">
        {/* ICON */}

        <div
          className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
        >
          {icon}
        </div>

        {/* INPUT */}

        <input
          type={type}
          name={name}
          required
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            block
            h-12
            min-w-0
            w-full
            max-w-full
            rounded-xl
            border
            border-[#DDD6C8]
            bg-[#FFFEFC]
            px-11
            text-sm
            text-gray-800
            outline-none
            transition-all
            duration-300
            placeholder:text-gray-400
            focus:border-[#D4A017]
            focus:ring-4
            focus:ring-[#D4A017]/10
          "
        />
      </div>
    </div>
  );
}

/* ============================================================
   BENEFIT
============================================================ */

function Benefit({
  icon,
  title,
  description,
}) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div
        className="
          flex
          h-9
          w-9
          flex-shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#D4A017]
          text-white
          shadow-[0_5px_15px_rgba(212,160,23,0.2)]
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <h4 className="text-xs font-bold text-[#171511]">
          {title}
        </h4>

        <p className="mt-0.5 text-[10px] leading-4 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Products", href: "/products" },
  { name: "Industries", href: "/industries" },
  { name: "Contact Us", href: "/contact-us" },
];

const productLinks = [
  { name: "PVC Resin", href: "/products/pvc-resin" },
  { name: "Calcium Carbonate", href: "/products/calcium-carbonate" },
  { name: "Industrial Materials", href: "/products" },
  { name: "Applications", href: "/industries" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111827] text-white">

      {/* Top CTA */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center lg:px-8">

          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
              Let's Work Together
            </p>

            <h2 className="text-2xl font-semibold md:text-3xl">
              Looking for quality industrial raw materials?
            </h2>
          </div>

          <Link
            href="/contact-us"
            className="group flex items-center gap-4 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#111827] transition-all duration-300 hover:bg-white"
          >
            Get In Touch
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>

        </div>
      </div>

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-32 h-96 w-96 rounded-full border border-white/[0.04]" />
      <div className="pointer-events-none absolute -right-16 top-48 h-64 w-64 rounded-full border border-white/[0.04]" />

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Replace with your Logo */}
            <Link
              href="/"
              className="mb-6 inline-block text-2xl font-bold tracking-wide"
            >
             <img src="/New-Project-6-e1775111050628.webp" alt="" className="w-20" />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Supplying reliable imported PVC Resin, Calcium Carbonate and
              quality industrial raw materials to support manufacturers and
              businesses across India.
            </p>

            {/* Social */}
            <div className="mt-7 flex gap-3">
              {["in", "f", "ig"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-xs font-bold text-gray-400 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-[#111827]"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-amber-500"
                  >
                    <span className="h-px w-0 bg-amber-500 transition-all duration-300 group-hover:w-5" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Our Products
            </h3>

            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-amber-500"
                  >
                    <span className="h-px w-0 bg-amber-500 transition-all duration-300 group-hover:w-5" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Contact Info
            </h3>

            <div className="space-y-5 text-sm">

              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                  Call Us
                </p>
                <a
                  href="tel:#"
                  className="text-gray-300 transition-colors hover:text-amber-500"
                >
                  +91-11-41417725, +91-11-41417825
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                  Email Us
                </p>
                <a
                  href="mailto:info@resolvinyls.com"
                  className="text-gray-300 transition-colors hover:text-amber-500"
                >
                 info@resolvinyls.com

                </a>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                  Our Location
                </p>
                <p className="leading-6 text-gray-400">
                  New Delhi, India
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-6 text-center text-xs text-gray-500 md:flex-row md:text-left lg:px-8">

          <p>
            © {new Date().getFullYear()} Resol Industries. All Rights Reserved.
          </p>

          <div className="flex justify-center gap-6 md:justify-end">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-amber-500"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-conditions"
              className="transition-colors hover:text-amber-500"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
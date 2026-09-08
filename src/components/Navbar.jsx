"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
const [isScrolled, setIsScrolled] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [search, setSearch] = useState("");

useEffect(() => {
const handleScroll = () => {
setIsScrolled(window.scrollY > 40);
};


window.addEventListener("scroll", handleScroll);

return () => {
  window.removeEventListener("scroll", handleScroll);
};


}, []);

const handleSearch = (e) => {
e.preventDefault();


if (search.trim()) {
  window.location.href = `/search?q=${encodeURIComponent(search)}`;
}


};

const closeMenu = () => {
setIsMenuOpen(false);
};

return ( <header className="fixed left-0 top-0 z-[999] w-full">
{/* ================= TOP BAR ================= */}
<div
className={`overflow-hidden bg-[#252b38] text-white transition-all duration-500 ${
          isScrolled
            ? "max-h-0 opacity-0"
            : "max-h-[50px] opacity-100"
        }`}
> <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-2.5 lg:px-10">

      {/* Left Contact */}
      <div className="flex items-center gap-5 text-sm">
        <a
          href="tel:+11-41417825"
          className="flex items-center gap-2 text-gray-200 transition hover:text-[#f4c44e]"
        >
          <span className="text-lg text-[#f4c44e]">⌕</span>
          +91-11-41417725, +91-11-41417825
        </a>

        <span className="hidden h-5 w-px bg-gray-500 sm:block" />

        <a
          href="mailto:info@resolvinyls.com
"
          className="hidden items-center gap-2 text-gray-200 transition hover:text-[#f4c44e] sm:flex"
        >
          <span className="text-lg text-[#f4c44e]">✉</span>
          info@resolvinyls.com


        </a>
      </div>

      {/* Right Side */}
      <div className="hidden items-center gap-4 text-sm lg:flex">

        <span className="h-5 w-px bg-gray-500" />

        <span>Follow On:</span>

        <a href="#" className="hover:text-[#f4c44e]">
          f
        </a>

        <a href="#" className="hover:text-[#f4c44e]">
          𝕏
        </a>

        <a href="#" className="hover:text-[#f4c44e]">
          ◎
        </a>

        <a href="#" className="hover:text-[#f4c44e]">
          in
        </a>
      </div>
    </div>
  </div>

  {/* ================= MAIN NAVBAR ================= */}
  <div
    className={`border-b border-gray-200 bg-white transition-all duration-500 ${
      isScrolled ? "py-1 shadow-lg" : "py-3"
    }`}
  >
    <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-5 lg:px-10">
      
      {/* LOGO */}
      <Link href="/" className="relative block shrink-0">
        <Image
          src="/New-Project-6-e1775111050628.webp"
          alt="Logo"
          width={270}
          height={130}
          priority
          className={`w-auto object-contain transition-all duration-500 ${
            isScrolled ? "h-[42px]" : "h-[58px]"
          }`}
        />
      </Link>

      {/* DESKTOP MENU */}
      <nav className="hidden items-center gap-2 xl:flex">
        <Link
          href="/"
          className="rounded-lg px-4 py-2 text-[16px] font-semibold text-[#26364f] transition hover:bg-gray-100 hover:text-[#0e5a52]"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="rounded-lg px-4 py-2 text-[16px] font-semibold text-[#26364f] transition hover:bg-gray-100 hover:text-[#0e5a52]"
        >
          About Us
        </Link>

        <Link
          href="/products/pvc-resin"
          className="rounded-lg px-4 py-2 text-[16px] font-semibold text-[#26364f] transition hover:bg-gray-100 hover:text-[#0e5a52]"
        >
          Products Page 
        </Link>

        <Link
          href="/projects"
          className="rounded-lg px-4 py-2 text-[16px] font-semibold text-[#26364f] transition hover:bg-gray-100 hover:text-[#0e5a52]"
        >
          Projects
        </Link>

        <Link
          href="/contact"
          className="rounded-lg px-4 py-2 text-[16px] font-semibold text-[#26364f] transition hover:bg-gray-100 hover:text-[#0e5a52]"
        >
          Contact Us
        </Link>
      </nav>

      {/* SEARCH */}
      <form
        onSubmit={handleSearch}
        className="hidden items-center overflow-hidden rounded-xl border border-gray-300 bg-white lg:flex"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="h-[48px] w-[180px] bg-transparent px-4 text-sm text-gray-700 outline-none"
        />

        <button
          type="submit"
          className="flex h-[48px] w-[50px] items-center justify-center text-gray-600 transition hover:text-[#0e5a52]"
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              strokeWidth="1.8"
            />
            <path
              d="M16 16L21 21"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </form>

      {/* CTA */}
      <Link
        href="/contact"
        className="hidden shrink-0 items-center gap-2 rounded-xl bg-[#f6bd35] px-6 py-3 text-sm font-bold text-[#26364f] transition hover:bg-[#e9ae20] lg:flex"
      >
        Get a Quote
        <span className="text-xl">→</span>
      </Link>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
        aria-label="Menu"
      >
        <span
          className={`h-0.5 w-6 bg-[#26364f] transition-all duration-300 ${
            isMenuOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />

        <span
          className={`h-0.5 w-6 bg-[#26364f] transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />

        <span
          className={`h-0.5 w-6 bg-[#26364f] transition-all duration-300 ${
            isMenuOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>
    </div>
  </div>

  {/* ================= MOBILE MENU ================= */}
  <div
    className={`overflow-hidden bg-white shadow-lg transition-all duration-500 xl:hidden ${
      isMenuOpen
        ? "max-h-[600px] opacity-100"
        : "max-h-0 opacity-0"
    }`}
  >
    <div className="px-5 py-5">

      {/* Mobile Search */}
      <form
        onSubmit={handleSearch}
        className="mb-4 flex overflow-hidden rounded-xl border border-gray-300"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full px-4 py-3 outline-none"
        />

        <button type="submit" className="px-4">
          🔍
        </button>
      </form>

      {/* Mobile Navigation */}
      <nav className="flex flex-col">
        <Link
          href="/"
          onClick={closeMenu}
          className="border-b border-gray-100 py-4 font-semibold text-[#26364f]"
        >
          Home
        </Link>

        <Link
          href="/about"
          onClick={closeMenu}
          className="border-b border-gray-100 py-4 font-semibold text-[#26364f]"
        >
          About Us
        </Link>

        <Link
          href="/articles"
          onClick={closeMenu}
          className="border-b border-gray-100 py-4 font-semibold text-[#26364f]"
        >
          Articles
        </Link>

        <Link
          href="/projects"
          onClick={closeMenu}
          className="border-b border-gray-100 py-4 font-semibold text-[#26364f]"
        >
          Projects
        </Link>

        <Link
          href="/contact"
          onClick={closeMenu}
          className="border-b border-gray-100 py-4 font-semibold text-[#26364f]"
        >
          Contact Us
        </Link>

        <Link
          href="/contact"
          onClick={closeMenu}
          className="mt-5 rounded-xl bg-[#f6bd35] px-5 py-4 text-center font-bold text-[#26364f]"
        >
          Get a Quote →
        </Link>
      </nav>
    </div>
  </div>
</header>

);
}

"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="text-gray-600 bg-[#FFFAF3]">
      <div className="max-w-[1280px] mx-auto flex p-5 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-[36px] text-black font-abhaya font-[700] leading-[42.47px]"
        >
          QasimDaboul
        </Link>

        {/* Hamburger Button for Mobile Menu */}
        <button
          className="lg:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation + Buttons */}
        <div className="hidden lg:flex items-center gap-[50px]">
          <nav className="flex gap-[40px] text-[20px] leading-[24px] text-primary-color font-[400]">
            <Link href="/#home" className="hover:text-gray-900">
              Home
            </Link>
            <Link href="/#about" className="hover:text-gray-900">
              About
            </Link>
            <Link href="/#services" className="hover:text-gray-900">
              Services
            </Link>
            <Link href="/#projects" className="hover:text-gray-900">
              Projects
            </Link>
            <Link href="/#testimonials" className="hover:text-gray-900">
              Testimonials
            </Link>
          </nav>
          <div className="inline-flex gap-[22px]">
            <Link href="/#contact">
              <button className="uppercase font-[600] text-[22px] leading-[30px] text-white py-[16px] px-[38px] bg-[#202020] rounded-[10px]">
                Contact
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed inset-y-0 right-0 transform w-2/3 max-w-xs p-5  z-50 bg-white lg:hidden flex flex-col items-center gap-[40px] shadow-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            className="self-end text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-[40px] items-center text-[20px] leading-[24px] text-primary-color font-[400]">
            <Link href="/#home" className="hover:text-gray-900">
              Home
            </Link>
            <Link href="/#about" className="hover:text-gray-900">
              About
            </Link>
            <Link href="/#services" className="hover:text-gray-900">
              Services
            </Link>
            <Link href="/#projects" className="hover:text-gray-900">
              Projects
            </Link>
            <Link href="/#testimonials" className="hover:text-gray-900">
              Testimonials
            </Link>
          </nav>

          {/* Buttons */}
          <div className="inline-flex w-fit">
            <Link href="/#contact">
              <button className="uppercase font-[600] text-[22px] leading-[30px] text-white py-[16px] px-[38px] bg-[#202020] rounded-[10px]">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { name: "Best Sellers", href: "/#best-sellers" },
  { name: "Menu", href: "/menu" },
  { name: "The Gallery", href: "/#gallery" },
  { name: "Services", href: "/#services" },
  { name: "Our Story", href: "/#our-story" },
];

interface NavbarProps {
  isAnimatedIn: boolean;
}

export default function Navbar({ isAnimatedIn }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-32 py-4 md:py-6 transition-all duration-500 ${isAnimatedIn
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
          } ${isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg py-3 md:py-4" : "bg-transparent"}`}
      >
        {/* Mobile Left: Logo */}
        <Link href="/" className="font-serif font-black text-xl sm:text-3xl lg:text-4xl tracking-tighter cursor-pointer flex-shrink-0">
          <span className="text-white">VIVA</span>
          <span className="text-[#cc0000]">PIZZERIA</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/80 hover:text-white text-sm font-semibold tracking-wider uppercase transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cc0000] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Area: CTA & Hamburger */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Super Animated CTA Button */}
          <button className="relative overflow-hidden group bg-transparent border border-[#cc0000] text-white font-bold rounded-full uppercase tracking-widest transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(204,0,0,0.5)] 
            py-1.5 px-5 text-[10px] leading-snug text-center flex flex-col items-center justify-center
            md:py-3 md:px-8 md:text-sm md:block md:leading-normal"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white md:hidden">
              <span>RESERVE A</span><br /><span>TABLE</span>
            </span>
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white hidden md:inline">
              Reserve a Table
            </span>
            {/* Shine Animation overlay */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer z-0"></div>
            {/* Background fill */}
            <div className="absolute inset-0 bg-[#cc0000] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></div>
          </button>

          {/* Hamburger Icon */}
          <button
            className="xl:hidden text-white focus:outline-none transition-transform hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/98 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 xl:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center gap-8 w-full px-6">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-2xl sm:text-3xl font-bold tracking-widest uppercase hover:text-[#cc0000] transition-colors relative group"
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50 + 100}ms` : '0ms',
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            >
              {item.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#cc0000] transition-all duration-300 group-hover:w-1/2"></span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

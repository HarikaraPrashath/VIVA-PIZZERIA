"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import BestSellers from "./components/BestSellers";
import GastronomicExhibits from "./components/GastronomicExhibits";
import OurServices from "./components/OurServices";
import LegacySection from "./components/LegacySection";
import Testimonials from "./components/Testimonials";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";

// Keep track of whether the cinematic video intro has already played in the current browser session
let globalHasVideoPlayed = false;

export default function Home() {
  const [isVideoEnded, setIsVideoEnded] = useState(globalHasVideoPlayed);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Only force scroll-to-top and manual restoration on first load/browser refresh.
    // Skip if it is a client-side navigation (in which case, the video already ended).
    if (!globalHasVideoPlayed) {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }

      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 0);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Lock scroll when video is playing
    if (!isVideoEnded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVideoEnded, isMounted]);

  const handleVideoEnded = () => {
    setIsVideoEnded(true);
    globalHasVideoPlayed = true;
  };

  return (
    <main className="relative w-full bg-white font-sans">
      {/* Navbar - Fixed at top */}
      <Navbar isAnimatedIn={isVideoEnded} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen bg-black overflow-hidden">
        <video
          src="/Hero Video.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
        />

        <div
          className={`absolute inset-0 z-10 mix-blend-multiply pointer-events-none transition-opacity duration-1000 ${isVideoEnded ? "opacity-0" : "opacity-100"} hero-gradient`}
        >
          <div className="flex flex-col justify-center h-full px-8 md:px-16 lg:px-32">
            <div className="max-w-2xl">
              <p className="text-xs md:text-sm font-semibold tracking-[0.2em] mb-12 text-transparent select-none">
                Since 1994 &bull; Crafted with Passion
              </p>

              <div className="relative">
                <div className="absolute  -top-30 left-0">
                  <h1 className="text-7xl md:text-[120px] font-heading leading-none capitalize md:mt-10 w-[500] md:w-[860px]">
                    <span className="text-white block mb-20">The Art</span>
                    <span className="text-white ml-7 md:ml-59">Of </span>
                    <span className="text-white">Fire</span>
                  </h1>
                </div>
                <div className="h-[200px] md:h-[280px]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Solid Content Layer */}
        <div className="absolute inset-0 z-30 flex flex-col justify-center h-full px-8 md:px-16 lg:px-32 pointer-events-none">
          <div className="pointer-events-auto max-w-2xl">
            <p
              className={`text-xs md:text-sm font-semibold tracking-[0.2em] mb-12 text-white transition-opacity duration-700 ${isVideoEnded ? "opacity-100" : "opacity-0 hero-reveal"
                }`}
            >
              Since 1994 &bull; Crafted with Passion
            </p>

            <div className="relative">
              <div
                className={`absolute top-0 left-0 transition-opacity duration-1000 ${isVideoEnded ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                  }`}
              >
                <h1 className="text-[60px] md:text-[100px] font-heading leading-none capitalize md:mt-10 w-[500] md:w-[860px]">
                  <span className="text-white block mb-20">The Art</span>
                  <span className="text-white ml-7 md:ml-59 ">Of </span>
                  <span className="text-[#cc0000]" style={{ WebkitTextStroke: '1px black' }}>Fire</span>
                </h1>
              </div>
              <div className="h-[200px] md:h-[280px]"></div>
            </div>

            <div className="mt-16 md:mt-24">
              <p
                className={`text-sm md:text-base italic mt-8 mb-10 max-w-lg text-gray-200 transition-all duration-700 ${isVideoEnded ? "translate-y-6 opacity-100" : "translate-y-0 opacity-0"}`}
              >
                "Mastering the alchemy of wood-fired flames and hand-kneaded tradition since 1994."
              </p>

              <div className="flex flex-wrap gap-8 items-center mt-4 opacity-100">
                <button className="bg-[#cc0000] hover:bg-red-700 text-white text-xs md:text-sm font-bold py-3.5 px-8 rounded-full transition-colors uppercase tracking-widest">
                  ORDER NOW
                </button>
                <button className="text-white text-xs md:text-sm font-bold flex items-center gap-2 hover:text-[#cc0000] transition-colors uppercase tracking-widest">
                  VIEW MORE <span className="text-lg leading-none">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BEST SELLERS SECTION */}
      <BestSellers />

      {/* 3. GASTRONOMIC EXHIBITS SECTION */}
      <GastronomicExhibits />

      {/* 5. OUR SERVICES SECTION */}
      <OurServices />

      {/* 5. LEGACY SECTION */}
      <LegacySection />

      {/* 6. TESTIMONIALS SECTION */}
      <Testimonials />

      {/* 7. CONNECT & SUBSCRIBE SECTION */}
      <ConnectSection />

      {/* 8. FOOTER SECTION */}
      <Footer />
    </main>
  );
}

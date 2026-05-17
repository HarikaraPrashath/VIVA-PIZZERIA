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

export default function Home() {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Force scroll to top with a slight delay to ensure it catches after browser initialization
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);

    return () => clearTimeout(timer);
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
          onEnded={() => setIsVideoEnded(true)}
        />

        <div
          className={`absolute inset-0 z-10 mix-blend-multiply pointer-events-none transition-opacity duration-1000 ${isVideoEnded ? "opacity-0" : "opacity-100"
            }`}
          style={{
            background: "linear-gradient(to right, black 0%, black 45%, white 75%, white 100%)",
          }}
        >
          <div className="flex flex-col justify-center h-full px-8 md:px-16 lg:px-32">
            <div className="max-w-2xl">
              <p className="text-xs md:text-sm font-semibold tracking-[0.2em] mb-12 text-transparent select-none">
                Since 1994 &bull; Crafted with Passion
              </p>

              <div className="relative">
                <div className="absolute  -top-20 left-0">
                  <h1 className="text-7xl md:text-9xl font-heading leading-none capitalize pr-8">
                    <span className="text-white block mb-4">The Art</span>
                    <span className="text-white ml-12">Of </span>
                    <span className="text-[#cc0000]">Fire</span>
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
                <h1 className="text-7xl md:text-9xl font-heading leading-none capitalize pr-8">
                  <span className="text-white block mb-4">The Art</span>
                  <span className="text-white ml-12">Of </span>
                  <span className="text-[#cc0000]">Fire</span>
                </h1>
              </div>
              <div className="h-[200px] md:h-[280px]"></div>
            </div>

            <p
              className={`text-sm md:text-base italic mt-8 mb-10 max-w-lg text-gray-200 transition-opacity duration-700 ${isVideoEnded ? "opacity-100" : "opacity-0 hero-reveal"
                }`}
            >
              "Mastering the alchemy of wood-fired flames and hand-kneaded tradition since 1994."
            </p>

            <div
              className={`flex flex-wrap gap-8 items-center mt-4 transition-opacity duration-700 ${isVideoEnded ? "opacity-100" : "opacity-0 hero-reveal"
                }`}
            >
              <button className="bg-[#cc0000] hover:bg-red-700 text-white text-xs md:text-sm font-bold py-3.5 px-8 rounded-full transition-colors uppercase tracking-widest">
                ORDER NOW
              </button>
              <button className="text-white text-xs md:text-sm font-bold flex items-center gap-2 hover:text-[#cc0000] transition-colors uppercase tracking-widest">
                VIEW MORE <span className="text-lg leading-none">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BEST SELLERS SECTION */}
      <BestSellers />

      {/* 3. GASTRONOMIC EXHIBITS SECTION */}
      <GastronomicExhibits />

      {/* 4. OUR SERVICES SECTION */}
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

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden font-sans">
      <Navbar isAnimatedIn={isVideoEnded} />

      {/* 1. Background Video */}
      <video
        src="/Hero Video.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        onEnded={() => setIsVideoEnded(true)}
      />

      {/* 2. Video Mask Layer (Active while playing) */}
      <div
        className={`absolute inset-0 z-10 mix-blend-multiply pointer-events-none transition-opacity duration-1000 ${
          isVideoEnded ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background: "linear-gradient(to right, black 0%, black 45%, white 75%, white 100%)",
        }}
      >
        <div className="flex flex-col justify-center h-full px-8 md:px-16 lg:px-32">
          {/* We use an empty spacer for the small top text so everything aligns perfectly */}
          <div className="h-6 mb-12"></div>
          
          <div className="max-w-2xl">
            <h1
              className="text-white font-heading font-black italic leading-[0.85] tracking-tighter"
              style={{ transform: "skewX(-10deg)" }}
            >
              <span className="block text-[clamp(3rem,6vw,6rem)] ml-2 text-gray-200">The Art</span>
              <span className="block text-[clamp(5rem,10vw,10rem)]">OF FIRE</span>
            </h1>
          </div>
        </div>
      </div>

      {/* 3. Solid Content Layer (Always present, content transitions) */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center h-full px-8 md:px-16 lg:px-32 pointer-events-none">
        <div className="pointer-events-auto max-w-2xl">
          {/* Top small text */}
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] mb-12 text-white">
            Since 1994 &bull; Crafted with Passion
          </p>

          {/* Text Container */}
          <div className="relative">
            {/* Cursive Text (Shows when video ends) */}
            <div
              className={`absolute top-0 left-0 transition-opacity duration-1000 ${
                isVideoEnded ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              <h1 className="text-7xl md:text-9xl font-cursive leading-none capitalize pr-8">
                <span className="text-white block mb-4">The Art</span>
                <span className="text-white ml-12">Of </span>
                <span className="text-[#cc0000]">Fire</span>
              </h1>
            </div>

            {/* Placeholder to reserve space for the absolute container */}
            <div className="h-[200px] md:h-[280px]"></div>
          </div>

          {/* Quote */}
          <p
            className={`text-sm md:text-base italic mt-8 mb-10 max-w-lg text-gray-200 transition-opacity duration-1000 ${
              isVideoEnded ? "opacity-100" : "opacity-0"
            }`}
          >
            "Mastering the alchemy of wood-fired flames and hand-kneaded tradition since 1994."
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-8 items-center mt-4">
            <button className="bg-[#cc0000] hover:bg-red-700 text-white text-xs md:text-sm font-bold py-3.5 px-8 rounded-full transition-colors uppercase tracking-widest">
              ORDER NOW
            </button>
            <button className="text-white text-xs md:text-sm font-bold flex items-center gap-2 hover:text-[#cc0000] transition-colors uppercase tracking-widest">
              VIEW MORE <span className="text-lg leading-none">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

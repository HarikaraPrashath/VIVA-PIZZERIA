"use client";

import Navbar from "../components/Navbar";
import MenuSection from "../components/MenuSection";
import Footer from "../components/Footer";

export default function MenuPage() {
  return (
    <main className="relative w-full bg-[#05090d] font-sans pt-20">
      {/* Navbar is fully visible instantly on this subpage */}
      <Navbar isAnimatedIn={true} />

      {/* The Menu Section */}
      <MenuSection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}

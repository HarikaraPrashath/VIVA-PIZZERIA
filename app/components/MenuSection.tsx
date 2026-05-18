"use client";

import { motion } from "framer-motion";
import { Truck } from "lucide-react";

// Beautiful custom SVGs for the hand-drawn chalk illustrations on the board
const ChiliSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 15c-3 10-1 25 8 35 12 14 30 25 40 30 2 1 4-1 3-3C75 65 60 50 50 40c-7-7-6-18 1-22 3-2 5-1 5 3 0 10 3 15 8 20 4-4 4-12 0-20-3-6-7-8-10-3z" />
    <path d="M35 15c1-3 5-8 10-8s8 4 5 8c-2 3-5 5-10 2z" fill="currentColor" fillOpacity="0.1" />
  </svg>
);

const OnionSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15c-15 15-25 30-25 45s10 25 25 25 25-10 25-25-10-30-25-45z" />
    <path d="M50 15c-5 18-10 32-10 45s5 25 10 25" />
    <path d="M50 15c5 18 10 32 10 45s-5 25-10 25" />
    <path d="M50 15c-10 18-18 32-18 45s8 25 18 25" />
    <path d="M50 15c10 18 18 32 18 45s-8 25-18 25" />
    <path d="M42 85h16M38 88h24" />
  </svg>
);

const BroccoliSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 60v15c0 5 4 10 10 10s10-5 10-10V60" />
    <path d="M35 70c-2-2-6-2-8 0-4 4-2 10 4 10" />
    <path d="M65 70c2-2 6-2 8 0 4 4 2 10-4 10" />
    <path d="M30 45c-8-2-15 4-15 12 0 6 4 11 10 13M70 45c8-2 15 4 15 12 0 6-4 11-10 13" />
    <path d="M50 20c-10 0-18 8-18 18 0 4 1.5 8 4 11M50 20c10 0 18 8 18 18 0 4-1.5 8-4 11" />
    <path d="M36 49c-4-4-4-10 0-14 4-4 10-4 14 0M64 49c4-4 4-10 0-14-4-4-10-4-14 0" />
  </svg>
);

const CarrotSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 70L70 30c5-5 15-5 20 0s5 15 0 20L50 90c-5 5-15 5-20 0z" />
    <path d="M30 70l-5-5-5 5 5 5 5-5z" />
    <path d="M75 45l-5-5M65 55l-5-5M55 65l-5-5M45 75l-5-5" />
    <path d="M85 20c-2-5-8-8-12-8s-8 5-5 10c2 3 5 5 10 3" />
    <path d="M90 30c3-2 5-8 3-12s-8-5-10 3c-1 3-1 6 3 6" />
  </svg>
);

const LeafSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 90C40 70 50 30 90 10C70 40 30 50 10 90Z" fill="#6ebb35" />
    <path d="M10 90C35 65 65 35 90 10" stroke="#acf774" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 70C45 65 55 55 60 40" stroke="#acf774" strokeWidth="1" strokeLinecap="round" />
    <path d="M50 50C65 45 75 35 80 20" stroke="#acf774" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const QRCodeSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Outer border & finder patterns */}
    <path d="M0 0h30v30H0V0zm6 6v18h18V6H6zm4 4h10v10H10V10zM70 0h30v30H70V0zm6 6v18h18V6H76zm4 4h10v10H80V10zM0 70h30v30H0V70zm6 6v18h18V76H6zm4 4h10v10H10V80z" />
    {/* Small alignment patterns */}
    <path d="M75 75h10v10H75v-10zm-35 -35h10v10H40v-10z" />
    {/* Random bits */}
    <path d="M35 0h10v10H35V0zm15 0h10v20H50V0zm10 25h10v10H60V25zm-25 10h10v20H35V35zm15 10h15v10H50V45zm-15 20h10v15H35V65zm25 0h10v10H60V65zm-10 15h15v10H50V80zm25 -30h10v15H75V50zm15 15h10v15H90V65zM45 80h10v10H45V80zm10 -35h10v10H55V45z" />
  </svg>
);

const WheatSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    {/* Stalk stem */}
    <path d="M50 90C50 60 52 30 55 10" strokeWidth="1.5" />
    {/* Wheat Grains Left */}
    <path d="M50 70C42 67 40 58 48 53C40 50 38 41 47 36C38 33 36 24 46 19C38 16 38 7 49 6" />
    {/* Wheat Grains Right */}
    <path d="M52 70C60 67 62 58 54 53C62 50 64 41 55 36C64 33 66 24 56 19C64 16 64 7 53 6" />
    {/* Wisps (beards) */}
    <path d="M48 53C40 47 32 45 25 45M47 36C38 29 30 26 22 25M46 19C36 11 28 8 20 8" />
    <path d="M54 53C62 47 70 45 77 45M55 36C64 29 72 26 80 25M56 19C66 11 74 8 82 8" />
  </svg>
);

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-[#05090d] text-white overflow-hidden relative border-t border-white/5">
      
      {/* ---------------- BACKGROUND DECORATIONS (CHALK & LEAVES) ---------------- */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Subtle radial chalkboard lighting */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#cc0000]/3 opacity-[0.03] blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[800px] h-[800px] bg-[#cc0000]/5 opacity-[0.03] blur-[180px] rounded-full"></div>

        {/* Chalk drawings on the chalkboard board */}
        <ChiliSVG className="absolute top-10 left-[10%] w-14 h-14 text-white/5 rotate-12" />
        <OnionSVG className="absolute bottom-20 left-[4%] w-16 h-16 text-white/5 -rotate-12" />
        <BroccoliSVG className="absolute top-[40%] left-[8%] w-16 h-16 text-white/5 -rotate-45" />
        <CarrotSVG className="absolute bottom-[20%] right-[3%] w-16 h-16 text-white/5 rotate-45" />
        <ChiliSVG className="absolute top-48 right-[8%] w-12 h-12 text-white/5 -rotate-[60deg]" />

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title of Section */}
        <div className="text-center mb-16 relative">
          <p className="text-[#cc0000] text-[11px] font-bold tracking-[0.4em] uppercase mb-4">
            A Culinary Masterpiece
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4">
            Discover Our <span className="font-cursive text-[#cc0000] italic normal-case translate-y-1 sm:ml-2">Menu</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#cc0000]/80 to-transparent mx-auto mt-6"></div>
        </div>

        {/* ---------------- THE MENU CONTAINER (TWO PAGES) ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative bg-[#070d12] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10">
          
          {/* Middle Spine/Fold Shadow for 3D Menu Book look on Desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-1/2 -ml-[1px] w-[2px] bg-gradient-to-r from-black/80 via-black/40 to-transparent z-20 pointer-events-none"></div>
          <div className="hidden lg:block absolute inset-y-0 left-1/2 -ml-[12px] w-[24px] bg-gradient-to-r from-black/40 via-transparent to-black/40 opacity-50 z-20 pointer-events-none"></div>

          {/* ================================================================= */}
          {/* ===================== PAGE 1: FEATURED COVER ==================== */}
          {/* ================================================================= */}
          <div className="p-8 sm:p-12 lg:p-16 relative flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden bg-[radial-gradient(circle_at_center,_#0b141d_0%,_#070d12_100%)]">
            
            {/* Background design accents */}
            <div className="absolute top-[20%] left-[-40px] w-64 h-64 rounded-full bg-[#cc0000]/5 blur-3xl pointer-events-none"></div>
            
            {/* Upper Content area */}
            <div>
              {/* Badge: OUR FAVORITE FOOD */}
              <div className="mb-10 flex">
                <span className="border-2 border-[#cc0000] text-[#cc0000] px-6 py-1.5 rounded-full font-bebas text-sm sm:text-base tracking-[0.2em] uppercase font-bold bg-[#070d12]/50 shadow-[0_0_15px_rgba(204,0,0,0.25)]">
                  Our Favorite Food
                </span>
              </div>

              {/* Layout for Favorite Pizza Plates and details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
                
                {/* Yellow Circle Plate Container (Left on MD) */}
                <div className="md:col-span-6 flex justify-center relative">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-[#cc0000] relative flex items-center justify-center shadow-[0_15px_30px_rgba(204,0,0,0.35)]">
                    
                    {/* Delicious Tacos / Wood-fired wrap item overlapping yellow circle */}
                    <div className="absolute w-[95%] h-[95%] rounded-full overflow-hidden hover:scale-105 transition-transform duration-700">
                      <img
                        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop"
                        alt="Delicious Gourmet Wraps"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Favorite Food List (Right on MD) */}
                <div className="md:col-span-6 flex flex-col gap-6">
                  {/* Food item 1 */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-bebas tracking-wider text-[#cc0000] hover:text-white transition-colors cursor-pointer">
                      Smoked BBQ Tacos
                    </h4>
                    <p className="text-gray-400 text-[11px] leading-relaxed mt-1 max-w-[280px]">
                      Hand-pulled wood-fired brisket, crisp house slaw, fresh cilantro, charred lime, wrapped in corn tortillas.
                    </p>
                  </div>

                  {/* Food item 2 */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-bebas tracking-wider text-[#cc0000] hover:text-white transition-colors cursor-pointer">
                      Truffle Mushroom Wrap
                    </h4>
                    <p className="text-gray-400 text-[11px] leading-relaxed mt-1 max-w-[280px]">
                      Roasted portobello caps, truffle mushroom cream, fresh arugula, melted fior di latte in a toasted artisan flatbread.
                    </p>
                  </div>

                  {/* Food item 3 */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-bebas tracking-wider text-[#cc0000] hover:text-white transition-colors cursor-pointer">
                      Fire-Roasted Burrito
                    </h4>
                    <p className="text-gray-400 text-[11px] leading-relaxed mt-1 max-w-[280px]">
                      Slow-roasted pork shoulder, cilantro lime rice, fire-roasted black bean corn salsa, wrapped in a large flour tortilla.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Middle decorative chalk sketch / Quote banner to fill the vertical space */}
            <div className="hidden lg:flex my-auto py-12 lg:py-16 flex-col items-center justify-center text-center relative pointer-events-none select-none z-10 border-y border-white/5 bg-white/[0.015] shadow-[inset_0_0_30px_rgba(255,255,255,0.01)]">
              {/* Decorative Wheat SVGs flanking the quote */}
              <div className="absolute left-[5%] top-[25%] opacity-20 w-18 h-18 text-white rotate-[15deg]">
                <WheatSVG className="w-full h-full" />
              </div>
              <div className="absolute right-[5%] top-[25%] opacity-20 w-18 h-18 text-white -rotate-[15deg]">
                <WheatSVG className="w-full h-full" />
              </div>
              
              {/* Daily Special header */}
              <div className="flex items-center gap-4 text-white/20 mb-4">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/20"></div>
                <span className="text-[#cc0000] font-bebas text-sm sm:text-base tracking-[0.4em] uppercase font-bold">Chef's Signature</span>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/20"></div>
              </div>
              
              {/* Artistic Chalkboard Quote */}
              <p className="font-cursive text-4xl lg:text-5xl lg:leading-normal text-white/90 italic leading-relaxed max-w-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                "Where every slice tells a story of wood, fire, and absolute perfection."
              </p>
              
              {/* Subtle organic wheat badge */}
              <div className="flex items-center gap-2 mt-5 text-gray-500">
                <span className="text-[10px] font-finger tracking-[0.25em] uppercase">100% Organic Wheat</span>
                <span className="text-[#cc0000] text-xs">•</span>
                <span className="text-[10px] font-finger tracking-[0.25em] uppercase">48h Slow Fermentation</span>
              </div>
            </div>

            {/* Bottom Content area */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-8">
              
              {/* QR Code and Contact info (Left on MD) */}
              <div className="md:col-span-5 relative">
                {/* Yellow background shape */}
                <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-[#cc0000] rounded-tr-[120px] -z-10 shadow-[0_10px_30px_rgba(204,0,0,0.25)]"></div>
                
                <div className="flex flex-col gap-4 pl-2 pb-2">
                  <div className="w-20 h-20 bg-white p-2.5 rounded-xl shadow-lg border border-gray-100 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <QRCodeSVG className="w-full h-full text-black" />
                  </div>

                  <div className="text-[#070d12] md:text-white mt-1">
                    <p className="text-[10px] md:text-gray-400 font-bold uppercase tracking-wider">Contact Us:</p>
                    <p className="text-base sm:text-lg font-bebas tracking-wider font-bold text-[#070d12] md:text-[#cc0000]">+123-456-7891</p>
                    <p className="text-[9px] md:text-gray-400 font-medium lowercase tracking-wide -mt-0.5">www.yourwebsite.com</p>
                  </div>
                </div>
              </div>

              {/* Big Title & Chicken Circle (Right on MD) */}
              <div className="md:col-span-7 flex flex-col items-center md:items-end text-center md:text-right relative">
                
                {/* Giant Brush Title: Super Food Menu */}
                <div className="mb-8 select-none">
                  <span className="font-finger text-white text-3xl sm:text-4xl block leading-tight font-light drop-shadow-md tracking-wider">
                    Super Food
                  </span>
                  <span className="font-brush text-[#cc0000] text-6xl sm:text-7xl lg:text-8xl block leading-none tracking-wide -mt-2 drop-shadow-lg">
                    Menu
                  </span>
                </div>

                {/* Big Chicken Plate with gold ring */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-[6px] border-[#cc0000] relative flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                  {/* Delicious Roasted Chicken plate overlapping */}
                  <div className="absolute w-[98%] h-[98%] rounded-full overflow-hidden hover:rotate-[15deg] transition-transform duration-1000">
                    <img
                      src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=600&auto=format&fit=crop"
                      alt="Super Food Roasted Chicken"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <p className="text-[10px] text-gray-500 font-bold tracking-widest mt-6 uppercase">
                  WWW.YOURWEBSITE.COM
                </p>

              </div>
            </div>

          </div>

          {/* ================================================================= */}
          {/* ====================== PAGE 2: DETAILED MENU ===================== */}
          {/* ================================================================= */}
          <div className="p-8 sm:p-12 lg:p-16 relative flex flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_center,_#0a1118_0%,_#05090d_100%)]">
            
            {/* Background design accents */}
            <div className="absolute bottom-[20%] right-[-40px] w-64 h-64 rounded-full bg-[#cc0000]/5 blur-3xl pointer-events-none"></div>

            <div className="flex flex-col gap-12">
              
              {/* ---------------- 1. APPETIZER MENU ---------------- */}
              <div>
                <div className="mb-6 flex">
                  <span className="border border-[#cc0000]/60 bg-black/40 text-[#cc0000] px-6 py-1 rounded-full font-bebas text-xs sm:text-sm tracking-[0.25em] uppercase font-bold">
                    Appetizer Menu
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Garlic Dough Knots</h5>
                    <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Oven-baked knots tossed in olive oil, garlic, parmesan & parsley.</p>
                  </div>
                  <div>
                    <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Wood-Fired Caprese</h5>
                    <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Blistered cherry tomatoes, fresh buffalo mozzarella, basil & aged balsamic.</p>
                  </div>
                  <div>
                    <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Bruschetta Classica</h5>
                    <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Toasted artisan sourdough, vine tomatoes, garlic, basil & olive oil.</p>
                  </div>
                  <div>
                    <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Crispy Calamari</h5>
                    <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Lightly dusted squid rings served with organic house lemon aioli.</p>
                  </div>
                  <div>
                    <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Truffle Parm Fries</h5>
                    <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Golden hand-cut potatoes in white truffle oil, grated parmesan & rosemary.</p>
                  </div>
                  <div>
                    <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Stuffed Mushrooms</h5>
                    <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Portobello caps stuffed with goat cheese, wild herbs & wild forest honey.</p>
                  </div>
                </div>
              </div>

              {/* ---------------- 2. FAST FOOD ---------------- */}
              <div>
                <div className="mb-6 flex">
                  <span className="border border-[#cc0000]/60 bg-black/40 text-[#cc0000] px-6 py-1 rounded-full font-bebas text-xs sm:text-sm tracking-[0.25em] uppercase font-bold">
                    Fast Food
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Left: Food Items */}
                  <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Viva Double Smash</h5>
                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Two aged smash patties, melted cheddar, pickles & burger sauce on brioche.</p>
                    </div>
                    <div>
                      <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Crispy Chicken Burger</h5>
                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Buttermilk fried chicken breast, spicy honey-glaze, lettuce & garlic aioli.</p>
                    </div>
                    <div>
                      <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Pepperoni Pizza Roll</h5>
                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Hand-stretched dough stuffed with pepperoni, mozzarella & marinara.</p>
                    </div>
                    <div>
                      <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Loaded Truffle Fries</h5>
                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Fries loaded with melted mozzarella, crispy bacon, green onion & truffle oil.</p>
                    </div>
                  </div>

                  {/* Right: Two Stacked Photos */}
                  <div className="md:col-span-4 flex flex-col gap-3">
                    <div className="relative aspect-[3/2] w-full rounded-xl overflow-hidden border border-white/20 shadow-md group">
                      <img
                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=300&auto=format&fit=crop"
                        alt="Premium Double Smash Burger"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="relative aspect-[3/2] w-full rounded-xl overflow-hidden border border-white/20 shadow-md group">
                      <img
                        src="https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=300&auto=format&fit=crop"
                        alt="Delicious Grilled Panini"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------------- 3. MAIN COURSE ---------------- */}
              <div>
                <div className="mb-6 flex">
                  <span className="border border-[#cc0000]/60 bg-black/40 text-[#cc0000] px-6 py-1 rounded-full font-bebas text-xs sm:text-sm tracking-[0.25em] uppercase font-bold">
                    Main Course
                  </span>
                </div>

                <div className="flex flex-col gap-6">
                  {/* Items list */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Wood-Fired Ribeye</h5>
                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">12oz dry-aged ribeye steak with rosemary fingerling potatoes & chimichurri.</p>
                    </div>
                    <div>
                      <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Truffle Pappardelle</h5>
                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Hand-cut pasta, rich wild mushroom truffle cream, shaved pecorino.</p>
                    </div>
                    <div>
                      <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Pan-Seared Salmon</h5>
                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Atlantic salmon fillet, asparagus spears, saffron butter sauce & lemon.</p>
                    </div>
                    <div>
                      <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Neapolitan Pepperoni</h5>
                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">San Marzano sauce, fresh mozzarella, spicy pepperoni & fresh basil.</p>
                    </div>
                    <div>
                      <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Slow Pork Belly</h5>
                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Crispy pork belly, honey-glazed carrots, parsnip puree, jus reduction.</p>
                    </div>
                    <div>
                      <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Roasted Brick Chicken</h5>
                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Free-range half chicken, garden herbs, roasted heirloom vegetables.</p>
                    </div>
                  </div>

                  {/* Three square photos below */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-white/20 shadow-md group">
                      <img
                        src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=300&auto=format&fit=crop"
                        alt="Gourmet Meat Plater"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-white/20 shadow-md group">
                      <img
                        src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=300&auto=format&fit=crop"
                        alt="Rich Truffle Pasta"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-white/20 shadow-md group">
                      <img
                        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=300&auto=format&fit=crop"
                        alt="Hot Pepperoni Pizza slice"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------------- 4. DRINKS MENU ---------------- */}
              <div>
                <div className="mb-6 flex">
                  <span className="border border-[#cc0000]/60 bg-black/40 text-[#cc0000] px-6 py-1 rounded-full font-bebas text-xs sm:text-sm tracking-[0.25em] uppercase font-bold">
                    Drinks Menu
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Left: Food Items */}
                  <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Smoked Rosemary Old Fashioned</h5>
                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Premium aged bourbon, angostura bitters, smoked fresh rosemary branch & orange peel.</p>
                    </div>
                    <div>
                      <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Spiced Mango Mojito</h5>
                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">White rum, fresh garden mint, mango puree, lime juice, sparkling water & pinch of tajin.</p>
                    </div>
                    <div>
                      <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Classic Espresso Martini</h5>
                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Freshly brewed local espresso, premium vodka, coffee liqueur & roasted coffee beans.</p>
                    </div>
                    <div>
                      <h5 className="text-base font-bebas tracking-wide text-white hover:text-[#cc0000] transition-colors cursor-pointer">Hibiscus Rose Mocktail</h5>
                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">Brewed organic hibiscus tea, rosewater, fresh lime juice, club soda & edible rose petals.</p>
                    </div>
                  </div>

                  {/* Right: Portrait Photo */}
                  <div className="md:col-span-4">
                    <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-white/20 shadow-md group">
                      <img
                        src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=300&auto=format&fit=crop"
                        alt="Artisanal Cocktails"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ---------------- BOTTOM FOOTER BANNER ---------------- */}
            <div className="mt-12 pt-8 border-t border-white/5 relative">
              {/* Curved yellow shape background on the bottom right */}
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#cc0000] rounded-tl-[120px] -z-10 shadow-[0_10px_30px_rgba(204,0,0,0.2)]"></div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                {/* Delivery Truck Promo */}
                <div className="flex items-center gap-3 bg-[#cc0000] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-300">
                  <Truck className="w-5 h-5 stroke-[2.5]" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] leading-none uppercase font-bold tracking-wider opacity-90">Free Home Delivery</span>
                    <span className="text-base font-bebas tracking-wider leading-none mt-0.5">123-456-7891</span>
                  </div>
                </div>

                <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                  All rights reserved. Viva Pizzeria 2026.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

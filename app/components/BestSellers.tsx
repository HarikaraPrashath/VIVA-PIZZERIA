"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Check } from "lucide-react";

const BEST_SELLERS = [
  {
    id: 1,
    name: "HALF & HALF PIZZA",
    description: "Please choose two halves of pizza according to ...",
    price: "$17.40 - $20.40",
    image: "/image/Hero-menu/pizza-1.png",
  },
  {
    id: 2,
    name: "MARGHERITA",
    description: "Cherry tomatoes, fresh tomato, basil drizzle & mozzarella",
    price: "$8.40 - $20.40",
    image: "/image/Hero-menu/pizza-2.png",
  },
  {
    id: 3,
    name: "BACON CHEESE",
    description: "Nullam ac tortor vitae purus faucibus ornare suspendisse ...",
    price: "$8.90 - $12.90",
    image: "/image/Hero-menu/pizza-3.png",
  },
  {
    id: 4,
    name: "PEPPERONI",
    description: "Nullam ac tortor vitae purus faucibus ornare suspendisse ...",
    price: "$17.40 - $20.40",
    image: "/image/Hero-menu/pizza-4.png",
  },
];

export default function BestSellers() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-24 relative flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-2  tracking-tight drop-shadow-sm">
            Our Best Seller <span className="font-cursive text-[#cc0000] normal-case italic translate-y-1 ml-2">Items</span>
          </h2>
          {/* Small yellow brush accent under title */}
          <div className="w-48 h-4 mt-2 relative">
            <div className="absolute inset-0 bg-[#f5a623] opacity-40 blur-[3px] rounded-full transform -rotate-2 scale-x-125"></div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {BEST_SELLERS.map((item, index) => (
            <div
              key={item.id}
              className="relative group flex flex-col items-center text-center p-8 transition-all duration-500 min-h-[520px] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated Background Paint Effect */}
              <AnimatePresence mode="wait">
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="absolute inset-x-[-30px] inset-y-[-40px] z-0 bg-no-repeat bg-center bg-[length:100%_100%] scale-x-105"
                      style={{
                        backgroundImage: "url('/image/Hero-menu/bg-hover.png')",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Pizza Image Container */}
              <div className="relative z-10 w-56 h-56 mb-10 group-hover:scale-110 transition-transform duration-700 ease-out">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                />
                
                {/* Heart Icon (Top Right) */}
                <div className={`absolute top-0 right-0 p-2 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                    <svg className="w-6 h-6 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col items-center justify-between flex-grow w-full">
                <div>
                  <h3 className={`text-2xl font-bebas tracking-wider mb-3 transition-colors duration-500 ${hoveredIndex === index ? 'text-white' : 'text-gray-900'}`}>
                    {item.name}
                  </h3>
                  <p className={`text-[11px] mb-4 leading-relaxed max-w-[180px] mx-auto transition-colors duration-500 font-bold ${hoveredIndex === index ? 'text-gray-100' : 'text-gray-400'}`}>
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <p className={`text-lg font-bold mb-6 transition-colors duration-500 ${hoveredIndex === index ? 'text-white' : 'text-[#cc0000]'}`}>
                    {item.price}
                  </p>

                  {/* Button */}
                  <button
                    className={`flex items-center gap-2 py-2.5 px-7 rounded-full text-[10px] font-black transition-all duration-500 uppercase tracking-widest shadow-lg ${
                      hoveredIndex === index
                        ? "bg-[#6ab344] text-white hover:bg-green-600 scale-105"
                        : "bg-[#f5a623] text-black hover:bg-[#e0961d]"
                    }`}
                  >
                    {hoveredIndex === index ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3px]" /> VIEW CART
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 stroke-[3px]" /> ADD TO CART
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-20">
          <button className="bg-black text-white px-10 py-3 rounded-full text-xs font-bold hover:bg-gray-800 transition-colors uppercase tracking-[0.2em]">
            VIEW ALL ITEMS
          </button>
        </div>
      </div>
    </section>
  );
}

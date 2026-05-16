"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Pizza, Utensils, CupSoda, Martini } from "lucide-react";

const CATEGORIES = [
  { id: "pizza", name: "PIZZA", icon: Pizza },
  { id: "pasta", name: "PASTA", icon: Utensils },
  { id: "beverages", name: "BEVERAGES", icon: CupSoda },
  { id: "cocktails", name: "COCKTAILS", icon: Martini },
];

const EXHIBITS = [
  {
    id: 1,
    category: "pizza",
    name: "Tartufo Bianco",
    description: "White truffle cream, roasted wild mushrooms, fior di latte, and shaved black truffles.",
    image: "/image/gallery/pizza.png",
    premium: true,
  },
  {
    id: 2,
    category: "pasta",
    name: "Pappardelle Al Ragu",
    description: "Slow-cooked beef ragu, fresh herbs, and hand-cut pappardelle pasta.",
    image: "/image/gallery/pasta.png",
    premium: true,
  },
  {
    id: 3,
    category: "cocktails",
    name: "Negroni Sbagliato",
    description: "Premium gin, campari, sweet vermouth, and a twist of orange peel.",
    image: "/image/gallery/cocktail.png",
    premium: true,
  },
];

export default function GastronomicExhibits() {
  const [activeCategory, setActiveCategory] = useState("pizza");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <p className="text-[#cc0000] text-[11px] font-bold tracking-[0.4em] uppercase mb-4 px-4">
            The Curated Selections
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 px-4">
            Gastronomic <span className="font-cursive text-[#cc0000] italic normal-case translate-y-0 sm:translate-y-2">Exhibits</span>
          </h2>
        </div>

        {/* Category Selector */}
        <div className="flex justify-start sm:justify-center items-center gap-6 md:gap-16 mb-16 md:mb-20 overflow-x-auto no-scrollbar pb-4 px-4 scroll-smooth">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="group flex flex-col items-center gap-3 transition-all duration-300"
              >
                <div 
                  className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-500 ${
                    isActive 
                      ? "bg-[#cc0000] border-[#cc0000] scale-110 shadow-[0_0_20px_rgba(204,0,0,0.3)]" 
                      : "bg-transparent border-white/10 group-hover:border-white/30"
                  }`}
                >
                  <Icon 
                    className={`w-6 h-6 transition-colors duration-500 ${
                      isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"
                    }`} 
                  />
                </div>
                <span 
                  className={`text-[10px] font-black tracking-widest transition-all duration-500 relative ${
                    isActive ? "text-white" : "text-gray-600 group-hover:text-gray-400"
                  }`}
                >
                  {cat.name}
                  {isActive && (
                    <motion.div 
                      layoutId="cat-underline"
                      className="absolute -bottom-2 left-0 w-full h-[1.5px] bg-[#cc0000]"
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Exhibits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXHIBITS.map((item) => (
            <motion.div
              key={item.id}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${
                  hoveredId === item.id ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div 
                  className={`transition-all duration-700 transform ${
                    hoveredId === item.id ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  <p className="text-[#cc0000] text-[9px] font-bold tracking-widest uppercase mb-2">
                    PREMIUM SELECTION
                  </p>
                  <h3 className="text-white text-2xl font-serif mb-4">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-8 max-w-[240px] italic">
                    "{item.description}"
                  </p>
                  <button className="text-white text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white/30 pb-1 hover:border-[#cc0000] hover:text-[#cc0000] transition-all duration-300">
                    RESERVE ITEM
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

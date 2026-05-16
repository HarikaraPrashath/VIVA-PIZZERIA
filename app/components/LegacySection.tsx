"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STATS = [
  { id: 1, value: "120+", label: "PIZZA VARIETY" },
  { id: 2, value: "300+", label: "CAPACITY OF SITTING" },
  { id: 3, value: "150+", label: "HUNDRED DAILY CUSTOMERS" },
  { id: 4, value: "50+", label: "TEN YEARS OF EXPERIENCE" },
];

export default function LegacySection() {
  return (
    <section className="py-24 bg-black overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side: Image */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/image/legacy-pizza.png"
                alt="Our Pizza Legacy"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative border frame */}
            <div className="absolute -inset-4 border border-[#cc0000]/30 -z-10 rounded-sm pointer-events-none"></div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#cc0000] text-[11px] font-bold tracking-[0.4em] uppercase mb-6">
              Heritage & Passion
            </p>

            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
              Legacy Born <br />
              from <span className="font-cursive text-[#cc0000] normal-case italic">Passion.</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg italic font-serif leading-relaxed mb-12 max-w-xl">
              "Since 1994, our ovens have never gone cold. We believe that true Neapolitan pizza is not just food—it's a dialogue between the ingredients, the fire, and the hands that knead the dough."
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              {STATS.map((stat) => (
                <div key={stat.id} className="flex flex-col">
                  <h3 className="text-4xl md:text-5xl font-bebas text-[#cc0000] mb-2 tracking-wider">
                    {stat.value}
                  </h3>
                  <p className="text-white text-[9px] font-black tracking-[0.2em] uppercase max-w-[140px] leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#cc0000] opacity-10 blur-[150px] -z-10 rounded-full"></div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Pizza, Users, Smile, Award } from "lucide-react";

const STATS = [
  {
    id: 1,
    value: "20+",
    label: "PIZZA VARIETY",
    icon: Pizza,
  },
  {
    id: 2,
    value: "30+",
    label: "CAPACITY OF SITTING",
    icon: Users,
  },
  {
    id: 3,
    value: "150+",
    label: "HUNDRED DAILY CUSTOMERS",
    icon: Smile,
  },
  {
    id: 4,
    value: "10+",
    label: "TEN YEARS OF EXPERIENCE",
    icon: Award,
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#cc0000] transition-colors duration-500">
                    <Icon className="w-8 h-8 text-[#cc0000] group-hover:text-white transition-colors duration-500" />
                  </div>
                  {/* Small red accent line */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#cc0000]"></div>
                </div>

                {/* Value */}
                <h3 className="text-5xl md:text-6xl font-bebas text-white mb-3 tracking-wider">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-[#cc0000] text-[10px] font-black tracking-[0.3em] uppercase max-w-[120px] leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#cc0000] blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#cc0000] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </section>
  );
}

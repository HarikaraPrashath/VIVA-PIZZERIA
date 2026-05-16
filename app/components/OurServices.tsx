"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cake, Heart, Clock, UtensilsCrossed } from "lucide-react";

const SERVICES = [
  {
    side: "left",
    items: [
      {
        id: "birthday",
        title: "BIRTHDAY PARTY",
        description: "Create unforgettable memories with our bespoke birthday packages, featuring wood-fired pizzas and custom desserts.",
        icon: Cake,
      },
      {
        id: "charity",
        title: "CHARITY EVENTS",
        description: "We are committed to our community. Partner with us for your next charity gala or local fundraising event.",
        icon: Heart,
      },
    ],
  },
  {
    side: "right",
    items: [
      {
        id: "event",
        title: "EVENT PARTY",
        description: "From corporate gatherings to intimate soirées, our team handles every detail of your event catering.",
        icon: Clock,
      },
      {
        id: "private",
        title: "PRIVATE DINING",
        description: "Enjoy an exclusive culinary experience in our private suites, tailored precisely to your palate.",
        icon: UtensilsCrossed,
      },
    ],
  },
];

export default function OurServices() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20 relative flex flex-col items-center px-4">
          <p className="text-[#cc0000] text-[11px] font-bold tracking-[0.4em] uppercase mb-4">
            Quality & Care
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-2 tracking-tight drop-shadow-sm">
            Our <span className="font-cursive text-[#cc0000] normal-case italic block sm:inline translate-y-1 sm:ml-2">Services</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-4 relative">
          {/* Left Services */}
          <div className="w-full lg:w-1/3 flex flex-col gap-12 md:gap-16 order-2 lg:order-1">
            {SERVICES[0].items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex flex-col items-center lg:items-end text-center lg:text-right group px-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-100 mb-6 group-hover:border-[#cc0000] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#cc0000]" />
                  </div>
                  <h3 className="text-xl font-black mb-3 tracking-tighter text-[#1a1a1a]">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm italic font-serif leading-relaxed max-w-[280px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Central Image with Hover Effect */}
          <div 
            className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2 px-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative p-2 md:p-3 border-[4px] md:border-[6px] border-[#cc0000] rounded-lg">
              <div className="relative w-[280px] sm:w-[320px] h-[380px] sm:h-[450px] overflow-hidden rounded-md shadow-2xl">
                <Image
                  src="/image/master-chef-canada.jpg"
                  alt="Master Chef"
                  fill
                  className={`object-cover transition-all duration-700 ease-in-out ${
                    isHovered ? "grayscale-0 scale-105" : "grayscale"
                  }`}
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-[#1a1a1a] text-white px-6 sm:px-8 py-2.5 sm:py-3 text-[9px] sm:text-[11px] font-black tracking-[0.3em] uppercase whitespace-nowrap shadow-xl rounded-xl">
                    MASTER CHEF
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Services */}
          <div className="w-full lg:w-1/3 flex flex-col gap-12 md:gap-16 order-3 lg:order-3">
            {SERVICES[1].items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex flex-col items-center lg:items-start text-center lg:text-left group px-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-100 mb-6 group-hover:border-[#cc0000] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#cc0000]" />
                  </div>
                  <h3 className="text-xl font-black mb-3 tracking-tighter text-[#1a1a1a]">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm italic font-serif leading-relaxed max-w-[280px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

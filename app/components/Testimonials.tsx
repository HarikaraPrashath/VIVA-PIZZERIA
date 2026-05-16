"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "ALESSANDRO ROSSI",
    role: "FOOD CRITIC",
    quote: "The best Neapolitan pizza outside of Italy. The crust is perfectly blistered, and ingredients are exceptionally fresh.",
    variant: "red",
  },
  {
    id: 2,
    name: "SOPHIA CARTER",
    role: "LOCAL GUIDE",
    quote: "A truly cinematic dining experience. The ambiance, the wine selection, and the Truffle Pasta are absolutely out of this world.",
    variant: "white",
  },
  {
    id: 3,
    name: "MICHAEL CHEN",
    role: "EVENT COORDINATOR",
    quote: "We hosted our corporate event here and the service was impeccable. Every guest left amazed by the quality of the food.",
    variant: "dark",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20 relative flex flex-col items-center px-4">
          <p className="text-[#cc0000] text-[11px] font-bold tracking-[0.4em] uppercase mb-4">
            Guest Experiences
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-2 tracking-tight drop-shadow-sm">
            What They <span className="font-cursive text-[#cc0000] normal-case italic block sm:inline translate-y-1 sm:ml-2">Say</span>
          </h2>
        </div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:min-h-[600px]">
          
          {/* Main Large Card (Left) */}
          <motion.div 
            className="lg:col-span-7 bg-[#cc0000] rounded-3xl p-8 sm:p-10 md:p-16 relative overflow-hidden flex flex-col justify-between shadow-2xl group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>
              <p className="text-white text-2xl md:text-4xl font-serif italic leading-tight mb-12">
                "{TESTIMONIALS[0].quote}"
              </p>
            </div>
            
            <div className="relative z-10 border-t border-white/20 pt-8 flex items-end justify-between">
              <div>
                <h4 className="text-white font-black text-xl tracking-tight uppercase">
                  {TESTIMONIALS[0].name}
                </h4>
                <p className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase">
                  {TESTIMONIALS[0].role}
                </p>
              </div>
              <Quote className="w-24 h-24 text-white opacity-10 absolute right-0 bottom-0 transform translate-x-4 translate-y-4" />
            </div>
            
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white rounded-full blur-[100px]"></div>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Top Right Card (White/Gray) */}
            <motion.div 
              className="flex-1 bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col justify-between group hover:shadow-xl transition-shadow duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#cc0000] text-[#cc0000]" />
                  ))}
                </div>
                <p className="text-[#1a1a1a] text-lg font-serif italic leading-relaxed mb-8">
                  "{TESTIMONIALS[1].quote}"
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-[#1a1a1a] font-black text-sm tracking-tight uppercase">
                  {TESTIMONIALS[1].name}
                </h4>
                <p className="text-gray-400 text-[9px] font-bold tracking-[0.2em] uppercase">
                  {TESTIMONIALS[1].role}
                </p>
              </div>
            </motion.div>

            {/* Bottom Right Card (Dark) */}
            <motion.div 
              className="flex-1 bg-[#1a1a1a] rounded-3xl p-8 flex flex-col justify-between group hover:shadow-2xl transition-shadow duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#cc0000] text-[#cc0000]" />
                  ))}
                </div>
                <p className="text-white/90 text-lg font-serif italic leading-relaxed mb-8">
                  "{TESTIMONIALS[2].quote}"
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-white font-black text-sm tracking-tight uppercase">
                  {TESTIMONIALS[2].name}
                </h4>
                <p className="text-white/40 text-[9px] font-bold tracking-[0.2em] uppercase">
                  {TESTIMONIALS[2].role}
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

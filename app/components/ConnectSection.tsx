"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

const SOCIAL_CARDS = [
  {
    id: "instagram",
    name: "Instagram",
    handle: "@vivapizzeriaandpastahouse",
    gradient: "from-[#f09433] via-[#e6683c] to-[#bc1888]",
    icon: (
      <svg className="w-8 h-8 text-[#bc1888]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    btnText: "FOLLOW US",
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: "Watch our kitchen in action",
    gradient: "from-[#000000] via-[#1a1a1a] to-[#00f2ea]/20",
    icon: (
      <svg className="w-8 h-8 fill-black" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.54 3.73-1.17 1.13-2.85 1.74-4.47 1.65-1.62-.09-3.15-.89-4.08-2.23-1.07-1.57-1.09-3.75-.12-5.41.95-1.63 2.78-2.59 4.65-2.45.31.02.62.07.93.16v4.11c-.55-.24-1.18-.31-1.77-.18-1.12.24-1.95 1.25-2.02 2.39-.08 1.41 1.15 2.68 2.56 2.6 1.09-.07 1.94-.97 2.02-2.05.02-3.1.01-6.2.01-9.31V0h-3.95z" />
      </svg>
    ),
    btnText: "WATCH NOW",
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "Join our local community",
    gradient: "from-[#1877F2] via-[#0c5dc7] to-[#05408f]",
    icon: (
      <svg className="w-8 h-8 text-[#1877F2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
    btnText: "LIKE PAGE",
  },
];

export default function ConnectAndSubscribe() {
  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Connect Header */}
        <div className="text-center mb-16 relative flex flex-col items-center">
          <p className="text-[#cc0000] text-[11px] font-bold tracking-[0.4em] uppercase mb-4">
            Join Our Community
          </p>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-2 tracking-tight">
            Connect With <span className="font-cursive text-[#cc0000] normal-case italic ml-2">Us</span>
          </h2>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {SOCIAL_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              className={`relative bg-gradient-to-br ${card.gradient} rounded-[40px] p-10 h-[400px] flex flex-col items-center justify-center text-center group overflow-hidden shadow-2xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* White Icon Circle */}
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                {card.icon}
              </div>

              <h3 className="text-white text-3xl font-serif mb-2">{card.name}</h3>
              <p className="text-white/80 text-sm mb-10 max-w-[180px] leading-relaxed">
                {card.handle}
              </p>

              <button className={`
                ${card.id === 'facebook' ? 'bg-white text-[#1877F2]' : 'bg-transparent border border-white/40 text-white hover:bg-white hover:text-black'}
                px-8 py-3 rounded-full text-[11px] font-bold tracking-[0.2em] transition-all duration-300
              `}>
                {card.btnText}
              </button>

              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Subscribe Banner */}
        <motion.div 
          className="bg-[#151515] rounded-[30px] p-8 md:p-16 relative overflow-hidden border border-white/5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
                Subscribe to Our <br />
                <span className="text-[#cc0000]">Special Offers</span>
              </h2>
              <p className="text-gray-400 font-serif italic text-lg">
                Sign up today for our newsletter and receive 15% OFF on your first purchase.
              </p>
            </div>

            <div className="w-full lg:w-auto min-w-[320px] md:min-w-[500px]">
              <div className="relative flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Type Your Email"
                  className="flex-1 bg-black/40 border border-white/10 rounded-xl px-6 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#cc0000]/50 transition-colors"
                />
                <button className="bg-[#cc0000] hover:bg-red-700 text-white font-bold px-10 py-5 rounded-xl transition-all flex items-center justify-center gap-2 tracking-widest uppercase text-sm shadow-xl">
                  SUBMIT <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Background Detail */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-[#cc0000]/5 blur-[120px] pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
}

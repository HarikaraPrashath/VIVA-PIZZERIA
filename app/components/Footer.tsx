"use client";

import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] pt-24 pb-8 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-black italic tracking-tighter">
              <span className="text-white">VIVA</span>
              <span className="text-[#cc0000]">PIZZERIA</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[280px] font-serif italic">
              Mastering the alchemy of wood-fired flames and hand-kneaded tradition since 1994.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#cc0000] hover:border-[#cc0000] transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#cc0000] hover:border-[#cc0000] transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#cc0000] hover:border-[#cc0000] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.54 3.73-1.17 1.13-2.85 1.74-4.47 1.65-1.62-.09-3.15-.89-4.08-2.23-1.07-1.57-1.09-3.75-.12-5.41.95-1.63 2.78-2.59 4.65-2.45.31.02.62.07.93.16v4.11c-.55-.24-1.18-.31-1.77-.18-1.12.24-1.95 1.25-2.02 2.39-.08 1.41 1.15 2.68 2.56 2.6 1.09-.07 1.94-.97 2.02-2.05.02-3.1.01-6.2.01-9.31V0h-3.95z"/></svg>
              </a>
            </div>
          </div>

          {/* Location Column */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-8">Location</h4>
            <div className="flex gap-4 text-gray-400">
              <MapPin className="text-[#cc0000] shrink-0" size={20} />
              <p className="text-sm leading-relaxed">
                158 O'Connor Dr.<br />
                East York, ON M4J 2S4
              </p>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-8">Contact</h4>
            <div className="flex flex-col gap-6 text-gray-400">
              <div className="flex gap-4 items-center">
                <Phone className="text-[#cc0000]" size={18} />
                <p className="text-sm">416-282-6886</p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="text-[#cc0000]" size={18} />
                <p className="text-sm">info@vivapizza.ca</p>
              </div>
            </div>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-8">Hours</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Mon</span>
                <span className="text-white font-medium">Closed</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Tue - Thu</span>
                <span className="text-white font-medium">4:00pm - 10:00pm</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Fri - Sun</span>
                <span className="text-white font-medium">12:00pm - 10:00pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="border-t border-white/10 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <button className="text-[#cc0000] text-sm font-bold tracking-[0.2em] uppercase flex items-center gap-2 group">
            Order Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <span className="text-white text-[10px] font-bold tracking-widest uppercase opacity-60">Order Pickup:</span>
            <div className="flex items-center gap-8">
              <span className="text-[#06C167] font-black text-lg tracking-tighter italic">Uber <span className="not-italic">Eats</span></span>
              <span className="text-[#FF3008] font-black text-lg tracking-tighter uppercase">Doordash</span>
              <span className="text-[#FF8200] font-black text-lg tracking-tighter uppercase">Skip<span className="text-xs normal-case align-top font-bold">The Dishes</span></span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-[10px] tracking-wider uppercase">
            © 2025 Viva Pizzeria. All rights reserved.
          </p>
          <p className="text-gray-600 text-[10px] tracking-wider uppercase">
            Custom website designed by <span className="text-white hover:text-[#cc0000] transition-colors cursor-pointer">Auroze</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

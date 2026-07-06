"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InteractiveLayout from "./InteractiveLayout";
import ReservationPanel from "./ReservationPanel";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import type { ReservationExperience, ReservationTable } from "./types";

const RESERVATIONS_API_PATH = "/api/reservations";

export default function ReserveClient() {
  const [reservationExperience, setReservationExperience] = useState<ReservationExperience | null>(null);
  const [selectedTableId, setSelectedTableId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBooking, setIsBooking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReservationExperience = async () => {
      try {
        const response = await fetch(RESERVATIONS_API_PATH, { cache: "no-store" });

        if (!response.ok) {
          throw new Error("Unable to load reservation data");
        }

        const data = await response.json() as ReservationExperience;
        setReservationExperience(data);
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : "Unable to load reservation data");
      } finally {
        setIsLoading(false);
      }
    };

    void loadReservationExperience();
  }, []);

  const handleSelectTable = (table: ReservationTable) => setSelectedTableId(table.id);

  const handleBookTable = async (tableId: string, name: string, phone: string, time: string) => {
    setIsBooking(true);
    setError(null);

    try {
      const response = await fetch(RESERVATIONS_API_PATH, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tableId, name, phone, time }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null) as { message?: string } | null;
        throw new Error(payload?.message || "Unable to book reservation");
      }

      const data = await response.json() as ReservationExperience;
      setReservationExperience(data);
    } catch (bookingError) {
      const message = bookingError instanceof Error ? bookingError.message : "Unable to book reservation";
      setError(message);
      throw new Error(message);
    } finally {
      setIsBooking(false);
    }
  };

  const selectedTable = reservationExperience?.tables.find((table) => table.id === selectedTableId) || null;

  return (
    <main className="relative w-full bg-[#05090d] text-white font-sans min-h-screen pt-24 flex flex-col justify-between">
      <Navbar isAnimatedIn={true} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-bold tracking-[0.25em] text-[#cc0000] uppercase block mb-3 font-mono"
          >
            Wood-Fired Dining Experience
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4 font-bebas"
          >
            Table Reservations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-gray-400 italic max-w-xl mx-auto leading-relaxed"
          >
            &quot;Reserve your exclusive spot directly on our live interactive dining room map and enjoy
            hot, gourmet pizzas straight from the wood fire.&quot;
          </motion.p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8 pb-6 border-b border-white/5 max-w-4xl mx-auto">
          {[
            { color: "bg-[#2ed573]", label: "Vacant" },
            { color: "bg-[#4cc9f0]", label: "Occupied" },
            { color: "bg-[#f7b731]", label: "Reserved" },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <span className={`w-5 h-3.5 rounded-sm ${color}`} />
              <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">{label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-3.5 rounded-sm bg-transparent border border-[#cc0000] shadow-[0_0_8px_rgba(204,0,0,0.8)]" />
            <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Selected</span>
          </div>
        </div>

        {error && (
          <div className="max-w-4xl mx-auto mb-6 rounded-2xl border border-[#cc0000]/30 bg-[#cc0000]/10 px-4 py-3 text-sm text-red-100">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 px-1">
              <span className="text-xs font-mono font-bold tracking-wider text-gray-500 uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#cc0000] animate-ping" />
                Live Restaurant Floor Plan
              </span>
              <div className="text-[11px] text-gray-400 flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-gray-500" />
                <span>Scroll horizontally on small screens</span>
              </div>
            </div>

            {reservationExperience && !isLoading ? (
              <InteractiveLayout
                floorPlan={reservationExperience.floorPlan}
                tables={reservationExperience.tables}
                selectedTableId={selectedTableId}
                onSelectTable={handleSelectTable}
              />
            ) : (
              <div className="h-[400px] w-full flex items-center justify-center bg-[#091118]/40 border border-white/5 rounded-3xl animate-pulse">
                <span className="text-sm text-gray-500">Loading Floor Plan...</span>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <ReservationPanel
              key={selectedTable?.id ?? "empty"}
              isSubmitting={isBooking}
              selectedTable={selectedTable}
              timeSlots={reservationExperience?.timeSlots ?? []}
              onBookTable={handleBookTable}
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

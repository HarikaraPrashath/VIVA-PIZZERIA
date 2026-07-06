"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Clock, User, Phone, CheckCircle2, AlertTriangle } from "lucide-react";
import type { ReservationTable } from "./types";

interface ReservationPanelProps {
  isSubmitting: boolean;
  selectedTable: ReservationTable | null;
  timeSlots: string[];
  onBookTable: (tableId: string, name: string, phone: string, time: string) => Promise<void>;
}

export default function ReservationPanel({
  isSubmitting,
  selectedTable,
  timeSlots,
  onBookTable,
}: ReservationPanelProps) {
  const defaultTimeSlot = timeSlots.includes("7:00 PM") ? "7:00 PM" : timeSlots[0] ?? "";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [timeSlot, setTimeSlot] = useState(defaultTimeSlot);
  const [isBookedSuccess, setIsBookedSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [bookingError, setBookingError] = useState<string | null>(null);

  if (!selectedTable) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-[#091118]/80 border border-white/5 rounded-3xl backdrop-blur-sm min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full bg-[#cc0000]/10 border border-[#cc0000]/30 flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-[#cc0000]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Select a Table</h3>
          <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
            Click on any table in the dining room map to view its availability and reserve your spot.
          </p>
        </motion.div>
      </div>
    );
  }

  const validateForm = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) {
      newErrors.name = "Full name is required";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setBookingError(null);
      await onBookTable(selectedTable.id, name, phone, timeSlot);
      setIsBookedSuccess(true);
    } catch (submitError) {
      setBookingError(submitError instanceof Error ? submitError.message : "Unable to book reservation");
    }
  };

  return (
    <div className="relative w-full h-full p-6 md:p-8 bg-[#091118]/90 border border-white/5 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col justify-between">
      <AnimatePresence mode="wait">
        {isBookedSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center py-10 flex-grow"
          >
            <div className="w-20 h-20 rounded-full bg-[#2ed573]/10 border border-[#2ed573]/40 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#2ed573]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Reservation Confirmed!</h3>
            <p className="text-sm text-gray-400 mb-6 max-w-sm">
              Your table <span className="text-white font-semibold">{selectedTable.id}</span> has been booked for{" "}
              <span className="text-white font-semibold">{name}</span> at{" "}
              <span className="text-[#f7b731] font-semibold">{timeSlot}</span>.
            </p>
            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 mb-8 text-left text-xs text-gray-300">
              <div className="flex justify-between mb-2 pb-2 border-b border-white/5">
                <span>Reservation Details</span>
                <span className="text-[#2ed573] font-bold">ACTIVE</span>
              </div>
              <div className="space-y-1">
                <p>Table ID: <strong className="text-white">{selectedTable.id}</strong> ({selectedTable.seats} seats)</p>
                <p>Guest Name: <strong className="text-white">{name}</strong></p>
                <p>Contact Phone: <strong className="text-white">{phone}</strong></p>
                <p>Scheduled Time: <strong className="text-[#f7b731]">{timeSlot}</strong></p>
              </div>
            </div>
            <p className="text-xs text-gray-500 italic">
              We look forward to serving you the finest wood-fired pizza!
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-full justify-between"
          >
            <div>
              {/* Header Info */}
              <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-wider flex items-center gap-2">
                    Table {selectedTable.id}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#cc0000]" />
                    Capacity: {selectedTable.seats} Seats
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full border ${
                    selectedTable.status === "vacant"
                      ? "bg-[#2ed573]/10 border-[#2ed573]/30 text-[#2ed573]"
                      : selectedTable.status === "reserved"
                      ? "bg-[#f7b731]/10 border-[#f7b731]/30 text-[#f7b731]"
                      : "bg-[#4cc9f0]/10 border-[#4cc9f0]/30 text-[#4cc9f0]"
                  }`}
                >
                  {selectedTable.status}
                </span>
              </div>

              {/* Status details & actions */}
              {selectedTable.status === "vacant" ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full bg-[#141d26] border ${
                          errors.name ? "border-red-500" : "border-white/10"
                        } rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#cc0000] focus:ring-1 focus:ring-[#cc0000]/50 transition-colors`}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="tel"
                        placeholder="+1 234 567 890"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full bg-[#141d26] border ${
                          errors.phone ? "border-red-500" : "border-white/10"
                        } rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#cc0000] focus:ring-1 focus:ring-[#cc0000]/50 transition-colors`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Select Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full bg-[#141d26] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#cc0000] focus:ring-1 focus:ring-[#cc0000]/50 transition-colors appearance-none cursor-pointer"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot} className="bg-[#091118]">
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !timeSlot}
                    className="w-full mt-6 bg-[#cc0000] hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 text-white font-bold py-3.5 px-6 rounded-xl uppercase tracking-widest text-xs transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(204,0,0,0.4)]"
                  >
                    {isSubmitting ? "Booking..." : "Confirm Reservation"}
                  </button>
                  {bookingError && <p className="text-red-500 text-xs text-center">{bookingError}</p>}
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="bg-[#cc0000]/5 border border-[#cc0000]/20 rounded-2xl p-4 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#cc0000] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Table Currently Unavailable</h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                        This table has already been occupied or reserved for a guest. Please select a vacant table (highlighted with green markers) to book.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#141d26] border border-white/5 rounded-2xl p-5 space-y-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Current Occupancy Details
                    </h4>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex justify-between items-center pb-2.5 border-b border-white/5">
                        <span className="text-gray-400 text-xs">Guest Name</span>
                        <span className="text-white font-semibold">{selectedTable.name}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2.5 border-b border-white/5">
                        <span className="text-gray-400 text-xs">Reservation Type</span>
                        <span
                          className={`font-semibold capitalize ${
                            selectedTable.status === "reserved" ? "text-[#f7b731]" : "text-[#4cc9f0]"
                          }`}
                        >
                          {selectedTable.status}
                        </span>
                      </div>
                      {selectedTable.status === "reserved" && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-xs">Arrival Time</span>
                          <span className="text-[#f7b731] font-semibold flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {selectedTable.time || "N/A"}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 text-[11px] text-gray-500 text-center leading-relaxed">
              For parties larger than 6, please call us directly at <span className="text-gray-400 font-semibold">+1 (555) VIVA-PIZZA</span> so we can custom arrange tables for you.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

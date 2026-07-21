"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CustomDatePicker } from "./CustomDatePicker";

interface BookingFormProps {
  roomName: string;
  price: number;
}

export default function BookingForm({ roomName, price }: BookingFormProps) {
  const t = useTranslations("booking"); // We might need to add some translations or just hardcode some for now
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }
    alert(`Booking Confirmed for ${roomName}!\nCheck-in: ${checkIn.toDateString()}\nCheck-out: ${checkOut.toDateString()}\nGuests: ${guests}\n\nThis is a demo.`);
  };

  return (
    <div className="bg-white p-10 md:p-12 rounded-none shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-smoke-light/50 sticky top-32">
      <h3 className="text-xs font-serif font-semibold text-charcoal mb-8 flex items-center gap-3 tracking-[0.2em] uppercase">
        <span className="w-8 h-[1px] bg-gold"></span>
        Reservation
      </h3>
      
      <div className="flex justify-between items-end mb-10 pb-8 border-b border-smoke-light/30">
        <div>
          <p className="text-[10px] font-semibold text-smoke-dark uppercase tracking-[0.2em] mb-2">Total Price</p>
          <p className="text-4xl font-serif font-bold text-gold">฿{price.toLocaleString()}</p>
        </div>
        <span className="text-sm text-smoke-dark font-medium">/ night</span>
      </div>

      <form onSubmit={handleBook} className="space-y-6">
        <CustomDatePicker 
          label="Check-in Date" 
          value={checkIn} 
          onChange={(date) => {
            setCheckIn(date);
            // Auto-update checkout if it's before new check-in
            if (checkOut && checkOut <= date) {
              const nextDay = new Date(date);
              nextDay.setDate(date.getDate() + 1);
              setCheckOut(nextDay);
            }
          }} 
        />
        
        <CustomDatePicker 
          label="Check-out Date" 
          value={checkOut} 
          onChange={setCheckOut}
          minDate={checkIn ? new Date(checkIn.getTime() + 86400000) : new Date(new Date().getTime() + 86400000)}
        />

        <div>
          <label className="block text-[10px] font-semibold text-smoke-dark uppercase tracking-[0.2em] mb-3">
            Guests
          </label>
          <select 
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full bg-ivory/50 border border-smoke-light rounded-none px-5 py-4 text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all appearance-none"
          >
            {[1, 2, 3, 4].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>

        <button 
          type="submit"
          className="w-full py-5 mt-6 bg-charcoal text-ivory rounded-none border border-charcoal font-semibold tracking-[0.2em] uppercase text-xs hover:bg-gold hover:border-gold hover:text-ivory transition-all duration-500 shadow-xl"
        >
          Book Now
        </button>
        
        <p className="text-center text-xs text-smoke-dark mt-4">
          You won't be charged yet.
        </p>
      </form>
    </div>
  );
}

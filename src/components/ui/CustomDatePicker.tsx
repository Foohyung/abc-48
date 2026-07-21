"use client";

import { useState, useRef, useEffect } from "react";

interface CustomDatePickerProps {
  label: string;
  value: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date;
}

export function CustomDatePicker({ label, value, onChange, minDate = new Date() }: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(value ? new Date(value) : new Date());
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleSelectDate = (day: number) => {
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    // Remove time for comparison
    const min = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
    
    if (selected >= min) {
      onChange(selected);
      setIsOpen(false);
    }
  };

  const formatDate = (d: Date | null) => {
    if (!d) return "Select date";
    return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-xs font-semibold text-smoke-dark uppercase tracking-wider mb-2">
        {label}
      </label>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-cream border rounded-none px-4 py-3 text-left transition-all duration-300 flex justify-between items-center ${
          isOpen ? "border-gold text-charcoal shadow-sm" : "border-smoke-light/50 text-charcoal/70 hover:border-smoke"
        }`}
      >
        <span className={value ? "text-charcoal font-medium" : "text-smoke"}>
          {formatDate(value)}
        </span>
        <svg className={`w-5 h-5 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-ivory border border-smoke-light/30 shadow-2xl z-50 p-4 rounded-xl animate-fade-in-up">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <button 
              type="button" 
              onClick={handlePrevMonth}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-cream text-charcoal transition-colors"
            >
              ←
            </button>
            <span className="font-serif font-semibold text-charcoal text-lg">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <button 
              type="button" 
              onClick={handleNextMonth}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-cream text-charcoal transition-colors"
            >
              →
            </button>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {dayNames.map(day => (
              <span key={day} className="text-xs font-semibold text-smoke-dark uppercase">{day}</span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dateToCheck = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
              const isPast = dateToCheck < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
              
              const isSelected = value && 
                value.getDate() === day && 
                value.getMonth() === currentMonth.getMonth() && 
                value.getFullYear() === currentMonth.getFullYear();

              return (
                <button
                  key={day}
                  type="button"
                  disabled={isPast}
                  onClick={() => handleSelectDate(day)}
                  className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full text-sm transition-all ${
                    isPast 
                      ? "text-smoke-light cursor-not-allowed" 
                      : isSelected 
                        ? "bg-gold text-ivory font-bold shadow-md shadow-gold/30" 
                        : "text-charcoal hover:bg-cream hover:text-gold"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

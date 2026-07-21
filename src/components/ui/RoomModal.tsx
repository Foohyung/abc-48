"use client";

import { useTranslations, useLocale } from "next-intl";
import { RoomType } from "@/data/rooms";
import { useEffect, useState } from "react";

interface RoomModalProps {
  room: RoomType | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function RoomModal({ room, isOpen, onClose }: RoomModalProps) {
  const t = useTranslations("rooms");
  const locale = useLocale() as "th" | "en";
  const [activeImage, setActiveImage] = useState(0);

  // Reset image index when room changes
  useEffect(() => {
    if (isOpen) setActiveImage(0);
  }, [isOpen, room]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !room) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-deep-charcoal/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-ivory w-full max-w-[95vw] xl:max-w-[1400px] h-[90vh] md:h-[85vh] rounded-none overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row animate-fade-in-up border border-smoke-light/30">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 md:top-6 md:right-6 z-[110] w-10 h-10 md:w-12 md:h-12 bg-white/70 backdrop-blur-md rounded-none border border-smoke-light flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-ivory transition-all duration-500 shadow-lg"
          aria-label={t("close")}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Gallery */}
        <div className="w-full md:w-[55%] h-[40vh] md:h-full relative bg-cream overflow-hidden group">
          <img 
            src={room.images[activeImage]} 
            alt={room.name[locale]} 
            className="w-full h-full object-cover transition-opacity duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.classList.add('bg-gradient-to-br', 'from-cream', 'to-smoke-light');
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          {/* Thumbnails */}
          {room.images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-start md:justify-center gap-2 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
              {room.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-12 md:w-20 md:h-14 shrink-0 snap-center rounded-none overflow-hidden border transition-all duration-500 ${
                    activeImage === idx ? "border-gold scale-110 shadow-xl" : "border-white/30 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="w-full md:w-[45%] p-6 sm:p-10 md:p-14 lg:p-20 overflow-y-auto h-full flex flex-col bg-ivory relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-transparent" />
          
          <span className="text-gold tracking-[0.3em] uppercase text-[10px] font-semibold mb-4 block">
            Signature Collection
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-4 tracking-tight leading-tight">{room.name[locale]}</h2>
          
          <div className="text-3xl font-serif font-bold text-gold mb-8 flex items-end gap-2">
            ฿{room.price.toLocaleString()} <span className="text-[10px] text-smoke-dark uppercase tracking-widest font-sans mb-1">{t("perNight")}</span>
          </div>
          
          <div className="flex gap-8 text-xs text-smoke-dark mb-8 pb-8 border-b border-smoke-light/30 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 border border-gold/30 flex items-center justify-center text-gold">📏</span> {room.size} {t("sqm")}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 border border-gold/30 flex items-center justify-center text-gold">👥</span> Max {room.maxGuests}
            </span>
          </div>

          <p className="text-smoke-dark leading-relaxed mb-10 text-sm font-light">
            {room.description[locale]}
          </p>

          <h4 className="text-xs font-serif font-semibold text-charcoal mb-6 flex items-center gap-3 tracking-[0.2em] uppercase">
            <span className="w-8 h-[1px] bg-gold"></span>
            {t("amenities")}
          </h4>
          
          <ul className="grid grid-cols-2 gap-y-4 gap-x-6 mb-12 flex-grow">
            {room.amenities[locale].map((amenity, idx) => (
              <li key={idx} className="flex items-center gap-3 text-smoke-dark text-xs tracking-wide">
                <div className="w-1.5 h-1.5 bg-gold shrink-0" />
                {amenity}
              </li>
            ))}
          </ul>
          
          <button 
            onClick={() => {
              onClose();
              window.location.href = `/${locale}/rooms/${room.id}`;
            }}
            className="w-full py-5 mt-auto bg-charcoal text-ivory rounded-none border border-charcoal font-semibold tracking-[0.2em] uppercase text-xs hover:bg-gold hover:border-gold hover:text-ivory transition-all duration-500 shadow-xl"
          >
            {t("viewDetails")}
          </button>
        </div>
      </div>
    </div>
  );
}

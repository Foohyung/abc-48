"use client";

import { useTranslations, useLocale } from "next-intl";
import { RoomType } from "@/data/rooms";
import { useState } from "react";

interface RoomCardProps {
  room: RoomType;
  onClick: () => void;
}

export default function RoomCard({ room, onClick }: RoomCardProps) {
  const t = useTranslations("rooms");
  const locale = useLocale() as "th" | "en";
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div 
      className="group bg-ivory overflow-hidden shadow-lg border border-smoke-light/20 cursor-pointer transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-gold/15 flex flex-col h-full relative"
      onClick={onClick}
    >
      {/* Image Container with Shimmer Fallback */}
      <div className="relative h-72 overflow-hidden bg-cream">
        {!imgLoaded && <div className="absolute inset-0 shimmer" />}
        <img 
          src={room.images[0]} 
          alt={room.name[locale]} 
          className={`w-full h-full object-cover transition-all duration-[1.2s] group-hover:scale-110 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImgLoaded(true)}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.classList.add('bg-gradient-to-br', 'from-cream', 'to-smoke-light');
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/90 via-deep-charcoal/20 to-transparent" />
        
        {/* Price Tag */}
        <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-ivory">
          <h3 className="text-xl font-serif font-semibold tracking-wide">
            {room.name[locale]}
          </h3>
          <div className="text-right">
            <span className="text-xl font-serif font-bold text-gold">฿{room.price.toLocaleString()}</span>
            <span className="text-[10px] ml-1 uppercase tracking-wider opacity-70">{t("perNight")}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex-grow flex flex-col">
        <div className="flex gap-6 text-xs text-smoke-dark mb-5 pb-5 border-b border-smoke-light/20 uppercase tracking-widest">
          <span className="flex items-center gap-1.5">
            📏 {room.size} {t("sqm")}
          </span>
          <span className="flex items-center gap-1.5">
            👥 Max {room.maxGuests} {t("guests")}
          </span>
        </div>
        
        <p className="text-smoke-dark text-sm leading-relaxed mb-7 flex-grow line-clamp-2">
          {room.description[locale]}
        </p>

        <button className="w-full py-3.5 border border-charcoal text-charcoal font-semibold tracking-[0.2em] uppercase text-[10px] transition-all duration-500 group-hover:bg-charcoal group-hover:text-ivory">
          {t("viewDetails")}
        </button>
      </div>
    </div>
  );
}

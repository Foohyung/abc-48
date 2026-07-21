"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { rooms, RoomType } from "@/data/rooms";
import RoomCard from "../ui/RoomCard";
import RoomModal from "../ui/RoomModal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RoomGallery() {
  const t = useTranslations("rooms");
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.fromTo(
      titleRef.current,
      { y: 60, opacity: 0, rotationX: -10 },
      { 
        y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { 
        scaleX: 1, duration: 1.5, ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          }
        }
      );
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="rooms" ref={sectionRef} className="py-28 bg-ivory relative">
      {/* Section Divider Top */}
      <div className="absolute top-0 left-0 w-full section-divider" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <span className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
            {t("title")}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-4 tracking-tight">
            Experience Comfort
          </h2>
          <p className="text-smoke-dark max-w-2xl mx-auto text-base">
            {t("subtitle")}
          </p>
          <div ref={lineRef} className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8 origin-center" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <div 
              key={room.id} 
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <RoomCard 
                room={room} 
                onClick={() => setSelectedRoom(room)} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Room Details Modal */}
      <RoomModal 
        room={selectedRoom} 
        isOpen={!!selectedRoom} 
        onClose={() => setSelectedRoom(null)} 
      />
    </section>
  );
}

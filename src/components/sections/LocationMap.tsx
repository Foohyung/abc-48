"use client";

import { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { hotelInfo } from "@/data/bookingApps";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LocationMap() {
  const t = useTranslations("location");
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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
    
    gsap.fromTo(
      mapRef.current,
      { x: -60, opacity: 0 },
      { 
        x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        }
      }
    );

    gsap.fromTo(
      infoRef.current,
      { x: 60, opacity: 0 },
      { 
        x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="location" ref={sectionRef} className="py-28 bg-cream overflow-hidden relative">
      {/* Section Divider Top */}
      <div className="absolute top-0 left-0 w-full section-divider" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <span className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
            {t("title")}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-4 tracking-tight">
            Find Us Easily
          </h2>
          <p className="text-smoke-dark max-w-2xl mx-auto text-base">
            {t("subtitle")}
          </p>
          <div ref={lineRef} className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8 origin-center" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Embed */}
          <div 
            ref={mapRef}
            className="w-full h-[500px] overflow-hidden shadow-2xl shadow-smoke-light/30 border border-smoke-light/20 relative group"
          >
            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay pointer-events-none group-hover:bg-transparent transition-colors duration-700 z-10" />
            <iframe 
              src={hotelInfo.googleMapsEmbed}
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(20%) sepia(10%) contrast(110%)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-0 transition-all duration-700 group-hover:scale-105"
            ></iframe>
          </div>

          {/* Location Info */}
          <div ref={infoRef} className="flex flex-col gap-10 bg-ivory p-10 md:p-14 shadow-xl shadow-smoke-light/20 border border-smoke-light/20 relative">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-[2px] border-l-[2px] border-gold/30 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[2px] border-r-[2px] border-gold/30 pointer-events-none" />

            <div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-4 flex items-center gap-3">
                <span className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold">
                  📍
                </span>
                {t("address")}
              </h3>
              <p className="text-smoke-dark leading-relaxed pl-13 text-sm">
                {t("addressText")}
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-smoke-light/40 to-transparent" />

            <div>
              <h3 className="text-lg font-serif font-semibold text-charcoal mb-6 flex items-center gap-3">
                <span className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold">
                  🚶
                </span>
                {t("nearby")}
              </h3>
              <ul className="space-y-4 pl-13">
                {["bts", "emporium", "benchasiri", "hospital"].map((place) => (
                  <li key={place} className="flex items-center gap-3 text-smoke-dark text-sm">
                    <div className="w-1.5 h-1.5 bg-gold" />
                    {t(`nearbyPlaces.${place}`)}
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href={hotelInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-4 bg-transparent border border-gold text-gold font-semibold tracking-[0.15em] uppercase text-xs text-center hover:bg-gold hover:text-ivory transition-colors duration-500"
            >
              {t("getDirections")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

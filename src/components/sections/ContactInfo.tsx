"use client";

import { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { hotelInfo } from "@/data/bookingApps";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactInfo() {
  const t = useTranslations("contact");
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      containerRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
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
    <section id="contact" ref={sectionRef} className="py-28 bg-cream relative">
      {/* Section Divider Top */}
      <div className="absolute top-0 left-0 w-full section-divider" />

      <div className="max-w-4xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
            {t("title")}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4 tracking-tight">
            {t("subtitle")}
          </h2>
          <div ref={lineRef} className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6 origin-center" />
        </div>

        <div ref={containerRef} className="bg-ivory p-10 md:p-16 shadow-2xl shadow-smoke-light/20 border border-smoke-light/20 relative overflow-hidden">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-[2px] border-l-[2px] border-gold/30 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-[2px] border-r-[2px] border-gold/30 pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <a href={`tel:${hotelInfo.phone}`} className="flex items-start gap-5 group">
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-xl group-hover:bg-gold group-hover:text-ivory transition-all duration-500">
                  📞
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-smoke-dark uppercase tracking-[0.2em] mb-1">{t("phone")}</h4>
                  <p className="text-lg font-serif font-semibold text-charcoal group-hover:text-gold transition-colors">{hotelInfo.phone}</p>
                </div>
              </a>
              
              <a href={`mailto:${hotelInfo.email}`} className="flex items-start gap-5 group">
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-xl group-hover:bg-gold group-hover:text-ivory transition-all duration-500">
                  📧
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-smoke-dark uppercase tracking-[0.2em] mb-1">{t("email")}</h4>
                  <p className="text-lg font-serif font-semibold text-charcoal group-hover:text-gold transition-colors">{hotelInfo.email}</p>
                </div>
              </a>
              
              <a href={`https://line.me/R/ti/p/${hotelInfo.line}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 group">
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-xl group-hover:bg-[#00B900] group-hover:text-ivory transition-all duration-500">
                  💬
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-smoke-dark uppercase tracking-[0.2em] mb-1">{t("line")}</h4>
                  <p className="text-lg font-serif font-semibold text-charcoal group-hover:text-[#00B900] transition-colors">{hotelInfo.line}</p>
                </div>
              </a>
            </div>

            {/* Check-in info & Social */}
            <div className="space-y-10 md:pl-12 md:border-l border-smoke-light/30">
              <div>
                <h4 className="text-xs font-semibold text-smoke-dark uppercase tracking-[0.2em] mb-4">{t("checkIn")} / {t("checkOut")}</h4>
                <div className="flex gap-6">
                  <div className="bg-cream px-6 py-4 border border-smoke-light/20">
                    <span className="block text-[10px] text-smoke uppercase tracking-widest mb-1">IN</span>
                    <span className="text-2xl font-serif font-bold text-charcoal">{hotelInfo.checkIn}</span>
                  </div>
                  <div className="bg-cream px-6 py-4 border border-smoke-light/20">
                    <span className="block text-[10px] text-smoke uppercase tracking-widest mb-1">OUT</span>
                    <span className="text-2xl font-serif font-bold text-charcoal">{hotelInfo.checkOut}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-smoke-dark uppercase tracking-[0.2em] mb-5">{t("followUs")}</h4>
                <div className="flex gap-4">
                  <a href={hotelInfo.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-smoke-light flex items-center justify-center text-charcoal hover:border-gold hover:text-gold hover:bg-cream transition-all duration-300">
                    f
                  </a>
                  <a href={hotelInfo.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-smoke-light flex items-center justify-center text-charcoal hover:border-gold hover:text-gold hover:bg-cream transition-all duration-300">
                    ig
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { bookingApps } from "@/data/bookingApps";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BookingLinks() {
  const t = useTranslations("booking");
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

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
        { y: 60, opacity: 0, rotateY: -15 },
        { 
          y: 0, opacity: 1, rotateY: 0, duration: 1, ease: "power3.out",
          delay: index * 0.12,
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
    <section id="booking" ref={sectionRef} className="py-28 bg-ivory relative overflow-hidden">
      {/* Section Divider Top */}
      <div className="absolute top-0 left-0 w-full section-divider" />
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/[0.05] rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-20">
          <span className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
            {t("title")}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-4 tracking-tight">
            {t("subtitle")}
          </h2>
          <div ref={lineRef} className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6 origin-center" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 perspective-1000">
          {bookingApps.map((app, index) => (
            <a
              key={app.id}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group block relative h-48 md:h-56 overflow-hidden border border-smoke-light/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-gold/15 hover:border-gold/30 bg-white/70 backdrop-blur-md"
            >
              {/* Glowing edge effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
              </div>
              
              <div className="relative h-full flex flex-col items-center justify-center p-6">
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 mb-5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                  style={{ color: app.color }}
                >
                  <span className="text-3xl md:text-4xl font-serif font-bold">{app.name.charAt(0)}</span>
                </div>
                <span className="text-charcoal font-semibold text-center text-sm tracking-wide group-hover:text-gold transition-colors duration-300">
                  {app.name}
                </span>
                <span className="text-xs text-smoke-dark mt-2 uppercase tracking-widest group-hover:text-charcoal transition-colors">Book Now</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

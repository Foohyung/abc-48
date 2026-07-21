"use client";

import { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero3D() {
  const t = useTranslations("hero");
  const contentRef = useRef<HTMLDivElement>(null);

  const bgRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement | null)[]>([]);

  const scrollToRooms = () => {
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!contentRef.current || !bgRef.current) return;
    
    // Ken Burns effect (slow zoom in)
    gsap.fromTo(
      bgRef.current,
      { scale: 1 },
      { scale: 1.15, duration: 25, ease: "none", repeat: -1, yoyo: true }
    );
    
    // Luxury Text Reveal (sliding up from a mask)
    gsap.fromTo(
      textRefs.current,
      { y: 60, opacity: 0, rotationX: -15 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.5, stagger: 0.15, ease: "power4.out", delay: 0.2 }
    );
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20 bg-ivory">
      {/* High Quality Background Image with Ken Burns Target */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat w-[110%] h-[110%] -left-[5%] -top-[5%]"
        style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
      />
      
      {/* Overlay gradient for text readability and transition to next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/90 via-ivory/30 to-cream pointer-events-none z-0" />
      
      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center p-10 md:p-16 mt-12 perspective-1000"
      >
        <span ref={el => { textRefs.current[0] = el }} className="text-xs md:text-sm font-semibold tracking-[0.4em] text-gold uppercase mb-6 block drop-shadow-md">
          Welcome to
        </span>
        
        <h1 ref={el => { textRefs.current[1] = el }} className="text-6xl md:text-8xl lg:text-[7rem] font-serif text-charcoal mb-6 tracking-tight drop-shadow-sm">
          ABC@48
        </h1>
        
        <h2 ref={el => { textRefs.current[2] = el }} className="text-2xl md:text-4xl text-smoke-dark mb-10 font-serif italic font-light drop-shadow-sm tracking-wider">
          {t("subtitle")}
        </h2>
        
        <p ref={el => { textRefs.current[3] = el }} className="text-base md:text-lg text-smoke-dark max-w-2xl mb-12 leading-relaxed font-light">
          {t("tagline")}
        </p>
        
        <div ref={el => { textRefs.current[4] = el }} className="flex flex-col sm:flex-row gap-6 mt-4">
          <MagneticButton 
            onClick={scrollToRooms}
            className="px-12 py-5 bg-gold text-ivory rounded-none font-semibold tracking-[0.2em] uppercase text-xs hover:bg-charcoal hover:text-ivory transition-colors duration-500 shadow-xl border border-transparent hover:border-gold"
          >
            {t("cta")}
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 opacity-70 animate-pulse">
        <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal/70 font-semibold">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function Experiences() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  // Use a fallback text instead of translations to keep it simple if translations aren't set up yet
  const title = "Experiences";
  const subtitle = "A Sanctuary of Senses";

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    // Animate title
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Parallax effect for images
    imageRefs.current.forEach((img, i) => {
      if (img) {
        gsap.fromTo(img, 
          { yPercent: -10, scale: 1.1 },
          { 
            yPercent: 10,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      }
    });

  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-cream relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full section-divider" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div ref={titleRef} className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold mb-6 block">
            {title}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6 tracking-tight">
            {subtitle}
          </h2>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent mx-auto mt-8" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          
          {/* Item 1: Dining */}
          <div className="order-2 lg:order-1 space-y-8">
            <h3 className="text-3xl font-serif text-charcoal tracking-wide">Culinary Excellence</h3>
            <p className="text-smoke-dark leading-relaxed font-light text-lg">
              Indulge in a symphony of flavors at our signature ocean-view restaurant. Sourced from local artisans and masterfully crafted by our executive chefs, every dish is an exploration of taste and presentation, served in a bright, elegant atmosphere.
            </p>
            <button className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal border-b border-gold pb-1 hover:text-gold transition-colors">
              Explore Dining
            </button>
          </div>
          
          <div className="order-1 lg:order-2 relative h-[50vh] lg:h-[70vh] overflow-hidden group">
            <img 
              ref={el => { imageRefs.current[0] = el }}
              src="/images/exp_dining.png" 
              alt="Fine Dining" 
              className="absolute inset-0 w-full h-[120%] object-cover object-center -top-[10%]"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 border border-smoke-light/30 z-10 pointer-events-none" />
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Item 2: Spa */}
          <div className="relative h-[50vh] lg:h-[70vh] overflow-hidden group">
            <img 
              ref={el => { imageRefs.current[1] = el }}
              src="/images/exp_spa.png" 
              alt="Wellness Spa" 
              className="absolute inset-0 w-full h-[120%] object-cover object-center -top-[10%]"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 border border-smoke-light/30 z-10 pointer-events-none" />
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-serif text-charcoal tracking-wide">Holistic Sanctuary</h3>
            <p className="text-smoke-dark leading-relaxed font-light text-lg">
              Disconnect from the world and reconnect with yourself. Our award-winning spa offers bespoke wellness journeys in a serene, minimalist environment designed to restore balance to your mind, body, and spirit.
            </p>
            <button className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal border-b border-gold pb-1 hover:text-gold transition-colors">
              View Spa Menu
            </button>
          </div>
          
        </div>

      </div>
      
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full section-divider transform rotate-180" />
    </section>
  );
}

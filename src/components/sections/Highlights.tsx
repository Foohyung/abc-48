"use client";

import { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Highlights() {
  const t = useTranslations("highlights");
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Masked text reveal for title
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

    // Gold line grows from center
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

    // Stagger animation for cards with scale
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 80, opacity: 0, scale: 0.95 },
        { 
          y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out",
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

  const features = [
    {
      id: "pool",
      icon: "🏊‍♀️",
      title: t("pool.title"),
      desc: t("pool.desc"),
    },
    {
      id: "restaurant",
      icon: "🍽️",
      title: t("restaurant.title"),
      desc: t("restaurant.desc"),
    },
    {
      id: "spa",
      icon: "💆‍♀️",
      title: t("spa.title"),
      desc: t("spa.desc"),
    },
    {
      id: "gym",
      icon: "🏋️‍♂️",
      title: t("gym.title"),
      desc: t("gym.desc"),
    },
  ];

  return (
    <section id="highlights" ref={sectionRef} className="py-28 bg-cream relative z-10">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[400px] h-[400px] bg-smoke-light/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-20">
          <span className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
            {t("title")}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-6 tracking-tight">
            {t("subtitle")}
          </h2>
          <div ref={lineRef} className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6 origin-center" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group bg-ivory p-10 border border-smoke-light/20 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-gold/10 hover:border-gold/30 relative overflow-hidden"
            >
              {/* Gold corner accent on hover */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[50px] border-t-transparent border-r-[50px] border-r-transparent group-hover:border-t-gold/20 group-hover:border-r-gold/20 transition-all duration-700" />
              
              <div className="w-16 h-16 flex items-center justify-center text-4xl mb-8 relative">
                <div className="absolute inset-0 bg-gold/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                <span className="relative z-10">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-charcoal mb-3 tracking-wide">
                {feature.title}
              </h3>
              <div className="w-8 h-[1px] bg-gold mb-4 transition-all duration-500 group-hover:w-12" />
              <p className="text-smoke-dark text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

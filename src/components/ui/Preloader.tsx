"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
        document.body.style.overflow = "unset";
      }
    });

    // Animate the logo text in
    tl.fromTo(
      ".preloader-text span",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.5 }
    )
    .to(".preloader-text span", {
      opacity: 0,
      y: -50,
      duration: 0.8,
      stagger: 0.05,
      ease: "power3.in",
      delay: 0.5
    })
    // Slide the preloader screen up
    .to(".preloader-container", {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut"
    });

  }, []);

  if (!isLoading) return null;

  return (
    <div className="preloader-container fixed inset-0 z-[9999] bg-ivory flex flex-col items-center justify-center">
      <div className="overflow-hidden mb-12">
        <h1 className="preloader-text text-4xl md:text-6xl font-serif text-charcoal tracking-[0.3em] flex gap-2">
          {"ABC@48".split("").map((char, idx) => (
            <span key={idx} className="inline-block">{char}</span>
          ))}
        </h1>
      </div>
      
      {/* Loading line */}
      <div className="w-48 h-[1px] bg-smoke-light overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full bg-gold animate-[loadingLine_2s_ease-in-out_infinite]" />
      </div>
      
      <style jsx>{`
        @keyframes loadingLine {
          0% { width: 0; left: 0; }
          50% { width: 100%; left: 0; }
          100% { width: 0; left: 100%; }
        }
      `}</style>
    </div>
  );
}

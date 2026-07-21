"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop devices
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024) return;
    setIsVisible(true);

    const cursor = document.getElementById("custom-cursor");
    const dot = document.getElementById("custom-cursor-dot");
    if (!cursor || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Instantly move the small dot
      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Smoothly lag the outer ring
    const ticker = gsap.ticker.add(() => {
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.2,
        ease: "power2.out"
      });
    });

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.tagName === "BUTTON" || 
                          target.tagName === "A" || 
                          target.closest("button") || 
                          target.closest("a") ||
                          target.classList.contains("clickable");
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      gsap.ticker.remove(ticker);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small instant dot */}
      <div 
        id="custom-cursor-dot" 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{ opacity: isHovered ? 0 : 1 }}
      />
      {/* Smooth lagging ring */}
      <div 
        id="custom-cursor" 
        className={`fixed top-0 left-0 w-10 h-10 rounded-full border border-gold pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 flex items-center justify-center ${
          isHovered ? "scale-150 bg-gold/10 backdrop-blur-[2px] border-gold/50" : "scale-100 bg-transparent"
        }`}
      />
    </>
  );
}

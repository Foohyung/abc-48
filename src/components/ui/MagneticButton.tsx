"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function MagneticButton({ children, className, ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const hoverConfig = {
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      // Calculate mouse position relative to the center of the button
      const x = (e.clientX - (left + width / 2)) * 0.4;
      const y = (e.clientY - (top + height / 2)) * 0.4;
      
      gsap.to(button, {
        x,
        y,
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, hoverConfig);
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button ref={buttonRef} className={className} {...props}>
      {children}
    </button>
  );
}

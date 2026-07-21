"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = () => {
    const newLocale = locale === "th" ? "en" : "th";
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: t("rooms"), id: "rooms" },
    { label: t("location"), id: "location" },
    { label: t("booking"), id: "booking" },
    { label: t("contact"), id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 border border-gold flex items-center justify-center text-gold font-serif font-bold text-lg bg-white/50 transition-transform group-hover:scale-110">48</div>
          <span
            className="text-xl font-serif font-semibold text-charcoal tracking-wider transition-colors"
          >
            ABC@48
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-charcoal tracking-wide transition-all hover:text-gold relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          {/* Language Switcher */}
          <button
            onClick={switchLocale}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-semibold transition-all border border-smoke-light text-charcoal hover:border-gold hover:text-gold"
          >
            <span className="text-base">{locale === "th" ? "🇹🇭" : "🇬🇧"}</span>
            {t("language")}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`w-6 h-[1.5px] transition-all bg-charcoal ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[1.5px] transition-all bg-charcoal ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[1.5px] transition-all bg-charcoal ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass mx-4 mt-2 rounded-2xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-charcoal text-sm font-medium py-2 hover:text-gold transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={switchLocale}
            className="flex items-center gap-2 text-sm font-medium py-2 text-charcoal hover:text-gold transition-colors"
          >
            <span>{locale === "th" ? "🇹🇭" : "🇬🇧"}</span>
            {t("language")}
          </button>
        </div>
      </div>
    </nav>
  );
}

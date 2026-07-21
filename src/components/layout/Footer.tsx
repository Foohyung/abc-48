"use client";

import { useTranslations } from "next-intl";
import { hotelInfo } from "@/data/bookingApps";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-cream text-smoke-dark relative">
      {/* Gold divider */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-gold flex items-center justify-center text-gold font-serif font-bold text-lg bg-white/50">
                48
              </div>
              <span className="text-xl font-serif font-semibold text-charcoal tracking-wider">
                ABC@48
              </span>
            </div>
            <p className="text-smoke-dark text-sm leading-relaxed mb-8">
              {t("description")}
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href={hotelInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-smoke-light flex items-center justify-center text-smoke-dark hover:border-gold hover:text-gold hover:bg-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={hotelInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-smoke-light flex items-center justify-center text-smoke-dark hover:border-gold hover:text-gold hover:bg-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={`https://line.me/R/ti/p/${hotelInfo.line}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-smoke-light flex items-center justify-center text-smoke-dark hover:border-gold hover:text-gold hover:bg-white transition-all duration-300"
                aria-label="LINE"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.864c.018-.256.048-.47.048-.697 0-4.637-4.653-8.417-10.366-8.417C3.335.75-1.318 4.53-1.318 9.167c0 4.287 3.88 7.88 9.123 8.347.357.077.843.236.966.542.11.276.072.708.035.988l-.156.938c-.048.284-.22 1.108.97.604 1.189-.504 6.42-3.784 8.76-6.477 1.615-1.77 2.385-3.57 2.385-5.595l-.004-.65zM7.878 12.06H6.073a.413.413 0 01-.413-.413V7.9a.413.413 0 01.826 0v3.334h1.392a.413.413 0 010 .826zm2.014-.413a.413.413 0 01-.826 0V7.9a.413.413 0 01.826 0v3.747zm4.053 0a.413.413 0 01-.738.256L11.29 9.35v2.297a.413.413 0 01-.826 0V7.9a.413.413 0 01.738-.256l1.917 2.553V7.9a.413.413 0 01.826 0v3.747zm3.348-2.924a.413.413 0 010 .826h-1.392v.685h1.392a.413.413 0 010 .826H15.5a.413.413 0 01-.413-.413V7.9a.413.413 0 01.413-.413h1.805a.413.413 0 010 .826H15.5v.685h1.793z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-charcoal font-serif font-semibold mb-6 text-xs uppercase tracking-[0.2em]">
              {t("quickLinks")}
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { label: nav("rooms"), id: "rooms" },
                { label: nav("location"), id: "location" },
                { label: nav("booking"), id: "booking" },
                { label: nav("contact"), id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-smoke-dark text-sm hover:text-gold transition-colors text-left tracking-wide"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-charcoal font-serif font-semibold mb-6 text-xs uppercase tracking-[0.2em]">
              {t("contactInfo")}
            </h4>
            <div className="flex flex-col gap-4 text-sm text-smoke-dark">
              <a
                href={`tel:${hotelInfo.phone}`}
                className="hover:text-gold transition-colors flex items-center gap-3 tracking-wide"
              >
                <span>📞</span> {hotelInfo.phone}
              </a>
              <a
                href={`mailto:${hotelInfo.email}`}
                className="hover:text-gold transition-colors flex items-center gap-3 tracking-wide"
              >
                <span>📧</span> {hotelInfo.email}
              </a>
              <span className="flex items-center gap-3 tracking-wide">
                <span>💬</span> LINE: {hotelInfo.line}
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-smoke-light/50 text-center text-xs text-smoke-dark tracking-wider">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Outfit, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ABC@48 Ladprao | Where Elegance Meets Comfort",
  description:
    "Experience unparalleled luxury at ABC@48 Ladprao in the heart of Bangkok. Premium rooms, world-class amenities, and exceptional service.",
  keywords: ["hotel", "bangkok", "luxury", "abc@48 ladprao", "โรงแรม", "กรุงเทพ"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

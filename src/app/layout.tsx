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
  title: "The Ivory Grand Hotel | Where Elegance Meets Comfort",
  description:
    "Experience unparalleled luxury at The Ivory Grand Hotel in the heart of Bangkok. Premium rooms, world-class amenities, and exceptional service.",
  keywords: ["hotel", "bangkok", "luxury", "ivory grand", "โรงแรม", "กรุงเทพ"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

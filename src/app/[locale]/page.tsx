import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import RoomGallery from "@/components/sections/RoomGallery";
import Experiences from "@/components/sections/Experiences";
import LocationMap from "@/components/sections/LocationMap";
import BookingLinks from "@/components/sections/BookingLinks";
import ContactInfo from "@/components/sections/ContactInfo";
import Preloader from "@/components/ui/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Highlights />
        <Experiences />
        <RoomGallery />
        <LocationMap />
        <BookingLinks />
        <ContactInfo />
      </main>
      
      <Footer />
    </>
  );
}

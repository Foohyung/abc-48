import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { rooms } from "@/data/rooms";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/ui/BookingForm";

export async function generateStaticParams() {
  return rooms.flatMap((room) => [
    { locale: "en", id: room.id },
    { locale: "th", id: room.id },
  ]);
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const room = rooms.find((r) => r.id === id);

  if (!room) {
    notFound();
  }

  // Define locale type for TS index signature
  const currentLocale = locale as "th" | "en";
  const t = await getTranslations({ locale, namespace: "rooms" });

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-ivory pb-24">
        {/* Hero Image */}
        <div className="w-full h-[70vh] md:h-[80vh] relative mb-24">
          <img 
            src={room.images[0]} 
            alt={room.name[currentLocale]} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 mt-20">
            <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold mb-6 block drop-shadow-md">
              Signature Collection
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-white drop-shadow-lg tracking-tight">
              {room.name[currentLocale]}
            </h1>
            <div className="w-[1px] h-24 bg-gradient-to-b from-gold to-transparent mt-12 animate-pulse" />
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 xl:grid-cols-3 gap-20">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-20">
            
            {/* Highlights */}
            <div className="flex gap-12 pb-12 border-b border-smoke-light/30">
              <div className="flex flex-col">
                <span className="text-smoke-dark uppercase text-[10px] tracking-[0.2em] mb-2 font-semibold">Size</span>
                <span className="text-charcoal font-serif text-3xl">{room.size} {t("sqm")}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-smoke-dark uppercase text-[10px] tracking-[0.2em] mb-2 font-semibold">Capacity</span>
                <span className="text-charcoal font-serif text-3xl">Max {room.maxGuests}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-sm font-serif text-charcoal mb-8 tracking-[0.3em] uppercase flex items-center gap-4">
                <span className="w-12 h-[1px] bg-gold" />
                About the Room
              </h2>
              <p className="text-xl text-smoke-dark leading-[2] font-light max-w-3xl">
                {room.description[currentLocale]}
              </p>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-sm font-serif text-charcoal mb-8 tracking-[0.3em] uppercase flex items-center gap-4">
                <span className="w-12 h-[1px] bg-gold" />
                Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {room.images.map((img, idx) => (
                  <div key={idx} className="relative overflow-hidden group">
                    <img 
                      src={img}
                      alt={`${room.name[currentLocale]} View ${idx + 1}`}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-sm font-serif text-charcoal mb-8 tracking-[0.3em] uppercase flex items-center gap-4">
                <span className="w-12 h-[1px] bg-gold" />
                Amenities
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                {room.amenities[currentLocale].map((amenity, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-smoke-dark text-sm tracking-wide">
                    <div className="w-1.5 h-1.5 bg-gold shrink-0" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies & Info */}
            <div>
              <h2 className="text-sm font-serif text-charcoal mb-8 tracking-[0.3em] uppercase flex items-center gap-4">
                <span className="w-12 h-[1px] bg-gold" />
                {currentLocale === "th" ? "นโยบายและข้อมูลเพิ่มเติม" : "Policies & Info"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 border border-smoke-light/30 bg-white">
                <div>
                  <h3 className="font-semibold text-charcoal mb-4 tracking-wider uppercase text-xs">
                    {currentLocale === "th" ? "เวลาเช็คอิน / เช็คเอาท์" : "Check-in / Check-out"}
                  </h3>
                  <ul className="space-y-3 text-smoke-dark text-sm">
                    <li><span className="font-medium text-gold">{currentLocale === "th" ? "เช็คอิน:" : "Check-in:"}</span> {currentLocale === "th" ? "ตั้งแต่ 14:00 น." : "From 14:00"}</li>
                    <li><span className="font-medium text-gold">{currentLocale === "th" ? "เช็คเอาท์:" : "Check-out:"}</span> {currentLocale === "th" ? "ภายใน 12:00 น." : "Until 12:00"}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-4 tracking-wider uppercase text-xs">
                    {currentLocale === "th" ? "นโยบายที่พัก" : "Hotel Policies"}
                  </h3>
                  <ul className="space-y-3 text-smoke-dark text-sm">
                    <li>• {currentLocale === "th" ? "ห้องพักปลอดบุหรี่ทั้งหมด" : "100% Non-smoking rooms"}</li>
                    <li>• {currentLocale === "th" ? "ไม่อนุญาตให้นำสัตว์เลี้ยงเข้าพัก" : "Pets are not allowed"}</li>
                    <li>• {currentLocale === "th" ? "มีบริการที่จอดรถฟรี" : "Free parking available"}</li>
                    <li>• {currentLocale === "th" ? "แผนกต้อนรับบริการ 24 ชั่วโมง" : "24-hour Front Desk"}</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Booking Form */}
          <div className="xl:col-span-1">
            <BookingForm roomName={room.name[currentLocale]} price={room.price} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

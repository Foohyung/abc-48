export type BookingApp = {
  id: string;
  name: string;
  url: string;
  color: string;
  logo: string;
};

export const bookingApps: BookingApp[] = [
  {
    id: "agoda",
    name: "Agoda",
    url: "https://www.agoda.com",
    color: "#5392F9",
    logo: "/images/booking/agoda.svg",
  },
  {
    id: "booking",
    name: "Booking.com",
    url: "https://www.booking.com",
    color: "#003580",
    logo: "/images/booking/booking.svg",
  },
  {
    id: "traveloka",
    name: "Traveloka",
    url: "https://www.traveloka.com",
    color: "#0194F3",
    logo: "/images/booking/traveloka.svg",
  },
  {
    id: "expedia",
    name: "Expedia",
    url: "https://www.expedia.com",
    color: "#FBCE04",
    logo: "/images/booking/expedia.svg",
  },
];

export const hotelInfo = {
  name: "ABC@48 Ladprao",
  phone: "+66 2 123 4567",
  email: "info@ivorygrand.com",
  line: "@ivorygrand",
  facebook: "https://facebook.com/ivorygrand",
  instagram: "https://instagram.com/ivorygrandhotel",
  checkIn: "14:00",
  checkOut: "12:00",
  googleMapsEmbed:
    "https://www.google.com/maps/place/ABC@48/@13.7931491,100.5844175,17z/data=!3m1!4b1!4m9!3m8!1s0x30e29d07c11bd547:0x56cc5187f6176f4!5m2!4m1!1i2!8m2!3d13.7931491!4d100.5844175!16s%2Fg%2F11t633v5cg!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",
  googleMapsLink: "https://maps.app.goo.gl/qpWtcPKHVugqmV7V6?g_st=al",
};

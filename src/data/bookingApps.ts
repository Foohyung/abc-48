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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.7631099089986!2d100.5844175!3d13.793149099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d07c11bd547%3A0x56cc5187f6176f4!2sABC%4048!5e0!3m2!1sth!2sth!4v1784624081096!5m2!1sth!2sth",
  googleMapsLink: "https://maps.app.goo.gl/qpWtcPKHVugqmV7V6?g_st=al",
};

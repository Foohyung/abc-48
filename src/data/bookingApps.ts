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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.6097755283035!2d100.56724!3d13.730493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee109de4035%3A0x41c1e70e9b5f2c0!2sSukhumvit%20Road!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth",
  googleMapsLink: "https://maps.google.com/?q=13.730493,100.56724",
};

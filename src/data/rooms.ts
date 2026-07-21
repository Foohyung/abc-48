export type RoomType = {
  id: string;
  name: { th: string; en: string };
  description: { th: string; en: string };
  price: number;
  size: number;
  maxGuests: number;
  amenities: { th: string[]; en: string[] };
  images: string[];
};

export const rooms: RoomType[] = [
  {
    id: "deluxe",
    name: {
      th: "ห้องดีลักซ์",
      en: "Deluxe Room",
    },
    description: {
      th: "ห้องพักสไตล์โมเดิร์น ตกแต่งอย่างหรูหรา พร้อมวิวเมืองที่สวยงาม เหมาะสำหรับการพักผ่อนแบบส่วนตัว",
      en: "Modern-style room, luxuriously decorated with beautiful city views. Perfect for a private retreat.",
    },
    price: 2500,
    size: 32,
    maxGuests: 2,
    amenities: {
      th: ["WiFi ฟรี", "ทีวี 43 นิ้ว", "มินิบาร์", "เครื่องชงกาแฟ", "เซฟนิรภัย", "ฝักบัว Rain Shower"],
      en: ["Free WiFi", '43" Smart TV', "Minibar", "Coffee Machine", "In-room Safe", "Rain Shower"],
    },
    images: ["/images/rooms/deluxe_new.png", "/images/rooms/deluxe-2.jpg"],
  },
  {
    id: "superior",
    name: {
      th: "ซูพีเรียร์ สวีท",
      en: "Superior Suite",
    },
    description: {
      th: "ห้องสวีทกว้างขวาง พร้อมอ่างอาบน้ำและวิวเมืองแบบพาโนรามา มอบความสะดวกสบายระดับพรีเมียม",
      en: "Spacious suite with bathtub and panoramic city views. Delivering premium comfort.",
    },
    price: 4200,
    size: 48,
    maxGuests: 2,
    amenities: {
      th: ["WiFi ฟรี", "ทีวี 55 นิ้ว", "มินิบาร์", "อ่างอาบน้ำ", "เครื่องชงกาแฟ Nespresso", "เสื้อคลุมอาบน้ำ", "วิวเมือง"],
      en: ["Free WiFi", '55" Smart TV', "Minibar", "Bathtub", "Nespresso Machine", "Bathrobes", "City View"],
    },
    images: ["/images/rooms/deluxe_new.png", "/images/rooms/superior-2.jpg"],
  },
  {
    id: "grand",
    name: {
      th: "แกรนด์ สวีท",
      en: "Grand Suite",
    },
    description: {
      th: "ห้องสวีทหรูหรา พร้อมห้องนั่งเล่นแยก จากุซซี่ส่วนตัว และวิวเมืองที่สวยงาม เหมาะสำหรับโอกาสพิเศษ",
      en: "Luxurious suite with separate living area, private jacuzzi, and stunning city views. Perfect for special occasions.",
    },
    price: 6800,
    size: 65,
    maxGuests: 3,
    amenities: {
      th: ["WiFi ฟรี", "ทีวี 65 นิ้ว", "มินิบาร์", "จากุซซี่", "ห้องนั่งเล่น", "Nespresso", "เสื้อคลุมอาบน้ำ", "วิวเมือง"],
      en: ["Free WiFi", '65" Smart TV', "Minibar", "Jacuzzi", "Living Room", "Nespresso", "Bathrobes", "City View"],
    },
    images: ["/images/rooms/suite_new.png", "/images/rooms/grand-2.jpg"],
  },
  {
    id: "presidential",
    name: {
      th: "เพรสซิเดนเชียล สวีท",
      en: "Presidential Suite",
    },
    description: {
      th: "ห้องสวีทระดับสูงสุด พร้อมครัวขนาดย่อม ห้องนั่งเล่นกว้างขวาง ระเบียงส่วนตัว และบริการบัทเลอร์ตลอด 24 ชั่วโมง",
      en: "Our finest suite with kitchenette, spacious living area, private balcony, and 24-hour butler service.",
    },
    price: 12000,
    size: 95,
    maxGuests: 4,
    amenities: {
      th: ["WiFi ฟรี", "ทีวี 75 นิ้ว", "มินิครัว", "จากุซซี่", "ห้องนั่งเล่น", "ระเบียงส่วนตัว", "บัทเลอร์ 24 ชม.", "วิวเมือง 360°"],
      en: ["Free WiFi", '75" Smart TV', "Kitchenette", "Jacuzzi", "Living Room", "Private Balcony", "24h Butler", "360° City View"],
    },
    images: ["/images/rooms/suite_new.png", "/images/rooms/presidential-2.jpg"],
  },
];

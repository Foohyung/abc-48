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
    id: "standard-studio",
    name: {
      th: "สแตนดาร์ด สตูดิโอ",
      en: "Standard Studio",
    },
    description: {
      th: "ห้องสตูดิโอขนาดกะทัดรัด ตกแต่งอย่างอบอุ่นและทันสมัย พร้อมสิ่งอำนวยความสะดวกครบครัน เหมาะสำหรับการพักผ่อนแบบเรียบง่าย",
      en: "Compact studio room with warm and modern decor, fully equipped with amenities. Perfect for a simple and relaxing stay.",
    },
    price: 1500,
    size: 28,
    maxGuests: 2,
    amenities: {
      th: ["WiFi ฟรี", "สมาร์ททีวี", "ตู้เย็น", "เครื่องปรับอากาศ", "ไดร์เป่าผม", "ฝักบัวอาบน้ำ"],
      en: ["Free WiFi", "Smart TV", "Refrigerator", "Air Conditioning", "Hair Dryer", "Shower"],
    },
    images: [
      "/images/rooms/standard-studio-1.jpg",
      "/images/rooms/standard-studio-2.jpg",
      "/images/rooms/standard-studio-3.jpg",
      "/images/rooms/standard-studio-4.jpg",
      "/images/rooms/standard-studio-5.jpg",
    ],
  },
  {
    id: "deluxe-studio",
    name: {
      th: "ดีลักซ์ สตูดิโอ",
      en: "Deluxe Studio",
    },
    description: {
      th: "ห้องสตูดิโอกว้างขวาง พร้อมมุมพักผ่อนและพื้นที่รับประทานอาหาร ตกแต่งอย่างลงตัวเพื่อความสะดวกสบายของคุณ",
      en: "Spacious studio with a relaxing corner and dining area, perfectly decorated for your comfort.",
    },
    price: 2200,
    size: 35,
    maxGuests: 2,
    amenities: {
      th: ["WiFi ฟรี", "สมาร์ททีวี", "มุมรับประทานอาหาร", "ไมโครเวฟ", "เครื่องซักผ้า", "ฝักบัวอาบน้ำ"],
      en: ["Free WiFi", "Smart TV", "Dining Area", "Microwave", "Washing Machine", "Shower"],
    },
    images: [
      "/images/rooms/deluxe-studio-1.jpg",
      "/images/rooms/deluxe-studio-2.jpg",
      "/images/rooms/deluxe-studio-3.jpg",
      "/images/rooms/deluxe-studio-4.jpg",
      "/images/rooms/deluxe-studio-5.jpg",
      "/images/rooms/deluxe-studio-6.jpg",
    ],
  },
  {
    id: "standard-2-bedroom",
    name: {
      th: "สแตนดาร์ด 2 ห้องนอน",
      en: "Standard 2 Bedroom",
    },
    description: {
      th: "ห้องพัก 2 ห้องนอนที่ออกแบบมาเพื่อการเข้าพักแบบครอบครัวหรือกลุ่มเพื่อน พร้อมพื้นที่ส่วนกลางและสิ่งอำนวยความสะดวกครบครัน",
      en: "2-bedroom suite designed for family or group stays, featuring a common area and full amenities.",
    },
    price: 3500,
    size: 55,
    maxGuests: 4,
    amenities: {
      th: ["WiFi ฟรี", "สมาร์ททีวี", "ห้องนั่งเล่น", "โต๊ะรับประทานอาหาร", "ตู้เย็นใหญ่", "เครื่องปรับอากาศแยกส่วน"],
      en: ["Free WiFi", "Smart TV", "Living Room", "Dining Table", "Large Refrigerator", "Split Air Conditioning"],
    },
    images: [
      "/images/rooms/standard-2br-1.jpg",
      "/images/rooms/standard-2br-2.jpg",
      "/images/rooms/standard-2br-3.jpg",
      "/images/rooms/standard-2br-4.jpg",
      "/images/rooms/standard-2br-5.jpg",
    ],
  },
  {
    id: "deluxe-2-bedroom",
    name: {
      th: "ดีลักซ์ 2 ห้องนอน",
      en: "Deluxe 2 Bedroom",
    },
    description: {
      th: "ห้องพัก 2 ห้องนอนสุดหรู พร้อมพื้นที่นั่งเล่นกว้างขวาง มุมครัว และระเบียงส่วนตัว มอบประสบการณ์การพักผ่อนเหนือระดับ",
      en: "Luxurious 2-bedroom suite with a spacious living area, kitchenette, and private balcony. Offering a superior stay experience.",
    },
    price: 4500,
    size: 70,
    maxGuests: 4,
    amenities: {
      th: ["WiFi ฟรี", "สมาร์ททีวี", "มินิครัว", "ไมโครเวฟ", "เครื่องซักผ้า", "ระเบียงส่วนตัว", "วิวเมือง"],
      en: ["Free WiFi", "Smart TV", "Kitchenette", "Microwave", "Washing Machine", "Private Balcony", "City View"],
    },
    images: [
      "/images/rooms/deluxe-2br-1.jpg",
      "/images/rooms/deluxe-2br-2.jpg",
      "/images/rooms/deluxe-2br-3.jpg",
      "/images/rooms/deluxe-2br-4.jpg",
      "/images/rooms/deluxe-2br-5.jpg",
      "/images/rooms/deluxe-2br-6.jpg",
    ],
  },
];

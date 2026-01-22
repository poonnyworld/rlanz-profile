import { Youtube, Twitch, Twitter, Facebook, Instagram } from 'lucide-react';

export const talentData = {
    // ข้อมูลส่วนตัว
    profile: {
        name: "RLanz", // ชื่อ VTuber
        role: "THAI VTUBER FEMALE", // ตำแหน่ง/สไตล์
        image: "/images/model.png", // เอารูปไปวางใน folder public/images/ แล้วแก้ชื่อไฟล์ตรงนี้
        logo: "/images/logo.png", // เอารูปโลโก้ไปวางใน folder public/images/ แล้วแก้ชื่อไฟล์ตรงนี้ (ถ้าไม่มีจะแสดง "LOGO" แทน)
        themeColor: "text-pink-400", // สีหลัก (text-pink-400, text-blue-400, text-purple-400)
        bgColor: "from-violet-900 to-indigo-950", // สีพื้นหลังฝั่งซ้าย
    },

    // สถิติ Social Media
    socials: [
        { platform: "YouTube", icon: Youtube, count: "1618", color: "text-red-500" },
        { platform: "Twitch", icon: Twitch, count: "2,800", color: "text-purple-500" },
        { platform: "Twitter (X)", icon: Twitter, count: "1533", color: "text-blue-400" }
    ],

    // สถิติคนดู (3 ช่องบนขวา)
    stats: [
        { label: "Male Audience", value: "94.6%", iconColor: "text-pink-400" },
        { label: "Age Range", value: "25-34", iconColor: "text-yellow-400" },
        { label: "Peak Time", value: "19:00+", iconColor: "text-blue-400" },
    ],

    // รายการบริการและราคา
    services: [
        {
            title: "Sponsored Livestream",
            description: "ไลฟ์สตรีมเล่นเกม หรือพูดคุยเกี่ยวกับสินค้า (1 ชั่วโมง)",
            price: "฿1,500",
            unit: "per hour",
            details: ["รวม Logo บน Overlay", "Shoutout สินค้า 3 ครั้ง", "แปะลิงก์ใน Chat & Description"]
        },
        {
            title: "Voice Over / Short Clip",
            description: "ลงเสียงโฆษณา หรือทำคลิปสั้น",
            price: "Start ฿1,500",
            unit: "per video",
            details: ["1 คลิปลงได้ทุกแพลตฟอร์มไม่มีค่าใช้จ่ายเพิ่มเติม"]
        },
        {
            title: "Dedicated Long Video",
            description: "ทำวิดีโอแบบยาวเฉพาะสำหรับแบรนด์ (5-15 นาที)",
            price: "Start ฿2,500",
            unit: "per video",
            details: ["สคริปต์และเนื้อหาตามบรีฟ", "ตัดต่อและกราฟิกคุณภาพสูง", "รวม Logo และ Product Placement", "อัพโหลดลง YouTube พร้อม SEO", "สิทธิ์ใช้งาน 1 ปี"]
        },
        {
            title: "Social Media Post",
            description: "โพสต์โปรโมทสินค้าผ่าน Twitter / Facebook",
            price: "฿600",
            unit: "per post",
            details: ["รูปภาพกราฟิก โดยทางช่องทำให้", "ติด Hashtag ตามบรีฟ", "ปักหมุดโพสต์ 3 วัน"]
        },
    ],

    // เงื่อนไขการจ้างงาน
    terms: [
        { title: "01. Payment", content: "ชำระมัดจำ 50% ก่อนเริ่มงาน และส่วนที่เหลือ 50% หลังงานเสร็จสิ้น (หรือตามตกลง) รับโอนผ่านธนาคารใดก็ได้ในประเทศไทยเท่านั้น" },
        { title: "02. Revision", content: "สำหรับงานภาพ/วิดีโอ แก้ไขฟรีได้ 2 ครั้ง (Major Change คิดค่าใช้จ่ายเพิ่ม)" },
        { title: "03. Rights", content: "ราคานี้รวม Commercial Rights สำหรับใช้งานบน Social Media เป็นเวลา 1 ปี" },
        { title: "04. Limitations", content: "ไม่รับงานสินค้าผิดกฎหมาย, การพนัน, ยาลดความอ้วน" }
    ],

    // อีเมลติดต่อ
    contact: {
        email: "contact.rlanz@email.com",
        link: "mailto:contact.rlanz@email.com"
    },

    // ข้อมูลภาพรวม (Overview Stats - Past 28 Days) แยกตาม Platform
    overview: {
        youtube: {
            monthlyViewers: "3.8K",
            views: "8.6K",
            viewsChange: "+5.6K",
            watchTime: "330.8",
            watchTimeChange: "+170.8",
            subscribers: "+205",
            subscribersChange: "+122",
        },
        twitch: {
            views: "12.4K",
            viewsChange: "+3.2K",
            watchTime: "245.5",
            watchTimeChange: "+98.3",
            subscribers: "+180",
            subscribersChange: "+95",
        },
    },

    // ข้อมูล Demography แยกตาม Platform
    demography: {
        youtube: [
            {
                label: "Gender Distribution",
                data: { male: 94.6, female: 5.4 },
                iconColor: "text-pink-400"
            },
            {
                label: "Age Range",
                data: { "18-24": 35.9, "25-34": 60.6, "35-44": 3.4, "45+": 0.1 },
                iconColor: "text-yellow-400"
            },
            {
                label: "Geographic",
                data: { "Thailand": 81, "Other": 19 },
                iconColor: "text-blue-400"
            },
            {
                label: "Content Type (Past 28 Days)",
                data: { "Video": 83.4, "Shorts": 10.3, "Livestream": 6.3 },
                iconColor: "text-purple-400"
            },
        ],
        twitch: [
            {
                label: "Gender Distribution",
                data: { male: 92, female: 8 },
                iconColor: "text-pink-400"
            },
            {
                label: "Age Range",
                data: { "18-24": 45, "25-34": 50, "35-44": 5 },
                iconColor: "text-yellow-400"
            },
            {
                label: "Geographic",
                data: { "Thailand": 75, "Other": 25 },
                iconColor: "text-blue-400"
            },
            {
                label: "Average Viewers",
                data: { "Peak": 85, "Average": 45 },
                iconColor: "text-purple-400"
            },
        ],
    },

    // Portfolio (ตัวอย่างงานที่เคยทำ - YouTube Videos)
    portfolio: [
        {
            title: "Empty old City - Daisy Crown (Thai ver.) -【covered by RLanz】",
            thumbnail: "https://i.ytimg.com/vi/7YKIhGm9av8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDeWZxJhtxsomYNdDAF6SeTZjFiqQ", // เปลี่ยนเป็น YouTube thumbnail URL
            url: "https://youtu.be/7YKIhGm9av8", // เปลี่ยนเป็น YouTube video URL
            description: "Coversong - Thai"
        },
        {
            title: "【歌ってみた】Loop (feat.WaMi) 雄之助 -【covered by RLanz】",
            thumbnail: "https://i.ytimg.com/vi/BmPrgKyOPe0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC8K5jMKNFPfCh5E6FBB_JvE00hkA",
            url: "https://youtu.be/BmPrgKyOPe0",
            description: "Coversong - Japanese"
        },
        {
            title: "Honkai: Star Rail - Story",
            thumbnail: "https://i.ytimg.com/vi/24D1-F3Idhk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDRpTMq-BHPbuCTrVlgx1eVvXyWCA",
            url: "https://www.youtube.com/live/24D1-F3Idhk?si=uP76Fn1qk-Vuh8WA",
            description: "Live Stream - Game"
        },
        {
            title: "スイートマジック(Sweet Magic) -【covered by RLanz✖ROOP】",
            thumbnail: "https://i.ytimg.com/vi/g9Hnm3cY784/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCnvUi-ay-RNaa4jUfiMt52C8ldMw",
            url: "https://youtu.be/g9Hnm3cY784",
            description: "Coversong - Japanese"
        },
    ],

    // ข้อมูลอัพเดตล่าสุด
    lastUpdated: "2026-01-23", // วันที่อัพเดตล่าสุด (รูปแบบ: YYYY-MM-DD)
};
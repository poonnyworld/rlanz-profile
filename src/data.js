import { Youtube, Twitch, Facebook, Instagram } from 'lucide-react';

export const talentData = {
    // ข้อมูลส่วนตัว
    profile: {
        name: "RLanz", // ชื่อ VTuber
        role: "🇹🇭 VTUBER | COVER ARTIST & GAMER", // ตำแหน่ง/สไตล์
        image: "/images/model.png", // รูปหลัก (ใช้สำหรับ fallback)
        images: [
            "/images/model.png", // รูปที่ 1
            "/images/model2.png", // รูปที่ 2 (ถ้ามี)
            "/images/model3.png", // รูปที่ 3 (ถ้ามี)
            "/images/model4.png", // รูปที่ 4 (ถ้ามี)
            "/images/model5.png", // รูปที่ 5 (ถ้ามี)
            // เพิ่มรูปเพิ่มเติมได้ที่นี่
        ],
        logo: "/images/logo.png", // เอารูปโลโก้ไปวางใน folder public/images/ แล้วแก้ชื่อไฟล์ตรงนี้ (ถ้าไม่มีจะแสดง "LOGO" แทน)
        themeColor: "text-pink-400", // สีหลัก (text-pink-400, text-blue-400, text-purple-400)
        bgColor: "from-violet-900 to-indigo-950", // สีพื้นหลังฝั่งซ้าย
    },

    // สถิติ Social Media
    socials: [
        { platform: "YouTube", icon: Youtube, count: "1618", color: "text-red-500", url: "https://www.youtube.com/@rlanz_tn" },
        { platform: "Twitch", icon: Twitch, count: "2,800", color: "text-purple-500", url: "https://www.twitch.tv/rlanz_tarima" }
    ],

    // สถิติคนดู (3 ช่องบนขวา) - ค่าเฉลี่ยจากทั้ง YouTube และ Twitch
    stats: [
        { label: "Male Audience", labelEn: "Male Audience", value: "93.3%", iconColor: "text-pink-400" },
        { label: "Age Range", labelEn: "Age Range", value: "25-34", iconColor: "text-yellow-400" },
        { label: "Peak Time", labelEn: "Peak Time", value: "19:00+", iconColor: "text-blue-400" },
    ],

    // รายการบริการและราคา
    services: [
        {
            title: "Sponsored Livestream",
            description: "ไลฟ์สตรีมเล่นเกม หรือพูดคุยเกี่ยวกับสินค้า (1 ชั่วโมง)",
            descriptionEn: "Livestream gaming or product discussion (1 hour)",
            price: "฿1,500",
            unit: "per hour",
            details: ["รวม Logo บน Overlay", "Shoutout สินค้า 3 ครั้ง", "แปะลิงก์ใน Chat & Description"],
            detailsEn: ["Logo on overlay", "Product shoutout 3 times", "Link in chat & description"]
        },
        {
            title: "Voice Over / Short Clip",
            description: "ลงเสียงโฆษณา หรือทำคลิปสั้น",
            descriptionEn: "Voice over for advertisements or short clips",
            price: "Start ฿1,500",
            unit: "per video",
            details: ["1 คลิปลงได้ทุกแพลตฟอร์มไม่มีค่าใช้จ่ายเพิ่มเติม"],
            detailsEn: ["1 clip can be posted on all platforms without additional charges"]
        },
        {
            title: "Dedicated Long Video",
            description: "ทำวิดีโอแบบยาวเฉพาะสำหรับแบรนด์ (5-15 นาที)",
            descriptionEn: "Create long videos specifically for brands (5-15 minutes)",
            price: "Start ฿2,500",
            unit: "per video",
            details: ["สคริปต์และเนื้อหาตามบรีฟ", "ตัดต่อและกราฟิกคุณภาพสูง", "รวม Logo และ Product Placement", "อัพโหลดลง YouTube พร้อม SEO", "สิทธิ์ใช้งาน 1 ปี"],
            detailsEn: ["Script and content according to brief", "High-quality editing and graphics", "Includes logo and product placement", "Upload to YouTube with SEO", "1 year usage rights"]
        },
        {
            title: "Social Media Post",
            description: "โพสต์โปรโมทสินค้าผ่าน Twitter / Facebook",
            descriptionEn: "Promotional post for products via Twitter / Facebook",
            price: "฿600",
            unit: "per post",
            details: ["รูปภาพกราฟิก โดยทางช่องทำให้", "ติด Hashtag ตามบรีฟ", "ปักหมุดโพสต์ 3 วัน"],
            detailsEn: ["Graphic image created by the channel", "Include hashtag according to brief", "Pin post for 3 days"]
        },
    ],

    // เงื่อนไขการจ้างงาน
    terms: [
        {
            title: "01. Payment",
            titleEn: "01. Payment",
            content: "ชำระมัดจำ 50% ก่อนเริ่มงาน และส่วนที่เหลือ 50% หลังงานเสร็จสิ้น (หรือตามตกลง) รับโอนผ่านธนาคารใดก็ได้ในประเทศไทยเท่านั้น",
            contentEn: "50% deposit before work begins, remaining 50% after completion (or as agreed). Bank transfer accepted in Thailand only."
        },
        {
            title: "02. Revision",
            titleEn: "02. Revision",
            content: "สำหรับงานภาพ/วิดีโอ แก้ไขฟรีได้ 2 ครั้ง (Major Change คิดค่าใช้จ่ายเพิ่ม)",
            contentEn: "Free revisions up to 2 times for image/video work (Major changes incur additional charges)"
        },
        {
            title: "03. Rights",
            titleEn: "03. Rights",
            content: "ราคานี้รวม Commercial Rights สำหรับใช้งานบน Social Media เป็นเวลา 1 ปี",
            contentEn: "Price includes commercial rights for social media use for 1 year"
        },
        {
            title: "04. Limitations",
            titleEn: "04. Limitations",
            content: "ไม่รับงานสินค้าผิดกฎหมาย, การพนัน, ยาลดความอ้วน",
            contentEn: "We do not accept work for illegal products, gambling, or weight loss drugs"
        }
    ],

    // ช่องทางการติดต่อ
    contact: {
        email: "RanDayo002@gmail.com",
        emailLink: "mailto:RanDayo002@gmail.com",
        line: "@poonrighthere",
        lineTh: "(คุณปูน)",
        lineEn: "(Poon)",
        lineRole: "เมเนเจอร์",
        lineRoleEn: "Talent Manager",
        lineLink: "https://line.me/ti/p/~poonrighthere",
        discord: "poonrighthere",
        discordTh: "(คุณปูน)",
        discordEn: "(Poon)",
        discordRole: "เมเนเจอร์",
        discordRoleEn: "Talent Manager",
        discordLink: "https://discord.com/users/poonrighthere"
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
            views: "9.5K",
            viewsChange: "+2.1K",
            watchTime: "2,541",
            watchTimeChange: "+450",
            subscribers: "+68",
            subscribersChange: "+25",
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
            {
                label: "New vs Returning Viewers",
                data: { "Returning": 64.0, "New": 34.6 },
                iconColor: "text-green-400"
            },
            {
                label: "Viewing Behavior",
                data: { "New viewers": 79.8, "Casual viewers": 14.1, "Regular viewers": 6.2 },
                iconColor: "text-cyan-400"
            },
            {
                label: "Subscription Status",
                data: { "Not subscribed": 70.6, "Subscribed": 29.4 },
                iconColor: "text-orange-400"
            },
            {
                label: "Device Type",
                data: { "Mobile phone": 48.9, "Computer": 44.5, "Tablet": 5.9, "TV": 0.7 },
                iconColor: "text-indigo-400"
            },
            {
                label: "Operating System",
                data: { "Android": 41.3, "Windows": 40.5, "iOS": 13.9, "Macintosh": 3.7, "Other": 0.5 },
                iconColor: "text-teal-400"
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
                label: "Viewer Statistics",
                data: { "Peak Viewers": 99, "Average Viewers": 25.3, "Unique Viewers": 5.7 },
                iconColor: "text-purple-400"
            },
            {
                label: "Engaged Viewers",
                data: { "Returning Engaged": 87.4, "New Engaged": 12.6 },
                iconColor: "text-emerald-400"
            },
            {
                label: "Chat Engagement",
                data: { "Avg Chatters/Day": 29.7, "Chat Messages/Day": 472.2 },
                iconColor: "text-yellow-400"
            },
            {
                label: "Subscription Tiers",
                data: { "Tier 1": 97.0, "Tier 3": 3.0 },
                iconColor: "text-rose-400"
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
            title: "りりあ。riria. / あんたなんて。Ranma ½ ED (Thai Ver.) -【covered by RLanz】",
            thumbnail: "https://i.ytimg.com/vi/_3dT_dDzbeQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDBJKtmhrMScKhD-77uZYn2eTQJOQ", // เปลี่ยนเป็น YouTube thumbnail URL
            url: "https://youtu.be/_3dT_dDzbeQ", // เปลี่ยนเป็น YouTube video URL
            description: "Coversong - Thai"
        },
        {
            title: "【 Wuthering Waves 】เริ่มใหม่จากศูนย์ จะมีจิสะในไอดีให้ได้เลย!!  ",
            thumbnail: "https://i.ytimg.com/vi/mNqXTGqAv1M/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCFNYHPkw4m5vCn-sD4Rs4-n27jyQ",
            url: "https://youtube.com/live/mNqXTGqAv1M?feature=share",
            description: "Livestream - Game"
        },
        {
            title: "Arknights: Endfield | DAY 1 เอนมินมือใหม่ เป้าหมายคือ Laevatain !!",
            thumbnail: "https://i.ytimg.com/vi/0zmthl9B7ak/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAwRnnsjdH6PYqMELTvYyuujNQPJw",
            url: "https://youtube.com/live/0zmthl9B7ak?feature=share",
            description: "Live Stream - Game"
        },
        {
            title: "【歌ってみた】Loop (feat.WaMi) 雄之助 -【covered by RLanz】",
            thumbnail: "https://i.ytimg.com/vi/BmPrgKyOPe0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC8K5jMKNFPfCh5E6FBB_JvE00hkA",
            url: "https://youtu.be/BmPrgKyOPe0",
            description: "Coversong - Japanese"
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
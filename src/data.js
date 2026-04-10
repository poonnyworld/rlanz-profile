import { Music2 } from 'lucide-react';

export const talentData = {
    // ข้อมูลส่วนตัว
    profile: {
        name: "yuminyui", // ชื่อ VTuber
        role: "🇹🇭 VTuber | VToker", // ตำแหน่ง/สไตล์
        image: "/images/model.png", // รูปหลัก (ใช้สำหรับ fallback)
        images: [
            "/images/model.gif", // รูปที่ 1
            "/images/model2.gif", // รูปที่ 2 (ถ้ามี)
            "/images/model3.gif", // รูปที่ 3 (ถ้ามี)
            "/images/model4.gif", // รูปที่ 4 (ถ้ามี)
            "/images/model5.gif", // รูปที่ 5 (ถ้ามี)
            "/images/model6.gif", // รูปที่ 5 (ถ้ามี)
            // เพิ่มรูปเพิ่มเติมได้ที่นี่
        ],
        logo: "/images/logo.png", // เอารูปโลโก้ไปวางใน folder public/images/ แล้วแก้ชื่อไฟล์ตรงนี้ (ถ้าไม่มีจะแสดง "LOGO" แทน)
        themeColor: "text-pink-500", // สีหลัก (text-pink-400, text-blue-400, text-purple-400)
        bgColor: "from-pink-200 via-sky-100 to-white", // สีพื้นหลังฝั่งซ้าย
    },

    // SEO และ Social Sharing
    seo: {
        title: "yuminyui - VTuber Rate Card | Professional Collaboration Services",
        description: "THAI VTuber | VToker - Professional collaboration services including Sponsored Livestream, Voice Over, Dedicated Long Video, and Social Media Posts. Contact for brand partnerships.",
        keywords: "VTuber, Thai VTuber, yuminyui, Rate Card, Collaboration, Brand Partnership, Sponsored Content, Livestream, Voice Over",
        author: "yuminyui",
        siteName: "yuminyui Rate Card",
        image: "/images/model.png",
        locale: "th_TH"
    },

    // สถิติ Social Media
    socials: [
        { platform: "TikTok", icon: Music2, count: "37,200", color: "text-cyan-400", url: "https://www.tiktok.com/@yuminyui" }
    ],

    // สถิติคนดู (3 ช่องบนขวา) - ข้อมูลจาก TikTok
    stats: [
        { label: "ผู้ชมเพศชาย", labelEn: "Male Audience", value: "73%", iconColor: "text-pink-400" },
        { label: "ช่วงอายุหลัก", labelEn: "Top Age Range", value: "25-34 (38%)", iconColor: "text-yellow-400" },
        { label: "ผู้ชมจากไทย", labelEn: "Audience from Thailand", value: "94%", iconColor: "text-blue-400" },
    ],

    // รายการบริการและราคา
    services: [
        {
            title: "Sponsored Livestream",
            description: "ไลฟ์สตรีมเล่นเกม หรือพูดคุยเกี่ยวกับสินค้า (1 ชั่วโมง)",
            descriptionEn: "Livestream gaming or product discussion (1 hour)",
            price: "฿2,500",
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
            price: "Start ฿3,200",
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
        email: "contact.yuminyui@gmail.com",
        emailLink: "mailto:contact.yuminyui@gmail.com",
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
        tiktok: {
            monthlyViewers: "72.3K",
            views: "72.3K",
            viewsChange: "+72.3K",
            watchTime: "138",
            watchTimeChange: "+138",
            subscribers: "+1K",
            subscribersChange: "+1K",
            peakTime: {
                time: "1:00 PM",
                topDateTh: "เม.ย. 09",
                topDateEn: "Apr 09",
                descriptionTh: "ช่วงเวลาที่ผู้ชมเข้าชม TikTok LIVE มากที่สุดในช่วง 7 วันที่ผ่านมา",
                descriptionEn: "Time when viewers watched TikTok LIVE the most in the past 7 days"
            },
            trafficSources: [
                { label: "คำแนะนำ LIVE", labelEn: "LIVE Recommendation", value: 71 },
                { label: "กำลังติดตาม", labelEn: "Following", value: 17 },
                { label: "อื่น ๆ", labelEn: "Others", value: 11 }
            ]
        },
    },

    // ข้อมูล Demography แยกตาม Platform
    demography: {
        tiktok: [
            {
                label: "Gender Distribution",
                data: { male: 73, female: 27 },
                iconColor: "text-pink-400"
            },
            {
                label: "Age Range",
                data: { "18-24": 24, "25-34": 38, "35-44": 22, "45+": 16 },
                iconColor: "text-yellow-400"
            },
            {
                label: "Geographic",
                data: { "Thailand": 94, "Other": 6 },
                iconColor: "text-blue-400"
            },
            {
                label: "Viewer Statistics",
                data: { "Total Views": 72300, "Unique Viewers": 1700, "Comments": 21100 },
                iconColor: "text-purple-400"
            },
            {
                label: "Chat Engagement",
                data: { "Comments": 21100, "Diamonds": 219700 },
                iconColor: "text-yellow-400"
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
    lastUpdated: "2026-04-10", // วันที่อัพเดตล่าสุด (รูปแบบ: YYYY-MM-DD)
};
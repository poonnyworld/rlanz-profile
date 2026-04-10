# VTuber Rate Card Template

เว็บแอปพลิเคชันสำหรับสร้าง Rate Card แบบมืออาชีพสำหรับ VTuber หรือ Content Creator เพื่อแสดงข้อมูลโปรไฟล์ บริการ ราคา และสถิติต่างๆ

> **สร้างโดย:** Sirawitch Butryojantho (Poon)  
> **สำหรับ:** ทาเลนท์ในความดูแลของฉันเท่านั้น

## ✨ คุณสมบัติ

- 🎨 **UI/UX สวยงาม** - ออกแบบด้วย Tailwind CSS พร้อม Responsive Design
- 🌐 **รองรับหลายภาษา** - ภาษาไทยและภาษาอังกฤษ (สลับได้)
- 📊 **แสดงสถิติ** - สถิติผู้ชม Demography และข้อมูลจาก YouTube/Twitch
- 💼 **บริการและราคา** - แสดงรายการบริการพร้อมราคาและรายละเอียด
- 🖼️ **Image Carousel** - รองรับการแสดงรูปภาพหลายรูปพร้อม Auto-play
- 📱 **Responsive** - รองรับทุกขนาดหน้าจอ (Mobile, Tablet, Desktop)
- 🖨️ **Print Support** - รองรับการพิมพ์ Rate Card
- 🔗 **Share Functionality** - แชร์ผ่าน Facebook, Twitter และ Web Share API
- ⚡ **Fast & Lightweight** - สร้างด้วย Vite สำหรับประสิทธิภาพสูงสุด

## 🛠️ เทคโนโลยีที่ใช้

- **React 18** - UI Framework
- **Vite** - Build Tool และ Development Server
- **Tailwind CSS** - Utility-first CSS Framework
- **Lucide React** - Icon Library
- **PostCSS** - CSS Processing

## 📦 การติดตั้ง

### ความต้องการของระบบ

- Node.js 16.0 หรือสูงกว่า
- npm หรือ yarn

### ขั้นตอนการติดตั้ง

1. Clone repository หรือดาวน์โหลดโปรเจกต์
```bash
git clone <repository-url>
cd Vtuber-RateCards
```

2. ติดตั้ง dependencies
```bash
npm install
```

3. เริ่มต้น Development Server
```bash
npm run dev
```

4. เปิดเบราว์เซอร์ไปที่ `http://localhost:5173`

## 🚀 การใช้งาน

### Development

```bash
npm run dev
```

### Build สำหรับ Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## ⚙️ การตั้งค่า

### แก้ไขข้อมูล VTuber

แก้ไขไฟล์ `src/data.js` เพื่อเปลี่ยนข้อมูลต่างๆ:

- **Profile** - ชื่อ, บทบาท, รูปภาพ, สีธีม
- **Socials** - ลิงก์ Social Media และจำนวนผู้ติดตาม
- **Stats** - สถิติหลัก (Male Audience, Age Range, Peak Time)
- **Services** - รายการบริการและราคา
- **Terms** - เงื่อนไขการจ้างงาน
- **Contact** - ข้อมูลการติดต่อ (Email, Line, Discord)
- **Demography** - ข้อมูล Demography สำหรับ YouTube และ Twitch
- **Portfolio** - ผลงานตัวอย่าง
- **Overview** - สถิติภาพรวม 28 วัน

### ตัวอย่างการแก้ไขข้อมูล

```javascript
// src/data.js
export const talentData = {
    profile: {
        name: "Your VTuber Name",
        role: "🇹🇭 VTUBER | YOUR ROLE",
        image: "/images/model.png",
        images: [
            "/images/model.png",
            "/images/model2.png",
            // เพิ่มรูปเพิ่มเติม
        ],
        themeColor: "text-pink-400", // text-pink-400, text-blue-400, text-purple-400
        bgColor: "from-violet-900 to-indigo-950",
    },
    // ... แก้ไขส่วนอื่นๆ
};
```

### การเพิ่มรูปภาพ

1. วางรูปภาพในโฟลเดอร์ `public/images/`
2. อัปเดต path ใน `src/data.js`:
   - `profile.image` - รูปหลัก (fallback)
   - `profile.images` - array ของรูปทั้งหมดสำหรับ carousel
   - `profile.logo` - โลโก้ (ถ้ามี)

### การเปลี่ยนสีธีม

แก้ไข `themeColor` และ `bgColor` ใน `profile` object:

```javascript
themeColor: "text-pink-400", // สีหลัก (text-pink-400, text-blue-400, text-purple-400)
bgColor: "from-violet-900 to-indigo-950", // สีพื้นหลังฝั่งซ้าย (Tailwind gradient)
```

## 📁 โครงสร้างโปรเจกต์

```
Vtuber-RateCards/
├── public/
│   └── images/          # รูปภาพ (model, logo, etc.)
├── src/
│   ├── App.jsx          # Component หลัก
│   ├── data.js          # ข้อมูล VTuber (แก้ไขที่นี่)
│   ├── ErrorBoundary.jsx # Error Boundary Component
│   ├── index.css        # Global Styles
│   └── main.jsx         # Entry Point
├── index.html           # HTML Template
├── package.json         # Dependencies และ Scripts
├── tailwind.config.js   # Tailwind Configuration
├── vite.config.js       # Vite Configuration
└── README.md            # เอกสารนี้
```

## 🎨 Features รายละเอียด

### 1. Profile Section
- แสดงรูปภาพ VTuber พร้อม Image Carousel
- แสดงชื่อและบทบาท
- แสดงลิงก์ Social Media พร้อมจำนวนผู้ติดตาม
- ปุ่มติดต่อ (Email, Line, Discord)

### 2. Services & Rates Tab
- แสดงรายการบริการพร้อมราคา
- คลิกเพื่อดูรายละเอียดเพิ่มเติม (Modal)
- รองรับทั้งภาษาไทยและอังกฤษ

### 3. Demography Tab
- สลับระหว่าง YouTube และ Twitch
- แสดงสถิติภาพรวม 28 วัน
- แสดงกราฟ Demography ต่างๆ (Gender, Age, Geographic, etc.)

### 4. Portfolio Tab
- แสดงผลงานตัวอย่าง (YouTube Videos)
- Grid Layout พร้อม Thumbnail
- คลิกเพื่อเปิดวิดีโอใน YouTube

### 5. Terms & Conditions Tab
- แสดงเงื่อนไขการจ้างงาน
- รองรับทั้งภาษาไทยและอังกฤษ

### 6. Action Buttons
- **Language Toggle** - สลับภาษาไทย/อังกฤษ
- **Copy Link** - คัดลอกลิงก์
- **Share** - แชร์ผ่าน Facebook, Twitter, หรือ Web Share API
- **Print** - พิมพ์ Rate Card

## 🌐 การ Deploy

### Vercel (แนะนำ)

1. Push โค้ดไปยัง GitHub
2. เชื่อมต่อ Vercel กับ GitHub repository
3. ตั้งค่า Project เป็น Framework: `Vite` (ถ้าไม่ detect อัตโนมัติ)
4. ตรวจสอบค่า Build:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. กด Deploy (หลังจากนั้นทุกครั้งที่ push จะ deploy อัตโนมัติ)

> โปรเจกต์นี้มีไฟล์ `vercel.json` ให้แล้ว (build command, output directory, SPA rewrite และ cache headers)

### Netlify

1. Push โค้ดไปยัง GitHub
2. เชื่อมต่อ Netlify กับ GitHub repository
3. ตั้งค่า Build Command: `npm run build`
4. ตั้งค่า Publish Directory: `dist`

### GitHub Pages

1. Build โปรเจกต์: `npm run build`
2. Deploy โฟลเดอร์ `dist` ไปยัง GitHub Pages

## 👤 ผู้สร้าง

**Sirawitch Butryojantho (Poon)**

## 📝 License & Usage

โปรเจกต์นี้สร้างโดย **Sirawitch Butryojantho (Poon)** และใช้สำหรับทาเลนท์ในความดูแลของฉันเท่านั้น

**ข้อจำกัดการใช้งาน:**
- โปรเจกต์นี้สงวนสิทธิ์สำหรับทาเลนท์ภายใต้การดูแลของ Sirawitch Butryojantho (Poon) เท่านั้น
- ห้ามนำไปใช้โดยไม่ได้รับอนุญาต
- หากต้องการใช้งาน กรุณาติดต่อผู้สร้าง

## 📧 ติดต่อ

หากมีคำถามหรือต้องการความช่วยเหลือ กรุณาติดต่อ:
- **Sirawitch Butryojantho (Poon)**

---

**สร้างด้วย ❤️ โดย Sirawitch Butryojantho (Poon)**

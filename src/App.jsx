import React, { useState, useEffect, useRef } from 'react';
import { Mail, Users, Star, Globe, Video, MousePointer2, Mic, BarChart3, ExternalLink, Film, Share2, TrendingUp, Eye, Clock, UserPlus, Loader2, Printer, Copy, Check, Facebook, Twitter, ChevronLeft, ChevronRight, Languages, X } from 'lucide-react';
import { talentData } from './data'; // Import ข้อมูลจากไฟล์ data.js

// Line Logo SVG Component
const LineIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.27l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.086.766.062.867l-.164.968c-.037.221-.199.895.807.512 1.01-.384 5.519-3.197 7.646-5.384C21.174 17.033 24 13.863 24 10.314" />
    </svg>
);

// Discord Logo SVG Component
const DiscordIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
);

const App = () => {
    const [activeTab, setActiveTab] = useState('services');
    const demographyPlatform = 'tiktok';
    const [isLoading, setIsLoading] = useState(true);
    const [copied, setCopied] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [language, setLanguage] = useState('th'); // 'th' for Thai, 'en' for English
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const carouselIntervalRef = useRef(null);
    const { profile, seo, socials, stats, services, terms, contact, demography, lastUpdated, overview } = talentData;

    // ใช้ images array ถ้ามี หรือใช้ image เดียว
    const images = profile.images && profile.images.length > 0 ? profile.images : [profile.image];

    // Sync document metadata from src/data.js
    useEffect(() => {
        const pageTitle = seo?.title || `${profile.name} - VTuber Rate Card`;
        const pageDescription = seo?.description || `${profile.name} VTuber collaboration profile`;
        const pageKeywords = seo?.keywords || '';
        const pageAuthor = seo?.author || profile.name;
        const pageImage = seo?.image || profile.image;
        const pageLocale = seo?.locale || 'th_TH';
        const pageSiteName = seo?.siteName || `${profile.name} Rate Card`;
        const canonicalUrl = window.location.href;

        document.title = pageTitle;

        const upsertMeta = (selector, attributes) => {
            let el = document.head.querySelector(selector);
            if (!el) {
                el = document.createElement('meta');
                document.head.appendChild(el);
            }
            Object.entries(attributes).forEach(([key, value]) => {
                el.setAttribute(key, value);
            });
        };

        const upsertLink = (selector, attributes) => {
            let el = document.head.querySelector(selector);
            if (!el) {
                el = document.createElement('link');
                document.head.appendChild(el);
            }
            Object.entries(attributes).forEach(([key, value]) => {
                el.setAttribute(key, value);
            });
        };

        upsertMeta('meta[name="title"]', { name: 'title', content: pageTitle });
        upsertMeta('meta[name="description"]', { name: 'description', content: pageDescription });
        upsertMeta('meta[name="keywords"]', { name: 'keywords', content: pageKeywords });
        upsertMeta('meta[name="author"]', { name: 'author', content: pageAuthor });
        upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
        upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
        upsertMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle });
        upsertMeta('meta[property="og:description"]', { property: 'og:description', content: pageDescription });
        upsertMeta('meta[property="og:image"]', { property: 'og:image', content: new URL(pageImage, window.location.origin).toString() });
        upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: pageLocale });
        upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: pageSiteName });
        upsertMeta('meta[property="twitter:card"]', { property: 'twitter:card', content: 'summary_large_image' });
        upsertMeta('meta[property="twitter:url"]', { property: 'twitter:url', content: canonicalUrl });
        upsertMeta('meta[property="twitter:title"]', { property: 'twitter:title', content: pageTitle });
        upsertMeta('meta[property="twitter:description"]', { property: 'twitter:description', content: pageDescription });
        upsertMeta('meta[property="twitter:image"]', { property: 'twitter:image', content: new URL(pageImage, window.location.origin).toString() });
        upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });
    }, [profile.image, profile.name, seo]);

    // Loading state
    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    // Auto-play carousel
    useEffect(() => {
        if (images.length <= 1) return;

        if (isAutoPlay) {
            carouselIntervalRef.current = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
            }, 4000); // เปลี่ยนรูปทุก 4 วินาที
        }

        return () => {
            if (carouselIntervalRef.current) {
                clearInterval(carouselIntervalRef.current);
            }
        };
    }, [isAutoPlay, images.length]);

    // Navigation functions
    const goToPrevious = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        setIsAutoPlay(false); // หยุด auto-play เมื่อผู้ใช้กดปุ่ม
    };

    const goToNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsAutoPlay(false); // หยุด auto-play เมื่อผู้ใช้กดปุ่ม
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
        setIsAutoPlay(false); // หยุด auto-play เมื่อผู้ใช้เลือกรูป
    };

    // Copy link function
    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    // Share functions
    const handleShare = async () => {
        const shareData = {
            title: `${profile.name} - VTuber Rate Card`,
            text: `Check out ${profile.name}'s professional rate card!`,
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            handleCopyLink();
        }
    };

    const handleShareFacebook = () => {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    };

    const handleShareTwitter = () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(`${profile.name} - VTuber Rate Card`);
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    };

    // Print function
    const handlePrint = () => {
        window.print();
    };

    // Modal functions
    const openServiceModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    const closeServiceModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
        document.body.style.overflow = 'unset'; // Restore scroll
    };

    // Close modal on ESC key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeServiceModal();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isModalOpen]);

    // Function เลือก Icon ให้ตรงกับ Service (ปรับแต่งได้)
    const getServiceIcon = (title) => {
        const titleLower = title.toLowerCase();
        if (titleLower.includes('live')) return <Video className="w-6 h-6" />;
        if (titleLower.includes('post') || titleLower.includes('social media')) return <Share2 className="w-6 h-6" />;
        if (titleLower.includes('dedicated') || titleLower.includes('long video')) return <Film className="w-6 h-6" />;
        if (titleLower.includes('voice') || titleLower.includes('short clip')) return <Mic className="w-6 h-6" />;
        return <MousePointer2 className="w-6 h-6" />;
    };

    const getStatIcon = (index) => {
        if (index === 0) return <Users className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${stats[0].iconColor} mx-auto mb-1 sm:mb-2`} />;
        if (index === 1) return <Star className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${stats[1].iconColor} mx-auto mb-1 sm:mb-2`} />;
        return <Globe className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${stats[2].iconColor} mx-auto mb-1 sm:mb-2`} />;
    };

    // Function สำหรับสร้างกราฟ Bar Chart
    const renderBarChart = (data, maxValue = 100, isPercentage = true) => {
        const entries = Object.entries(data);
        // คำนวณ maxValue อัตโนมัติถ้าไม่ใช่เปอร์เซ็นต์
        if (!isPercentage) {
            maxValue = Math.max(...entries.map(([_, v]) => typeof v === 'number' ? v : parseFloat(v) || 0));
        }
        return (
            <div className="space-y-3 mt-4">
                {entries.map(([key, value], idx) => (
                    <div key={idx}>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-slate-700">{key}</span>
                            <span className="text-sm font-bold text-slate-800">
                                {isPercentage ? `${value}%` : typeof value === 'number' ? value.toFixed(1) : value}
                            </span>
                        </div>
                        <div className="w-full bg-pink-50 rounded-full h-3 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-pink-500 to-purple-500 h-full rounded-full transition-all duration-500"
                                style={{ width: `${(value / maxValue) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    // Loading screen
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-sky-100 text-slate-800 flex items-center justify-center" role="status" aria-label="Loading">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-pink-400 animate-spin mx-auto mb-4" />
                    <p className="text-slate-600">กำลังโหลด...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-sky-100 text-slate-800 font-sans p-1 sm:p-2 md:p-4 lg:p-8 flex items-center justify-center" role="main" aria-label="VTuber Rate Card">
            {/* Language Toggle Button */}
            <div className="fixed top-2 left-2 sm:top-4 sm:left-4 z-50 print:hidden">
                <div className="relative group">
                    <button
                        onClick={() => setLanguage(language === 'th' ? 'en' : 'th')}
                        aria-label={`Switch to ${language === 'th' ? 'English' : 'Thai'}`}
                        className="bg-rose-50/90 hover:bg-pink-50 p-2 sm:p-3 rounded-lg border border-pink-100 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 active:bg-pink-100 touch-manipulation flex items-center gap-2 shadow-lg"
                    >
                        <Languages className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm font-bold">{language === 'th' ? 'TH' : 'EN'}</span>
                    </button>
                    <div className="absolute top-full left-0 mt-2 bg-rose-50 border border-pink-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap px-3 py-2 text-xs">
                        {language === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
                    </div>
                </div>
            </div>

            {/* Action Buttons - Share & Print */}
            <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 flex gap-1 sm:gap-2 print:hidden">
                <div className="relative">
                    <button
                        onClick={handleCopyLink}
                        aria-label="Copy link"
                        className="bg-rose-50/90 hover:bg-pink-50 active:bg-pink-100 p-2 sm:p-3 rounded-lg border border-pink-100 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 touch-manipulation"
                    >
                        {copied ? (
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                        ) : (
                            <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                    </button>
                    {copied && (
                        <span className="absolute -top-10 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-rose-50 text-slate-700 text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                            คัดลอกแล้ว!
                        </span>
                    )}
                </div>
                <div className="relative">
                    <button
                        onClick={handleShare}
                        aria-label="Share"
                        className="bg-rose-50/90 hover:bg-pink-50 active:bg-pink-100 p-2 sm:p-3 rounded-lg border border-pink-100 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 touch-manipulation"
                    >
                        <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <div className="absolute top-full right-0 mt-2 bg-rose-50 border border-pink-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 sm:block hidden">
                        <div className="py-1">
                            <button
                                onClick={handleShareFacebook}
                                className="w-full px-4 py-2 text-left hover:bg-pink-50 active:bg-pink-100 flex items-center gap-2 text-sm"
                            >
                                <Facebook className="w-4 h-4 text-blue-500" />
                                แชร์บน Facebook
                            </button>
                            <button
                                onClick={handleShareTwitter}
                                className="w-full px-4 py-2 text-left hover:bg-pink-50 active:bg-pink-100 flex items-center gap-2 text-sm"
                            >
                                <Twitter className="w-4 h-4 text-blue-400" />
                                แชร์บน Twitter
                            </button>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handlePrint}
                    aria-label="Print"
                    className="bg-rose-50/90 hover:bg-pink-50 active:bg-pink-100 p-2 sm:p-3 rounded-lg border border-pink-100 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 touch-manipulation"
                >
                    <Printer className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>

            <div className="max-w-5xl w-full bg-rose-50/95 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-pink-100 relative" role="article" aria-label="Professional Rate Card">

                {/* Left Section: Dynamic Profile */}
                <aside className={`w-full md:w-[35%] bg-gradient-to-b ${profile.bgColor} p-4 sm:p-6 md:p-8 flex flex-col items-center justify-between relative overflow-hidden`} aria-label="Profile Information">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
                    </div>

                    <div className="z-10 text-center w-full">
                        <div className="relative mx-auto w-full max-w-[200px] sm:max-w-[250px] md:max-w-none aspect-[3/4] bg-pink-50/80 rounded-xl border border-pink-200/60 mb-4 sm:mb-6 flex items-center justify-center overflow-hidden group" role="img" aria-label={`${profile.name} VTuber Model`}>
                            <div className="absolute inset-0 bg-gradient-to-t from-pink-100/60 to-transparent z-10" aria-hidden="true"></div>

                            {/* Image Carousel */}
                            <div className="relative w-full h-full overflow-hidden">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        onError={(e) => { e.target.src = 'https://placehold.co/400x600/1a1a1a/FFF?text=No+Image' }}
                                        alt={`${profile.name} - ${profile.role} ${idx + 1}`}
                                        className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ${idx === currentImageIndex
                                            ? 'opacity-100 z-10 scale-100'
                                            : 'opacity-0 z-0 scale-105 pointer-events-none'
                                            } group-hover:scale-105`}
                                        loading={idx === 0 ? "eager" : "lazy"}
                                    />
                                ))}
                            </div>

                            {/* Navigation Buttons - แสดงเมื่อมีรูปมากกว่า 1 รูป */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={goToPrevious}
                                        aria-label="Previous image"
                                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-pink-50/90 hover:bg-pink-100 text-pink-500 p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-pink-400 active:bg-pink-200 touch-manipulation"
                                    >
                                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                    <button
                                        onClick={goToNext}
                                        aria-label="Next image"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-pink-50/90 hover:bg-pink-100 text-pink-500 p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-pink-400 active:bg-pink-200 touch-manipulation"
                                    >
                                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>

                                    {/* Dots Indicator */}
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        {images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => goToImage(idx)}
                                                aria-label={`Go to image ${idx + 1}`}
                                                className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-transparent ${idx === currentImageIndex
                                                    ? 'bg-pink-400 w-6'
                                                    : 'bg-pink-200 hover:bg-pink-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Auto-play Indicator */}
                                    {isAutoPlay && (
                                        <div className="absolute top-3 right-3 z-20 bg-pink-50/90 text-pink-500 text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            Auto
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-0.5 sm:mb-1">{profile.name}</h1>
                        <p className={`${profile.themeColor} font-medium tracking-wider text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4 md:mb-6`} role="text" aria-label="Role">
                            {language === 'th' ? profile.role : (profile.roleEn || profile.role)}
                        </p>

                        <nav className="space-y-2 sm:space-y-3 w-full" aria-label="Social Media Links">
                            {socials.map((social, idx) => {
                                // แปลงตัวเลขให้ดูดีขึ้น - ใช้รูปแบบที่ดูเป็นมืออาชีพและไม่เน้นตัวเลขน้อย
                                const formatCount = (countStr) => {
                                    const num = parseInt(countStr.replace(/,/g, ''));
                                    if (num >= 1000000) {
                                        const m = (num / 1000000).toFixed(1);
                                        return m.endsWith('.0') ? `${m.replace('.0', '')}M` : `${m}M`;
                                    } else if (num >= 1000) {
                                        const k = (num / 1000).toFixed(1);
                                        return k.endsWith('.0') ? `${k.replace('.0', '')}K` : `${k}K`;
                                    }
                                    // สำหรับตัวเลขน้อยกว่า 1000 ให้แสดงเป็น "Active" แทนตัวเลข
                                    return 'Active';
                                };

                                const formattedCount = formatCount(social.count);
                                const num = parseInt(social.count.replace(/,/g, ''));

                                return (
                                    <a
                                        key={idx}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center bg-sky-50/80 p-2 sm:p-2.5 rounded-lg backdrop-blur-sm hover:bg-pink-100 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/20 border border-transparent hover:border-pink-200 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-transparent active:bg-pink-100 active:scale-[0.98] touch-manipulation"
                                        role="listitem"
                                        aria-label={`Visit ${social.platform} profile`}
                                    >
                                        <social.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${social.color} mr-2 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200`} aria-hidden="true" />
                                        <div className="text-left flex-1 min-w-0">
                                            <p className="text-xs text-slate-600 group-hover:text-slate-700 truncate transition-colors" aria-label={`${social.platform} platform`}>{social.platform}</p>
                                            <p className="font-bold text-sm sm:text-base group-hover:text-pink-600 truncate transition-colors flex items-center gap-1.5" aria-label={`${social.platform} count: ${social.count}`}>
                                                <span>{formattedCount}</span>
                                                {num >= 1000 && (
                                                    <span className="text-[10px] font-normal text-slate-600/90">
                                                        {language === 'th' ? 'ผู้ติดตาม' : 'followers'}
                                                    </span>
                                                )}
                                                {num < 1000 && (
                                                    <span className="text-[10px] font-normal text-slate-600/90 italic">
                                                        {language === 'th' ? 'ชุมชน' : 'community'}
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 group-hover:text-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-200 ml-2 flex-shrink-0" aria-hidden="true" />
                                    </a>
                                );
                            })}
                        </nav>

                        {/* Contact Section */}
                        <div className="mt-4 sm:mt-5 w-full">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs sm:text-sm text-slate-600 text-center" aria-label="Contact information">
                                    {language === 'th' ? 'สนใจร่วมงาน ติดต่อได้ที่ :' : 'Interested in collaboration? Contact us:'}
                                </span>
                                <div className="flex flex-col gap-2">
                                    {/* Email */}
                                    <a
                                        href={contact.emailLink}
                                        aria-label={`Contact via email: ${contact.email}`}
                                        className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-pink-500 text-white px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-full text-xs sm:text-sm md:text-base font-bold hover:bg-pink-600 hover:text-white transition-all shadow-lg shadow-pink-500/20 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-transparent active:bg-pink-500 active:text-white touch-manipulation w-full"
                                    >
                                        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" aria-hidden="true" />
                                        <span className="text-center text-[10px] sm:text-[11px] md:text-xs lg:text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-full">{contact.email}</span>
                                    </a>

                                    {/* Line */}
                                    <a
                                        href={contact.lineLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Contact via Line: ${contact.line} ${language === 'th' ? contact.lineTh : contact.lineEn} (${language === 'th' ? contact.lineRole : contact.lineRoleEn})`}
                                        className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#00C300] text-white px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-full text-xs sm:text-sm md:text-base font-bold hover:bg-[#00A300] transition-all shadow-lg shadow-green-500/20 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent active:bg-[#008A00] touch-manipulation w-full"
                                    >
                                        <LineIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" aria-hidden="true" />
                                        <span className="flex flex-col items-center text-center">
                                            <span className="text-white font-bold text-[11px] sm:text-xs md:text-sm lg:text-base break-all">
                                                {contact.line}
                                            </span>
                                            <span className="text-white/70 font-normal text-[10px] sm:text-[10px] md:text-xs lg:text-sm break-all">
                                                {language === 'th' ? contact.lineTh : contact.lineEn} ({language === 'th' ? contact.lineRole : contact.lineRoleEn})
                                            </span>
                                        </span>
                                    </a>
                                    
                                    {/* Discord */}
                                    <a
                                        href={contact.discordLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Contact via Discord: ${contact.discord} ${language === 'th' ? contact.discordTh : contact.discordEn} (${language === 'th' ? contact.discordRole : contact.discordRoleEn})`}
                                        className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#5865F2] text-white px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-full text-xs sm:text-sm md:text-base font-bold hover:bg-[#4752C4] transition-all shadow-lg shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent active:bg-[#3C45A5] touch-manipulation w-full"
                                    >
                                        <DiscordIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" aria-hidden="true" />
                                        <span className="flex flex-col items-center text-center">
                                            <span className="text-white font-bold text-[11px] sm:text-xs md:text-sm lg:text-base break-all">
                                                {contact.discord}
                                            </span>
                                            <span className="text-white/70 font-normal text-[10px] sm:text-[10px] md:text-xs lg:text-sm break-all">
                                                {language === 'th' ? contact.discordTh : contact.discordEn} ({language === 'th' ? contact.discordRole : contact.discordRoleEn})
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Right Section */}
                <section className="w-full md:w-[65%] p-4 sm:p-6 md:p-8 bg-pink-50/90 flex flex-col" aria-label="Rate Card Content">
                    {/* Stats */}
                    <section className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mb-3 sm:mb-4 md:mb-6 lg:mb-8" aria-label="Statistics Overview" role="region">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-pink-50 p-1.5 sm:p-2 md:p-3 lg:p-4 rounded-md sm:rounded-lg md:rounded-xl border border-pink-200 text-center" role="article" aria-label={`${stat.labelEn || stat.label}: ${stat.value}`}>
                                <div aria-hidden="true" className="mb-0.5 sm:mb-1 md:mb-2">{getStatIcon(idx)}</div>
                                <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold break-words leading-tight" aria-label={`${stat.labelEn || stat.label} value`}>{stat.value}</h3>
                                <p className={`text-[9px] sm:text-[10px] md:text-xs text-slate-600 mt-0.5 sm:mt-1 break-words leading-tight ${language === 'th' ? 'min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center' : ''}`} aria-label={`${stat.labelEn || stat.label} label`}>
                                    {language === 'th' ? stat.label : (stat.labelEn || stat.label)}
                                </p>
                            </div>
                        ))}
                    </section>

                    {/* Tabs */}
                    <nav className="grid grid-cols-3 gap-0.5 sm:gap-1 md:gap-2 border-b border-pink-100 mb-3 sm:mb-4 md:mb-6" role="tablist" aria-label="Content Navigation">
                        <button
                            onClick={() => setActiveTab('services')}
                            role="tab"
                            aria-selected={activeTab === 'services'}
                            aria-controls="services-panel"
                            id="services-tab"
                            className={`pb-1.5 sm:pb-2 md:pb-3 px-0.5 sm:px-1 md:px-2 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-white rounded-t active:bg-pink-100 text-center min-h-[44px] sm:min-h-[48px] flex flex-col items-center justify-center ${activeTab === 'services' ? `${profile.themeColor} border-b-2 border-pink-400` : 'text-slate-600 hover:text-pink-500'}`}
                        >
                            <span className={`block leading-tight ${language === 'th' ? 'text-[9px] sm:text-[10px] md:text-xs font-bold' : 'text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider'}`}>
                                {language === 'th' ? 'บริการและราคา' : 'Services & Rates'}
                            </span>
                            <span className={`block mt-0.5 leading-tight ${language === 'th' ? 'text-[7px] sm:text-[8px] md:text-[9px] font-normal normal-case italic text-slate-600' : 'text-[7px] sm:text-[8px] md:text-[9px] font-normal normal-case italic text-slate-600'}`}>
                                {language === 'th' ? 'Services & Rates' : 'บริการและราคา'}
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab('demography')}
                            role="tab"
                            aria-selected={activeTab === 'demography'}
                            aria-controls="demography-panel"
                            id="demography-tab"
                            className={`pb-1.5 sm:pb-2 md:pb-3 px-0.5 sm:px-1 md:px-2 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-white rounded-t active:bg-pink-100 text-center min-h-[44px] sm:min-h-[48px] flex flex-col items-center justify-center ${activeTab === 'demography' ? `${profile.themeColor} border-b-2 border-pink-400` : 'text-slate-600 hover:text-pink-500'}`}
                        >
                            <span className={`block leading-tight ${language === 'th' ? 'text-[9px] sm:text-[10px] md:text-xs font-bold' : 'text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider'}`}>
                                {language === 'th' ? 'ข้อมูลผู้ชม' : 'Demography'}
                            </span>
                            <span className={`block mt-0.5 leading-tight ${language === 'th' ? 'text-[7px] sm:text-[8px] md:text-[9px] font-normal normal-case italic text-slate-600' : 'text-[7px] sm:text-[8px] md:text-[9px] font-normal normal-case italic text-slate-600'}`}>
                                {language === 'th' ? 'Demography' : 'ข้อมูลผู้ชม'}
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab('terms')}
                            role="tab"
                            aria-selected={activeTab === 'terms'}
                            aria-controls="terms-panel"
                            id="terms-tab"
                            className={`pb-1.5 sm:pb-2 md:pb-3 px-0.5 sm:px-1 md:px-2 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-white rounded-t active:bg-pink-100 text-center min-h-[44px] sm:min-h-[48px] flex flex-col items-center justify-center ${activeTab === 'terms' ? `${profile.themeColor} border-b-2 border-pink-400` : 'text-slate-600 hover:text-pink-500'}`}
                        >
                            <span className={`block leading-tight ${language === 'th' ? 'text-[9px] sm:text-[10px] md:text-xs font-bold' : 'text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider'}`}>
                                {language === 'th' ? 'เงื่อนไข' : 'Terms & Conditions'}
                            </span>
                            <span className={`block mt-0.5 leading-tight ${language === 'th' ? 'text-[7px] sm:text-[8px] md:text-[9px] font-normal normal-case italic text-slate-600' : 'text-[7px] sm:text-[8px] md:text-[9px] font-normal normal-case italic text-slate-600'}`}>
                                {language === 'th' ? 'Terms & Conditions' : 'เงื่อนไข'}
                            </span>
                        </button>
                    </nav>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto pr-1 sm:pr-2 custom-scrollbar" style={{ maxHeight: 'calc(100vh - 200px)', minHeight: '250px' }} role="tabpanel" aria-labelledby={`${activeTab}-tab`} id={`${activeTab}-panel`}>
                        {activeTab === 'services' ? (
                            <section className="space-y-3 sm:space-y-4" aria-label="Services and Rates">
                                {services.map((service, idx) => (
                                    <article
                                        key={idx}
                                        onClick={() => openServiceModal(service)}
                                        className="bg-pink-50/80 p-2.5 sm:p-3 md:p-4 lg:p-5 rounded-md sm:rounded-lg md:rounded-xl border border-pink-100 hover:border-pink-500/50 transition-all cursor-pointer hover:bg-pink-50 hover:shadow-lg hover:shadow-pink-500/10 flex flex-col sm:flex-row items-start sm:items-center justify-between group gap-2 sm:gap-3 md:gap-4 min-h-[80px] sm:min-h-[100px]"
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`Service: ${service.title} - Click to view details`}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                openServiceModal(service);
                                            }
                                        }}
                                    >
                                        <div className="flex items-start gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                                            <div className="p-1.5 sm:p-2 md:p-3 bg-pink-100/60 rounded-md sm:rounded-lg text-pink-500 group-hover:bg-pink-500 transition-colors flex-shrink-0" aria-hidden="true">
                                                {getServiceIcon(service.title)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-bold text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1 break-words leading-tight">{service.title}</h4>
                                                <p className={`text-[11px] sm:text-xs md:text-sm text-slate-600 mb-1.5 sm:mb-2 break-words leading-relaxed ${language === 'th' ? 'min-h-[2rem] sm:min-h-[2.5rem]' : ''}`}>
                                                    {language === 'th' ? service.description : (service.descriptionEn || service.description)}
                                                    {language === 'th' && service.descriptionEn && (
                                                        <span className="block text-[9px] sm:text-[10px] text-slate-600/90 mt-0.5 italic leading-tight">
                                                            {service.descriptionEn}
                                                        </span>
                                                    )}
                                                    {language === 'en' && service.description && (
                                                        <span className="block text-[9px] sm:text-[10px] text-slate-600/90 mt-0.5 italic leading-tight">
                                                            {service.description}
                                                        </span>
                                                    )}
                                                </p>
                                                {service.details && service.details.length > 0 && (
                                                    <span className="text-[10px] sm:text-xs text-pink-400 font-medium inline-flex items-center gap-1 group-hover:text-pink-300 transition-colors">
                                                        {language === 'th' ? 'คลิกเพื่อดูรายละเอียด' : 'Click to view details'}
                                                        <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-left sm:text-right w-full sm:w-auto sm:min-w-[90px] md:min-w-[100px] flex-shrink-0">
                                            <span className="block text-base sm:text-lg md:text-xl font-bold text-pink-700 whitespace-nowrap" aria-label={`Price: ${service.price}`}>{service.price}</span>
                                            <span className="text-[10px] sm:text-xs text-slate-600" aria-label={`Unit: ${service.unit}`}>{service.unit}</span>
                                        </div>
                                    </article>
                                ))}
                            </section>
                        ) : activeTab === 'demography' ? (
                            <section className="space-y-4 sm:space-y-6" aria-label="Demography Data">
                                {/* Overview Stats - แสดงตาม Platform ที่เลือก */}
                                {overview && overview[demographyPlatform] && (
                                    <section className="bg-gradient-to-br from-pink-50 to-sky-50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-md sm:rounded-lg md:rounded-xl border border-pink-200" aria-label="Overview Statistics for TikTok">
                                        <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 md:mb-4 flex items-center gap-1.5 sm:gap-2">
                                            <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400" aria-hidden="true" />
                                            <span className="break-words">
                                                {language === 'th' ? 'ภาพรวม TikTok (9 ก.พ. 2026 - 9 เม.ย. 2026)' : 'TikTok Overview (Feb 9, 2026 - Apr 9, 2026)'}
                                            </span>
                                        </h3>
                                        <div className={`grid grid-cols-1 ${overview[demographyPlatform].monthlyViewers ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 md:grid-cols-3'} gap-2 sm:gap-3 md:gap-4`}>
                                            {overview[demographyPlatform].monthlyViewers && (
                                                <div className="bg-rose-50/90 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg border border-pink-100">
                                                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                                                        <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400" />
                                                        <span className="text-[10px] sm:text-xs md:text-sm text-slate-600">
                                                            {language === 'th' ? 'ผู้ชมรายเดือน' : 'Monthly Viewers'}
                                                        </span>
                                                    </div>
                                                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-0.5 sm:mb-1 break-words">{overview[demographyPlatform].monthlyViewers}</div>
                                                    <div className="text-[10px] sm:text-xs text-slate-600 mt-1 sm:mt-2">
                                                        {language === 'th' ? 'จำนวนผู้ชมทั้งหมดโดยประมาณ' : '(Approx.)'}
                                                    </div>
                                                    {language === 'th' && (
                                                        <div className="text-[9px] sm:text-[10px] text-slate-600/90 italic mt-0.5 sm:mt-1">Monthly Viewers (Approx.)</div>
                                                    )}
                                                    {language === 'en' && (
                                                        <div className="text-[9px] sm:text-[10px] text-slate-600/90 italic mt-0.5 sm:mt-1">จำนวนผู้ชมทั้งหมดโดยประมาณ</div>
                                                    )}
                                                </div>
                                            )}
                                            <div className="bg-rose-50/90 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg border border-pink-100">
                                                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                                                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400" />
                                                    <span className="text-[10px] sm:text-xs md:text-sm text-slate-600">
                                                        {language === 'th' ? 'จำนวนการดู' : 'Views'}
                                                    </span>
                                                </div>
                                                <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-0.5 sm:mb-1 break-words">{overview[demographyPlatform].views}</div>
                                                <div className="flex items-center gap-1 text-green-400 text-[10px] sm:text-xs md:text-sm">
                                                    <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                                                    <span className="break-words">
                                                        {language === 'th' ? `มากกว่าปกติ ${overview[demographyPlatform].viewsChange}` : `Above average ${overview[demographyPlatform].viewsChange}`}
                                                    </span>
                                                </div>
                                                {language === 'th' && (
                                                    <div className="text-[9px] sm:text-[10px] text-slate-600/90 italic mt-0.5 sm:mt-1">Views (Above average {overview[demographyPlatform].viewsChange})</div>
                                                )}
                                                {language === 'en' && (
                                                    <div className="text-[9px] sm:text-[10px] text-slate-600/90 italic mt-0.5 sm:mt-1">มากกว่าปกติ {overview[demographyPlatform].viewsChange}</div>
                                                )}
                                            </div>
                                            <div className="bg-rose-50/90 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg border border-pink-100">
                                                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                                                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400" />
                                                    <span className="text-[10px] sm:text-xs md:text-sm text-slate-600 break-words">
                                                        {language === 'th' ? 'เวลาในการรับชม (ชั่วโมง)' : 'Watch Time (hours)'}
                                                    </span>
                                                </div>
                                                <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-0.5 sm:mb-1 break-words">{overview[demographyPlatform].watchTime}</div>
                                                <div className="flex items-center gap-1 text-green-400 text-[10px] sm:text-xs md:text-sm">
                                                    <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                                                    <span className="break-words">
                                                        {language === 'th' ? `มากกว่าปกติ ${overview[demographyPlatform].watchTimeChange}` : `Above average ${overview[demographyPlatform].watchTimeChange}`}
                                                    </span>
                                                </div>
                                                {language === 'th' && (
                                                    <div className="text-[9px] sm:text-[10px] text-slate-600/90 italic mt-0.5 sm:mt-1">Watch Time (hours) (Above average {overview[demographyPlatform].watchTimeChange})</div>
                                                )}
                                                {language === 'en' && (
                                                    <div className="text-[9px] sm:text-[10px] text-slate-600/90 italic mt-0.5 sm:mt-1">เวลาในการรับชม (ชั่วโมง) (มากกว่าปกติ {overview[demographyPlatform].watchTimeChange})</div>
                                                )}
                                            </div>
                                            <div className="bg-rose-50/90 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg border border-pink-100">
                                                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                                                    <UserPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400" />
                                                    <span className="text-[10px] sm:text-xs md:text-sm text-slate-600">
                                                        {language === 'th' ? 'ผู้ติดตาม' : 'Subscribers'}
                                                    </span>
                                                </div>
                                                <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-0.5 sm:mb-1 break-words">{overview[demographyPlatform].subscribers}</div>
                                                <div className="flex items-center gap-1 text-green-400 text-[10px] sm:text-xs md:text-sm">
                                                    <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                                                    <span className="break-words">
                                                        {language === 'th' ? `มากกว่าปกติ ${overview[demographyPlatform].subscribersChange}` : `Above average ${overview[demographyPlatform].subscribersChange}`}
                                                    </span>
                                                </div>
                                                {language === 'th' && (
                                                    <div className="text-[9px] sm:text-[10px] text-slate-600/90 italic mt-0.5 sm:mt-1">Subscribers (Above average {overview[demographyPlatform].subscribersChange})</div>
                                                )}
                                                {language === 'en' && (
                                                    <div className="text-[9px] sm:text-[10px] text-slate-600/90 italic mt-0.5 sm:mt-1">ผู้ติดตาม (มากกว่าปกติ {overview[demographyPlatform].subscribersChange})</div>
                                                )}
                                            </div>
                                        </div>

                                        {(overview[demographyPlatform].peakTime || overview[demographyPlatform].trafficSources?.length > 0) && (
                                            <div className="mt-3 sm:mt-4 md:mt-5 grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                                                {overview[demographyPlatform].peakTime && (
                                                    <article className="bg-rose-50/90 p-3 sm:p-4 rounded-md sm:rounded-lg border border-pink-100">
                                                        <h4 className="text-sm sm:text-base font-bold text-slate-800 mb-1.5 sm:mb-2">
                                                            {language === 'th' ? 'Peak Time' : 'Peak Time'}
                                                        </h4>
                                                        <p className="text-[10px] sm:text-xs text-slate-600 mb-2">
                                                            {language === 'th'
                                                                ? overview[demographyPlatform].peakTime.descriptionTh
                                                                : overview[demographyPlatform].peakTime.descriptionEn}
                                                        </p>
                                                        <div className="flex items-end justify-between gap-3">
                                                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                                                                {overview[demographyPlatform].peakTime.time}
                                                            </span>
                                                            <span className="text-xs sm:text-sm text-slate-600">
                                                                {language === 'th'
                                                                    ? overview[demographyPlatform].peakTime.topDateTh
                                                                    : overview[demographyPlatform].peakTime.topDateEn}
                                                            </span>
                                                        </div>
                                                    </article>
                                                )}

                                                {overview[demographyPlatform].trafficSources?.length > 0 && (
                                                    <article className="bg-rose-50/90 p-3 sm:p-4 rounded-md sm:rounded-lg border border-pink-100">
                                                        <h4 className="text-sm sm:text-base font-bold text-slate-800 mb-2 sm:mb-3">
                                                            {language === 'th' ? 'ที่มาของยอดเข้าชม' : 'Traffic Sources'}
                                                        </h4>
                                                        <div className="space-y-2.5 sm:space-y-3">
                                                            {overview[demographyPlatform].trafficSources.map((source, sourceIndex) => (
                                                                <div key={sourceIndex}>
                                                                    <div className="flex items-center justify-between text-[11px] sm:text-xs mb-1">
                                                                        <span className="text-slate-700">
                                                                            {language === 'th' ? source.label : (source.labelEn || source.label)}
                                                                        </span>
                                                                        <span className="font-bold text-slate-800">{source.value}%</span>
                                                                    </div>
                                                                    <div className="w-full h-2 rounded-full bg-slate-200/80 overflow-hidden">
                                                                        <div
                                                                            className="h-full rounded-full bg-gradient-to-r from-sky-400 to-pink-400"
                                                                            style={{ width: `${Math.min(source.value, 100)}%` }}
                                                                        ></div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </article>
                                                )}
                                            </div>
                                        )}
                                    </section>
                                )}

                                {/* Demography Data with Charts */}
                                <div className="space-y-2.5 sm:space-y-3 md:space-y-4" role="region" aria-label="Demography Charts">
                                    {demography[demographyPlatform]?.map((demo, idx) => (
                                        <article key={idx} className="bg-pink-50/80 p-2.5 sm:p-3 md:p-4 lg:p-5 rounded-md sm:rounded-lg md:rounded-xl border border-pink-100 hover:border-pink-500/50 transition-colors" role="article" aria-label={`${demo.label} Chart`}>
                                            <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                                                <div className="p-1.5 sm:p-2 md:p-3 bg-pink-100/60 rounded-md sm:rounded-lg flex-shrink-0" aria-hidden="true">
                                                    <BarChart3 className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${demo.iconColor}`} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2 md:mb-3 break-words">
                                                        {language === 'th' ? demo.label : (demo.labelEn || demo.label)}
                                                    </h4>
                                                    <div role="img" aria-label={`${demo.label} data visualization`}>
                                                        {renderBarChart(
                                                            demo.data,
                                                            100,
                                                            demo.label !== "Viewer Statistics" && demo.label !== "Chat Engagement"
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        ) : (
                            <section className="space-y-2.5 sm:space-y-3 md:space-y-4 text-[11px] sm:text-xs md:text-sm text-slate-700" aria-label="Terms and Conditions">
                                {terms.map((term, idx) => (
                                    <article key={idx} className="p-2.5 sm:p-3 md:p-4 bg-pink-50/80 rounded-md sm:rounded-lg border border-pink-100" role="article">
                                        <h4 className={`font-bold ${profile.themeColor} mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base`}>
                                            {language === 'th' ? term.title : (term.titleEn || term.title)}
                                        </h4>
                                        <p className="break-words leading-relaxed mb-1.5 sm:mb-2">
                                            {language === 'th' ? term.content : (term.contentEn || term.content)}
                                        </p>
                                        {language === 'th' && term.contentEn && (
                                            <p className="break-words leading-relaxed text-[10px] sm:text-[11px] text-slate-600/90 italic border-t border-pink-200/50 pt-1.5 sm:pt-2">
                                                {term.contentEn}
                                            </p>
                                        )}
                                        {language === 'en' && term.content && (
                                            <p className="break-words leading-relaxed text-[10px] sm:text-[11px] text-slate-600/90 italic border-t border-pink-200/50 pt-1.5 sm:pt-2">
                                                {term.content}
                                            </p>
                                        )}
                                    </article>
                                ))}
                            </section>
                        )}
                    </div>

                </section>

                {/* Last Updated - Bottom right of card */}
                {lastUpdated && (
                    <div
                        className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-4 md:right-4 z-40 print:hidden"
                        aria-label={`Last updated: ${new Date(lastUpdated).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}`}
                    >
                        <div className="text-[10px] sm:text-xs text-slate-600/90 bg-pink-50/90 backdrop-blur-sm p-1.5 sm:p-2 md:p-2.5 rounded-md sm:rounded-lg border border-pink-200/60 shadow-lg max-w-[calc(100vw-2rem)] sm:max-w-none">
                            {language === 'th' ? (
                                <div className="text-center break-words sm:whitespace-nowrap">อัพเดตล่าสุด: {new Date(lastUpdated).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                            ) : (
                                <div className="text-center break-words sm:whitespace-nowrap">Last Updated: {new Date(lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Service Details Modal */}
            {isModalOpen && selectedService && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pink-100/80 backdrop-blur-sm animate-in fade-in duration-300"
                    onClick={closeServiceModal}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div
                        className="bg-rose-50 rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto custom-scrollbar border border-pink-100 animate-in zoom-in-95 duration-300 m-2 sm:m-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-rose-50/95 backdrop-blur-sm border-b border-pink-100 p-3 sm:p-4 md:p-6 flex items-start justify-between gap-2 sm:gap-4 z-10">
                            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                                <div className="p-2 sm:p-3 bg-pink-100/60 rounded-lg text-pink-600 flex-shrink-0">
                                    {getServiceIcon(selectedService.title)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h2 id="modal-title" className="font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 break-words text-slate-800">
                                        {selectedService.title}
                                    </h2>
                                    <p className="text-xs sm:text-sm md:text-base text-slate-600 break-words">
                                        {language === 'th' ? selectedService.description : (selectedService.descriptionEn || selectedService.description)}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={closeServiceModal}
                                className="p-2 hover:bg-pink-100 rounded-lg transition-colors flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-pink-400 min-w-[44px] min-h-[44px] flex items-center justify-center"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 hover:text-pink-600" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-5 md:space-y-6">
                            {/* Price */}
                            <div className="bg-gradient-to-r from-pink-100 to-sky-100 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-pink-200">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">
                                        {selectedService.price}
                                    </span>
                                    <span className="text-xs sm:text-sm md:text-base text-slate-600">
                                        {selectedService.unit}
                                    </span>
                                </div>
                            </div>

                            {/* Details */}
                            {selectedService.details && selectedService.details.length > 0 && (
                                <div>
                                    <h3 className={`font-bold ${profile.themeColor} mb-3 text-base sm:text-lg`}>
                                        {language === 'th' ? 'รายละเอียด' : 'Details'}
                                    </h3>
                                    <ul className="space-y-3" role="list">
                                        {selectedService.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-3" role="listitem">
                                                <div className="mt-1.5 flex-shrink-0">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm sm:text-base text-slate-700 break-words leading-relaxed">
                                                        {language === 'th' ? detail : (selectedService.detailsEn && selectedService.detailsEn[i] ? selectedService.detailsEn[i] : detail)}
                                                    </p>
                                                    {language === 'th' && selectedService.detailsEn && selectedService.detailsEn[i] && (
                                                        <p className="text-xs sm:text-sm text-slate-600/90 mt-1 italic break-words">
                                                            {selectedService.detailsEn[i]}
                                                        </p>
                                                    )}
                                                    {language === 'en' && detail && (
                                                        <p className="text-xs sm:text-sm text-slate-600/90 mt-1 italic break-words">
                                                            {detail}
                                                        </p>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="sticky bottom-0 bg-rose-50/95 backdrop-blur-sm border-t border-pink-100 p-3 sm:p-4 md:p-6">
                            <button
                                onClick={closeServiceModal}
                                className="w-full bg-gradient-to-r from-pink-500 to-sky-500 hover:from-pink-600 hover:to-sky-600 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all shadow-lg shadow-pink-500/20 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-white active:scale-95 min-h-[44px] text-sm sm:text-base"
                            >
                                {language === 'th' ? 'ปิด' : 'Close'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
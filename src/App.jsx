import React, { useState } from 'react';
import { Mail, Users, Star, Globe, Video, MousePointer2, Mic, BarChart3, ExternalLink, Film, Share2, Youtube, Twitch, TrendingUp, Eye, Clock, UserPlus } from 'lucide-react';
import { talentData } from './data'; // Import ข้อมูลจากไฟล์ data.js

const App = () => {
    const [activeTab, setActiveTab] = useState('services');
    const [demographyPlatform, setDemographyPlatform] = useState('youtube');
    const { profile, socials, stats, services, terms, contact, demography, portfolio, lastUpdated, overview } = talentData;

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
        if (index === 0) return <Users className={`w-6 h-6 ${stats[0].iconColor} mx-auto mb-2`} />;
        if (index === 1) return <Star className={`w-6 h-6 ${stats[1].iconColor} mx-auto mb-2`} />;
        return <Globe className={`w-6 h-6 ${stats[2].iconColor} mx-auto mb-2`} />;
    };

    // Function สำหรับสร้างกราฟ Bar Chart
    const renderBarChart = (data, maxValue = 100) => {
        const entries = Object.entries(data);
        return (
            <div className="space-y-3 mt-4">
                {entries.map(([key, value], idx) => (
                    <div key={idx}>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-300">{key}</span>
                            <span className="text-sm font-bold text-white">{value}%</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
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

    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans p-4 md:p-8 flex items-center justify-center">
            <div className="max-w-5xl w-full bg-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-700">

                {/* Left Section: Dynamic Profile */}
                <div className={`w-full md:w-[35%] bg-gradient-to-b ${profile.bgColor} p-8 flex flex-col items-center justify-between relative overflow-hidden`}>
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
                    </div>

                    <div className="z-10 text-center w-full">
                        <div className="mb-6 inline-block p-1 border-2 border-pink-400 rounded-full">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center overflow-hidden">
                                {profile.logo ? (
                                    <img
                                        src={profile.logo}
                                        alt="Logo"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            const fallback = e.target.parentElement.querySelector('.logo-fallback');
                                            if (fallback) fallback.style.display = 'block';
                                        }}
                                    />
                                ) : null}
                                <span className={`${profile.themeColor} font-bold text-xl logo-fallback ${profile.logo ? 'hidden' : 'block'}`}>LOGO</span>
                            </div>
                        </div>

                        <div className="relative mx-auto w-full aspect-[3/4] bg-gray-900/50 rounded-xl border border-white/10 mb-6 flex items-center justify-center overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            {/* รูปภาพจะดึงจาก data.js */}
                            <img
                                src={profile.image}
                                onError={(e) => { e.target.src = 'https://placehold.co/400x600/1a1a1a/FFF?text=No+Image' }}
                                alt="VTuber Model"
                                className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <h1 className="text-3xl font-bold text-white mb-1">{profile.name}</h1>
                        <p className={`${profile.themeColor} font-medium tracking-wider text-sm mb-6`}>{profile.role}</p>

                        <div className="space-y-3 w-full">
                            {socials.map((social, idx) => (
                                <div key={idx} className="flex items-center bg-black/20 p-2 rounded-lg backdrop-blur-sm">
                                    <social.icon className={`w-5 h-5 ${social.color} mr-3`} />
                                    <div className="text-left flex-1">
                                        <p className="text-xs text-gray-400">{social.platform}</p>
                                        <p className="font-bold">{social.count}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-[65%] p-8 bg-gray-800 flex flex-col">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-gray-700/50 p-4 rounded-xl border border-gray-600 text-center">
                                {getStatIcon(idx)}
                                <h3 className="text-2xl font-bold">{stat.value}</h3>
                                <p className="text-xs text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-4 border-b border-gray-700 mb-6">
                        <button
                            onClick={() => setActiveTab('services')}
                            className={`pb-3 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'services' ? `${profile.themeColor} border-b-2 border-pink-400` : 'text-gray-500 hover:text-white'}`}
                        >
                            Services & Rates
                        </button>
                        <button
                            onClick={() => setActiveTab('demography')}
                            className={`pb-3 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'demography' ? `${profile.themeColor} border-b-2 border-pink-400` : 'text-gray-500 hover:text-white'}`}
                        >
                            Demography
                        </button>
                        <button
                            onClick={() => setActiveTab('portfolio')}
                            className={`pb-3 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'portfolio' ? `${profile.themeColor} border-b-2 border-pink-400` : 'text-gray-500 hover:text-white'}`}
                        >
                            Portfolio
                        </button>
                        <button
                            onClick={() => setActiveTab('terms')}
                            className={`pb-3 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'terms' ? `${profile.themeColor} border-b-2 border-pink-400` : 'text-gray-500 hover:text-white'}`}
                        >
                            Terms & Conditions
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar" style={{ maxHeight: '400px' }}>
                        {activeTab === 'services' ? (
                            <div className="space-y-4">
                                {services.map((service, idx) => (
                                    <div key={idx} className="bg-gray-700/30 p-5 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-colors flex items-center justify-between group">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-white/5 rounded-lg text-white group-hover:bg-pink-500 transition-colors">
                                                {getServiceIcon(service.title)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">{service.title}</h4>
                                                <p className="text-sm text-gray-400 mb-1">{service.description}</p>
                                                {service.details.length > 0 && (
                                                    <ul className="text-xs text-gray-500 list-disc list-inside mt-1">
                                                        {service.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-right min-w-[100px]">
                                            <span className="block text-xl font-bold text-white whitespace-nowrap">{service.price}</span>
                                            <span className="text-xs text-gray-500">{service.unit}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : activeTab === 'demography' ? (
                            <div className="space-y-6">
                                {/* Platform Selector */}
                                <div className="flex gap-4 border-b border-gray-700 pb-4">
                                    <button
                                        onClick={() => setDemographyPlatform('youtube')}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-colors ${demographyPlatform === 'youtube'
                                            ? 'bg-red-500/20 text-red-400 border-2 border-red-500'
                                            : 'bg-gray-700/30 text-gray-400 hover:text-white border-2 border-transparent'
                                            }`}
                                    >
                                        <Youtube className="w-5 h-5" />
                                        YouTube
                                    </button>
                                    <button
                                        onClick={() => setDemographyPlatform('twitch')}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-colors ${demographyPlatform === 'twitch'
                                            ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-500'
                                            : 'bg-gray-700/30 text-gray-400 hover:text-white border-2 border-transparent'
                                            }`}
                                    >
                                        <Twitch className="w-5 h-5" />
                                        Twitch
                                    </button>
                                </div>

                                {/* Overview Stats - แสดงตาม Platform ที่เลือก */}
                                {overview && overview[demographyPlatform] && (
                                    <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-6 rounded-xl border border-gray-600">
                                        <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                            <BarChart3 className={`w-5 h-5 ${demographyPlatform === 'youtube' ? 'text-red-400' : 'text-purple-400'}`} />
                                            ภาพรวม 28 วันที่ผ่านมา - {demographyPlatform === 'youtube' ? 'YouTube' : 'Twitch'}
                                        </h3>
                                        <div className={`grid grid-cols-1 ${overview[demographyPlatform].monthlyViewers ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-4`}>
                                            {overview[demographyPlatform].monthlyViewers && (
                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Users className={`w-5 h-5 ${demographyPlatform === 'youtube' ? 'text-pink-500' : 'text-purple-500'}`} />
                                                        <span className="text-sm text-gray-400">ผู้ชมรายเดือน</span>
                                                    </div>
                                                    <div className="text-2xl font-bold text-white mb-1">{overview[demographyPlatform].monthlyViewers}</div>
                                                    <div className="text-xs text-gray-500 mt-2">จำนวนผู้ชมทั้งหมดโดยประมาณ</div>
                                                </div>
                                            )}
                                            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Eye className={`w-5 h-5 ${demographyPlatform === 'youtube' ? 'text-red-500' : 'text-purple-500'}`} />
                                                    <span className="text-sm text-gray-400">จำนวนการดู</span>
                                                </div>
                                                <div className="text-2xl font-bold text-white mb-1">{overview[demographyPlatform].views}</div>
                                                <div className="flex items-center gap-1 text-green-400 text-sm">
                                                    <TrendingUp className="w-4 h-4" />
                                                    <span>มากกว่าปกติ {overview[demographyPlatform].viewsChange}</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Clock className={`w-5 h-5 ${demographyPlatform === 'youtube' ? 'text-blue-500' : 'text-purple-500'}`} />
                                                    <span className="text-sm text-gray-400">เวลาในการรับชม (ชั่วโมง)</span>
                                                </div>
                                                <div className="text-2xl font-bold text-white mb-1">{overview[demographyPlatform].watchTime}</div>
                                                <div className="flex items-center gap-1 text-green-400 text-sm">
                                                    <TrendingUp className="w-4 h-4" />
                                                    <span>มากกว่าปกติ {overview[demographyPlatform].watchTimeChange}</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <UserPlus className={`w-5 h-5 ${demographyPlatform === 'youtube' ? 'text-green-500' : 'text-purple-500'}`} />
                                                    <span className="text-sm text-gray-400">ผู้ติดตาม</span>
                                                </div>
                                                <div className="text-2xl font-bold text-white mb-1">{overview[demographyPlatform].subscribers}</div>
                                                <div className="flex items-center gap-1 text-green-400 text-sm">
                                                    <TrendingUp className="w-4 h-4" />
                                                    <span>มากกว่าปกติ {overview[demographyPlatform].subscribersChange}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Demography Data with Charts */}
                                <div className="space-y-4">
                                    {demography[demographyPlatform]?.map((demo, idx) => (
                                        <div key={idx} className="bg-gray-700/30 p-5 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 bg-white/5 rounded-lg">
                                                    <BarChart3 className={`w-6 h-6 ${demo.iconColor}`} />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-lg mb-3">{demo.label}</h4>
                                                    {renderBarChart(demo.data)}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : activeTab === 'portfolio' ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {portfolio.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-700/30 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-all group overflow-hidden block"
                                    >
                                        <div className="relative aspect-video overflow-hidden">
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    e.target.src = 'https://placehold.co/640x360/1a1a1a/FFF?text=No+Thumbnail';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-bold text-lg mb-1 group-hover:text-pink-400 transition-colors">{item.title}</h4>
                                            <p className="text-sm text-gray-400">{item.description}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-4 text-sm text-gray-300">
                                {terms.map((term, idx) => (
                                    <div key={idx} className="p-4 bg-gray-700/30 rounded-lg border border-gray-700">
                                        <h4 className={`font-bold ${profile.themeColor} mb-2`}>{term.title}</h4>
                                        <p>{term.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-700">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className="text-sm text-gray-400 mb-4 md:mb-0">
                                <span className="block">สนใจร่วมงาน ติดต่อได้ที่:</span>
                            </div>
                            <a href={contact.link} className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-pink-400 hover:text-white transition-all shadow-lg shadow-pink-500/20">
                                <Mail className="w-5 h-5" />
                                {contact.email}
                            </a>
                        </div>
                        {lastUpdated && (
                            <div className="text-xs text-gray-500 text-right">
                                อัพเดตล่าสุด: {new Date(lastUpdated).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
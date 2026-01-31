'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const slides = [
    {
        title: "CLIMATE & FARMING CHALLENGES",
        subtitle: "YOUR CSA FARMING ONE SOLUTION",
        mainImage: "/farm-bg.jpg",
        mainText: "Unpredictable weather patterns, soil degradation, and resource scarcity threaten global food security.",
        cards: [
            { type: 'image', content: '/farm-bg.jpg' },
            { 
                type: 'stats', 
                uvIndex: 7, 
                uvLabel: '(high)', 
                windSpeed: '10%',
                graph: [20, 40, 30, 50, 45, 60, 55]
            },
            {
                type: 'regional',
                label: 'Regional',
                title: 'Wind Speed',
                value: '15 km/h',
                icon: '🌧️',
                description: 'New irrigation tech adapted for modern challenges.',
                dots: [false, false, false, true, false]
            },
            {
                type: 'regional',
                label: 'Regional',
                title: 'Current Temp',
                value: '28°C',
                icon: '🌡️',
                description: 'Using data for a sustainable future of farming across nations.',
                dots: [false, false, true, false, false]
            }
        ],
        tip: "Utilize drought-resistant crops to conserve water in arid regions"
    },
    {
        title: "SMART RESOURCE MANAGEMENT",
        subtitle: "YOUR CSA FARMING ONE SOLUTION",
        mainImage: "/farm-bg.jpg",
        mainText: "Optimize water usage and soil health through intelligent monitoring and automated irrigation systems.",
        cards: [
            { type: 'image', content: '/farm-bg.jpg' },
            { 
                type: 'stats', 
                uvIndex: 4, 
                uvLabel: '(low)', 
                windSpeed: '5%',
                graph: [10, 20, 15, 25, 30, 25, 20]
            },
            {
                type: 'regional',
                label: 'Soil Health',
                title: 'Moisture Level',
                value: '65%',
                icon: '🌱',
                description: 'Optimal moisture detected for current crop cycle.',
                dots: [false, true, false, false, false]
            },
            {
                type: 'regional',
                label: 'Forecast',
                title: 'Next 24h',
                value: 'Clear',
                icon: '☀️',
                description: 'Ideal conditions for scheduled harvesting activities.',
                dots: [true, false, false, false, false]
            }
        ],
        tip: "Regular soil testing can save up to 30% on fertilizer costs."
    },
    {
        title: "MARKET INTELLIGENCE",
        subtitle: "YOUR CSA FARMING ONE SOLUTION",
        mainImage: "/farm-bg.jpg",
        mainText: "Access real-time market prices and demand forecasts to maximize your farm's profitability.",
        cards: [
            { type: 'image', content: '/farm-bg.jpg' },
            { 
                type: 'stats', 
                uvIndex: 2, 
                uvLabel: '(low)', 
                windSpeed: '12%',
                graph: [40, 50, 60, 55, 45, 40, 35]
            },
            {
                type: 'regional',
                label: 'Market',
                title: 'Maize Price',
                value: '+5.2%',
                icon: '📈',
                description: 'Regional demand is increasing for sustainable produce.',
                dots: [false, false, true, false, false]
            },
            {
                type: 'regional',
                label: 'Trends',
                title: 'Global Export',
                value: 'Rising',
                icon: '🌍',
                description: 'New opportunities in international organic markets.',
                dots: [false, true, false, false, false]
            }
        ],
        tip: "Diversifying crops can reduce market risk by up to 40%."
    },
    {
        title: "COMMUNITY & SUPPORT",
        subtitle: "YOUR CSA FARMING ONE SOLUTION",
        mainImage: "/farm-bg.jpg",
        mainText: "Connect with expert agronomists and fellow farmers to share knowledge and best practices.",
        cards: [
            { type: 'image', content: '/farm-bg.jpg' },
            { 
                type: 'stats', 
                uvIndex: 5, 
                uvLabel: '(mod)', 
                windSpeed: '8%',
                graph: [25, 30, 35, 40, 35, 30, 25]
            },
            {
                type: 'regional',
                label: 'Experts',
                title: 'Online Now',
                value: '12',
                icon: '👨‍🌾',
                description: 'Get instant advice on pest management and crop health.',
                dots: [true, false, false, false, false]
            },
            {
                type: 'regional',
                label: 'Support',
                title: 'Response Time',
                value: '< 15m',
                icon: '💬',
                description: 'Our team is dedicated to your farming success.',
                dots: [false, false, false, true, false]
            }
        ],
        tip: "Peer-to-peer learning is the fastest way to adopt new CSA techniques."
    },
    {
        title: "DATA-DRIVEN DECISIONS",
        subtitle: "YOUR CSA FARMING ONE SOLUTION",
        mainImage: "/farm-bg.jpg",
        mainText: "Leverage advanced analytics and historical data to plan your seasons with precision.",
        cards: [
            { type: 'image', content: '/farm-bg.jpg' },
            { 
                type: 'stats', 
                uvIndex: 8, 
                uvLabel: '(v.high)', 
                windSpeed: '20%',
                graph: [60, 70, 80, 75, 65, 60, 55]
            },
            {
                type: 'regional',
                label: 'Analytics',
                title: 'Yield Prediction',
                value: '+15%',
                icon: '📊',
                description: 'Based on current climate data and soil trends.',
                dots: [false, true, false, false, false]
            },
            {
                type: 'regional',
                label: 'History',
                title: 'Last Season',
                value: 'Success',
                icon: '✅',
                description: 'Data indicates consistent growth across all metrics.',
                dots: [false, false, true, false, false]
            }
        ],
        tip: "Historical data analysis can improve harvest timing accuracy by 25%."
    },
    {
        title: "READY TO START?",
        subtitle: "YOUR CSA FARMING ONE SOLUTION",
        mainImage: "/farm-bg.jpg",
        mainText: "Join thousands of farmers already using CSA ONE to build a more resilient future.",
        cards: [
            { type: 'image', content: '/farm-bg.jpg' },
            { 
                type: 'stats', 
                uvIndex: 3, 
                uvLabel: '(low)', 
                windSpeed: '10%',
                graph: [20, 30, 40, 30, 20, 10, 5]
            },
            {
                type: 'regional',
                label: 'Join',
                title: 'New Users',
                value: '500+',
                icon: '✨',
                description: 'This week alone, 500+ farmers joined the nexus.',
                dots: [true, false, false, false, false]
            },
            {
                type: 'regional',
                label: 'Future',
                title: 'Resilience',
                value: '100%',
                icon: '🌟',
                description: 'Built for the challenges of tomorrow, available today.',
                dots: [false, false, false, false, true]
            }
        ],
        tip: "The best time to start climate-smart farming was yesterday; the second best time is today."
    }
];

export default function WelcomeCarousel() {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = slides.length;
    const slide = slides[currentSlide];

    if (!slide) return null;

    const handleNext = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(prev => prev + 1);
        } else {
            router.push('/role-selection');
        }
    };

    const handleSkip = () => {
        router.push('/role-selection');
    };

    return (
        <div className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans p-4">
            <div className="flex-1 flex flex-col bg-white rounded-[40px] shadow-2xl overflow-hidden max-w-5xl mx-auto w-full border border-gray-100">
                {/* Header */}
                <header className="px-10 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#0F4C3A] rounded-full flex items-center justify-center overflow-hidden">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <span className="text-white text-xl">🌱</span>
                            </div>
                        </div>
                        <span className="text-2xl font-bold text-[#1A1A1A] tracking-tight">CSA ONE</span>
                    </div>
                    
                    <nav className="flex items-center gap-10">
                        <Link href="#" className="text-gray-900 font-semibold relative py-1">
                            About
                            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2E7D32] rounded-full"></span>
                        </Link>
                        <Link href="#" className="text-gray-500 font-semibold hover:text-gray-900 transition-colors">Features</Link>
                        <Link href="#" className="text-gray-500 font-semibold hover:text-gray-900 transition-colors">Pricing</Link>
                        <Link href="#" className="text-gray-500 font-semibold hover:text-gray-900 transition-colors">FAQ</Link>
                    </nav>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                            <span className="text-[#4DB6AC] text-xl">🌐</span>
                            <span>System Status: <span className="text-[#4DB6AC]">Online</span></span>
                        </div>
                        <button className="px-8 py-2.5 border border-[#B0BEC5] text-[#607D8B] rounded-full font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm">
                            Login
                        </button>
                    </div>
                </header>

                <div className="h-px bg-gray-100 mx-10"></div>

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col px-12 py-10 overflow-y-auto">
                    
                    {/* Section 1: Challenges */}
                    <section className="mb-14">
                        <h2 className="text-2xl font-extrabold text-[#1A1A1A] mb-10 tracking-tight uppercase">{slide.title}</h2>
                        
                        <div className="flex gap-12 items-start">
                            <div className="w-[320px] aspect-[1.6/1] bg-[#E0D5C1] rounded-3xl overflow-hidden relative shadow-lg border-4 border-white">
                                <div className="absolute inset-0 bg-[url('/farm-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-80"></div>
                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    <div className="flex justify-between">
                                        <div className="w-8 h-8 bg-[#FF5252]/90 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">!</div>
                                        <div className="w-8 h-8 bg-[#FF5252]/90 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">!</div>
                                    </div>
                                    <div className="flex justify-center gap-8 translate-y-2">
                                        <span className="text-3xl drop-shadow-md">🌱</span>
                                        <span className="text-3xl drop-shadow-md">🌱</span>
                                        <span className="text-3xl drop-shadow-md">🌱</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div className="w-8 h-8 bg-[#FF5252]/90 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">!</div>
                                        <div className="w-8 h-8 bg-[#FF5252]/90 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">!</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex-1 pt-4">
                                <p className="text-xl text-[#37474F] font-medium leading-[1.6] max-w-md">
                                    {slide.mainText}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Solution Header */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-[0.15em]">{slide.subtitle}</h2>
                        <div className="w-14 h-7 bg-[#37474F] rounded-full relative p-1.5 cursor-pointer shadow-inner">
                            <div className="w-4 h-4 bg-white rounded-full absolute right-1.5 top-1.5 shadow-md"></div>
                        </div>
                    </div>

                    {/* Section 3: Cards Grid */}
                    <div className="grid grid-cols-4 gap-6 mb-12">
                        {slide.cards.map((card, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col min-h-[180px]">
                                {card.type === 'image' && (
                                    <div className="flex-1 bg-gradient-to-b from-[#90CAF9] to-[#81C784] rounded-2xl overflow-hidden relative border-4 border-white shadow-sm">
                                        <div className="absolute inset-0 bg-[url('/farm-bg.jpg')] bg-cover bg-center mix-blend-soft-light opacity-60"></div>
                                        <div className="absolute top-2 left-4 text-3xl">☁️</div>
                                        <div className="absolute bottom-2 w-full flex items-end justify-center gap-2">
                                            <span className="text-lg">🌱</span>
                                            <span className="text-lg">🌱</span>
                                            <span className="text-lg">🌱</span>
                                        </div>
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl opacity-80">📡</div>
                                        <div className="absolute right-3 top-3 text-2xl">☀️</div>
                                    </div>
                                )}
                                {card.type === 'stats' && (
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex flex-col gap-1.5">
                                                <span className="text-3xl">☀️</span>
                                                <span className="text-[11px] font-bold text-gray-800 leading-tight">
                                                    UV Index <span className="text-black font-extrabold">{card.uvIndex}</span> {card.uvLabel}
                                                </span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="w-px h-12 bg-green-800 absolute -translate-y-4"></div>
                                                <div className="text-[#2E7D32] text-4xl leading-none mt-2">✛</div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center mt-auto mb-2">
                                            <span className="text-[11px] font-bold text-gray-800">Wind Speed</span>
                                            <span className="text-[11px] font-extrabold text-black">{card.windSpeed}</span>
                                        </div>
                                        <div className="h-10 flex items-end gap-1 px-1">
                                            {card.graph?.map((h, i) => (
                                                <div key={i} className="flex-1 bg-[#4DB6AC]/20 rounded-t-lg transition-all hover:bg-[#4DB6AC]/40" style={{ height: `${h}%` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {card.type === 'regional' && (
                                    <div className="flex-1 flex flex-col">
                                        <span className="text-[10px] text-gray-400 uppercase font-extrabold mb-3 tracking-wider">{card.label}</span>
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h4 className="text-xs font-extrabold text-black mb-1">{card.title}</h4>
                                                <p className="text-sm font-bold text-gray-700">{card.value}</p>
                                            </div>
                                            <span className="text-4xl filter drop-shadow-sm">{card.icon}</span>
                                        </div>
                                        <p className="text-[10px] text-gray-500 font-semibold leading-relaxed mb-4">
                                            {card.description}
                                        </p>
                                        <div className="flex gap-1.5 mt-auto justify-center pb-1">
                                            {card.dots?.map((active, i) => (
                                                <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${active ? 'bg-[#009688] w-2' : 'bg-gray-200'}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Section 4: Featured Tip */}
                    <div className="mt-auto bg-gradient-to-r from-white via-[#E0F2F1] to-[#80CBC4] p-7 rounded-3xl flex items-center justify-between border border-teal-50 shadow-sm relative overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
                        <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        <div className="flex flex-col gap-2 relative z-10">
                            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.2em]">Featured CSA Tip</span>
                            <p className="text-base font-bold text-[#37474F] tracking-tight">
                                {slide.tip}
                            </p>
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center text-[#009688] text-3xl relative z-10 bg-white/40 rounded-full shadow-inner">
                            💡
                        </div>
                    </div>
                </main>

                {/* Footer Navigation */}
                <footer className="px-14 py-10 flex items-center justify-between bg-gray-50/50">
                    <button 
                        onClick={handleSkip}
                        className="text-sm font-black text-black uppercase tracking-[0.2em] hover:opacity-50 transition-all"
                    >
                        Skip
                    </button>

                    <div className="flex gap-3">
                        {[0, 1, 2, 3, 4, 5].map(i => (
                            <div 
                                key={i} 
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-[#1B5E20] scale-125' : 'bg-[#CFD8DC]'}`}
                            ></div>
                        ))}
                    </div>

                    <button 
                        onClick={handleNext}
                        className="px-14 py-4 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-black rounded-2xl uppercase tracking-[0.15em] shadow-[0_10px_20px_rgba(76,175,80,0.3)] transition-all active:scale-95 active:shadow-none"
                    >
                        Next
                    </button>
                </footer>
            </div>
        </div>
    );
}

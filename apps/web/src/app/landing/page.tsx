'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import { Logo } from '../../components/Logo';
import { CloudSun, Newspaper, Lightbulb, ArrowRight, ShieldCheck, Zap, BarChart3, Check } from 'lucide-react';

const heroImages = [
    'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1600', // IoT & Smart Monitoring
    'https://images.pexels.com/photos/1105166/pexels-photo-1105166.jpeg?auto=compress&cs=tinysrgb&w=1600', // Resilient Seedlings
    'https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=1600',  // Precision Tech
    'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1600', // Climate Intelligence
    'https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1600', // Community Education
    'https://images.pexels.com/photos/1482101/pexels-photo-1482101.jpeg?auto=compress&cs=tinysrgb&w=1600', // Diversified Harvest
    'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1600',   // Agricultural Research
    'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1600'  // Sustainable Landscape
];

export default function LandingPage() {
    const [currentImage, setCurrentImage] = useState(heroImages[0]);
    const [nextImage, setNextImage] = useState(heroImages[1]);
    const [isLayerActive, setIsLayerActive] = useState(false);

    useEffect(() => {
        // Preload all images immediately once
        heroImages.forEach((src) => {
            const img = new Image();
            img.src = src;
        });

        const interval = setInterval(() => {
            setCurrentImage(current => {
                // Pick a random next image that isn't the current one
                let nextIdx = Math.floor(Math.random() * heroImages.length);
                while (heroImages[nextIdx] === current) {
                    nextIdx = Math.floor(Math.random() * heroImages.length);
                }
                
                const nextImg = heroImages[nextIdx];
                setNextImage(nextImg);
                setIsLayerActive(true);

                // After transition finishes, swap current image and reset layer
                setTimeout(() => {
                    setCurrentImage(nextImg);
                    setIsLayerActive(false);
                }, 1000);

                return current; // Keep current until timeout finishes
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Hero Section */}
            <section className="relative h-[600px] rounded-b-[60px] overflow-hidden mx-4 mt-4 shadow-2xl bg-[#0F4C3A]">
                {/* Background Layer 1 (Current Image) */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${currentImage}')`,
                        backgroundBlendMode: 'multiply',
                        backgroundColor: 'rgba(15, 76, 58, 0.4)'
                    }}
                />

                {/* Background Layer 2 (Next Image - Cross-fade) */}
                <div
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isLayerActive ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        backgroundImage: `url('${nextImage}')`,
                        backgroundBlendMode: 'multiply',
                        backgroundColor: 'rgba(15, 76, 58, 0.4)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C3A]/60 to-transparent"></div>
                </div>

                {/* Overlay Gradient for Layer 1 when Layer 2 is hidden */}
                {!isLayerActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C3A]/60 to-transparent"></div>
                )}

                <div className="relative h-full flex items-center px-12 md:px-24 pb-24">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-8 border border-white/20">
                            <span className="w-2 h-2 bg-[#81C784] rounded-full animate-pulse"></span>
                            The Future of Farming is Here
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
                            Future-Proof<br />Your Farm.
                        </h1>
                        <p className="text-lg md:text-xl text-green-50/90 font-medium mb-10 max-w-xl leading-relaxed">
                            Empowering the next generation of farmers with real-time climate intelligence and sustainable practices.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/welcome" className="px-12 py-5 bg-[#81C784] hover:bg-[#66BB6A] text-[#0F4C3A] font-black uppercase tracking-widest rounded-2xl shadow-xl transition-all text-center flex items-center justify-center gap-2 group">
                                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/dashboard" className="px-12 py-5 bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest rounded-2xl border border-white/20 backdrop-blur-md transition-all text-center">
                                Explore As Guest
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Cards Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-12 -mt-24 relative z-20 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    {/* Weather Snapshot Card */}
                    <div className="bg-white rounded-[40px] p-8 shadow-2xl border border-gray-100 hover:shadow-green-900/10 hover:-translate-y-2 transition-all duration-500 group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                                <CloudSun className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-black text-gray-900 uppercase tracking-[0.2em]">Weather</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-[32px] border border-gray-100">
                                <div className="flex items-center gap-4">
                                    <span className="text-5xl">☀️</span>
                                    <div>
                                        <p className="text-3xl font-black text-gray-900 leading-none">28°C</p>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase mt-2 tracking-widest">Sunny & Clear</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">Humidity</p>
                                    <p className="text-xl font-black text-gray-900">64%</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed px-2">
                                Precise local forecasts with 98% accuracy for your farm coordinates.
                            </p>
                        </div>
                    </div>

                    {/* Latest Updates Card */}
                    <div className="bg-white rounded-[40px] p-8 shadow-2xl border border-gray-100 hover:shadow-green-900/10 hover:-translate-y-2 transition-all duration-500 group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#2E7D32] group-hover:bg-[#2E7D32] group-hover:text-white transition-all duration-500">
                                <Newspaper className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-black text-gray-900 uppercase tracking-[0.2em]">Updates</h3>
                        </div>
                        <div className="space-y-4">
                            <Link href="/knowledge-hub" className="block p-5 hover:bg-green-50 rounded-3xl transition-all border border-transparent hover:border-green-100 group/item">
                                <p className="text-[10px] font-black text-[#2E7D32] uppercase mb-2 tracking-[0.2em]">Partnership</p>
                                <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#2E7D32] line-clamp-1">CSA Hub Partners with Global Fund</p>
                            </Link>
                            <Link href="/knowledge-hub" className="block p-5 hover:bg-green-50 rounded-3xl transition-all border border-transparent hover:border-green-100 group/item">
                                <p className="text-[10px] font-black text-[#2E7D32] uppercase mb-2 tracking-[0.2em]">Technology</p>
                                <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#2E7D32] line-clamp-1">New Satellite Data Released</p>
                            </Link>
                        </div>
                    </div>

                    {/* Featured Tip Card */}
                    <div className="bg-[#0F4C3A] rounded-[40px] p-8 shadow-2xl text-white relative overflow-hidden group hover:shadow-green-900/30 hover:-translate-y-2 transition-all duration-500">
                        <div className="absolute -top-6 -right-6 p-12 opacity-10 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-1000 pointer-events-none">
                            <Lightbulb className="w-32 h-32" />
                        </div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#81C784]">
                                    <Lightbulb className="w-6 h-6" />
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-[0.2em]">Daily Tip</h3>
                            </div>
                            <p className="text-2xl font-black text-green-50 leading-tight mb-8 tracking-tight">
                                Rotate Crops for Soil Health & Pest Resilience
                            </p>
                            <div className="mt-auto">
                                <Link href="/knowledge-hub" className="w-full flex items-center justify-center py-5 bg-[#81C784] hover:bg-white text-[#0F4C3A] hover:text-[#0F4C3A] font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl transition-all shadow-xl active:scale-95">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-black text-[#2E7D32] uppercase tracking-[0.2em] mb-4">Core Capabilities</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Everything You Need to <br/>Scale Your Farm.</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <FeatureCard 
                        icon={<CloudSun className="w-8 h-8 text-blue-500" />}
                        title="Climate Intelligence"
                        desc="Hyper-local weather forecasts and satellite-driven climate alerts tailored to your specific crop coordinates."
                    />
                    <FeatureCard 
                        icon={<ShieldCheck className="w-8 h-8 text-green-500" />}
                        title="AI Disease Detection"
                        desc="Instant crop diagnostics using advanced computer vision to identify pests and diseases from a simple photo."
                    />
                    <FeatureCard 
                        icon={<Zap className="w-8 h-8 text-orange-500" />}
                        title="Resource Optimization"
                        desc="Smart irrigation schedules and soil health monitoring to reduce input costs and maximize yield."
                    />
                    <FeatureCard 
                        icon={<BarChart3 className="w-8 h-8 text-purple-500" />}
                        title="Market Analytics"
                        desc="Real-time commodity price tracking and demand forecasting to help you sell at the peak of the market."
                    />
                    <FeatureCard 
                        icon={<Lightbulb className="w-8 h-8 text-yellow-500" />}
                        title="Expert Knowledge"
                        desc="A curated library of climate-smart best practices and a direct line to agricultural extension officers."
                    />
                    <FeatureCard 
                        icon={<Logo iconOnly className="w-8 h-8" />}
                        title="Unified Ecosystem"
                        desc="One platform that connects farmers, experts, and buyers in a single data-driven agricultural nexus."
                    />
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-black text-[#2E7D32] uppercase tracking-[0.2em] mb-4">Pricing Plans</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Investment in Your Future.</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PricingCard 
                            title="Seedling"
                            price="Free"
                            desc="Perfect for smallholder farmers getting started with climate data."
                            features={["Local Weather Forecasts", "Basic Knowledge Hub", "Community Access"]}
                        />
                        <PricingCard 
                            title="Harvester"
                            price="$12"
                            desc="Advanced tools for growing farms looking to optimize yield."
                            features={["Everything in Seedling", "AI Disease Detection (50/mo)", "Market Price Alerts", "Soil Health Monitoring"]}
                            highlighted
                        />
                        <PricingCard 
                            title="Nexus Pro"
                            price="$45"
                            desc="Full-scale solution for commercial operations and cooperatives."
                            features={["Unlimited AI Diagnostics", "Direct Expert Support", "Satellite Yield Prediction", "Bulk Buyer Marketplace"]}
                        />
                    </div>
                </div>
            </section>

             {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="bg-gradient-to-br from-[#0F4C3A] to-[#2E7D32] rounded-[60px] py-20 px-12 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2255441/pexels-photo-2255441.jpeg?auto=compress&cs=tinysrgb&w=1600')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none">Join the Future of Farming</h2>
                        <p className="text-lg text-green-50/70 font-medium mb-10 leading-relaxed">
                            Create your account today and start your journey towards a more resilient and profitable farm.
                        </p>
                        <Link href="/login" className="px-16 py-5 bg-[#81C784] hover:bg-[#66BB6A] text-[#0F4C3A] font-black uppercase tracking-widest rounded-2xl transition-all shadow-2xl inline-block hover:scale-105">
                            Sign Up Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="bg-white border-t border-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <Logo />
                    <div className="flex gap-10 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                        <Link href="#" className="hover:text-[#2E7D32] transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-[#2E7D32] transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-[#2E7D32] transition-colors">Support</Link>
                    </div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">© 2026 CSA Hub Nexus</p>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {icon}
            </div>
            <h4 className="text-xl font-black text-gray-900 mb-4 tracking-tight">{title}</h4>
            <p className="text-gray-500 font-medium leading-relaxed">{desc}</p>
        </div>
    );
}

function PricingCard({ title, price, desc, features, highlighted = false }: { title: string, price: string, desc: string, features: string[], highlighted?: boolean }) {
    return (
        <div className={`p-12 rounded-[40px] border transition-all duration-500 ${highlighted ? 'bg-[#0F4C3A] text-white border-transparent shadow-2xl scale-105 z-10' : 'bg-gray-50 text-gray-900 border-gray-100 hover:bg-white hover:shadow-xl'}`}>
            <h4 className={`text-xs font-black uppercase tracking-[0.2em] mb-6 ${highlighted ? 'text-[#81C784]' : 'text-[#2E7D32]'}`}>{title}</h4>
            <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black tracking-tighter">{price}</span>
                {price !== 'Free' && <span className={`text-sm font-bold ${highlighted ? 'text-green-50/50' : 'text-gray-400'}`}>/mo</span>}
            </div>
            <p className={`text-sm font-medium leading-relaxed mb-10 ${highlighted ? 'text-green-50/70' : 'text-gray-500'}`}>{desc}</p>
            <ul className="space-y-5 mb-12">
                {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${highlighted ? 'bg-[#81C784] text-[#0F4C3A]' : 'bg-green-100 text-[#2E7D32]'}`}>
                            <Check size={12} strokeWidth={4} />
                        </div>
                        {f}
                    </li>
                ))}
            </ul>
            <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all active:scale-95 ${highlighted ? 'bg-[#81C784] hover:bg-[#66BB6A] text-[#0F4C3A] shadow-lg' : 'bg-white hover:bg-gray-900 hover:text-white text-gray-900 border border-gray-200 shadow-sm'}`}>
                Choose {title}
            </button>
        </div>
    );
}

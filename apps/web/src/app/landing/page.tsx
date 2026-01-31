'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import { Logo } from '../../components/Logo';
import { CloudSun, Newspaper, Lightbulb, ArrowRight } from 'lucide-react';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Hero Section */}
            <section className="relative h-[550px] rounded-b-[60px] overflow-hidden mx-4 mt-4 shadow-2xl">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600')`,
                        backgroundBlendMode: 'multiply',
                        backgroundColor: 'rgba(15, 76, 58, 0.4)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C3A]/60 to-transparent"></div>
                </div>

                <div className="relative h-full flex items-center px-12 md:px-24">
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
            <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-10 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Weather Snapshot Card */}
                    <div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                <CloudSun className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Weather</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-5 bg-gray-50 rounded-3xl">
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl">☀️</span>
                                    <div>
                                        <p className="text-2xl font-black text-gray-900 leading-none">28°C</p>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">Sunny & Clear</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-blue-500 uppercase tracking-tighter">Humidity</p>
                                    <p className="text-lg font-black text-gray-900">64%</p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 font-medium leading-relaxed px-1">
                                Precise local forecasts with 98% accuracy.
                            </p>
                        </div>
                    </div>

                    {/* Latest Updates Card */}
                    <div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-[#2E7D32] group-hover:scale-110 transition-transform">
                                <Newspaper className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Updates</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="p-4 hover:bg-green-50 rounded-2xl transition-colors cursor-pointer group/item border border-transparent hover:border-green-100">
                                <p className="text-[9px] font-black text-[#2E7D32] uppercase mb-1 tracking-widest">Partnership</p>
                                <p className="text-xs font-bold text-gray-900 group-hover/item:text-[#2E7D32] line-clamp-1">CSA Hub Partners with Global Fund</p>
                            </div>
                            <div className="p-4 hover:bg-green-50 rounded-2xl transition-colors cursor-pointer group/item border border-transparent hover:border-green-100">
                                <p className="text-[9px] font-black text-[#2E7D32] uppercase mb-1 tracking-widest">Technology</p>
                                <p className="text-xs font-bold text-gray-900 group-hover/item:text-[#2E7D32] line-clamp-1">New Satellite Data Released</p>
                            </div>
                        </div>
                    </div>

                    {/* Featured Tip Card */}
                    <div className="bg-[#0F4C3A] rounded-[40px] p-8 shadow-2xl text-white relative overflow-hidden group">
                        <div className="absolute -top-4 -right-4 p-8 opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                            <Lightbulb className="w-24 h-24" />
                        </div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-[#81C784]">
                                    <Lightbulb className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-widest">Tip</h3>
                            </div>
                            <p className="text-xl font-bold text-green-50 leading-tight mb-6">
                                Rotate Crops for Soil Health & Pest Resilience
                            </p>
                            <div className="mt-auto">
                                <Link href="/knowledge-hub" className="w-full inline-flex items-center justify-center py-4 bg-[#81C784] hover:bg-[#66BB6A] text-[#0F4C3A] font-black uppercase tracking-widest text-[10px] rounded-2xl transition-all shadow-lg">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="bg-gradient-to-br from-[#0F4C3A] to-[#2E7D32] rounded-[60px] py-20 px-12 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=1600')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
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

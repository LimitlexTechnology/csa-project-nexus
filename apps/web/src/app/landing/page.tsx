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
            <section className="relative h-[600px] rounded-b-[60px] overflow-hidden mx-4 mt-4 shadow-2xl">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600')`,
                        backgroundBlendMode: 'multiply',
                        backgroundColor: 'rgba(15, 76, 58, 0.6)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C3A]/40 to-transparent"></div>
                </div>

                <div className="relative h-full flex items-center px-12 md:px-24">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-black uppercase tracking-widest mb-8 border border-white/20">
                            <span className="w-2 h-2 bg-[#81C784] rounded-full animate-pulse"></span>
                            The Future of Farming is Here
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                            Future-Proof<br />Your Farm.
                        </h1>
                        <p className="text-xl md:text-2xl text-green-50/80 font-medium mb-12 max-w-xl leading-relaxed">
                            Empowering the next generation of farmers with real-time climate intelligence and sustainable practices.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/welcome" className="px-12 py-5 bg-[#81C784] hover:bg-[#66BB6A] text-[#0F4C3A] font-black uppercase tracking-widest rounded-2xl shadow-xl transition-all text-center flex items-center justify-center gap-2 group">
                                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/dashboard" className="px-12 py-5 bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest rounded-2xl border border-white/20 backdrop-blur-md transition-all text-center">
                                Explore Nexus
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Cards Section */}
            <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Weather Snapshot Card */}
                    <div className="bg-white rounded-[40px] p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                <CloudSun className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">Weather Intelligence</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl">☀️</span>
                                    <div>
                                        <p className="text-2xl font-black text-gray-900">28°C</p>
                                        <p className="text-xs font-bold text-gray-500 uppercase">Sunny & Clear</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-black text-blue-500 uppercase">Humidity</p>
                                    <p className="text-lg font-black text-gray-900">64%</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                Precise local forecasts help you time your planting and harvesting with 98% accuracy.
                            </p>
                        </div>
                    </div>

                    {/* Latest Updates Card */}
                    <div className="bg-white rounded-[40px] p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#2E7D32] group-hover:scale-110 transition-transform">
                                <Newspaper className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">Latest Updates</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="p-4 hover:bg-green-50 rounded-2xl transition-colors cursor-pointer group/item">
                                    <p className="text-xs font-black text-[#2E7D32] uppercase mb-1">Partnership</p>
                                    <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#2E7D32]">CSA Hub Partners with Global Fund</p>
                                </div>
                                <div className="p-4 hover:bg-green-50 rounded-2xl transition-colors cursor-pointer group/item">
                                    <p className="text-xs font-black text-[#2E7D32] uppercase mb-1">Technology</p>
                                    <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#2E7D32]">New Satellite Data for Soil Analysis</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Tip Card */}
                    <div className="bg-[#0F4C3A] rounded-[40px] p-10 shadow-2xl text-white relative overflow-hidden group">
                        <div className="absolute -top-4 -right-4 p-8 opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                            <Lightbulb className="w-32 h-32" />
                        </div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#81C784]">
                                    <Lightbulb className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight">Featured Tip</h3>
                            </div>
                            <p className="text-2xl font-bold text-green-50 leading-tight mb-8">
                                Rotate Crops for Soil Health & Pest Resilience
                            </p>
                            <div className="mt-auto">
                                <Link href="/knowledge-hub" className="w-full inline-flex items-center justify-center py-4 bg-[#81C784] hover:bg-[#66BB6A] text-[#0F4C3A] font-black uppercase tracking-widest text-sm rounded-2xl transition-all shadow-lg">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6 mb-20">
                <div className="bg-gradient-to-br from-[#0F4C3A] to-[#2E7D32] rounded-[60px] py-24 px-12 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=1600')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">Join the Future of Farming</h2>
                        <p className="text-xl text-green-50/70 font-medium mb-12 leading-relaxed">
                            Create your account today and start your journey towards a more resilient and profitable farm.
                        </p>
                        <Link href="/login" className="px-20 py-6 bg-[#81C784] hover:bg-[#66BB6A] text-[#0F4C3A] font-black uppercase tracking-widest rounded-2xl transition-all shadow-2xl inline-block hover:scale-105">
                            Sign Up Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

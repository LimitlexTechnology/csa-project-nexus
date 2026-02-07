'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '../../components/Logo';
import AuthGuard from '../../components/AuthGuard';
import { useI18n } from '../../lib/i18n';
import { Compass, CloudSun, BookOpen, Users, ShoppingCart, TrendingUp, Award, ArrowRight, Menu, X } from 'lucide-react';

export default function ExplorerDashboard() {
    const { t } = useI18n();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <AuthGuard>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/dashboard">
                        <Logo />
                    </Link>
                    <div className="flex items-center gap-6">
                        <h1 className="text-xl font-bold text-gray-900">{t('explorer.title')}</h1>
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
                            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Welcome Section */}
                <div className="mb-12 bg-gradient-to-r from-[#0F4C3A] to-[#2E7D32] rounded-[40px] p-12 text-white shadow-xl">
                    <h2 className="text-4xl font-black mb-4 tracking-tighter">Welcome to CSA Hub! 🌍</h2>
                    <p className="text-green-50/90 text-lg font-medium mb-8">Explore the ecosystem and discover how sustainable agriculture works. Find your perfect role!</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/knowledge-hub" className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                            <BookOpen size={32} className="text-[#81C784]" />
                            <div>
                                <p className="font-bold text-white">Learn</p>
                                <p className="text-green-100 text-sm">Explore resources</p>
                            </div>
                        </Link>
                        <Link href="/news" className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                            <TrendingUp size={32} className="text-blue-300" />
                            <div>
                                <p className="font-bold text-white">Stay Updated</p>
                                <p className="text-green-100 text-sm">Latest news & trends</p>
                            </div>
                        </Link>
                        <Link href="/weather" className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                            <CloudSun size={32} className="text-yellow-300" />
                            <div>
                                <p className="font-bold text-white">Weather Data</p>
                                <p className="text-green-100 text-sm">Climate intelligence</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Platform Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-gray-500 uppercase">Active Users</h3>
                            <Users className="text-blue-500" size={24} />
                        </div>
                        <p className="text-3xl font-black text-gray-900">45K+</p>
                        <p className="text-xs text-gray-400 mt-2">Growing community</p>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-gray-500 uppercase">Resources</h3>
                            <BookOpen className="text-green-500" size={24} />
                        </div>
                        <p className="text-3xl font-black text-gray-900">500+</p>
                        <p className="text-xs text-gray-400 mt-2">Learning materials</p>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-gray-500 uppercase">Coverage</h3>
                            <Compass className="text-purple-500" size={24} />
                        </div>
                        <p className="text-3xl font-black text-gray-900">16</p>
                        <p className="text-xs text-gray-400 mt-2">Districts served</p>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-gray-500 uppercase">Impact</h3>
                            <Award className="text-amber-500" size={24} />
                        </div>
                        <p className="text-3xl font-black text-gray-900">+28%</p>
                        <p className="text-xs text-gray-400 mt-2">Avg yield increase</p>
                    </div>
                </div>

                {/* Explore All Roles */}
                <div className="mb-12">
                    <h3 className="text-3xl font-black text-gray-900 mb-8">Discover User Roles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Farmer Card */}
                        <Link href="/farmer-dashboard" className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all group">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h4 className="text-2xl font-black text-gray-900 mb-2">For Farmers</h4>
                                    <p className="text-gray-600">Manage your farm with climate intelligence</p>
                                </div>
                                <div className="text-5xl">🌾</div>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <CloudSun className="text-blue-500" size={20} />
                                    <span className="text-sm font-bold text-gray-700">Real-time weather alerts</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <BookOpen className="text-green-500" size={20} />
                                    <span className="text-sm font-bold text-gray-700">Expert guides & tips</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <TrendingUp className="text-amber-500" size={20} />
                                    <span className="text-sm font-bold text-gray-700">Yield optimization</span>
                                </li>
                            </ul>
                            <button className="w-full py-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 font-bold rounded-2xl group-hover:bg-green-100 transition-all flex items-center justify-between px-6">
                                Explore Role
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                        </Link>

                        {/* Expert Card */}
                        <Link href="/expert-dashboard" className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all group">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h4 className="text-2xl font-black text-gray-900 mb-2">For Experts</h4>
                                    <p className="text-gray-600">Guide farmers & share knowledge</p>
                                </div>
                                <div className="text-5xl">👨‍🏫</div>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <Users className="text-blue-500" size={20} />
                                    <span className="text-sm font-bold text-gray-700">Manage farmer networks</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <BookOpen className="text-green-500" size={20} />
                                    <span className="text-sm font-bold text-gray-700">Publish articles</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Award className="text-amber-500" size={20} />
                                    <span className="text-sm font-bold text-gray-700">Build reputation</span>
                                </li>
                            </ul>
                            <button className="w-full py-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-700 font-bold rounded-2xl group-hover:bg-blue-100 transition-all flex items-center justify-between px-6">
                                Explore Role
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                        </Link>

                        {/* Buyer Card */}
                        <Link href="/buyer-dashboard" className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all group">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h4 className="text-2xl font-black text-gray-900 mb-2">For Buyers</h4>
                                    <p className="text-gray-600">Connect with sustainable producers</p>
                                </div>
                                <div className="text-5xl">🛒</div>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <ShoppingCart className="text-blue-500" size={20} />
                                    <span className="text-sm font-bold text-gray-700">Find verified suppliers</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <TrendingUp className="text-green-500" size={20} />
                                    <span className="text-sm font-bold text-gray-700">Market price analytics</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Award className="text-amber-500" size={20} />
                                    <span className="text-sm font-bold text-gray-700">Sustainability verified</span>
                                </li>
                            </ul>
                            <button className="w-full py-3 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 text-orange-700 font-bold rounded-2xl group-hover:bg-orange-100 transition-all flex items-center justify-between px-6">
                                Explore Role
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                        </Link>

                        {/* NGO Card */}
                        <Link href="/ngo-dashboard" className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all group">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h4 className="text-2xl font-black text-gray-900 mb-2">For NGOs</h4>
                                    <p className="text-gray-600">Coordinate programs & track impact</p>
                                </div>
                                <div className="text-5xl">🏛️</div>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <Users className="text-blue-500" size={20} />
                                    <span className="text-sm font-bold text-gray-700">Manage beneficiaries</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <TrendingUp className="text-green-500" size={20} />
                                    <span className="text-sm font-bold text-gray-700">Impact reporting</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <BookOpen className="text-amber-500" size={20} />
                                    <span className="text-sm font-bold text-gray-700">Policy resources</span>
                                </li>
                            </ul>
                            <button className="w-full py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 font-bold rounded-2xl group-hover:bg-blue-100 transition-all flex items-center justify-between px-6">
                                Explore Role
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Platform Features */}
                <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 mb-12">
                    <h3 className="text-2xl font-black text-gray-900 mb-8">Available On All Platforms</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <Link href="/marketplace" className="p-6 border-2 border-gray-200 hover:border-orange-500 rounded-2xl transition-all group">
                            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600">🏪 Marketplace</h4>
                            <p className="text-sm text-gray-600 mb-4">Buy & sell climate-smart produce</p>
                            <span className="text-xs font-bold text-orange-600">Explore →</span>
                        </Link>
                        <Link href="/knowledge-hub" className="p-6 border-2 border-gray-200 hover:border-green-500 rounded-2xl transition-all group">
                            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">📚 Knowledge Hub</h4>
                            <p className="text-sm text-gray-600 mb-4">500+ resources: guides, videos, case studies</p>
                            <span className="text-xs font-bold text-green-600">Explore →</span>
                        </Link>
                        <Link href="/news" className="p-6 border-2 border-gray-200 hover:border-blue-500 rounded-2xl transition-all group">
                            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">📰 News & Updates</h4>
                            <p className="text-sm text-gray-600 mb-4">Latest trends, partnerships, market analysis</p>
                            <span className="text-xs font-bold text-blue-600">Explore →</span>
                        </Link>
                        <Link href="/weather" className="p-6 border-2 border-gray-200 hover:border-amber-500 rounded-2xl transition-all group">
                            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600">🌤️ Weather Data</h4>
                            <p className="text-sm text-gray-600 mb-4">Real-time forecasts and climate intelligence</p>
                            <span className="text-xs font-bold text-amber-600">Explore →</span>
                        </Link>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-[#0F4C3A] to-[#2E7D32] rounded-[40px] p-12 text-white text-center">
                    <h3 className="text-3xl font-black mb-4">Ready to Join?</h3>
                    <p className="text-green-50/90 mb-8">Select a role that fits your needs and start making a difference in sustainable agriculture</p>
                    <Link href="/role-selection" className="inline-block px-12 py-4 bg-white text-[#2E7D32] font-black rounded-2xl hover:bg-green-50 transition-all">
                        Change Role
                    </Link>
                </div>
            </div>
        </div>
        </AuthGuard>
    );
}

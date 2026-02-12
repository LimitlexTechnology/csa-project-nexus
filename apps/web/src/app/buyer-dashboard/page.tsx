'use client';
import React from 'react';
import Link from 'next/link';
import AuthGuard from '../../components/AuthGuard';
import DashboardHeader from '../../components/DashboardHeader';
import { useI18n } from '../../lib/i18n';
import { ShoppingCart, TrendingUp, Leaf, BarChart3, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export default function BuyerDashboard() {
    const { t } = useI18n();

    return (
        <AuthGuard>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
                <DashboardHeader title={t('buyer.title')} />

                <div className="max-w-7xl mx-auto px-6 py-10">
                    {/* Welcome Section */}
                    <div className="mb-12 bg-gradient-to-r from-[#0F4C3A] to-[#2E7D32] rounded-[40px] p-12 text-white shadow-xl">
                        <h2 className="text-4xl font-black mb-4 tracking-tighter">Welcome, Buyer! 🛒</h2>
                        <p className="text-green-50/90 text-lg font-medium mb-8">Connect with sustainable producers, access market intelligence, and build reliable supply chains.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link href="/news" className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                                <TrendingUp size={32} className="text-[#81C784]" />
                                <div>
                                    <p className="font-bold text-white">Market Prices</p>
                                    <p className="text-green-100 text-sm">Real-time analytics</p>
                                </div>
                            </Link>
                            <Link href="/knowledge-hub" className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                                <Leaf size={32} className="text-green-300" />
                                <div>
                                    <p className="font-bold text-white">Sustainably Certified</p>
                                    <p className="text-green-100 text-sm">Verified suppliers</p>
                                </div>
                            </Link>
                            <Link href="/marketplace" className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                                <ShoppingCart size={32} className="text-amber-300" />
                                <div>
                                    <p className="font-bold text-white">Supplier Network</p>
                                    <p className="text-green-100 text-sm">Browse & connect</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Business Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-gray-500 uppercase">Active Orders</h3>
                                <ShoppingCart className="text-blue-500" size={24} />
                            </div>
                            <p className="text-3xl font-black text-gray-900">12</p>
                            <p className="text-xs text-gray-400 mt-2">In fulfillment</p>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-gray-500 uppercase">Suppliers</h3>
                                <Leaf className="text-green-500" size={24} />
                            </div>
                            <p className="text-3xl font-black text-gray-900">34</p>
                            <p className="text-xs text-gray-400 mt-2">Verified partners</p>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-gray-500 uppercase">Sustainability</h3>
                                <CheckCircle className="text-green-600" size={24} />
                            </div>
                            <p className="text-3xl font-black text-gray-900">87%</p>
                            <p className="text-xs text-gray-400 mt-2">Certified sources</p>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-gray-500 uppercase">Savings</h3>
                                <TrendingUp className="text-green-600" size={24} />
                            </div>
                            <p className="text-3xl font-black text-gray-900">+18%</p>
                            <p className="text-xs text-gray-400 mt-2">vs traditional supply</p>
                        </div>
                    </div>

                    {/* Main Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">Supply Chain</h3>
                            <ul className="space-y-3">
                                <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                    <ShoppingCart className="text-blue-500 group-hover:scale-110 transition-transform" size={24} />
                                    <span className="font-bold text-gray-700">Browse Suppliers</span>
                                    <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                                </button></li>
                                <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-bold group-hover:scale-110 transition-transform">✓</div>
                                    <span className="font-bold text-gray-700">Verify Certification</span>
                                    <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                                </button></li>
                                <li><Link href="/news" className="flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group">
                                    <BarChart3 className="text-amber-500 group-hover:scale-110 transition-transform" size={24} />
                                    <span className="font-bold text-gray-700">Market Trends</span>
                                    <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                                </Link></li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">Business Tools</h3>
                            <ul className="space-y-3">
                                <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 font-bold group-hover:scale-110 transition-transform">📋</div>
                                    <span className="font-bold text-gray-700">Price Negotiations</span>
                                    <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                                </button></li>
                                <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold group-hover:scale-110 transition-transform">📦</div>
                                    <span className="font-bold text-gray-700">Logistics Planning</span>
                                    <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                                </button></li>
                                <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 font-bold group-hover:scale-110 transition-transform">💬</div>
                                    <span className="font-bold text-gray-700">Supplier Chat</span>
                                    <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                                </button></li>
                            </ul>
                        </div>
                    </div>

                    {/* Market Intelligence */}
                    <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-black text-gray-900 mb-6">Current Market Prices</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-orange-100">
                                <p className="text-sm font-bold text-gray-600 mb-2">Maize (90kg bag)</p>
                                <p className="text-3xl font-black text-gray-900 mb-2">GH₵ 280</p>
                                <p className="text-xs text-green-600 font-bold">↓ 2.5% from last week</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                                <p className="text-sm font-bold text-gray-600 mb-2">Rice (50kg bag)</p>
                                <p className="text-3xl font-black text-gray-900 mb-2">GH₵ 385</p>
                                <p className="text-xs text-red-600 font-bold">↑ 1.8% from last week</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100">
                                <p className="text-sm font-bold text-gray-600 mb-2">Tomatoes (crate)</p>
                                <p className="text-3xl font-black text-gray-900 mb-2">GH₵ 120</p>
                                <p className="text-xs text-green-600 font-bold">↓ 3.2% from last week</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthGuard>
    );
}

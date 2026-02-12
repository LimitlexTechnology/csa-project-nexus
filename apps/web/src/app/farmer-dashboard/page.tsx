'use client';
import React from 'react';
import Link from 'next/link';
import AuthGuard from '../../components/AuthGuard';
import DashboardHeader from '../../components/DashboardHeader';
import { useI18n } from '../../lib/i18n';
import { CloudSun, AlertCircle, TrendingUp, Leaf, MapPin, BarChart3, ArrowRight, ShoppingCart } from 'lucide-react';

export default function FarmerDashboard() {
    const { t } = useI18n();

    return (
        <AuthGuard>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
                <DashboardHeader title={t('farmer.title')} />

                <div className="max-w-7xl mx-auto px-6 py-10">
                    {/* Welcome Section */}
                    <div className="mb-12 bg-gradient-to-r from-[#0F4C3A] to-[#2E7D32] rounded-[40px] p-12 text-white shadow-xl">
                        <h2 className="text-4xl font-black mb-4 tracking-tighter">Welcome, Farmer! 👋</h2>
                        <p className="text-green-50/90 text-lg font-medium mb-8">Manage your farm with real-time climate intelligence and sustainable practices.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link href="/weather" className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                                <CloudSun size={32} className="text-[#81C784]" />
                                <div>
                                    <p className="font-bold text-white">Weather Alerts</p>
                                    <p className="text-green-100 text-sm">Real-time forecasts</p>
                                </div>
                            </Link>
                            <Link href="/disease-detection" className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                                <AlertCircle size={32} className="text-orange-300" />
                                <div>
                                    <p className="font-bold text-white">Disease Detection</p>
                                    <p className="text-green-100 text-sm">AI-powered diagnosis</p>
                                </div>
                            </Link>
                            <Link href="/knowledge-hub" className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                                <Leaf size={32} className="text-green-300" />
                                <div>
                                    <p className="font-bold text-white">Best Practices</p>
                                    <p className="text-green-100 text-sm">Expert guides & tips</p>
                                </div>
                            </Link>
                            <Link href="/marketplace" className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                                <ShoppingCart size={32} className="text-amber-300" />
                                <div>
                                    <p className="font-bold text-white">Marketplace</p>
                                    <p className="text-green-100 text-sm">Sell your produce</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-gray-500 uppercase">Farm Size</h3>
                                <MapPin className="text-blue-500" size={24} />
                            </div>
                            <p className="text-3xl font-black text-gray-900">2.5 ha</p>
                            <p className="text-xs text-gray-400 mt-2">Total farmland</p>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-gray-500 uppercase">Crops</h3>
                                <Leaf className="text-green-500" size={24} />
                            </div>
                            <p className="text-3xl font-black text-gray-900">3</p>
                            <p className="text-xs text-gray-400 mt-2">Active crops</p>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-gray-500 uppercase">Yield</h3>
                                <TrendingUp className="text-green-600" size={24} />
                            </div>
                            <p className="text-3xl font-black text-gray-900">+23%</p>
                            <p className="text-xs text-gray-400 mt-2">vs last season</p>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-gray-500 uppercase">Health</h3>
                                <BarChart3 className="text-amber-500" size={24} />
                            </div>
                            <p className="text-3xl font-black text-gray-900">95%</p>
                            <p className="text-xs text-gray-400 mt-2">Farm health score</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">My Climate Tools</h3>
                            <ul className="space-y-3">
                                <li><Link href="/weather" className="flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group">
                                    <CloudSun className="text-blue-500 group-hover:scale-110 transition-transform" size={24} />
                                    <span className="font-bold text-gray-700">Weather Intelligence</span>
                                    <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                                </Link></li>
                                <li><Link href="/knowledge-hub" className="flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group">
                                    <Leaf className="text-green-500 group-hover:scale-110 transition-transform" size={24} />
                                    <span className="font-bold text-gray-700">Knowledge Hub</span>
                                    <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                                </Link></li>
                                <li><Link href="/disease-detection" className="flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group">
                                    <AlertCircle className="text-orange-500 group-hover:scale-110 transition-transform" size={24} />
                                    <span className="font-bold text-gray-700">Pest & Disease Detection</span>
                                    <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                                </Link></li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">Quick Actions</h3>
                            <ul className="space-y-3">
                                <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold group-hover:scale-110 transition-transform">📸</div>
                                    <span className="font-bold text-gray-700 flex-1">Upload Crop Photo</span>
                                    <ArrowRight className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                                </button></li>
                                <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-bold group-hover:scale-110 transition-transform">📍</div>
                                    <span className="font-bold text-gray-700 flex-1">Add Farm Location</span>
                                    <ArrowRight className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                                </button></li>
                                <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 font-bold group-hover:scale-110 transition-transform">💬</div>
                                    <span className="font-bold text-gray-700 flex-1">Ask Expert</span>
                                    <ArrowRight className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                                </button></li>
                            </ul>
                        </div>
                    </div>

                    {/* Recent Alerts */}
                    <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-black text-gray-900 mb-6">Recent Climate Alerts</h3>
                        <div className="space-y-4">
                            <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-2xl">
                                <p className="font-bold text-gray-900 mb-2">⚠️ High Wind Warning</p>
                                <p className="text-gray-600">Expected winds of 45 km/h tomorrow. Consider securing loose items.</p>
                            </div>
                            <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-2xl">
                                <p className="font-bold text-gray-900 mb-2">💧 Irrigation Recommended</p>
                                <p className="text-gray-600">Soil moisture is dropping. Optimal irrigation window: 6-8 AM tomorrow.</p>
                            </div>
                            <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-2xl">
                                <p className="font-bold text-gray-900 mb-2">🌾 Crop Health Update</p>
                                <p className="text-gray-600">Maize field: Normal growth trajectory. Continue current management practices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthGuard>
    );
}

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '../../components/Logo';
import { BarChart3, Users, FileText, Target, TrendingUp, Landmark, ArrowRight, Menu, X } from 'lucide-react';

export default function NgoDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/dashboard">
                        <Logo />
                    </Link>
                    <div className="flex items-center gap-6">
                        <h1 className="text-xl font-bold text-gray-900">NGO/Government Dashboard</h1>
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
                            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Welcome Section */}
                <div className="mb-12 bg-gradient-to-r from-[#0F4C3A] to-[#2E7D32] rounded-[40px] p-12 text-white shadow-xl">
                    <h2 className="text-4xl font-black mb-4 tracking-tighter">Welcome, Organization! 🏛️</h2>
                    <p className="text-green-50/90 text-lg font-medium mb-8">Coordinate programs, track impact, and drive sustainable agriculture adoption at scale.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/knowledge-hub" className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                            <FileText size={32} className="text-blue-300" />
                            <div>
                                <p className="font-bold text-white">Resources</p>
                                <p className="text-green-100 text-sm">Policy & training</p>
                            </div>
                        </Link>
                        <button className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                            <Users size={32} className="text-green-300" />
                            <div className="text-left">
                                <p className="font-bold text-white">Programs</p>
                                <p className="text-green-100 text-sm">Manage initiatives</p>
                            </div>
                        </button>
                        <Link href="/news" className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                            <BarChart3 size={32} className="text-yellow-300" />
                            <div>
                                <p className="font-bold text-white">Impact Reports</p>
                                <p className="text-green-100 text-sm">Track outcomes</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Impact Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-gray-500 uppercase">Farmers Reached</h3>
                            <Users className="text-blue-500" size={24} />
                        </div>
                        <p className="text-3xl font-black text-gray-900">12.4K</p>
                        <p className="text-xs text-gray-400 mt-2">Active participants</p>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-gray-500 uppercase">Programs</h3>
                            <Target className="text-green-500" size={24} />
                        </div>
                        <p className="text-3xl font-black text-gray-900">8</p>
                        <p className="text-xs text-gray-400 mt-2">Active initiatives</p>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-gray-500 uppercase">Yield Improvement</h3>
                            <TrendingUp className="text-green-600" size={24} />
                        </div>
                        <p className="text-3xl font-black text-gray-900">+31%</p>
                        <p className="text-xs text-gray-400 mt-2">Average improvement</p>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-gray-500 uppercase">Budget Utilized</h3>
                            <BarChart3 className="text-blue-600" size={24} />
                        </div>
                        <p className="text-3xl font-black text-gray-900">78%</p>
                        <p className="text-xs text-gray-400 mt-2">Of allocated funds</p>
                    </div>
                </div>

                {/* Program Management */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-black text-gray-900 mb-6">Program Management</h3>
                        <ul className="space-y-3">
                            <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                <Target className="text-blue-500 group-hover:scale-110 transition-transform" size={24} />
                                <span className="font-bold text-gray-700">Create Programs</span>
                                <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                            </button></li>
                            <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-bold group-hover:scale-110 transition-transform">👥</div>
                                <span className="font-bold text-gray-700">Manage Beneficiaries</span>
                                <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                            </button></li>
                            <li><Link href="/knowledge-hub" className="flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group">
                                <FileText className="text-orange-500 group-hover:scale-110 transition-transform" size={24} />
                                <span className="font-bold text-gray-700">Training Materials</span>
                                <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                            </Link></li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-black text-gray-900 mb-6">Reporting & Analytics</h3>
                        <ul className="space-y-3">
                            <li><Link href="/news" className="flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group">
                                <BarChart3 className="text-blue-500 group-hover:scale-110 transition-transform" size={24} />
                                <span className="font-bold text-gray-700">Impact Metrics</span>
                                <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                            </Link></li>
                            <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 font-bold group-hover:scale-110 transition-transform">📊</div>
                                <span className="font-bold text-gray-700">Generate Reports</span>
                                <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                            </button></li>
                            <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold group-hover:scale-110 transition-transform">📈</div>
                                <span className="font-bold text-gray-700">Monitor Progress</span>
                                <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                            </button></li>
                        </ul>
                    </div>
                </div>

                {/* Active Programs */}
                <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                    <h3 className="text-2xl font-black text-gray-900 mb-6">Active Programs & Initiatives</h3>
                    <div className="space-y-4">
                        <div className="p-6 border-l-4 border-blue-500 rounded-2xl bg-blue-50">
                            <div className="flex items-center justify-between mb-2">
                                <p className="font-bold text-gray-900">Climate Smart Agriculture Transition</p>
                                <span className="text-xs bg-blue-200 text-blue-900 px-3 py-1 rounded-full font-bold">85% Complete</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Training 2,400 farmers in 12 districts on sustainable practices</p>
                            <p className="text-xs text-gray-500">Budget: GH₵ 450,000 | Beneficiaries: 2,400</p>
                        </div>
                        <div className="p-6 border-l-4 border-green-500 rounded-2xl bg-green-50">
                            <div className="flex items-center justify-between mb-2">
                                <p className="font-bold text-gray-900">Water Harvesting Initiative</p>
                                <span className="text-xs bg-green-200 text-green-900 px-3 py-1 rounded-full font-bold">62% Complete</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Installing rainwater harvesting systems in water-stressed regions</p>
                            <p className="text-xs text-gray-500">Budget: GH₵ 680,000 | Systems Installed: 450</p>
                        </div>
                        <div className="p-6 border-l-4 border-orange-500 rounded-2xl bg-orange-50">
                            <div className="flex items-center justify-between mb-2">
                                <p className="font-bold text-gray-900">Youth Farmer Empowerment</p>
                                <span className="text-xs bg-orange-200 text-orange-900 px-3 py-1 rounded-full font-bold">45% Complete</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Supporting 800 young farmers with training and startup capital</p>
                            <p className="text-xs text-gray-500">Budget: GH₵ 320,000 | Youth Supported: 800</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

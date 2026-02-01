'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '../../components/Logo';
import AuthGuard from '../../components/AuthGuard';
import { Users, BookOpen, FileText, MessageSquare, TrendingUp, Award, ArrowRight, Menu, X } from 'lucide-react';

export default function ExpertDashboard() {
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
                        <h1 className="text-xl font-bold text-gray-900">Expert Dashboard</h1>
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
                            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Welcome Section */}
                <div className="mb-12 bg-gradient-to-r from-[#0F4C3A] to-[#2E7D32] rounded-[40px] p-12 text-white shadow-xl">
                    <h2 className="text-4xl font-black mb-4 tracking-tighter">Welcome, Expert! 👨‍🏫</h2>
                    <p className="text-green-50/90 text-lg font-medium mb-8">Share your knowledge, guide farmers, and shape sustainable agriculture practices.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/knowledge-hub" className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                            <BookOpen size={32} className="text-[#81C784]" />
                            <div>
                                <p className="font-bold text-white">Knowledge Base</p>
                                <p className="text-green-100 text-sm">Reference materials</p>
                            </div>
                        </Link>
                        <Link href="/ask-expert" className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                            <MessageSquare size={32} className="text-blue-300" />
                            <div>
                                <p className="font-bold text-white">Farmer Questions</p>
                                <p className="text-green-100 text-sm">Real-time support</p>
                            </div>
                        </Link>
                        <Link href="/news" className="flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all backdrop-blur-sm border border-white/20">
                            <FileText size={32} className="text-yellow-300" />
                            <div>
                                <p className="font-bold text-white">Research & News</p>
                                <p className="text-green-100 text-sm">Latest developments</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Impact Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-gray-500 uppercase">Farmers Guided</h3>
                            <Users className="text-blue-500" size={24} />
                        </div>
                        <p className="text-3xl font-black text-gray-900">847</p>
                        <p className="text-xs text-gray-400 mt-2">Active farmers</p>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-gray-500 uppercase">Articles</h3>
                            <FileText className="text-green-500" size={24} />
                        </div>
                        <p className="text-3xl font-black text-gray-900">24</p>
                        <p className="text-xs text-gray-400 mt-2">Published resources</p>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-gray-500 uppercase">Questions</h3>
                            <MessageSquare className="text-blue-600" size={24} />
                        </div>
                        <p className="text-3xl font-black text-gray-900">142</p>
                        <p className="text-xs text-gray-400 mt-2">Answered this month</p>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-gray-500 uppercase">Rating</h3>
                            <Award className="text-yellow-500" size={24} />
                        </div>
                        <p className="text-3xl font-black text-gray-900">4.9/5</p>
                        <p className="text-xs text-gray-400 mt-2">From farmers</p>
                    </div>
                </div>

                {/* Main Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-black text-gray-900 mb-6">Farmer Support</h3>
                        <ul className="space-y-3">
                            <li><Link href="/ask-expert" className="flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group">
                                <MessageSquare className="text-blue-500 group-hover:scale-110 transition-transform" size={24} />
                                <span className="font-bold text-gray-700">Answer Questions</span>
                                <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                            </Link></li>
                            <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-bold group-hover:scale-110 transition-transform">👥</div>
                                <span className="font-bold text-gray-700">Manage Network</span>
                                <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                            </button></li>
                            <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold group-hover:scale-110 transition-transform">🎯</div>
                                <span className="font-bold text-gray-700">Schedule Training</span>
                                <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                            </button></li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-black text-gray-900 mb-6">Content & Resources</h3>
                        <ul className="space-y-3">
                            <li><Link href="/knowledge-hub" className="flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group">
                                <BookOpen className="text-green-500 group-hover:scale-110 transition-transform" size={24} />
                                <span className="font-bold text-gray-700">Publish Article</span>
                                <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                            </Link></li>
                            <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 font-bold group-hover:scale-110 transition-transform">🎬</div>
                                <span className="font-bold text-gray-700">Upload Video</span>
                                <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                            </button></li>
                            <li><button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group text-left">
                                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 font-bold group-hover:scale-110 transition-transform">📰</div>
                                <span className="font-bold text-gray-700">Share Research</span>
                                <ArrowRight className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
                            </button></li>
                        </ul>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                    <h3 className="text-2xl font-black text-gray-900 mb-6">Recent Questions Awaiting Answers</h3>
                    <div className="space-y-4">
                        <div className="p-6 border-l-4 border-blue-500 rounded-2xl bg-blue-50">
                            <p className="font-bold text-gray-900 mb-1">Maize Fertilizer Schedule</p>
                            <p className="text-gray-600 text-sm mb-3">When is the best time to apply NPK for yield optimization?</p>
                            <p className="text-xs text-gray-500">Asked by John Mensah • 2 hours ago</p>
                        </div>
                        <div className="p-6 border-l-4 border-green-500 rounded-2xl bg-green-50">
                            <p className="font-bold text-gray-900 mb-1">Fall Armyworm Management</p>
                            <p className="text-gray-600 text-sm mb-3">Organic pest control methods for small-scale farmers</p>
                            <p className="text-xs text-gray-500">Asked by Ama Owusu • 5 hours ago</p>
                        </div>
                        <div className="p-6 border-l-4 border-orange-500 rounded-2xl bg-orange-50">
                            <p className="font-bold text-gray-900 mb-1">Irrigation Water Calculation</p>
                            <p className="text-gray-600 text-sm mb-3">How to calculate optimal water requirements for tomato cultivation?</p>
                            <p className="text-xs text-gray-500">Asked by Kwame Adom • 8 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AuthGuard>
    );
}

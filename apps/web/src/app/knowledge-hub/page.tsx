'use client';
import { useState } from 'react';
import Link from 'next/link';

const categories = [
    { id: 'all', name: 'All Resources', icon: '📚' },
    { id: 'guides', name: 'Step-by-Step Guides', icon: '📖' },
    { id: 'tips', name: 'Quick Farming Tips', icon: '💡' },
    { id: 'articles', name: 'Expert Articles', icon: '📄' },
    { id: 'videos', name: 'Video Tutorials', icon: '🎥' },
    { id: 'case-studies', name: 'Success Stories', icon: '🌟' },
];

const hubItems = [
    {
        id: 1,
        title: "Mastering Crop Rotation for Soil Health",
        category: "guides",
        type: "Guide",
        duration: "15 min read",
        image: "/farm-bg.jpg",
        description: "A comprehensive guide on how to implement effective crop rotation strategies to naturally replenish soil nutrients."
    },
    {
        id: 2,
        title: "5 Quick Tips for Efficient Irrigation",
        category: "tips",
        type: "Quick Tip",
        duration: "3 min read",
        image: "/farm-bg.jpg",
        description: "Reduce water waste and improve crop yield with these simple but effective irrigation techniques."
    },
    {
        id: 3,
        title: "The Future of Climate-Smart Seeds",
        category: "articles",
        type: "Article",
        duration: "10 min read",
        image: "/farm-bg.jpg",
        description: "Expert analysis on how bio-technology is developing seeds that can thrive in extreme climate conditions."
    },
    {
        id: 4,
        title: "Building a Resilient Smallholder Farm",
        category: "guides",
        type: "Guide",
        duration: "20 min read",
        image: "/farm-bg.jpg",
        description: "Learn the foundational principles of climate resilience for small-scale agricultural operations."
    },
    {
        id: 5,
        title: "Managing Pests with Natural Predators",
        category: "tips",
        type: "Quick Tip",
        duration: "5 min read",
        image: "/farm-bg.jpg",
        description: "A guide to integrated pest management using nature's own solutions instead of harsh chemicals."
    },
    {
        id: 6,
        title: "Success Story: 300% Yield Increase in Ghana",
        category: "case-studies",
        type: "Case Study",
        duration: "8 min read",
        image: "/farm-bg.jpg",
        description: "How a community in Northern Ghana transformed their lives using CSA ONE climate intelligence tools."
    }
];

export default function KnowledgeHubPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredItems = hubItems.filter(item => 
        selectedCategory === 'all' || item.category === selectedCategory
    );

    return (
        <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/dashboard" className="p-2 hover:bg-gray-50 rounded-xl text-gray-400 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </Link>
                        <h1 className="text-xl font-bold text-gray-900">CSA Knowledge Hub</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-bold">
                            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                            New Content Available
                        </div>
                        <div className="w-10 h-10 bg-[#0F4C3A] rounded-xl flex items-center justify-center text-xl shadow-sm">💡</div>
                    </div>
                </div>
            </header>

            <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-6 py-10 gap-10">
                
                {/* Category Sidebar */}
                <aside className="lg:w-72 flex flex-col gap-8">
                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8 px-2">Categories</h3>
                        <nav className="space-y-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm ${
                                        selectedCategory === cat.id
                                        ? 'bg-[#2E7D32] text-white shadow-lg shadow-green-900/10'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                                >
                                    <span className="text-xl">{cat.icon}</span>
                                    <span>{cat.name}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Featured Resource Card */}
                    <div className="bg-[#0F4C3A] rounded-[32px] p-8 text-white shadow-xl shadow-green-900/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                            <span className="text-7xl">📕</span>
                        </div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#81C784] mb-4">Featured</h4>
                        <h3 className="text-lg font-bold mb-4 leading-tight">CSA Masterclass: 2025 Edition</h3>
                        <p className="text-sm text-green-50/70 font-medium mb-8">Download our complete guide to climate-resilient farming in Ghana.</p>
                        <button className="w-full py-3 bg-white text-[#0F4C3A] font-black uppercase tracking-widest text-xs rounded-xl shadow-lg transition-all active:scale-95">
                            Download PDF
                        </button>
                    </div>
                </aside>

                {/* Content Grid */}
                <main className="flex-1">
                    <div className="mb-10 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                            {categories.find(c => c.id === selectedCategory)?.name}
                        </h2>
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <div className="relative flex-1 sm:w-64">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder="Search library..." 
                                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-2xl text-sm font-medium outline-none focus:ring-4 focus:ring-[#2E7D32]/5 focus:border-[#2E7D32] transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 group">
                                <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-[#2E7D32] shadow-sm">
                                            {item.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.duration}</span>
                                        <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Beginner Friendly</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#2E7D32] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8 line-clamp-2">
                                        {item.description}
                                    </p>
                                    <button className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#2E7D32] hover:gap-3 transition-all">
                                        Read Now
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-16 flex justify-center">
                        <button className="px-12 py-4 border-2 border-gray-100 hover:border-[#2E7D32] hover:text-[#2E7D32] text-gray-400 font-black uppercase tracking-widest text-xs rounded-2xl transition-all">
                            Load More Resources
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

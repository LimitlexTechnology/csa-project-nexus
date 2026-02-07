'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '../../components/Logo';
import { Search, Bell, Mail, ArrowRight, Clock, Tag } from 'lucide-react';
import { useI18n } from '../../lib/i18n';

const categories = ['All', 'Agriculture', 'Climate', 'Market', 'Technology', 'Community'];

const newsItems = [
    {
        id: 1,
        title: "CSA Hub Partners with Global Fund for Sustainable Farming",
        summary: "A new initiative aims to provide financial support and technical expertise to smallholder farmers adopting climate-smart practices across West Africa.",
        date: "Oct 28, 2025",
        category: "Agriculture",
        image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "New Satellite Data for Soil Health Analysis Released",
        summary: "Scientists have developed a high-resolution soil moisture mapping tool that helps farmers optimize irrigation and fertilizer application with 95% precision.",
        date: "Oct 25, 2025",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Regional Market Prices: Maize and Soybeans on the Rise",
        summary: "Market analysis shows a significant increase in demand for sustainably grown maize, with prices reaching a 3-year high in regional trading hubs.",
        date: "Oct 22, 2025",
        category: "Market",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Climate Resilience Workshop Scheduled for Next Month",
        summary: "Join experts for a 3-day virtual workshop on building climate-resilient farming systems using traditional knowledge and modern technology.",
        date: "Oct 20, 2025",
        category: "Community",
        image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        title: "Drought-Resistant Crop Varieties Show Promising Results",
        summary: "Recent field trials of new drought-resistant legume varieties have shown a 20% increase in yield compared to traditional seeds in arid regions.",
        date: "Oct 18, 2025",
        category: "Climate",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
    }
];

export default function NewsPage() {
    const { t } = useI18n();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredNews = newsItems.filter(item => {
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.summary.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans">
            {/* Header / Navigation */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/dashboard">
                            <Logo />
                        </Link>
                        <h1 className="text-xl font-bold text-gray-900 border-l border-gray-100 pl-8">{t('news.title')}</h1>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400">
                            <Bell size={24} />
                        </button>
                        <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white shadow-sm overflow-hidden">
                            <img src="https://ui-avatars.com/api/?name=Farmer+John&background=2E7D32&color=fff" alt="User" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
                {/* Search and Filters Section */}
                <div className="mb-12 space-y-8">
                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder={t('news.search.placeholder')}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-14 pr-6 py-5 bg-white border border-gray-100 rounded-3xl text-gray-900 placeholder-gray-400 focus:ring-4 focus:ring-[#2E7D32]/5 focus:border-[#2E7D32] outline-none transition-all shadow-sm font-medium"
                        />
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${selectedCategory === category
                                        ? 'bg-[#2E7D32] text-white shadow-lg shadow-green-900/10'
                                        : 'bg-white text-gray-500 border border-gray-100 hover:bg-gray-50'
                                    }`}
                            >
                                {t(`news.category.${category.toLowerCase()}`)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* News Grid */}
                {filteredNews.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNews.map((item) => (
                            <article key={item.id} className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 group">
                                <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-[#2E7D32] shadow-sm">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Clock size={14} className="text-gray-400" />
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
                                        <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('news.readtime')}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#2E7D32] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8 line-clamp-3">
                                        {item.summary}
                                    </p>
                                    <Link
                                        href={`/news/${item.id}`}
                                        className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#2E7D32] hover:gap-3 transition-all"
                                    >
                                        {t('news.readMore')}
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                            <Search size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{t('news.none')}</h3>
                        <p className="text-gray-500 font-medium">{t('news.none.help')}</p>
                        <button
                            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                            className="mt-8 text-sm font-black uppercase tracking-widest text-[#2E7D32] hover:underline"
                        >
                            {t('news.reset')}
                        </button>
                    </div>
                )}

                {/* Newsletter CTA */}
                <div className="mt-20 bg-[#0F4C3A] rounded-[40px] p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                        <Mail size={160} className="text-white" />
                    </div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-black text-white mb-4">{t('news.cta.title')}</h2>
                        <p className="text-green-50/70 font-medium mb-10 text-lg">
                            {t('news.cta.desc')}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder={t('news.cta.email')}
                                className="flex-1 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-green-100/40 outline-none focus:bg-white/20 transition-all font-medium"
                            />
                            <button className="px-10 py-5 bg-[#81C784] hover:bg-[#66BB6A] text-[#0F4C3A] font-black uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-black/20">
                                {t('news.cta.subscribe')}
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="bg-white border-t border-gray-100 py-10 mt-10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center justify-center gap-2">
                        <Logo iconOnly className="w-8 h-8" />
                        <span className="text-lg font-black tracking-tighter text-[#0F4C3A]">CSA Hub</span>
                    </div>
                    <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <Link href="#" className="hover:text-gray-600">{t('common.privacy.short')}</Link>
                        <Link href="#" className="hover:text-gray-600">{t('common.terms.short')}</Link>
                        <Link href="#" className="hover:text-gray-600">{t('common.support')}</Link>
                    </div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">© 2026 CSA Hub Nexus</p>
                </div>
            </footer>
        </div>
    );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';

const mockResults = {
    news: [
        { id: 1, title: "CSA ONE Partners with Global Fund", date: "Oct 28, 2025" },
        { id: 2, title: "New Satellite Data for Soil Health", date: "Oct 25, 2025" },
    ],
    tips: [
        { id: 1, title: "Mastering Crop Rotation", category: "Guides" },
        { id: 2, title: "5 Tips for Efficient Irrigation", category: "Quick Tips" },
    ],
    experts: [
        { id: 1, name: "Dr. Kwesi Mensah", role: "Agronomist", status: "Online" },
        { id: 2, name: "Sarah Abena", role: "Climate Scientist", status: "Offline" },
    ]
};

export default function GlobalSearchPage() {
    const [query, setQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setIsSearching(e.target.value.length > 0);
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans">
            {/* Search Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
                <div className="max-w-5xl mx-auto px-6 h-24 flex items-center gap-6">
                    <Link href="/dashboard" className="p-2 hover:bg-gray-50 rounded-xl text-gray-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </Link>
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-gray-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <input 
                            type="text" 
                            autoFocus
                            placeholder="Search everything in CSA ONE..."
                            value={query}
                            onChange={handleSearch}
                            className="w-full pl-16 pr-8 py-5 bg-gray-50 border-none rounded-[28px] text-xl font-bold text-gray-900 placeholder-gray-400 focus:ring-4 focus:ring-[#2E7D32]/5 transition-all outline-none"
                        />
                        {query && (
                            <button 
                                onClick={() => setQuery('')}
                                className="absolute inset-y-0 right-0 pr-6 flex items-center text-gray-400 hover:text-gray-600"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        )}
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
                {!isSearching ? (
                    <div className="text-center py-20 space-y-8">
                        <div className="text-8xl">🔎</div>
                        <div className="max-w-md mx-auto">
                            <h2 className="text-2xl font-black text-gray-900 mb-4">What are you looking for?</h2>
                            <p className="text-gray-500 font-medium">Search for the latest climate news, farming guides, or connect with agriculture experts in your region.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 pt-8">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest w-full mb-2">Popular Searches</span>
                            {['Crop Rotation', 'Drought Relief', 'Maize Prices', 'Expert Advice'].map(tag => (
                                <button key={tag} className="px-6 py-2.5 bg-white border border-gray-100 rounded-full text-sm font-bold text-gray-600 hover:border-[#2E7D32] hover:text-[#2E7D32] transition-all">
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-12">
                        {/* Results Grouped by Type */}
                        
                        {/* News Results */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between px-2">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">News & Announcements</h3>
                                <span className="text-xs font-bold text-gray-400">{mockResults.news.length} results</span>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {mockResults.news.map(item => (
                                    <div key={item.id} className="bg-white p-6 rounded-3xl border border-gray-100 hover:border-[#2E7D32]/30 hover:shadow-lg transition-all cursor-pointer group">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-gray-900 group-hover:text-[#2E7D32] transition-colors">{item.title}</h4>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">{item.date}</p>
                                            </div>
                                            <div className="p-2 bg-gray-50 rounded-xl text-gray-400 group-hover:bg-[#2E7D32] group-hover:text-white transition-all">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Knowledge Hub Results */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between px-2">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Knowledge Hub</h3>
                                <span className="text-xs font-bold text-gray-400">{mockResults.tips.length} results</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {mockResults.tips.map(item => (
                                    <div key={item.id} className="bg-white p-6 rounded-3xl border border-gray-100 hover:border-[#2E7D32]/30 hover:shadow-lg transition-all cursor-pointer group flex items-start gap-4">
                                        <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-xl">💡</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 group-hover:text-[#2E7D32] transition-colors">{item.title}</h4>
                                            <p className="text-xs font-black text-[#2E7D32] uppercase tracking-widest mt-2">{item.category}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Expert Results */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between px-2">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Agriculture Experts</h3>
                                <span className="text-xs font-bold text-gray-400">{mockResults.experts.length} results</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {mockResults.experts.map(item => (
                                    <Link href="/ask-expert" key={item.id} className="bg-white p-6 rounded-3xl border border-gray-100 hover:border-[#2E7D32]/30 hover:shadow-lg transition-all cursor-pointer group flex items-center gap-5 block">
                                        <div className="relative">
                                            <div className="w-14 h-14 bg-gray-200 rounded-2xl overflow-hidden border-2 border-white shadow-sm">
                                                <img src={`https://ui-avatars.com/api/?name=${item.name}&background=2E7D32&color=fff`} alt={item.name} />
                                            </div>
                                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${item.status === 'Online' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 group-hover:text-[#2E7D32] transition-colors">{item.name}</h4>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{item.role}</p>
                                        </div>
                                        <span className="text-xs font-black text-[#2E7D32] uppercase tracking-widest hover:underline">Chat</span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </div>
                )}
            </main>
        </div>
    );
}

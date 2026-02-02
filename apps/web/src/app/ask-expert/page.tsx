'use client';
import { useState } from 'react';
import Link from 'next/link';

const topics = [
    'Soil Health', 'Crop Diseases', 'Irrigation', 'Market Prices', 
    'Climate Change', 'Organic Farming', 'Fertilizers', 'Livestock'
];

export default function AskExpertPage() {
    const [question, setQuestion] = useState('');
    const [selectedTopics, setSelectedRole] = useState<string[]>([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const toggleTopic = (topic: string) => {
        setSelectedRole(prev => 
            prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
                <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/dashboard" className="p-2 hover:bg-gray-50 rounded-xl text-gray-400 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </Link>
                        <h1 className="text-xl font-bold text-gray-900">Ask an Expert</h1>
                    </div>
                    <div className="w-10 h-10 bg-[#0F4C3A] rounded-xl flex items-center justify-center text-xl shadow-sm">👨‍🌾</div>
                </div>
            </header>

            <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
                {!isSubmitted ? (
                    <div className="space-y-12">
                        {/* Intro Section */}
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl font-black text-gray-900 tracking-tight">How can we help you today?</h2>
                            <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
                                Get direct advice from certified agronomists and climate scientists. Our experts typically respond within 2 hours.
                            </p>
                        </div>

                        {/* Form Card */}
                        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-10">
                                {/* Question Input */}
                                <div className="space-y-4">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 block px-2">Your Question</label>
                                    <textarea 
                                        required
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                        placeholder="Describe your farming challenge in detail..."
                                        className="w-full h-48 px-8 py-6 bg-gray-50 border-none rounded-[32px] text-lg font-medium text-gray-900 placeholder-gray-400 focus:ring-4 focus:ring-[#2E7D32]/5 transition-all outline-none resize-none"
                                    />
                                </div>

                                {/* Topic Selection */}
                                <div className="space-y-6">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 block px-2">Select Related Topics</label>
                                    <div className="flex flex-wrap gap-3">
                                        {topics.map(topic => (
                                            <button
                                                key={topic}
                                                type="button"
                                                onClick={() => toggleTopic(topic)}
                                                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
                                                    selectedTopics.includes(topic)
                                                    ? 'bg-[#2E7D32] text-white shadow-lg shadow-green-900/10'
                                                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                                }`}
                                            >
                                                {topic}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Attachment Placeholder */}
                                <div className="p-8 border-2 border-dashed border-gray-100 rounded-[32px] flex flex-col items-center justify-center gap-4 text-gray-400 hover:border-[#2E7D32]/30 hover:bg-[#2E7D32]/5 transition-all cursor-pointer group">
                                    <div className="text-4xl group-hover:scale-110 transition-transform">📸</div>
                                    <span className="text-sm font-bold uppercase tracking-widest">Add photos of your crops (Optional)</span>
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit"
                                    className="w-full py-6 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-black text-xl rounded-[24px] uppercase tracking-[0.2em] shadow-xl shadow-green-900/10 transition-all active:scale-[0.98]"
                                >
                                    Submit Question
                                </button>
                            </form>
                        </div>

                        {/* Recent Community Questions Preview */}
                        <div className="pt-12 border-t border-gray-100 space-y-8">
                            <h3 className="text-xl font-bold text-gray-900">Recently Answered</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer">
                                    <span className="px-4 py-1 bg-green-50 rounded-full text-[10px] font-black uppercase tracking-widest text-[#2E7D32] mb-4 inline-block">Soil Health</span>
                                    <h4 className="font-bold text-gray-900 mb-2">How to improve soil nitrogen naturally?</h4>
                                    <p className="text-sm text-gray-500 line-clamp-2">Our expert suggests planting cover crops like clover during the off-season...</p>
                                </div>
                                <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer">
                                    <span className="px-4 py-1 bg-blue-50 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4 inline-block">Irrigation</span>
                                    <h4 className="font-bold text-gray-900 mb-2">Best drip system for small maize farms?</h4>
                                    <p className="text-sm text-gray-500 line-clamp-2">For a 1-acre plot, we recommend the gravity-fed low pressure kit because...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto text-center space-y-8 py-20 animate-in fade-in zoom-in duration-700">
                        <div className="w-32 h-32 bg-green-100 rounded-[40px] flex items-center justify-center text-6xl mx-auto shadow-inner">
                            ✅
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Question Submitted!</h2>
                            <p className="text-xl text-gray-500 font-medium leading-relaxed px-12">
                                We&apos;ve sent your question to our experts. You&apos;ll receive a notification as soon as someone responds.
                            </p>
                        </div>
                        <div className="pt-12 flex flex-col gap-4">
                            <Link 
                                href="/dashboard"
                                className="w-full py-5 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-black text-lg rounded-2xl uppercase tracking-[0.2em] shadow-lg transition-all"
                            >
                                Back to Dashboard
                            </Link>
                            <button 
                                onClick={() => setIsSubmitted(false)}
                                className="w-full py-5 border-2 border-gray-100 hover:border-gray-200 text-gray-500 font-bold rounded-2xl transition-all"
                            >
                                Ask Another Question
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

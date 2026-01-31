'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ReportMiningPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

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
                        <Link href="/dashboard" className="p-2 hover:bg-gray-50 rounded-xl text-gray-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </Link>
                        <h1 className="text-xl font-bold text-gray-900">Report Illegal Mining</h1>
                    </div>
                    <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-red-500/20 animate-pulse">🚨</div>
                </div>
            </header>

            <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
                {!isSubmitted ? (
                    <div className="space-y-12">
                        {/* Intro Section */}
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Environmental Protection</h2>
                            <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
                                Help us protect our water bodies and farmlands. Report any suspected illegal mining (Galamsey) activities in your area. Your identity remains confidential.
                            </p>
                        </div>

                        {/* Report Form */}
                        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-10">
                                {/* Location Input */}
                                <div className="space-y-4">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 block px-2">Precise Location</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-red-500">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <input 
                                            required
                                            type="text"
                                            placeholder="Enter village, district, or GPS coordinates..."
                                            className="w-full pl-16 pr-8 py-5 bg-gray-50 border-none rounded-[28px] text-lg font-bold text-gray-900 placeholder-gray-400 focus:ring-4 focus:ring-red-500/5 transition-all outline-none"
                                        />
                                        <button 
                                            type="button"
                                            className="absolute inset-y-0 right-4 flex items-center px-4 text-xs font-black uppercase tracking-widest text-[#2E7D32] hover:underline"
                                        >
                                            Get Current Location
                                        </button>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="space-y-4">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 block px-2">Activity Description</label>
                                    <textarea 
                                        required
                                        placeholder="Describe what you see (e.g., excavators near the river, water discoloration, heavy machinery movements)..."
                                        className="w-full h-48 px-8 py-6 bg-gray-50 border-none rounded-[32px] text-lg font-medium text-gray-900 placeholder-gray-400 focus:ring-4 focus:ring-red-500/5 transition-all outline-none resize-none"
                                    />
                                </div>

                                {/* Photo Upload */}
                                <div className="space-y-4">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 block px-2">Evidence Photos (Optional)</label>
                                    <div className="p-8 border-2 border-dashed border-gray-100 rounded-[32px] flex flex-col items-center justify-center gap-4 text-gray-400 hover:border-red-500/30 hover:bg-red-500/5 transition-all cursor-pointer group">
                                        <div className="text-4xl group-hover:scale-110 transition-transform">📸</div>
                                        <span className="text-sm font-bold uppercase tracking-widest text-center">Upload clear photos of the mining activity</span>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit"
                                    className="w-full py-6 bg-red-500 hover:bg-red-600 text-white font-black text-xl rounded-[24px] uppercase tracking-[0.2em] shadow-xl shadow-red-500/20 transition-all active:scale-[0.98]"
                                >
                                    Submit Urgent Report
                                </button>
                            </form>
                        </div>

                        {/* Confidentiality Notice */}
                        <div className="bg-orange-50 p-8 rounded-[32px] border border-orange-100 flex items-start gap-6">
                            <div className="text-3xl">🛡️</div>
                            <div>
                                <h4 className="text-sm font-bold text-orange-900 mb-1 uppercase tracking-tight">Your Safety Matters</h4>
                                <p className="text-xs text-orange-700/80 font-medium leading-relaxed italic">
                                    All reports are encrypted and sent directly to the environmental protection agency. Your phone number and IP address are never shared with third parties.
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto text-center space-y-8 py-20 animate-in fade-in zoom-in duration-700">
                        <div className="w-32 h-32 bg-red-100 rounded-[40px] flex items-center justify-center text-6xl mx-auto shadow-inner">
                            🚩
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Report Received</h2>
                            <p className="text-xl text-gray-500 font-medium leading-relaxed px-12">
                                Thank you for your bravery. We have forwarded this report to the relevant authorities for immediate investigation.
                            </p>
                        </div>
                        <div className="pt-12 flex flex-col gap-4">
                            <Link 
                                href="/dashboard"
                                className="w-full py-5 bg-gray-900 text-white font-black text-lg rounded-2xl uppercase tracking-[0.2em] shadow-lg transition-all"
                            >
                                Back to Dashboard
                            </Link>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

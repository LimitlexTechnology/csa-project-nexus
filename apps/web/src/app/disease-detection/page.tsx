'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function DiseaseDetectionPage() {
    const [file, setFile] = useState<File | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const handleUpload = () => {
        setIsAnalyzing(true);
        setTimeout(() => {
            setIsAnalyzing(false);
            setShowResults(true);
        }, 3000);
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
                        <h1 className="text-xl font-bold text-gray-900">AI Disease Detection</h1>
                    </div>
                    <div className="w-10 h-10 bg-[#0F4C3A] rounded-xl flex items-center justify-center text-xl shadow-sm">🔬</div>
                </div>
            </header>

            <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
                {!showResults ? (
                    <div className="space-y-12">
                        {/* Intro Section */}
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Protect Your Harvest</h2>
                            <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
                                Upload a clear photo of your plant's leaves or affected areas. Our AI will analyze it for common diseases and provide treatment advice.
                            </p>
                        </div>

                        {/* Upload Card */}
                        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col items-center">
                            {!isAnalyzing ? (
                                <>
                                    <div className="w-full aspect-[16/9] border-4 border-dashed border-gray-100 rounded-[32px] flex flex-col items-center justify-center gap-6 text-gray-400 hover:border-[#2E7D32]/30 hover:bg-[#2E7D32]/5 transition-all cursor-pointer group mb-10 relative overflow-hidden">
                                        <div className="text-7xl group-hover:scale-110 transition-transform duration-500">📸</div>
                                        <div className="text-center">
                                            <p className="text-sm font-black uppercase tracking-[0.2em] mb-2">Drag & Drop or Click to Upload</p>
                                            <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">Supported formats: JPG, PNG (Max 10MB)</p>
                                        </div>
                                        <input 
                                            type="file" 
                                            className="absolute inset-0 opacity-0 cursor-pointer" 
                                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
                                        <InstructionStep number="1" text="Capture clear photo in good lighting" icon="☀️" />
                                        <InstructionStep number="2" text="Focus on the affected area" icon="🔍" />
                                        <InstructionStep number="3" text="Wait for AI analysis results" icon="🤖" />
                                    </div>

                                    <button 
                                        disabled={!file}
                                        onClick={handleUpload}
                                        className={`w-full py-6 font-black text-xl rounded-[24px] uppercase tracking-[0.2em] shadow-xl transition-all active:scale-[0.98] ${
                                            file 
                                            ? 'bg-[#2E7D32] hover:bg-[#1B5E20] text-white shadow-green-900/10' 
                                            : 'bg-gray-100 text-gray-300 cursor-not-allowed shadow-none'
                                        }`}
                                    >
                                        Start Analysis
                                    </button>
                                </>
                            ) : (
                                <div className="py-20 flex flex-col items-center text-center animate-in fade-in duration-500">
                                    <div className="relative w-32 h-32 mb-10">
                                        <div className="absolute inset-0 border-8 border-green-100 rounded-full"></div>
                                        <div className="absolute inset-0 border-8 border-[#2E7D32] rounded-full border-t-transparent animate-spin"></div>
                                        <div className="absolute inset-0 flex items-center justify-center text-4xl">🔬</div>
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2">Analyzing Samples...</h3>
                                    <p className="text-gray-500 font-medium">Scanning leaf patterns against our global disease database.</p>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Analysis Results</h2>
                            <button 
                                onClick={() => setShowResults(false)}
                                className="px-6 py-2 border-2 border-gray-100 rounded-full text-xs font-black uppercase tracking-widest text-gray-400 hover:border-[#2E7D32] hover:text-[#2E7D32] transition-all"
                            >
                                New Scan
                            </button>
                        </div>

                        {/* Result Placeholder */}
                        <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100">
                            <div className="bg-orange-50 p-8 flex items-center gap-6 border-b border-orange-100">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm shadow-orange-900/5">⚠️</div>
                                <div>
                                    <h3 className="text-xl font-bold text-orange-900 mb-1">Potential Threat Detected</h3>
                                    <p className="text-sm text-orange-700/80 font-medium italic">Confidence Score: 92%</p>
                                </div>
                            </div>
                            <div className="p-8 md:p-12 space-y-10">
                                <div className="flex flex-col md:flex-row gap-12">
                                    <div className="md:w-1/3 aspect-square bg-gray-100 rounded-3xl overflow-hidden relative border-4 border-white shadow-md">
                                        <img src="/farm-bg.jpg" className="w-full h-full object-cover" alt="Scanned Sample" />
                                        <div className="absolute inset-0 border-2 border-orange-400 animate-pulse m-4 rounded-xl"></div>
                                    </div>
                                    <div className="flex-1 space-y-6">
                                        <div>
                                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Identified Disease</h4>
                                            <p className="text-2xl font-black text-gray-900">Maize Leaf Rust</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Recommended Treatment</h4>
                                            <p className="text-gray-600 font-medium leading-relaxed">
                                                Apply a copper-based fungicide immediately. Improve air circulation by thinning the plants. Avoid overhead watering during early morning hours to reduce humidity levels on foliage.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-gray-50 flex flex-col sm:flex-row gap-4">
                                    <Link href="/ask-expert" className="flex-1 py-4 bg-[#2E7D32] text-white text-center font-black uppercase tracking-widest text-xs rounded-2xl shadow-lg transition-all hover:bg-[#1B5E20]">
                                        Talk to an Expert
                                    </Link>
                                    <button className="flex-1 py-4 bg-gray-50 text-gray-500 font-black uppercase tracking-widest text-xs rounded-2xl transition-all hover:bg-gray-100">
                                        Save to History
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

function InstructionStep({ number, text, icon }: { number: string, text: string, icon: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="min-w-[32px] h-8 bg-gray-50 rounded-full flex items-center justify-center text-xs font-black text-[#2E7D32]">{number}</div>
            <div>
                <span className="text-xl mb-1 block">{icon}</span>
                <p className="text-xs font-bold text-gray-500 leading-tight">{text}</p>
            </div>
        </div>
    );
}

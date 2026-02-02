'use client';
import React from 'react';

export const Slide1: React.FC = () => {
    return (
        <div className="w-full">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#333333] mb-8 tracking-tight">
                    CLIMATE & FARMING CHALLENGES
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Main Visual Placeholder */}
                    <div className="w-full md:w-[40%] aspect-[4/3] bg-[#F5F5F5] rounded-3xl relative overflow-hidden flex items-center justify-center">
                        {/* Background Illustration Simulation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FFECB3] to-[#FFCCBC] opacity-50"></div>
                        <div className="z-10 text-center">
                            <div className="text-7xl mb-4 grayscale opacity-80">🏜️</div>
                            <div className="flex gap-2 justify-center">
                                <div className="bg-red-500 text-white rounded-lg p-1 text-xs px-2 font-bold flex items-center gap-1 shadow-lg animate-bounce">
                                    <span>⚠️</span>
                                </div>
                                <div className="bg-red-500 text-white rounded-lg p-1 text-xs px-2 font-bold flex items-center gap-1 shadow-lg">
                                    <span>⚠️</span>
                                </div>
                            </div>
                        </div>
                        {/* Tiny clouds/warning overlay */}
                        <div className="absolute top-4 right-10 text-3xl opacity-40">☁️</div>
                        <div className="absolute top-10 left-10 text-3xl opacity-40">☁️</div>
                    </div>

                    <div className="flex-1 pt-4 text-[#4A4A4A] text-xl leading-[1.6] font-medium max-w-lg">
                        Unprextidtable weather patterns, soil degrration, degrgation, and resource scurce scarcity thretan thretan global food security.
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-sm font-black text-[#8E8E8E] uppercase tracking-[0.2em] font-sans">
                        YOUR CSA FARING ONE SOLUTION
                    </h3>
                    {/* Toggle Switch */}
                    <div className="w-14 h-7 bg-[#333333] rounded-full p-1 cursor-pointer flex items-center justify-end relative transition-all shadow-inner">
                        <div className="w-5 h-5 bg-white rounded-full shadow-md"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    {/* Dashboard Widget 1: Field Preview */}
                    <div className="bg-[#F8F9F8] rounded-3xl p-5 aspect-square flex items-center justify-center border border-gray-100 shadow-sm relative overflow-hidden group hover:scale-[1.02] transition-transform">
                        <div className="absolute inset-0 bg-gradient-to-t from-green-100/30 to-transparent"></div>
                        <div className="text-center">
                            <span className="text-6xl mb-2 block drop-shadow-sm">🌦️</span>
                            <div className="w-12 h-1 bg-green-200/50 rounded-full mx-auto mt-2"></div>
                        </div>
                    </div>

                    {/* UV Index Widget */}
                    <div className="bg-white rounded-3xl p-6 shadow-md border border-[#F0F0F0]">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-yellow-500 text-2xl animate-spin-slow">☀️</span>
                        </div>
                        <div className="space-y-3">
                            <p className="text-xs font-bold text-[#AFAFAF] uppercase tracking-wide">
                                UV Index <span className="text-[#333333] font-black underline decoration-green-300">7</span> (high)
                            </p>
                            <p className="text-xs font-bold text-[#AFAFAF] uppercase tracking-wide">
                                Wind Speed <span className="text-[#333333] font-black underline decoration-green-300 ml-1">10%</span>
                            </p>
                        </div>
                        {/* Wave Graph */}
                        <div className="h-6 w-full mt-6 flex items-end gap-1.5 opacity-60">
                            {[3, 6, 4, 8, 5, 7, 4].map((h, i) => (
                                <div key={i} className={`flex-1 ${i === 3 ? 'bg-teal-500' : 'bg-[#E0E0E0]'} rounded-full transition-all`} style={{ height: `${h * 10}%` }}></div>
                            ))}
                        </div>
                    </div>

                    {/* Regional Details Widget */}
                    <div className="bg-white rounded-3xl p-6 shadow-md border border-[#F0F0F0] relative overflow-hidden">
                        <p className="text-[10px] text-[#AFAFAF] font-black uppercase mb-2 tracking-widest">Regional</p>
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="text-xs font-black text-[#333333] leading-tight mb-1">Wind Speed</p>
                                <p className="text-2xl font-black text-[#333333] tracking-tighter">15 km/h</p>
                            </div>
                            <span className="text-4xl filter drop-shadow hover:scale-110 transition-transform">🌧️</span>
                        </div>
                        <p className="text-[10px] text-[#AFAFAF] leading-relaxed font-bold">
                            New inigation tech adapted cεrmageerte nceoudrrne
                        </p>
                        <div className="flex gap-1.5 justify-center mt-6">
                            {[0, 1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === 3 ? 'bg-[#00695C]' : 'bg-[#EFEEEE]'}`}></div>
                            ))}
                        </div>
                    </div>

                    {/* Regional Temperature Widget */}
                    <div className="bg-white rounded-3xl p-6 shadow-md border border-[#F0F0F0] relative overflow-hidden">
                        <p className="text-[10px] text-[#AFAFAF] font-black uppercase mb-2 tracking-widest">Regional</p>
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="text-xs font-black text-[#333333] leading-tight mb-1">Current Temp</p>
                                <p className="text-2xl font-black text-[#333333] tracking-tighter">28°C</p>
                            </div>
                            <div className="w-10 h-10 rounded-full border-[3px] border-[#00695C] flex items-center justify-center p-1.5 relative">
                                <div className="w-full h-1/2 bg-[#00695C] rounded-t-full"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-[8px] font-black text-[#00695C] mt-1 pr-0.5">🌡️</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-[10px] text-[#AFAFAF] leading-relaxed font-bold">
                            Use timely insights to build a sustainable future of farming across Ghanaian communities.
                        </p>
                        <div className="flex gap-1.5 justify-center mt-6">
                            {[0, 1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === 2 ? 'bg-[#00695C]' : 'bg-[#EFEEEE]'}`}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured CSA Tip Footer */}
            <div className="bg-gradient-to-r from-[#DCF5E2] to-[#BEEAD4] rounded-3xl p-8 flex justify-between items-center shadow-sm border border-white relative overflow-hidden group">
                <div className="relative z-10">
                    <p className="text-[10px] font-black text-[#757575] uppercase tracking-[0.3em] mb-2">Featured CSA Tip</p>
                    <p className="text-[#333333] font-bold text-lg leading-snug max-w-xl">
                        Utilize drouht-resistant crops to conserve water in arid regions
                    </p>
                </div>
                <div className="bg-white/40 p-4 rounded-full backdrop-blur-sm z-10 group-hover:scale-110 transition-transform">
                    <span className="text-[#00695C] text-3xl">💡</span>
                </div>
                {/* Glow effect */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>
            </div>
        </div>
    );
};

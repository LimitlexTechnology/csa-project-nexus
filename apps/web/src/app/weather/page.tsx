'use client';
import { useState } from 'react';
import Link from 'next/link';

const forecastData = [
    { day: 'Mon', temp: 28, condition: 'Sunny', icon: '☀️', precip: '5%' },
    { day: 'Tue', temp: 26, condition: 'Partly Cloudy', icon: '⛅', precip: '15%' },
    { day: 'Wed', temp: 24, condition: 'Light Rain', icon: '🌦️', precip: '60%' },
    { day: 'Thu', temp: 23, condition: 'Showers', icon: '🌧️', precip: '85%' },
    { day: 'Fri', temp: 25, condition: 'Mostly Cloudy', icon: '☁️', precip: '20%' },
    { day: 'Sat', temp: 27, condition: 'Sunny', icon: '☀️', precip: '0%' },
    { day: 'Sun', temp: 29, condition: 'Sunny', icon: '☀️', precip: '0%' },
];

export default function WeatherDetailsPage() {
    return (
        <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans">
            {/* Navigation Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/dashboard" className="p-2 hover:bg-gray-50 rounded-xl text-gray-400 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </Link>
                        <h1 className="text-xl font-bold text-gray-900">Weather Intelligence</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-gray-900">Accra, Ghana</p>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Last updated: 12:45 PM</p>
                        </div>
                        <div className="w-10 h-10 bg-[#0F4C3A] rounded-xl flex items-center justify-center text-xl shadow-sm">🌍</div>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10 space-y-10">
                
                {/* Current Conditions Hero Card */}
                <section className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                        <span className="text-[240px]">☀️</span>
                    </div>
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <span className="px-6 py-2 bg-green-50 rounded-full text-xs font-black uppercase tracking-[0.2em] text-[#2E7D32] mb-8 shadow-sm">Current Conditions</span>
                            <div className="flex items-center gap-8 mb-4">
                                <span className="text-8xl md:text-9xl font-black text-gray-900 tracking-tighter">28°</span>
                                <span className="text-7xl md:text-8xl">☀️</span>
                            </div>
                            <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Mostly Sunny & Clear</h2>
                            <p className="text-lg text-gray-500 font-medium max-w-md leading-relaxed">
                                Ideal conditions for crop maintenance and outdoor farming activities today.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <DetailStat label="Humidity" value="64%" icon="💧" />
                            <DetailStat label="Wind Speed" value="12 km/h" icon="💨" />
                            <DetailStat label="UV Index" value="High (7)" icon="☀️" />
                            <DetailStat label="Visibility" value="10 km" icon="👁️" />
                            <DetailStat label="Pressure" value="1012 hPa" icon="📉" />
                            <DetailStat label="Dew Point" value="21°C" icon="🌡️" />
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* 7-Day Forecast */}
                    <section className="lg:col-span-2 bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-10">
                            <h3 className="text-2xl font-black text-gray-900 tracking-tight">7-Day Forecast</h3>
                            <div className="flex gap-2">
                                <button className="p-2 bg-gray-50 rounded-lg text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <button className="p-2 bg-gray-50 rounded-lg text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-4">
                            {forecastData.map((day, idx) => (
                                <div key={idx} className={`flex flex-col items-center p-4 rounded-3xl transition-all cursor-pointer ${idx === 0 ? 'bg-[#2E7D32] text-white shadow-lg shadow-green-900/20' : 'hover:bg-gray-50'}`}>
                                    <span className={`text-[10px] font-black uppercase tracking-widest mb-4 ${idx === 0 ? 'text-green-100' : 'text-gray-400'}`}>{day.day}</span>
                                    <span className="text-3xl mb-4">{day.icon}</span>
                                    <span className="text-xl font-black mb-2">{day.temp}°</span>
                                    <span className={`text-[10px] font-bold ${idx === 0 ? 'text-green-200' : 'text-blue-400'}`}>💧 {day.precip}</span>
                                </div>
                            ))}
                        </div>

                        {/* Temperature Chart Placeholder */}
                        <div className="mt-12 pt-12 border-t border-gray-50 relative h-48 flex items-end justify-between px-4">
                            <div className="absolute top-0 left-0 text-[10px] font-bold text-gray-300 uppercase tracking-widest">Temperature Trend</div>
                            {[40, 60, 55, 30, 45, 70, 85].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                                    <div className="w-full bg-gradient-to-t from-[#2E7D32]/20 to-[#2E7D32] rounded-t-xl transition-all group-hover:opacity-80" style={{ height: `${h}%` }}></div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">{forecastData[i]?.day}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Farming Advice Section */}
                    <section className="bg-[#0F4C3A] rounded-[40px] p-8 md:p-10 text-white shadow-xl shadow-green-900/20 flex flex-col">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">💡</div>
                            <h3 className="text-xl font-bold">Climate Advice</h3>
                        </div>

                        <div className="space-y-8 flex-1">
                            <AdviceCard 
                                title="Irrigation" 
                                desc="Maintain regular watering today. High evaporation expected between 1 PM and 4 PM."
                                level="Action Required"
                            />
                            <AdviceCard 
                                title="Pest Management" 
                                desc="Current humidity levels increase risk of fungal growth. Monitor legume crops closely."
                                level="High Alert"
                            />
                            <AdviceCard 
                                title="Harvesting" 
                                desc="Dry conditions are perfect for maize harvesting scheduled for late this week."
                                level="Ideal"
                            />
                        </div>

                        <button className="w-full py-4 mt-12 bg-[#81C784] hover:bg-[#66BB6A] text-[#0F4C3A] font-black uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-black/20">
                            Detailed Report
                        </button>
                    </section>
                </div>
            </main>
        </div>
    );
}

function DetailStat({ label, value, icon }: { label: string, value: string, icon: string }) {
    return (
        <div className="flex flex-col gap-1 p-6 bg-gray-50 rounded-[28px] border border-gray-100/50 hover:bg-white hover:shadow-md transition-all">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</span>
            <div className="flex items-center gap-3">
                <span className="text-2xl">{icon}</span>
                <span className="text-xl font-black text-gray-900">{value}</span>
            </div>
        </div>
    );
}

function AdviceCard({ title, desc, level }: { title: string, desc: string, level: string }) {
    return (
        <div className="relative pl-6 border-l-2 border-white/20 hover:border-[#81C784] transition-colors">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#81C784] mb-2 block">{level}</span>
            <h4 className="text-lg font-bold mb-2">{title}</h4>
            <p className="text-sm text-green-50/70 leading-relaxed">{desc}</p>
        </div>
    );
}

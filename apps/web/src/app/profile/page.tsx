'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ProfileSettingsPage() {
    const [notifications, setNotifications] = useState({
        weather: true,
        news: true,
        expert: true,
        market: false
    });

    const [language, setLanguage] = useState('en');
    const [role, setRole] = useState('farmer');

    return (
        <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
                <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/dashboard" className="p-2 hover:bg-gray-50 rounded-xl text-gray-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </Link>
                        <h1 className="text-xl font-bold text-gray-900">Profile & Settings</h1>
                    </div>
                    <button className="px-6 py-2 bg-[#2E7D32] text-white font-black uppercase tracking-widest text-[10px] rounded-full shadow-lg shadow-green-900/10 hover:bg-[#1B5E20] transition-all">Save Changes</button>
                </div>
            </header>

            <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 space-y-10">
                
                {/* User Profile Summary */}
                <section className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="relative group">
                        <div className="w-32 h-32 bg-gray-100 rounded-[40px] overflow-hidden border-4 border-white shadow-xl">
                            <img src="https://ui-avatars.com/api/?name=Farmer+John&background=2E7D32&color=fff" alt="User" />
                        </div>
                        <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#2E7D32] text-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-all">📸</button>
                    </div>
                    <div className="flex-1 space-y-2">
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">Farmer John</h2>
                        <p className="text-lg text-gray-500 font-medium italic">Empowering agriculture from Accra, Ghana</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                            <span className="px-4 py-1.5 bg-green-50 text-[#2E7D32] rounded-full text-[10px] font-black uppercase tracking-widest">Verified Farmer</span>
                            <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">CSA Expert</span>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Account Settings */}
                    <section className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100 space-y-10">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 border-b border-gray-50 pb-6">Account Details</h3>
                        
                        <div className="space-y-8">
                            <SettingField label="Full Name" value="Farmer John" icon="👤" />
                            <SettingField label="Email Address" value="john@csa-nexus.com" icon="📧" />
                            <SettingField label="Location" value="Accra, Greater Accra Region" icon="📍" />
                        </div>
                    </section>

                    {/* Preferences */}
                    <section className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100 space-y-10">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 border-b border-gray-50 pb-6">App Preferences</h3>
                        
                        <div className="space-y-10">
                            {/* Language Selector */}
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block px-1">Interface Language</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button onClick={() => setLanguage('en')} className={`py-3 rounded-2xl text-xs font-bold transition-all border-2 ${language === 'en' ? 'bg-green-50 border-[#2E7D32] text-[#2E7D32]' : 'bg-gray-50 border-transparent text-gray-500'}`}>English</button>
                                    <button onClick={() => setLanguage('tw')} className={`py-3 rounded-2xl text-xs font-bold transition-all border-2 ${language === 'tw' ? 'bg-green-50 border-[#2E7D32] text-[#2E7D32]' : 'bg-gray-50 border-transparent text-gray-500'}`}>Twi</button>
                                </div>
                            </div>

                            {/* Role Selector */}
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block px-1">Active Role</label>
                                <select 
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl text-sm font-bold text-gray-900 focus:ring-4 focus:ring-[#2E7D32]/5 outline-none transition-all"
                                >
                                    <option value="farmer">Farmer</option>
                                    <option value="expert">Extension Officer</option>
                                    <option value="buyer">Buyer / Agribusiness</option>
                                    <option value="ngo">NGO / Government</option>
                                </select>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Notifications */}
                <section className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 border-b border-gray-50 pb-6 mb-10">Notification Settings</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        <ToggleItem 
                            label="Weather Alerts" 
                            desc="Real-time updates on drought and rain risks." 
                            enabled={notifications.weather} 
                            toggle={() => setNotifications(prev => ({...prev, weather: !prev.weather}))} 
                        />
                        <ToggleItem 
                            label="Expert Responses" 
                            desc="Instant notifications when experts answer you." 
                            enabled={notifications.expert} 
                            toggle={() => setNotifications(prev => ({...prev, expert: !prev.expert}))} 
                        />
                        <ToggleItem 
                            label="Daily CSA Tips" 
                            desc="Climate-smart farming advice every morning." 
                            enabled={notifications.news} 
                            toggle={() => setNotifications(prev => ({...prev, news: !prev.news}))} 
                        />
                        <ToggleItem 
                            label="Market Updates" 
                            desc="Alerts when regional crop prices change." 
                            enabled={notifications.market} 
                            toggle={() => setNotifications(prev => ({...prev, market: !prev.market}))} 
                        />
                    </div>
                </section>

                {/* Danger Zone */}
                <section className="pt-10 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-gray-100">
                    <div className="space-y-1">
                        <h4 className="text-sm font-bold text-gray-900">Logout of all devices</h4>
                        <p className="text-xs text-gray-400 font-medium leading-relaxed italic">You will be required to login again on this and other devices.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-8 py-3 border-2 border-gray-100 text-gray-400 font-black uppercase tracking-widest text-[10px] rounded-full hover:border-red-200 hover:text-red-500 transition-all">Delete Account</button>
                        <Link href="/login" className="px-8 py-3 bg-gray-900 text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-black transition-all">Logout</Link>
                    </div>
                </section>
            </main>
        </div>
    );
}

function SettingField({ label, value, icon }: { label: string, value: string, icon: string }) {
    return (
        <div className="flex items-start gap-5 group">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-xl group-hover:bg-green-50 group-hover:scale-110 transition-all">
                {icon}
            </div>
            <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block mb-1">{label}</label>
                <p className="text-sm font-bold text-gray-900">{value}</p>
            </div>
        </div>
    );
}

function ToggleItem({ label, desc, enabled, toggle }: { label: string, desc: string, enabled: boolean, toggle: () => void }) {
    return (
        <div className="flex items-center justify-between gap-6">
            <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900">{label}</h4>
                <p className="text-xs text-gray-400 font-medium leading-tight">{desc}</p>
            </div>
            <button 
                onClick={toggle}
                className={`relative w-14 h-7 rounded-full transition-all duration-500 p-1 ${enabled ? 'bg-[#2E7D32]' : 'bg-gray-200'}`}
            >
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-all duration-500 ${enabled ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
        </div>
    );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-[#F8F9FA] flex font-sans">
            {/* Desktop Sidebar */}
            <aside className={`hidden lg:flex flex-col bg-[#0F4C3A] text-white transition-all duration-300 ${isSidebarOpen ? 'w-72' : 'w-24'}`}>
                <div className="p-8 flex items-center gap-3">
                    <div className="min-w-[40px] h-10 bg-white rounded-xl flex items-center justify-center">
                        <span className="text-xl">🌱</span>
                    </div>
                    {isSidebarOpen && <span className="text-2xl font-black tracking-tighter">CSA ONE</span>}
                </div>

                <nav className="flex-1 px-4 mt-8 space-y-2">
                    <NavItem icon="📊" label="Overview" active isSidebarOpen={isSidebarOpen} />
                    <NavItem icon="🌦️" label="Weather" isSidebarOpen={isSidebarOpen} />
                    <NavItem icon="📰" label="News" isSidebarOpen={isSidebarOpen} />
                    <NavItem icon="💡" label="Knowledge Hub" isSidebarOpen={isSidebarOpen} />
                    <NavItem icon="🔍" label="Global Search" isSidebarOpen={isSidebarOpen} />
                    <NavItem icon="👨‍🌾" label="Ask an Expert" isSidebarOpen={isSidebarOpen} />
                    <NavItem icon="🔬" label="Disease Detection" isSidebarOpen={isSidebarOpen} />
                    <NavItem icon="🚨" label="Report Mining" isSidebarOpen={isSidebarOpen} />
                </nav>

                <div className="p-6 mt-auto border-t border-white/10">
                    <NavItem icon="⚙️" label="Settings" isSidebarOpen={isSidebarOpen} />
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-20">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="hidden lg:flex p-2 hover:bg-gray-50 rounded-lg text-gray-400 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <h2 className="text-xl font-bold text-gray-900">Dashboard Overview</h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full text-green-700 text-sm font-bold">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            System Online
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                <img src="https://ui-avatars.com/api/?name=Farmer+John&background=2E7D32&color=fff" alt="Profile" />
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-sm font-bold text-gray-900 leading-none">Farmer John</p>
                                <p className="text-xs font-medium text-gray-500 mt-1">Accra, Ghana</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Grid */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    <div className="max-w-7xl mx-auto space-y-8">
                        
                        {/* Top Section: Weather & Alerts */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Weather Overview */}
                            <div className="lg:col-span-2 bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                    <span className="text-9xl">☀️</span>
                                </div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Local Weather</p>
                                            <h3 className="text-4xl font-black text-gray-900 tracking-tighter">Mostly Sunny</h3>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-5xl font-black text-[#2E7D32] tracking-tighter">28°C</p>
                                            <p className="text-sm font-bold text-gray-500 mt-1">H: 31° L: 24°</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-50">
                                        <WeatherStat icon="💧" label="Humidity" value="64%" />
                                        <WeatherStat icon="💨" label="Wind" value="12km/h" />
                                        <WeatherStat icon="☀️" label="UV Index" value="High (7)" />
                                        <WeatherStat icon="🌧️" label="Precip" value="10%" />
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-[#2E7D32] rounded-[32px] p-8 text-white shadow-lg shadow-green-900/10">
                                <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <ActionButton icon="🔬" label="Scan Crop" />
                                    <ActionButton icon="🚨" label="Report Mining" />
                                    <ActionButton icon="👨‍🌾" label="Ask Expert" />
                                    <ActionButton icon="📊" label="View Reports" />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section: Alerts & Recommendations */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Alerts & Announcements */}
                            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold text-gray-900">Alerts & News</h3>
                                    <button className="text-sm font-bold text-[#2E7D32] hover:underline">View All</button>
                                </div>
                                <div className="space-y-4 flex-1">
                                    <AlertItem 
                                        type="warning" 
                                        title="Drought Warning" 
                                        desc="Moderate drought risk predicted for next week."
                                        time="2h ago"
                                    />
                                    <AlertItem 
                                        type="info" 
                                        title="Market Price Update" 
                                        desc="Maize prices up by 5% in regional markets."
                                        time="5h ago"
                                    />
                                    <AlertItem 
                                        type="success" 
                                        title="New CSA Tip" 
                                        desc="Learn about multi-cropping for better soil health."
                                        time="1d ago"
                                    />
                                </div>
                            </div>

                            {/* CSA Recommendations */}
                            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold text-gray-900">CSA Recommendations</h3>
                                    <button className="text-sm font-bold text-[#2E7D32] hover:underline">Customize</button>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-5 bg-green-50 rounded-2xl border border-green-100 flex items-start gap-4 group cursor-pointer hover:bg-green-100/50 transition-colors">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">🌿</div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-tight">Optimal Planting Time</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">Based on current soil moisture, next Tuesday is ideal for legume planting.</p>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-4 group cursor-pointer hover:bg-blue-100/50 transition-colors">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">💧</div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-tight">Irrigation Strategy</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">Reduce water output by 15% due to predicted light showers tomorrow evening.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation (Bottom) */}
                <div className="lg:hidden h-20 bg-white border-t border-gray-100 flex items-center justify-around px-4 sticky bottom-0 z-20">
                    <MobileNavItem icon="📊" active />
                    <MobileNavItem icon="🌦️" />
                    <MobileNavItem icon="🔬" />
                    <MobileNavItem icon="💡" />
                    <MobileNavItem icon="⚙️" />
                </div>
            </main>
        </div>
    );
}

function NavItem({ icon, label, active = false, isSidebarOpen }: { icon: string, label: string, active?: boolean, isSidebarOpen: boolean }) {
    return (
        <div className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl cursor-pointer transition-all ${active ? 'bg-white/10 text-white font-bold' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
            <span className="text-xl min-w-[24px] flex justify-center">{icon}</span>
            {isSidebarOpen && <span className="text-sm tracking-wide">{label}</span>}
        </div>
    );
}

function MobileNavItem({ icon, active = false }: { icon: string, active?: boolean }) {
    return (
        <div className={`p-3 rounded-2xl transition-all ${active ? 'bg-green-50 text-[#2E7D32]' : 'text-gray-400 hover:bg-gray-50'}`}>
            <span className="text-2xl">{icon}</span>
        </div>
    );
}

function WeatherStat({ icon, label, value }: { icon: string, label: string, value: string }) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</span>
            <div className="flex items-center gap-2">
                <span className="text-lg">{icon}</span>
                <span className="text-lg font-black text-gray-900">{value}</span>
            </div>
        </div>
    );
}

function ActionButton({ icon, label }: { icon: string, label: string }) {
    return (
        <button className="flex flex-col items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all aspect-square">
            <span className="text-2xl">{icon}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-center">{label}</span>
        </button>
    );
}

function AlertItem({ type, title, desc, time }: { type: 'warning' | 'info' | 'success', title: string, desc: string, time: string }) {
    const colors = {
        warning: 'bg-orange-50 text-orange-700 border-orange-100',
        info: 'bg-blue-50 text-blue-700 border-blue-100',
        success: 'bg-green-50 text-green-700 border-green-100'
    };
    const icon = {
        warning: '⚠️',
        info: 'ℹ️',
        success: '✅'
    };

    return (
        <div className={`p-4 rounded-2xl border ${colors[type]} flex items-start gap-4`}>
            <span className="text-xl">{icon[type]}</span>
            <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-bold uppercase tracking-tight">{title}</h4>
                    <span className="text-[10px] opacity-60 font-bold">{time}</span>
                </div>
                <p className="text-xs font-medium opacity-80">{desc}</p>
            </div>
        </div>
    );
}

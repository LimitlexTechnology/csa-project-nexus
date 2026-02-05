'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '../../components/Logo';
import AuthGuard from '../../components/AuthGuard';
import { useI18n } from '../../lib/i18n';
import { 
    LayoutDashboard, 
    CloudSun, 
    Newspaper, 
    Lightbulb, 
    Search, 
    UserCircle, 
    Microscope, 
    AlertTriangle, 
    Settings,
    Droplets,
    Wind,
    Sun,
    TrendingUp,
    Info,
    CheckCircle2,
    Sprout,
    Menu,
    LogOut
} from 'lucide-react';

export default function DashboardPage() {
    const { t } = useI18n();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <AuthGuard>
        <div className="min-h-screen bg-[#F8F9FA] flex font-sans">
            {/* Desktop Sidebar */}
            <aside className={`hidden lg:flex flex-col bg-[#0F4C3A] text-white transition-all duration-300 ${isSidebarOpen ? 'w-72' : 'w-24'}`}>
                <div className="p-8">
                    <Logo iconOnly={!isSidebarOpen} className={isSidebarOpen ? "" : "justify-center"} />
                </div>

                <nav className="flex-1 px-4 mt-8 space-y-2">
                    <Link href="/dashboard"><NavItem icon={<LayoutDashboard size={22} />} label="Overview" active isSidebarOpen={isSidebarOpen} /></Link>
                    <Link href="/weather"><NavItem icon={<CloudSun size={22} />} label="Weather" isSidebarOpen={isSidebarOpen} /></Link>
                    <Link href="/news"><NavItem icon={<Newspaper size={22} />} label="News" isSidebarOpen={isSidebarOpen} /></Link>
                    <Link href="/knowledge-hub"><NavItem icon={<Lightbulb size={22} />} label="Knowledge Hub" isSidebarOpen={isSidebarOpen} /></Link>
                    <Link href="/search"><NavItem icon={<Search size={22} />} label="Global Search" isSidebarOpen={isSidebarOpen} /></Link>
                    <Link href="/ask-expert"><NavItem icon={<UserCircle size={22} />} label="Ask an Expert" isSidebarOpen={isSidebarOpen} /></Link>
                    <Link href="/disease-detection"><NavItem icon={<Microscope size={22} />} label="Disease Detection" isSidebarOpen={isSidebarOpen} /></Link>
                    <Link href="/report-mining"><NavItem icon={<AlertTriangle size={22} />} label="Report Mining" isSidebarOpen={isSidebarOpen} /></Link>
                </nav>

                <div className="p-6 mt-auto border-t border-white/10">
                    <Link href="/profile"><NavItem icon={<Settings size={22} />} label="Settings" isSidebarOpen={isSidebarOpen} /></Link>
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
                            <Menu size={24} />
                        </button>
                        <h2 className="text-xl font-bold text-gray-900">{t('dashboard.title')}</h2>
                    </div>

                    <div className="flex items-center gap-3 md:gap-6">
                        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full text-green-700 text-sm font-bold">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            System Online
                        </div>
                        <div className="flex items-center gap-2 md:gap-3">
                            <Link href="/profile" className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-sm block">
                                <img src="https://ui-avatars.com/api/?name=Farmer+John&background=2E7D32&color=fff" alt="Profile" />
                            </Link>
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
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                                    <CloudSun size={160} className="text-[#2E7D32]" />
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
                                        <WeatherStat icon={<Droplets size={20} className="text-blue-400" />} label="Humidity" value="64%" />
                                        <WeatherStat icon={<Wind size={20} className="text-gray-400" />} label="Wind" value="12km/h" />
                                        <WeatherStat icon={<Sun size={20} className="text-orange-400" />} label="UV Index" value="High (7)" />
                                        <WeatherStat icon={<CloudSun size={20} className="text-blue-300" />} label="Precip" value="10%" />
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-[#2E7D32] rounded-[32px] p-8 text-white shadow-lg shadow-green-900/10">
                                <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <Link href="/disease-detection"><ActionButton icon={<Microscope size={24} />} label="Scan Crop" /></Link>
                                    <Link href="/report-mining"><ActionButton icon={<AlertTriangle size={24} />} label="Report Mining" /></Link>
                                    <Link href="/ask-expert"><ActionButton icon={<UserCircle size={24} />} label="Ask Expert" /></Link>
                                    <Link href="/dashboard"><ActionButton icon={<TrendingUp size={24} />} label="View Reports" /></Link>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section: Alerts & Recommendations */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Alerts & Announcements */}
                            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold text-gray-900">Alerts & News</h3>
                                    <Link href="/news" className="text-sm font-bold text-[#2E7D32] hover:underline">View All</Link>
                                </div>
                                <div className="space-y-4 flex-1">
                                    <AlertItem 
                                        type="warning" 
                                        title="Drought Warning" 
                                        desc="Moderate drought risk predicted for next week."
                                        time="2h ago"
                                        icon={<AlertTriangle size={18} />}
                                    />
                                    <AlertItem 
                                        type="info" 
                                        title="Market Price Update" 
                                        desc="Maize prices up by 5% in regional markets."
                                        time="5h ago"
                                        icon={<Info size={18} />}
                                    />
                                    <AlertItem 
                                        type="success" 
                                        title="New CSA Tip" 
                                        desc="Learn about multi-cropping for better soil health."
                                        time="1d ago"
                                        icon={<CheckCircle2 size={18} />}
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
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#2E7D32] shadow-sm">
                                            <Sprout size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-tight">Optimal Planting Time</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">Based on current soil moisture, next Tuesday is ideal for legume planting.</p>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-4 group cursor-pointer hover:bg-blue-100/50 transition-colors">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-500 shadow-sm">
                                            <Droplets size={24} />
                                        </div>
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
                    <Link href="/dashboard"><MobileNavItem icon={<LayoutDashboard size={24} />} active /></Link>
                    <Link href="/weather"><MobileNavItem icon={<CloudSun size={24} />} /></Link>
                    <Link href="/disease-detection"><MobileNavItem icon={<Microscope size={24} />} /></Link>
                    <Link href="/knowledge-hub"><MobileNavItem icon={<Lightbulb size={24} />} /></Link>
                    <Link href="/profile"><MobileNavItem icon={<Settings size={24} />} /></Link>
                </div>
            </main>
        </div>
        </AuthGuard>
    );
}

function NavItem({ icon, label, active = false, isSidebarOpen }: { icon: React.ReactNode, label: string, active?: boolean, isSidebarOpen: boolean }) {
    return (
        <div className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl cursor-pointer transition-all ${active ? 'bg-white/10 text-white font-bold' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
            <div className="min-w-[24px] flex justify-center">{icon}</div>
            {isSidebarOpen && <span className="text-sm tracking-wide">{label}</span>}
        </div>
    );
}

function MobileNavItem({ icon, active = false }: { icon: React.ReactNode, active?: boolean }) {
    return (
        <div className={`p-3 rounded-2xl transition-all ${active ? 'bg-green-50 text-[#2E7D32]' : 'text-gray-400 hover:bg-gray-50'}`}>
            {icon}
        </div>
    );
}

function WeatherStat({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</span>
            <div className="flex items-center gap-2">
                {icon}
                <span className="text-lg font-black text-gray-900">{value}</span>
            </div>
        </div>
    );
}

function ActionButton({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all aspect-square w-full cursor-pointer">
            {icon}
            <span className="text-[10px] font-bold uppercase tracking-widest text-center">{label}</span>
        </div>
    );
}

function AlertItem({ type, title, desc, time, icon }: { type: 'warning' | 'info' | 'success', title: string, desc: string, time: string, icon: React.ReactNode }) {
    const colors = {
        warning: 'bg-orange-50 text-orange-700 border-orange-100',
        info: 'bg-blue-50 text-blue-700 border-blue-100',
        success: 'bg-green-50 text-green-700 border-green-100'
    };

    return (
        <div className={`p-4 rounded-2xl border ${colors[type]} flex items-start gap-4`}>
            <div className="mt-1">{icon}</div>
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

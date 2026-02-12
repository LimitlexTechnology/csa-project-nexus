'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { useAuth } from '../lib/AuthContext';
import { Globe, User, LogOut, ChevronDown } from 'lucide-react';

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'tw', name: 'Twi', flag: '🇬🇭' },
    { code: 'ga', name: 'Gã', flag: '🇬🇭' },
    { code: 'ee', name: 'Eʋegbe', flag: '🇬🇭' },
];

export default function Navigation() {
    const { user, profile, loading, signOutUser } = useAuth();
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const userDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const saved = localStorage.getItem('preferredLanguage');
        if (saved) {
            setCurrentLanguage(saved);
        }
    }, []);

    // Close user dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
                setIsUserDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (code: string) => {
        setCurrentLanguage(code);
        localStorage.setItem('preferredLanguage', code);
        setIsLangDropdownOpen(false);
    };

    const currentLang = languages.find(l => l.code === currentLanguage)!;

    const isLoggedIn = !loading && !!user;
    const displayName = profile?.fullName || user?.email?.split('@')[0] || 'User';
    const avatarUrl = profile?.photoURL
        || (isLoggedIn ? `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=2E7D32&color=fff&size=80` : '');

    const getDashboardPath = () => {
        const role = profile?.role || localStorage.getItem('userRole') || 'farmer';
        const dashboardMap: { [key: string]: string } = {
            'farmer': '/farmer-dashboard',
            'expert': '/expert-dashboard',
            'buyer': '/buyer-dashboard',
            'ngo': '/ngo-dashboard',
            'explorer': '/explorer-dashboard'
        };
        return dashboardMap[role] || '/dashboard';
    };

    return (
        <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Logo />

                    {/* Navigation Links */}
                    <div className="flex items-center gap-10">
                        <Link
                            href="/about"
                            prefetch={false}
                            className="text-gray-900 font-bold hover:text-[#2E7D32] transition-all"
                        >
                            About
                        </Link>
                        <Link
                            href="#features"
                            prefetch={false}
                            className="text-gray-500 font-bold hover:text-[#2E7D32] transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="#pricing"
                            prefetch={false}
                            className="text-gray-500 font-bold hover:text-[#2E7D32] transition-colors"
                        >
                            Pricing
                        </Link>

                        <div className="hidden lg:flex items-center gap-3 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                            <div className="flex items-center gap-1.5">
                                <Globe className="text-[#81C784] w-4 h-4" />
                                <div className="flex items-center gap-2">
                                    <span>System Status: <span className="text-[#81C784]">Online</span></span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#81C784] animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-all border border-gray-100 shadow-sm"
                            >
                                <span className="text-lg">{currentLang.flag}</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{currentLang.code}</span>
                                <svg className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isLangDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => handleLanguageChange(lang.code)}
                                            className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors ${currentLanguage === lang.code ? 'bg-green-50 text-green-700' : 'text-gray-700'}`}
                                        >
                                            <span className="text-xl">{lang.flag}</span>
                                            <span className="font-medium">{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Auth-aware section: Login button OR User dropdown */}
                        {isLoggedIn ? (
                            <div className="relative" ref={userDropdownRef}>
                                <button
                                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                                    className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-all border border-gray-100 shadow-sm"
                                >
                                    <img
                                        src={avatarUrl}
                                        alt={displayName}
                                        className="w-8 h-8 rounded-lg object-cover"
                                    />
                                    <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isUserDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden">
                                        <div className="px-4 py-2 border-b border-gray-50">
                                            <p className="text-sm font-bold text-gray-900 truncate">{displayName}</p>
                                            <p className="text-xs text-gray-400 truncate">{user?.email}</p>
                                        </div>
                                        <Link
                                            href={getDashboardPath()}
                                            onClick={() => setIsUserDropdownOpen(false)}
                                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors text-gray-700"
                                        >
                                            <span className="text-sm font-medium">Dashboard</span>
                                        </Link>
                                        <Link
                                            href="/profile"
                                            onClick={() => setIsUserDropdownOpen(false)}
                                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors text-gray-700"
                                        >
                                            <User size={16} className="text-gray-400" />
                                            <span className="text-sm font-medium">My Profile</span>
                                        </Link>
                                        <div className="border-t border-gray-50 mt-1 pt-1">
                                            <button
                                                onClick={() => {
                                                    setIsUserDropdownOpen(false);
                                                    signOutUser();
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 transition-colors text-red-600"
                                            >
                                                <LogOut size={16} />
                                                <span className="text-sm font-bold">Logout</span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link href="/login" prefetch={false} className="px-8 py-2.5 bg-[#0F4C3A] text-white rounded-full hover:bg-[#1B5E20] font-bold transition-all shadow-lg shadow-green-900/10">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

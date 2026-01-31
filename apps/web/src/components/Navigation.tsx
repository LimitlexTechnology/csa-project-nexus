'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Globe, ShieldCheck } from 'lucide-react';

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'tw', name: 'Twi', flag: '🇬🇭' },
    { code: 'ga', name: 'Gã', flag: '🇬🇭' },
    { code: 'ee', name: 'Eʋegbe', flag: '🇬🇭' },
];

export default function Navigation() {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('preferredLanguage');
        if (saved) {
            setCurrentLanguage(saved);
        }
    }, []);

    const handleLanguageChange = (code: string) => {
        setCurrentLanguage(code);
        localStorage.setItem('preferredLanguage', code);
        setIsDropdownOpen(false);
    };

    const currentLang = languages.find(l => l.code === currentLanguage)!;

    return (
        <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <Logo />
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-8">
                        <Link
                            href="/about"
                            className="text-gray-900 font-bold pb-1 border-b-2 border-[#004D40] transition-all"
                        >
                            About
                        </Link>
                        <Link
                            href="#features"
                            className="text-gray-500 font-medium hover:text-gray-900 transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-gray-500 font-medium hover:text-gray-900 transition-colors"
                        >
                            Pricing
                        </Link>

                        <div className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                            <div className="flex items-center gap-1.5">
                                <Globe className="text-blue-400 w-5 h-5" />
                                <div className="flex items-center gap-2">
                                    <span>System Status: <span className="text-blue-500 font-semibold">Online</span></span>
                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                            >
                                <span className="text-xl">{currentLang.flag}</span>
                                <svg className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isDropdownOpen && (
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

                        <Link href="/login" className="px-6 py-2 border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 font-semibold transition-all shadow-sm">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

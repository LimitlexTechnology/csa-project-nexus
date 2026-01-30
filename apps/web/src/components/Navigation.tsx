'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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
        // Get saved language preference
        const saved = localStorage.getItem('preferredLanguage');
        if (saved) {
            setCurrentLanguage(saved);
        }
    }, []);

    const handleLanguageChange = (code: string) => {
        setCurrentLanguage(code);
        localStorage.setItem('preferredLanguage', code);
        setIsDropdownOpen(false);
        // Optionally reload the page to apply translations
        // window.location.reload();
    };

    const currentLang = languages.find(l => l.code === currentLanguage) ?? languages[0];

    return (
        <nav className="bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        {/* Logo Icon - Cloud, Leaf, Water */}
                        <div className="relative w-12 h-12">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex items-center gap-0.5">
                                    <span className="text-blue-400 text-lg" style={{ marginTop: '-4px' }}>☁️</span>
                                    <span className="text-green-500 text-xl">🌱</span>
                                </div>
                            </div>
                        </div>
                        <span className="text-2xl font-bold text-gray-900 tracking-tight">CSA ONE</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-8">
                        <Link
                            href="#about"
                            className="text-gray-900 font-medium pb-0.5 border-b-2 border-gray-900 hover:text-gray-700 transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="#features"
                            className="text-gray-700 font-medium hover:text-gray-900 transition-colors"
                        >
                            Features
                        </Link>

                        {/* Language Switcher Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                            >
                                <span className="text-xl">{currentLang.flag}</span>
                                <span className="font-medium text-gray-700">{currentLang.name}</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => handleLanguageChange(lang.code)}
                                            className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors ${currentLanguage === lang.code ? 'bg-green-50' : ''
                                                }`}
                                        >
                                            <span className="text-xl">{lang.flag}</span>
                                            <span className="font-medium text-gray-700">{lang.name}</span>
                                            {currentLanguage === lang.code && (
                                                <svg className="w-4 h-4 text-green-600 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 font-medium transition-colors">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Language {
    code: string;
    name: string;
    nativeName: string;
    flag: string;
}

const languages: Language[] = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'tw', name: 'Twi', nativeName: 'Twi', flag: '🇬🇭' },
    { code: 'ga', name: 'Ga', nativeName: 'Gã', flag: '🇬🇭' },
    { code: 'ee', name: 'Ewe', nativeName: 'Eʋegbe', flag: '🇬🇭' },
];

export default function LanguageSelection() {
    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState<string>('');

    const handleLanguageSelect = (code: string) => {
        setSelectedLanguage(code);
        localStorage.setItem('preferredLanguage', code);
        setTimeout(() => {
            router.push('/onboarding');
        }, 300);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50 flex items-center justify-center p-6">
            <div className="max-w-2xl w-full">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="flex items-center gap-1">
                            <span className="text-4xl">☁️</span>
                            <span className="text-5xl">🌱</span>
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">CSA ONE</h1>
                    <p className="text-lg text-gray-600">Choose Your Language</p>
                    <p className="text-sm text-gray-500 mt-2">Choisissez votre langue • Paw wo kasa</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageSelect(lang.code)}
                            className={`group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 ${selectedLanguage === lang.code ? 'border-green-500 bg-green-50' : 'border-transparent hover:border-green-300'}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-5xl">{lang.flag}</div>
                                <div className="flex-1 text-left">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">{lang.name}</h3>
                                    <p className="text-sm text-gray-600">{lang.nativeName}</p>
                                </div>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedLanguage === lang.code ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}>
                                    {selectedLanguage === lang.code && (
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

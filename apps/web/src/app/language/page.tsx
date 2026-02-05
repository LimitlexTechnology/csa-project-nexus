'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Logo } from '../../components/Logo';
import { Languages, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../../lib/i18n';

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
    const { t, setLang } = useI18n();
    const [selectedLanguage, setSelectedLanguage] = useState<string>('');

    const handleLanguageSelect = (code: string) => {
        setSelectedLanguage(code);
        localStorage.setItem('preferredLanguage', code);
        setLang(code as any);
        setTimeout(() => {
            router.push('/welcome');
        }, 300);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50 flex items-center justify-center p-6 font-sans">
            <div className="max-w-2xl w-full">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-8">
                        <Logo />
                    </div>
                    <h1 className="text-xl font-black text-gray-900 uppercase tracking-[0.2em] mb-4">{t('language.choose')}</h1>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">{t('language.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageSelect(lang.code)}
                            className={`group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border-2 ${selectedLanguage === lang.code ? 'border-[#2E7D32] bg-green-50/30' : 'border-transparent hover:border-green-200'}`}
                        >
                            <div className="flex items-center gap-6">
                                <div className="text-5xl group-hover:scale-110 transition-transform duration-500">{lang.flag}</div>
                                <div className="flex-1 text-left">
                                    <h3 className="text-xl font-black text-gray-900 group-hover:text-[#2E7D32] transition-colors">{lang.name}</h3>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">{lang.nativeName}</p>
                                </div>
                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${selectedLanguage === lang.code ? 'border-[#2E7D32] bg-[#2E7D32] scale-110' : 'border-gray-200 group-hover:border-green-300'}`}>
                                    {selectedLanguage === lang.code && (
                                        <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={3} />
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

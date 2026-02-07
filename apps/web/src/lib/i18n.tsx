'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../i18n/translations/en.json';

type Translations = typeof en;

interface I18nContextType {
    t: (path: string) => string;
    lang: string;
    setLang: (lang: string) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState('en');
    const [translations, setTranslations] = useState<any>(en);

    useEffect(() => {
        const savedLang = localStorage.getItem('preferredLanguage') || 'en';
        setLang(savedLang);
    }, []);

    const setLang = async (newLang: string) => {
        setLangState(newLang);
        localStorage.setItem('preferredLanguage', newLang);
        try {
            const trans = await import(`../i18n/translations/${newLang}.json`);
            setTranslations(trans.default || trans);
        } catch (e) {
            console.warn(`Could not load translations for ${newLang}, falling back to English`);
            setTranslations(en);
        }
    };

    const t = (path: string) => {
        const keys = path.split('.');
        let result = translations;
        for (const key of keys) {
            result = result?.[key];
        }
        return result || path;
    };

    return (
        <I18nContext.Provider value={{ t, lang, setLang }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}

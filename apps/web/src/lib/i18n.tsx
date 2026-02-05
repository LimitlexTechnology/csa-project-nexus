 'use client';
 import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
 import en from '../i18n/translations/en.json';
 import fr from '../i18n/translations/fr.json';
 import tw from '../i18n/translations/tw.json';
 import ga from '../i18n/translations/ga.json';
 import ee from '../i18n/translations/ee.json';
 
 type Lang = 'en' | 'fr' | 'tw' | 'ga' | 'ee';
 type Dict = Record<string, string>;
 const dictionaries: Record<Lang, Dict> = { en, fr, tw, ga, ee };
 
 type I18nContextValue = {
   lang: Lang;
   setLang: (l: Lang) => void;
   t: (key: string, fallback?: string) => string;
 };
 
 const I18nContext = createContext<I18nContextValue | undefined>(undefined);
 
 export function I18nProvider({ children }: { children: React.ReactNode }) {
   const [lang, setLangState] = useState<Lang>('en');
 
   useEffect(() => {
     const stored = typeof window !== 'undefined' ? (localStorage.getItem('preferredLanguage') as Lang | null) : null;
     if (stored && dictionaries[stored]) setLangState(stored);
   }, []);
 
   const setLang = (l: Lang) => {
     setLangState(l);
     if (typeof window !== 'undefined') localStorage.setItem('preferredLanguage', l);
   };
 
   const t = useMemo(() => {
     return (key: string, fallback?: string) => {
       const dict = dictionaries[lang] || dictionaries.en;
       return dict[key] ?? fallback ?? key;
     };
   }, [lang]);
 
   const value: I18nContextValue = { lang, setLang, t };
   return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
 }
 
 export function useI18n() {
   const ctx = useContext(I18nContext);
   if (!ctx) throw new Error('useI18n must be used within I18nProvider');
   return ctx;
 }

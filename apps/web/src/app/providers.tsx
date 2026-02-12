'use client';
import React from 'react';
import { I18nProvider } from '../lib/i18n';
import { AuthProvider } from '../lib/AuthContext';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <I18nProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </I18nProvider>
    );
}

'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LanguageSelection from './language/page';

export default function RootPage() {
    const router = useRouter();
    const [showLanguageSelection, setShowLanguageSelection] = useState(true);

    useEffect(() => {
        // Check if user has already selected a language
        const preferredLanguage = localStorage.getItem('preferredLanguage');
        if (preferredLanguage) {
            // User has already selected language, go to landing page
            setShowLanguageSelection(false);
            router.push('/landing');
        }
    }, [router]);

    if (showLanguageSelection) {
        return <LanguageSelection />;
    }

    return null; // Will redirect to /landing
}

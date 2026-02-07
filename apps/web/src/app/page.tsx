'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import LanguageSelection from './language/page';

export default function RootPage() {
    const router = useRouter();
    const [showLanguageSelection, setShowLanguageSelection] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const hasInitialized = useRef(false);

    useEffect(() => {
        if (hasInitialized.current) return;
        hasInitialized.current = true;

        const preferredLanguage = localStorage.getItem('preferredLanguage');
        const onboardingDone = localStorage.getItem('onboardingDone');

        if (!preferredLanguage) {
            setShowLanguageSelection(true);
        } else if (!onboardingDone) {
            router.replace('/welcome');
        } else {
            // Return to dashboard if already onboarded
            const userRole = localStorage.getItem('userRole') || 'farmer';
            const dashboardMap: { [key: string]: string } = {
                'farmer': '/farmer-dashboard',
                'expert': '/expert-dashboard',
                'buyer': '/buyer-dashboard',
                'ngo': '/ngo-dashboard',
                'explorer': '/explorer-dashboard'
            };
            router.replace(dashboardMap[userRole] || '/dashboard');
        }
        setIsLoaded(true);
    }, [router]);

    if (!isLoaded) return null;

    if (showLanguageSelection) {
        return <LanguageSelection />;
    }

    return <div className="min-h-screen bg-white flex items-center justify-center">Redirecting...</div>;
}

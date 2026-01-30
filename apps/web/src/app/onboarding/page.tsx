'use client';
import { OnboardingCarousel } from '../../components/OnboardingCarousel';
import Navigation from '../../components/Navigation';

export default function OnboardingPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navigation />
            <div className="flex-1 flex items-center justify-center p-6 bg-[#E9E9E9]">
                <OnboardingCarousel />
            </div>
        </div>
    );
}

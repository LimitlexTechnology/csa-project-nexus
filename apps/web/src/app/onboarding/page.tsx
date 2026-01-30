'use client';
import { OnboardingCarousel } from '../../components/OnboardingCarousel';
import Navigation from '../../components/Navigation';

export default function OnboardingPage() {
    return (
        <div className="min-h-screen bg-[#E9E9E9] flex flex-col">
            <Navigation />
            <div className="flex-1 flex flex-col items-center justify-start p-4 md:p-10">
                <OnboardingCarousel />
            </div>
        </div>
    );
}

'use client';
import React, { useState, useEffect } from 'react';
import { Slide1 } from './onboarding/Slide1';
import { useRouter } from 'next/navigation';

export const OnboardingCarousel: React.FC = () => {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 6;

    const nextSlide = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            localStorage.setItem('onboardingDone', 'true');
            router.push('/landing');
        }
    };

    const skipWelcome = () => {
        localStorage.setItem('onboardingDone', 'true');
        router.push('/landing');
    };

    return (
        <div className="bg-white rounded-[60px] shadow-[0_30px_100px_rgba(0,0,0,0.08)] p-12 max-w-6xl w-full relative overflow-hidden border border-gray-50 flex flex-col justify-between min-h-[85vh]">
            {/* Slide Content Container */}
            <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {currentSlide === 0 ? (
                    <Slide1 />
                ) : (
                    <div className="flex flex-col items-center justify-center h-full min-h-[500px] text-center">
                        <div className="w-32 h-32 bg-gray-100 rounded-full mb-8 flex items-center justify-center">
                            <span className="text-5xl">🚜</span>
                        </div>
                        <h2 className="text-4xl font-black text-gray-200 uppercase tracking-widest mb-4">Value Proposition {currentSlide + 1}</h2>
                        <p className="text-gray-400 font-medium">Coming soon: More details about CSA ONE features.</p>
                    </div>
                )}
            </div>

            {/* Navigation Footer */}
            <div className="mt-16 flex items-center justify-between z-10">
                <button
                    onClick={skipWelcome}
                    className="text-[#333333] font-black uppercase text-sm tracking-[0.25em] hover:opacity-50 transition-opacity pl-4"
                >
                    Skip
                </button>

                {/* Global Pagination Dots */}
                <div className="flex gap-3">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-500 ease-in-out ${i === currentSlide ? 'bg-[#004D40] w-6' : 'bg-[#E0E0E0]'}`}
                        ></div>
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="bg-[#5CB35D] hover:bg-[#4A9A4B] text-white font-black uppercase text-sm px-16 py-5 rounded-[22px] tracking-[0.2em] transition-all shadow-[0_10px_30px_rgba(92,179,93,0.3)] active:scale-95 whitespace-nowrap"
                >
                    {currentSlide === totalSlides - 1 ? 'Get Started' : 'Next'}
                </button>
            </div>

            {/* Decorative sparkle in background */}
            <div className="absolute -bottom-10 -right-10 text-gray-50/50 text-[200px] pointer-events-none select-none rotate-12">✨</div>
        </div>
    );
};

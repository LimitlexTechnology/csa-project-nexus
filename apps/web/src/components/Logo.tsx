import React from 'react';

export const Logo = ({ className = "", iconOnly = false }: { className?: string, iconOnly?: boolean }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="relative flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-14 md:h-14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Circle Container */}
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" className="text-gray-100" />
                    
                    {/* Left Leaf / Stylized 'A' */}
                    <path 
                        d="M35 35C25 45 25 65 45 80C35 75 25 60 35 35Z" 
                        fill="url(#logo-grad-1)" 
                    />
                    <path 
                        d="M20 55C20 70 35 85 50 85C35 85 20 75 20 55Z" 
                        fill="#1A237E" 
                        opacity="0.8"
                    />

                    {/* Middle Leaf */}
                    <path 
                        d="M50 15C50 15 35 40 35 65C35 75 42 85 50 85C58 85 65 75 65 65C65 40 50 15 50 15Z" 
                        fill="url(#logo-grad-2)" 
                    />

                    {/* Right Leaf / Stylized 'P' */}
                    <path 
                        d="M65 35C75 45 75 65 55 80C65 75 75 60 65 35Z" 
                        fill="url(#logo-grad-3)" 
                    />
                    
                    {/* Gradients */}
                    <defs>
                        <linearGradient id="logo-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1A237E" />
                            <stop offset="100%" stopColor="#0277BD" />
                        </linearGradient>
                        <linearGradient id="logo-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#0277BD" />
                            <stop offset="100%" stopColor="#2E7D32" />
                        </linearGradient>
                        <linearGradient id="logo-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4CAF50" />
                            <stop offset="100%" stopColor="#81C784" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {!iconOnly && (
                <div className="flex flex-col -space-y-1.5 ml-1">
                    <span className="text-2xl md:text-4xl font-black text-[#005A7E] tracking-tighter leading-none">
                        CSA
                    </span>
                    <span className="text-2xl md:text-4xl font-black text-[#005A7E] tracking-tighter leading-none">
                        HUB
                    </span>
                </div>
            )}
        </div>
    );
};

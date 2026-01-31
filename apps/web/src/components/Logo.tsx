import React from 'react';

export const Logo = ({ className = "", iconOnly = false }: { className?: string, iconOnly?: boolean }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="relative flex items-center justify-center -mt-1">
                <svg viewBox="0 0 110 110" className="w-12 h-12 md:w-16 md:h-16 overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="emblem-grad" x1="0%" y1="50%" x2="100%" y2="50%">
                            <stop offset="0%" stopColor="#2E4095" />
                            <stop offset="50%" stopColor="#007299" />
                            <stop offset="100%" stopColor="#4CAF50" />
                        </linearGradient>
                    </defs>

                    {/* The Circular Emblem with AOP Leaves */}
                    <g transform="translate(7, 5) scale(0.92)">
                        {/* Stylized A Leaf (Left) */}
                        <path 
                            d="M30 40C20 50 20 70 35 85C25 80 15 65 25 40L30 40Z" 
                            fill="url(#emblem-grad)" 
                        />
                        <path 
                            d="M25 40L35 75L45 40L42 40L35 60L28 40H25Z" 
                            fill="white" 
                        />

                        {/* Middle Leaf with O (O is the void) */}
                        <path 
                            d="M50 10C50 10 35 35 35 60C35 75 42 85 50 85C58 85 65 75 65 60C65 35 50 10 50 10Z" 
                            fill="url(#emblem-grad)" 
                        />
                        <path 
                            d="M50 35C45 35 42 45 42 60C42 75 45 80 50 80C55 80 58 75 58 60C58 45 55 35 50 35Z" 
                            fill="white" 
                        />
                        <rect x="49" y="10" width="2" height="75" fill="white" opacity="0.1" />

                        {/* Stylized P Leaf (Right) */}
                        <path 
                            d="M70 40C80 50 80 70 65 85C75 80 85 65 75 40L70 40Z" 
                            fill="url(#emblem-grad)" 
                        />
                        <path 
                            d="M68 40V80H72V65H80C85 65 85 40 80 40H68ZM72 45H80C82 45 82 60 80 60H72V45Z" 
                            fill="white" 
                        />

                        {/* Overlapping Green Leaf (Bottom Right) */}
                        <path 
                            d="M55 60C55 60 70 60 95 85C100 90 95 100 80 100C65 100 55 85 55 60Z" 
                            fill="#4CAF50" 
                        />
                        <path 
                            d="M55 60C75 75 95 85 95 85L85 95L55 60Z" 
                            fill="white" 
                            opacity="0.2"
                        />

                        {/* Small Blue Leaf (Bottom Left) */}
                        <path 
                            d="M5 80C5 80 15 80 35 95C35 95 25 105 15 105C5 105 5 95 5 80Z" 
                            fill="#2E4095" 
                            opacity="0.9"
                        />
                    </g>
                </svg>
            </div>
            {!iconOnly && (
                <div className="flex flex-col -space-y-1 ml-1">
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

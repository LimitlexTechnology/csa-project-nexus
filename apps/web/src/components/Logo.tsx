import React from 'react';

export const Logo = ({ className = "w-10 h-10", iconOnly = false }: { className?: string, iconOnly?: boolean }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="relative flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background Glow */}
                    <circle cx="50" cy="50" r="48" className="fill-green-50" />
                    
                    {/* Outer Hub Ring */}
                    <circle cx="50" cy="50" r="40" className="stroke-[#2E7D32]" strokeWidth="1.5" strokeDasharray="6 4" />
                    
                    {/* Artistic Leaf / Hub Hybrid */}
                    <path 
                        d="M50 15C50 15 25 35 25 60C25 75 35 85 50 85C65 85 75 75 75 60C75 35 50 15 50 15Z" 
                        className="fill-[#2E7D32]"
                    />
                    
                    {/* Connection Nodes */}
                    <path 
                        d="M50 30V70M35 55H65" 
                        className="stroke-white" 
                        strokeWidth="5" 
                        strokeLinecap="round" 
                    />
                    
                    {/* Small Nodes */}
                    <circle cx="50" cy="30" r="4" className="fill-white" />
                    <circle cx="50" cy="70" r="4" className="fill-white" />
                    <circle cx="35" cy="55" r="4" className="fill-white" />
                    <circle cx="65" cy="55" r="4" className="fill-white" />
                    
                    {/* Center Point */}
                    <circle cx="50" cy="55" r="2.5" className="fill-[#81C784]" />
                </svg>
            </div>
            {!iconOnly && (
                <span className="text-2xl font-black text-[#0F4C3A] tracking-tighter uppercase">
                    CSA <span className="text-[#2E7D32]">Hub</span>
                </span>
            )}
        </div>
    );
};

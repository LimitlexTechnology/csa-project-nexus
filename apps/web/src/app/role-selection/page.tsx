'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const roles = [
    {
        id: 'farmer',
        title: 'Farmer',
        icon: '👨‍🌾',
        description: 'Manage your farm with climate intelligence'
    },
    {
        id: 'expert',
        title: 'Extension Officer / Expert',
        icon: '📋',
        description: 'Provide expert advice to farmers'
    },
    {
        id: 'buyer',
        title: 'Buyer / Agribusiness',
        icon: '🛒',
        description: 'Connect with sustainable producers'
    },
    {
        id: 'ngo',
        title: 'NGO / Government',
        icon: '🏛️',
        description: 'Policy and support for climate agriculture'
    },
    {
        id: 'explorer',
        title: 'Explorer',
        icon: '🧭',
        description: 'Explore the CSA ONE ecosystem'
    }
];

export default function RoleSelection() {
    const router = useRouter();
    const [selectedRole, setSelectedRole] = useState('farmer');

    const handleContinue = () => {
        if (selectedRole) {
            localStorage.setItem('userRole', selectedRole);
            localStorage.setItem('onboardingDone', 'true');
            router.push('/landing');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-100 rounded-full blur-[120px] opacity-50"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-50"></div>

            <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] w-full max-w-4xl overflow-hidden animate-in fade-in zoom-in duration-700 border border-white/20">
                <div className="p-8 md:p-12 flex flex-col items-center">
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter mb-3">Select Your Role</h1>
                        <p className="text-gray-500 font-medium text-lg italic">“You can change this later”</p>
                    </div>

                    {/* Roles Grid - Responsive: 1 col on mobile, 2/3 on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
                        {roles.map((role) => (
                            <button
                                key={role.id}
                                onClick={() => setSelectedRole(role.id)}
                                className={`relative group flex flex-col items-center p-8 rounded-[32px] border-2 transition-all duration-500 min-h-[200px] justify-center text-center ${
                                    selectedRole === role.id 
                                    ? 'border-[#2E7D32] bg-white shadow-[0_20px_40px_rgba(46,125,50,0.12)] scale-[1.02]' 
                                    : 'border-gray-100 bg-white/50 hover:border-green-200 hover:bg-white'
                                }`}
                            >
                                <div className={`text-5xl mb-6 transition-all duration-500 ${
                                    selectedRole === role.id ? 'scale-110' : 'grayscale group-hover:grayscale-0'
                                }`}>
                                    {role.icon}
                                </div>
                                <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-2 leading-tight">
                                    {role.title}
                                </h3>
                                <p className="text-[11px] text-gray-400 font-medium px-2">
                                    {role.description}
                                </p>

                                {selectedRole === role.id && (
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-in zoom-in duration-300">
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Action Area */}
                    <div className="w-full max-w-md flex flex-col gap-4">
                        <button
                            onClick={handleContinue}
                            className="w-full py-5 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-black text-xl rounded-2xl uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(46,125,50,0.25)] transition-all hover:translate-y-[-2px] active:scale-95 active:translate-y-0"
                        >
                            Continue
                        </button>
                        <p className="text-center text-xs text-gray-400 font-bold uppercase tracking-widest">
                            Step 2 of 2
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

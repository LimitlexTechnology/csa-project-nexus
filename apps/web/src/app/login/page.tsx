'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle auth logic here
        router.push('/dashboard');
    };

    const handleGuestContinue = () => {
        router.push('/landing');
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white font-sans">
            {/* Left Side: Visual Content (Hidden on mobile) */}
            <div className="hidden md:flex md:w-1/2 bg-[#0F4C3A] relative overflow-hidden items-center justify-center p-12">
                <div className="absolute inset-0 bg-[url('/farm-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C3A]/80 to-transparent"></div>
                
                <div className="relative z-10 max-w-lg">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-3xl">🌱</span>
                        </div>
                        <span className="text-3xl font-black text-white tracking-tighter">CSA ONE</span>
                    </div>
                    
                    <h1 className="text-5xl font-black text-white leading-tight mb-6">
                        Empowering Farmers with <span className="text-[#81C784]">Climate Intelligence</span>.
                    </h1>
                    <p className="text-xl text-green-50/80 font-medium leading-relaxed">
                        Join the global network of climate-smart farmers and access real-time data to future-proof your harvest.
                    </p>
                    
                    <div className="mt-16 flex gap-8">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">50k+</span>
                            <span className="text-sm text-green-100/60 font-bold uppercase tracking-wider">Active Farmers</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">98%</span>
                            <span className="text-sm text-green-100/60 font-bold uppercase tracking-wider">Accuracy Rate</span>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#81C784]/10 rounded-full blur-3xl"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side: Auth Form */}
            <div className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-gray-50/30">
                <div className="max-w-md w-full mx-auto">
                    {/* Mobile Logo (Visible only on mobile) */}
                    <div className="flex items-center gap-2 mb-12 md:hidden">
                        <div className="w-10 h-10 bg-[#0F4C3A] rounded-xl flex items-center justify-center">
                            <span className="text-xl">🌱</span>
                        </div>
                        <span className="text-2xl font-black text-gray-900 tracking-tighter">CSA ONE</span>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-3xl font-black text-gray-900 mb-3">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p className="text-gray-500 font-medium">
                            {isLogin 
                                ? 'Enter your details to access your dashboard' 
                                : 'Start your journey towards climate-smart farming today'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2 px-1">
                                Email Address
                            </label>
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2E7D32]/10 focus:border-[#2E7D32] outline-none transition-all font-medium"
                                placeholder="name@farm.com"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-2 px-1">
                                <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">
                                    Password
                                </label>
                                {isLogin && (
                                    <Link href="#" className="text-xs font-bold text-[#2E7D32] hover:underline">
                                        Forgot?
                                    </Link>
                                )}
                            </div>
                            <input 
                                type="password" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2E7D32]/10 focus:border-[#2E7D32] outline-none transition-all font-medium"
                                placeholder="••••••••"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full py-5 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-black text-lg rounded-2xl uppercase tracking-[0.2em] shadow-lg shadow-green-900/10 transition-all active:scale-[0.98]"
                        >
                            {isLogin ? 'Login' : 'Create Account'}
                        </button>
                    </form>

                    <div className="mt-8 flex flex-col gap-4">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase font-bold tracking-widest">
                                <span className="px-4 bg-gray-50/30 text-gray-400">Or</span>
                            </div>
                        </div>

                        <button 
                            onClick={handleGuestContinue}
                            className="w-full py-4 border-2 border-gray-200 hover:border-gray-300 text-gray-600 font-bold rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            Continue as Guest
                        </button>

                        <p className="text-center text-sm font-medium text-gray-500 mt-4">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                            <button 
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-[#2E7D32] font-bold hover:underline"
                            >
                                {isLogin ? 'Create one now' : 'Login here'}
                            </button>
                        </p>
                    </div>
                </div>
                
                {/* Footer Links */}
                <div className="mt-auto pt-12 flex justify-center gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <Link href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
                </div>
            </div>
        </div>
    );
}

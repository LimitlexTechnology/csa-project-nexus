'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Logo } from '../../components/Logo';
import { UserCheck, Zap, ArrowRight, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { auth } from '../../lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useI18n } from '../../lib/i18n';
import { useSearchParams } from 'next/navigation';

export default function LoginPage() {
    return (
        <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <LoginForm />
        </React.Suspense>
    );
}

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { t } = useI18n();
    const [isLogin, setIsLogin] = useState(!searchParams.get('signup'));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Role-specific fields
    const [roleData, setRoleData] = useState({
        farmer: { location: '', crop: '' },
        expert: { specialization: '', org: '' },
        buyer: { company: '', hub: '' },
        ngo: { name: '', area: '' }
    });

    const userRole = typeof window !== 'undefined' ? localStorage.getItem('userRole') : 'farmer';

    useEffect(() => {
        // Check if user has selected a role
        const userRole = localStorage.getItem('userRole');
        if (!userRole) {
            // Redirect to role selection if no role is selected
            router.push('/role-selection');
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
                // Save role-specific data for signup
                if (userRole && roleData[userRole as keyof typeof roleData]) {
                    localStorage.setItem('userRoleData', JSON.stringify(roleData[userRole as keyof typeof roleData]));
                }
            }

            // Mark onboarding as done
            localStorage.setItem('onboardingDone', 'true');

            // Get user role and redirect to appropriate dashboard
            const curRole = localStorage.getItem('userRole');
            const dashboardMap: { [key: string]: string } = {
                'farmer': '/farmer-dashboard',
                'expert': '/expert-dashboard',
                'buyer': '/buyer-dashboard',
                'ngo': '/ngo-dashboard',
                'explorer': '/explorer-dashboard'
            };

            const targetPath = dashboardMap[curRole || 'farmer'] || '/dashboard';
            console.log('Redirecting to:', targetPath);
            router.push(targetPath);
        } catch (err: any) {
            console.error('Auth Error:', err);
            const code = err?.code || 'auth/error';
            const message =
                code === 'auth/invalid-email' ? 'Invalid email address' :
                    code === 'auth/user-not-found' ? 'No account found for this email' :
                        code === 'auth/wrong-password' ? 'Incorrect password' :
                            code === 'auth/email-already-in-use' ? 'Email already in use' :
                                code === 'auth/weak-password' ? 'Password should be at least 6 characters' :
                                    `Error: ${err.message || 'Something went wrong. Please try again.'}`;
            setError(message);
            setIsLoading(false);
        }
    };

    const handleGuestContinue = () => {
        router.push('/landing');
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white font-sans">
            {/* Left Side: Visual Content (Hidden on mobile) */}
            <div className="hidden md:flex md:w-1/2 bg-[#0F4C3A] relative overflow-hidden items-center justify-center p-12">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: `url('https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1600')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C3A]/80 to-transparent"></div>

                <div className="relative z-10 max-w-lg">
                    <div className="mb-12">
                        <Logo className="scale-125 origin-left" />
                    </div>

                    <h1 className="text-5xl font-black text-white leading-tight mb-6">
                        Empowering Farmers with <span className="text-[#81C784]">Climate Intelligence</span>.
                    </h1>
                    <p className="text-xl text-green-50/80 font-medium leading-relaxed">
                        Join the global network of climate-smart farmers and access real-time data to future-proof your harvest.
                    </p>

                    <div className="mt-16 flex gap-8">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-1">
                                <UserCheck className="text-[#81C784] w-6 h-6" />
                                <span className="text-3xl font-bold text-white">50k+</span>
                            </div>
                            <span className="text-sm text-green-100/60 font-bold uppercase tracking-wider">Active Farmers</span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-1">
                                <Zap className="text-[#81C784] w-6 h-6" />
                                <span className="text-3xl font-bold text-white">98%</span>
                            </div>
                            <span className="text-sm text-green-100/60 font-bold uppercase tracking-wider">Accuracy Rate</span>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#81C784]/10 rounded-full blur-3xl"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side: Form Content */}
            <div className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-gray-50/30">
                <div className="max-w-md w-full mx-auto">
                    {/* Mobile Logo (Visible only on mobile) */}
                    <div className="mb-12 md:hidden">
                        <Logo />
                    </div>

                    <div className="mb-10">
                        <h2 className="text-3xl font-black text-gray-900 mb-3">
                            {isLogin ? t('login.title.login') : t('login.title.signup')}
                        </h2>
                        <p className="text-gray-500 font-medium">
                            {isLogin
                                ? t('login.subtitle.login')
                                : t('login.subtitle.signup')}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 font-medium">
                                {error}
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2 px-1 flex items-center gap-2">
                                <Mail size={14} className="text-[#2E7D32]" />
                                {t('login.email')}
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
                                <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest flex items-center gap-2">
                                    <Lock size={14} className="text-[#2E7D32]" />
                                    {t('login.password')}
                                </label>
                                {isLogin && (
                                    <Link href="#" className="text-xs font-bold text-[#2E7D32] hover:underline">
                                        {t('login.forgot')}
                                    </Link>
                                )}
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2E7D32]/10 focus:border-[#2E7D32] outline-none transition-all font-medium pr-14"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2E7D32] transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {!isLogin && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                                {userRole === 'farmer' && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2 px-1">Farm Location</label>
                                            <input
                                                type="text" required
                                                value={roleData.farmer.location}
                                                onChange={(e) => setRoleData({ ...roleData, farmer: { ...roleData.farmer, location: e.target.value } })}
                                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2E7D32]/10 focus:border-[#2E7D32] outline-none transition-all font-medium"
                                                placeholder="e.g. Northern Region, Ghana"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2 px-1">Primary Crop</label>
                                            <input
                                                type="text" required
                                                value={roleData.farmer.crop}
                                                onChange={(e) => setRoleData({ ...roleData, farmer: { ...roleData.farmer, crop: e.target.value } })}
                                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2E7D32]/10 focus:border-[#2E7D32] outline-none transition-all font-medium"
                                                placeholder="e.g. Maize, Cocoa"
                                            />
                                        </div>
                                    </>
                                )}
                                {userRole === 'expert' && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2 px-1">Specialization</label>
                                            <input
                                                type="text" required
                                                value={roleData.expert.specialization}
                                                onChange={(e) => setRoleData({ ...roleData, expert: { ...roleData.expert, specialization: e.target.value } })}
                                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2E7D32]/10 focus:border-[#2E7D32] outline-none transition-all font-medium"
                                                placeholder="e.g. Agronomy, Soil Science"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2 px-1">Organization</label>
                                            <input
                                                type="text" required
                                                value={roleData.expert.org}
                                                onChange={(e) => setRoleData({ ...roleData, expert: { ...roleData.expert, org: e.target.value } })}
                                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2E7D32]/10 focus:border-[#2E7D32] outline-none transition-all font-medium"
                                                placeholder="e.g. Ministry of Agriculture"
                                            />
                                        </div>
                                    </>
                                )}
                                {userRole === 'buyer' && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2 px-1">Company Name</label>
                                            <input
                                                type="text" required
                                                value={roleData.buyer.company}
                                                onChange={(e) => setRoleData({ ...roleData, buyer: { ...roleData.buyer, company: e.target.value } })}
                                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2E7D32]/10 focus:border-[#2E7D32] outline-none transition-all font-medium"
                                                placeholder="e.g. FreshAgro Ltd"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2 px-1">Business Hub</label>
                                            <input
                                                type="text" required
                                                value={roleData.buyer.hub}
                                                onChange={(e) => setRoleData({ ...roleData, buyer: { ...roleData.buyer, hub: e.target.value } })}
                                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2E7D32]/10 focus:border-[#2E7D32] outline-none transition-all font-medium"
                                                placeholder="e.g. Kumasi Central Market"
                                            />
                                        </div>
                                    </>
                                )}
                                {userRole === 'ngo' && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2 px-1">NGO Name</label>
                                            <input
                                                type="text" required
                                                value={roleData.ngo.name}
                                                onChange={(e) => setRoleData({ ...roleData, ngo: { ...roleData.ngo, name: e.target.value } })}
                                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2E7D32]/10 focus:border-[#2E7D32] outline-none transition-all font-medium"
                                                placeholder="e.g. Green Earth Foundation"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2 px-1">Area of Operation</label>
                                            <input
                                                type="text" required
                                                value={roleData.ngo.area}
                                                onChange={(e) => setRoleData({ ...roleData, ngo: { ...roleData.ngo, area: e.target.value } })}
                                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2E7D32]/10 focus:border-[#2E7D32] outline-none transition-all font-medium"
                                                placeholder="e.g. Environmental Conservation"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-5 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-black text-lg rounded-2xl uppercase tracking-[0.2em] shadow-lg shadow-green-900/10 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? (
                                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    {isLogin ? t('login.submit.login') : t('login.submit.signup')}
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 flex flex-col gap-4">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase font-bold tracking-widest">
                                <span className="px-4 bg-gray-50/30 text-gray-400">{t('common.or')}</span>
                            </div>
                        </div>

                        <button
                            onClick={handleGuestContinue}
                            className="w-full py-4 border-2 border-gray-200 hover:border-gray-300 text-gray-600 font-bold rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            {t('login.guest')}
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
                    <Link href="#" className="hover:text-gray-600 transition-colors">{t('common.privacy')}</Link>
                    <Link href="#" className="hover:text-gray-600 transition-colors">{t('common.terms')}</Link>
                </div>
            </div>
        </div>
    );
}



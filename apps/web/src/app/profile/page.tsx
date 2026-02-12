'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useAuth } from '../../lib/AuthContext';
import AuthGuard from '../../components/AuthGuard';
import { Camera, Save, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';

export default function ProfileSettingsPage() {
    const { user, profile, updateProfile, uploadProfilePhoto } = useAuth();
    const [fullName, setFullName] = useState('');
    const [location, setLocation] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [initialized, setInitialized] = useState(false);

    // Initialize form fields from profile data (once loaded)
    React.useEffect(() => {
        if (profile && !initialized) {
            setFullName(profile.fullName || '');
            setLocation(profile.location || '');
            setInitialized(true);
        }
    }, [profile, initialized]);

    const displayName = fullName || profile?.fullName || user?.email?.split('@')[0] || 'User';
    const avatarUrl = profile?.photoURL
        || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=2E7D32&color=fff&size=200`;
    const roleBadge = profile?.role
        ? profile.role.charAt(0).toUpperCase() + profile.role.slice(1)
        : 'User';

    const handleSave = async () => {
        setIsSaving(true);
        setError(null);
        setSaveSuccess(false);
        try {
            await updateProfile({
                fullName,
                location,
            });
            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        } catch (err) {
            setError('Failed to save changes. Please try again.');
        }
        setIsSaving(false);
    };

    const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validate file
        if (!file.type.startsWith('image/')) {
            setError('Please select an image file.');
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            setError('Image must be smaller than 5MB.');
            return;
        }

        setIsUploading(true);
        setError(null);
        try {
            await uploadProfilePhoto(file);
        } catch (err) {
            setError('Failed to upload photo. Please try again.');
        }
        setIsUploading(false);
    };

    const notifications = {
        weather: true,
        news: true,
        expert: true,
        market: false
    };

    return (
        <AuthGuard>
            <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans">
                {/* Header */}
                <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
                    <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <Link href="/dashboard" className="p-2 hover:bg-gray-50 rounded-xl text-gray-400">
                                <ArrowLeft className="w-6 h-6" />
                            </Link>
                            <h1 className="text-xl font-bold text-gray-900">Profile & Settings</h1>
                        </div>
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="px-6 py-2 bg-[#2E7D32] text-white font-black uppercase tracking-widest text-[10px] rounded-full shadow-lg shadow-green-900/10 hover:bg-[#1B5E20] transition-all flex items-center gap-2 disabled:opacity-50"
                        >
                            {isSaving ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : saveSuccess ? (
                                <>
                                    <CheckCircle className="w-4 h-4" />
                                    Saved!
                                </>
                            ) : (
                                <>
                                    <Save className="w-4 h-4" />
                                    Save Changes
                                </>
                            )}
                        </button>
                    </div>
                </header>

                <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 space-y-10">
                    {/* Status Messages */}
                    {error && (
                        <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 font-medium">
                            {error}
                        </div>
                    )}

                    {/* User Profile Summary */}
                    <section className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                        <div className="relative group">
                            <div className="w-32 h-32 bg-gray-100 rounded-[40px] overflow-hidden border-4 border-white shadow-xl">
                                {isUploading ? (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-50">
                                        <Loader2 className="w-8 h-8 animate-spin text-[#2E7D32]" />
                                    </div>
                                ) : (
                                    <img
                                        src={avatarUrl}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                disabled={isUploading}
                                className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#2E7D32] text-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-all disabled:opacity-50"
                            >
                                <Camera className="w-5 h-5" />
                            </button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoUpload}
                                className="hidden"
                            />
                        </div>
                        <div className="flex-1 space-y-2">
                            <h2 className="text-3xl font-black text-gray-900 tracking-tight">{displayName}</h2>
                            <p className="text-lg text-gray-500 font-medium italic">{user?.email}</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                                <span className="px-4 py-1.5 bg-green-50 text-[#2E7D32] rounded-full text-[10px] font-black uppercase tracking-widest">{roleBadge}</span>
                            </div>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Account Settings */}
                        <section className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100 space-y-10">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 border-b border-gray-50 pb-6">Account Details</h3>

                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block px-1">Full Name</label>
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="Enter your full name"
                                        className="w-full px-5 py-3 bg-gray-50 border-none rounded-2xl text-sm font-bold text-gray-900 focus:ring-4 focus:ring-[#2E7D32]/5 outline-none transition-all"
                                    />
                                </div>
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-xl group-hover:bg-green-50 group-hover:scale-110 transition-all">📧</div>
                                    <div>
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block mb-1">Email Address</label>
                                        <p className="text-sm font-bold text-gray-900">{user?.email || '—'}</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block px-1">Location</label>
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="Enter your location"
                                        className="w-full px-5 py-3 bg-gray-50 border-none rounded-2xl text-sm font-bold text-gray-900 focus:ring-4 focus:ring-[#2E7D32]/5 outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Preferences */}
                        <section className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100 space-y-10">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 border-b border-gray-50 pb-6">App Preferences</h3>

                            <div className="space-y-10">
                                {/* Role Display */}
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block px-1">Active Role</label>
                                    <div className="px-6 py-4 bg-green-50 border-2 border-[#2E7D32] rounded-2xl text-sm font-bold text-[#2E7D32]">
                                        {roleBadge}
                                    </div>
                                    <p className="text-xs text-gray-400 px-1 italic">To change your role, visit the role selection page.</p>
                                </div>

                                {/* Account Info */}
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block px-1">Member Since</label>
                                    <p className="text-sm font-bold text-gray-900 px-1">
                                        {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString('en-US', {
                                            year: 'numeric', month: 'long', day: 'numeric'
                                        }) : '—'}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Notifications */}
                    <section className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 border-b border-gray-50 pb-6 mb-10">Notification Settings</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <ToggleItem
                                label="Weather Alerts"
                                desc="Real-time updates on drought and rain risks."
                                enabled={notifications.weather}
                                toggle={() => { }}
                            />
                            <ToggleItem
                                label="Expert Responses"
                                desc="Instant notifications when experts answer you."
                                enabled={notifications.expert}
                                toggle={() => { }}
                            />
                            <ToggleItem
                                label="Daily CSA Tips"
                                desc="Climate-smart farming advice every morning."
                                enabled={notifications.news}
                                toggle={() => { }}
                            />
                            <ToggleItem
                                label="Market Updates"
                                desc="Alerts when regional crop prices change."
                                enabled={notifications.market}
                                toggle={() => { }}
                            />
                        </div>
                    </section>

                    {/* Danger Zone */}
                    <section className="pt-10 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-gray-100">
                        <div className="space-y-1">
                            <h4 className="text-sm font-bold text-gray-900">Logout of all devices</h4>
                            <p className="text-xs text-gray-400 font-medium leading-relaxed italic">You will be required to login again on this and other devices.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-8 py-3 border-2 border-gray-100 text-gray-400 font-black uppercase tracking-widest text-[10px] rounded-full hover:border-red-200 hover:text-red-500 transition-all">Delete Account</button>
                            <Link href="/login" className="px-8 py-3 bg-gray-900 text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-black transition-all">Logout</Link>
                        </div>
                    </section>
                </main>
            </div>
        </AuthGuard>
    );
}

function ToggleItem({ label, desc, enabled, toggle }: { label: string, desc: string, enabled: boolean, toggle: () => void }) {
    return (
        <div className="flex items-center justify-between gap-6">
            <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900">{label}</h4>
                <p className="text-xs text-gray-400 font-medium leading-tight">{desc}</p>
            </div>
            <button
                onClick={toggle}
                className={`relative w-14 h-7 rounded-full transition-all duration-500 p-1 ${enabled ? 'bg-[#2E7D32]' : 'bg-gray-200'}`}
            >
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-all duration-500 ${enabled ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
        </div>
    );
}

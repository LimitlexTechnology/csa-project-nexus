'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { useAuth } from '../lib/AuthContext';
import { User, LogOut, Settings, ChevronDown, Menu, X } from 'lucide-react';

interface DashboardHeaderProps {
    title: string;
}

export default function DashboardHeader({ title }: DashboardHeaderProps) {
    const { user, profile, signOutUser } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const displayName = profile?.fullName || user?.email?.split('@')[0] || 'User';
    const avatarUrl = profile?.photoURL
        || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=2E7D32&color=fff&size=80`;
    const roleBadge = profile?.role
        ? profile.role.charAt(0).toUpperCase() + profile.role.slice(1)
        : 'User';

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/dashboard">
                    <Logo />
                </Link>

                {/* Title - centered on desktop */}
                <h1 className="hidden md:block text-xl font-bold text-gray-900">{title}</h1>

                {/* User Menu */}
                <div className="flex items-center gap-4">
                    {/* Desktop user dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-3 px-3 py-2 rounded-2xl hover:bg-gray-50 transition-all border border-gray-100"
                        >
                            <img
                                src={avatarUrl}
                                alt={displayName}
                                className="w-9 h-9 rounded-xl object-cover border-2 border-white shadow-sm"
                            />
                            <div className="hidden md:flex flex-col items-start">
                                <span className="text-sm font-bold text-gray-900 leading-tight">{displayName}</span>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{roleBadge}</span>
                            </div>
                            <ChevronDown
                                className={`hidden md:block w-4 h-4 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {/* Dropdown menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                {/* User info header */}
                                <div className="px-4 py-3 border-b border-gray-50">
                                    <p className="text-sm font-bold text-gray-900">{displayName}</p>
                                    <p className="text-xs text-gray-400 truncate">{user?.email}</p>
                                </div>

                                <Link
                                    href="/profile"
                                    onClick={() => setIsDropdownOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700"
                                >
                                    <User size={18} className="text-gray-400" />
                                    <span className="text-sm font-medium">My Profile</span>
                                </Link>

                                <Link
                                    href="/profile"
                                    onClick={() => setIsDropdownOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700"
                                >
                                    <Settings size={18} className="text-gray-400" />
                                    <span className="text-sm font-medium">Settings</span>
                                </Link>

                                <div className="border-t border-gray-50 mt-1 pt-1">
                                    <button
                                        onClick={() => {
                                            setIsDropdownOpen(false);
                                            signOutUser();
                                        }}
                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-red-600"
                                    >
                                        <LogOut size={18} />
                                        <span className="text-sm font-bold">Logout</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile title bar */}
            <div className="md:hidden border-t border-gray-50 px-6 py-3">
                <h1 className="text-lg font-bold text-gray-900">{title}</h1>
            </div>
        </header>
    );
}

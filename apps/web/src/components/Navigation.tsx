'use client';
import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        {/* Logo Icon - Cloud, Leaf, Water */}
                        <div className="relative w-12 h-12">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex items-center gap-0.5">
                                    <span className="text-blue-400 text-lg" style={{ marginTop: '-4px' }}>☁️</span>
                                    <span className="text-green-500 text-xl">🌱</span>
                                </div>
                            </div>
                        </div>
                        <span className="text-2xl font-bold text-gray-900 tracking-tight">CSA ONE</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-8">
                        <Link
                            href="#about"
                            className="text-gray-900 font-medium pb-0.5 border-b-2 border-gray-900 hover:text-gray-700 transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="#features"
                            className="text-gray-700 font-medium hover:text-gray-900 transition-colors"
                        >
                            Features
                        </Link>
                        <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 font-medium transition-colors">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

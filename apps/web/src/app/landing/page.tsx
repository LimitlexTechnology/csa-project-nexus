'use client';
import Navigation from '../../components/Navigation';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation />

            {/* Hero Section */}
            <section className="relative h-[400px] rounded-b-3xl overflow-hidden mx-4 mt-4">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/farm-bg.jpg')`,
                        backgroundBlendMode: 'multiply',
                        backgroundColor: 'rgba(50, 80, 60, 0.7)'
                    }}
                >
                    {/* World Map Overlay - Teal Tint */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-cyan-500/20"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center px-12">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold text-white mb-8 leading-tight">
                            Future-Proof Your Farm.
                            <br />
                            Climate Intelligence for
                            <br />
                            Sustainable Agriculture
                        </h1>
                        <div className="flex gap-4">
                            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all">
                                Get Started
                            </button>
                            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all">
                                Explore as Guest
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Cards Section */}
            <section className="max-w-7xl mx-auto px-6 mt-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Weather Snapshot Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Weather Snapshot</h3>

                        <div className="mb-4">
                            <p className="text-sm text-gray-700 font-medium mb-2">Current Conditions:</p>
                            <div className="flex items-center gap-2">
                                <span className="text-3xl">☀️</span>
                                <span className="text-xl font-bold text-gray-900">Sunny, 28°C</span>
                                <span className="ml-auto text-blue-400 text-2xl">💧</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                            <div>
                                <p className="text-xs text-gray-600 mb-1">Pest Risk:</p>
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-400 text-sm">☀️</span>
                                    <span className="text-sm font-semibold text-gray-900">Low</span>
                                </div>
                                <div className="flex items-center gap-1 mt-1">
                                    <span className="text-yellow-400 text-sm">☀️</span>
                                    <span className="text-sm font-semibold text-gray-900">Low</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-gray-600 mb-1">Drought Index</p>
                                <div className="flex items-center gap-1">
                                    <span className="text-blue-400 text-sm">💧</span>
                                    <span className="text-sm font-semibold text-gray-900">Moderate</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Latest News Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Latest News & Announcements</h3>
                        <div className="space-y-3">
                            <div className="pb-3 border-b border-gray-100">
                                <p className="text-sm text-gray-800 font-medium">
                                    CSA ONE Partners in Global Fund
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-800 font-medium">
                                    New Satellite Data for Soil Health Analysis
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Featured CSA Tip Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Featured CSA Tip</h3>
                        <p className="text-sm text-gray-800 font-medium mb-6">
                            Rotate Crops for Soil Health & Pest Resilience
                        </p>
                        <button className="w-full px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all shadow-sm">
                            Mow!
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6 mb-12">
                <div className="bg-gradient-to-r from-blue-300 via-cyan-200 to-green-300 rounded-3xl py-16 px-12 text-center shadow-lg">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">
                        Join the Future of Farming
                    </h2>
                    <button className="px-12 py-3.5 bg-green-600 hover:bg-green-700 text-white text-base font-semibold rounded-lg transition-all shadow-md">
                        Sign Up Now
                    </button>
                </div>
            </section>
        </div>
    );
}

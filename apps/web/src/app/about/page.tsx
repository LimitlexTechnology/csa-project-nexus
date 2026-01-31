'use client';
import Navigation from '../../components/Navigation';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans">
            <Navigation />

            <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 md:py-24 space-y-20">
                {/* Hero Section */}
                <section className="text-center space-y-8 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none">
                        Cultivating the <span className="text-[#2E7D32]">Future</span> of Agriculture.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
                        CSA ONE is a climate-smart nexus designed to empower farmers, experts, and stakeholders with real-time intelligence and sustainable practices.
                    </p>
                </section>

                {/* Mission Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-white rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-sm">
                    <div className="space-y-8">
                        <div className="inline-block px-4 py-1 bg-green-50 rounded-full text-[10px] font-black uppercase tracking-widest text-[#2E7D32]">Our Mission</div>
                        <h2 className="text-4xl font-black text-gray-900 leading-tight">Bridging the gap between data and the dirt.</h2>
                        <p className="text-lg text-gray-600 font-medium leading-relaxed">
                            We believe that every farmer deserves access to the tools and knowledge necessary to adapt to a changing climate. Our platform combines satellite data, AI diagnostics, and expert advice to ensure global food security.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-900 font-bold">
                                <span className="text-[#2E7D32]">✓</span> Real-time Climate Intelligence
                            </li>
                            <li className="flex items-center gap-3 text-gray-900 font-bold">
                                <span className="text-[#2E7D32]">✓</span> AI-Powered Disease Detection
                            </li>
                            <li className="flex items-center gap-3 text-gray-900 font-bold">
                                <span className="text-[#2E7D32]">✓</span> Expert Support Network
                            </li>
                        </ul>
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-[32px] overflow-hidden relative border-4 border-white shadow-xl">
                        <img src="/farm-bg.jpg" className="w-full h-full object-cover" alt="Mission" />
                    </div>
                </section>

                {/* Values Section */}
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <ValueCard 
                        icon="🌍" 
                        title="Sustainability" 
                        desc="Promoting farming methods that protect the environment for future generations." 
                    />
                    <ValueCard 
                        icon="📡" 
                        title="Innovation" 
                        desc="Leveraging cutting-edge technology to solve age-old agricultural challenges." 
                    />
                    <ValueCard 
                        icon="🤝" 
                        title="Community" 
                        desc="Building a global nexus of support between farmers, experts, and policy makers." 
                    />
                </section>

                {/* CTA Section */}
                <section className="bg-[#0F4C3A] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden text-white">
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                        <span className="text-[200px]">🌱</span>
                    </div>
                    <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Ready to join the nexus?</h2>
                        <p className="text-xl text-green-50/70 font-medium">Start your journey towards climate-smart farming today.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/welcome" className="px-10 py-5 bg-[#81C784] hover:bg-[#66BB6A] text-[#0F4C3A] font-black uppercase tracking-widest rounded-2xl transition-all shadow-lg">Get Started</Link>
                            <Link href="/login" className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest rounded-2xl transition-all border border-white/20">Login</Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-white border-t border-gray-100 py-12 mt-20">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-2xl">🌱</span>
                        <span className="text-xl font-black tracking-tighter text-[#0F4C3A]">CSA ONE</span>
                    </div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">© 2026 Climate Smart Agriculture Project Nexus</p>
                </div>
            </footer>
        </div>
    );
}

function ValueCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
    return (
        <div className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="text-5xl mb-6">{icon}</div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-500 font-medium leading-relaxed">{desc}</p>
        </div>
    );
}

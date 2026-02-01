'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '../../components/Logo';
import { ShoppingCart, Search, Filter, Heart, MapPin, Star, TrendingUp, ArrowRight, Menu, X } from 'lucide-react';

export default function MarketplacePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const products = [
        { id: 1, name: 'Organic Maize (90kg bag)', price: 280, farmer: 'John Mensah', location: 'Ashanti Region', rating: 4.8, reviews: 124, image: '🌾', category: 'grains', certified: true },
        { id: 2, name: 'Fresh Tomatoes (crate)', price: 120, farmer: 'Ama Owusu', location: 'Greater Accra', rating: 4.9, reviews: 89, image: '🍅', category: 'vegetables', certified: true },
        { id: 3, name: 'Climate-Smart Rice (50kg)', price: 385, farmer: 'Kwame Adom', location: 'Brong Ahafo', rating: 4.7, reviews: 156, image: '🍚', category: 'grains', certified: true },
        { id: 4, name: 'Certified Cassava Roots', price: 95, farmer: 'Yaa Mensah', location: 'Eastern Region', rating: 4.6, reviews: 67, image: '🥔', category: 'roots', certified: true },
        { id: 5, name: 'Water-Efficient Beans', price: 450, farmer: 'Kofi Boateng', location: 'Northern Region', rating: 4.9, reviews: 203, image: '🫘', category: 'legumes', certified: true },
        { id: 6, name: 'Drought-Resistant Sorghum', price: 210, farmer: 'Abena Nyarko', location: 'Upper West', rating: 4.5, reviews: 45, image: '🌾', category: 'grains', certified: true },
        { id: 7, name: 'Sustainable Pepper (kg)', price: 85, farmer: 'Samuel Owusu', location: 'Volta Region', rating: 4.8, reviews: 92, image: '🌶️', category: 'vegetables', certified: true },
        { id: 8, name: 'Organic Groundnuts (25kg)', price: 320, farmer: 'Mercy Oppong', location: 'Central Region', rating: 4.7, reviews: 134, image: '🥜', category: 'legumes', certified: true },
    ];

    const categories = [
        { id: 'all', label: 'All Products', count: 8 },
        { id: 'grains', label: 'Grains & Cereals', count: 3 },
        { id: 'vegetables', label: 'Vegetables', count: 2 },
        { id: 'legumes', label: 'Legumes', count: 2 },
        { id: 'roots', label: 'Root Crops', count: 1 },
    ];

    const userRole = typeof window !== 'undefined' ? localStorage.getItem('userRole') : null;

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.farmer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/dashboard">
                        <Logo />
                    </Link>
                    <div className="flex items-center gap-6">
                        <h1 className="text-xl font-bold text-gray-900">Marketplace</h1>
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
                            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Hero Section */}
                <div className="mb-12 bg-gradient-to-r from-[#0F4C3A] to-orange-600 rounded-[40px] p-12 text-white shadow-xl">
                    <h2 className="text-4xl font-black mb-4 tracking-tighter">Buy & Sell Climate-Smart Produce 🌾</h2>
                    <p className="text-green-50/90 text-lg font-medium mb-8">Connect with sustainable producers and buyers. All products certified for climate resilience.</p>
                    
                    {/* Search Bar */}
                    <div className="relative max-w-2xl">
                        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                        <input 
                            type="text" 
                            placeholder="Search products, farmers, or locations..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-16 pr-6 py-5 bg-white text-gray-900 rounded-2xl focus:ring-4 focus:ring-orange-300 outline-none placeholder-gray-400 font-medium"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
                        <p className="text-sm font-bold text-gray-500 uppercase mb-2">Active Sellers</p>
                        <p className="text-3xl font-black text-gray-900">847+</p>
                        <p className="text-xs text-gray-400 mt-2">Verified farmers</p>
                    </div>
                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
                        <p className="text-sm font-bold text-gray-500 uppercase mb-2">Avg Rating</p>
                        <p className="text-3xl font-black text-gray-900">4.8★</p>
                        <p className="text-xs text-gray-400 mt-2">Buyer satisfaction</p>
                    </div>
                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
                        <p className="text-sm font-bold text-gray-500 uppercase mb-2">Products</p>
                        <p className="text-3xl font-black text-gray-900">2.3K+</p>
                        <p className="text-xs text-gray-400 mt-2">Available now</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 sticky top-32">
                            <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
                                <Filter size={20} />
                                Categories
                            </h3>
                            <div className="space-y-3">
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`w-full text-left px-4 py-3 rounded-2xl transition-all font-bold ${
                                            selectedCategory === cat.id
                                                ? 'bg-orange-500 text-white'
                                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        <span className="flex items-center justify-between">
                                            {cat.label}
                                            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{cat.count}</span>
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="lg:col-span-3">
                        {/* Results Header */}
                        <div className="mb-8 flex items-center justify-between">
                            <p className="text-sm font-bold text-gray-600 uppercase">
                                {filteredProducts.length} Products Found
                            </p>
                            <select className="px-4 py-2 border border-gray-200 rounded-2xl font-bold text-gray-700 bg-white">
                                <option>Recommended</option>
                                <option>Newest</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Most Rated</option>
                            </select>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {filteredProducts.map(product => (
                                <div key={product.id} className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                                    {/* Product Image/Icon */}
                                    <div className="w-full h-48 bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                                        {product.image}
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-8">
                                        {/* Certification Badge */}
                                        {product.certified && (
                                            <div className="inline-block mb-4 px-3 py-1 bg-green-100 text-[#2E7D32] text-xs font-bold rounded-full">
                                                ✓ Certified Sustainable
                                            </div>
                                        )}

                                        {/* Product Name & Price */}
                                        <h3 className="text-xl font-black text-gray-900 mb-2">{product.name}</h3>
                                        <p className="text-3xl font-black text-orange-600 mb-6">GH₵ {product.price}</p>

                                        {/* Farmer Info */}
                                        <div className="space-y-2 mb-6">
                                            <p className="text-sm font-bold text-gray-700">
                                                Seller: <span className="text-[#2E7D32]">{product.farmer}</span>
                                            </p>
                                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                                                <MapPin size={16} />
                                                {product.location}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="flex items-center gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={16}
                                                            className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-xs font-bold text-gray-600">({product.reviews} reviews)</span>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex gap-3">
                                            <button className="flex-1 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2">
                                                <ShoppingCart size={20} />
                                                Add to Cart
                                            </button>
                                            <button className="p-4 border border-gray-200 hover:border-orange-500 rounded-2xl transition-all text-gray-600 hover:text-orange-600">
                                                <Heart size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredProducts.length === 0 && (
                            <div className="text-center py-16">
                                <p className="text-gray-500 font-medium mb-4">No products found matching your search</p>
                                <button 
                                    onClick={() => {
                                        setSearchQuery('');
                                        setSelectedCategory('all');
                                    }}
                                    className="px-6 py-3 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Role-Specific CTA */}
                {userRole === 'farmer' && (
                    <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-[40px] p-12 border border-green-200 text-center">
                        <h3 className="text-2xl font-black text-gray-900 mb-4">Want to Sell Your Produce?</h3>
                        <p className="text-gray-600 font-medium mb-8 max-w-2xl mx-auto">Join hundreds of farmers selling directly to verified buyers. No middlemen, better prices.</p>
                        <button className="px-12 py-4 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-black rounded-2xl transition-all">
                            List Your Products
                        </button>
                    </div>
                )}

                {userRole === 'buyer' && (
                    <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-[40px] p-12 border border-orange-200 text-center">
                        <h3 className="text-2xl font-black text-gray-900 mb-4">Bulk Ordering Available</h3>
                        <p className="text-gray-600 font-medium mb-8 max-w-2xl mx-auto">Contact farmers directly for volume discounts and customized supply agreements.</p>
                        <button className="px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl transition-all">
                            Start Negotiating
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

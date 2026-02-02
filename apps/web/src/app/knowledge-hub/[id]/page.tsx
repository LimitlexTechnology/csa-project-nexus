'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Logo } from '../../../components/Logo';
import { ArrowLeft, Download, Share2, BookOpen, Clock, Zap, CheckCircle, Heart, MessageCircle, X, Mail, Copy, Facebook, Linkedin, Twitter } from 'lucide-react';

const hubDetails = {
    1: {
        id: 1,
        title: "Mastering Crop Rotation for Soil Health",
        category: "guides",
        type: "Comprehensive Guide",
        duration: "15 min read",
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1200",
        description: "A comprehensive guide on how to implement effective crop rotation strategies to naturally replenish soil nutrients.",
        content: `
            <h2>Introduction to Crop Rotation</h2>
            <p>Crop rotation is one of the oldest and most effective agricultural practices for maintaining soil health and improving farm productivity. This guide walks you through the principles and practical implementation of crop rotation on your farm.</p>
            
            <h3>Why Crop Rotation Matters</h3>
            <ul>
                <li><strong>Breaks pest cycles:</strong> Different crops attract different pests; rotation disrupts pest breeding patterns</li>
                <li><strong>Improves soil structure:</strong> Different root depths and types improve soil aggregation</li>
                <li><strong>Enhances nutrient cycling:</strong> Legumes fix nitrogen while other crops use it</li>
                <li><strong>Reduces disease pressure:</strong> Soil-borne diseases specific to crops are naturally suppressed</li>
                <li><strong>Increases profitability:</strong> Diversified crops reduce market risk</li>
            </ul>
            
            <h3>Basic Rotation Principles</h3>
            <p><strong>Never plant the same crop family in the same field for consecutive years.</strong></p>
            <p>Ideal rotation includes:</p>
            <ul>
                <li>Nitrogen-fixing legumes (beans, peas, groundnuts)</li>
                <li>Heavy feeders (maize, vegetables, wheat)</li>
                <li>Light feeders (root crops, grains)</li>
            </ul>
            
            <h3>Step-by-Step Implementation</h3>
            <ol>
                <li><strong>Map Your Plots:</strong> Divide your farmland into sections that can be rotated</li>
                <li><strong>Identify Crop Families:</strong> Group crops by their botanical families</li>
                <li><strong>Plan Your Rotation:</strong> Use a 3-4 year rotation cycle for best results</li>
                <li><strong>Track Records:</strong> Keep detailed notes of what was planted where and when</li>
                <li><strong>Monitor Results:</strong> Observe changes in soil, pests, and yield</li>
            </ol>
            
            <h3>Sample 4-Year Rotation Plan</h3>
            <p><strong>Year 1:</strong> Maize (heavy feeder)</p>
            <p><strong>Year 2:</strong> Beans (nitrogen fixer)</p>
            <p><strong>Year 3:</strong> Cassava (light feeder)</p>
            <p><strong>Year 4:</strong> Cowpea (nitrogen fixer)</p>
            
            <h3>Common Mistakes to Avoid</h3>
            <ul>
                <li>Rotating within the same plant family</li>
                <li>Not accounting for crop nutrient requirements</li>
                <li>Ignoring pest pressure patterns</li>
                <li>Rotating too frequently (less than 2-3 years between same crop)</li>
            </ul>
            
            <h3>Getting Started</h3>
            <p>Start simple with a 3-year rotation on one section of your farm. Document everything and adjust based on your observations. Most farmers see visible improvements in soil quality within 2-3 years.</p>
        `,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        downloadUrl: "/guides/crop-rotation-guide.pdf",
        learningPoints: [
            "Understand why rotation prevents soil degradation",
            "Learn the 4-year rotation cycle",
            "Map your farm for rotation",
            "Track crop families and plant accordingly",
            "Monitor soil improvements"
        ],
        relatedResources: [2, 4]
    },
    2: {
        id: 2,
        title: "5 Quick Tips for Efficient Irrigation",
        category: "tips",
        type: "Quick Tip Series",
        duration: "3 min read",
        image: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&q=80&w=1200",
        description: "Reduce water waste and improve crop yield with these simple but effective irrigation techniques.",
        content: `
            <h2>5 Quick Tips for Efficient Irrigation</h2>
            
            <h3>Tip #1: Water in the Early Morning</h3>
            <p>Irrigation early in the morning (5-8 AM) reduces water loss due to evaporation. Cool morning temperatures mean less water is needed to reach plant roots. This simple timing adjustment can save up to 20% of water.</p>
            
            <h3>Tip #2: Use Mulch to Retain Moisture</h3>
            <p>Apply 5-10 cm of organic mulch (crop residue, compost, straw) around your plants. Mulch reduces soil evaporation by 50-70% and improves soil structure. Plus, it adds nutrients as it decomposes!</p>
            
            <h3>Tip #3: Check Soil Moisture Before Watering</h3>
            <p>Stick your finger 2-3 inches into the soil. If it feels moist, wait before watering. Many farmers water too frequently. Most crops need water when the top 2 inches of soil are dry, not before.</p>
            
            <h3>Tip #4: Install Drip Lines, Not Sprinklers</h3>
            <p>Drip irrigation delivers water directly to plant roots with 90% efficiency, compared to 60-75% for sprinklers. The initial investment pays back within one season through water savings.</p>
            
            <h3>Tip #5: Group Plants by Water Needs</h3>
            <p>Don't water all crops the same. Group thirsty plants (tomatoes, leafy greens) together and drought-tolerant plants (root crops, beans) separately. This targeted approach optimizes every drop.</p>
            
            <h3>Expected Results</h3>
            <p>By implementing these tips, expect:</p>
            <ul>
                <li>30-40% reduction in water usage</li>
                <li>15-25% increase in yield quality</li>
                <li>20-30% savings on water costs</li>
                <li>Healthier, more drought-resilient plants</li>
            </ul>
        `,
        videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
        downloadUrl: "/guides/irrigation-tips.pdf",
        learningPoints: [
            "Time irrigation correctly",
            "Use mulch effectively",
            "Check soil moisture",
            "Choose efficient irrigation methods",
            "Tailor watering to crop type"
        ],
        relatedResources: [1, 3]
    },
    3: {
        id: 3,
        title: "The Future of Climate-Smart Seeds",
        category: "articles",
        type: "Expert Article",
        duration: "10 min read",
        image: "https://images.unsplash.com/photo-1532983330958-4b32bc9bb07d?auto=format&fit=crop&q=80&w=1200",
        description: "Expert analysis on how bio-technology is developing seeds that can thrive in extreme climate conditions.",
        content: `
            <h2>The Future of Climate-Smart Seeds</h2>
            <p>Climate change is pushing agricultural science to develop seeds that don't just survive but thrive in challenging conditions. Today's breakthrough in seed technology is tomorrow's farming norm.</p>
            
            <h3>What Makes a Seed "Climate-Smart"?</h3>
            <p>Climate-smart seeds are bred or developed to have:</p>
            <ul>
                <li><strong>Drought tolerance:</strong> Requiring 30-40% less water than conventional varieties</li>
                <li><strong>Heat resilience:</strong> Maintaining productivity at temperatures 2-3°C above normal</li>
                <li><strong>Flood resistance:</strong> Surviving temporary waterlogging without yield loss</li>
                <li><strong>Disease resistance:</strong> Built-in resistance to climate-favored pests and diseases</li>
                <li><strong>Nutrient efficiency:</strong> Maximizing yield even in poor soils</li>
            </ul>
            
            <h3>Technologies Behind Climate-Smart Seeds</h3>
            <p><strong>Conventional Breeding:</strong> Selecting and crossing plants with desired traits over multiple generations</p>
            <p><strong>Marker-Assisted Selection:</strong> Using genetic markers to speed up identification of desirable traits</p>
            <p><strong>Genetic Engineering:</strong> Introducing specific genes for drought or disease resistance</p>
            <p><strong>Speed Breeding:</strong> Creating multiple generations per year in controlled environments</p>
            
            <h3>Global Successes</h3>
            <p>Several climate-smart seed varieties are already transforming farming:</p>
            <ul>
                <li><strong>Drought-tolerant maize:</strong> Performing 20% better in low-water conditions</li>
                <li><strong>Flood-tolerant rice:</strong> Recovering fully after 2-3 weeks of submersion</li>
                <li><strong>Heat-resilient wheat:</strong> Maintaining quality at record temperatures</li>
                <li><strong>Rust-resistant beans:</strong> Eliminating yield losses from fungal diseases</li>
            </ul>
            
            <h3>Availability for Small Farmers</h3>
            <p>Climate-smart seeds are increasingly accessible through:</p>
            <ul>
                <li>Government seed distribution programs</li>
                <li>Certified seed companies and suppliers</li>
                <li>Agricultural NGOs and CSA platforms like CSA Hub</li>
                <li>Farmer-led seed multiplication networks</li>
            </ul>
            
            <h3>The Path Forward</h3>
            <p>By 2030, climate-smart seeds will be the norm rather than the exception. Early adopters gain competitive advantages today. Start exploring available varieties for your region and climate zone.</p>
        `,
        videoUrl: "https://www.youtube.com/embed/V-_O7gl3MGUU",
        downloadUrl: "/guides/climate-smart-seeds-guide.pdf",
        learningPoints: [
            "Understand climate-smart seed traits",
            "Learn about breeding technologies",
            "Identify seeds suitable for your region",
            "Source quality climate-smart seeds",
            "Plan variety transitions"
        ],
        relatedResources: [5, 2]
    },
    4: {
        id: 4,
        title: "Building a Resilient Smallholder Farm",
        category: "guides",
        type: "Comprehensive Guide",
        duration: "20 min read",
        image: "https://images.unsplash.com/photo-1495107336079-682523362b15?auto=format&fit=crop&q=80&w=1200",
        description: "A step-by-step guide to transforming your smallholder farm into a climate-resilient, profitable operation.",
        content: `
            <h2>Building a Resilient Smallholder Farm</h2>
            <p>Farm resilience means being able to maintain productivity and income despite climate shocks, market fluctuations, and other stressors. This guide provides a roadmap for every smallholder farmer.</p>
            
            <h3>The 5 Pillars of Farm Resilience</h3>
            
            <h4>1. Diversification</h4>
            <p>Don't rely on a single crop. A resilient farm includes:</p>
            <ul>
                <li>Multiple crop varieties (2-3 main crops + vegetables)</li>
                <li>Livestock for additional income and manure</li>
                <li>Trees for fruit, firewood, and soil improvement</li>
                <li>Off-farm income sources for cash flow stability</li>
            </ul>
            
            <h4>2. Soil Health</h4>
            <p>Healthy soil is the foundation of resilience. Implement:</p>
            <ul>
                <li>Crop rotation and cover crops</li>
                <li>Composting and organic matter addition</li>
                <li>Minimum tillage to preserve soil structure</li>
                <li>Regular soil testing and monitoring</li>
            </ul>
            
            <h4>3. Water Management</h4>
            <p>Water is critical for climate resilience:</p>
            <ul>
                <li>Construct water harvesting structures (ponds, trenches)</li>
                <li>Use efficient irrigation methods</li>
                <li>Maintain riparian vegetation for groundwater protection</li>
                <li>Plan for both drought and flood scenarios</li>
            </ul>
            
            <h4>4. Climate-Smart Practices</h4>
            <ul>
                <li>Plant early-maturing and drought-tolerant varieties</li>
                <li>Use weather information for planning</li>
                <li>Integrate agroforestry systems</li>
                <li>Implement soil and water conservation measures</li>
            </ul>
            
            <h4>5. Access to Markets and Services</h4>
            <ul>
                <li>Build direct relationships with buyers</li>
                <li>Join farmer groups for collective marketing</li>
                <li>Use digital tools for market information</li>
                <li>Access quality inputs and technical support</li>
            </ul>
            
            <h3>Implementation Timeline</h3>
            <p><strong>Months 1-3:</strong> Assessment and planning</p>
            <p><strong>Months 4-6:</strong> Soil and water conservation works</p>
            <p><strong>Months 7-12:</strong> Crop diversification and system improvements</p>
            <p><strong>Year 2+:</strong> Scaling successful practices and refining systems</p>
            
            <h3>Key Success Factors</h3>
            <ul>
                <li>Start small and scale gradually</li>
                <li>Keep detailed records of what works</li>
                <li>Connect with other farmers for learning</li>
                <li>Use available tools and platforms (like CSA Hub)</li>
                <li>Be patient—resilience takes time to build</li>
            </ul>
        `,
        videoUrl: "https://www.youtube.com/embed/2Jwv2uxXFxo",
        downloadUrl: "/guides/resilient-farm-guide.pdf",
        learningPoints: [
            "Assess your farm's current resilience",
            "Plan diversification strategy",
            "Implement soil health practices",
            "Set up water management systems",
            "Access markets and support services"
        ],
        relatedResources: [1, 3]
    },
    5: {
        id: 5,
        title: "Video: Climate-Smart Farming Basics",
        category: "videos",
        type: "Video Tutorial",
        duration: "12 min video",
        image: "https://images.unsplash.com/photo-1495641637046-e2d16bada1e2?auto=format&fit=crop&q=80&w=1200",
        description: "A comprehensive video introduction to climate-smart agriculture practices that any farmer can implement.",
        content: `
            <h2>Climate-Smart Farming Basics</h2>
            <p>This video covers the fundamental practices of climate-smart agriculture that can improve your farm's resilience and productivity.</p>
            
            <h3>What You'll Learn</h3>
            <ul>
                <li>The three pillars of climate-smart agriculture</li>
                <li>How to assess your farm's climate vulnerability</li>
                <li>Simple practices you can start implementing today</li>
                <li>Real examples from successful farmers</li>
                <li>Resources for deepening your knowledge</li>
            </ul>
            
            <h3>Key Concepts Covered</h3>
            
            <h4>Adaptation</h4>
            <p>Making farming more resilient to climate variability through practices like crop diversification, water management, and early-warning systems.</p>
            
            <h4>Mitigation</h4>
            <p>Reducing agricultural greenhouse gas emissions and sequestering carbon through soil conservation, agroforestry, and reduced tillage.</p>
            
            <h4>Sustainable Productivity</h4>
            <p>Maintaining and increasing crop yields while protecting natural resources for future generations.</p>
            
            <h3>Featured Farmers</h3>
            <p>The video includes success stories from farmers across West Africa who have transformed their operations using these practices.</p>
            
            <h3>Additional Resources</h3>
            <p>Download the accompanying guidebook and access tools to get started on your own farm.</p>
        `,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        downloadUrl: "/guides/climate-smart-basics.pdf",
        learningPoints: [
            "Understand climate-smart agriculture principles",
            "Learn adaptation strategies",
            "Understand mitigation practices",
            "Get inspired by farmer success stories",
            "Plan your farm improvement"
        ],
        relatedResources: [1, 4]
    }
};

export default function KnowledgeHubDetailPage() {
    const params = useParams();
    const resourceId = parseInt(params.id as string);
    const resource = hubDetails[resourceId as keyof typeof hubDetails];

    const [likes, setLikes] = useState(1200);
    const [isLiked, setIsLiked] = useState(false);
    const [showCommentModal, setShowCommentModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [comments, setComments] = useState(156);
    const [commentText, setCommentText] = useState('');
    const [commentName, setCommentName] = useState('');
    const [commentEmail, setCommentEmail] = useState('');

    if (!resource) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Resource Not Found</h1>
                    <Link href="/knowledge-hub" className="text-[#2E7D32] font-bold">Back to Knowledge Hub</Link>
                </div>
            </div>
        );
    }

    const relatedResources = resource.relatedResources.map(id => hubDetails[id as keyof typeof hubDetails]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
                <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/knowledge-hub" className="flex items-center gap-2 text-gray-900 hover:text-[#2E7D32] transition-colors">
                        <ArrowLeft size={24} />
                        <span className="font-bold">Knowledge Hub</span>
                    </Link>
                    <Link href="/dashboard">
                        <Logo />
                    </Link>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12">
                {/* Hero Image */}
                <div className="rounded-[40px] overflow-hidden mb-12 h-96 bg-gray-200">
                    <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
                </div>

                {/* Resource Header */}
                <div className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="px-4 py-2 bg-green-50 text-[#2E7D32] rounded-full text-xs font-black uppercase tracking-widest">
                            {resource.type}
                        </span>
                        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                            <Clock size={16} />
                            {resource.duration}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">
                        {resource.title}
                    </h1>

                    <p className="text-xl text-gray-700 font-medium mb-8 leading-relaxed">
                        {resource.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {resource.downloadUrl && (
                            <a
                                href={resource.downloadUrl}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold rounded-2xl transition-all"
                            >
                                <Download size={20} />
                                Download Guide
                            </a>
                        )}
                        <button 
                            onClick={() => setShowShareModal(true)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-2xl transition-all"
                        >
                            <Share2 size={20} />
                            Share
                        </button>
                    </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center gap-8 my-12 py-8 border-b border-gray-100">
                    <button 
                        onClick={() => {
                            setIsLiked(!isLiked);
                            setLikes(isLiked ? likes - 1 : likes + 1);
                        }}
                        className={`flex items-center gap-2 font-bold transition-colors ${isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
                    >
                        <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
                        <span>{likes}</span>
                    </button>
                    <button 
                        onClick={() => setShowCommentModal(true)}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#2E7D32] transition-colors font-bold"
                    >
                        <MessageCircle size={20} />
                        <span>{comments}</span>
                    </button>
                </div>

                {/* Learning Points */}
                <div className="bg-blue-50 rounded-[40px] p-10 mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="text-blue-600" size={28} />
                        <h3 className="text-2xl font-bold text-gray-900">What You&apos;ll Learn</h3>
                    </div>
                    <ul className="space-y-3">
                        {resource.learningPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                                <span className="text-gray-700 font-medium">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="prose prose-lg max-w-none mb-16">
                    <div dangerouslySetInnerHTML={{ __html: resource.content }} className="text-gray-700 leading-relaxed space-y-6">
                    </div>
                </div>

                {/* Embedded Video */}
                {resource.videoUrl && (
                    <div className="my-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Learn More - Video</h3>
                        <div className="rounded-[40px] overflow-hidden bg-gray-200 aspect-video">
                            <iframe
                                width="100%"
                                height="600"
                                src={resource.videoUrl}
                                title="Resource Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-[40px]"
                            ></iframe>
                        </div>
                    </div>
                )}

                {/* Related Resources */}
                {relatedResources.length > 0 && (
                    <div className="my-20">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Resources</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedResources.map((related) => (
                                <div key={related.id} className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 cursor-pointer"
                                    onClick={() => window.location.href = `/knowledge-hub/${related.id}`}
                                >
                                    <div className="aspect-[16/10] bg-gray-200 overflow-hidden">
                                        <img
                                            src={related.image}
                                            alt={related.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <p className="text-xs font-bold text-[#2E7D32] uppercase tracking-widest mb-3">
                                            {related.type}
                                        </p>
                                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#2E7D32] transition-colors line-clamp-2 mb-3">
                                            {related.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                                            <Clock size={16} />
                                            {related.duration}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-[#0F4C3A] to-[#2E7D32] rounded-[40px] p-12 text-center my-20">
                    <h3 className="text-3xl font-black text-white mb-4">Ready to Transform Your Farm?</h3>
                    <p className="text-green-50/70 font-medium mb-8 text-lg">
                        Connect with expert advisors and access personalized recommendations on the CSA Hub.
                    </p>
                    <Link
                        href="/dashboard"
                        className="inline-block px-10 py-5 bg-[#81C784] hover:bg-[#66BB6A] text-[#0F4C3A] font-black uppercase tracking-widest rounded-2xl transition-all shadow-lg"
                    >
                        Visit Dashboard
                    </Link>
                </div>
            </main>

            {/* Comment Modal */}
            {showCommentModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-[40px] max-w-2xl w-full max-h-96 overflow-y-auto shadow-2xl">
                        <div className="sticky top-0 bg-white flex items-center justify-between p-8 border-b border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900">Comments ({comments})</h3>
                            <button 
                                onClick={() => setShowCommentModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        
                        <div className="p-8 space-y-8">
                            {/* Comment Form */}
                            <div className="bg-gray-50 rounded-[32px] p-8">
                                <h4 className="text-lg font-bold text-gray-900 mb-6">Share Your Feedback</h4>
                                <div className="space-y-4">
                                    <input 
                                        type="text" 
                                        placeholder="Your name" 
                                        value={commentName}
                                        onChange={(e) => setCommentName(e.target.value)}
                                        className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl text-gray-900 placeholder-gray-400 outline-none focus:ring-4 focus:ring-[#2E7D32]/5 focus:border-[#2E7D32] transition-all"
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="Your email" 
                                        value={commentEmail}
                                        onChange={(e) => setCommentEmail(e.target.value)}
                                        className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl text-gray-900 placeholder-gray-400 outline-none focus:ring-4 focus:ring-[#2E7D32]/5 focus:border-[#2E7D32] transition-all"
                                    />
                                    <textarea 
                                        placeholder="Your comment..." 
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                        rows={4}
                                        className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl text-gray-900 placeholder-gray-400 outline-none focus:ring-4 focus:ring-[#2E7D32]/5 focus:border-[#2E7D32] transition-all resize-none"
                                    />
                                    <button 
                                        onClick={() => {
                                            if (commentText && commentName) {
                                                setComments(comments + 1);
                                                setCommentText('');
                                                setCommentName('');
                                                setCommentEmail('');
                                                alert('Thank you! Your comment has been posted.');
                                            }
                                        }}
                                        className="w-full py-3 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold rounded-2xl transition-all"
                                    >
                                        Post Comment
                                    </button>
                                </div>
                            </div>

                            {/* Sample Comments */}
                            <div className="space-y-6">
                                <div className="border-b border-gray-100 pb-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">FM</div>
                                        <div className="flex-1">
                                            <p className="font-bold text-gray-900">Farmer Mary</p>
                                            <p className="text-sm text-gray-500">1 day ago</p>
                                            <p className="mt-2 text-gray-700">This guide completely changed how I manage my farm. My yields are already 25% better!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-gray-100 pb-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">PJ</div>
                                        <div className="flex-1">
                                            <p className="font-bold text-gray-900">Peter Johnson</p>
                                            <p className="text-sm text-gray-500">2 days ago</p>
                                            <p className="mt-2 text-gray-700">Excellent practical advice. Can&apos;t wait to apply these techniques to my farm this season!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Share Modal */}
            {showShareModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-[40px] max-w-md w-full shadow-2xl p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-gray-900">Share Resource</h3>
                            <button 
                                onClick={() => setShowShareModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {/* Share Links */}
                            <button 
                                onClick={() => {
                                    window.open(`https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/knowledge-hub/${resourceId}`, '_blank');
                                }}
                                className="w-full flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-all"
                            >
                                <Facebook className="text-blue-600" size={24} />
                                <span className="font-bold text-gray-900">Share on Facebook</span>
                            </button>

                            <button 
                                onClick={() => {
                                    window.open(`https://twitter.com/intent/tweet?url=http://localhost:3000/knowledge-hub/${resourceId}&text=${resource.title}`, '_blank');
                                }}
                                className="w-full flex items-center gap-4 p-4 bg-sky-50 hover:bg-sky-100 rounded-2xl transition-all"
                            >
                                <Twitter className="text-sky-500" size={24} />
                                <span className="font-bold text-gray-900">Share on Twitter</span>
                            </button>

                            <button 
                                onClick={() => {
                                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:3000/knowledge-hub/${resourceId}`, '_blank');
                                }}
                                className="w-full flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-all"
                            >
                                <Linkedin className="text-blue-700" size={24} />
                                <span className="font-bold text-gray-900">Share on LinkedIn</span>
                            </button>

                            {/* Copy Link */}
                            <div className="pt-4 border-t border-gray-100">
                                <p className="text-sm font-bold text-gray-500 mb-3">Or copy the link:</p>
                                <div className="flex gap-2">
                                    <input 
                                        type="text" 
                                        value={`http://localhost:3000/knowledge-hub/${resourceId}`}
                                        readOnly
                                        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm text-gray-600 font-mono"
                                    />
                                    <button 
                                        onClick={() => {
                                            navigator.clipboard.writeText(`http://localhost:3000/knowledge-hub/${resourceId}`);
                                            alert('Link copied to clipboard!');
                                        }}
                                        className="px-4 py-3 bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-2xl transition-all"
                                    >
                                        <Copy size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Email Share */}
                            <div className="pt-4">
                                <button 
                                    onClick={() => {
                                        const subject = encodeURIComponent(`Check this resource: ${resource.title}`);
                                        const body = encodeURIComponent(`I found this helpful resource:\n\n${resource.title}\n\nhttp://localhost:3000/knowledge-hub/${resourceId}`);
                                        window.open(`mailto:?subject=${subject}&body=${body}`);
                                    }}
                                    className="w-full flex items-center gap-4 p-4 bg-orange-50 hover:bg-orange-100 rounded-2xl transition-all"
                                >
                                    <Mail className="text-orange-600" size={24} />
                                    <span className="font-bold text-gray-900">Share via Email</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

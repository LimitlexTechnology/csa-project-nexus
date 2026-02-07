import React from 'react';
import { notFound } from 'next/navigation';
import NewsDetailClient from './NewsDetailClient';

const newsArticles = {
    1: {
        id: 1,
        title: "CSA Hub Partners with Global Fund for Sustainable Farming",
        date: "October 28, 2025",
        category: "Agriculture",
        author: "Dr. Samuel Osei",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1200",
        summary: "A new initiative aims to provide financial support and technical expertise to smallholder farmers adopting climate-smart practices across West Africa.",
        content: `
            <h2>A Game-Changing Partnership</h2>
            <p>The CSA Hub has announced a groundbreaking partnership with the Global Fund for Climate-Smart Agriculture, marking a significant milestone in sustainable farming initiatives across West Africa. This collaboration brings together cutting-edge technology, expert knowledge, and financial resources to empower smallholder farmers.</p>
            
            <h3>What This Means for Farmers</h3>
            <p>Under this partnership, farmers will gain access to:</p>
            <ul>
                <li><strong>Financial Support:</strong> Grants and microfinance programs to help farmers transition to climate-smart practices</li>
                <li><strong>Technical Expertise:</strong> Direct mentoring from agricultural extension officers and climate scientists</li>
                <li><strong>Advanced Tools:</strong> Access to our platform's premium features at no cost for the first year</li>
                <li><strong>Market Linkages:</strong> Direct connections to buyers committed to sustainable farming practices</li>
            </ul>
            
            <h3>Expected Impact</h3>
            <p>This initiative is projected to reach over 50,000 farmers across Ghana, Côte d'Ivoire, and Burkina Faso within the first two years. Early pilots have shown a 35% increase in yield and 40% reduction in water usage among participating farmers.</p>
            
            <h3>How to Apply</h3>
            <p>Farmers interested in joining the program can apply through the CSA Hub platform or contact their local extension office. Priority will be given to women-led farms and youth initiatives in climate-vulnerable regions.</p>
        `,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tags: ["agriculture", "partnership", "sustainability", "funding"],
        relatedArticles: [2, 4]
    },
    2: {
        id: 2,
        title: "New Satellite Data for Soil Health Analysis Released",
        date: "October 25, 2025",
        category: "Technology",
        author: "Prof. Ama Mensah",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        summary: "Scientists have developed a high-resolution soil moisture mapping tool that helps farmers optimize irrigation and fertilizer application with 95% precision.",
        content: `
            <h2>Revolutionary Soil Mapping Technology</h2>
            <p>A team of researchers has unveiled a groundbreaking satellite-based tool that provides unprecedented insights into soil health. The technology uses advanced multispectral imaging to analyze soil moisture, nutrient content, and organic matter at sub-meter resolution.</p>
            
            <h3>How It Works</h3>
            <p>The system combines satellite imagery with machine learning algorithms to create detailed soil health maps for individual farm plots. Farmers can access these maps through the CSA Hub platform and receive real-time recommendations for:</p>
            <ul>
                <li>Optimal irrigation scheduling</li>
                <li>Precision fertilizer application</li>
                <li>Crop variety selection</li>
                <li>Disease risk prediction</li>
            </ul>
            
            <h3>Key Benefits</h3>
            <p><strong>Cost Savings:</strong> Reduce water usage by up to 30% and fertilizer costs by 25%</p>
            <p><strong>Yield Improvement:</strong> Increase productivity by 20-40% through precision management</p>
            <p><strong>Environmental Impact:</strong> Reduce agricultural carbon footprint significantly</p>
            
            <h3>Availability</h3>
            <p>The technology is now available to all farmers using the CSA Hub platform. Premium users get daily updates, while free users receive weekly data refreshes.</p>
        `,
        videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
        tags: ["technology", "satellite", "soil-health", "innovation"],
        relatedArticles: [1, 3]
    },
    3: {
        id: 3,
        title: "Regional Market Prices: Maize and Soybeans on the Rise",
        date: "October 22, 2025",
        category: "Market",
        author: "Mr. Kwame Asante",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200",
        summary: "Market analysis shows a significant increase in demand for sustainably grown maize, with prices reaching a 3-year high in regional trading hubs.",
        content: `
            <h2>Market Opportunities for Sustainable Farmers</h2>
            <p>Regional commodity markets are experiencing unprecedented growth in demand for climate-smart grown crops. Maize and soybean prices have surged to their highest levels in three years, creating exceptional opportunities for farmers practicing sustainable agriculture.</p>
            
            <h3>Market Analysis</h3>
            <p><strong>Maize:</strong> Currently trading at $450-500 per metric ton, up 22% from last year. Premium prices for organic and sustainably grown varieties are 15-20% higher.</p>
            <p><strong>Soybeans:</strong> Selling at $520-580 per metric ton, driven by increased demand from international food processors committed to sustainable sourcing.</p>
            
            <h3>Why This is Happening</h3>
            <ul>
                <li>Growing global demand for sustainable products</li>
                <li>Climate-related crop failures in competing regions</li>
                <li>Export markets prioritizing climate-smart agriculture</li>
                <li>Premium pricing for certified sustainable produce</li>
            </ul>
            
            <h3>How to Maximize Profits</h3>
            <p>Use the CSA Hub's Market Analytics tool to:</p>
            <ul>
                <li>Track price trends in real-time</li>
                <li>Connect directly with certified buyers</li>
                <li>Plan planting strategies based on market forecasts</li>
                <li>Get alerts for premium buying opportunities</li>
            </ul>
        `,
        videoUrl: "https://www.youtube.com/embed/2Jwv2uxXFxo",
        tags: ["market", "prices", "maize", "soybeans"],
        relatedArticles: [1, 5]
    },
    4: {
        id: 4,
        title: "Climate Resilience Workshop Scheduled for Next Month",
        date: "October 20, 2025",
        category: "Community",
        author: "Ms. Akosua Okonkwo",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=1200",
        summary: "Join experts for a 3-day virtual workshop on building climate-resilient farming systems using traditional knowledge and modern technology.",
        content: `
            <h2>Master Climate-Resilient Farming</h2>
            <p>CSA Hub and leading agricultural institutions are hosting an intensive 3-day virtual workshop designed to equip farmers with practical skills for building climate-resilient farming systems.</p>
            
            <h3>Workshop Details</h3>
            <p><strong>Dates:</strong> November 15-17, 2025</p>
            <p><strong>Format:</strong> Live interactive sessions with Q&A (9 AM - 12 PM EST daily)</p>
            <p><strong>Cost:</strong> FREE for all CSA Hub users</p>
            <p><strong>Languages:</strong> English, French, and local languages</p>
            
            <h3>What You'll Learn</h3>
            <ul>
                <li>Climate adaptation strategies for your specific region</li>
                <li>Integrating traditional knowledge with modern technology</li>
                <li>Water management and conservation techniques</li>
                <li>Diversification strategies for economic resilience</li>
                <li>Accessing climate finance and support programs</li>
            </ul>
            
            <h3>Featured Expert Speakers</h3>
            <p>Dr. James Mensah - Climate Scientist</p>
            <p>Ms. Fatima Hassan - Sustainable Agriculture Expert</p>
            <p>Mr. Kofi Osei - Successful CSA Practitioner</p>
            
            <h3>How to Register</h3>
            <p>Visit the CSA Hub Events section or click the registration button below. Spaces are limited to 5,000 participants to ensure quality interaction.</p>
        `,
        videoUrl: "https://www.youtube.com/embed/V-_O7gl3MGUU",
        tags: ["community", "workshop", "climate-resilience", "training"],
        relatedArticles: [1, 2]
    },
    5: {
        id: 5,
        title: "Drought-Resistant Crop Varieties Show Promising Results",
        date: "October 18, 2025",
        category: "Climate",
        author: "Dr. Aba Brew",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
        summary: "Recent field trials of new drought-resistant legume varieties have shown a 20% increase in yield compared to traditional seeds in arid regions.",
        content: `
            <h2>Breakthrough in Drought-Resistant Varieties</h2>
            <p>Agricultural research institutes have successfully developed new drought-resistant legume varieties that demonstrate exceptional performance in semi-arid regions. Two-year field trials across Ghana, Mali, and Niger show consistently superior results.</p>
            
            <h3>Trial Results</h3>
            <p><strong>Yield Increase:</strong> 20-28% higher yield compared to traditional varieties</p>
            <p><strong>Water Efficiency:</strong> 35% less water required for equivalent harvest</p>
            <p><strong>Farmer Satisfaction:</strong> 94% of trial farmers willing to adopt the new varieties</p>
            
            <h3>Varieties Available</h3>
            <ul>
                <li><strong>CSA-Pearl Cowpea:</strong> Mature in 75 days, excellent drought tolerance</li>
                <li><strong>Harmony Groundnut:</strong> 40% higher protein content, climate-adapted</li>
                <li><strong>Resilience Bean:</strong> Triple the water-use efficiency of standard beans</li>
            </ul>
            
            <h3>Where to Get Seeds</h3>
            <p>Seeds are available through CSA Hub's partner networks and certified agricultural suppliers. Farmers can order directly through the platform with 20% discount for bulk purchases.</p>
            
            <h3>Support Services</h3>
            <p>All seed purchases include:</p>
            <ul>
                <li>Planting guides and best practices</li>
                <li>Direct access to agronomy experts</li>
                <li>Weather monitoring for optimal planting</li>
                <li>Post-harvest guidance</li>
            </ul>
        `,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tags: ["climate", "seeds", "drought-resistant", "innovation"],
        relatedArticles: [2, 4]
    }
};

<<<<<<< Updated upstream
export default function NewsDetailPage() {
    const params = useParams();
    const articleId = parseInt(params.id as string);
    const article = newsArticles[articleId as keyof typeof newsArticles];

    const [likes, setLikes] = useState(2400);
    const [isLiked, setIsLiked] = useState(false);
    const [showCommentModal, setShowCommentModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [comments, setComments] = useState(284);
    const [commentText, setCommentText] = useState('');
    const [commentName, setCommentName] = useState('');
    const [commentEmail, setCommentEmail] = useState('');

    if (!article) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
                    <Link href="/news" className="text-[#2E7D32] font-bold">Back to News</Link>
                </div>
            </div>
        );
    }

    const relatedArticles = article.relatedArticles.map(id => newsArticles[id as keyof typeof newsArticles]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
                <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/news" className="flex items-center gap-2 text-gray-900 hover:text-[#2E7D32] transition-colors">
                        <ArrowLeft size={24} />
                        <span className="font-bold">News</span>
                    </Link>
                    <Link href="/dashboard">
                        <Logo />
                    </Link>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12">
                {/* Hero Image */}
                <div className="rounded-[40px] overflow-hidden mb-12 h-96 bg-gray-200">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>

                {/* Article Header */}
                <div className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">
                            {article.category}
                        </span>
                        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                            <Calendar size={16} />
                            {article.date}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                            <Clock size={16} />
                            {article.readTime}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">
                        {article.title}
                    </h1>

                    <div className="flex items-center gap-6 pb-8 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#2E7D32] to-[#81C784] rounded-full flex items-center justify-center text-white font-bold">
                                {article.author.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">{article.author}</p>
                                <p className="text-sm text-gray-500">Agricultural Expert</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none mb-16">
                    <div dangerouslySetInnerHTML={{ __html: article.content }} className="text-gray-700 leading-relaxed space-y-6">
                    </div>
                </div>

                {/* Embedded Video */}
                {article.videoUrl && (
                    <div className="my-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Learn More - Video</h3>
                        <div className="rounded-[40px] overflow-hidden bg-gray-200 aspect-video">
                            <iframe
                                width="100%"
                                height="600"
                                src={article.videoUrl}
                                title="Article Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-[40px]"
                            ></iframe>
                        </div>
                    </div>
                )}

                {/* Tags */}
                <div className="my-12 py-8 border-t border-b border-gray-200">
                    <div className="flex flex-wrap gap-3">
                        {article.tags.map((tag) => (
                            <Link
                                key={tag}
                                href={`/news?search=${tag}`}
                                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-bold text-gray-700 transition-colors"
                            >
                                #{tag}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Share and Interaction */}
                <div className="flex items-center gap-8 my-12 py-8 border-b border-gray-200">
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
                    <button 
                        onClick={() => setShowShareModal(true)}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#2E7D32] transition-colors font-bold"
                    >
                        <Share2 size={20} />
                        <span>Share</span>
                    </button>
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <div className="my-20">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedArticles.map((related) => (
                                <div
                                    key={related.id}
                                    className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 cursor-pointer"
                                    onClick={() => window.location.href = `/news/${related.id}`}
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
                                            {related.category}
                                        </p>
                                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#2E7D32] transition-colors line-clamp-2 mb-3">
                                            {related.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 font-medium">{related.readTime}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
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
                                <h4 className="text-lg font-bold text-gray-900 mb-6">Share Your Thoughts</h4>
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
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">JK</div>
                                        <div className="flex-1">
                                            <p className="font-bold text-gray-900">James Kofi</p>
                                            <p className="text-sm text-gray-500">2 hours ago</p>
                                            <p className="mt-2 text-gray-700">This partnership is a game-changer for us. The support has been incredible so far!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-gray-100 pb-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">AM</div>
                                        <div className="flex-1">
                                            <p className="font-bold text-gray-900">Ama Mensah</p>
                                            <p className="text-sm text-gray-500">5 hours ago</p>
                                            <p className="mt-2 text-gray-700">Excited to see CSA Hub making such a real impact on smallholder farms. Can&apos;t wait to join the program!</p>
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
                            <h3 className="text-2xl font-bold text-gray-900">Share Article</h3>
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
                                    window.open(`https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/news/${articleId}`, '_blank');
                                }}
                                className="w-full flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-all"
                            >
                                <Facebook className="text-blue-600" size={24} />
                                <span className="font-bold text-gray-900">Share on Facebook</span>
                            </button>

                            <button 
                                onClick={() => {
                                    window.open(`https://twitter.com/intent/tweet?url=http://localhost:3000/news/${articleId}&text=${article.title}`, '_blank');
                                }}
                                className="w-full flex items-center gap-4 p-4 bg-sky-50 hover:bg-sky-100 rounded-2xl transition-all"
                            >
                                <Twitter className="text-sky-500" size={24} />
                                <span className="font-bold text-gray-900">Share on Twitter</span>
                            </button>

                            <button 
                                onClick={() => {
                                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:3000/news/${articleId}`, '_blank');
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
                                        value={`http://localhost:3000/news/${articleId}`}
                                        readOnly
                                        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm text-gray-600 font-mono"
                                    />
                                    <button 
                                        onClick={() => {
                                            navigator.clipboard.writeText(`http://localhost:3000/news/${articleId}`);
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
                                        const subject = encodeURIComponent(`Check this out: ${article.title}`);
                                        const body = encodeURIComponent(`I found this interesting article:\n\n${article.title}\n\nhttp://localhost:3000/news/${articleId}`);
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
=======
export function generateStaticParams() {
  return Object.keys(newsArticles).map((id) => ({ id }));
}

export const dynamicParams = false;

export default function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const article = newsArticles[id as keyof typeof newsArticles];
  if (!article) return notFound();
  const relatedArticles = article.relatedArticles.map((rid) => newsArticles[rid as keyof typeof newsArticles]);
  return <NewsDetailClient article={article} related={relatedArticles} articleId={id} />;
>>>>>>> Stashed changes
}

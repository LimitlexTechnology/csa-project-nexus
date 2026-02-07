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
}

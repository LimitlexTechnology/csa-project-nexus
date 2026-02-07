import React from 'react';
import { notFound } from 'next/navigation';
import KnowledgeHubDetailClient from './KnowledgeHubDetailClient';

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

export function generateStaticParams() {
    return Object.keys(hubDetails).map((id) => ({ id }));
}

export const dynamicParams = false;

export default function Page({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const resource = hubDetails[id as keyof typeof hubDetails];
    if (!resource) return notFound();
    const related = resource.relatedResources.map((rid) => hubDetails[rid as keyof typeof hubDetails]);
    return <KnowledgeHubDetailClient resource={resource} related={related} resourceId={id} />;
}

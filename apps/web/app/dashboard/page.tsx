"use client";
import { useState } from "react";
import { Button } from "@repo/ui/button";
import { Typography } from "@repo/ui/typography";
import { Card } from "@repo/ui/card";
import { WeatherCard } from "@repo/ui/weather-card";
import { NewsFeed } from "@repo/ui/news-feed";
import { KnowledgeCard } from "@repo/ui/knowledge-card";
import { APP_NAME, WEATHER_DATA, NEWS_ITEMS, KNOWLEDGE_TIPS, ROLES } from "@repo/ui/constants";

export default function Dashboard() {
    const [role, setRole] = useState("Farmer");

    // Simple personalization logic
    const filteredNews = role === "Researcher"
        ? NEWS_ITEMS.filter(n => n.category === "Research" || n.category === "Policy")
        : NEWS_ITEMS;

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <header className="bg-white shadow-sm py-4 px-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <Typography variant="h2" className="text-green-800 m-0">
                    {APP_NAME} Dashboard
                </Typography>
                <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">View as:</span>
                    <div className="flex gap-2">
                        {ROLES.map((r) => (
                            <button
                                key={r}
                                onClick={() => setRole(r)}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${role === r ? "bg-green-600 text-white shadow-sm" : "text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {r}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Left Column: Weather & Quick Stats */}
                <div className="md:col-span-1 space-y-6">
                    <WeatherCard data={WEATHER_DATA} />

                    {role === "Farmer" && (
                        <Card className="p-4">
                            <Typography variant="h3">My Farm Status</Typography>
                            <div className="mt-4 space-y-2">
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-gray-600">Crop Health</span>
                                    <span className="text-green-600 font-bold">Good</span>
                                </div>
                                <div className="flex justify-between pt-2">
                                    <span className="text-gray-600">Tasks</span>
                                    <span className="text-orange-600 font-bold">3</span>
                                </div>
                            </div>
                        </Card>
                    )}

                    {role === "Extension Officer" && (
                        <Card className="p-4 bg-blue-50">
                            <Typography variant="h3">Officer Tools</Typography>
                            <Button title="Log Visit" className="mt-4" />
                            <Button title="Farmer Directory" variant="secondary" className="mt-2" />
                        </Card>
                    )}
                </div>

                {/* Middle Column: News Feed */}
                <div className="md:col-span-2 space-y-6">
                    <div className="flex justify-between items-end">
                        <Typography variant="h2">{role === "Researcher" ? "Research Updates" : "Latest Updates"}</Typography>
                        <Button title="View All" variant="secondary" onPress={() => { }} />
                    </div>
                    <NewsFeed items={filteredNews} />
                </div>

                {/* Right Column: Knowledge Hub Preview */}
                <div className="md:col-span-1 space-y-4">
                    <Typography variant="h3">Knowledge Hub</Typography>
                    {KNOWLEDGE_TIPS.slice(0, 3).map((tip) => (
                        <KnowledgeCard key={tip.id} item={tip} />
                    ))}
                </div>
            </div>
        </main>
    );
}

import { Button } from "@repo/ui/button";
import { Typography } from "@repo/ui/typography";
import { Card } from "@repo/ui/card";
import { WeatherCard } from "@repo/ui/weather-card";
import { NewsFeed } from "@repo/ui/news-feed";
import { APP_NAME, WEATHER_DATA, NEWS_ITEMS } from "@repo/ui/constants";

export default function Dashboard() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <header className="bg-white shadow-sm py-4 px-6 mb-8 flex justify-between items-center">
                <Typography variant="h2" className="text-green-800 m-0">
                    {APP_NAME} Dashboard
                </Typography>
                <div className="flex gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Farmer Mode</span>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: Weather & Quick Stats */}
                <div className="space-y-6">
                    <WeatherCard data={WEATHER_DATA} />

                    <Card className="p-4">
                        <Typography variant="h3">My Farm Status</Typography>
                        <div className="mt-4 space-y-2">
                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-600">Crop Health</span>
                                <span className="text-green-600 font-bold">Good</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-600">Next Harvest</span>
                                <span className="text-gray-900">14 Days</span>
                            </div>
                            <div className="flex justify-between pt-2">
                                <span className="text-gray-600">Tasks Pending</span>
                                <span className="text-orange-600 font-bold">3</span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Middle Column: News Feed */}
                <div className="md:col-span-2 space-y-6">
                    <div className="flex justify-between items-end">
                        <Typography variant="h2">Latest Updates</Typography>
                        <Button title="View All" variant="secondary" onPress={() => { }} />
                    </div>
                    <NewsFeed items={NEWS_ITEMS} />
                </div>
            </div>
        </main>
    );
}

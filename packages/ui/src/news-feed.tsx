/// <reference types="nativewind/types" />
"use client";
import { View } from "react-native";
import { Card } from "./card";
import { Typography } from "./typography";

interface NewsItem {
    id: string;
    title: string;
    date: string;
    category: string;
}

interface NewsFeedProps {
    items: NewsItem[];
}

export const NewsFeed = ({ items }: NewsFeedProps) => {
    return (
        <View className="gap-4">
            {items.map((item) => (
                <Card key={item.id} variant="outlined" className="bg-white dark:bg-gray-800">
                    <View className="flex-row justify-between mb-1">
                        <Typography variant="caption" className="text-green-600 font-bold uppercase">
                            {item.category}
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                            {item.date}
                        </Typography>
                    </View>
                    <Typography variant="h3" className="text-lg leading-6">
                        {item.title}
                    </Typography>
                </Card>
            ))}
        </View>
    );
};

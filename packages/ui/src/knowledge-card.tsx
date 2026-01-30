/// <reference types="nativewind/types" />
"use client";
import { Card } from "./card";
import { Typography } from "./typography";

interface KnowledgeItem {
    id: string;
    title: string;
    excerpt: string;
    category: string;
}

interface KnowledgeCardProps {
    item: KnowledgeItem;
}

export const KnowledgeCard = ({ item }: KnowledgeCardProps) => {
    return (
        <Card className="bg-green-50 dark:bg-green-900 border-l-4 border-l-green-600 mb-4">
            <Typography variant="caption" className="text-green-700 font-bold uppercase mb-1">
                {item.category}
            </Typography>
            <Typography variant="h3" className="text-lg font-semibold mb-2">
                {item.title}
            </Typography>
            <Typography variant="body" className="text-gray-700 text-sm">
                {item.excerpt}
            </Typography>
        </Card>
    );
};

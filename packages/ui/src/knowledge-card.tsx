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
        <Card className="bg-mist dark:bg-midnight/30 border-l-4 border-l-midnight mb-4">
            <Typography variant="caption" className="text-midnight dark:text-glacier font-bold uppercase mb-1">
                {item.category}
            </Typography>
            <Typography variant="h3" className="text-lg font-semibold mb-2">
                {item.title}
            </Typography>
            <Typography variant="body" className="text-secondary-text dark:text-mist text-sm">
                {item.excerpt}
            </Typography>
        </Card>
    );
};

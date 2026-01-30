/// <reference types="nativewind/types" />
"use client";
import { View } from "react-native";
import { Card } from "./card";
import { Typography } from "./typography";

interface WeatherProps {
    data: {
        temp: string;
        condition: string;
        location: string;
        humidity: string;
        wind: string;
    };
}

export const WeatherCard = ({ data }: WeatherProps) => {
    return (
        <Card className="bg-glacier border-none">
            <View className="flex-row justify-between items-start mb-4">
                <View>
                    <Typography variant="h2" className="text-midnight">
                        {data.location}
                    </Typography>
                    <Typography variant="body" className="text-midnight/70">
                        {data.condition}
                    </Typography>
                </View>
                <Typography variant="h1" className="text-midnight text-5xl">
                    {data.temp}
                </Typography>
            </View>
            <View className="flex-row gap-4 bg-midnight/10 p-2 rounded-lg self-start">
                <Typography variant="caption" className="text-midnight">
                    💧 {data.humidity}
                </Typography>
                <Typography variant="caption" className="text-midnight">
                    💨 {data.wind}
                </Typography>
            </View>
        </Card>
    );
};

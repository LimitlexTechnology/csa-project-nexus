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
        <Card className="bg-blue-500 border-none">
            <View className="flex-row justify-between items-start mb-4">
                <View>
                    <Typography variant="h2" className="text-white">
                        {data.location}
                    </Typography>
                    <Typography variant="body" className="text-blue-100">
                        {data.condition}
                    </Typography>
                </View>
                <Typography variant="h1" className="text-white text-5xl">
                    {data.temp}
                </Typography>
            </View>
            <View className="flex-row gap-4 bg-blue-600/30 p-2 rounded-lg self-start">
                <Typography variant="caption" className="text-blue-50">
                    💧 {data.humidity}
                </Typography>
                <Typography variant="caption" className="text-blue-50">
                    💨 {data.wind}
                </Typography>
            </View>
        </Card>
    );
};

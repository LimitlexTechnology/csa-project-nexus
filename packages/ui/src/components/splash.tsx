'use client';
import React from 'react';
import { Typography, Button, Card } from '@repo/ui';

export const Splash = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6">
            <Card className="max-w-lg w-full">
                <div className="mb-8 text-center">
                    <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">C1</span>
                    </div>
                    <Typography variant="h1">CSA ONE</Typography>
                    <Typography variant="h3" className="text-secondary font-medium">Climate-Smart Agriculture Ghana</Typography>
                </div>

                <Typography variant="body" className="text-center mb-10 leading-relaxed">
                    The unified platform for sustainable farming. Access weather alerts, agricultural guides, and extension services in one place.
                </Typography>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100 items-center flex flex-col">
                        <span className="text-2xl mb-1">🌦️</span>
                        <Typography variant="caption" className="font-semibold text-text">Weather Alerts</Typography>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg border border-amber-100 items-center flex flex-col">
                        <span className="text-2xl mb-1">📚</span>
                        <Typography variant="caption" className="font-semibold text-text">Knowledge Hub</Typography>
                    </div>
                </div>

                <Button
                    title="Continue to Platform"
                    className="w-full"
                    onPress={() => console.log('Continue clicked')}
                />

                <Typography variant="caption" className="text-center mt-6">
                    © 2026 CSA ONE Platforms Ghana
                </Typography>
            </Card>
        </div>
    );
};

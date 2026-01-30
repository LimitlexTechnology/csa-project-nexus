'use client';
import { Typography, Button, Card } from '@repo/ui';

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
            <Card className="max-w-md w-full text-center">
                <Typography variant="h1">Welcome to CSA ONE</Typography>
                <Typography variant="body" className="mb-6">
                    This is the home page after language selection.
                </Typography>

                <div className="flex flex-col gap-4">
                    <Button
                        title="Go to Landing Page"
                        onPress={() => window.location.href = '/'}
                    />
                </div>
            </Card>
        </main>
    );
}

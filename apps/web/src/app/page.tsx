'use client';
import { Typography, Button, Card } from '@repo/ui';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
            <Card className="max-w-md w-full text-center">
                <Typography variant="h1">CSA ONE</Typography>
                <Typography variant="body" className="mb-6">
                    Climate-Smart Agriculture Unified Platform for Ghana.
                    Empowering farmers with digital solutions.
                </Typography>

                <div className="flex flex-col gap-4">
                    <Button
                        title="Get Started"
                        onPress={() => alert('Welcome to CSA ONE Web!')}
                    />
                    <Button
                        title="Learn More"
                        variant="outline"
                        onPress={() => alert('Knowledge Hub coming soon.')}
                    />
                </div>
            </Card>
        </main>
    );
}

'use client';
import { Typography, Card, Button } from '@repo/ui';
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background">
            <Card className="max-w-md w-full text-center">
                <Typography variant="h1">404</Typography>
                <Typography variant="body" className="mb-6">
                    The page you are looking for does not exist.
                </Typography>
                <Link href="/">
                    <Button title="Go Home" onPress={() => { }} />
                </Link>
            </Card>
        </main>
    );
}

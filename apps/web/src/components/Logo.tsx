import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Logo = ({ className = "", iconOnly = false }: { className?: string, iconOnly?: boolean }) => {
    const content = (
        <div className={`relative flex items-center justify-center ${iconOnly ? 'w-10 h-10' : 'w-32 h-10 md:w-48 md:h-16'}`}>
            <Image
                src="/logo.png"
                alt="CSA Hub Logo"
                fill
                className="object-contain"
                priority
            />
        </div>
    );

    if (iconOnly) {
        return <div className={`flex items-center ${className}`}>{content}</div>;
    }

    return (
        <Link href="/landing" prefetch={false} className={`flex items-center hover:opacity-80 transition-opacity ${className}`}>
            {content}
        </Link>
    );
};

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Logo = ({ className = "", iconOnly = false }: { className?: string, iconOnly?: boolean }) => {
    const content = (
        <div className={`flex items-center justify-center ${iconOnly ? '' : ''}`}>
            <Image
                src="/logo.png"
                alt="CSA Hub Logo"
                width={iconOnly ? 40 : 160}
                height={iconOnly ? 40 : 52}
                className="object-contain"
                priority
                unoptimized
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

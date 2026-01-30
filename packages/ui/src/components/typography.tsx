'use client';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import type { TextProps, TouchableOpacityProps, ViewProps } from 'react-native';
import { styled } from 'nativewind';

const StyledText = styled(Text);

interface TypographyProps extends TextProps {
    variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
    className?: string;
    children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
    variant = 'body',
    className = '',
    children,
    ...props
}) => {
    const variantStyles = {
        h1: 'text-3xl font-bold text-text mb-4',
        h2: 'text-2xl font-semibold text-text mb-3',
        h3: 'text-xl font-medium text-text mb-2',
        body: 'text-base text-text',
        caption: 'text-sm text-gray-500',
    };

    return (
        <StyledText
            className={`${variantStyles[variant]} ${className} `}
            {...props}
        >
            {children}
        </StyledText>
    );
};

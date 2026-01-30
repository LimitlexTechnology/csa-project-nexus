'use client';
import React from 'react';
import { View } from 'react-native';
import type { ViewProps } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);

interface CardProps extends ViewProps {
    className?: string;
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = '', children, ...props }) => {
    return (
        <StyledView
            className={`bg-white rounded-xl p-4 shadow-sm border border-gray-100 ${className}`}
            {...props}
        >
            {children}
        </StyledView>
    );
};

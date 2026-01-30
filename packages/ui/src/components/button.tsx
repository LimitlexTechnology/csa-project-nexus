'use client';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const containerStyles = {
        primary: 'bg-primary py-3 px-6 rounded-lg items-center justify-center',
        secondary: 'bg-secondary py-3 px-6 rounded-lg items-center justify-center',
        outline: 'border border-primary py-3 px-6 rounded-lg items-center justify-center',
    };

    const textStyles = {
        primary: 'text-white font-semibold text-lg',
        secondary: 'text-text font-semibold text-lg',
        outline: 'text-primary font-semibold text-lg',
    };

    return (
        <StyledTouchableOpacity
            className={`${containerStyles[variant]} ${className}`}
            activeOpacity={0.7}
            {...props}
        >
            <StyledText className={textStyles[variant]}>
                {title}
            </StyledText>
        </StyledTouchableOpacity>
    );
};

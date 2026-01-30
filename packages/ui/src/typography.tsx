/// <reference types="nativewind/types" />
"use client";
import { Text as RNText, type TextProps as RNTextProps } from "react-native";
import { cssInterop } from "react-native-css-interop";

cssInterop(RNText, { className: "style" });



interface TypographyProps extends RNTextProps {
    variant?: "h1" | "h2" | "h3" | "body" | "caption";
    className?: string;
}

export const Typography = ({
    children,
    variant = "body",
    className = "",
    ...props
}: TypographyProps) => {
    const baseStyles = "text-gray-900 dark:text-gray-100";

    const variants = {
        h1: "text-4xl font-bold tracking-tight mb-4",
        h2: "text-2xl font-semibold mb-3",
        h3: "text-xl font-medium mb-2",
        body: "text-base leading-relaxed mb-2",
        caption: "text-sm text-gray-500"
    };

    return (
        <RNText
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </RNText>
    );
};

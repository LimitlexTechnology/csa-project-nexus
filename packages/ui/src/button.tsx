"use client";
import { ReactNode } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

interface ButtonProps {
  children?: ReactNode;
  className?: string; // Standard tailwind prop
  onPress?: () => void;
  title?: string;
  variant?: "primary" | "secondary";
}

/**
 * Universal Button component using React Native primitives.
 * Works on Web (via react-native-web) and Mobile.
 */
export const Button = ({ children, title, onPress, variant = "primary" }: ButtonProps) => {
  return (
    <Pressable
      className={`p-4 rounded-lg items-center justify-center ${variant === "primary" ? "bg-green-700 active:bg-green-800" : "bg-yellow-600 active:bg-yellow-700"
        }`}
      onPress={onPress}
      style={({ pressed }) => [
        // Fallback or additional styles if needed
        pressed ? { opacity: 0.9 } : {}
      ]}
    >
      <Text className="text-white font-bold text-lg">{title || children}</Text>
    </Pressable>
  );
};

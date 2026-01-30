/// <reference types="nativewind/types" />
"use client";
import { View, type ViewProps } from "react-native";
import { cssInterop } from "react-native-css-interop";

cssInterop(View, { className: "style" });




interface CardProps extends ViewProps {
  className?: string;
  variant?: "elevated" | "outlined" | "flat";
}

export const Card = ({
  children,
  className = "",
  variant = "elevated",
  ...props
}: CardProps) => {
  const variants = {
    elevated: "bg-white dark:bg-gray-800 shadow-md",
    outlined: "bg-transparent border border-gray-200 dark:border-gray-700",
    flat: "bg-gray-50 dark:bg-gray-900"
  };

  return (
    <View
      className={`p-4 rounded-xl ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};

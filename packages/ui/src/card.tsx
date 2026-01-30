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
    elevated: "bg-white dark:bg-midnight shadow-md",
    outlined: "bg-transparent border border-mist dark:border-midnight/50",
    flat: "bg-mist dark:bg-midnight/30"
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

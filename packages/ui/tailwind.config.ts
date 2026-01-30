import type { Config } from "tailwindcss";
// @ts-expect-error - NativeWind preset types are not correctly exported in v4
import nativewind from "nativewind/preset";

const config: Config = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand Colors
                midnight: "#0F3D3E",
                glacier: "#4FD1C5",
                // Accents
                solar: "#F6AD55",
                coral: "#E53E3E",
                // Neutrals
                cloud: "#F9FAFB",
                mist: "#EDF2F7",
                // Text
                "primary-text": "#1A202C",
                "secondary-text": "#4A5568",
                "muted-text": "#718096",
                // Mapping for convenience
                primary: "#0F3D3E", // midnight
                secondary: "#4FD1C5", // glacier
                background: "#F9FAFB", // cloud
            },
        },
    },
    plugins: [],
    presets: [nativewind],
};

export default config;

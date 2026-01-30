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
                primary: "#166534",
                secondary: "#ca8a04",
                background: "#f0fdf4",
            },
        },
    },
    plugins: [],
    presets: [nativewind],
};

export default config;

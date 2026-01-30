import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#166534", // Green-800 mostly
                secondary: "#ca8a04", // Yellow-600
                background: "#f0fdf4", // Green-50
            },
        },
    },
    plugins: [],
};

export default config;

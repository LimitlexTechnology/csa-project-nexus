import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
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
    important: true,
};

export default config;

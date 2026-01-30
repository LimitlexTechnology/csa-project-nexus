// @ts-check

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
        "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
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
                // Mapping
                primary: "#0F3D3E",
                secondary: "#4FD1C5",
                background: "#F9FAFB",
            },
        },
    },
    plugins: [],
};

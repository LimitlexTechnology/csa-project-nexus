/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#2E7D32", // Forest Green
                secondary: "#8BC34A", // Light Green
                accent: "#FFA000", // Amber / Harvest Gold
                background: "#F1F8E9", // Very Light Green / Off-white
                text: "#1B5E20", // Dark Green
            }
        },
    },
    plugins: [],
};

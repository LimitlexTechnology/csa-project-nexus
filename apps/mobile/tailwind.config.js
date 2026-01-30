// @ts-check

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
        "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
    ],
    // Presets can be tricky with JS/TS mix, importing directly or via require if compiled
    // Simplest is to copy or require if allowJS
    // For now using direct definition or simple require if module resolution works
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
};

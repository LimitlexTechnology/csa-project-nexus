import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2E7D32',
                secondary: '#8BC34A',
                accent: '#FFA000',
                background: '#F1F8E9',
                text: '#1B5E20',
            },
        },
    },
    plugins: [],
};

export default config;

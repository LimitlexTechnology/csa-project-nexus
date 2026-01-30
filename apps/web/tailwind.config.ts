import type { Config } from "tailwindcss";
import sharedConfig from "@repo/ui/tailwind.config";

const config: Config = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [sharedConfig as any],
    theme: {
        extend: {
            backgroundImage: {
                "primary-gradient": "linear-gradient(135deg, #0F3D3E 0%, #4FD1C5 100%)",
            },
        },
    },
    important: true,
};

export default config;

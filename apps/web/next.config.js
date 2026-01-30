/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@repo/ui", "nativewind", "react-native-css-interop"],
    webpack: (config) => {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            "react-native$": "react-native-web",
        };
        config.resolve.extensions = [
            ".web.tsx",
            ".web.ts",
            ".tsx",
            ".ts",
            ".web.js",
            ".js",
            ...config.resolve.extensions,
        ];
        return config;
    },
};

export default nextConfig;

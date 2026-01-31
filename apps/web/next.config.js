/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['react-native', 'react-native-web', '@repo/ui', 'nativewind'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            // Transform all direct references to 'react-native' to 'react-native-web'
            'react-native$': 'react-native-web',
        };
        config.resolve.extensions = [
            '.web.js',
            '.web.jsx',
            '.web.ts',
            '.web.tsx',
            ...config.resolve.extensions,
        ];
        return config;
    },
};

export default nextConfig;

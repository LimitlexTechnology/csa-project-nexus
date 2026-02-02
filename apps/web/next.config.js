import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['react-native', 'react-native-web', '@repo/ui', 'nativewind'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
        ],
    },
    webpack: (config) => {
        const uiSrc = path.resolve(process.cwd(), '../../packages/ui/src');
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            'react-native$': 'react-native-web',
            '@repo/ui': uiSrc,
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

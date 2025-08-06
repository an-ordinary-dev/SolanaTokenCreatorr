/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        ignoreBuildErrors: true,
    },
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/:path*',
                destination: 'https://tokenry.tools/solana-token-creator',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;

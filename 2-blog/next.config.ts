import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        useCache: true,
        cacheLife: {
            seconds: {
                stale: 0,
                revalidate: 10,
                expire: 10,
            },
        },
    },
};

export default nextConfig;

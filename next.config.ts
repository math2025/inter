// next.config.ts

import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  webpack: (config: Configuration, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...(config.resolve || {}),
        fallback: {
          ...(config.resolve?.fallback || {}),
          canvas: false,
          fs: false,
          path: false,
        },
      };
    }
    return config;
  },
};

export default nextConfig;

// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Enable ESLint during production builds
    ignoreDuringBuilds: false,
    // Specify directories to lint
    dirs: ['app', 'pages', 'components', 'lib', 'src']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dl0.creation.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hips.hearstapps.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
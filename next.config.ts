import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Option 1: Simple domains configuration (legacy)
    domains: ['dl0.creation.com'],
    
    // Option 2: Recommended - remotePatterns (more secure and flexible)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dl0.creation.com',
        port: '',
        pathname: '/**', // Allows all paths under this domain
      },
      // You can add more domains as needed
      {
        protocol: 'https',
        hostname: 'hips.hearstapps.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

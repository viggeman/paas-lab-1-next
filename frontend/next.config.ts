import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*', // Proxy till backend under utveckling
      },
    ];
  },
  output: 'standalone', // Bygg för Render
};

export default nextConfig;

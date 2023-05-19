/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev2.growthbydesign.org',
        port: '',
        pathname: 'wp-content/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;

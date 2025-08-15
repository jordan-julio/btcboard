import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/i18n.js'); 

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper locale handling
  trailingSlash: false,
  images: {
    remotePatterns: [{
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },],
    formats: ['image/webp', 'image/avif'],
  },
};

export default withNextIntl(nextConfig);
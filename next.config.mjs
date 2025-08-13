import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/i18n.js'); 

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper locale handling
  trailingSlash: false,
  images: {
    remotePatterns: [new URL('https://images.unsplash.com/**')],
  },
};

export default withNextIntl(nextConfig);
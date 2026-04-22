/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    localPatterns: [
      { pathname: '/**' },
    ],
  },
};

export default nextConfig;

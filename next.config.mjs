/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/tasks',
        destination: '/tasks/index.html',
      },
    ]
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.gravatar.com',
      'lh3.googleusercontent.com',
      'lh4.googleusercontent.com',
      'i.stack.imgur.com',
    ],
  },
};

module.exports = nextConfig;

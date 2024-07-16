/** @type {import('next').NextConfig} */
const { i18n } = require('./next.config.js');

const nextConfig = {
  images: {
    domains: ["i.postimg.cc"],
  },
  i18n,
  reactStrictMode: true
};

export default nextConfig;

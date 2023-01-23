/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com"],
    loader: "akamai",
    unoptimized: true,
    path: '',
  },
  basePath: '',
  assetPrefix: '',
};

module.exports = withPWA(nextConfig);

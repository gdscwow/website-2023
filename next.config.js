/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    unoptimized: true,
    path: ""
  },
  basePath: "",
  assetPrefix: "",
}

module.exports = nextConfig

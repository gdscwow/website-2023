/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['/'],
    loader: 'akamai',
    unoptimized: true,
    path: ""
  },
  basePath: "",
  assetPrefix: "",
}

module.exports = nextConfig

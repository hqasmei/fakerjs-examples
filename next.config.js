/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cloudflare-ipfs.com"],
  },
}

module.exports = nextConfig

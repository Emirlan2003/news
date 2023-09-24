/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['media.guim.co.uk', 'static.guim.co.uk', 'via.placeholder.com'],
  },
}

module.exports = nextConfig

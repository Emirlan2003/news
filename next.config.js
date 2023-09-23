/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL,
  },
}

module.exports = nextConfig

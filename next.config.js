const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/about',
      },
      {
        source: '/contact',
        destination: '/about',
      },
      {
        source: '/projects/computer-vision',
        destination: '/projects',
      },
      {
        source: '/projects/live-visuals',
        destination: '/projects',
      },
      {
        source: '/projects/plusign',
        destination: '/projects',
      },
      {
        source: '/projects/rga',
        destination: '/projects',
      },
    ]
  },
}

module.exports = nextConfig

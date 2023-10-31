/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'storage.googleapis.com',
          port: '',
          pathname: '/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
        },
      ],
    },
  }
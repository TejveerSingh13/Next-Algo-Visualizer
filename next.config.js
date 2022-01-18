const withImages = require('next-images')
module.exports = withImages()
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['img.icons8.com'],
  },
}

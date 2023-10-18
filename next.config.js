/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  pageExtensions: ['jsx', 'js'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import "@/public/styles/abstracts/_variables.scss";
      @import "@/public/styles/abstracts/_mixins.scss";
    `, // prependData 옵션 추가
  },
}

module.exports = nextConfig

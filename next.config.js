/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  pageExtensions: ['jsx', 'js'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import "@/app/styles/abstracts/_variables.scss";
      @import "@/app/styles/abstracts/_mixins.scss";
    `, // prependData 옵션 추가
  },
  webpack : (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
}

module.exports = nextConfig

import type { NextConfig } from "next";
const path = require('path');

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'src/shared/styles')], // Указываем только нужную папку
    api: 'modern',
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    domains: ['media.dodostatic.net'],
  },
  webpack(config) {
    const stylesPath = path.resolve(__dirname, 'src/shared/styles');
    console.log('Resolved @styles path:', stylesPath); // Отладка пути
    config.resolve.alias['@styles'] = stylesPath;
    config.resolve.extensions.push('.scss'); // Поддержка .scss файлов
    return config;
  },
};

export default nextConfig;
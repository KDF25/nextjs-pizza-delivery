import withPWA from 'next-pwa';
const path = require('path');

const nextConfig: any = { // Используем any для обхода ошибок типов
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'src/shared/styles')],
    api: 'modern',
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    domains: ['media.dodostatic.net'],
  },
  webpack(config: any) {
    const stylesPath = path.resolve(__dirname, 'src/shared/styles');
    console.log('Resolved @styles path:', stylesPath);
    config.resolve.alias['@styles'] = stylesPath;
    config.resolve.extensions.push('.scss');
    return config;
  },
};

export default withPWA({
  dest: 'public',
  disable: false,
  register: true,
  skipWaiting: true,
  clientsClaim: true,
})(nextConfig);
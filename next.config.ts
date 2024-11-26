import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    api: 'modern', 
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    domains: ['media.dodostatic.net'], 
  },
};

export default nextConfig;

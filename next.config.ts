import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  env: {
    API_URL: "https://mtkailashimalayakitchen.de/laravel/public/api/",
    BACKEND_URL: 'https://mtkailashimalayakitchen.de/laravel/storage/app/public/',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mtkailashimalayakitchen.de',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;

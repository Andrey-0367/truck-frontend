import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_YMAPS_API_KEY: process.env.YMAPS_API_KEY,
  },
};

export default nextConfig;

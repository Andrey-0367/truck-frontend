const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_YMAPS_API_KEY: process.env.YMAPS_API_KEY,
  },
}

export default nextConfig;

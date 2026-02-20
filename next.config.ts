import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,  // ⭐ REQUIRED for static export (CloudFront/S3)
  },
};

export default nextConfig;

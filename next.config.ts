import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },

  allowedDevOrigins: ["192.168.1.14"],

  reactStrictMode: true,

  experimental: {
    optimizePackageImports: ["react", "react-dom"],
  },

  // Turbopack is the default bundler in Next.js 16.
  // Empty config explicitly opts in and silences the "no turbopack config" error.
  turbopack: {},
};

export default nextConfig;

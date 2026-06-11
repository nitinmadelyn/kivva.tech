import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel runs the full Next.js runtime — no static export needed.
  // Server Actions, API routes, and image optimisation all work out of the box.

  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },

  // Allow local network devices (phones, tablets) to access the dev server
  allowedDevOrigins: ["192.168.1.14"],

  // Catch subtle bugs in development
  reactStrictMode: true,

  // Reduce bundle size by tree-shaking heavy packages at build time
  experimental: {
    optimizePackageImports: ["react", "react-dom"],
  },
};

export default nextConfig;

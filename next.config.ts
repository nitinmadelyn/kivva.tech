import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — generates plain HTML/CSS/JS into /dist for S3 + CloudFront
  output: "export",

  // Output build to /dist instead of /.next
  distDir: "dist",

  // Trailing slash so S3 serves index.html correctly for every route
  // e.g. /about → /about/index.html
  trailingSlash: true,

  // next/image requires a Node.js server for on-the-fly optimisation.
  // With static export there is no server, so we disable it.
  // CloudFront + S3 will serve the original files; add a Lambda@Edge or
  // use a CDN image service (e.g. Cloudinary) if you need optimisation later.
  images: {
    unoptimized: true,
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

  // NOTE: custom `headers()` and `compress` are ignored in static export mode.
  // Set these in CloudFront response headers policies instead:
  //   X-Content-Type-Options, X-Frame-Options, Strict-Transport-Security, etc.
  // Cache-Control for static assets is best configured at the CloudFront
  // behaviour level (e.g. immutable for /_next/static/*, 1yr for /public/*).
};

export default nextConfig;

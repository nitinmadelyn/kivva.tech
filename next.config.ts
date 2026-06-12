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
    // Let SWC read the package.json browserslist to skip already-native transforms
    browsersListForSwc: true,
  },

  /**
   * Webpack: strip the Next.js legacy polyfill bundle.
   * The browserslist targets Chrome 107+, Firefox 104+, Safari 16+, Edge 107+.
   * Every polyfill in @next/polyfill-module (Array.at, Object.hasOwn, etc.)
   * is already native in all those browsers — shipping them wastes ~14 KiB.
   */
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // Replace the polyfill entry with an empty module
        "@next/polyfill-module": false,
        "next/dist/client/polyfills": false,
      };
    }
    return config;
  },
};

export default nextConfig;

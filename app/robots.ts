/**
 * robots.txt — Next.js generates this file at /robots.txt.
 * Tells crawlers which routes to index and where the sitemap lives.
 */

import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // Allow all routes by default
        allow: "/",
        // Block API routes and internal Next.js paths from indexing
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}

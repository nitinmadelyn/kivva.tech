/**
 * Root layout — wraps every page on the site.
 *
 * Responsibilities:
 *  - Load and apply the Geist font via next/font (zero layout shift, no CLS)
 *  - Set the default <head> metadata using our centralised helper
 *  - Inject JSON-LD structured data for Google rich results
 *  - Provide the <html> and <body> shell every page inherits
 */

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { buildMetadata, buildOrganizationJsonLd, buildWebSiteJsonLd } from "@/lib/metadata";

// ─── Font ─────────────────────────────────────────────────────────────────────
// next/font downloads Geist at build time — no runtime network request, no FOUT.
// "display: swap" is applied automatically so text stays visible while loading.
const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  // Preload only the weights we actually use to reduce font payload size
  weight: ["400", "500"],
  display: "swap",
});

// ─── Default metadata ─────────────────────────────────────────────────────────
// Individual pages can override this by exporting their own `metadata` object.
export const metadata: Metadata = buildMetadata();

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      // Font CSS variable available to all Tailwind utilities via --font-sans
      className={`${geist.variable}`}
    >
      <head>
        {/*
         * JSON-LD structured data — injected into <head> as a script tag.
         * Google uses this to understand the business entity and to surface
         * rich results (sitelinks, knowledge panel, search suggestions).
         *
         * We render two schemas:
         *  1. Organization — identifies the company, contact, social links
         *  2. WebSite      — enables the sitelinks search box in Google results
         */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildOrganizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildWebSiteJsonLd()),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface-800 text-white antialiased">
        {children}
      </body>
    </html>
  );
}

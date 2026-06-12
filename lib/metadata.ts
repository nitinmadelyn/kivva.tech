/**
 * Centralised SEO metadata helpers.
 *
 * Usage:
 *   import { buildMetadata } from "@/lib/metadata";
 *   export const metadata = buildMetadata({ title: "Hire Developers" });
 */

import type { Metadata } from "next";
import { SITE } from "./constants";

interface MetadataOverrides {
  title?: string;
  description?: string;
  path?: string;           // e.g. "/hire-developers"
  keywords?: string[];
  image?: string;          // absolute URL or /public-relative path — overrides og-default.png
  ogType?: "website" | "article";
  publishedTime?: string;  // ISO date — used when ogType === "article"
  authors?: string[];      // used when ogType === "article"
}

// ─── Default SEO values ───────────────────────────────────────────────────────

const DEFAULT_TITLE = "KivvaTech — AI Engineering & Enterprise Software Company";
const DEFAULT_DESCRIPTION =
  "Enterprise AI solutions, custom AI development, and enterprise software engineering. Trusted by 360+ companies across 15+ countries since 2006. Pre-vetted teams. Onboard in 5 days.";
const DEFAULT_KEYWORDS = [
  "AI engineering company",
  "hire AI engineers",
  "enterprise software development",
  "custom AI development",
  "hire developers",
  "offshore development team",
  "cloud architecture",
  "DevOps engineers",
  "full stack developers",
  "Salesforce implementation",
  "ML engineers for hire",
  "RAG pipeline development",
  "agentic AI",
  "LLM application development",
];

// ─── Main factory function ────────────────────────────────────────────────────

const DEFAULT_OG_IMAGE = `${SITE.url}/og-default.png`;

export function buildMetadata(overrides: MetadataOverrides = {}): Metadata {
  const title = overrides.title
    ? `${overrides.title} | KivvaTech`
    : DEFAULT_TITLE;

  const description = overrides.description ?? DEFAULT_DESCRIPTION;
  const canonicalUrl = `${SITE.url}${overrides.path ?? ""}`;
  const keywords = overrides.keywords
    ? [...DEFAULT_KEYWORDS, ...overrides.keywords]
    : DEFAULT_KEYWORDS;

  // Resolve OG image — absolute URL wins, /public path gets the site origin prepended
  const rawImage = overrides.image ?? DEFAULT_OG_IMAGE;
  const ogImageUrl = rawImage.startsWith("http") ? rawImage : `${SITE.url}${rawImage}`;
  const ogImageAlt = overrides.title
    ? `${overrides.title} | KivvaTech`
    : "KivvaTech — AI Engineering & Enterprise Software";

  const ogType = overrides.ogType ?? "website";

  return {
    // ── Core ──────────────────────────────────────────────────────────────────
    title,
    description,
    keywords,
    authors: overrides.authors
      ? overrides.authors.map((name) => ({ name }))
      : [{ name: "KivvaTech", url: SITE.url }],
    creator: "KivvaTech",
    publisher: "KivvaTech",

    // ── Canonical ─────────────────────────────────────────────────────────────
    alternates: {
      canonical: canonicalUrl,
    },

    // ── Open Graph ────────────────────────────────────────────────────────────
    openGraph: {
      type: ogType,
      siteName: SITE.name,
      url: canonicalUrl,
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
      locale: "en_US",
      // Article-specific fields (only emitted when ogType === "article")
      ...(ogType === "article" && overrides.publishedTime
        ? { publishedTime: overrides.publishedTime }
        : {}),
      ...(ogType === "article" && overrides.authors
        ? { authors: overrides.authors }
        : {}),
    },

    // ── Twitter / X Card ──────────────────────────────────────────────────────
    twitter: {
      card: "summary_large_image",
      site: "@kivva_tech",
      creator: "@kivva_tech",
      title,
      description,
      images: [ogImageUrl],
    },

    // ── Robots ────────────────────────────────────────────────────────────────
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // ── Verification (add actual codes after DNS setup) ───────────────────────
    verification: {
      // google: "YOUR_GOOGLE_VERIFICATION_CODE",
      // yandex: "YOUR_YANDEX_CODE",
    },

    // ── App / PWA hints ───────────────────────────────────────────────────────
    applicationName: SITE.name,
    metadataBase: new URL(SITE.url),
  };
}

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
// Inlined into <head> via <script type="application/ld+json">.
// Helps Google understand the business entity and surface rich results.

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    description: DEFAULT_DESCRIPTION,
    email: SITE.email,
    telephone: SITE.phone,
    foundingDate: "2006",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 100 },
    sameAs: [
      SITE.social.linkedin,
      SITE.social.instagram,
      SITE.social.facebook,
    ],
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Coral Springs",
        addressRegion: "FL",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Dallas",
        addressRegion: "TX",
        addressCountry: "US",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "sales",
      availableLanguage: "English",
    },
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: DEFAULT_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

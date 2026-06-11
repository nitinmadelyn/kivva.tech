/**
 * Automatic sitemap — Next.js calls this at build time and serves the result
 * at /sitemap.xml. Search engines use it to discover and prioritise pages.
 */

import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

const url = (path: string) => `${SITE.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Core ─────────────────────────────────────────────────────────────────
    { url: url("/"),               lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: url("/book-a-meeting"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/contact"),        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/hire-developers"),lastModified: now, changeFrequency: "weekly",  priority: 0.9 },

    // ── Hire developers — role pages ─────────────────────────────────────────
    { url: url("/hire-developers/ai-ml-engineers"),      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/hire-developers/full-stack-developers"),lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/hire-developers/cloud-specialists"),    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/hire-developers/devops-engineers"),     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/hire-developers/data-engineers"),       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/hire-developers/salesforce-developers"),lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/hire-developers/offshore-engineers"),   lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── Services ─────────────────────────────────────────────────────────────
    { url: url("/services"),                        lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/services/cloud-infrastructure"),   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/services/devops-sre"),             lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/services/data-engineering"),       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/services/full-stack-development"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/services/salesforce-erp"),         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/services/custom-software"),        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/services/mobile-app"),             lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── AI Engineering ────────────────────────────────────────────────────────
    { url: url("/ai-engineering"),             lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/ai-engineering/rag"),         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/ai-engineering/agentic"),     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/ai-engineering/custom-dev"),  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/ai-engineering/data"),        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/ai-engineering/automation"),  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/ai-engineering/integration"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/ai-engineering/product"),     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/ai-engineering/strategy"),    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/ai-engineering/infrastructure"),lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── AI Solutions ──────────────────────────────────────────────────────────
    { url: url("/ai-solutions"),                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/ai-solutions/assistants"),     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/ai-solutions/conversational"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/ai-solutions/custom-models"),  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/ai-solutions/decision"),       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/ai-solutions/predictive"),     lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── Industries ────────────────────────────────────────────────────────────
    { url: url("/industries"),                        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/industries/banking-finance"),        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/industries/healthcare"),             lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/industries/retail-commerce"),        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/industries/education"),              lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/industries/travel-hospitality"),     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/industries/supply-chain-logistics"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/industries/food-beverages"),         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/industries/sports"),                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/industries/social-networking"),      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/industries/real-estate"),            lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── Case Studies ──────────────────────────────────────────────────────────
    { url: url("/case-studies"),             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/case-studies/logibee"),     lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: url("/case-studies/ivira"),       lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: url("/case-studies/navig8"),      lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: url("/case-studies/food-moover"), lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: url("/case-studies/doors-open"),  lastModified: now, changeFrequency: "yearly",  priority: 0.6 },

    // ── About ─────────────────────────────────────────────────────────────────
    { url: url("/about"),       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/about/team"),  lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: url("/careers"),     lastModified: now, changeFrequency: "weekly",  priority: 0.7 },

    // ── Blog ──────────────────────────────────────────────────────────────────
    { url: url("/blog"),                                                      lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: url("/blog/building-production-ready-rag-systems-2026"),          lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: url("/blog/multi-agent-systems-enterprise"),                      lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: url("/blog/ai-first-vs-ai-assisted-strategy"),                   lastModified: now, changeFrequency: "yearly",  priority: 0.6 },

    // ── Legal ─────────────────────────────────────────────────────────────────
    { url: url("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}

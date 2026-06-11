/**
 * /industries — overview landing page.
 * Server Component — no interactivity needed.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { HERO_STATS } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NAV_ITEMS } from "@/lib/nav-data";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "KivvaTech builds AI and software for banking, healthcare, retail, education, travel, logistics, food, sports, social networks, and real estate — domain expertise backed by modern engineering.",
  path: "/industries",
  keywords: [
    "industry software development",
    "AI for banking",
    "healthcare technology",
    "retail AI",
    "edtech development",
    "logistics software",
    "proptech development",
  ],
});

const CONTAINER = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";
const INDUSTRY_GROUPS = NAV_ITEMS.find((i) => i.label === "Industries")?.groups ?? [];

const WHY_US = [
  {
    title: "Domain knowledge, not generic AI",
    body: "We work exclusively in verticals we understand deeply — which means faster delivery, fewer misunderstood requirements, and solutions that actually fit how your industry works.",
  },
  {
    title: "Compliance-aware from day one",
    body: "Financial services, healthcare, and education come with regulatory obligations. Our engineers know HIPAA, PCI-DSS, GDPR, and sector-specific requirements before writing a single line of code.",
  },
  {
    title: "Integration-first approach",
    body: "Your industry has legacy systems, proprietary data formats, and incumbent vendors. We specialise in integrating new AI capabilities with the systems you already depend on.",
  },
];

const CHECK_ICON = "M4.5 12.75l6 6 9-13.5";

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-surface-900">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="pt-20 pb-16 bg-surface-800 border-b border-border-900">
          <div className={CONTAINER}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue-border bg-brand-blue-muted mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
              <span className="text-xs font-medium text-brand-blue">Industries</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Built for your industry.<br />
              <span className="text-brand-blue">Not adapted for it.</span>
            </h1>
            <p className="text-text-dim max-w-2xl text-base leading-relaxed mb-8">
              Generic software agencies deliver generic results. We go deep in each vertical we serve — bringing
              domain knowledge, sector-specific AI experience, and integration expertise that generalists simply cannot match.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/book-a-meeting" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors">
                Book a discovery call
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border border-border-700 hover:border-border-600 rounded-lg transition-colors">
                Discuss your use case
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats ─────────────────────────────────────────────────────── */}
        <section className="py-8 bg-surface-700 border-b border-border-900">
          <div className={CONTAINER}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {HERO_STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-white">{value}</p>
                  <p className="text-xs text-text-dim mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industry grid ─────────────────────────────────────────────── */}
        <section className="py-16 bg-light-bg border-b border-light-border">
          <div className={CONTAINER}>
            {INDUSTRY_GROUPS.map((group) => (
              <div key={group.heading} className="mb-12 last:mb-0">
                <h2 className="text-xs font-semibold text-light-text-faint uppercase tracking-widest mb-5">{group.heading}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-start gap-4 p-5 rounded-xl border border-light-border bg-light-surface hover:border-brand-blue-border hover:bg-brand-blue-muted transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-blue-muted flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/20 transition-colors">
                        <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-light-text group-hover:text-brand-blue transition-colors mb-1">{item.label}</p>
                        <p className="text-xs text-light-text-muted leading-snug">{item.description}</p>
                      </div>
                      <svg className="w-4 h-4 text-light-text-faint group-hover:text-brand-blue transition-colors flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why KivvaTech ─────────────────────────────────────────────── */}
        <section className="py-16 bg-surface-800 border-y border-border-900">
          <div className={CONTAINER}>
            <h2 className="text-2xl font-bold text-white mb-2">Why industry-specific expertise matters</h2>
            <p className="text-text-dim text-sm mb-8 max-w-xl">
              The difference between a team that learns your industry and one that already knows it is measured in months, not weeks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {WHY_US.map(({ title, body }) => (
                <div key={title} className="rounded-xl border border-border-800 bg-surface-700 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-md bg-brand-blue-muted flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d={CHECK_ICON} />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                  </div>
                  <p className="text-xs text-text-dim leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="py-16 bg-surface-900">
          <div className={`${CONTAINER} text-center`}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Don&apos;t see your industry?
            </h2>
            <p className="text-text-dim mb-8 max-w-lg mx-auto text-sm">
              We work across a wide range of verticals. If you have a complex AI or software problem, we likely have the experience to solve it.
            </p>
            <Link href="/book-a-meeting" className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors">
              Book a free discovery call
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

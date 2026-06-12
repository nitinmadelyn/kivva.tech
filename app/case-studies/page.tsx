/**
 * /case-studies — listing page.
 * Server Component — no interactivity needed.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CASE_STUDIES_LIST } from "@/lib/phase5-data";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Real results from real clients — enterprise SaaS, PropTech, eCommerce, data platforms, and fintech built by KivvaTech for companies including Acquire.io, Import.io, Dexi.io, Before You Buy, Ludic, and Stashly.",
  path: "/case-studies",
  keywords: ["case studies", "client results", "enterprise SaaS development", "software development case studies", "KivvaTech portfolio"],
});

const CONTAINER = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";
const ARROW_ICON = "m8.25 4.5 7.5 7.5-7.5 7.5";

const SUMMARY_STATS = [
  { value: "60%", label: "first-response reduction — Acquire.io" },
  { value: "20M+", label: "data points/day — Import.io" },
  { value: "312%", label: "conversion increase — Ludic" },
  { value: "SOC 2", label: "Type II certified — Stashly" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-surface-900">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="pt-20 pb-16 bg-surface-800 border-b border-border-900">
          <div className={CONTAINER}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue-border bg-brand-blue-muted mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
              <span className="text-xs font-medium text-brand-blue">Case Studies</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Real clients.<br />
              <span className="text-brand-blue">Measurable results.</span>
            </h1>
            <p className="text-text-dim max-w-2xl text-base leading-relaxed mb-8">
              We let the work speak. Here are the problems we solved, how we solved them, and the outcomes our clients saw.
            </p>

            {/* Summary stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {SUMMARY_STATS.map(({ value, label }) => (
                <div key={label} className="rounded-xl border border-border-800 bg-surface-700 p-4 text-center">
                  <p className="text-2xl font-bold text-white leading-tight">{value}</p>
                  <p className="text-xs text-text-dim mt-1 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case study cards ──────────────────────────────────────────── */}
        <section className="py-16 bg-light-bg border-b border-light-border">
          <div className={CONTAINER}>
            <div className="space-y-6">
              {CASE_STUDIES_LIST.map((cs) => (
                <Link
                  key={cs.slug}
                  href={cs.path}
                  className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-light-border bg-light-surface hover:border-brand-blue-border hover:bg-brand-blue-muted transition-all duration-200"
                >
                  {/* Left: logo + meta */}
                  <div className="sm:w-44 flex-shrink-0 flex flex-col gap-3">
                    {/* Company logo */}
                    <div className="h-8 flex items-center">
                      {cs.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={cs.logo}
                          alt={`${cs.client} logo`}
                          className="h-7 w-auto max-w-[120px] object-contain opacity-70 group-hover:opacity-90 transition-opacity duration-200"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <span className="text-sm font-semibold text-light-text-muted">{cs.client}</span>
                      )}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-brand-blue-border bg-brand-blue-muted w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
                      <span className="text-[10px] font-medium text-brand-blue">{cs.badge}</span>
                    </div>
                    <p className="text-xs text-light-text-faint">{cs.industry}</p>
                  </div>

                  {/* Middle: content */}
                  <div className="flex-1 min-w-0">
                    {!cs.logo && (
                      <p className="text-xs text-light-text-faint mb-1 font-medium uppercase tracking-wide">{cs.client}</p>
                    )}
                    <h2 className="text-base sm:text-lg font-bold text-light-text group-hover:text-brand-blue transition-colors leading-snug mb-2">
                      {cs.title}
                    </h2>
                    <p className="text-xs text-light-text-muted leading-relaxed line-clamp-2">{cs.description}</p>

                    {/* Mini stats */}
                    <div className="flex flex-wrap gap-4 mt-4">
                      {cs.stats.slice(0, 3).map(({ value, label }) => (
                        <div key={label}>
                          <span className="text-sm font-bold text-light-text">{value}</span>
                          <span className="text-xs text-light-text-faint ml-1.5">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center self-center flex-shrink-0">
                    <svg className="w-5 h-5 text-light-text-faint group-hover:text-brand-blue transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={ARROW_ICON} />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="py-16 bg-surface-800 border-t border-border-900">
          <div className={`${CONTAINER} text-center`}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to be our next case study?</h2>
            <p className="text-text-dim mb-8 max-w-lg mx-auto text-sm">
              Tell us your problem. A senior engineer will get back to you within 24 hours with a practical approach.
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

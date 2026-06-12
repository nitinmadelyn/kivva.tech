/**
 * /ai-engineering — overview landing page.
 *
 * Shows all 8 sub-service cards + a section intro + CTA.
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
  title: "AI Engineering",
  description:
    "End-to-end AI engineering — strategy, custom model development, RAG systems, agentic AI, automation, and production deployment. 480+ projects delivered globally.",
  path: "/ai-engineering",
  keywords: [
    "AI engineering services",
    "custom AI development",
    "RAG systems",
    "agentic AI",
    "LLM development",
    "AI consulting",
  ],
});

const CONTAINER = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";

// Pull the AI Engineering groups directly from nav-data so they stay in sync
const AI_GROUPS = NAV_ITEMS.find((i) => i.label === "AI Engineering")?.groups ?? [];

export default function AiEngineeringPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="bg-surface-900">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="pt-20 pb-16 bg-surface-800 border-b border-border-900">
          <div className={CONTAINER}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue-border bg-brand-blue-muted mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping" aria-hidden="true" />
              <span className="text-xs font-medium text-brand-blue">AI Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              AI Engineering.<br />
              <span className="text-brand-blue">Built for production.</span>
            </h1>
            <p className="text-text-dim max-w-2xl text-base leading-relaxed mb-8">
              From AI strategy and POC validation to custom model training, RAG systems, agentic workflows, and
              production deployment — we deliver complete AI engineering, not just advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/book-a-meeting" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors">
                Book a discovery call
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border border-border-700 hover:border-border-600 rounded-lg transition-colors">
                Discuss your project
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

        {/* ── Sub-service grid ───────────────────────────────────────────── */}
        <section className="py-16 bg-light-bg border-b border-light-border">
          <div className={CONTAINER}>
            {AI_GROUPS.map((group) => (
              <div key={group.heading} className="mb-12 last:mb-0">
                <h2 className="text-xs font-semibold text-light-text-faint uppercase tracking-widest mb-5">
                  {group.heading}
                </h2>
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
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-light-text group-hover:text-brand-blue transition-colors">
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className="text-[9px] font-semibold bg-brand-blue text-white px-1.5 py-0.5 rounded uppercase tracking-wide leading-none">
                              {item.badge}
                            </span>
                          )}
                        </div>
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

        {/* ── Why KivvaTech for AI ───────────────────────────────────────── */}
        <section className="py-16 bg-surface-800 border-t border-border-900">
          <div className={CONTAINER}>
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Why KivvaTech for AI Engineering?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { title: "Production-first", body: "We don't build demos. Every system we deliver is designed for production scale, reliability, and observability from day one." },
                { title: "Full-stack AI teams", body: "Data engineers, ML engineers, and backend engineers working together — no gaps between research and deployment." },
                { title: "Outcome-driven", body: "Our engagements are scoped around business outcomes, not technology deliverables. We measure success the same way you do." },
              ].map(({ title, body }) => (
                <div key={title} className="rounded-xl border border-border-800 bg-surface-700 p-6">
                  <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
                  <p className="text-xs text-text-dim leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="py-16 border-t border-border-900">
          <div className={`${CONTAINER} text-center`}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to build your AI system?</h2>
            <p className="text-text-dim mb-8 max-w-lg mx-auto text-sm">
              Tell us about your use case and we&apos;ll recommend the right approach in a 30-minute call.
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

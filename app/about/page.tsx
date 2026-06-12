/**
 * /about — Company overview page.
 * Server Component — zero client JS.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE, HERO_STATS } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = buildMetadata({
  title: "About KivvaTech",
  description:
    "KivvaTech is a global AI and software engineering company with 15+ years of experience, 360+ clients across 15+ countries. We build AI products that ship and scale.",
  path: "/about",
  keywords: ["about KivvaTech", "AI software company", "software engineering firm", "offshore development company"],
});

const CONTAINER = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";

const CHECK_ICON = "M4.5 12.75l6 6 9-13.5";
const ARROW_ICON = "m8.25 4.5 7.5 7.5-7.5 7.5";

const VALUES = [
  {
    title: "Engineering rigour",
    body: "We write production-grade code from day one. No throwaway prototypes, no shortcuts that create tech debt. Every deliverable is something you can build on.",
  },
  {
    title: "Speed without compromise",
    body: "We move fast — but never at the cost of quality, security, or scalability. Speed comes from experience and strong process, not cutting corners.",
  },
  {
    title: "Radical transparency",
    body: "You always know what we're working on, what's blocked, and why. No surprises at delivery. Weekly progress reports and async updates by default.",
  },
  {
    title: "Ownership mentality",
    body: "Our engineers act like co-founders on your product, not contractors fulfilling tickets. When something is wrong, they surface it. When there's a better approach, they say so.",
  },
  {
    title: "Domain before technology",
    body: "We understand your industry before writing a line of code. The right solution to a healthcare problem looks different from the right solution to a logistics problem.",
  },
  {
    title: "Long-term partnerships",
    body: "Our average client relationship spans 3+ years. We measure success by the business outcomes our clients achieve, not by billable hours.",
  },
];

const MILESTONES = [
  { year: "2005", event: "Founded in Ahmedabad, India as a custom software consultancy." },
  { year: "2010", event: "Expanded to serve US and European clients. First 100 engineers hired." },
  { year: "2016", event: "Scaled to 200+ engineers. Crossed 500 global clients across 10+ countries." },
  { year: "2019", event: "Launched dedicated AI/ML practice. First LLM and computer vision projects shipped." },
  { year: "2022", event: "360+ active clients across 15+ countries. Shopify Partner and AWS Certified." },
  { year: "2024", event: "Full AI Engineering division launched. Agentic systems, RAG, and custom model work at scale." },
];

const AWARDS = [
  { label: "Top AI Development Company", platform: "Clutch, 2024" },
  { label: "Top Software Development Company", platform: "GoodFirms, 2024" },
  { label: "AWS Advanced Partner", platform: "Amazon Web Services" },
  { label: "Salesforce Consulting Partner", platform: "Salesforce" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-surface-900">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="pt-20 pb-16 bg-surface-800 border-b border-border-900">
          <div className={CONTAINER}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue-border bg-brand-blue-muted mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
              <span className="text-xs font-medium text-brand-blue">About KivvaTech</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              We build AI products<br />
              <span className="text-brand-blue">that actually ship.</span>
            </h1>
            <p className="text-text-dim max-w-2xl text-base leading-relaxed mb-8">
              KivvaTech is a global AI and software engineering company. Since 2005, we have been helping businesses build the technology they need to compete — from early-stage startups to Fortune 500 enterprises across 15+ countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/book-a-meeting" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors">
                Work with us
              </Link>
              <Link href="/about/team" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border border-border-700 hover:border-border-600 rounded-lg transition-colors">
                Meet the team
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

        {/* ── Mission ───────────────────────────────────────────────────── */}
        <section className="py-16 bg-light-bg border-b border-light-border">
          <div className={CONTAINER}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-light-text mb-4">Our mission</h2>
                <p className="text-light-text-muted leading-relaxed mb-4">
                  Most software projects fail not because of bad intentions, but because of bad execution: unclear requirements, underqualified teams, poor architecture decisions made early, and a culture that prioritises speed over quality.
                </p>
                <p className="text-light-text-muted leading-relaxed mb-4">
                  KivvaTech exists to fix that. We bring senior engineering talent, deep domain expertise, and a delivery process built for ambitious products, so that what gets built actually works, scales, and creates lasting value.
                </p>
                <p className="text-light-text-muted leading-relaxed">
                  Our mission is simple: be the engineering partner that ambitious companies rely on to ship the things that matter most.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "15+", label: "Years in operation" },
                  { value: "360+", label: "Completed projects" },
                  { value: "500+", label: "Engineers globally" },
                  { value: "3+ yrs", label: "Avg. client relationship" },
                ].map(({ value, label }) => (
                  <div key={label} className="rounded-xl border border-light-border bg-light-surface p-5 text-center">
                    <p className="text-2xl font-bold text-brand-blue">{value}</p>
                    <p className="text-xs text-light-text-muted mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ────────────────────────────────────────────────────── */}
        <section className="py-16 bg-surface-800 border-y border-border-900">
          <div className={CONTAINER}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">How we work</h2>
            <p className="text-text-dim text-sm mb-8 max-w-xl">The principles that guide every engagement, every line of code, every client relationship.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map(({ title, body }) => (
                <div key={title} className="rounded-xl border border-border-800 bg-surface-700 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-md bg-brand-blue-muted flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
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

        {/* ── Milestones ────────────────────────────────────────────────── */}
        <section className="py-16 bg-light-bg border-b border-light-border">
          <div className={CONTAINER}>
            <h2 className="text-2xl font-bold text-light-text mb-8">Our story</h2>
            <div className="relative">
              <div className="absolute left-[72px] top-0 bottom-0 w-px bg-light-border hidden sm:block" aria-hidden="true" />
              <div className="space-y-6">
                {MILESTONES.map(({ year, event }) => (
                  <div key={year} className="flex items-start gap-5">
                    <div className="w-16 flex-shrink-0 text-right">
                      <span className="text-sm font-bold text-brand-blue">{year}</span>
                    </div>
                    <div className="relative sm:pl-6 flex-1">
                      <span className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-brand-blue hidden sm:block" aria-hidden="true" />
                      <p className="text-sm text-light-text-muted leading-relaxed">{event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Awards ────────────────────────────────────────────────────── */}
        <section className="py-12 bg-surface-800 border-y border-border-900">
          <div className={CONTAINER}>
            <h2 className="text-sm font-semibold text-text-faint uppercase tracking-widest mb-6">Recognition</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {AWARDS.map(({ label, platform }) => (
                <div key={label} className="rounded-xl border border-border-800 bg-surface-700 p-4">
                  <p className="text-sm font-semibold text-white mb-1">{label}</p>
                  <p className="text-xs text-text-faint">{platform}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Offices ───────────────────────────────────────────────────── */}
        <section className="py-14 bg-light-bg border-b border-light-border">
          <div className={CONTAINER}>
            <h2 className="text-xl font-bold text-light-text mb-6">Our offices</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SITE.offices.map(({ city, address }) => (
                <div key={city} className="rounded-xl border border-light-border bg-light-surface p-5">
                  <p className="text-sm font-semibold text-light-text mb-1">{city}</p>
                  <p className="text-xs text-light-text-muted leading-relaxed">{address}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="py-16 bg-surface-800 border-t border-border-900">
          <div className={`${CONTAINER} text-center`}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Want to work with us?</h2>
            <p className="text-text-dim mb-8 max-w-lg mx-auto text-sm">
              Whether you need to augment your team or hand off a full build, we have the right engagement model.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/book-a-meeting" className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors">
                Book a discovery call
              </Link>
              <Link href="/about/team" className="inline-flex items-center gap-1.5 px-7 py-3.5 text-sm font-semibold text-white border border-border-700 hover:border-border-600 rounded-lg transition-colors">
                Meet the team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={ARROW_ICON} />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

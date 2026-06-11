/**
 * /hire-developers — overview landing page.
 *
 * Fully server-rendered — no interactivity needed.
 * Sections: Hero → Stats → Why KivvaTech → Engagement models →
 *           Developer roles grid → How it works → CTA
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE, HERO_STATS } from "@/lib/constants";
import { HIRE_DEV_ITEMS } from "@/lib/nav-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Hire Developers",
  description:
    "Hire pre-vetted AI engineers, full-stack developers, DevOps specialists, and data engineers. Onboard in 5 days. 40–60% cost saving vs local hiring.",
  path: "/hire-developers",
  keywords: [
    "hire AI developers",
    "hire full stack developers",
    "hire DevOps engineers",
    "offshore development team",
    "pre-vetted developers",
    "hire engineers India",
    "dedicated development team",
  ],
});

// ─── Page data ────────────────────────────────────────────────────────────────

const WHY_ITEMS = [
  {
    icon: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.107-.879-1.107-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
    title: "40–60% cost saving",
    body: "Access world-class talent at a fraction of the cost of US/UK local hiring — without compromising on quality.",
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    title: "Onboard in 5 days",
    body: "We handle all vetting, contracts, and onboarding. Your engineer is productive from day one.",
  },
  {
    icon: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z",
    title: "Pre-vetted talent",
    body: "Every engineer passes a multi-stage technical screen: code review, system design, and a domain-specific assessment.",
  },
  {
    icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z",
    title: "Dedicated to your team",
    body: "Your engineer works exclusively on your project, in your timezone, using your tools and communication stack.",
  },
  {
    icon: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .414-.168.75-.375 1.032M4.5 7.5c0-.414-.168-.75-.375-1.032",
    title: "Flexible engagement",
    body: "Full-time, part-time, or project-based. Scale your team up or down with 2-week notice. No lock-in.",
  },
  {
    icon: "M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0",
    title: "Global, proven track record",
    body: "360+ clients across 15+ countries. 15+ years in enterprise software and AI development.",
  },
];

const ENGAGEMENT_MODELS = [
  {
    name: "Dedicated Team",
    tag: "Most popular",
    description: "A full-time engineer embedded in your team — same timezone, your tools, daily standups.",
    points: ["Full-time commitment", "Direct communication", "Scales with your roadmap", "Replace within 2 weeks if needed"],
  },
  {
    name: "Part-time / Fractional",
    tag: null,
    description: "20 hours/week of focused engineering — ideal for ongoing maintenance, feature work, or audits.",
    points: ["Cost-effective for smaller scopes", "Easy to scale up", "Same quality vetting", "Flexible scheduling"],
  },
  {
    name: "Project-based",
    tag: null,
    description: "Fixed-scope delivery with a defined timeline and milestone-based payments.",
    points: ["Fixed cost, no surprises", "Dedicated project manager", "Source code handoff", "Post-launch support available"],
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Share your requirements", body: "Fill out the booking form or email us with your stack, role, and timeline." },
  { step: "02", title: "Meet shortlisted candidates", body: "Within 72 hours we send 2–3 pre-vetted profiles. You interview and choose." },
  { step: "03", title: "Trial period (optional)", body: "Start with a paid 1-week trial to confirm fit before full commitment." },
  { step: "04", title: "Onboard and ship", body: "We handle contracts, IP protection, and tooling. Your engineer is ready in 5 days." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HireDevelopersPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="pt-20 pb-20 bg-surface-800 border-b border-border-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue-border bg-brand-blue-muted mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
                <span className="text-xs font-medium text-brand-blue">Pre-vetted · Onboard in 5 days</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Hire World-Class Developers.<br />
                <span className="text-brand-blue">Ship Faster.</span>
              </h1>
              <p className="text-lg text-text-dim mb-8 max-w-2xl">
                Access pre-vetted AI engineers, full-stack developers, DevOps specialists, and data engineers.
                40–60% cost saving versus local hiring. Your team grows in days, not months.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book-a-meeting"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors"
                >
                  Start hiring — it&apos;s free to start
                </Link>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white border border-border-700 hover:border-border-600 rounded-lg transition-colors"
                >
                  Email us your requirements
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats bar ─────────────────────────────────────────────────── */}
        <section className="py-10 bg-surface-700 border-b border-border-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {HERO_STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-3xl font-bold text-white">{value}</p>
                  <p className="text-sm text-text-dim mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why KivvaTech ─────────────────────────────────────────────── */}
        <section className="py-20 bg-light-bg border-b border-light-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-light-text mb-3">Why hire through KivvaTech?</h2>
              <p className="text-light-text-muted max-w-xl mx-auto">
                We&apos;ve been building global engineering teams since 2006. Here&apos;s what makes us different.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_ITEMS.map(({ icon, title, body }) => (
                <div key={title} className="rounded-xl border border-light-border bg-light-surface p-6 hover:border-brand-blue-border transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-muted flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-light-text mb-2">{title}</h3>
                  <p className="text-sm text-light-text-muted leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Developer roles grid ───────────────────────────────────────── */}
        <section className="py-20 bg-surface-800 border-y border-border-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Browse developer roles</h2>
              <p className="text-text-dim max-w-xl mx-auto">
                Each role has a dedicated page with skill breakdowns, typical profiles, and how we vet for that specialization.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {HIRE_DEV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-start gap-4 p-5 rounded-xl border border-border-800 bg-surface-700 hover:border-brand-blue-border hover:bg-brand-blue-muted transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-muted flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/20 transition-colors">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="text-[9px] font-semibold bg-brand-blue text-white px-1.5 py-0.5 rounded uppercase tracking-wide leading-none">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-text-dim leading-snug">{item.description}</p>
                  </div>
                  <svg className="w-4 h-4 text-text-faint group-hover:text-brand-blue transition-colors flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Engagement models ─────────────────────────────────────────── */}
        <section className="py-20 bg-light-bg border-b border-light-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-light-text mb-3">Engagement models</h2>
              <p className="text-light-text-muted max-w-xl mx-auto">Choose the model that fits your project. Switch or combine at any time.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ENGAGEMENT_MODELS.map((model) => (
                <div
                  key={model.name}
                  className="relative rounded-xl border border-light-border bg-light-surface p-7 flex flex-col"
                >
                  {model.tag && (
                    <span className="absolute -top-3 left-5 text-[10px] font-semibold bg-brand-blue text-white px-2.5 py-1 rounded-full uppercase tracking-wide">
                      {model.tag}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-light-text mb-2">{model.name}</h3>
                  <p className="text-sm text-light-text-muted mb-5 leading-relaxed">{model.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {model.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-light-text-muted">
                        <svg className="w-4 h-4 text-brand-blue flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────────────────── */}
        <section className="py-20 bg-surface-800 border-t border-border-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">How it works</h2>
              <p className="text-text-dim">From first message to productive engineer in 5 business days.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map(({ step, title, body }) => (
                <div key={step} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-blue-muted border border-brand-blue-border flex items-center justify-center">
                      <span className="text-sm font-bold text-brand-blue">{step}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
                      <p className="text-xs text-text-dim leading-relaxed">{body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────────── */}
        <section className="py-20 bg-surface-900 border-t border-border-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to extend your team?
            </h2>
            <p className="text-text-dim mb-8 max-w-xl mx-auto">
              Share your requirements and we&apos;ll send you shortlisted profiles within 72 hours.
              No commitment required to start.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/book-a-meeting"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors"
              >
                Book a free discovery call
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white border border-border-700 hover:border-border-600 rounded-lg transition-colors"
              >
                Send requirements by email
              </Link>
            </div>
            <p className="mt-6 text-xs text-text-faint">
              Profiles delivered in 72 h · NDA available · No upfront cost
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

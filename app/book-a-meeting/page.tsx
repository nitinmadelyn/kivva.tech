/**
 * /book-a-meeting — discovery call booking page.
 *
 * Layout: form on the left, trust panel on the right.
 * Form is a Client Component (useActionState). Everything else is server-rendered.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE, HERO_STATS, CALENDLY_URL } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CalendlyWrapper from "@/components/CalendlyWrapper";

export const metadata: Metadata = buildMetadata({
  title: "Book a Discovery Call",
  description:
    "Schedule a free 30-minute discovery call with a KivvaTech engineer. We'll scope your project, answer technical questions, and outline next steps — no sales pitch.",
  path: "/book-a-meeting",
  keywords: ["book a call", "free consultation", "AI project scoping", "hire developers consultation"],
});

// ─── What happens next steps ──────────────────────────────────────────────────

const NEXT_STEPS = [
  {
    label: "We review your request",
    detail: "Our team reads every submission within a few hours and assigns the right engineer to your inquiry.",
  },
  {
    label: "30-minute discovery call",
    detail: "A senior engineer joins — no account executive. We scope the project and answer your technical questions.",
  },
  {
    label: "Proposal within 48 hours",
    detail: "You receive a detailed proposal: tech stack, team composition, timeline, and a fixed or T&M quote.",
  },
  {
    label: "Kick off in days, not weeks",
    detail: "Once approved, your dedicated team is onboarded in as little as 5 business days.",
  },
];

const TRUST_BADGES = [
  { icon: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25z", label: "NDA on request" },
  { icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", label: "End-to-end encrypted" },
  { icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z", label: "Reply within 24 h" },
  { icon: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm3 0h1.5m-1.5 0h-1.5m-9 0H4.5m1.5 0H4.5", label: "No commitment required" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BookAMeetingPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* ── Page header ──────────────────────────────────────────────── */}
        <section className="pt-20 pb-16 bg-surface-800 border-b border-border-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue-border bg-brand-blue-muted mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping" aria-hidden="true" />
              <span className="text-xs font-medium text-brand-blue">Free · No commitment</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Book a Discovery Call
            </h1>
            <p className="text-base sm:text-lg text-text-dim max-w-2xl mx-auto">
              Pick a time that works for you. A senior KivvaTech engineer joins the call — no account executives, no sales pitch.
            </p>
          </div>
        </section>

        {/* ── Main content ─────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-light-bg border-b border-light-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

              {/* Calendly embed — 3 / 5 columns */}
              <div className="lg:col-span-3">
                <CalendlyWrapper url={CALENDLY_URL} />
              </div>

              {/* Trust panel — 2 / 5 columns */}
              <aside className="lg:col-span-2 space-y-8">

                {/* What happens next */}
                <div>
                  <h2 className="text-lg font-semibold text-light-text mb-5">What happens next</h2>
                  <ol className="space-y-5">
                    {NEXT_STEPS.map((step, i) => (
                      <li key={step.label} className="flex gap-4">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-blue-muted border border-brand-blue-border flex items-center justify-center text-xs font-bold text-brand-blue">
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-light-text">{step.label}</p>
                          <p className="mt-0.5 text-xs text-light-text-muted leading-relaxed">{step.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {HERO_STATS.map(({ value, label }) => (
                    <div key={label} className="rounded-lg border border-light-border bg-light-surface px-4 py-3">
                      <p className="text-xl font-bold text-light-text">{value}</p>
                      <p className="text-xs text-light-text-muted mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Trust badges */}
                <div className="space-y-2.5">
                  {TRUST_BADGES.map(({ icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-md bg-brand-blue-muted flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                        </svg>
                      </div>
                      <span className="text-sm text-light-text-muted">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Direct contact fallback */}
                <div className="rounded-xl border border-light-border bg-light-surface p-5">
                  <p className="text-sm font-medium text-light-text mb-3">Prefer to reach out directly?</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-2 text-sm text-brand-blue hover:text-brand-blue-hover transition-colors mb-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    {SITE.email}
                  </a>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-brand-blue hover:text-brand-blue-hover transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                    </svg>
                    {SITE.phone}
                  </a>
                </div>

              </aside>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <section className="py-12 border-t border-border-900 bg-surface-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-dim">
              Looking for developer profiles?{" "}
              <Link href="/hire-developers" className="text-brand-blue hover:text-brand-blue-hover transition-colors">
                Browse available roles →
              </Link>
            </p>
            <p className="text-sm text-text-dim">
              Have a quick question?{" "}
              <Link href="/contact" className="text-brand-blue hover:text-brand-blue-hover transition-colors">
                Send us a message →
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

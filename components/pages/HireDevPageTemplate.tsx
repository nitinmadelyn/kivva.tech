/**
 * HireDevPageTemplate — shared layout for all /hire-developers/[role] pages.
 *
 * Sections: Hero → Stats → What they do → Skills → How it works → Engagement models → CTA
 * Server Component — zero client JS.
 */

import Link from "next/link";
import type { HireDevRole } from "@/lib/phase3-data";
import { SITE } from "@/lib/constants";

const CONTAINER = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";

const CHECK_ICON = "M4.5 12.75l6 6 9-13.5";
const ARROW_ICON = "m8.25 4.5 7.5 7.5-7.5 7.5";

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg className={className ?? "w-4 h-4"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

export default function HireDevPageTemplate({ role }: { role: HireDevRole }) {
  return (
    <main id="main-content">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="bg-surface-800 border-b border-border-900 pt-20 pb-14">
        <div className={CONTAINER}>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-faint mb-6">
            <Link href="/" className="hover:text-text-dim transition-colors">Home</Link>
            <span>/</span>
            <Link href="/hire-developers" className="hover:text-text-dim transition-colors">Hire Developers</Link>
            <span>/</span>
            <span className="text-text-dim">{role.title}</span>
          </nav>

          {role.badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue-border bg-brand-blue-muted mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
              <span className="text-xs font-medium text-brand-blue">{role.badge}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">{role.title}</h1>
          <p className="text-lg text-brand-blue font-medium mb-4">{role.subtitle}</p>
          <p className="text-text-dim max-w-2xl text-sm sm:text-base leading-relaxed mb-8">{role.description}</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/book-a-meeting" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors">
              Start hiring — it&apos;s free to start
            </Link>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border border-border-700 hover:border-border-600 rounded-lg transition-colors">
              Email your requirements
            </a>
          </div>
        </div>
      </div>

      {/* ── Stats ───────────────────────────────────────────────────────── */}
      <div className="bg-surface-700 border-b border-border-900 py-8">
        <div className={CONTAINER}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {role.stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">{value}</p>
                <p className="text-xs text-text-dim mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── What they do ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-light-bg border-b border-light-border">
        <div className={CONTAINER}>
          <h2 className="text-2xl sm:text-3xl font-bold text-light-text mb-2">What they&apos;ll do for your team</h2>
          <p className="text-light-text-muted text-sm mb-8">Concrete responsibilities, not job-description boilerplate.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {role.whatTheyDo.map(({ title, body }) => (
              <div key={title} className="rounded-xl border border-light-border bg-light-surface p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-md bg-brand-blue-muted flex items-center justify-center flex-shrink-0">
                    <Icon path={CHECK_ICON} className="w-3.5 h-3.5 text-brand-blue" />
                  </div>
                  <h3 className="text-sm font-semibold text-light-text">{title}</h3>
                </div>
                <p className="text-xs text-light-text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ──────────────────────────────────────────────────────── */}
      <section className="py-14 bg-surface-800 border-y border-border-900">
        <div className={CONTAINER}>
          <h2 className="text-xl font-bold text-white mb-6">Skills & technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {role.skills.map(({ category, items }) => (
              <div key={category} className="rounded-xl border border-border-800 bg-surface-700 p-5">
                <p className="text-[10px] font-semibold text-text-faint uppercase tracking-widest mb-3">{category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span key={item} className="text-xs px-2 py-1 rounded-md bg-surface-600 border border-border-800 text-text-dim">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-light-bg border-b border-light-border">
        <div className={CONTAINER}>
          <h2 className="text-2xl font-bold text-light-text mb-2">How the hiring process works</h2>
          <p className="text-light-text-muted text-sm mb-8">From first message to productive engineer, in 5 business days.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {role.hiringProcess.map(({ step, title, body }) => (
              <div key={step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-blue-muted border border-brand-blue-border flex items-center justify-center">
                  <span className="text-xs font-bold text-brand-blue">{step}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-light-text mb-1.5">{title}</h3>
                  <p className="text-xs text-light-text-muted leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement models ────────────────────────────────────────────── */}
      <section className="py-16 bg-surface-800 border-t border-border-900">
        <div className={CONTAINER}>
          <h2 className="text-2xl font-bold text-white mb-2">Engagement models</h2>
          <p className="text-text-dim text-sm mb-8">Choose what fits. Switch at any time with 2 weeks notice.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {role.engagementModels.map((model) => (
              <div key={model.name} className="relative rounded-xl border border-border-800 bg-surface-700 p-6 flex flex-col">
                {model.tag && (
                  <span className="absolute -top-3 left-5 text-[10px] font-semibold bg-brand-blue text-white px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {model.tag}
                  </span>
                )}
                <h3 className="text-sm font-bold text-white mb-4">{model.name}</h3>
                <ul className="space-y-2 mt-auto">
                  {model.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs text-text-dim">
                      <Icon path={CHECK_ICON} className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────────────────── */}
      <section className="py-10 bg-light-bg border-b border-light-border">
        <div className={CONTAINER}>
          <div className="flex flex-wrap justify-center gap-8 text-xs text-light-text-muted">
            {["NDA available on request", "IP fully assigned to you", "Replace within 2 weeks if not satisfied", "No upfront cost to start"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <Icon path={CHECK_ICON} className="w-3.5 h-3.5 text-brand-blue" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-surface-800 border-t border-border-900">
        <div className={`${CONTAINER} text-center`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to hire a {role.title.replace("Hire ", "")}?
          </h2>
          <p className="text-text-dim mb-8 max-w-lg mx-auto text-sm">
            Share your requirements and we&apos;ll send you shortlisted profiles within 72 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/book-a-meeting" className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors">
              Book a free discovery call
            </Link>
            <Link href="/hire-developers" className="inline-flex items-center gap-1.5 px-7 py-3.5 text-sm font-semibold text-white border border-border-700 hover:border-border-600 rounded-lg transition-colors">
              Browse all roles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={ARROW_ICON} />
              </svg>
            </Link>
          </div>
          <p className="mt-5 text-xs text-text-faint">Profiles in 72 h · NDA available · No commitment to start</p>
        </div>
      </section>

    </main>
  );
}

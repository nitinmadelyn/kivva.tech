/**
 * IndustryPageTemplate — shared layout for all /industries/[slug] pages.
 *
 * Sections: Hero → Challenges → Solutions → Use Cases → Tech Stack → Related → CTA
 * Server Component — zero client JS.
 */

import Link from "next/link";
import type { IndustryPageConfig } from "@/lib/phase4-data";
import { SITE } from "@/lib/constants";

const CONTAINER = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";

const CHECK_ICON = "M4.5 12.75l6 6 9-13.5";
const ARROW_ICON = "m8.25 4.5 7.5 7.5-7.5 7.5";
const WARN_ICON  = "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z";
const X_ICON     = "M6 18 18 6M6 6l12 12";

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg className={className ?? "w-5 h-5"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

export default function IndustryPageTemplate({ config }: { config: IndustryPageConfig }) {
  return (
    <main id="main-content">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="bg-surface-800 border-b border-border-900 pt-20 pb-14">
        <div className={CONTAINER}>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-faint mb-6">
            <Link href="/" className="hover:text-text-dim transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-text-dim transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-text-dim">{config.badge}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue-border bg-brand-blue-muted mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
            <span className="text-xs font-medium text-brand-blue">{config.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">{config.title}</h1>
          <p className="text-lg text-brand-blue font-medium mb-4">{config.subtitle}</p>
          <p className="text-text-dim max-w-2xl text-sm sm:text-base leading-relaxed mb-8">{config.description}</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/book-a-meeting" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors">
              Book a discovery call
            </Link>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border border-border-700 hover:border-border-600 rounded-lg transition-colors">
              Discuss your project
            </a>
          </div>
        </div>
      </div>

      {/* ── Challenges ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-light-bg border-b border-light-border">
        <div className={CONTAINER}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-brand-blue-muted border border-brand-blue-border flex items-center justify-center flex-shrink-0">
              <Icon path={WARN_ICON} className="w-4 h-4 text-brand-blue" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-light-text">Industry challenges we solve</h2>
          </div>
          <p className="text-light-text-muted text-sm mb-8 pl-11">The real problems, not the ones that look good on slide decks.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {config.challenges.map(({ title, body }) => (
              <div key={title} className="rounded-xl border border-light-border bg-light-surface p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-md bg-light-bg border border-light-border flex items-center justify-center flex-shrink-0">
                    <Icon path={X_ICON} className="w-3 h-3 text-light-text-faint" />
                  </div>
                  <h3 className="text-sm font-semibold text-light-text">{title}</h3>
                </div>
                <p className="text-xs text-light-text-muted leading-relaxed pl-7">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-surface-800 border-y border-border-900">
        <div className={CONTAINER}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">How we help</h2>
          <p className="text-text-dim text-sm mb-8">Proven solutions built on modern AI and software engineering, not off-the-shelf tools repackaged.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {config.solutions.map(({ icon, title, body }) => (
              <div key={title} className="rounded-xl border border-border-800 bg-surface-700 p-5 flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-brand-blue-muted border border-brand-blue-border flex items-center justify-center mb-4 flex-shrink-0">
                  <Icon path={icon} className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
                <p className="text-xs text-text-dim leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-light-bg border-b border-light-border">
        <div className={CONTAINER}>
          <h2 className="text-2xl sm:text-3xl font-bold text-light-text mb-2">Results from the field</h2>
          <p className="text-light-text-muted text-sm mb-8">Concrete outcomes from real deployments, not illustrative scenarios.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {config.useCases.map(({ metric, metricLabel, title, body }) => (
              <div key={title} className="rounded-xl border border-light-border bg-light-surface p-6 flex flex-col">
                <div className="mb-4">
                  <p className="text-3xl font-bold text-brand-blue leading-none">{metric}</p>
                  <p className="text-xs font-medium text-light-text-muted mt-1">{metricLabel}</p>
                </div>
                <h3 className="text-sm font-semibold text-light-text mb-2 leading-snug">{title}</h3>
                <p className="text-xs text-light-text-muted leading-relaxed mt-auto pt-2">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ────────────────────────────────────────────────────── */}
      <section className="py-14 bg-surface-800 border-y border-border-900">
        <div className={CONTAINER}>
          <h2 className="text-xl font-bold text-white mb-6">Technologies we deploy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {config.techStack.map(({ label, items }) => (
              <div key={label} className="rounded-xl border border-border-800 bg-surface-700 p-5">
                <p className="text-[10px] font-semibold text-text-faint uppercase tracking-widest mb-3">{label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span key={item} className="text-xs px-2 py-1 rounded-md bg-surface-600 border border-border-800 text-text-dim">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Industries ────────────────────────────────────────────── */}
      {config.relatedIndustries.length > 0 && (
        <section className="py-12 bg-light-bg border-b border-light-border">
          <div className={CONTAINER}>
            <h2 className="text-sm font-semibold text-light-text-faint uppercase tracking-widest mb-4">Related industries</h2>
            <div className="flex flex-wrap gap-3">
              {config.relatedIndustries.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-light-border bg-light-surface text-sm text-light-text-muted hover:border-brand-blue-border hover:text-brand-blue transition-all duration-200"
                >
                  {label}
                  <Icon path={ARROW_ICON} className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-surface-800 border-t border-border-900">
        <div className={`${CONTAINER} text-center`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{config.cta.title}</h2>
          <p className="text-text-dim mb-8 max-w-lg mx-auto text-sm">{config.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/book-a-meeting" className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors">
              Book a free discovery call
            </Link>
            <Link href="/industries" className="inline-flex items-center gap-1.5 px-7 py-3.5 text-sm font-semibold text-white border border-border-700 hover:border-border-600 rounded-lg transition-colors">
              All industries
              <Icon path={ARROW_ICON} className="w-4 h-4" />
            </Link>
          </div>
          <p className="mt-5 text-xs text-text-faint">No commitment to start · NDA available on request · Senior engineers only</p>
        </div>
      </section>

    </main>
  );
}

/**
 * CaseStudyTemplate — shared layout for all /case-studies/[slug] pages.
 *
 * Sections: Hero → Challenge → Solution → Results → Tech Stack → Testimonial → Related → CTA
 * Server Component — zero client JS.
 */

import Link from "next/link";
import type { CaseStudyConfig } from "@/lib/phase5-data";
import { SITE } from "@/lib/constants";

const CONTAINER = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";

const CHECK_ICON  = "M4.5 12.75l6 6 9-13.5";
const ARROW_ICON  = "m8.25 4.5 7.5 7.5-7.5 7.5";
const QUOTE_ICON  = "M7.39 16.539a4.5 4.5 0 0 1-6.282-6.435c.697-.68 1.6-1.026 2.516-1.034L4 9a5 5 0 0 1 9.963-.876L14 9v1.5a4.5 4.5 0 0 1-4.5 4.5H9a4.5 4.5 0 0 1-1.61 1.539zM16.5 9h.008v.008H16.5V9zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z";
const BULB_ICON   = "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.355a3 3 0 0 1-3 0M9 12.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0z";

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg className={className ?? "w-5 h-5"} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

export default function CaseStudyTemplate({ config }: { config: CaseStudyConfig }) {
  return (
    <main id="main-content">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="bg-surface-800 border-b border-border-900 pt-20 pb-14">
        <div className={CONTAINER}>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-faint mb-6">
            <Link href="/" className="hover:text-text-dim transition-colors">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-text-dim transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-text-dim">{config.client}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue-border bg-brand-blue-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
              <span className="text-xs font-medium text-brand-blue">{config.badge}</span>
            </div>
            <Link href={config.industryHref} className="text-xs text-text-faint hover:text-text-dim transition-colors border border-border-800 rounded-full px-3 py-1">
              {config.industry}
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">{config.title}</h1>
          <p className="text-lg text-brand-blue font-medium mb-4">{config.subtitle}</p>
          <p className="text-text-dim max-w-2xl text-sm sm:text-base leading-relaxed mb-10">{config.description}</p>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {config.stats.map(({ value, label }) => (
              <div key={label} className="rounded-xl border border-border-800 bg-surface-700 p-4 text-center">
                <p className="text-2xl font-bold text-white leading-tight">{value}</p>
                <p className="text-xs text-text-dim mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Challenge ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-light-bg border-b border-light-border">
        <div className={CONTAINER}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-light-surface border border-light-border flex items-center justify-center flex-shrink-0">
              <Icon path={QUOTE_ICON} className="w-4 h-4 text-light-text-muted" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-light-text">The challenge</h2>
          </div>
          <p className="text-light-text-muted text-sm leading-relaxed mb-8 max-w-2xl pl-11">{config.challenge.overview}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {config.challenge.points.map(({ title, body }) => (
              <div key={title} className="rounded-xl border border-light-border bg-light-surface p-5">
                <h3 className="text-sm font-semibold text-light-text mb-2">{title}</h3>
                <p className="text-xs text-light-text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution ──────────────────────────────────────────────────────── */}
      <section className="py-16 bg-surface-800 border-y border-border-900">
        <div className={CONTAINER}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-brand-blue-muted border border-brand-blue-border flex items-center justify-center flex-shrink-0">
              <Icon path={BULB_ICON} className="w-4 h-4 text-brand-blue" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">What we built</h2>
          </div>
          <p className="text-text-dim text-sm leading-relaxed mb-10 max-w-2xl pl-11">{config.solution.overview}</p>

          <div className="space-y-4">
            {config.solution.steps.map(({ step, title, body }) => (
              <div key={step} className="flex items-start gap-5 p-5 rounded-xl border border-border-800 bg-surface-700">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-blue-muted border border-brand-blue-border flex items-center justify-center">
                  <span className="text-xs font-bold text-brand-blue">{step}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
                  <p className="text-xs text-text-dim leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-light-bg border-b border-light-border">
        <div className={CONTAINER}>
          <h2 className="text-2xl sm:text-3xl font-bold text-light-text mb-2">Results</h2>
          <p className="text-light-text-muted text-sm mb-8">Measurable outcomes delivered, not projected.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {config.results.map(({ metric, metricLabel, body }) => (
              <div key={metricLabel} className="rounded-xl border border-light-border bg-light-surface p-6">
                <p className="text-4xl font-bold text-brand-blue leading-none mb-1">{metric}</p>
                <p className="text-xs font-semibold text-light-text-muted uppercase tracking-widest mb-3">{metricLabel}</p>
                <p className="text-xs text-light-text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ────────────────────────────────────────────────────── */}
      <section className="py-14 bg-surface-800 border-y border-border-900">
        <div className={CONTAINER}>
          <h2 className="text-xl font-bold text-white mb-6">Technologies used</h2>
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

      {/* ── Testimonial ───────────────────────────────────────────────────── */}
      {config.testimonial && (
        <section className="py-16 bg-light-bg border-b border-light-border">
          <div className={CONTAINER}>
            <figure className="rounded-2xl border border-light-border bg-light-surface p-8 sm:p-10">
              <svg className="w-8 h-8 text-brand-blue mb-6 opacity-60" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <blockquote className="text-base sm:text-lg text-light-text leading-relaxed font-medium mb-6">
                &ldquo;{config.testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-blue-muted border border-brand-blue-border flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-brand-blue">{config.testimonial.author[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-light-text">{config.testimonial.author}</p>
                  <p className="text-xs text-light-text-muted">{config.testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* ── Related case studies ──────────────────────────────────────────── */}
      {config.relatedCaseStudies.length > 0 && (
        <section className="py-14 bg-surface-800 border-t border-border-900">
          <div className={CONTAINER}>
            <h2 className="text-xl font-bold text-white mb-6">More case studies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {config.relatedCaseStudies.map(({ label, href, tag }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex flex-col gap-2 p-5 rounded-xl border border-border-800 bg-surface-700 hover:border-brand-blue-border hover:bg-brand-blue-muted transition-all duration-200"
                >
                  <span className="text-[10px] font-semibold text-text-faint uppercase tracking-widest">{tag}</span>
                  <span className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors leading-snug">{label}</span>
                  <Icon path={ARROW_ICON} className="w-4 h-4 text-text-faint group-hover:text-brand-blue transition-colors mt-auto" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-surface-900 border-t border-border-900">
        <div className={`${CONTAINER} text-center`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Want results like these?
          </h2>
          <p className="text-text-dim mb-8 max-w-lg mx-auto text-sm">
            Tell us your problem. A senior engineer will respond with a practical approach within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/book-a-meeting" className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors">
              Book a free discovery call
            </Link>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1.5 px-7 py-3.5 text-sm font-semibold text-white border border-border-700 hover:border-border-600 rounded-lg transition-colors">
              Email us directly
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-text-faint">
            {["NDA available on request", "Senior engineers only", "No commitment to start"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <Icon path={CHECK_ICON} className="w-3.5 h-3.5 text-brand-blue" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

/**
 * SubPageTemplate — shared layout for all AI Engineering and Services sub-pages.
 *
 * Sections rendered (all optional except hero + capabilities + cta):
 *   Hero → Stats → Capabilities grid → Process steps → Tech stack → Related pages → CTA
 *
 * Server Component — zero client JS.
 */

import Link from "next/link";
import type { SubPageConfig } from "@/lib/phase2-data";

const CONTAINER = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";

// ─── Icon helper ──────────────────────────────────────────────────────────────

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg
      className={className ?? "w-5 h-5"}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function Hero({ config }: { config: SubPageConfig }) {
  return (
    <div className="bg-surface-800 border-b border-border-900 pt-20 pb-14">
      <div className={CONTAINER}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-faint mb-6">
          <Link href="/" className="hover:text-text-dim transition-colors">Home</Link>
          <span>/</span>
          <Link href={config.sectionHref} className="hover:text-text-dim transition-colors">{config.section}</Link>
          <span>/</span>
          <span className="text-text-dim">{config.title}</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue-border bg-brand-blue-muted mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
          <span className="text-xs font-medium text-brand-blue">{config.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
          {config.title}
        </h1>
        <p className="text-lg text-brand-blue font-medium mb-4">{config.subtitle}</p>
        <p className="text-text-dim max-w-2xl text-sm sm:text-base leading-relaxed mb-8">
          {config.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/book-a-meeting"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors"
          >
            Book a free discovery call
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border border-border-700 hover:border-border-600 rounded-lg transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}

function Stats({ stats }: { stats: NonNullable<SubPageConfig["stats"]> }) {
  return (
    <div className="bg-surface-700 border-b border-border-900 py-8">
      <div className={CONTAINER}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">{value}</p>
              <p className="text-xs text-text-dim mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Capabilities({ capabilities }: { capabilities: SubPageConfig["capabilities"] }) {
  return (
    <section className="py-16 bg-light-bg border-b border-light-border">
      <div className={CONTAINER}>
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-light-text mb-2">What we deliver</h2>
          <p className="text-light-text-muted text-sm">Every engagement is scoped, priced, and delivered against these capabilities.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map(({ icon, title, body }) => (
            <div key={title} className="rounded-xl border border-light-border bg-light-surface p-6 hover:border-brand-blue-border transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-blue-muted flex items-center justify-center mb-4">
                <Icon path={icon} className="w-5 h-5 text-brand-blue" />
              </div>
              <h3 className="text-sm font-semibold text-light-text mb-2">{title}</h3>
              <p className="text-xs text-light-text-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process({ process }: { process: SubPageConfig["process"] }) {
  return (
    <section className="py-16 bg-surface-800 border-y border-border-900">
      <div className={CONTAINER}>
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">How we work</h2>
          <p className="text-text-dim text-sm">A predictable process that keeps you informed and in control at every stage.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map(({ step, title, body }) => (
            <div key={step} className="flex items-start gap-4">
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
  );
}

function TechStack({ techStack }: { techStack: NonNullable<SubPageConfig["techStack"]> }) {
  return (
    <section className="py-14 bg-light-bg border-b border-light-border">
      <div className={CONTAINER}>
        <h2 className="text-xl font-bold text-light-text mb-8">Technologies we use</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techStack.map(({ label, items }) => (
            <div key={label} className="rounded-xl border border-light-border bg-light-surface p-5">
              <p className="text-[10px] font-semibold text-light-text-faint uppercase tracking-widest mb-3">{label}</p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span key={item} className="text-xs px-2 py-1 rounded-md bg-light-bg border border-light-border text-light-text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedPages({ pages }: { pages: NonNullable<SubPageConfig["relatedPages"]> }) {
  return (
    <section className="py-14 bg-surface-800 border-t border-border-900">
      <div className={CONTAINER}>
        <h2 className="text-xl font-bold text-white mb-6">Related services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {pages.map(({ label, href, description }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center justify-between rounded-xl border border-border-800 bg-surface-700 hover:border-brand-blue-border hover:bg-brand-blue-muted px-5 py-4 transition-all"
            >
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors">{label}</p>
                <p className="text-xs text-text-dim mt-0.5">{description}</p>
              </div>
              <svg className="w-4 h-4 text-text-faint group-hover:text-brand-blue transition-colors flex-shrink-0 ml-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection({ cta }: { cta: SubPageConfig["cta"] }) {
  return (
    <section className="py-20 bg-surface-900 border-t border-border-900">
      <div className={`${CONTAINER} text-center`}>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{cta.title}</h2>
        <p className="text-text-dim mb-8 max-w-lg mx-auto text-sm">{cta.subtitle}</p>
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
            Send us a message
          </Link>
        </div>
        <p className="mt-5 text-xs text-text-faint">Response within 24 hours. NDA available on request.</p>
      </div>
    </section>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function SubPageTemplate({ config }: { config: SubPageConfig }) {
  return (
    <main id="main-content">
      <Hero config={config} />
      {config.stats && <Stats stats={config.stats} />}
      <Capabilities capabilities={config.capabilities} />
      <Process process={config.process} />
      {config.techStack && <TechStack techStack={config.techStack} />}
      {config.relatedPages && <RelatedPages pages={config.relatedPages} />}
      <CtaSection cta={config.cta} />
    </main>
  );
}

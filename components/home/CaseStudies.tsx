/**
 * CaseStudies — three outcome-led cards.
 * Metric is the visual hero of each card — visitors see the number first,
 * which immediately communicates impact before reading the title.
 * Server Component — zero JS.
 */

import Link from "next/link";
import { CASE_STUDIES, type CaseStudy } from "@/lib/constants";

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="bg-light-bg border-b border-light-border py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ──────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div>
            <p className="text-[10px] font-medium text-brand-blue uppercase tracking-[2px] mb-3">
              Proven results
            </p>
            <h2
              id="case-studies-heading"
              className="text-3xl sm:text-4xl font-medium text-light-text tracking-tight leading-tight"
            >
              Real transformations.
              <br className="hidden sm:block" /> Measurable outcomes.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="self-start sm:self-auto flex-shrink-0 text-sm text-light-text-muted border border-light-border hover:border-light-text-muted hover:text-light-text rounded-lg px-4 py-2.5 transition-colors"
          >
            View all case studies →
          </Link>
        </div>

        {/* ── Cards grid ───────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Case study card ──────────────────────────────────────────────────────────

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group border border-light-border rounded-xl overflow-hidden hover:shadow-sm transition-shadow">

      {/* Metric block — the visual "hero" of each card */}
      <div
        className="bg-light-surface flex flex-col items-center justify-center py-10 px-6"
        aria-label={`${study.metric} ${study.metricLabel}`}
      >
        <span className="text-5xl font-medium text-light-text tracking-tight leading-none">
          {study.metric}
        </span>
        <span className="text-sm text-light-text-faint mt-1.5">
          {study.metricLabel}
        </span>
      </div>

      {/* Text body */}
      <div className="bg-light-bg p-6">
        {/* Industry tag */}
        <span className="inline-block text-[11px] font-medium text-brand-blue bg-brand-blue-muted px-2 py-1 rounded">
          {study.industry}
        </span>

        {/* Title */}
        <h3 className="mt-3 text-[14px] font-medium text-light-text leading-snug">
          {study.title}
        </h3>

        {/* Summary */}
        <p className="mt-2 text-sm text-light-text-muted leading-relaxed">
          {study.summary}
        </p>

        {/* Read more link */}
        <Link
          href={study.href}
          className="inline-flex items-center gap-1.5 mt-5 text-sm text-brand-blue group-hover:gap-2 transition-all"
          aria-label={`Read case study: ${study.title}`}
        >
          Read case study
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}

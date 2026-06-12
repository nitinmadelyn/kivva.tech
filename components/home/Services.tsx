/**
 * Services — 6-tile grid showing what KivvaTech builds.
 * Server Component — static content, zero JS.
 */

import Link from "next/link";
import { SERVICES, type Service } from "@/lib/constants";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-surface-700 border-b border-border-800 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ──────────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <p className="text-[10px] font-medium text-brand-blue uppercase tracking-[2px] mb-3">
            What we build
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-medium text-white tracking-tight leading-tight"
          >
            End-to-end AI and software
            <br className="hidden sm:block" /> engineering capabilities
          </h2>
        </div>

        {/* ── Service cards grid ───────────────────────────────────────────── */}
        {/*
         * 3-column on desktop, 2 on tablet, 1 on mobile.
         * gap-px with a bg-border colour creates the hairline grid effect
         * without extra border elements.
         */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-800 border border-border-800 rounded-xl overflow-hidden">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-text-dim border border-border-700 hover:border-border-600 hover:text-white rounded-lg px-5 py-2.5 transition-colors"
          >
            Explore all capabilities
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Service card ─────────────────────────────────────────────────────────────

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group bg-surface-600 hover:bg-surface-500 transition-colors duration-200 p-7">
      {/* Icon in a tinted square */}
      <div
        className="w-9 h-9 flex items-center justify-center rounded-lg bg-brand-blue-muted mb-5"
        aria-hidden="true"
      >
        <svg
          className="w-[18px] h-[18px] text-brand-blue"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
        </svg>
      </div>

      {/* Title */}
      <h3 className="text-[15px] font-medium text-white mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-text-dim leading-relaxed">
        {service.description}
      </p>

      {/* Arrow link — appears on hover (CSS only) */}
      <Link
        href={service.href}
        className="inline-flex items-center gap-1.5 mt-5 text-xs text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Learn more<span className="sr-only"> about {service.title}</span>
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </Link>
    </article>
  );
}

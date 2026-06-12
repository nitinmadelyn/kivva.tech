/**
 * Hero — first section a visitor sees.
 *
 * PageSpeed notes:
 *  - Pure Server Component — zero JS shipped to the browser
 *  - No images in the hero (avoids LCP image + avoids CLS from unsized images)
 *  - The large H1 text IS the LCP element; it renders immediately with the HTML
 *  - CSS-only animated dot for the "pill" badge
 */

import Link from "next/link";
import { HERO_STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-surface-800 border-b border-border-800 overflow-hidden"
    >
      {/*
       * Subtle radial glow behind the headline.
       * Pure CSS — no image, no layout shift, removes with color-scheme.
       */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-start justify-center"
      >
        <div className="mt-[-80px] w-[600px] h-[400px] rounded-full opacity-[0.07] bg-brand-blue blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">

        {/* ── Eyebrow badge ────────────────────────────────────────────────── */}
        <div className="inline-flex items-center gap-2 bg-brand-blue-muted border border-brand-blue-border rounded-full px-4 py-1.5 mb-7">
          {/* Pulsing dot — CSS only, no JS */}
          <span
            aria-hidden="true"
            className="relative flex h-[6px] w-[6px]"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-60" />
            <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-brand-blue" />
          </span>
          <span className="text-xs font-medium text-brand-blue tracking-wide">
            AI Engineering · 15+ Years · AWS Certified
          </span>
        </div>

        {/* ── H1 — only one per page; this is the LCP element ─────────────── */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] max-w-3xl mx-auto"
        >
          Ship AI products.{" "}
          <span className="text-brand-blue">Scale to any market.</span>
        </h1>

        {/* ── Sub-copy ─────────────────────────────────────────────────────── */}
        <p className="mt-5 text-base sm:text-lg text-text-dim max-w-xl mx-auto leading-relaxed">
          Pre-vetted AI engineers, cloud architects, and full-stack teams.
          Onboard in 5 days. Trusted by 480+ companies across 15+ countries.
        </p>

        {/* ── CTAs ─────────────────────────────────────────────────────────── */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/book-a-meeting"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors duration-150"
          >
            Book a Discovery Call
            <svg
              className="w-4 h-4"
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
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm text-white border border-border-700 hover:border-border-600 hover:bg-surface-700 rounded-lg transition-colors duration-150"
          >
            See Our Work
          </Link>
        </div>

        {/* ── Stats bar ────────────────────────────────────────────────────── */}
        <div
          className="mt-16 pt-10 border-t border-border-900 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border-900"
          aria-label="Company statistics"
        >
          {HERO_STATS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-surface-800 py-4 px-6 text-center"
            >
              <span
                className="block text-2xl sm:text-3xl font-medium text-white tracking-tight"
                aria-label={`${value} ${label}`}
              >
                {value}
              </span>
              <span className="block text-xs text-text-muted mt-1">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

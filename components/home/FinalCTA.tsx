/**
 * FinalCTA — conversion section at the bottom of every page.
 * Addresses the last four visitor objections directly below the buttons.
 * Server Component — zero JS.
 */

import Link from "next/link";

// ─── Objection-killer trust points ───────────────────────────────────────────
const TRUST_POINTS = [
  "Reply within 24 hours",
  "NDA available on request",
  "Encrypted & private",
  "Free consultation",
];

// ─── Check-mark SVG path ──────────────────────────────────────────────────────
const CHECK_PATH = "m4.5 12.75 6 6 9-13.5";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="bg-surface-800 border-b border-border-800 py-24"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* ── Heading ──────────────────────────────────────────────────────── */}
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight"
        >
          Ready to build something
          <br className="hidden sm:block" /> remarkable?
        </h2>

        {/* ── Sub-copy ─────────────────────────────────────────────────────── */}
        <p className="mt-4 text-base text-text-dim max-w-md mx-auto leading-relaxed">
          Book a free 30-minute discovery call. Our team will respond within
          24 hours.
        </p>

        {/* ── CTAs ─────────────────────────────────────────────────────────── */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/book-a-meeting"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors"
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
            href="mailto:inquiry@kivva.tech"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm text-white border border-border-700 hover:border-border-600 hover:bg-surface-700 rounded-lg transition-colors"
          >
            Send a message
          </Link>
        </div>

        {/* ── Trust checkmarks ─────────────────────────────────────────────── */}
        <ul
          aria-label="What to expect"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          {TRUST_POINTS.map((point) => (
            <li
              key={point}
              className="flex items-center gap-1.5 text-xs text-text-faint"
            >
              <svg
                className="w-3.5 h-3.5 text-brand-blue flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={CHECK_PATH}
                />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

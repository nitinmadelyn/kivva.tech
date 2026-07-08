/**
 * SisterAgencyCallout
 *
 * A contextual cross-sell banner linking visitors to TheClickSavvy,
 * KivvaTech's sister digital marketing agency.
 *
 * Server Component — no client-side JS needed.
 */

export default function SisterAgencyCallout() {
  return (
    <div className="rounded-xl border border-border-800 bg-surface-700 p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
      {/* Left — copy */}
      <div className="flex-1 min-w-0">
        <p className="text-xs text-text-dim mb-1">Also from KivvaTech group</p>
        <p className="text-sm font-semibold text-white mb-1">
          Looking for digital marketing?
        </p>
        <p className="text-xs text-text-dim leading-relaxed">
          Our sister agency specialises in SEO, paid ads, and brand strategy.
        </p>
      </div>

      {/* Right — CTA link */}
      <a
        href="https://theclicksavvy.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:text-brand-blue-hover transition-colors whitespace-nowrap flex-shrink-0"
      >
        Visit TheClickSavvy
        {/* External link / arrow icon */}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>
    </div>
  );
}

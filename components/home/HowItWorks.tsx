/**
 * HowItWorks — numbered four-step process.
 * The connector line between step circles is pure CSS.
 * Server Component — zero JS.
 */

import { PROCESS_STEPS, type ProcessStep } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="process-heading"
      className="bg-surface-700 border-b border-border-800 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ──────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <p className="text-[10px] font-medium text-brand-blue uppercase tracking-[2px] mb-3">
            How it works
          </p>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-medium text-white tracking-tight leading-tight"
          >
            From requirement to running
            <br className="hidden sm:block" /> in 5 days
          </h2>
        </div>

        {/* ── Steps ───────────────────────────────────────────────────────── */}
        {/*
         * On desktop: horizontal row with a connecting line behind the circles.
         * On mobile: vertical stack.
         * The "before" pseudo-line is rendered in pure CSS via a relative
         * wrapper with an absolute hr, keeping this a Server Component.
         */}
        <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">

          {/* Horizontal connector line — only visible on large screens */}
          <li
            aria-hidden="true"
            className="hidden lg:block absolute top-[19px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-border-800"
          />

          {PROCESS_STEPS.map((step, index) => (
            <ProcessStepItem
              key={step.step}
              step={step}
              isFirst={index === 0}
            />
          ))}
        </ol>

        {/* ── CTA under the steps ─────────────────────────────────────────── */}
        <div className="mt-14 text-center">
          <a
            href="/book-a-meeting"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors"
          >
            Start the process — book a call
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
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Process step item ────────────────────────────────────────────────────────

function ProcessStepItem({
  step,
  isFirst,
}: {
  step: ProcessStep;
  isFirst: boolean;
}) {
  return (
    <li className="relative z-10 flex flex-col items-center text-center lg:px-4">
      {/* Step circle — filled blue for step 1, outlined for rest */}
      <div
        className={`
          flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium mb-5 flex-shrink-0
          ${
            isFirst
              ? "bg-brand-blue text-white"
              : "bg-surface-600 border border-border-700 text-text-dim"
          }
        `}
        aria-hidden="true"
      >
        {step.step}
      </div>

      {/* Step title */}
      <h3 className="text-[14px] font-medium text-white mb-2">
        {step.title}
      </h3>

      {/* Step description */}
      <p className="text-sm text-text-dim leading-relaxed">
        {step.description}
      </p>
    </li>
  );
}

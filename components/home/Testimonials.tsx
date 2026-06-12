/**
 * Testimonials — three quote cards with star ratings.
 * Initials avatars avoid any image dependency.
 * Server Component — zero JS.
 */

import { TESTIMONIALS, type Testimonial } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-light-bg border-b border-light-border py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ──────────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <p className="text-[10px] font-medium text-brand-blue uppercase tracking-[2px] mb-3">
            Client stories
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-medium text-light-text tracking-tight"
          >
            Built with trust. Proven in production.
          </h2>
        </div>

        {/* ── Cards ────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonial card ─────────────────────────────────────────────────────────

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article
      className="border border-light-border rounded-xl p-6 flex flex-col bg-light-bg"
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      {/* Stars */}
      <div role="img" aria-label="5 out of 5 stars" className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-amber"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-1 text-sm text-light-text-muted leading-relaxed italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <footer className="mt-5 pt-4 border-t border-light-border flex items-center gap-3">
        {/* Avatar — real photo if available, initials fallback */}
        {testimonial.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            className="w-9 h-9 rounded-full object-cover flex-shrink-0"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#EEF2FF] text-xs font-medium text-brand-blue flex-shrink-0"
            aria-hidden="true"
          >
            {testimonial.initials}
          </div>
        )}
        <div>
          <cite className="not-italic text-[13px] font-medium text-light-text block">
            {testimonial.name}
          </cite>
          <span className="text-xs text-light-text-faint">
            {testimonial.role}
            {testimonial.companyHref ? (
              <>
                {" @ "}
                <a
                  href={testimonial.companyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-light-text transition-colors"
                >
                  {testimonial.company}
                </a>
              </>
            ) : (
              <>, {testimonial.company}</>
            )}
          </span>
        </div>
      </footer>
    </article>
  );
}

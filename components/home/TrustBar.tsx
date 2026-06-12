/**
 * TrustBar — client logos + review platform scores.
 *
 * The logo strip uses a CSS marquee animation (see globals.css) so it
 * scrolls infinitely without any JavaScript. Two copies of the list are
 * rendered side-by-side so the scroll never shows a gap.
 *
 * Server Component — no "use client" required.
 */

import { CLIENT_LOGOS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <section
      aria-label="Trusted by global companies"
      className="bg-light-bg border-b border-light-border py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section label ───────────────────────────────────────────────── */}
        <p className="text-center text-[10px] font-medium text-light-text-faint uppercase tracking-[2px] mb-6">
          Trusted by companies worldwide
        </p>

        {/* ── Scrolling logo strip ─────────────────────────────────────────── */}
        <div className="overflow-hidden w-full" aria-hidden="true">
          <div className="flex items-center gap-12 w-max animate-marquee">
            {CLIENT_LOGOS.map((logo) => (
              <ClientLogo key={logo.name} {...logo} />
            ))}
            {CLIENT_LOGOS.map((logo) => (
              <ClientLogo key={`${logo.name}-dup`} {...logo} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Sub-component: review platform logo ─────────────────────────────────────

function PlatformLogo({ platform }: { platform: string }) {
  if (platform === "Clutch") {
    return (
      <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Clutch" role="img">
        <rect width="60" height="20" rx="3" fill="#EF4335" />
        <text x="8" y="14" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill="white">clutch</text>
      </svg>
    );
  }
  if (platform === "Google") {
    return (
      <svg width="72" height="20" viewBox="0 0 72 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google Reviews" role="img">
        {/* G icon */}
        <path d="M9.5 8.5h4.8c.1.4.2.9.2 1.5 0 2-.7 3.6-1.9 4.7-1 1-2.5 1.6-4.3 1.6C4.8 16.3 1.7 13.2 1.7 9.5S4.8 2.7 8.3 2.7c1.9 0 3.3.7 4.3 1.7l-1.2 1.2c-.7-.7-1.8-1.2-3.1-1.2-2.5 0-4.5 2-4.5 4.6s2 4.6 4.5 4.6c2.9 0 4-2.1 4.1-3.1H8.3V8.5h1.2z" fill="#4285F4" />
        <text x="18" y="14" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="600" fill="#5F6368">Reviews</text>
      </svg>
    );
  }
  if (platform === "Trustpilot") {
    return (
      <svg width="76" height="20" viewBox="0 0 76 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Trustpilot" role="img">
        {/* Green star */}
        <rect width="20" height="20" rx="2" fill="#00B67A" />
        <path d="M10 3.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9L6.4 14.5l.7-4L4.2 7.7l4-.6L10 3.5z" fill="white" />
        <text x="24" y="14" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="600" fill="#191919">Trustpilot</text>
      </svg>
    );
  }
  return <span className="text-sm font-medium text-light-text">{platform}</span>;
}

// ─── Sub-component: Shopify Partner logo ─────────────────────────────────────

function ShopifyPartnerLogo() {
  return (
    <svg width="130" height="36" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Shopify Partner" role="img">
      {/* Shopping bag icon */}
      <rect x="2" y="13" width="18" height="16" rx="2" fill="#96BF48" />
      <path d="M6 13V10a5 5 0 0 1 10 0v3" stroke="#96BF48" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="8" cy="19" r="1.2" fill="white" />
      <circle cx="14" cy="19" r="1.2" fill="white" />
      {/* Text */}
      <text x="26" y="20" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="800" fill="#96BF48">Shopify</text>
      <text x="26" y="32" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="500" fill="#6B7280">Partner</text>
    </svg>
  );
}

// ─── Sub-component: AWS Certified logo ───────────────────────────────────────

function AWSCertifiedLogo() {
  return (
    <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AWS Certified" role="img">
      {/* AWS wordmark */}
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="900" fill="#FF9900">AWS</text>
      {/* Smile arrow beneath AWS */}
      <path d="M2 27 Q22 34 42 27" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M38 25 l5 3 l-3-4" fill="#FF9900" />
      {/* Certified + Partner label */}
      <text x="50" y="20" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#232F3E">Certified</text>
      <text x="50" y="32" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="400" fill="#6B7280">Partner</text>
    </svg>
  );
}

// ─── Sub-component: client logo ──────────────────────────────────────────────

function ClientLogo({
  name,
  file,
  width,
  height,
}: {
  name: string;
  file: string;
  width: number;
  height: number;
}) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center px-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/logos/${file}`}
        alt={`${name} logo`}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="opacity-80 hover:opacity-100 transition-opacity duration-200"
        style={{ height: `${height}px`, width: "auto" }}
      />
    </div>
  );
}

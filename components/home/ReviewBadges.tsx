/**
 * ReviewBadges — review platform scores + partner badges.
 * Extracted from TrustBar so it can be placed after the Insights section.
 */

import { REVIEWS } from "@/lib/constants";

export default function ReviewBadges() {
  return (
    <section
      aria-label="Reviews and partnerships"
      className="bg-light-bg border-t border-light-border py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <p className="text-center text-[10px] font-medium text-light-text-faint uppercase tracking-[2px] mb-10">
          Rated highly across every major platform
        </p>

        {/* Review platform scores */}
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 mb-8">
          {REVIEWS.map(({ platform, score }) => (
            <div
              key={platform}
              className="flex items-center gap-3"
              aria-label={`${score} on ${platform}`}
            >
              <PlatformLogo platform={platform} />
              <div className="flex flex-col leading-none">
                <span className="text-amber-400 text-base tracking-wide" aria-hidden="true">★★★★★</span>
                <span className="text-sm font-semibold text-light-text mt-1">{score} / 5</span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-light-border mb-8" />

        {/* Partner badges */}
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          <ShopifyPartnerLogo />
          <ShopifyPlusPartnerLogo />
          <AWSCertifiedLogo />
        </div>

      </div>
    </section>
  );
}

// width/height = 2× display size (retina-ready). Prevents CLS (no width → browser can't reserve space).
const PLATFORM_LOGOS: Record<string, { src: string; w: number; h: number; displayH: number }> = {
  Clutch:     { src: "/logos/clutch-logo.webp",     w: 252, h: 72,  displayH: 36 },
  Google:     { src: "/logos/google-logo.webp",     w: 226, h: 94,  displayH: 47 },
  Trustpilot: { src: "/logos/trustpilot-logo.webp", w: 284, h: 160, displayH: 80 },
};

function PlatformLogo({ platform }: { platform: string }) {
  const logo = PLATFORM_LOGOS[platform];
  if (logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo.src}
        alt={platform}
        width={logo.w}
        height={logo.h}
        style={{ height: `${logo.displayH}px`, width: "auto" }}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return <span className="text-sm font-medium text-light-text">{platform}</span>;
}

function ShopifyPartnerLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logos/shopify-partner.webp"
      alt="Shopify Partner"
      width={348}
      height={96}
      style={{ height: "48px", width: "auto" }}
      loading="lazy"
      decoding="async"
    />
  );
}

function ShopifyPlusPartnerLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logos/shopify-plus-partner.webp"
      alt="Shopify Plus Partner"
      width={322}
      height={96}
      style={{ height: "48px", width: "auto" }}
      loading="lazy"
      decoding="async"
    />
  );
}

function AWSCertifiedLogo() {
  return (
    <svg width="160" height="48" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AWS Certified" role="img">
      <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="900" fill="#FF9900">AWS</text>
      <path d="M2 37 Q26 46 54 37" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M49 34 l7 4 l-4-6" fill="#FF9900" />
      <text x="66" y="26" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="700" fill="#232F3E">Certified</text>
      <text x="66" y="42" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="400" fill="#6B7280">Partner</text>
    </svg>
  );
}

/**
 * ReviewBadges — review platform scores + partner badges.
 * Extracted from TrustBar so it can be placed after the Insights section.
 */

import { REVIEWS } from "@/lib/constants";

export default function ReviewBadges() {
  return (
    <section
      aria-label="Reviews and partnerships"
      className="bg-light-bg border-t border-light-border py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {REVIEWS.map(({ platform, score }) => (
            <div
              key={platform}
              className="flex items-center gap-2"
              aria-label={`${score} on ${platform}`}
            >
              <PlatformLogo platform={platform} />
              <div className="flex flex-col leading-none">
                <span className="text-amber-400 text-xs tracking-wide" aria-hidden="true">★★★★★</span>
                <span className="text-[11px] font-semibold text-light-text mt-0.5">{score} / 5</span>
              </div>
            </div>
          ))}

          <span className="text-light-border hidden sm:block" aria-hidden="true">|</span>

          <ShopifyPartnerLogo />
          <AWSCertifiedLogo />
        </div>
      </div>
    </section>
  );
}

const PLATFORM_LOGOS: Record<string, { src: string; height: number }> = {
  Clutch:     { src: "/logos/clutch-logo.png",     height: 24 },
  Google:     { src: "/logos/google-logo.png",     height: 24 },
  Trustpilot: { src: "/logos/trustpilot-logo.png", height: 40 },
};

function PlatformLogo({ platform }: { platform: string }) {
  const logo = PLATFORM_LOGOS[platform];
  if (logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo.src}
        alt={platform}
        style={{ height: `${logo.height}px`, width: "auto" }}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return <span className="text-sm font-medium text-light-text">{platform}</span>;
}

function ShopifyPartnerLogo() {
  return (
    <svg width="130" height="36" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Shopify Partner" role="img">
      <rect x="2" y="13" width="18" height="16" rx="2" fill="#96BF48" />
      <path d="M6 13V10a5 5 0 0 1 10 0v3" stroke="#96BF48" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="8" cy="19" r="1.2" fill="white" />
      <circle cx="14" cy="19" r="1.2" fill="white" />
      <text x="26" y="20" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="800" fill="#96BF48">Shopify</text>
      <text x="26" y="32" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="500" fill="#6B7280">Partner</text>
    </svg>
  );
}

function AWSCertifiedLogo() {
  return (
    <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AWS Certified" role="img">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="900" fill="#FF9900">AWS</text>
      <path d="M2 27 Q22 34 42 27" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M38 25 l5 3 l-3-4" fill="#FF9900" />
      <text x="50" y="20" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#232F3E">Certified</text>
      <text x="50" y="32" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="400" fill="#6B7280">Partner</text>
    </svg>
  );
}

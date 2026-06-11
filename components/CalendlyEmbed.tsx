"use client";

/**
 * CalendlyEmbed — inline Calendly scheduling widget.
 *
 * Always imported via `dynamic(..., { ssr: false })` from the parent page.
 * That means this component is never rendered on the server, so Calendly's
 * post-mount style mutations (raw CSS property names vs React camelCase)
 * can never produce a hydration mismatch.
 */

import Script from "next/script";

interface Props {
  url: string;
  height?: number;
}

export default function CalendlyEmbed({ url, height = 700 }: Props) {
  return (
    <>
      <div
        className="calendly-inline-widget w-full rounded-xl overflow-hidden bg-surface-700"
        data-url={`${url}?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=4f9dff`}
        style={{ minWidth: "320px", height: `${height}px` }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}

"use client";

/**
 * CalendlyWrapper — client boundary that lazy-loads CalendlyEmbed with ssr:false.
 *
 * next/dynamic with ssr:false is only allowed inside Client Components.
 * The book-a-meeting page is a Server Component (it exports `metadata`), so
 * the dynamic call must live here instead of in the page directly.
 */

import dynamic from "next/dynamic";

const CalendlyEmbed = dynamic(() => import("@/components/CalendlyEmbed"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-xl bg-surface-700"
      style={{ minWidth: "320px", height: "700px" }}
      aria-hidden="true"
    />
  ),
});

export default function CalendlyWrapper({ url, height }: { url: string; height?: number }) {
  return <CalendlyEmbed url={url} height={height} />;
}

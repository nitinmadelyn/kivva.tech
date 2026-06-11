import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { INDUSTRY_PAGES } from "@/lib/phase4-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryPageTemplate from "@/components/pages/IndustryPageTemplate";

const config = INDUSTRY_PAGES["healthcare"];

export const metadata: Metadata = buildMetadata({
  title: config.metaTitle,
  description: config.metaDescription,
  path: config.path,
  keywords: config.metaKeywords,
});

export default function Page() {
  return (
    <>
      <Navbar />
      <IndustryPageTemplate config={config} />
      <Footer />
    </>
  );
}

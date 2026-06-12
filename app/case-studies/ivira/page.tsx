import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { CASE_STUDIES } from "@/lib/phase5-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudyTemplate from "@/components/pages/CaseStudyTemplate";

const config = CASE_STUDIES["ivira"];

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
      <CaseStudyTemplate config={config} />
      <Footer />
    </>
  );
}

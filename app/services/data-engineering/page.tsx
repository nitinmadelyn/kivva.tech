import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SERVICES_PAGES } from "@/lib/phase2-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SubPageTemplate from "@/components/pages/SubPageTemplate";

const config = SERVICES_PAGES["data-engineering"];

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
      <SubPageTemplate config={config} />
      <Footer />
    </>
  );
}

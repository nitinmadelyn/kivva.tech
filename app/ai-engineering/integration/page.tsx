import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { AI_ENGINEERING_PAGES } from "@/lib/phase2-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SubPageTemplate from "@/components/pages/SubPageTemplate";

const config = AI_ENGINEERING_PAGES["integration"];

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

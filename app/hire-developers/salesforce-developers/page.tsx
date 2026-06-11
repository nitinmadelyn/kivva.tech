import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HIRE_DEV_ROLES } from "@/lib/phase3-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HireDevPageTemplate from "@/components/pages/HireDevPageTemplate";

const role = HIRE_DEV_ROLES["salesforce-developers"];

export const metadata: Metadata = buildMetadata({
  title: role.metaTitle,
  description: role.metaDescription,
  path: role.path,
  keywords: role.metaKeywords,
});

export default function Page() {
  return (
    <>
      <Navbar />
      <HireDevPageTemplate role={role} />
      <Footer />
    </>
  );
}

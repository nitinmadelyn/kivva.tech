/**
 * /privacy — Privacy Policy page.
 * Server Component — zero client JS.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "KivvaTech Privacy Policy — how we collect, use, and protect your personal data.",
  path: "/privacy",
  keywords: ["privacy policy", "KivvaTech privacy", "data protection"],
});

const CONTAINER = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";

const LAST_UPDATED = "June 1, 2026";

const SECTIONS = [
  {
    heading: "1. Information we collect",
    body: [
      "We collect information you provide directly to us, including when you submit an enquiry through our contact form, book a discovery call, or email us directly. This may include your name, email address, phone number, company name, and the content of your message.",
      "We also collect certain information automatically when you visit our website, including IP address, browser type, operating system, referring URLs, and pages viewed. This information is collected via standard web server logs and analytics tools.",
    ],
  },
  {
    heading: "2. How we use your information",
    body: [
      "We use the information we collect to respond to your enquiries and provide the services you request, to send you information about our services where you have requested it, to improve our website and services, and to comply with legal obligations.",
      "We do not sell, rent, or trade your personal information to third parties. We do not use your information for automated decision-making or profiling.",
    ],
  },
  {
    heading: "3. Legal basis for processing",
    body: [
      "Where applicable under the GDPR and similar data protection laws, we process your personal data on the following legal bases: performance of a contract (to fulfil your requests and provide services), legitimate interests (to operate and improve our business), consent (where you have opted in to communications), and compliance with legal obligations.",
    ],
  },
  {
    heading: "4. Data sharing and third parties",
    body: [
      "We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services — including cloud hosting providers, email service providers, and analytics tools. These providers are contractually required to keep your information confidential and to use it only for the purposes for which it was shared.",
      "We may disclose your information where required by law, regulation, or legal process, or where necessary to protect the rights and safety of KivvaTech, our clients, or others.",
    ],
  },
  {
    heading: "5. Data retention",
    body: [
      "We retain personal data for as long as necessary to fulfil the purposes for which it was collected, to provide our services, and to comply with our legal obligations. Enquiry and contact data is typically retained for up to 3 years from the date of last contact, unless you request earlier deletion or a longer retention is required by law.",
    ],
  },
  {
    heading: "6. Cookies",
    body: [
      "Our website uses cookies to improve your browsing experience and to collect anonymous analytics data about how visitors use the site. Essential cookies are required for the website to function. Analytics cookies are used only with your consent.",
      "You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of some parts of the website.",
    ],
  },
  {
    heading: "7. Your rights",
    body: [
      "Depending on your location and applicable law, you may have rights with respect to your personal data including: the right to access the personal data we hold about you, the right to correct inaccurate data, the right to request deletion of your data, the right to restrict or object to processing, and the right to data portability.",
      `To exercise any of these rights, please contact us at ${SITE.email}. We will respond to all requests within 30 days.`,
    ],
  },
  {
    heading: "8. International transfers",
    body: [
      "KivvaTech operates globally with offices in the United States and India. Your personal data may be transferred to and processed in countries outside your country of residence. Where such transfers occur, we ensure appropriate safeguards are in place in accordance with applicable data protection law.",
    ],
  },
  {
    heading: "9. Security",
    body: [
      "We take reasonable technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. Our systems are hosted on AWS Certified infrastructure and we maintain Shopify Partner aligned security practices.",
      "No method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "10. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised effective date. We encourage you to review this page periodically. Your continued use of our website after any changes constitutes your acceptance of the updated policy.",
    ],
  },
  {
    heading: "11. Contact us",
    body: [
      `If you have questions about this Privacy Policy or how we handle your personal data, please contact our privacy team at ${SITE.email} or by post at: KivvaTech, 4905 NW 105th Dr, Coral Springs, FL 33076, United States.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-surface-900">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="pt-20 pb-10 bg-surface-800 border-b border-border-900">
          <div className={CONTAINER}>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Privacy Policy</h1>
            <p className="text-xs text-text-faint">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        {/* ── Content ───────────────────────────────────────────────────── */}
        <section className="py-14 bg-light-bg border-b border-light-border">
          <div className={CONTAINER}>
            <div className="max-w-2xl space-y-10">
              <p className="text-sm text-light-text-muted leading-relaxed">
                KivvaTech (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, store, and share information when you visit our website or interact with our services.
              </p>

              {SECTIONS.map(({ heading, body }) => (
                <div key={heading}>
                  <h2 className="text-base font-bold text-light-text mb-3">{heading}</h2>
                  <div className="space-y-3">
                    {body.map((para, i) => (
                      <p key={i} className="text-sm text-light-text-muted leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-light-border">
                <p className="text-xs text-light-text-faint">
                  Questions?{" "}
                  <a href={`mailto:${SITE.email}`} className="text-brand-blue hover:underline">{SITE.email}</a>
                  {" "}or{" "}
                  <Link href="/contact" className="text-brand-blue hover:underline">use our contact form</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

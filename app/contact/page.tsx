/**
 * /contact — general enquiry page.
 *
 * Content is constrained to max-w-5xl (matches the nav's inner content span).
 * Layout: flex row on desktop — form grows left, fixed 320px sidebar on right.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with KivvaTech. Offices in Florida, Dallas, and Ahmedabad. We respond within 24 hours.",
  path: "/contact",
  keywords: ["contact KivvaTech", "KivvaTech office", "AI company contact"],
});

const ICONS = {
  email:   "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
  phone:   "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z",
  pin:     "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6.75 1.5a9.75 9.75 0 1 1-19.5 0 9.75 9.75 0 0 1 19.5 0z",
  clock:   "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
  shield:  "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  linkedin:  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  arrow:   "m8.25 4.5 7.5 7.5-7.5 7.5",
};

// Shared container — matches the nav's inner content span
const CONTAINER = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="bg-surface-900 min-h-screen">

        {/* ── Page header ──────────────────────────────────────────────── */}
        <div className="bg-surface-800 border-b border-border-900 pt-20 pb-10">
          <div className={CONTAINER}>
            <p className="text-xs font-semibold text-brand-blue uppercase tracking-widest mb-3">
              Contact
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Get in Touch
            </h1>
            <p className="text-text-dim max-w-md text-sm leading-relaxed">
              Have a project in mind or want to know more? Drop us a message and
              we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>

        {/* ── Two-column body ───────────────────────────────────────────── */}
        <div className="bg-light-bg border-b border-light-border">
          <div className={`${CONTAINER} py-12`}>
            <div className="flex flex-col lg:flex-row gap-8">

              {/* ── Form card ──────────────────────────────────────────── */}
              <div className="flex-1 min-w-0 rounded-2xl border border-light-border bg-light-surface p-8">
                <h2 className="text-base font-semibold text-light-text mb-6">
                  Send us a message
                </h2>
                <ContactForm />
              </div>

              {/* ── Sidebar ────────────────────────────────────────────── */}
              <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-4">

                {/* Direct contact */}
                <div className="rounded-2xl border border-light-border bg-light-surface p-6">
                  <p className="text-[11px] font-semibold text-light-text-faint uppercase tracking-widest mb-4">
                    Direct contact
                  </p>
                  <div className="space-y-3">
                    <a href={`mailto:${SITE.email}`} className="group flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-blue-muted flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d={ICONS.email} />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] text-light-text-faint uppercase tracking-wider">Email</p>
                        <p className="text-xs font-medium text-brand-blue group-hover:text-brand-blue-hover transition-colors truncate">
                          {SITE.email}
                        </p>
                      </div>
                    </a>

                    <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="group flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-blue-muted flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d={ICONS.phone} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] text-light-text-faint uppercase tracking-wider">Phone</p>
                        <p className="text-xs font-medium text-brand-blue group-hover:text-brand-blue-hover transition-colors">
                          {SITE.phone}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Offices */}
                <div className="rounded-2xl border border-light-border bg-light-surface p-6">
                  <p className="text-[11px] font-semibold text-light-text-faint uppercase tracking-widest mb-4">
                    Offices
                  </p>
                  <div className="space-y-3">
                    {SITE.offices.map(({ city, address }) => (
                      <div key={city} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-md bg-brand-blue-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d={ICONS.pin} />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-light-text">{city}</p>
                          <p className="text-[11px] text-light-text-muted mt-0.5 leading-relaxed">{address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Response promise */}
                <div className="rounded-2xl border border-brand-blue-border bg-brand-blue-muted p-5 flex items-start gap-3">
                  <svg className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={ICONS.clock} />
                  </svg>
                  <div>
                    <p className="text-xs font-semibold text-white">Reply within 24 hours</p>
                    <p className="text-[11px] text-text-dim mt-1 leading-relaxed">
                      Mon–Fri, 9 AM – 6 PM EST.<br />Urgent? Call us directly.
                    </p>
                  </div>
                </div>

                {/* Bottom row: NDA + social */}
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-1.5 text-[11px] text-light-text-muted">
                    <svg className="w-3.5 h-3.5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={ICONS.shield} />
                    </svg>
                    NDA available
                  </div>
                  <div className="flex gap-2">
                    {[
                      { label: "LinkedIn", href: SITE.social.linkedin, icon: ICONS.linkedin },
                      { label: "Instagram", href: SITE.social.instagram, icon: ICONS.instagram },
                    ].map(({ label, href, icon }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                        className="w-7 h-7 rounded-lg border border-light-border bg-light-bg flex items-center justify-center text-light-text-muted hover:text-light-text hover:border-light-text-faint transition-colors">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d={icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Book a call nudge */}
                <Link href="/book-a-meeting"
                  className="flex items-center justify-between rounded-2xl border border-light-border bg-light-surface hover:border-brand-blue-border hover:bg-brand-blue-muted px-5 py-4 transition-all group">
                  <div>
                    <p className="text-xs font-semibold text-light-text group-hover:text-brand-blue transition-colors">
                      Prefer a call?
                    </p>
                    <p className="text-[11px] text-light-text-muted mt-0.5">Free 30-min discovery call</p>
                  </div>
                  <svg className="w-4 h-4 text-light-text-faint group-hover:text-brand-blue transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={ICONS.arrow} />
                  </svg>
                </Link>

              </aside>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}

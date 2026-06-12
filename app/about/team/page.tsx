/**
 * /about/team — Leadership team page.
 * Server Component — zero client JS.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CultureGallery, { type CulturePhoto } from "@/components/CultureGallery";

export const metadata: Metadata = buildMetadata({
  title: "Our Team",
  description:
    "Meet the KivvaTech leadership team — engineers, product leaders, and domain experts who have been building AI and software products for 15+ years.",
  path: "/about/team",
  keywords: ["KivvaTech team", "KivvaTech leadership", "AI engineering team", "software company team"],
});

const CONTAINER = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";
const ARROW_ICON = "m8.25 4.5 7.5 7.5-7.5 7.5";
const LINKEDIN_PATH = "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z";

const LEADERS = [
  {
    name: "Nitin Muchhadiya",
    role: "Founder & CEO",
    photo: "/team/nitin.png",
    socials: [
      { label: "LinkedIn",  href: "https://www.linkedin.com/in/nitinmuchhadiya/" },
      { label: "Github",    href: "https://github.com/nitinmadelyn" },
    ],
  },
  {
    name: "Abhishek Kadavil",
    role: "Co-Founder & COO",
    photo: "/team/abhishek.webp",
    socials: [
      { label: "LinkedIn",  href: "https://www.linkedin.com/in/abhishek-k-09a67319a/" },
      { label: "Instagram", href: "https://www.instagram.com/abhishekkadavil" },
    ],
  },
];

// ─── Culture photos ───────────────────────────────────────────────────────────
// Images live in /public/culture/. Add or remove entries to match uploads.
// The first image uses priority=true (above-the-fold LCP optimisation).
const CULTURE_PHOTOS: CulturePhoto[] = [
  {
    src: "/culture/photo-1.jpeg",
    alt: "Teammates sharing sweets during a birthday celebration at the Ahmedabad office",
    caption: "Birthday celebrations in the office",
    wide: true,
    priority: true,
    objectPosition: "center 36%",
  },
  {
    src: "/culture/photo-2.jpeg",
    alt: "Three team members striking a fun see-no-evil, hear-no-evil, speak-no-evil pose at a café during a team outing",
    caption: "Team outing at a local café",
  },
  {
    src: "/culture/photo-3.jpeg",
    alt: "Six KivvaTech team members smiling together for a group selfie outside on a sunny team outing day",
    caption: "Team outing day",
  },
  {
    src: "/culture/photo-4.jpeg",
    alt: "Five colleagues taking a quick office selfie in the Ahmedabad workspace",
    caption: "The Ahmedabad crew",
  },
  {
    src: "/culture/photo-5.jpeg",
    alt: "The KivvaTech team enjoying a sit-down lunch together at a restaurant, celebrating a milestone",
    caption: "Team lunch to celebrate a milestone",
  },
  {
    src: "/culture/photo-6.jpeg",
    alt: "Six team members sharing a dinner at a colourful traditional restaurant with festive bunting overhead",
    caption: "Team dinner at a traditional restaurant",
    wide: true,
    objectPosition: "center 60%",
  },
  {
    src: "/culture/photo-7.jpeg",
    alt: "Three engineers focused at their laptops and monitors during a deep-work session at the Ahmedabad office",
    caption: "Deep work session at the office",
  },
];

const DEPARTMENTS = [
  { name: "AI Engineering", count: "120+", description: "LLM, ML, computer vision, and agentic systems engineers." },
  { name: "Cloud & DevOps", count: "80+", description: "AWS, Azure, GCP architects and platform engineers." },
  { name: "Full Stack", count: "150+", description: "React, Node.js, Python, and mobile developers." },
  { name: "Data Engineering", count: "60+", description: "Pipeline, warehouse, and ML feature store engineers." },
  { name: "Salesforce & ERP", count: "40+", description: "Certified Apex, LWC, CPQ, and Odoo specialists." },
  { name: "QA & Security", count: "50+", description: "Test automation, security review, and compliance engineers." },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-surface-900">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="pt-20 pb-16 bg-surface-800 border-b border-border-900">
          <div className={CONTAINER}>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-faint mb-6">
              <Link href="/" className="hover:text-text-dim transition-colors">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-text-dim transition-colors">About</Link>
              <span>/</span>
              <span className="text-text-dim">Team</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue-border bg-brand-blue-muted mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
              <span className="text-xs font-medium text-brand-blue">Our Team</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              The people behind<br />
              <span className="text-brand-blue">the products.</span>
            </h1>
            <p className="text-text-dim max-w-2xl text-base leading-relaxed">
              500+ engineers, architects, and product specialists across India, the US, and Europe — united by a commitment to shipping things that work.
            </p>
          </div>
        </section>

        {/* ── Leadership ────────────────────────────────────────────────── */}
        <section className="py-16 bg-light-bg border-b border-light-border">
          <div className={CONTAINER}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">

              {/* Photo cards */}
              {LEADERS.map(({ name, role, photo, socials }) => (
                <div key={name} className="flex flex-col gap-3">
                  {/* Photo */}
                  <div className="relative rounded-2xl overflow-hidden bg-light-surface border border-light-border" style={{ aspectRatio: "3 / 4" }}>
                    <Image
                      src={photo}
                      alt={`${name}, ${role} at KivvaTech`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      priority
                      className="object-cover object-top"
                    />
                    {/* Social links overlaid at bottom-left */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {socials.map(({ label, href }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm text-xs font-semibold text-white border border-white/15 transition-colors"
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* Name & role */}
                  <div>
                    <p className="text-base font-bold text-light-text">{name}</p>
                    <p className="text-sm text-light-text-muted">{role}</p>
                  </div>
                </div>
              ))}

              {/* Text block */}
              <div className="sm:pl-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-light-text leading-tight mb-4">
                  Creative<br />leaders
                </h2>
                <p className="text-light-text-muted text-sm leading-relaxed">
                  Technical experts dedicated to delivering flawless, high-performing digital experiences.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── Engineering departments ───────────────────────────────────── */}
        <section className="py-14 bg-surface-800 border-y border-border-900">
          <div className={CONTAINER}>
            <h2 className="text-xl font-bold text-white mb-2">Engineering practices</h2>
            <p className="text-text-dim text-sm mb-8">Specialised teams across every major technology discipline.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DEPARTMENTS.map(({ name, count, description }) => (
                <div key={name} className="rounded-xl border border-border-800 bg-surface-700 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-white">{name}</h3>
                    <span className="text-xs font-bold text-brand-blue">{count}</span>
                  </div>
                  <p className="text-xs text-text-dim leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Life at KivvaTech ─────────────────────────────────────────── */}
        <section className="py-16 bg-light-bg border-b border-light-border">
          <div className={CONTAINER}>
            <h2 className="text-2xl font-bold text-light-text mb-2">Life at KivvaTech</h2>
            <p className="text-light-text-muted text-sm mb-8">
              A glimpse into how we work, connect, and grow together.
            </p>

            <CultureGallery photos={CULTURE_PHOTOS} />
          </div>
        </section>

        {/* ── Culture ───────────────────────────────────────────────────── */}
        <section className="py-14 bg-surface-800 border-b border-border-900">
          <div className={CONTAINER}>
            <div className="rounded-2xl border border-border-800 bg-surface-700 p-8 sm:p-10">
              <h2 className="text-xl font-bold text-white mb-4">What makes our engineers different</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-text-dim leading-relaxed">
                <p>Every engineer at KivvaTech goes through a rigorous technical screening before joining a client project: not just a coding test, but a full assessment of system design thinking, communication, and engineering judgement.</p>
                <p>We invest heavily in continuous development: internal learning tracks, conference attendance, certifications, and access to the latest AI tooling. Engineers here stay at the frontier because we make it easy to.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="py-16 bg-surface-800 border-t border-border-900">
          <div className={`${CONTAINER} text-center`}>
            <h2 className="text-2xl font-bold text-white mb-3">Want to join us?</h2>
            <p className="text-text-dim mb-8 max-w-md mx-auto text-sm">
              We are always looking for exceptional engineers. See our open roles.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/careers" className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors">
                View open roles
              </Link>
              <Link href="/about" className="inline-flex items-center gap-1.5 px-7 py-3.5 text-sm font-semibold text-white border border-border-700 hover:border-border-600 rounded-lg transition-colors">
                About KivvaTech
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={ARROW_ICON} />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

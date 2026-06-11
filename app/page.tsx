/**
 * Homepage — assembles all section components.
 *
 * Every import here is a Server Component, which means:
 *  - The entire page is rendered to HTML on the server
 *  - Zero client-side JavaScript for any section (except MobileMenuToggle in Navbar)
 *  - First Contentful Paint (FCP) and Largest Contentful Paint (LCP) are fast
 *    because the browser receives fully-rendered HTML, not a JS shell
 *
 * SEO:
 *  - Page-level metadata is exported and merged with the root layout metadata
 *  - JSON-LD is injected in layout.tsx (applies to all pages)
 */

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Services from "@/components/home/Services";
import CaseStudies from "@/components/home/CaseStudies";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import FinalCTA from "@/components/home/FinalCTA";

// ─── Page-level SEO metadata ──────────────────────────────────────────────────
// Overrides the root-layout defaults just for the homepage.
export const metadata: Metadata = buildMetadata({
  // No `title` override — the default full title is used on the homepage
  keywords: [
    "AI engineering firm",
    "hire AI developers 2026",
    "enterprise AI solutions",
    "offshore development team",
    "hire full stack developers",
    "LLM development company",
    "agentic AI development",
  ],
});

// ─── Page component ───────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/*
       * <Navbar> uses sticky positioning so it overlays content on scroll.
       * Placed outside <main> because it is a navigation landmark, not page content.
       */}
      <Navbar />

      {/*
       * <main> wraps all page content below the nav.
       * The id="main-content" lets the skip-link (in Navbar) jump past the header.
       */}
      <main id="main-content">
        {/* 1. Hero — LCP element is the H1 text; renders immediately */}
        <Hero />

        {/* 2. Trust bar — logos + review scores. White section for contrast break */}
        <TrustBar />

        {/* 3. Services — what KivvaTech builds */}
        <Services />

        {/* 4. Case studies — outcome-led cards with big metric numbers */}
        <CaseStudies />

        {/* 5. How it works — 4-step onboarding process */}
        <HowItWorks />

        {/* 6. Testimonials — social proof from named clients */}
        <Testimonials />

        {/* 7. Blog preview — 3 recent articles (builds authority + SEO) */}
        <BlogPreview />

        {/* 8. Final CTA — book a call with objection-killers below the buttons */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

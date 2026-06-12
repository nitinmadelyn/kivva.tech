/**
 * /blog — Blog listing page.
 * Server Component — zero client JS.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BLOG_POSTS_LIST } from "@/lib/phase6-data";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Engineering insights, AI architecture patterns, and industry perspectives from the KivvaTech team.",
  path: "/blog",
  keywords: ["AI engineering blog", "software development blog", "LLM architecture", "AI strategy", "KivvaTech blog"],
});

const CONTAINER = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";
const ARROW_ICON = "m8.25 4.5 7.5 7.5-7.5 7.5";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-surface-900">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="pt-20 pb-14 bg-surface-800 border-b border-border-900">
          <div className={CONTAINER}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue-border bg-brand-blue-muted mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
              <span className="text-xs font-medium text-brand-blue">Blog</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Engineering insights<br />
              <span className="text-brand-blue">from the field.</span>
            </h1>
            <p className="text-text-dim max-w-xl text-base leading-relaxed">
              AI architecture patterns, production engineering lessons, and industry perspectives — written by the engineers who ship these systems.
            </p>
          </div>
        </section>

        {/* ── Post list ─────────────────────────────────────────────────── */}
        <section className="py-16 bg-light-bg border-b border-light-border">
          <div className={CONTAINER}>
            <div className="space-y-5">
              {BLOG_POSTS_LIST.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row gap-5 rounded-2xl border border-light-border bg-light-surface hover:border-brand-blue-border hover:bg-brand-blue-muted transition-all duration-200 overflow-hidden"
                >
                  {/* Thumbnail */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full sm:w-48 h-44 sm:h-auto object-cover flex-shrink-0"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="flex-1 min-w-0 p-6 sm:pl-0 sm:py-6 sm:pr-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-brand-blue">{post.category}</span>
                      <span className="text-light-text-faint text-xs">·</span>
                      <span className="text-xs text-light-text-faint">{post.date}</span>
                      <span className="text-light-text-faint text-xs">·</span>
                      <span className="text-xs text-light-text-faint">{post.readTime}</span>
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-light-text group-hover:text-brand-blue transition-colors leading-snug mb-2">
                      {post.title}
                    </h2>
                    <p className="text-xs text-light-text-muted leading-relaxed">{post.description}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-5 h-5 rounded-full bg-brand-blue-muted border border-brand-blue-border flex items-center justify-center flex-shrink-0">
                        <span className="text-[8px] font-bold text-brand-blue">{post.author[0]}</span>
                      </div>
                      <span className="text-xs text-light-text-muted">{post.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center self-center flex-shrink-0 pr-6 sm:pr-0">
                    <svg className="w-5 h-5 text-light-text-faint group-hover:text-brand-blue transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={ARROW_ICON} />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="py-14 bg-surface-800 border-t border-border-900">
          <div className={`${CONTAINER} text-center`}>
            <h2 className="text-xl font-bold text-white mb-3">Want to work with the team that writes this?</h2>
            <p className="text-text-dim mb-6 max-w-md mx-auto text-sm">
              The same engineers behind these posts are available to work on your product.
            </p>
            <Link href="/book-a-meeting" className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors">
              Book a free discovery call
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

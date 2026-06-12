/**
 * /blog/[slug] — Individual blog post page.
 * Static generation via generateStaticParams — zero client JS.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { BLOG_POSTS_DATA, BLOG_POSTS_LIST } from "@/lib/phase6-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CONTAINER = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";
const ARROW_ICON = "m8.25 4.5 7.5 7.5-7.5 7.5";

export function generateStaticParams() {
  return BLOG_POSTS_LIST.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA[slug];
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: post.metaKeywords,
    image: post.image,
    ogType: "article",
    publishedTime: post.dateISO,
    authors: [post.author],
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA[slug];
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-surface-900">

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <div className="bg-surface-800 border-b border-border-900 pt-20 pb-12">
          <div className={CONTAINER}>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-faint mb-6">
              <Link href="/" className="hover:text-text-dim transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-text-dim transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-text-dim truncate max-w-[200px]">{post.category}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-blue-border bg-brand-blue-muted text-xs font-medium text-brand-blue">
                {post.category}
              </span>
              <span className="text-xs text-text-faint">{post.date}</span>
              <span className="text-text-faint text-xs">·</span>
              <span className="text-xs text-text-faint">{post.readTime}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-5 max-w-3xl">
              {post.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-blue-muted border border-brand-blue-border flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-brand-blue">{post.author[0]}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{post.author}</p>
                <p className="text-xs text-text-dim">{post.authorRole}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Hero image ──────────────────────────────────────────────────── */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          loading="eager"
          decoding="async"
        />

        {/* ── Article body ────────────────────────────────────────────────── */}
        <article className="py-14 bg-light-bg border-b border-light-border">
          <div className={CONTAINER}>
            <div className="max-w-2xl">

              {/* Intro */}
              <p className="text-base text-light-text-muted leading-relaxed mb-10 font-medium">
                {post.intro}
              </p>

              {/* Sections */}
              {post.sections.map(({ heading, body }) => (
                <section key={heading} className="mb-10">
                  <h2 className="text-lg sm:text-xl font-bold text-light-text mb-4 leading-snug">
                    {heading}
                  </h2>
                  <div className="space-y-4">
                    {body.map((paragraph, i) => (
                      <p key={i} className="text-sm text-light-text-muted leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-light-border">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-light-bg border border-light-border text-light-text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* ── Related posts ────────────────────────────────────────────────── */}
        {post.relatedPosts.length > 0 && (
          <section className="py-12 bg-surface-800 border-t border-border-900">
            <div className={CONTAINER}>
              <h2 className="text-lg font-bold text-white mb-5">More from the blog</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {post.relatedPosts.map(({ title, slug: relSlug, category }) => (
                  <Link
                    key={relSlug}
                    href={`/blog/${relSlug}`}
                    className="group flex flex-col gap-2 p-5 rounded-xl border border-border-800 bg-surface-700 hover:border-brand-blue-border hover:bg-brand-blue-muted transition-all duration-200"
                  >
                    <span className="text-[10px] font-semibold text-brand-blue uppercase tracking-wide">{category}</span>
                    <span className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors leading-snug">{title}</span>
                    <svg className="w-4 h-4 text-text-faint group-hover:text-brand-blue transition-colors mt-auto" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={ARROW_ICON} />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section className="py-16 bg-surface-900 border-t border-border-900">
          <div className={`${CONTAINER} text-center`}>
            <h2 className="text-xl font-bold text-white mb-3">Want to build this with us?</h2>
            <p className="text-text-dim mb-6 max-w-md mx-auto text-sm">
              The engineers who wrote this post are available for your project.
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

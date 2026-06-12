/**
 * BlogPreview — three recent article teasers.
 * Server Component — zero JS.
 */

import Link from "next/link";
import { BLOG_POSTS, type BlogPost } from "@/lib/constants";

export default function BlogPreview() {
  return (
    <section
      id="insights"
      aria-labelledby="blog-heading"
      className="bg-surface-700 border-b border-border-800 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ──────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div>
            <p className="text-[10px] font-medium text-brand-blue uppercase tracking-[2px] mb-3">
              Insights
            </p>
            <h2
              id="blog-heading"
              className="text-3xl sm:text-4xl font-medium text-white tracking-tight"
            >
              From the knowledge hub
            </h2>
          </div>
          <Link
            href="/blog"
            className="self-start sm:self-auto flex-shrink-0 text-sm text-text-dim border border-border-700 hover:border-border-600 hover:text-white rounded-lg px-4 py-2.5 transition-colors"
          >
            Visit the blog →
          </Link>
        </div>

        {/* ── Cards ────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Blog card ────────────────────────────────────────────────────────────────

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="relative group border border-border-800 rounded-xl overflow-hidden hover:border-border-700 transition-colors">

      {/* Thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-44 object-cover"
        loading="lazy"
        decoding="async"
      />

      {/* Content */}
      <div className="p-5">
        {/* Category tag */}
        <span className="inline-block text-[11px] font-medium text-brand-blue bg-brand-blue-muted px-2 py-1 rounded">
          {post.category}
        </span>

        {/* Title */}
        <h3 className="mt-3 text-[14px] font-medium text-white leading-snug group-hover:text-brand-blue transition-colors">
          <Link href={post.href} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>

        {/* Meta */}
        <p className="mt-3 text-xs text-text-muted">
          {post.readTime} · {post.date}
        </p>
      </div>
    </article>
  );
}

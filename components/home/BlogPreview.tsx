/**
 * BlogPreview — three recent article teasers.
 * Abstract SVG icon replaces the hero image in each card so no external
 * image is needed and there is zero CLS risk.
 * Server Component — zero JS.
 */

import Link from "next/link";
import { BLOG_POSTS, type BlogPost } from "@/lib/constants";

// ─── Map category → a distinct icon path (Heroicons outline) ─────────────────
const CATEGORY_ICONS: Record<string, string> = {
  "AI Engineering":
    "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  "AI Agents":
    "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25zm.75-12h9v9h-9v-9z",
  "Industry Insights":
    "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z",
};

const DEFAULT_ICON =
  "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25";

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
  const iconPath = CATEGORY_ICONS[post.category] ?? DEFAULT_ICON;

  return (
    <article className="relative group border border-border-800 rounded-xl overflow-hidden hover:border-border-700 transition-colors">

      {/* Abstract icon "thumbnail" — no external image needed */}
      <div
        className="bg-surface-500 flex items-center justify-center h-28"
        aria-hidden="true"
      >
        <svg
          className="w-9 h-9 text-border-700"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
        </svg>
      </div>

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

/**
 * /404 — Custom not-found page.
 * Terminal-style animation with glitch effect on the 404 number.
 * Fully server-rendered — no client JS required.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "404 — Page Not Found | KivvaTech",
  description: "This page doesn't exist. Let's get you back on track.",
  robots: { index: false, follow: false },
};

const TERMINAL_LINES = [
  { prompt: "$", cmd: "ping kivva.tech/this-page", delay: "0s" },
  { prompt: ">", cmd: "Request timeout for icmp_seq 0", delay: "0.6s", dim: true },
  { prompt: ">", cmd: "Request timeout for icmp_seq 1", delay: "0.9s", dim: true },
  { prompt: ">", cmd: "ERROR 404: destination unreachable", delay: "1.2s", error: true },
  { prompt: "$", cmd: "traceroute --find-page", delay: "1.8s" },
  { prompt: ">", cmd: "Redirecting you to safety...", delay: "2.4s", success: true },
];

const QUICK_LINKS = [
  { label: "Home",            href: "/" },
  { label: "AI Engineering",  href: "/ai-engineering" },
  { label: "Services",        href: "/services" },
  { label: "Case Studies",    href: "/case-studies" },
  { label: "Book a Call",     href: "/book-a-meeting" },
  { label: "Contact",         href: "/contact" },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-[calc(100vh-4rem)] bg-surface-900 flex flex-col">

        <section className="flex-1 flex items-center py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left — glitch 404 + copy */}
              <div>
                {/* Glitch number */}
                <div className="relative inline-block mb-6 select-none" aria-hidden="true">
                  <span className="not-found-glitch text-[9rem] sm:text-[12rem] font-black leading-none tracking-tighter text-white">
                    404
                  </span>
                  <span className="not-found-glitch-r absolute inset-0 text-[9rem] sm:text-[12rem] font-black leading-none tracking-tighter text-brand-blue opacity-60">
                    404
                  </span>
                  <span className="not-found-glitch-b absolute inset-0 text-[9rem] sm:text-[12rem] font-black leading-none tracking-tighter text-red-400 opacity-40">
                    404
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Page not found
                </h1>
                <p className="text-text-dim leading-relaxed mb-8 max-w-sm">
                  Looks like this route got lost in the cloud. Our engineers checked — it is not deployed anywhere.
                </p>

                {/* CTA */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                    Back to home
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-border-700 hover:border-border-600 rounded-lg transition-colors"
                  >
                    Contact us
                  </Link>
                </div>

                {/* Quick links */}
                <div className="mt-10">
                  <p className="text-xs font-medium text-text-faint uppercase tracking-widest mb-3">Popular pages</p>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_LINKS.map(({ label, href }) => (
                      <Link
                        key={href}
                        href={href}
                        className="text-xs px-3 py-1.5 rounded-full border border-border-800 text-text-dim hover:text-white hover:border-border-700 transition-colors"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — animated terminal */}
              <div className="hidden lg:block">
                <div className="rounded-2xl border border-border-800 bg-surface-800 overflow-hidden shadow-2xl">

                  {/* Title bar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border-900 bg-surface-700">
                    <span className="w-3 h-3 rounded-full bg-red-400/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <span className="w-3 h-3 rounded-full bg-green-400/80" />
                    <span className="ml-3 text-xs text-text-faint font-mono">kivvatech — bash — 80x24</span>
                  </div>

                  {/* Terminal body */}
                  <div className="p-6 font-mono text-sm space-y-2 min-h-[260px]">
                    {TERMINAL_LINES.map(({ prompt, cmd, delay, dim, error, success }) => (
                      <div
                        key={cmd}
                        className="flex gap-2 not-found-line opacity-0"
                        style={{ animationDelay: delay, animationFillMode: "forwards" }}
                      >
                        <span className={
                          prompt === "$"
                            ? "text-brand-blue font-bold flex-shrink-0"
                            : "text-text-faint flex-shrink-0"
                        }>
                          {prompt}
                        </span>
                        <span className={
                          error   ? "text-red-400" :
                          success ? "text-green-400" :
                          dim     ? "text-text-faint" :
                                    "text-white"
                        }>
                          {cmd}
                        </span>
                      </div>
                    ))}

                    {/* Blinking cursor */}
                    <div className="flex gap-2 not-found-line opacity-0" style={{ animationDelay: "2.8s", animationFillMode: "forwards" }}>
                      <span className="text-brand-blue font-bold">$</span>
                      <span className="text-white not-found-cursor">_</span>
                    </div>
                  </div>
                </div>

                {/* Floating status chips */}
                <div className="mt-4 flex gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border-800 bg-surface-800 text-xs text-text-dim">
                    <span className="w-2 h-2 rounded-full bg-red-400 not-found-pulse" />
                    Route unresolved
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border-800 bg-surface-800 text-xs text-text-dim">
                    <span className="w-2 h-2 rounded-full bg-green-400 not-found-pulse" style={{ animationDelay: "0.5s" }} />
                    Server healthy
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border-800 bg-surface-800 text-xs text-text-dim">
                    <span className="w-2 h-2 rounded-full bg-brand-blue not-found-pulse" style={{ animationDelay: "1s" }} />
                    Uptime 99.9%
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Inline keyframes — avoids a separate CSS file */}
      <style>{`
        @keyframes not-found-fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .not-found-line {
          animation: not-found-fade-in 0.35s ease forwards;
        }

        @keyframes not-found-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .not-found-cursor {
          animation: not-found-blink 1s step-start infinite;
          animation-delay: 3s;
        }

        @keyframes not-found-pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.75); }
        }
        .not-found-pulse {
          animation: not-found-pulse-dot 2s ease-in-out infinite;
        }

        @keyframes not-found-glitch-r {
          0%,  96%, 100% { clip-path: none; transform: none; }
          97%            { clip-path: inset(20% 0 50% 0); transform: translate(-3px, 2px); }
          98%            { clip-path: inset(60% 0 10% 0); transform: translate(3px, -1px); }
          99%            { clip-path: inset(40% 0 30% 0); transform: translate(-2px, 0); }
        }
        @keyframes not-found-glitch-b {
          0%,  94%, 100% { clip-path: none; transform: none; }
          95%            { clip-path: inset(10% 0 70% 0); transform: translate(4px, -2px); }
          96%            { clip-path: inset(55% 0 15% 0); transform: translate(-3px, 1px); }
        }
        .not-found-glitch   { animation: not-found-glitch-r 6s infinite; }
        .not-found-glitch-r { animation: not-found-glitch-r 6s infinite; animation-delay: 0.05s; }
        .not-found-glitch-b { animation: not-found-glitch-b 6s infinite; animation-delay: 0.1s; }
      `}</style>

      <Footer />
    </>
  );
}

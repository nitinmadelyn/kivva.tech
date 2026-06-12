/**
 * Navbar — site-wide sticky header.
 *
 * Architecture:
 *  - Server Component (no "use client") — renders to pure HTML, zero JS for layout
 *  - DesktopNav: Client Component that owns hover mega-menu state
 *  - MobileMenuToggle: Client Component that owns drawer + accordion state
 *
 * Both client components are isolated so only their own JS is bundled.
 * The logo and landmark elements remain in this server component.
 */

import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileMenuToggle from "./MobileMenuToggle";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 w-full bg-surface-800/95 backdrop-blur-sm border-b border-border-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-16">

          {/* ── Logo — left ───────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex-shrink-0 text-[28px] font-semibold tracking-tight"
            aria-label="KivvaTech — home"
          >
            Kivva<span className="text-brand-blue">Tech</span>
          </Link>

          {/* ── Desktop mega-menu — absolute center of header ─────────────── */}
          <nav
            aria-label="Primary navigation"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <DesktopNav />
          </nav>

          {/* ── Right side — CTAs + mobile hamburger ──────────────────────── */}
          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/hire-developers"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-border-700 hover:border-white/30 hover:text-white rounded-md transition-colors duration-150"
            >
              Hire Developers
            </Link>
            <Link
              href="/book-a-meeting"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-brand-blue hover:bg-brand-blue-hover rounded-md transition-colors duration-150"
            >
              Book a Call
            </Link>
            <MobileMenuToggle />
          </div>

        </div>
      </div>
    </header>
  );
}

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
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ──────────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex-shrink-0 text-[28px] font-semibold tracking-tight"
            aria-label="KivvaTech — home"
          >
            Kivva<span className="text-brand-blue">Tech</span>
          </Link>

          {/* ── Desktop mega-menu navigation (Client Component) ───────────── */}
          <nav aria-label="Primary navigation">
            <DesktopNav />
          </nav>

          {/* ── Mobile hamburger + drawer (Client Component) ──────────────── */}
          <MobileMenuToggle />

        </div>
      </div>
    </header>
  );
}

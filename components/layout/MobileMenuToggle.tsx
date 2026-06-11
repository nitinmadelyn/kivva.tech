"use client";

/**
 * MobileMenuToggle — hamburger/close button + full-height drawer with
 * accordion-style submenus for every nav item that has groups.
 *
 * Only this component is a Client Component — Navbar stays server-rendered.
 * Keeping this isolated means zero client JS for the header on desktop.
 */

import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS, HIRE_DEV_ITEMS } from "@/lib/nav-data";

export default function MobileMenuToggle() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  /** Tracks which top-level nav label has its accordion expanded */
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const closeAll = () => {
    setDrawerOpen(false);
    setExpandedItem(null);
  };

  const toggleAccordion = (label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label));
  };

  return (
    <div className="md:hidden">
      {/* ── Hamburger / ✕ button ──────────────────────────────────────────── */}
      <button
        type="button"
        onClick={() => setDrawerOpen((prev) => !prev)}
        aria-expanded={drawerOpen}
        aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex items-center justify-center p-2 rounded-md text-text-dim hover:text-white transition-colors"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          {drawerOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* ── Slide-down drawer ─────────────────────────────────────────────── */}
      {drawerOpen && (
        <div
          className="absolute top-16 left-0 right-0 z-50 bg-surface-700 border-b border-border-800 max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="px-4 py-3 space-y-0.5">

            {/* ── Primary nav items ─────────────────────────────────────── */}
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.groups ? (
                  // Accordion trigger for items with submenus
                  <>
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.label)}
                      aria-expanded={expandedItem === item.label}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-text-dim hover:text-white rounded-md transition-colors"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${expandedItem === item.label ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>

                    {/* Accordion body */}
                    {expandedItem === item.label && (
                      <div className="pl-4 pb-2 space-y-3 mt-1">
                        {item.groups.map((group) => (
                          <div key={group.heading}>
                            {/* Group heading */}
                            {group.heading && (
                              <p className="text-[10px] font-medium text-text-faint uppercase tracking-widest px-3 mb-1">
                                {group.heading}
                              </p>
                            )}
                            {/* Sub-items */}
                            <ul className="space-y-0.5">
                              {group.items.map((subItem) => (
                                <li key={subItem.href}>
                                  <Link
                                    href={subItem.href}
                                    onClick={closeAll}
                                    className="group flex items-center gap-3 px-3 py-2 text-sm text-text-muted hover:text-white hover:bg-surface-600 rounded-md transition-colors"
                                  >
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded bg-brand-blue-muted">
                                      <svg
                                        className="w-3 h-3 text-brand-blue"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" d={subItem.icon} />
                                      </svg>
                                    </div>
                                    <span>{subItem.label}</span>
                                    {subItem.badge && (
                                      <span className="ml-auto text-[9px] font-medium bg-brand-blue text-white px-1.5 py-0.5 rounded uppercase tracking-wide">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        {/* View all link */}
                        <Link
                          href={item.href}
                          onClick={closeAll}
                          className="inline-flex items-center gap-1 px-3 text-xs text-brand-blue hover:text-brand-blue-hover transition-colors"
                        >
                          View all {item.label}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  // Plain link
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    className="block px-3 py-2.5 text-sm text-text-dim hover:text-white hover:bg-surface-600 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* ── Hire Developers accordion ──────────────────────────────── */}
            <div className="mt-1 pt-3 border-t border-border-800">
              <button
                type="button"
                onClick={() => toggleAccordion("hire")}
                aria-expanded={expandedItem === "hire"}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-text-dim hover:text-white rounded-md transition-colors"
              >
                <span>Hire Developers</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${expandedItem === "hire" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {expandedItem === "hire" && (
                <div className="pl-4 pb-2 mt-1">
                  <p className="text-[10px] font-medium text-text-faint uppercase tracking-widest px-3 mb-1">
                    Developer roles
                  </p>
                  <ul className="space-y-0.5">
                    {HIRE_DEV_ITEMS.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeAll}
                          className="flex items-center gap-3 px-3 py-2 text-sm text-text-muted hover:text-white hover:bg-surface-600 rounded-md transition-colors"
                        >
                          <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded bg-brand-blue-muted">
                            <svg
                              className="w-3 h-3 text-brand-blue"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={1.5}
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                            </svg>
                          </div>
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="ml-auto text-[9px] font-medium bg-brand-blue/20 text-brand-blue px-1.5 py-0.5 rounded uppercase tracking-wide">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/hire-developers"
                    onClick={closeAll}
                    className="inline-flex items-center gap-1 px-3 mt-2 text-xs text-brand-blue hover:text-brand-blue-hover transition-colors"
                  >
                    View all roles
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>

            {/* ── Book a Call CTA ────────────────────────────────────────── */}
            <div className="pt-3 pb-2">
              <Link
                href="/book-a-meeting"
                onClick={closeAll}
                className="block px-4 py-3 text-sm font-medium text-white bg-brand-blue hover:bg-brand-blue-hover rounded-md text-center transition-colors"
              >
                Book a Call
              </Link>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

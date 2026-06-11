"use client";

/**
 * DesktopNav — primary navigation with hover mega-menu dropdowns.
 *
 * Hover architecture (debounce pattern):
 *  Hovering a trigger or panel calls openMenu(key) and cancels any pending close.
 *  Leaving either one starts a 150 ms close timer. If the mouse enters the panel
 *  within those 150 ms the timer is cancelled — no flicker, no dead zone.
 *  This is the same approach used by Radix, Bootstrap, and most production menus.
 *
 * Accessibility:
 *  - aria-haspopup / aria-expanded on every trigger button
 *  - role="menu" / role="menuitem" on panels
 *  - Escape key closes the open panel
 *  - Click outside closes the panel
 */

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { NAV_ITEMS, HIRE_DEV_ITEMS, type NavItem } from "@/lib/nav-data";

const PANEL_BG      = "#1a1a1a";
const PANEL_BORDER  = "#2e2e2e";
const PANEL_FOOTER  = "#141414";
const ITEM_HOVER    = "#252525";
const CLOSE_DELAY   = 150; // ms

export default function DesktopNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const open = useCallback((key: string) => {
    cancelClose();
    setOpenMenu(key);
  }, [cancelClose]);

  // Click outside always closes immediately
  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      cancelClose();
      setOpenMenu(null);
    }
  }, [cancelClose]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [handleOutsideClick]);

  // Escape closes immediately
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { cancelClose(); setOpenMenu(null); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [cancelClose]);

  // Cleanup on unmount
  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  // Props spread to every trigger button
  const triggerProps = (key: string) => ({
    onMouseEnter: () => open(key),
    onMouseLeave: scheduleClose,
  });

  // Props spread to every panel wrapper
  const panelProps = {
    onMouseEnter: cancelClose,
    onMouseLeave: scheduleClose,
  };

  return (
    <div ref={navRef} className="hidden md:flex items-center gap-0.5">

      {/* Primary nav items */}
      {NAV_ITEMS.map((item) =>
        item.groups ? (
          <div key={item.label} className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={openMenu === item.label}
              {...triggerProps(item.label)}
              className={`inline-flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors duration-150 ${
                openMenu === item.label ? "text-white" : "text-text-dim hover:text-white"
              }`}
            >
              {item.label}
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {openMenu === item.label && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 z-50 pt-2"
                {...panelProps}
              >
                <MegaMenuPanel item={item} onClose={() => { cancelClose(); setOpenMenu(null); }} />
              </div>
            )}
          </div>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            onMouseEnter={() => open("none")}
            className="px-3 py-2 text-sm text-text-dim hover:text-white rounded-md transition-colors duration-150"
          >
            {item.label}
          </Link>
        )
      )}

      {/* Hire Developers */}
      <div className="relative ml-0.5">
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded={openMenu === "hire"}
          {...triggerProps("hire")}
          className={`inline-flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors duration-150 ${
            openMenu === "hire" ? "text-white" : "text-text-dim hover:text-white"
          }`}
        >
          Hire Developers
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${openMenu === "hire" ? "rotate-180" : ""}`}
            fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {/* Panel: positioned directly — no wrapper div so right-0 works correctly */}
        {openMenu === "hire" && (
          <HireDevPanel
            onClose={() => { cancelClose(); setOpenMenu(null); }}
            panelProps={panelProps}
          />
        )}
      </div>

      {/* Book a Call CTA */}
      <Link
        href="/book-a-meeting"
        onMouseEnter={() => open("none")}
        className="ml-3 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-brand-blue hover:bg-brand-blue-hover rounded-md transition-colors duration-150"
      >
        Book a Call
      </Link>
    </div>
  );
}

// ─── Mega-menu panel ──────────────────────────────────────────────────────────

function MegaMenuPanel({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const groups = item.groups!;
  const colCount = groups.length;
  const totalItems = groups.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <div
      role="menu"
      aria-label={`${item.label} submenu`}
      style={{
        background: PANEL_BG,
        border: `1px solid ${PANEL_BORDER}`,
        boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)",
        borderRadius: "12px",
        overflow: "hidden",
        minWidth: colCount === 1 ? "360px" : colCount === 2 ? "640px" : "860px",
      }}
    >
      <div className="h-0.5 bg-brand-blue w-full" aria-hidden="true" />

      <div className={`grid ${colCount === 1 ? "grid-cols-1" : colCount === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
        {groups.map((group, gi) => (
          <div
            key={group.heading ?? gi}
            className="p-5"
            style={{ borderRight: gi < colCount - 1 ? `1px solid ${PANEL_BORDER}` : "none" }}
          >
            {group.heading && (
              <p className="text-[10px] font-semibold text-text-faint uppercase tracking-widest mb-3 px-1">
                {group.heading}
              </p>
            )}
            <ul className="space-y-0.5">
              {group.items.map((subItem) => (
                <li key={subItem.href} role="none">
                  <Link
                    href={subItem.href}
                    role="menuitem"
                    onClick={onClose}
                    className="group flex items-start gap-3 px-2 py-2.5 rounded-lg transition-colors"
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = ITEM_HOVER)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "")}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center mt-0.5 bg-brand-blue-muted">
                      <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d={subItem.icon} />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[13px] font-medium text-white group-hover:text-brand-blue transition-colors leading-tight">
                          {subItem.label}
                        </span>
                        {subItem.badge && (
                          <span className="inline-block text-[9px] font-semibold bg-brand-blue text-white px-1.5 py-0.5 rounded uppercase tracking-wide leading-none">
                            {subItem.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-text-dim mt-0.5 leading-snug">{subItem.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ borderTop: `1px solid ${PANEL_BORDER}`, background: PANEL_FOOTER }}
      >
        <span className="text-xs" style={{ color: "#555" }}>{totalItems} services available</span>
        <Link
          href={item.href}
          onClick={onClose}
          className="text-xs text-brand-blue hover:text-brand-blue-hover flex items-center gap-1 transition-colors"
        >
          View all {item.label}
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

// ─── Hire Developers panel ────────────────────────────────────────────────────
// Single-column list. Self-positioned with absolute so the inline width
// is authoritative — no wrapping div can constrain it.

function HireDevPanel({
  onClose,
  panelProps,
}: {
  onClose: () => void;
  panelProps: { onMouseEnter: () => void; onMouseLeave: () => void };
}) {
  return (
    <div
      role="menu"
      aria-label="Hire Developers submenu"
      {...panelProps}
      style={{
        position: "absolute",
        top: "calc(100% + 8px)",
        right: 0,
        zIndex: 50,
        width: "340px",
        background: PANEL_BG,
        border: `1px solid ${PANEL_BORDER}`,
        borderRadius: "12px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)",
        overflow: "hidden",
      }}
    >
      <div className="h-0.5 bg-brand-blue w-full" aria-hidden="true" />

      <div className="p-4">
        <p className="text-[10px] font-semibold text-text-faint uppercase tracking-widest mb-3 px-1">
          Developer roles
        </p>
        <ul className="space-y-0.5">
          {HIRE_DEV_ITEMS.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                onClick={onClose}
                className="group flex items-center gap-3 px-2 py-2.5 rounded-lg transition-colors"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = ITEM_HOVER)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "")}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center bg-brand-blue-muted">
                  <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-medium text-white group-hover:text-brand-blue transition-colors">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-[9px] font-semibold bg-brand-blue text-white px-1.5 py-0.5 rounded uppercase tracking-wide leading-none flex-shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-text-dim mt-0.5 truncate">{item.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ borderTop: `1px solid ${PANEL_BORDER}`, background: PANEL_FOOTER }}
      >
        <span className="text-xs" style={{ color: "#555" }}>Onboard in 5 days</span>
        <Link
          href="/hire-developers"
          onClick={onClose}
          className="text-xs text-brand-blue hover:text-brand-blue-hover flex items-center gap-1 transition-colors"
        >
          View all roles
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

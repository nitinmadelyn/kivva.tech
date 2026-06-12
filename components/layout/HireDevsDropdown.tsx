"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { HIRE_DEV_ITEMS } from "@/lib/nav-data";

const PANEL_BG     = "#1a1a1a";
const PANEL_BORDER = "#2e2e2e";
const PANEL_FOOTER = "#141414";
const ITEM_HOVER   = "#252525";
const CLOSE_DELAY  = 150;

export default function HireDevsDropdown() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const handleOpen = useCallback(() => {
    cancelClose();
    setOpen(true);
  }, [cancelClose]);

  // Click outside closes immediately
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        cancelClose();
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [cancelClose]);

  // Escape closes
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { cancelClose(); setOpen(false); }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [cancelClose]);

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  const close = useCallback(() => { cancelClose(); setOpen(false); }, [cancelClose]);

  return (
    <div ref={wrapperRef} className="relative hidden md:block">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onMouseEnter={handleOpen}
        onMouseLeave={scheduleClose}
        className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md border transition-colors duration-150 ${
          open
            ? "text-white border-white/30"
            : "text-white border-border-700 hover:border-white/30"
        }`}
      >
        Hire Developers
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Hire Developers submenu"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
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
                    onClick={close}
                    className="group flex items-center gap-3 px-2 py-2.5 rounded-lg transition-colors"
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = ITEM_HOVER)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "")}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center bg-brand-blue-muted">
                      <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
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
              onClick={close}
              className="text-xs text-brand-blue hover:text-brand-blue-hover flex items-center gap-1 transition-colors"
            >
              View all roles
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

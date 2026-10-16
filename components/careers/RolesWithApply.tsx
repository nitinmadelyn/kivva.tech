"use client";

import { useState, useEffect } from "react";

const CLOSE_ICON = "M6 18L18 6M6 6l12 12";

export interface Role {
  title: string;
  team: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
}

export default function RolesWithApply({ roles }: { roles: Role[] }) {
  const [activeRole, setActiveRole] = useState<string | null>(null);

  function openModal(title: string) {
    setActiveRole(title);
  }

  function closeModal() {
    setActiveRole(null);
  }

  useEffect(() => {
    if (!activeRole) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRole]);

  return (
    <>
      {/* ── Role cards ──────────────────────────────────────────────────── */}
      <div className="space-y-4">
        {roles.map(({ title, team, location, type, description, skills }) => (
          <div key={title} className="rounded-xl border border-light-border bg-light-surface p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
              <div>
                <h3 className="text-base font-bold text-light-text">{title}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-xs text-brand-blue font-medium">{team}</span>
                  <span className="text-light-text-faint text-xs">·</span>
                  <span className="text-xs text-light-text-muted">{location}</span>
                  <span className="text-light-text-faint text-xs">·</span>
                  <span className="text-xs text-light-text-muted">{type}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => openModal(title)}
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-light-text border border-light-border hover:border-brand-blue-border hover:text-brand-blue rounded-lg transition-colors flex-shrink-0 cursor-pointer"
              >
                Apply
              </button>
            </div>
            <p className="text-xs text-light-text-muted leading-relaxed mb-3">{description}</p>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span key={skill} className="text-xs px-2 py-1 rounded-md bg-light-bg border border-light-border text-light-text-muted">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Position closed modal ──────────────────────────────────────── */}
      {activeRole && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="closed-modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="relative w-full max-w-md bg-surface-800 border border-border-800 rounded-2xl shadow-2xl overflow-hidden">

            {/* Header */}
            <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-border-900">
              <div className="flex items-center gap-3">
                {/* Lock / closed icon */}
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-amber-400 uppercase tracking-widest">
                    Position closed
                  </p>
                  <h2 id="closed-modal-title" className="text-sm font-bold text-white mt-0.5">
                    {activeRole}
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="w-8 h-8 rounded-lg border border-border-800 flex items-center justify-center text-text-faint hover:text-white hover:border-border-700 transition-colors flex-shrink-0"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={CLOSE_ICON} />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-8 space-y-4">
              <p className="text-sm text-text-dim leading-relaxed">
                Thank you for your interest in the <span className="text-white font-medium">{activeRole}</span> role.
                Unfortunately this position is no longer accepting applications — it has either been filled or put on hold.
              </p>
              <p className="text-sm text-text-dim leading-relaxed">
                We regularly open new roles as we grow. If you believe you are a strong fit for our team, we encourage you to send an open application — we keep profiles on file and reach out when the right opportunity arises.
              </p>

            </div>


          </div>
        </div>
      )}
    </>
  );
}

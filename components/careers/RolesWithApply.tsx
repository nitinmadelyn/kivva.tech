"use client";

import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

// Set these three values in .env.local — see .env.local.example
const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? "";

const CAREERS_EMAIL = "careers@kivva.tech";

const CHECK_ICON  = "M4.5 12.75l6 6 9-13.5";
const CLOSE_ICON  = "M6 18L18 6M6 6l12 12";
const SPIN_ICON   = "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99";

export interface Role {
  title: string;
  team: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
}

type ModalState = "idle" | "loading" | "success" | "error";

export default function RolesWithApply({ roles }: { roles: Role[] }) {
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const [modalState, setModalState] = useState<ModalState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  function openModal(title: string) {
    setActiveRole(title);
    setModalState("idle");
    setErrorMsg("");
  }

  function closeModal() {
    if (modalState === "loading") return; // prevent close mid-send
    setActiveRole(null);
  }

  useEffect(() => {
    if (!activeRole) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstInputRef.current?.focus(), 50);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRole]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    // Fallback: if EmailJS is not yet configured, open mailto instead
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const nameVal  = (formRef.current.elements.namedItem("from_name")  as HTMLInputElement)?.value ?? "";
      const emailVal = (formRef.current.elements.namedItem("reply_to")   as HTMLInputElement)?.value ?? "";
      const coverVal = (formRef.current.elements.namedItem("cover_letter") as HTMLTextAreaElement)?.value ?? "";
      const subject  = encodeURIComponent(`Application: ${activeRole}`);
      const body     = encodeURIComponent(
        `Hi KivvaTech,\n\nI am applying for the ${activeRole} position.\n\nName: ${nameVal}\nEmail: ${emailVal}\n\nCover Letter:\n${coverVal}\n\nPlease see my attached resume.\n\nBest regards,\n${nameVal}`
      );
      window.location.href = `mailto:${CAREERS_EMAIL}?subject=${subject}&body=${body}`;
      setModalState("success");
      return;
    }

    setModalState("loading");
    setErrorMsg("");

    try {
      const els         = formRef.current.elements;
      const fromName    = (els.namedItem("from_name")    as HTMLInputElement    | null)?.value ?? "";
      const replyTo     = (els.namedItem("reply_to")     as HTMLInputElement    | null)?.value ?? "";
      const coverLetter = (els.namedItem("cover_letter") as HTMLTextAreaElement | null)?.value ?? "";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          role_title:   activeRole ?? "",
          from_name:    fromName,
          reply_to:     replyTo,
          cover_letter: `Applied for: ${activeRole ?? ""}\n\n${coverLetter}`,
        },
        { publicKey: PUBLIC_KEY }
      );
      setModalState("success");
    } catch (err: unknown) {
      const e   = err as Record<string, unknown> | null;
      const msg = String(e?.text ?? e?.message ?? JSON.stringify(err) ?? "Unknown error");
      setModalState("error");
      setErrorMsg(msg);
    }
  }

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

      {/* ── Apply modal ──────────────────────────────────────────────────── */}
      {activeRole && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="apply-modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="relative w-full max-w-lg bg-surface-800 border border-border-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">

            {/* Header */}
            <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-border-900 flex-shrink-0">
              <div>
                <p className="text-[11px] font-semibold text-brand-blue uppercase tracking-widest mb-1">
                  Apply for role
                </p>
                <h2 id="apply-modal-title" className="text-base font-bold text-white">
                  {activeRole}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeModal}
                disabled={modalState === "loading"}
                className="w-8 h-8 rounded-lg border border-border-800 flex items-center justify-center text-text-faint hover:text-white hover:border-border-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                aria-label="Close modal"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={CLOSE_ICON} />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto flex-1">

              {/* ── Success ── */}
              {modalState === "success" && (
                <div className="px-6 py-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-blue-muted border border-brand-blue-border flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={CHECK_ICON} />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">Application received!</h3>
                  <p className="text-xs text-text-dim leading-relaxed mb-6">
                    If your cover letter impresses us, we will reach out to you directly to kick off the next steps. We read every application carefully.
                  </p>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors cursor-pointer"
                  >
                    Got it
                  </button>
                </div>
              )}

              {/* ── Form (idle | loading | error) ── */}
              {modalState !== "success" && (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="px-6 py-5 space-y-4"
                >
                  {/* Hidden field — maps to {{role_title}} in EmailJS template */}
                  <input type="hidden" name="role_title" value={activeRole} />

                  {/* Full name */}
                  <div>
                    <label htmlFor="apply-name" className="block text-xs font-semibold text-white mb-1.5">
                      Full name <span className="text-brand-blue" aria-hidden="true">*</span>
                    </label>
                    <input
                      ref={firstInputRef}
                      id="apply-name"
                      name="from_name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      className="w-full bg-surface-700 border border-border-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-text-faint focus:outline-none focus:border-brand-blue transition-colors"
                    />
                  </div>

                  {/* Email — used as reply-to in EmailJS template */}
                  <div>
                    <label htmlFor="apply-email" className="block text-xs font-semibold text-white mb-1.5">
                      Email address <span className="text-brand-blue" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="apply-email"
                      name="reply_to"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className="w-full bg-surface-700 border border-border-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-text-faint focus:outline-none focus:border-brand-blue transition-colors"
                    />
                  </div>

                  {/* Cover letter */}
                  <div>
                    <label htmlFor="apply-cover" className="block text-xs font-semibold text-white mb-1.5">
                      Cover letter <span className="text-brand-blue" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="apply-cover"
                      name="cover_letter"
                      required
                      rows={5}
                      placeholder={`Tell us why you are a great fit for the ${activeRole} role...`}
                      className="w-full bg-surface-700 border border-border-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-text-faint focus:outline-none focus:border-brand-blue transition-colors resize-none"
                    />
                  </div>

                  {/* Info note */}
                  <div className="flex items-start gap-3 rounded-lg bg-brand-blue-muted border border-brand-blue-border px-3.5 py-3">
                    <svg className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <p className="text-xs text-text-dim leading-relaxed">
                      If we like your profile, we will reach out to you to kick off the next steps in the process.
                    </p>
                  </div>

                  {/* Error message */}
                  {modalState === "error" && (
                    <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3.5 py-2.5 leading-relaxed">
                      {errorMsg}
                    </p>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-1 pb-1">
                    <button
                      type="submit"
                      disabled={modalState === "loading"}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover disabled:opacity-60 disabled:cursor-not-allowed rounded-lg transition-colors cursor-pointer"
                    >
                      {modalState === "loading" && (
                        <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d={SPIN_ICON} />
                        </svg>
                      )}
                      {modalState === "loading" ? "Sending…" : "Send Application"}
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      disabled={modalState === "loading"}
                      className="px-5 py-2.5 text-sm font-semibold text-text-dim border border-border-800 hover:border-border-700 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}

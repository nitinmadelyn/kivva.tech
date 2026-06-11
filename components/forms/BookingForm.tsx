"use client";

/**
 * BookingForm — multi-field booking request form.
 *
 * Uses React 19 useActionState for Server Action integration:
 *  - Progressive enhancement: works without JS (native form submission)
 *  - Optimistic pending state via useFormStatus
 *  - Per-field error display from Server Action
 */

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitBookingForm, type ActionResult } from "@/app/actions";

const INITIAL_STATE: ActionResult = { success: false, message: "" };

const SERVICE_OPTIONS = [
  "AI Engineering & Agents",
  "Custom Software Development",
  "Full Stack / Mobile Apps",
  "Cloud & DevOps",
  "Data Engineering",
  "Salesforce / ERP",
  "Hire a Developer",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Not sure yet",
];

const TIMELINE_OPTIONS = [
  "ASAP",
  "Within 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "Just exploring",
];

// ─── Submit button (reads pending state via useFormStatus) ────────────────────

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover disabled:opacity-60 disabled:cursor-not-allowed rounded-lg transition-colors duration-150"
    >
      {pending ? (
        <>
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Sending…
        </>
      ) : (
        "Request a Discovery Call"
      )}
    </button>
  );
}

// ─── Shared field components ──────────────────────────────────────────────────

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-white mb-1.5">
      {children}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-400">{message}</p>;
}

const inputCls =
  "w-full bg-[#111111] border border-[#2a2a2a] text-white placeholder:text-[#444] text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-brand-blue transition-colors";

// ─── Main form ────────────────────────────────────────────────────────────────

export default function BookingForm() {
  const [state, formAction] = useActionState(submitBookingForm, INITIAL_STATE);

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-xl border border-[#2a2a2a] bg-[#111111]">
        {/* Checkmark */}
        <div className="w-14 h-14 rounded-full bg-brand-blue-muted flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Request received!</h2>
        <p className="text-sm text-text-dim max-w-sm">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-5">
      {/* Global error */}
      {!state.success && state.message && (
        <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400">
          {state.message}
        </div>
      )}

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full name *</Label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Jane Smith" className={inputCls} required />
          <FieldError message={state.fieldErrors?.name} />
        </div>
        <div>
          <Label htmlFor="email">Work email *</Label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" className={inputCls} required />
          <FieldError message={state.fieldErrors?.email} />
        </div>
      </div>

      {/* Company + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="company">Company</Label>
          <input id="company" name="company" type="text" autoComplete="organization" placeholder="Acme Inc." className={inputCls} />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 555 000 0000" className={inputCls} />
        </div>
      </div>

      {/* Services checkboxes */}
      <div>
        <p className="text-sm font-medium text-white mb-2.5">What do you need help with?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SERVICE_OPTIONS.map((svc) => (
            <label key={svc} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                name="services"
                value={svc}
                className="w-4 h-4 rounded border-[#2a2a2a] bg-[#111111] accent-brand-blue flex-shrink-0"
              />
              <span className="text-sm text-text-dim group-hover:text-white transition-colors">{svc}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Budget + Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="budget">Budget range</Label>
          <select id="budget" name="budget" className={inputCls} defaultValue="">
            <option value="" disabled>Select range</option>
            {BUDGET_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <Label htmlFor="timeline">Timeline</Label>
          <select id="timeline" name="timeline" className={inputCls} defaultValue="">
            <option value="" disabled>When do you need it?</option>
            {TIMELINE_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Project description */}
      <div>
        <Label htmlFor="description">Tell us about your project</Label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Brief description of your goals, current stack, or challenges…"
          className={`${inputCls} resize-none`}
        />
      </div>

      <SubmitButton />

      <p className="text-center text-xs text-text-faint">
        By submitting you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-text-dim transition-colors">Privacy Policy</a>.
        {" "}We never share your data.
      </p>
    </form>
  );
}

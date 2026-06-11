"use client";

/**
 * ContactForm — general enquiry form.
 * Uses React 19 useActionState + useFormStatus for pending state.
 */

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ActionResult } from "@/app/actions";

const INITIAL_STATE: ActionResult = { success: false, message: "" };

const SERVICE_OPTIONS = [
  "AI Engineering",
  "Custom Software Development",
  "Mobile App Development",
  "Cloud & DevOps",
  "Data Engineering",
  "Salesforce / ERP",
  "Hire Developers",
  "Partnership / Other",
];

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
        "Send Message"
      )}
    </button>
  );
}

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

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, INITIAL_STATE);

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-xl border border-[#2a2a2a] bg-[#111111]">
        <div className="w-14 h-14 rounded-full bg-brand-blue-muted flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Message sent!</h2>
        <p className="text-sm text-text-dim max-w-sm">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-5">
      {!state.success && state.message && (
        <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400">
          {state.message}
        </div>
      )}

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

      <div>
        <Label htmlFor="service">How can we help?</Label>
        <select id="service" name="service" className={inputCls} defaultValue="">
          <option value="" disabled>Select a service</option>
          {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project, goals, or questions…"
          className={`${inputCls} resize-none`}
          required
        />
        <FieldError message={state.fieldErrors?.message} />
      </div>

      <SubmitButton />

      <p className="text-center text-xs text-text-faint">
        By submitting you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-text-dim transition-colors">Privacy Policy</a>.
      </p>
    </form>
  );
}

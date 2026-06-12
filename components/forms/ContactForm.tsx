"use client";

/**
 * ContactForm — general enquiry form.
 * Light-themed to match the contact page card.
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
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </button>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-xs font-semibold text-light-text-muted uppercase tracking-wider mb-1.5">
      {children}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-500">{message}</p>;
}

const inputCls =
  "w-full bg-white border border-light-border text-light-text placeholder:text-light-text-faint text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all";

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, INITIAL_STATE);

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8">
        <div className="w-14 h-14 rounded-full bg-brand-blue-muted border border-brand-blue-border flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-light-text mb-2">Message sent!</h2>
        <p className="text-sm text-light-text-muted max-w-sm">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-5">
      {!state.success && state.message && (
        <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-600">
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
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" className={inputCls} />
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
          placeholder="Tell us about your project, goals, or questions..."
          className={`${inputCls} resize-none`}
          required
        />
        <FieldError message={state.fieldErrors?.message} />
      </div>

      <SubmitButton />

      <p className="text-center text-xs text-light-text-faint">
        By submitting you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-light-text-muted transition-colors">Privacy Policy</a>.
      </p>
    </form>
  );
}

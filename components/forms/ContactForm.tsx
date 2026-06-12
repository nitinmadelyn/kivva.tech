"use client";

/**
 * ContactForm — sends via EmailJS (client-side).
 * Light-themed to match the contact page card.
 *
 * Required env vars in .env.local:
 *   NEXT_PUBLIC_EMAILJS_SERVICE_ID
 *   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
 *   NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID
 *
 * EmailJS template variables expected:
 *   {{from_name}}, {{from_email}}, {{company}}, {{phone}}, {{service}}, {{message}}
 */

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID           ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID  ?? "";
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY            ?? "";

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

type FormState = "idle" | "loading" | "success" | "error";

const inputCls =
  "w-full bg-white border border-light-border text-light-text placeholder:text-light-text-faint text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all";

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-xs font-semibold text-light-text-muted uppercase tracking-wider mb-1.5">
      {children}
    </label>
  );
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [senderName, setSenderName] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    const data = new FormData(formRef.current);
    const name    = (data.get("from_name")  as string ?? "").trim();
    const email   = (data.get("from_email") as string ?? "").trim();
    const message = (data.get("message")    as string ?? "").trim();

    // Basic client-side validation
    if (!name || !email || !message) {
      setErrorMsg("Name, email, and message are required.");
      setState("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Enter a valid email address.");
      setState("error");
      return;
    }

    setState("loading");
    setErrorMsg("");
    setSenderName(name);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setState("success");
      formRef.current.reset();
    } catch (err) {
      console.error("[ContactForm] EmailJS error:", err);
      setErrorMsg("Something went wrong. Please email us directly or try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8">
        <div className="w-14 h-14 rounded-full bg-brand-blue-muted border border-brand-blue-border flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-light-text mb-2">Message sent!</h2>
        <p className="text-sm text-light-text-muted max-w-sm">
          Thanks {senderName}! We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      {state === "error" && errorMsg && (
        <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-600">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="from_name">Full name *</Label>
          <input id="from_name" name="from_name" type="text" autoComplete="name" placeholder="Jane Smith" className={inputCls} required />
        </div>
        <div>
          <Label htmlFor="from_email">Work email *</Label>
          <input id="from_email" name="from_email" type="email" autoComplete="email" placeholder="jane@company.com" className={inputCls} required />
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
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover disabled:opacity-60 disabled:cursor-not-allowed rounded-lg transition-colors duration-150"
      >
        {state === "loading" ? (
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

      <p className="text-center text-xs text-light-text-faint">
        By submitting you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-light-text-muted transition-colors">Privacy Policy</a>.
      </p>
    </form>
  );
}

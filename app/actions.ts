"use server";

/**
 * Server Actions for all forms.
 *
 * Production wire-up: replace the TODO comments with your email provider.
 * Recommended: Resend (https://resend.com) — 1-line send, great DX.
 *
 * Example:
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({ from: "...", to: "...", subject: "...", html: "..." });
 */

import { SITE } from "@/lib/constants";

// ─── Shared types ─────────────────────────────────────────────────────────────

export interface ActionResult {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
}

// ─── Validation helpers ───────────────────────────────────────────────────────

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function required(value: string, label: string): string | null {
  return value.trim() ? null : `${label} is required.`;
}

// ─── Contact form ─────────────────────────────────────────────────────────────

export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

export async function submitContactForm(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const payload: ContactPayload = {
    name:    (formData.get("name")    as string ?? "").trim(),
    email:   (formData.get("email")   as string ?? "").trim(),
    company: (formData.get("company") as string ?? "").trim(),
    phone:   (formData.get("phone")   as string ?? "").trim(),
    service: (formData.get("service") as string ?? "").trim(),
    message: (formData.get("message") as string ?? "").trim(),
  };

  // Field-level validation
  const fieldErrors: Record<string, string> = {};
  const nameErr    = required(payload.name, "Name");
  const emailErr   = required(payload.email, "Email");
  const messageErr = required(payload.message, "Message");
  if (nameErr)    fieldErrors.name    = nameErr;
  if (emailErr)   fieldErrors.email   = emailErr;
  if (messageErr) fieldErrors.message = messageErr;
  if (payload.email && !isValidEmail(payload.email)) fieldErrors.email = "Enter a valid email address.";

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, message: "Please fix the errors below.", fieldErrors };
  }

  // TODO: send email via Resend / Mailgun / SES
  // await resend.emails.send({ to: SITE.email, subject: `Contact: ${payload.name}`, ... });
  console.log("[Contact form submission]", payload);

  return {
    success: true,
    message: `Thanks ${payload.name}! We'll reply to ${payload.email} within 24 hours.`,
  };
}

// ─── Booking form ─────────────────────────────────────────────────────────────

export interface BookingPayload {
  name: string;
  email: string;
  company: string;
  phone: string;
  services: string[];
  budget: string;
  timeline: string;
  description: string;
}

export async function submitBookingForm(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const payload: BookingPayload = {
    name:        (formData.get("name")        as string ?? "").trim(),
    email:       (formData.get("email")       as string ?? "").trim(),
    company:     (formData.get("company")     as string ?? "").trim(),
    phone:       (formData.get("phone")       as string ?? "").trim(),
    services:    formData.getAll("services")  as string[],
    budget:      (formData.get("budget")      as string ?? "").trim(),
    timeline:    (formData.get("timeline")    as string ?? "").trim(),
    description: (formData.get("description") as string ?? "").trim(),
  };

  const fieldErrors: Record<string, string> = {};
  const nameErr  = required(payload.name, "Name");
  const emailErr = required(payload.email, "Email");
  if (nameErr)  fieldErrors.name  = nameErr;
  if (emailErr) fieldErrors.email = emailErr;
  if (payload.email && !isValidEmail(payload.email)) fieldErrors.email = "Enter a valid email address.";

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, message: "Please fix the errors below.", fieldErrors };
  }

  // TODO: send email + add to CRM
  console.log("[Booking form submission]", payload);

  return {
    success: true,
    message: `Perfect, ${payload.name}! A member of our team will reach out to ${payload.email} within 24 hours to confirm your call.`,
  };
}

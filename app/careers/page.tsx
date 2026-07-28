/**
 * /careers — Open roles and culture page.
 * Server Component — zero client JS except the interactive apply modal.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RolesWithApply, { type Role } from "@/components/careers/RolesWithApply";

export const metadata: Metadata = buildMetadata({
  title: "Careers at KivvaTech",
  description:
    "Join KivvaTech — a global AI and software engineering company with 50+ engineers across 15+ countries. We are always looking for exceptional engineers.",
  path: "/careers",
  keywords: ["KivvaTech careers", "AI engineering jobs", "software engineering jobs", "remote engineering jobs"],
});

const CONTAINER = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";
const CHECK_ICON = "M4.5 12.75l6 6 9-13.5";
const CAREERS_EMAIL = "careers@kivva.tech";

const OPEN_ROLES: Role[] = [
  {
    title: "Senior AI/ML Engineer",
    team: "AI Engineering",
    location: "Remote (India / US)",
    type: "Full-time",
    description: "Build production LLM applications, RAG pipelines, and agentic systems for clients across fintech, healthcare, and logistics.",
    skills: ["Python", "PyTorch", "LLMs", "RAG", "Vector DBs"],
  },
  {
    title: "Senior Full Stack Engineer",
    team: "Full Stack",
    location: "Remote (India / Europe)",
    type: "Full-time",
    description: "Design and build full-stack web applications using Next.js, Node.js, and PostgreSQL. Work directly with product owners and clients.",
    skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "React"],
  },
  {
    title: "Cloud Architect",
    team: "Cloud & Infrastructure",
    location: "Remote (India / US)",
    type: "Full-time",
    description: "Architect and deploy cloud infrastructure on AWS, Azure, and GCP. Define IaC standards and lead migration projects.",
    skills: ["AWS", "Terraform", "Kubernetes", "Helm", "CI/CD"],
  },
  {
    title: "Data Engineer",
    team: "Data Engineering",
    location: "Remote (India)",
    type: "Full-time",
    description: "Build high-throughput data pipelines, cloud warehouses, and ML feature stores that power AI applications at scale.",
    skills: ["Spark", "dbt", "Snowflake", "Kafka", "Airflow"],
  },
  {
    title: "DevOps / SRE Engineer",
    team: "DevOps & SRE",
    location: "Remote (India / US)",
    type: "Full-time",
    description: "Build and run platform engineering, CI/CD, observability, and SRE practices for client production systems.",
    skills: ["Kubernetes", "Prometheus", "GitHub Actions", "Python", "Bash"],
  },
  {
    title: "Salesforce Developer",
    team: "Salesforce & ERP",
    location: "Remote (India)",
    type: "Full-time",
    description: "Develop Apex, LWC, and CPQ solutions for enterprise Salesforce implementations. Certifications required.",
    skills: ["Apex", "LWC", "CPQ", "Salesforce APIs", "SOQL"],
  },
];

const BENEFITS = [
  { title: "Remote-first culture", body: "Work from anywhere. We have engineers across India, the US, UK, and Europe." },
  { title: "Frontier AI work", body: "Work on LLM, agentic, and computer vision projects that most engineers never get near." },
  { title: "Senior-only teams", body: "You will work alongside senior engineers. No carrying junior weight, no fighting for good projects." },
  { title: "Continuous learning", body: "Conference budget, certification support, and internal learning tracks for every engineer." },
  { title: "Competitive compensation", body: "Top-of-market salaries benchmarked to global rates, not just local markets." },
  { title: "Client variety", body: "Work across industries and companies — no getting stuck on the same legacy codebase indefinitely." },
];

const PROCESS = [
  { step: "01", title: "Apply", body: "Click Apply on any open role, fill in your cover letter and attach your resume. We respond within 5 business days." },
  { step: "02", title: "Technical screen", body: "A 45-minute technical conversation with a senior engineer. No trick questions or whiteboard theatre." },
  { step: "03", title: "Take-home assessment", body: "A focused 2-3 hour practical task — representative of real work, not algorithmic puzzles." },
  { step: "04", title: "Final interview", body: "Meet the team lead and discuss the role, expectations, and fit. Offer within 5 business days." },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-surface-900">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="pt-20 pb-16 bg-surface-800 border-b border-border-900">
          <div className={CONTAINER}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue-border bg-brand-blue-muted mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
              <span className="text-xs font-medium text-brand-blue">Careers</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Build the things<br />
              <span className="text-brand-blue">that actually matter.</span>
            </h1>
            <p className="text-text-dim max-w-2xl text-base leading-relaxed mb-8">
              We are a team of 50+ engineers who care deeply about the quality of what we build. If you want to work on frontier AI, ship products that reach real users, and get better every year — this is the place.
            </p>
            <a
              href="#open-roles"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors"
            >
              See open roles
            </a>
          </div>
        </section>

        {/* ── Open roles ────────────────────────────────────────────────── */}
        <section id="open-roles" className="py-16 bg-light-bg border-b border-light-border">
          <div className={CONTAINER}>
            <h2 className="text-2xl font-bold text-light-text mb-2">Open roles</h2>
            <p className="text-light-text-muted text-sm mb-8">All roles are remote. Salary ranges shared at first call.</p>
            <RolesWithApply roles={OPEN_ROLES} />
            <p className="mt-6 text-xs text-light-text-faint">
              Do not see the right role?{" "}
              <a href={`mailto:${CAREERS_EMAIL}?subject=Open Application`} className="text-brand-blue hover:underline">
                Send an open application
              </a>{" "}
              to <span className="text-light-text-muted">{CAREERS_EMAIL}</span> and tell us what you are looking for.
            </p>
          </div>
        </section>

        {/* ── Benefits ──────────────────────────────────────────────────── */}
        <section className="py-14 bg-surface-800 border-y border-border-900">
          <div className={CONTAINER}>
            <h2 className="text-xl font-bold text-white mb-2">Why KivvaTech</h2>
            <p className="text-text-dim text-sm mb-8">What we offer beyond the salary.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {BENEFITS.map(({ title, body }) => (
                <div key={title} className="rounded-xl border border-border-800 bg-surface-700 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-md bg-brand-blue-muted flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d={CHECK_ICON} />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                  </div>
                  <p className="text-xs text-text-dim leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Interview process ─────────────────────────────────────────── */}
        <section className="py-14 bg-light-bg border-b border-light-border">
          <div className={CONTAINER}>
            <h2 className="text-xl font-bold text-light-text mb-2">Our interview process</h2>
            <p className="text-light-text-muted text-sm mb-8">Straightforward, respectful of your time, and fast.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PROCESS.map(({ step, title, body }) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-blue-muted border border-brand-blue-border flex items-center justify-center">
                    <span className="text-xs font-bold text-brand-blue">{step}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-light-text mb-1.5">{title}</h3>
                    <p className="text-xs text-light-text-muted leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="py-16 bg-surface-800 border-t border-border-900">
          <div className={`${CONTAINER} text-center`}>
            <h2 className="text-2xl font-bold text-white mb-3">Ready to apply?</h2>
            <p className="text-text-dim mb-8 max-w-md mx-auto text-sm">
              Browse the open roles above and click Apply on the one that fits. Or email us directly at{" "}
              <a href={`mailto:${CAREERS_EMAIL}`} className="text-brand-blue hover:underline">{CAREERS_EMAIL}</a>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#open-roles"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors"
              >
                View open roles
              </a>
              <Link
                href="/about/team"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white border border-border-700 hover:border-border-600 rounded-lg transition-colors"
              >
                Meet the team first
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

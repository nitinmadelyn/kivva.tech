/**
 * Site-wide constants — all static content lives here.
 * Components import what they need; nothing is hardcoded inside JSX.
 */

// ─── Company ─────────────────────────────────────────────────────────────────

export const CALENDLY_URL = "https://calendly.com/abhishek-k-kivva/30min";

export const SITE = {
  name: "KivvaTech",
  tagline: "Ship AI products. Scale to any market.",
  description:
    "Pre-vetted AI engineers, cloud architects, and full-stack teams. Onboard in 5 days. Trusted by 480+ companies across 15+ countries.",
  url: "https://www.kivva.tech",
  email: "coffee@kivva.tech",
  phone: "+91 97262 59232",
  social: {
    linkedin: "https://www.linkedin.com/company/kivva-tech/",
    instagram: "https://www.instagram.com/kivva.tech",
    facebook: "https://www.facebook.com/profile.php?id=61561154352822",
  },
  offices: [
    {
      city: "Ahmedabad",
      address: "D710, Titanium Business Park, Near Makarba Underpass, Makarba, Ahmedabad 380007",
    },
  ],
} as const;

// ─── Hero stats bar ───────────────────────────────────────────────────────────

export const HERO_STATS: Array<{ value: string; label: string }> = [
  { value: "480+", label: "Completed projects" },
  { value: "15+", label: "Years experience" },
  { value: "5 days", label: "To onboard" },
  { value: "30+", label: "Countries" },
];

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS: Array<{ label: string; href: string }> = [
  { label: "Services", href: "/services" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

// ─── Trust bar — review platforms ─────────────────────────────────────────────

export const REVIEWS: Array<{ platform: string; score: string; url: string }> =
  [
    {
      platform: "Clutch",
      score: "4.9",
      url: "https://clutch.co/profile/kivvatech",
    },
    {
      platform: "Google",
      score: "4.8",
      url: "https://g.co/kgs/kivvatech",
    },
    {
      platform: "Trustpilot",
      score: "4.9",
      url: "https://www.trustpilot.com/review/kivva.tech",
    },
  ];

export const CERTIFICATIONS = [
  "Shopify Partner",
  "AWS Certified",
  "AWS Partner",
];

export const CLIENT_LOGOS: Array<{ name: string; file: string; width: number; height: number }> = [
  { name: "Company 1", file: "company-1.svg",  width: 100, height: 32 },
  { name: "Company 2", file: "company-2.webp", width: 100, height: 32 },
  { name: "Company 3", file: "company-3.webp", width: 100, height: 32 },
  { name: "Company 4", file: "company-4.svg",  width: 100, height: 32 },
  { name: "Company 5", file: "company-5.svg",  width: 100, height: 32 },
  { name: "Company 6", file: "company-6.avif", width: 80, height: 24 },
  { name: "Company 7", file: "company-7.webp", width: 100, height: 32 },
  { name: "Company 8", file: "company-8.webp", width: 140, height: 46 },
];

// ─── Services ─────────────────────────────────────────────────────────────────

export interface Service {
  id: string;
  icon: string; // SVG path data
  title: string;
  description: string;
  href: string;
}

export const SERVICES: Service[] = [
  {
    id: "ai-ml",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "AI / ML Engineering",
    description:
      "LLM applications, RAG pipelines, agentic systems, computer vision, and production ML models built for real-world scale.",
    href: "/services/ai-ml-engineering",
  },
  {
    id: "cloud",
    icon: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15z",
    title: "Cloud & Infrastructure",
    description:
      "AWS, Azure, and GCP architecture. Kubernetes, Terraform, IaC, and cost optimisation at enterprise scale.",
    href: "/services/cloud-infrastructure",
  },
  {
    id: "devops",
    icon: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
    title: "DevOps & SRE",
    description:
      "CI/CD pipelines, platform engineering, observability, and SRE practices that eliminate deployment friction permanently.",
    href: "/services/devops-sre",
  },
  {
    id: "data",
    icon: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
    title: "Data Engineering",
    description:
      "High-volume pipelines, cloud warehouses, lakehouse architectures, and feature stores your AI models need to perform reliably.",
    href: "/services/data-engineering",
  },
  {
    id: "fullstack",
    icon: "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25z",
    title: "Full Stack Development",
    description:
      "React, Next.js, Node.js, and PostgreSQL. End-to-end web applications, SaaS platforms, and customer-facing products.",
    href: "/services/full-stack-development",
  },
  {
    id: "salesforce-erp",
    icon: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244",
    title: "Salesforce & ERP",
    description:
      "Certified Apex, LWC, and CPQ specialists. Odoo ERP implementation and custom CRM integrations that maximise your ROI.",
    href: "/services/salesforce-erp",
  },
];

// ─── Case Studies ─────────────────────────────────────────────────────────────

export interface CaseStudy {
  id: string;
  metric: string;
  metricLabel: string;
  industry: string;
  title: string;
  summary: string;
  href: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "acquire",
    metric: "60%",
    metricLabel: "faster first response",
    industry: "SaaS",
    title: "Acquire.io scales to Fortune 500 clients with rebuilt cobrowse and AI chat",
    summary:
      "Rebuilt cobrowse engine, AI chatbot, WebRTC video, and 25-language platform for a unified enterprise customer engagement product.",
    href: "/case-studies/acquire",
  },
  {
    id: "import-io",
    metric: "20M+",
    metricLabel: "data points per day",
    industry: "Enterprise Data",
    title: "Import.io processes 20M+ data points daily with AI-powered extraction",
    summary:
      "Rebuilt the extraction engine with ML-based DOM recognition, distributed Kafka pipeline, and 30+ BI integrations.",
    href: "/case-studies/import-io",
  },
  {
    id: "beforeyoubuy",
    metric: "3x",
    metricLabel: "booking volume growth",
    industry: "PropTech",
    title: "Before You Buy scales to 250+ inspectors across 40+ Australian cities",
    summary:
      "Built an end-to-end inspection platform with instant online booking, field mobile app, and 2-hour automated report delivery.",
    href: "/case-studies/beforeyoubuy",
  },
];

// ─── Process Steps ────────────────────────────────────────────────────────────

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Tell us your need",
    description:
      "30-minute discovery call. Share your role, tech stack, and timeline. No lengthy forms.",
  },
  {
    step: 2,
    title: "Get matched profiles",
    description:
      "Receive 2–3 pre-vetted developer profiles within 48 hours — matched to your exact requirements.",
  },
  {
    step: 3,
    title: "Interview and select",
    description:
      "Technical assessment, code review, or culture fit — your process, your decision.",
  },
  {
    step: 4,
    title: "Onboard in 5 days",
    description:
      "Contracts signed, access provisioned, developer joins your first sprint — fast.",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  companyHref?: string;
  initials: string;
  photo?: string; // path relative to /public, e.g. "/testimonials/hilla.jpg"
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "hilla",
    quote:
      "The team's attention to detail, creativity, and technical expertise exceeded our expectations. We've received so much positive feedback from our customers already.",
    name: "Hilla Pedramparsi",
    role: "CTO",
    company: "Import.io",
    companyHref: "https://www.import.io",
    initials: "HP",
    photo: "/testimonials/hilla.webp",
  },
  {
    id: "morten",
    quote:
      "KivvaTech didn't just deliver code, they delivered outcomes. Their engineers understood our architecture from day one, spotted bottlenecks we had missed for months, and shipped production-ready solutions fast. The ownership they brought made them feel like the best team we never had to hire full-time.",
    name: "Morten Garbol Franck",
    role: "VP of Engineering",
    company: "Engage3",
    companyHref: "https://www.engage3.com",
    initials: "MF",
    photo: "/testimonials/morten.png",
  },
  {
    id: "sofia",
    quote:
      "Working with Kivva Tech was an absolute pleasure! They took the time to understand our business needs and translated them into a beautifully designed, user-friendly website.",
    name: "Sofia Evlo",
    role: "Graphic Designer",
    company: "Dexi.io",
    companyHref: "https://www.dexi.io",
    initials: "SE",
    photo: "/testimonials/sofia.webp",
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  readTime: string;
  date: string;
  href: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "rag-2026",
    category: "AI Engineering",
    title:
      "Building production-ready RAG systems: architecture patterns for 2026",
    readTime: "9 min",
    date: "May 8, 2026",
    href: "/blog/building-production-ready-rag-systems-2026",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
  {
    id: "multi-agent",
    category: "AI Agents",
    title:
      "Multi-agent systems for enterprise: from single bots to autonomous workflows",
    readTime: "9 min",
    date: "May 7, 2026",
    href: "/blog/multi-agent-systems-enterprise",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
  },
  {
    id: "ai-strategy",
    category: "Industry Insights",
    title:
      "AI-first vs AI-assisted: how enterprises choose the right strategy for transformation",
    readTime: "8 min",
    date: "May 6, 2026",
    href: "/blog/ai-first-vs-ai-assisted-strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
];

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER_LINKS: Array<{
  heading: string;
  links: Array<{ label: string; href: string }>;
}> = [
  {
    heading: "Services",
    links: [
      { label: "AI Engineering", href: "/ai-engineering" },
      { label: "Cloud & DevOps", href: "/services/cloud-infrastructure" },
      { label: "Full Stack", href: "/services/full-stack-development" },
      { label: "Data Engineering", href: "/services/data-engineering" },
      { label: "Salesforce & ERP", href: "/services/salesforce-erp" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Hire Developers", href: "/hire-developers" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Book a Discovery Call", href: "/book-a-meeting" },
      { label: "Contact Us", href: "/contact" },
      { label: "coffee@kivva.tech", href: "mailto:coffee@kivva.tech" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
];

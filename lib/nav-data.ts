/**
 * Navigation data — all primary nav items with their submenu groups.
 *
 * Structure:
 *  NavItem          — top-level menu entry (may have groups)
 *  NavGroup         — a labelled column inside a mega-menu panel
 *  NavSubItem       — a single link inside a group
 *
 * Adding a new page: add/edit an entry here — no JSX to touch.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavSubItem {
  label: string;
  description: string;
  href: string;
  /** Heroicons outline SVG path string */
  icon: string;
  /** Optional badge shown next to the label (e.g. "New") */
  badge?: string;
}

export interface NavGroup {
  /** Optional heading displayed above the group's items */
  heading?: string;
  items: NavSubItem[];
}

export interface NavItem {
  label: string;
  /** Direct href — used when the item has no submenu, or as "View all" link */
  href: string;
  /** If present, hovering shows a mega-menu dropdown */
  groups?: NavGroup[];
}

// ─── Shared icon paths (Heroicons outline, 24px viewBox) ─────────────────────

const ICONS = {
  brain:
    "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  bolt: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  code: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
  puzzle:
    "M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.032.032 0 0 0-.031-.025 48.198 48.198 0 0 1-3.897-.306.64.64 0 0 1-.657-.644v0z",
  cloud:
    "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15z",
  robot:
    "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25zm.75-12h9v9h-9v-9z",
  chart:
    "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z",
  database:
    "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
  gear: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  server:
    "M21.75 17.25v.75a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25v-.75m19.5 0a2.25 2.25 0 0 0 2.25-2.25v-1.5a2.25 2.25 0 0 0-2.25-2.25m-19.5 0a2.25 2.25 0 0 0-2.25 2.25v1.5A2.25 2.25 0 0 0 2.25 17.25m19.5 0H2.25M2.25 17.25a2.25 2.25 0 0 1-2.25-2.25v-1.5a2.25 2.25 0 0 1 2.25-2.25h19.5A2.25 2.25 0 0 1 24 13.5v1.5a2.25 2.25 0 0 1-2.25 2.25M2.25 6.75a2.25 2.25 0 0 0-2.25 2.25v1.5a2.25 2.25 0 0 0 2.25 2.25h19.5A2.25 2.25 0 0 0 24 10.5V9a2.25 2.25 0 0 0-2.25-2.25H2.25z",
  link: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244",
  layers:
    "M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3",
  chat: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
  mobile:
    "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3",
  globe:
    "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
  users:
    "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z",
  briefcase:
    "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0c-.348-.284-.57-.674-.57-1.108v-3.03a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v3.031c0 .434-.222.823-.57 1.108M9.75 8.25V6a2.25 2.25 0 0 1 2.25-2.25h0A2.25 2.25 0 0 1 14.25 6v2.25",
  info: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9-3.75h.008v.008H12V8.25z",
  trophy:
    "M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0",
  plane:
    "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12zm0 0h7.5",
  truck:
    "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  home: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  book: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
};

// ─── Navigation data ──────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  // ── AI Engineering ──────────────────────────────────────────────────────────
  {
    label: "AI Engineering",
    href: "/ai-engineering",
    groups: [
      {
        heading: "Core Capabilities",
        items: [
          {
            label: "AI Strategy & Consulting",
            description: "Roadmaps, workshops, and POC-driven validation.",
            href: "/ai-engineering/strategy",
            icon: ICONS.brain,
          },
          {
            label: "AI Automation & Workflows",
            description: "Eliminate manual bottlenecks across your stack.",
            href: "/ai-engineering/automation",
            icon: ICONS.bolt,
          },
          {
            label: "Custom AI Development",
            description: "Purpose-built models for your domain and data.",
            href: "/ai-engineering/custom-dev",
            icon: ICONS.puzzle,
          },
          {
            label: "AI Integration & Assistants",
            description: "Embed AI into Slack, Salesforce, ERPs, and more.",
            href: "/ai-engineering/integration",
            icon: ICONS.link,
          },
        ],
      },
      {
        heading: "Advanced AI",
        items: [
          {
            label: "Agentic AI & Multi-Agent",
            description: "Autonomous agents for complex enterprise workflows.",
            href: "/ai-engineering/agentic",
            icon: ICONS.robot,
            badge: "New",
          },
          {
            label: "RAG & Knowledge Systems",
            description: "Context-aware retrieval with vector stores.",
            href: "/ai-engineering/rag",
            icon: ICONS.database,
            badge: "New",
          },
          {
            label: "AI Infrastructure & Deployment",
            description: "Private cloud & on-prem. Zero vendor lock-in.",
            href: "/ai-engineering/infrastructure",
            icon: ICONS.server,
          },
          {
            label: "Data Engineering for AI",
            description: "Pipelines, lakes, and feature stores at scale.",
            href: "/ai-engineering/data",
            icon: ICONS.layers,
          },
        ],
      },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────────
  {
    label: "Services",
    href: "/services",
    groups: [
      {
        heading: "Development",
        items: [
          {
            label: "Custom Software Development",
            description: "End-to-end product engineering for any platform.",
            href: "/services/custom-software",
            icon: ICONS.code,
          },
          {
            label: "Full Stack Development",
            description: "React, Next.js, Node.js, and PostgreSQL.",
            href: "/services/full-stack-development",
            icon: ICONS.layers,
          },
          {
            label: "Mobile App Development",
            description: "iOS, Android, and cross-platform applications.",
            href: "/services/mobile-app",
            icon: ICONS.mobile,
          },
          {
            label: "AI-Driven Product Engineering",
            description: "Ship AI-native products with embedded teams.",
            href: "/ai-engineering/product",
            icon: ICONS.brain,
          },
          {
            label: "E-commerce Solutions",
            description: "Shopify, headless commerce, and custom storefronts.",
            href: "/services/ecommerce-solutions",
            icon: ICONS.layers,
          },
        ],
      },
      {
        heading: "Infrastructure & Platforms",
        items: [
          {
            label: "Cloud & Infrastructure",
            description: "AWS, Azure, GCP. Kubernetes and IaC.",
            href: "/services/cloud-infrastructure",
            icon: ICONS.cloud,
          },
          {
            label: "DevOps & SRE",
            description: "CI/CD, platform engineering, observability.",
            href: "/services/devops-sre",
            icon: ICONS.gear,
          },
          {
            label: "Salesforce & ERP (Odoo)",
            description: "Certified implementation and custom integrations.",
            href: "/services/salesforce-erp",
            icon: ICONS.link,
          },
          {
            label: "Data Engineering",
            description: "High-volume pipelines and cloud warehouses.",
            href: "/services/data-engineering",
            icon: ICONS.database,
          },
        ],
      },
    ],
  },

  // ── AI Solutions ─────────────────────────────────────────────────────────────
  {
    label: "AI Solutions",
    href: "/ai-solutions",
    groups: [
      {
        heading: "AI Products",
        items: [
          {
            label: "Conversational AI",
            description: "Chatbots, voice bots, and virtual assistants.",
            href: "/ai-solutions/conversational",
            icon: ICONS.chat,
          },
          {
            label: "Predictive Analytics",
            description: "Forecast demand, risk, and customer behaviour.",
            href: "/ai-solutions/predictive",
            icon: ICONS.chart,
          },
          {
            label: "AI Decision Intelligence",
            description: "Real-time recommendations and decision engines.",
            href: "/ai-solutions/decision",
            icon: ICONS.brain,
          },
          {
            label: "Custom AI Models",
            description: "Fine-tuned models trained on your data.",
            href: "/ai-solutions/custom-models",
            icon: ICONS.gear,
          },
          {
            label: "AI Assistants & Copilots",
            description: "Intelligent assistants for any business workflow.",
            href: "/ai-solutions/assistants",
            icon: ICONS.robot,
          },
        ],
      },
      {
        heading: "Platform Solutions",
        items: [
          {
            label: "ERP Implementation (Odoo)",
            description: "Full Odoo deployment and custom modules.",
            href: "/services/salesforce-erp",
            icon: ICONS.briefcase,
          },
          {
            label: "Salesforce Implementation",
            description: "Sales Cloud, Service Cloud, CPQ, and LWC.",
            href: "/services/salesforce-erp",
            icon: ICONS.globe,
          },
          {
            label: "Custom Software Development",
            description: "Purpose-built software for your business.",
            href: "/services/custom-software",
            icon: ICONS.code,
          },
        ],
      },
    ],
  },

  // ── Industries ───────────────────────────────────────────────────────────────
  {
    label: "Industries",
    href: "/industries",
    groups: [
      {
        heading: "Enterprise Sectors",
        items: [
          {
            label: "Banking & Finance",
            description: "Fintech, risk AI, and compliance automation.",
            href: "/industries/banking-finance",
            icon: ICONS.briefcase,
          },
          {
            label: "Healthcare",
            description: "AI for patient outcomes and clinical ops.",
            href: "/industries/healthcare",
            icon: ICONS.users,
          },
          {
            label: "Retail & Commerce",
            description: "Personalisation and commerce AI at scale.",
            href: "/industries/retail-commerce",
            icon: ICONS.globe,
          },
          {
            label: "Education",
            description: "EdTech learning intelligence and automation.",
            href: "/industries/education",
            icon: ICONS.book,
          },
          {
            label: "Travel & Hospitality",
            description: "Smart booking, pricing, and experience AI.",
            href: "/industries/travel-hospitality",
            icon: ICONS.plane,
          },
        ],
      },
      {
        heading: "Operational Sectors",
        items: [
          {
            label: "Supply Chain & Logistics",
            description: "Routing AI, fleet management, and tracking.",
            href: "/industries/supply-chain-logistics",
            icon: ICONS.truck,
          },
          {
            label: "Food & Beverages",
            description: "Smart dining, ordering, and supply AI.",
            href: "/industries/food-beverages",
            icon: ICONS.home,
          },
          {
            label: "Sports",
            description: "Performance analytics and fan engagement.",
            href: "/industries/sports",
            icon: ICONS.trophy,
          },
          {
            label: "Social Networking",
            description: "AI-powered community and content systems.",
            href: "/industries/social-networking",
            icon: ICONS.chat,
          },
          {
            label: "Real Estate",
            description: "Listing intelligence and market analytics.",
            href: "/industries/real-estate",
            icon: ICONS.home,
          },
        ],
      },
    ],
  },

  // ── Case Studies ─────────────────────────────────────────────────────────────
  {
    label: "Case Studies",
    href: "/case-studies",
    groups: [
      {
        heading: "Client Work",
        items: [
          {
            label: "Acquire.io",
            description: "60% faster response with rebuilt cobrowse and AI chat.",
            href: "/case-studies/acquire",
            icon: ICONS.chat,
          },
          {
            label: "Import.io",
            description: "20M+ data points/day with AI-powered extraction.",
            href: "/case-studies/import-io",
            icon: ICONS.database,
          },
          {
            label: "Dexi.io",
            description: "60% cloud cost reduction and 40% faster robot builds.",
            href: "/case-studies/dexi",
            icon: ICONS.layers,
          },
          {
            label: "Before You Buy",
            description: "3x booking growth across 40+ Australian cities.",
            href: "/case-studies/beforeyoubuy",
            icon: ICONS.home,
          },
          {
            label: "Ludic.life",
            description: "312% conversion increase with headless Shopify rebuild.",
            href: "/case-studies/ludic",
            icon: ICONS.globe,
          },
          {
            label: "Stashly",
            description: "50k+ users and SOC 2 certified in 6 months.",
            href: "/case-studies/stashly",
            icon: ICONS.briefcase,
          },
        ],
      },
    ],
  },

  // ── About ────────────────────────────────────────────────────────────────────
  {
    label: "About",
    href: "/about",
    groups: [
      {
        heading: "Company",
        items: [
          {
            label: "About KivvaTech",
            description: "15+ years, 360+ clients, 15+ countries.",
            href: "/about",
            icon: ICONS.info,
          },
          {
            label: "Our Team",
            description: "Meet the engineers and leaders.",
            href: "/about/team",
            icon: ICONS.users,
          },
          {
            label: "Careers",
            description: "Join our global engineering team.",
            href: "/careers",
            icon: ICONS.briefcase,
          },
          {
            label: "Blog & Insights",
            description: "AI engineering deep-dives from our team.",
            href: "/blog",
            icon: ICONS.book,
          },
        ],
      },
    ],
  },
];

// ─── Hire Developers — used separately in the nav CTA area ───────────────────

export const HIRE_DEV_ITEMS: NavSubItem[] = [
  {
    label: "AI / ML Engineers",
    description: "LLMs, RAG, agents, computer vision.",
    href: "/hire-developers/ai-ml-engineers",
    icon: ICONS.brain,
    badge: "Most popular",
  },
  {
    label: "Data Engineers",
    description: "Pipelines, warehouses, lakehouses.",
    href: "/hire-developers/data-engineers",
    icon: ICONS.database,
  },
  {
    label: "Cloud Specialists",
    description: "AWS, Azure, GCP, Kubernetes.",
    href: "/hire-developers/cloud-specialists",
    icon: ICONS.cloud,
  },
  {
    label: "DevOps Engineers",
    description: "CI/CD, SRE, platform engineering.",
    href: "/hire-developers/devops-engineers",
    icon: ICONS.gear,
  },
  {
    label: "Full Stack Developers",
    description: "React, Next.js, Node.js, PostgreSQL.",
    href: "/hire-developers/full-stack-developers",
    icon: ICONS.code,
  },
  {
    label: "Salesforce Developers",
    description: "Apex, LWC, CPQ, multi-cloud.",
    href: "/hire-developers/salesforce-developers",
    icon: ICONS.link,
  },
  {
    label: "Offshore Engineers",
    description: "40–60% cost saving. Your timezone.",
    href: "/hire-developers/offshore-engineers",
    icon: ICONS.globe,
  },
];

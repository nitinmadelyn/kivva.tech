/**
 * Phase 2 page content — AI Engineering and Services sub-pages.
 *
 * Every sub-page imports its config from here.
 * The SubPageTemplate component renders it — no layout code lives in page.tsx.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SubPageCapability {
  icon: string; // Heroicons outline 24px path
  title: string;
  body: string;
}

export interface SubPageStep {
  step: string; // e.g. "01"
  title: string;
  body: string;
}

export interface TechCategory {
  label: string;
  items: string[];
}

export interface RelatedPage {
  label: string;
  href: string;
  description: string;
}

export interface SubPageConfig {
  /** Nav breadcrumb label (e.g. "AI Engineering") */
  section: string;
  sectionHref: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  /** Optional hero stats strip */
  stats?: Array<{ value: string; label: string }>;
  capabilities: SubPageCapability[];
  process: SubPageStep[];
  techStack?: TechCategory[];
  relatedPages?: RelatedPage[];
  cta: { title: string; subtitle: string };
  // SEO
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  path: string;
}

// ─── Shared icon paths ────────────────────────────────────────────────────────

const IC = {
  brain:    "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  bolt:     "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  code:     "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
  puzzle:   "M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.032.032 0 0 0-.031-.025 48.198 48.198 0 0 1-3.897-.306.64.64 0 0 1-.657-.644v0z",
  cloud:    "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15z",
  robot:    "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25zm.75-12h9v9h-9v-9z",
  chart:    "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z",
  database: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
  gear:     "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  server:   "M21.75 17.25v.75a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25v-.75m19.5 0a2.25 2.25 0 0 0 2.25-2.25v-1.5a2.25 2.25 0 0 0-2.25-2.25m-19.5 0a2.25 2.25 0 0 0-2.25 2.25v1.5A2.25 2.25 0 0 0 2.25 17.25m19.5 0H2.25",
  link:     "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244",
  layers:   "M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3",
  chat:     "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
  mobile:   "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3",
  shield:   "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  check:    "M4.5 12.75l6 6 9-13.5",
  arrow:    "m8.25 4.5 7.5 7.5-7.5 7.5",
  star:     "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z",
  eye:      "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
};

// ─── AI Engineering sub-pages ─────────────────────────────────────────────────

export const AI_ENGINEERING_PAGES: Record<string, SubPageConfig> = {

  strategy: {
    section: "AI Engineering",
    sectionHref: "/ai-engineering",
    badge: "AI Engineering",
    title: "AI Strategy & Consulting",
    subtitle: "From vision to validated roadmap — fast.",
    description:
      "We help CTOs, heads of engineering, and product leaders define a clear, executable AI strategy. From opportunity discovery to proof-of-concept validation, we cut through the noise and focus on outcomes that create competitive advantage.",
    stats: [
      { value: "2 weeks", label: "To first POC" },
      { value: "90%", label: "POC-to-production rate" },
      { value: "360+", label: "Completed projects" },
      { value: "30+", label: "Countries" },
    ],
    capabilities: [
      { icon: IC.brain, title: "AI Opportunity Assessment", body: "We audit your current stack, data assets, and processes to surface the highest-ROI AI use cases. Prioritised by effort, impact, and strategic alignment." },
      { icon: IC.chart, title: "Roadmap & Business Case", body: "A clear 12-month AI roadmap with milestones, resource requirements, and a quantified business case you can present to your board." },
      { icon: IC.puzzle, title: "Proof-of-Concept Development", body: "We build focused POCs in 2–4 weeks to validate assumptions before committing to full development — reducing risk and accelerating buy-in." },
      { icon: IC.shield, title: "AI Governance & Ethics Framework", body: "Data governance, bias auditing, explainability standards, and compliance checkpoints built into every project from day one." },
      { icon: IC.layers, title: "Technology Selection", body: "Vendor-neutral guidance on LLM providers, vector stores, orchestration frameworks, and infrastructure — matched to your constraints and budget." },
      { icon: IC.bolt, title: "Change Management & Enablement", body: "Training, playbooks, and internal champion programmes that ensure AI adoption actually sticks across your organisation." },
    ],
    process: [
      { step: "01", title: "Discovery workshop", body: "Half-day session with your key stakeholders. We map your processes, data, and strategic goals." },
      { step: "02", title: "Opportunity ranking", body: "We score and rank use cases by impact, feasibility, and time-to-value. You get a prioritised shortlist within a week." },
      { step: "03", title: "POC sprint", body: "2–4 week proof-of-concept built by a senior AI engineer. Validates the top use case before any large investment." },
      { step: "04", title: "Roadmap delivery", body: "Detailed roadmap, resource plan, and vendor recommendations. Ready to present internally or to investors." },
    ],
    relatedPages: [
      { label: "Custom AI Development", href: "/ai-engineering/custom-dev", description: "Build on your validated POC" },
      { label: "Agentic AI & Multi-Agent", href: "/ai-engineering/agentic", description: "Autonomous workflow agents" },
      { label: "AI Integration & Assistants", href: "/ai-engineering/integration", description: "Embed AI into your existing tools" },
    ],
    cta: { title: "Ready to define your AI strategy?", subtitle: "Book a free 30-minute discovery call with a senior AI engineer." },
    metaTitle: "AI Strategy & Consulting",
    metaDescription: "KivvaTech helps CTOs and product leaders build a clear, executable AI strategy — from opportunity assessment to validated POC in weeks.",
    metaKeywords: ["AI strategy consulting", "AI roadmap", "AI opportunity assessment", "AI POC development", "enterprise AI consulting"],
    path: "/ai-engineering/strategy",
  },

  automation: {
    section: "AI Engineering",
    sectionHref: "/ai-engineering",
    badge: "AI Engineering",
    title: "AI Automation & Workflows",
    subtitle: "Eliminate repetitive work. Scale without headcount.",
    description:
      "We design and build intelligent automation systems that replace manual, rule-based processes with adaptive AI workflows. From document processing to multi-step approval chains, your teams stop doing work that should be automated.",
    stats: [
      { value: "70%", label: "Average manual effort saved" },
      { value: "3x", label: "Process throughput increase" },
      { value: "48h", label: "Average automation deployment" },
      { value: "0", label: "Vendor lock-in" },
    ],
    capabilities: [
      { icon: IC.bolt, title: "Intelligent Document Processing", body: "Extract, classify, and route structured data from invoices, contracts, forms, and emails using LLM-powered parsers — with 98%+ accuracy." },
      { icon: IC.robot, title: "Process Orchestration", body: "Multi-step workflows with conditional branching, human-in-the-loop checkpoints, and automatic exception handling." },
      { icon: IC.link, title: "System Integration", body: "Connect your AI automation layer to Salesforce, SAP, Jira, Slack, or any API-accessible system — no rip-and-replace required." },
      { icon: IC.eye, title: "Quality & Monitoring", body: "Real-time dashboards showing automation accuracy, exception rates, and ROI. SLA alerts and automatic fallback to human review when confidence drops." },
      { icon: IC.gear, title: "RPA + AI Hybrid", body: "Combine traditional RPA for deterministic steps with LLM reasoning for unstructured decisions — best of both worlds." },
      { icon: IC.chart, title: "ROI Measurement", body: "We baseline your current process costs and measure automation savings monthly — so you always know the exact return on investment." },
    ],
    process: [
      { step: "01", title: "Process audit", body: "Map your highest-volume, highest-cost manual processes. Quantify time, error rate, and headcount cost." },
      { step: "02", title: "Automation design", body: "Design the AI workflow architecture: data flows, decision points, integrations, and exception paths." },
      { step: "03", title: "Build & test", body: "Build in 2–4 week sprints. Test against real data with staged rollout and shadow mode validation." },
      { step: "04", title: "Deploy & monitor", body: "Production deployment with real-time monitoring, accuracy dashboards, and continuous improvement loop." },
    ],
    techStack: [
      { label: "Orchestration", items: ["LangGraph", "Temporal", "Airflow", "Prefect"] },
      { label: "AI Models", items: ["GPT-4o", "Claude 3.5", "Gemini", "Custom fine-tuned"] },
      { label: "Integration", items: ["Zapier", "n8n", "MuleSoft", "Custom webhooks"] },
      { label: "Document AI", items: ["Azure Document Intelligence", "AWS Textract", "Custom parsers"] },
    ],
    relatedPages: [
      { label: "Agentic AI & Multi-Agent", href: "/ai-engineering/agentic", description: "Fully autonomous agent systems" },
      { label: "AI Integration & Assistants", href: "/ai-engineering/integration", description: "Embed AI into your tools" },
      { label: "AI Strategy & Consulting", href: "/ai-engineering/strategy", description: "Define your automation roadmap" },
    ],
    cta: { title: "Which process should you automate first?", subtitle: "We'll scope it in a 30-minute call and give you a cost-saving estimate on the spot." },
    metaTitle: "AI Automation & Workflows",
    metaDescription: "KivvaTech builds intelligent AI automation systems that eliminate manual work — document processing, workflow orchestration, and multi-system integration.",
    metaKeywords: ["AI automation", "intelligent workflow automation", "document processing AI", "business process automation", "AI workflow"],
    path: "/ai-engineering/automation",
  },

  "custom-dev": {
    section: "AI Engineering",
    sectionHref: "/ai-engineering",
    badge: "AI Engineering",
    title: "Custom AI Development",
    subtitle: "Purpose-built AI for your domain and your data.",
    description:
      "Off-the-shelf AI tools give everyone the same capabilities. We build proprietary AI systems trained on your data, tuned for your use case, and owned entirely by you. From fine-tuned LLMs to custom computer vision pipelines.",
    stats: [
      { value: "4 weeks", label: "Average model-to-production" },
      { value: "40%", label: "Better accuracy vs generic models" },
      { value: "100%", label: "IP ownership" },
      { value: "15+", label: "Years AI/ML experience" },
    ],
    capabilities: [
      { icon: IC.brain, title: "LLM Fine-Tuning", body: "Fine-tune open-source models (Llama, Mistral, Phi) on your proprietary data for domain-specific accuracy — with full IP ownership and no API dependency." },
      { icon: IC.eye, title: "Computer Vision", body: "Custom vision models for quality inspection, object detection, document OCR, medical imaging, and satellite analysis." },
      { icon: IC.chart, title: "Predictive Modelling", body: "Supervised and unsupervised ML models for demand forecasting, churn prediction, fraud detection, and pricing optimisation." },
      { icon: IC.database, title: "Training Data Engineering", body: "Data labelling pipelines, synthetic data generation, and dataset curation — the foundation every model quality depends on." },
      { icon: IC.layers, title: "Model Evaluation & Benchmarking", body: "Rigorous evals, A/B testing infrastructure, and ongoing model performance monitoring. We don't just ship — we measure." },
      { icon: IC.server, title: "Production Deployment", body: "Containerised model serving with GPU auto-scaling, low-latency inference APIs, and shadow deployment for zero-downtime rollouts." },
    ],
    process: [
      { step: "01", title: "Problem framing & data review", body: "Define success metrics, review your data quality and volume, and select the right model architecture." },
      { step: "02", title: "Baseline & experimentation", body: "Rapid experimentation sprint to establish baseline accuracy and compare model approaches." },
      { step: "03", title: "Training & evaluation", body: "Full training run with rigorous evaluation against holdout datasets and real-world edge cases." },
      { step: "04", title: "Production deployment", body: "Scalable inference API, monitoring dashboards, and retraining pipeline handed to your team." },
    ],
    techStack: [
      { label: "Frameworks", items: ["PyTorch", "TensorFlow", "Hugging Face", "JAX"] },
      { label: "LLMs", items: ["Llama 3", "Mistral", "Phi-3", "GPT-4", "Claude"] },
      { label: "MLOps", items: ["MLflow", "Weights & Biases", "DVC", "SageMaker"] },
      { label: "Infrastructure", items: ["CUDA GPUs", "AWS SageMaker", "Azure ML", "GCP Vertex AI"] },
    ],
    relatedPages: [
      { label: "RAG & Knowledge Systems", href: "/ai-engineering/rag", description: "Context-aware retrieval" },
      { label: "Data Engineering for AI", href: "/ai-engineering/data", description: "Training data pipelines" },
      { label: "AI Infrastructure & Deployment", href: "/ai-engineering/infrastructure", description: "Scale your models" },
    ],
    cta: { title: "Have a use case that off-the-shelf AI can't solve?", subtitle: "Tell us about it. We'll tell you if custom development is the right path — honestly." },
    metaTitle: "Custom AI Development",
    metaDescription: "KivvaTech builds custom AI models — LLM fine-tuning, computer vision, predictive ML — trained on your data, owned by you, deployed to production.",
    metaKeywords: ["custom AI development", "LLM fine-tuning", "custom machine learning", "computer vision development", "AI model training"],
    path: "/ai-engineering/custom-dev",
  },

  integration: {
    section: "AI Engineering",
    sectionHref: "/ai-engineering",
    badge: "AI Engineering",
    title: "AI Integration & Assistants",
    subtitle: "Bring AI into the tools your team already uses.",
    description:
      "The fastest path to AI value isn't building something new — it's making your existing tools smarter. We build AI assistants and integrations for Slack, Salesforce, Microsoft 365, ERPs, and any system with an API.",
    capabilities: [
      { icon: IC.chat, title: "Conversational AI Assistants", body: "Custom chatbots and voice assistants with memory, tool use, and escalation paths — deployed across web, Slack, Teams, or your product." },
      { icon: IC.link, title: "CRM & ERP Integration", body: "AI layers for Salesforce, HubSpot, SAP, and Odoo. Automated summaries, lead scoring, anomaly alerts, and natural language queries." },
      { icon: IC.bolt, title: "Slack & Teams Bots", body: "Intelligent bots that answer questions from your knowledge base, summarise threads, create tickets, and trigger workflows — all from chat." },
      { icon: IC.brain, title: "Embedded Product AI", body: "Copilots and smart features integrated directly into your SaaS product — improving user retention and reducing support volume." },
      { icon: IC.gear, title: "API & Webhook Orchestration", body: "Event-driven AI triggers across your tool stack. New lead in CRM fires enrichment, qualification, and outreach — automatically." },
      { icon: IC.shield, title: "Security & Data Residency", body: "Private deployment options. Your data never leaves your infrastructure. AWS Certified and GDPR compliant integration patterns." },
    ],
    process: [
      { step: "01", title: "Tool & API audit", body: "Map your current tool stack, identify integration points, and define the assistant's scope and permissions." },
      { step: "02", title: "Assistant design", body: "Design conversation flows, tool use, memory strategy, and escalation logic. Align on KPIs." },
      { step: "03", title: "Build & connect", body: "Build the assistant core, connect to your APIs, and train on your knowledge base and documentation." },
      { step: "04", title: "Pilot & iterate", body: "Soft launch to a pilot team, gather feedback, tune responses and tool use, then roll out company-wide." },
    ],
    techStack: [
      { label: "LLM APIs", items: ["OpenAI", "Anthropic", "Google Gemini", "Azure OpenAI"] },
      { label: "Frameworks", items: ["LangChain", "LlamaIndex", "Semantic Kernel"] },
      { label: "Platforms", items: ["Slack", "Teams", "Salesforce", "SAP", "Odoo"] },
      { label: "Deployment", items: ["AWS Lambda", "Azure Functions", "Docker", "Kubernetes"] },
    ],
    relatedPages: [
      { label: "AI Automation & Workflows", href: "/ai-engineering/automation", description: "Automate the work behind the assistant" },
      { label: "RAG & Knowledge Systems", href: "/ai-engineering/rag", description: "Give your assistant access to company knowledge" },
      { label: "Agentic AI & Multi-Agent", href: "/ai-engineering/agentic", description: "Assistants that take action autonomously" },
    ],
    cta: { title: "Which tool should your team have AI in?", subtitle: "We can usually wire up a working prototype in under a week." },
    metaTitle: "AI Integration & Assistants",
    metaDescription: "KivvaTech builds AI assistants and integrations for Slack, Salesforce, ERPs, and Microsoft 365 — bringing AI into your existing workflow.",
    metaKeywords: ["AI assistant development", "Slack AI bot", "Salesforce AI integration", "enterprise AI chatbot", "AI copilot development"],
    path: "/ai-engineering/integration",
  },

  agentic: {
    section: "AI Engineering",
    sectionHref: "/ai-engineering",
    badge: "AI Engineering · New",
    title: "Agentic AI & Multi-Agent Systems",
    subtitle: "AI that plans, acts, and delivers — without constant supervision.",
    description:
      "Agentic AI represents the next frontier: systems that don't just respond to prompts but autonomously plan multi-step tasks, use tools, coordinate with other agents, and complete complex workflows end-to-end.",
    stats: [
      { value: "10x", label: "Task throughput vs manual" },
      { value: "5 days", label: "Agent MVP to production" },
      { value: "99%", label: "Uptime on agent infrastructure" },
      { value: "Zero", label: "Vendor lock-in" },
    ],
    capabilities: [
      { icon: IC.robot, title: "Single-Agent Systems", body: "Purpose-built agents with tool use, memory, and planning capabilities. Research agents, code review agents, data analysis agents." },
      { icon: IC.layers, title: "Multi-Agent Orchestration", body: "Supervisor-worker agent architectures where a coordinator breaks down complex tasks and delegates to specialist sub-agents." },
      { icon: IC.gear, title: "Tool & API Integration", body: "Agents that use web search, execute code, query databases, call APIs, send emails, and update CRMs — all autonomously." },
      { icon: IC.shield, title: "Human-in-the-Loop Controls", body: "Approval checkpoints, confidence thresholds, and audit logs. Agents act autonomously within defined boundaries and escalate when uncertain." },
      { icon: IC.database, title: "Long-Term Memory & State", body: "Agents with persistent memory using vector stores, structured memory modules, and episodic recall — no context window limits." },
      { icon: IC.chart, title: "Agent Monitoring & Observability", body: "Full trace logging, cost attribution per agent, performance dashboards, and anomaly detection for agent behaviour drift." },
    ],
    process: [
      { step: "01", title: "Agent scope definition", body: "Define exactly what the agent should and should not do. Map the tools it needs and the boundaries it must respect." },
      { step: "02", title: "Architecture design", body: "Choose single vs multi-agent, orchestration pattern, memory strategy, and tool set." },
      { step: "03", title: "Sandbox build & evals", body: "Build in an isolated environment with comprehensive evals measuring task completion rate and failure modes." },
      { step: "04", title: "Staged production rollout", body: "Shadow mode, then limited rollout, then full production — with monitoring at every stage." },
    ],
    techStack: [
      { label: "Frameworks", items: ["LangGraph", "AutoGen", "CrewAI", "Claude Agents SDK"] },
      { label: "LLMs", items: ["Claude 3.5 Sonnet", "GPT-4o", "Gemini 1.5 Pro"] },
      { label: "Memory", items: ["Pinecone", "Weaviate", "Redis", "PostgreSQL pgvector"] },
      { label: "Infrastructure", items: ["Kubernetes", "AWS ECS", "Modal", "Temporal"] },
    ],
    relatedPages: [
      { label: "RAG & Knowledge Systems", href: "/ai-engineering/rag", description: "Knowledge retrieval for agents" },
      { label: "AI Automation & Workflows", href: "/ai-engineering/automation", description: "Simpler automation use cases" },
      { label: "AI Infrastructure & Deployment", href: "/ai-engineering/infrastructure", description: "Scale your agent infrastructure" },
    ],
    cta: { title: "Ready to build your first production agent?", subtitle: "We'll scope your use case and tell you exactly what it would take — in a 30-minute call." },
    metaTitle: "Agentic AI & Multi-Agent Systems",
    metaDescription: "KivvaTech builds production-grade agentic AI systems — autonomous agents that plan, use tools, and complete complex enterprise workflows end-to-end.",
    metaKeywords: ["agentic AI", "multi-agent systems", "AI agents development", "autonomous AI", "LangGraph agent", "enterprise AI agents"],
    path: "/ai-engineering/agentic",
  },

  rag: {
    section: "AI Engineering",
    sectionHref: "/ai-engineering",
    badge: "AI Engineering · New",
    title: "RAG & Knowledge Systems",
    subtitle: "Give your AI access to what your company knows.",
    description:
      "Retrieval-Augmented Generation (RAG) connects your LLM to your private knowledge — documentation, contracts, tickets, product data — so it gives accurate, contextual answers rather than hallucinating. We build production RAG systems that scale.",
    capabilities: [
      { icon: IC.database, title: "Vector Store Architecture", body: "Design and implement vector databases (Pinecone, Weaviate, pgvector) with optimal chunking, embedding, and indexing strategies for your content type." },
      { icon: IC.brain, title: "Hybrid Search", body: "Combine semantic vector search with keyword (BM25) search for best-of-both retrieval — especially effective for technical and domain-specific content." },
      { icon: IC.gear, title: "Advanced RAG Techniques", body: "HyDE, query rewriting, re-ranking, contextual compression, and multi-query retrieval. We implement the technique that fits your accuracy requirements." },
      { icon: IC.bolt, title: "Document Ingestion Pipelines", body: "Automated ingestion from Confluence, Notion, SharePoint, S3, databases, and APIs — with automatic re-indexing when documents change." },
      { icon: IC.shield, title: "Access Control & Security", body: "Document-level permissions enforced at retrieval time. Users only see answers grounded in content they're authorised to access." },
      { icon: IC.chart, title: "RAG Evaluation Framework", body: "Systematic evaluation using RAGAS, custom benchmarks, and human review. We measure retrieval accuracy, answer faithfulness, and hallucination rate." },
    ],
    process: [
      { step: "01", title: "Knowledge audit", body: "Inventory your knowledge sources, assess quality, and define the retrieval scope for version one." },
      { step: "02", title: "Pipeline design", body: "Design chunking strategy, embedding model selection, vector store schema, and retrieval configuration." },
      { step: "03", title: "Baseline & evaluate", body: "Build baseline RAG, run evals on representative queries, and iterate on retrieval quality." },
      { step: "04", title: "Production pipeline", body: "Automated ingestion, real-time indexing, API endpoints, and monitoring dashboard." },
    ],
    techStack: [
      { label: "Vector Stores", items: ["Pinecone", "Weaviate", "Qdrant", "pgvector"] },
      { label: "Embeddings", items: ["text-embedding-3", "Cohere Embed", "BGE", "Custom"] },
      { label: "Frameworks", items: ["LlamaIndex", "LangChain", "Haystack"] },
      { label: "Evaluation", items: ["RAGAS", "TruLens", "Custom evals"] },
    ],
    relatedPages: [
      { label: "AI Integration & Assistants", href: "/ai-engineering/integration", description: "Surface knowledge via chat assistant" },
      { label: "Agentic AI & Multi-Agent", href: "/ai-engineering/agentic", description: "Agents that retrieve and reason" },
      { label: "Data Engineering for AI", href: "/ai-engineering/data", description: "Pipelines that feed your vector store" },
    ],
    cta: { title: "Ready for AI that actually knows your business?", subtitle: "Tell us about your knowledge base and we'll design the right RAG architecture." },
    metaTitle: "RAG & Knowledge Systems",
    metaDescription: "KivvaTech builds production RAG systems connecting LLMs to your company knowledge — vector stores, hybrid search, and evaluation frameworks that eliminate hallucinations.",
    metaKeywords: ["RAG development", "retrieval augmented generation", "vector database", "knowledge base AI", "enterprise RAG system"],
    path: "/ai-engineering/rag",
  },

  infrastructure: {
    section: "AI Engineering",
    sectionHref: "/ai-engineering",
    badge: "AI Engineering",
    title: "AI Infrastructure & Deployment",
    subtitle: "Ship AI to production. Scale it without surprises.",
    description:
      "Building a great model is only half the problem. Getting it to production reliably — with low latency, high availability, cost control, and zero vendor lock-in — is where most teams struggle. We've deployed AI infrastructure for 360+ projects.",
    capabilities: [
      { icon: IC.server, title: "Model Serving Infrastructure", body: "GPU-optimised serving with vLLM, TGI, or Triton. Batching, quantisation, and caching strategies that cut inference cost by 60–80%." },
      { icon: IC.cloud, title: "Private Cloud & On-Premise", body: "Deploy models on your own cloud account or on-prem hardware. Full data residency, no third-party API dependency." },
      { icon: IC.gear, title: "MLOps & CI/CD", body: "Automated training, evaluation, and deployment pipelines. Model registry, versioning, and rollback in one command." },
      { icon: IC.chart, title: "Observability & Cost Control", body: "Inference latency, token usage, error rates, and cost-per-query dashboards. Automatic alerting and budget caps." },
      { icon: IC.bolt, title: "Auto-Scaling", body: "Kubernetes-based auto-scaling that handles traffic spikes without over-provisioning. GPU node pools with spot instance optimisation." },
      { icon: IC.shield, title: "Security & Compliance", body: "VPC isolation, encryption at rest and in transit, audit logging, and AWS Certified compliant deployment patterns." },
    ],
    process: [
      { step: "01", title: "Infrastructure audit", body: "Review your current serving setup, cost structure, latency requirements, and compliance constraints." },
      { step: "02", title: "Architecture design", body: "Design serving stack, scaling strategy, monitoring, and CI/CD pipeline." },
      { step: "03", title: "Build & benchmark", body: "Deploy infrastructure, run load tests, optimise for latency and cost." },
      { step: "04", title: "Handover & documentation", body: "Full runbook, monitoring dashboard, and knowledge transfer to your team." },
    ],
    techStack: [
      { label: "Serving", items: ["vLLM", "TGI", "Triton", "BentoML"] },
      { label: "Orchestration", items: ["Kubernetes", "EKS", "GKE", "AKS"] },
      { label: "MLOps", items: ["MLflow", "Kubeflow", "SageMaker Pipelines", "Vertex AI"] },
      { label: "Monitoring", items: ["Prometheus", "Grafana", "Langfuse", "Datadog"] },
    ],
    relatedPages: [
      { label: "Custom AI Development", href: "/ai-engineering/custom-dev", description: "The model that runs on your infra" },
      { label: "Data Engineering for AI", href: "/ai-engineering/data", description: "Data pipelines for training" },
      { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure", description: "General cloud architecture" },
    ],
    cta: { title: "Is your AI infrastructure production-ready?", subtitle: "We'll review your current setup and identify the risks before they become incidents." },
    metaTitle: "AI Infrastructure & Deployment",
    metaDescription: "KivvaTech builds production AI infrastructure — GPU serving, MLOps pipelines, private cloud deployment, and auto-scaling with full observability.",
    metaKeywords: ["AI infrastructure", "LLM deployment", "MLOps", "GPU model serving", "AI production deployment", "private AI deployment"],
    path: "/ai-engineering/infrastructure",
  },

  data: {
    section: "AI Engineering",
    sectionHref: "/ai-engineering",
    badge: "AI Engineering",
    title: "Data Engineering for AI",
    subtitle: "Your AI is only as good as the data that feeds it.",
    description:
      "Bad data is the number one reason AI projects fail. We build the data pipelines, feature stores, and data quality frameworks that give your models the high-quality, well-structured training data they need to perform in production.",
    capabilities: [
      { icon: IC.database, title: "Data Pipeline Architecture", body: "Batch and streaming pipelines using Apache Spark, Flink, and dbt — ingesting from databases, APIs, files, and event streams at scale." },
      { icon: IC.layers, title: "Feature Store Engineering", body: "Centralised feature stores (Feast, Tecton, custom) with point-in-time correct lookups — eliminating training/serving skew." },
      { icon: IC.bolt, title: "Data Labelling & Curation", body: "Scalable labelling workflows for NLP, computer vision, and structured data. Human review pipelines with active learning to reduce annotation cost." },
      { icon: IC.chart, title: "Data Quality & Validation", body: "Great Expectations, Soda, and custom validation rules catch data quality issues before they corrupt your models." },
      { icon: IC.gear, title: "Synthetic Data Generation", body: "Generate privacy-preserving synthetic datasets for model training when real data is scarce, sensitive, or imbalanced." },
      { icon: IC.brain, title: "Lakehouse Architecture", body: "Delta Lake, Apache Iceberg, and Hudi table formats. Scalable, versioned, queryable data storage that serves both analytics and AI." },
    ],
    process: [
      { step: "01", title: "Data audit", body: "Assess your data sources, quality, volume, and the gap between current state and what your models need." },
      { step: "02", title: "Pipeline design", body: "Design ingestion, transformation, validation, and serving architecture." },
      { step: "03", title: "Build & validate", body: "Build pipelines with full test coverage, data quality gates, and monitoring." },
      { step: "04", title: "Handover & ops", body: "Documentation, runbooks, and alerting. Your team owns it; we support the transition." },
    ],
    techStack: [
      { label: "Processing", items: ["Apache Spark", "Apache Flink", "dbt", "Databricks"] },
      { label: "Storage", items: ["Delta Lake", "Iceberg", "S3", "BigQuery", "Snowflake"] },
      { label: "Feature Stores", items: ["Feast", "Tecton", "Hopsworks"] },
      { label: "Quality", items: ["Great Expectations", "Soda", "Monte Carlo"] },
    ],
    relatedPages: [
      { label: "Custom AI Development", href: "/ai-engineering/custom-dev", description: "Use your data to train models" },
      { label: "RAG & Knowledge Systems", href: "/ai-engineering/rag", description: "Vector pipelines for retrieval" },
      { label: "Data Engineering", href: "/services/data-engineering", description: "General data engineering" },
    ],
    cta: { title: "Is your data ready for AI?", subtitle: "We'll audit your data pipelines and tell you exactly what needs to change." },
    metaTitle: "Data Engineering for AI",
    metaDescription: "KivvaTech builds AI-ready data pipelines, feature stores, and data quality frameworks — the foundation every production AI system depends on.",
    metaKeywords: ["data engineering for AI", "ML feature store", "training data pipeline", "data quality AI", "AI data infrastructure"],
    path: "/ai-engineering/data",
  },

  product: {
    section: "AI Engineering",
    sectionHref: "/ai-engineering",
    badge: "AI Engineering",
    title: "AI-Driven Product Engineering",
    subtitle: "Ship AI-native products that users actually want.",
    description:
      "We partner with product companies to build AI-native features — from copilots to recommendation engines to predictive UX — fully embedded into your existing product, with the speed of an AI-specialist team.",
    capabilities: [
      { icon: IC.brain, title: "AI Feature Design", body: "From user research to working prototype. We design AI features that solve real user problems, not just AI for AI's sake." },
      { icon: IC.bolt, title: "Copilot & Assistant Features", body: "AI assistants embedded directly in your product UI. Smart suggestions, natural language interfaces, and context-aware recommendations." },
      { icon: IC.star, title: "Personalisation Engines", body: "Recommendation systems, dynamic content ranking, and personalised UX that increase engagement and retention." },
      { icon: IC.chart, title: "Predictive UX", body: "Predict what users need next — smart autocomplete, proactive suggestions, and anomaly alerts surfaced at the right moment." },
      { icon: IC.code, title: "Full-Stack AI Integration", body: "AI features built with your existing tech stack — React, Next.js, Node.js — so there's no architectural mismatch." },
      { icon: IC.gear, title: "A/B Testing & Iteration", body: "Experimentation framework to measure the business impact of every AI feature before full rollout." },
    ],
    process: [
      { step: "01", title: "Product & user research", body: "Identify the highest-value AI features through user interviews, analytics review, and competitive analysis." },
      { step: "02", title: "Prototype & validate", body: "Rapid prototype delivered in 1–2 weeks. Validated with real users before full build." },
      { step: "03", title: "Build & integrate", body: "Full-stack build with AI backend, API layer, and frontend integration — to your quality standards." },
      { step: "04", title: "Measure & improve", body: "Instrument the feature, measure impact, and iterate based on data." },
    ],
    relatedPages: [
      { label: "AI Integration & Assistants", href: "/ai-engineering/integration", description: "Embed AI into existing tools" },
      { label: "Custom AI Development", href: "/ai-engineering/custom-dev", description: "Custom models for your product" },
      { label: "Full Stack Development", href: "/services/full-stack-development", description: "Product engineering foundation" },
    ],
    cta: { title: "Have an AI feature on your roadmap?", subtitle: "We can have a working prototype in your hands in two weeks." },
    metaTitle: "AI-Driven Product Engineering",
    metaDescription: "KivvaTech builds AI-native product features — copilots, personalisation engines, and predictive UX — embedded directly into your existing product.",
    metaKeywords: ["AI product development", "AI-native product", "AI copilot product", "AI feature engineering", "product AI integration"],
    path: "/ai-engineering/product",
  },
};

// ─── Services sub-pages ───────────────────────────────────────────────────────

export const SERVICES_PAGES: Record<string, SubPageConfig> = {

  "custom-software": {
    section: "Services",
    sectionHref: "/services",
    badge: "Services",
    title: "Custom Software Development",
    subtitle: "End-to-end software built for your business, not someone else's.",
    description:
      "We design, build, and ship custom software that fits your exact requirements — from SaaS platforms and enterprise systems to customer portals and internal tools. Our teams own the full stack: product, design, engineering, and QA.",
    stats: [
      { value: "360+", label: "Completed projects" },
      { value: "15+", label: "Years experience" },
      { value: "5 days", label: "Team onboarded" },
      { value: "30+", label: "Countries served" },
    ],
    capabilities: [
      { icon: IC.code, title: "SaaS Platform Development", body: "Multi-tenant SaaS products with billing, roles, onboarding flows, and analytics — built to scale from day one." },
      { icon: IC.layers, title: "Enterprise Systems", body: "Internal tools, workflow systems, and operational platforms that replace spreadsheets and legacy software." },
      { icon: IC.brain, title: "AI-Enhanced Products", body: "Software with embedded AI features — intelligent search, recommendation engines, automated data extraction, and smart suggestions." },
      { icon: IC.shield, title: "Security-First Engineering", body: "OWASP-compliant development, penetration testing, and AWS Certified readiness baked into every project." },
      { icon: IC.bolt, title: "Rapid MVP Development", body: "Validated MVP in 6–8 weeks. Structured enough to scale, lean enough to change direction quickly." },
      { icon: IC.gear, title: "Legacy Modernisation", body: "Migrate legacy monoliths to modern architectures without downtime. Strangler fig pattern applied at enterprise scale." },
    ],
    process: [
      { step: "01", title: "Discovery & scoping", body: "Requirements workshops, user story mapping, and technical discovery. Detailed scope and timeline in week one." },
      { step: "02", title: "Design & architecture", body: "UX wireframes, system architecture, and database schema. Reviewed and approved before a line of code is written." },
      { step: "03", title: "Agile delivery", body: "2-week sprints with working software at the end of every sprint. You see progress, not promises." },
      { step: "04", title: "Launch & support", body: "Production deployment, performance testing, and 90-day post-launch support included." },
    ],
    techStack: [
      { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"] },
      { label: "Cloud", items: ["AWS", "Azure", "GCP", "Vercel", "Docker"] },
      { label: "Testing", items: ["Jest", "Playwright", "Cypress", "k6"] },
    ],
    relatedPages: [
      { label: "Full Stack Development", href: "/services/full-stack-development", description: "React and Node.js expertise" },
      { label: "AI-Driven Product Engineering", href: "/ai-engineering/product", description: "Add AI to your product" },
      { label: "Mobile App Development", href: "/services/mobile-app", description: "iOS and Android apps" },
    ],
    cta: { title: "Have a software project in mind?", subtitle: "Tell us what you're building. We'll scope it and give you a timeline in 48 hours." },
    metaTitle: "Custom Software Development",
    metaDescription: "KivvaTech builds custom software — SaaS platforms, enterprise systems, and AI-enhanced products. End-to-end development from discovery to production.",
    metaKeywords: ["custom software development", "SaaS development", "enterprise software", "bespoke software development", "software development company"],
    path: "/services/custom-software",
  },

  "full-stack-development": {
    section: "Services",
    sectionHref: "/services",
    badge: "Services",
    title: "Full Stack Development",
    subtitle: "React, Next.js, Node.js. Production-grade from day one.",
    description:
      "Our full-stack teams own the complete delivery — from API design and database schema to React UI and deployment pipelines. TypeScript first, test-driven, and built with the patterns that scale to millions of users.",
    capabilities: [
      { icon: IC.code, title: "Next.js & React Applications", body: "Server components, App Router, streaming, and optimistic UI. We build for Core Web Vitals and PageSpeed 100 from the start." },
      { icon: IC.layers, title: "Node.js & API Development", body: "REST and GraphQL APIs in Node.js, Express, or Fastify — with OpenAPI documentation, rate limiting, and edge caching." },
      { icon: IC.database, title: "Database & Data Layer", body: "PostgreSQL schema design, query optimisation, and Prisma or Drizzle ORM. Row-level security and audit trails for sensitive data." },
      { icon: IC.gear, title: "TypeScript & Code Quality", body: "Strict TypeScript, ESLint, Prettier, and automated code review. We write code that junior developers can understand and extend." },
      { icon: IC.shield, title: "Auth & Security", body: "NextAuth.js, Auth0, or custom JWT implementations. CSRF protection, input validation, and OWASP compliance throughout." },
      { icon: IC.bolt, title: "Performance Optimisation", body: "Bundle splitting, image optimisation, CDN configuration, and database query profiling — until PageSpeed scores are green." },
    ],
    process: [
      { step: "01", title: "Architecture planning", body: "Data model, API contract, component library strategy, and deployment architecture agreed upfront." },
      { step: "02", title: "Foundation sprint", body: "Authentication, database schema, CI/CD, and design system. Everything subsequent sprints build on." },
      { step: "03", title: "Feature delivery", body: "2-week feature sprints with automated tests, code review, and demo to stakeholders." },
      { step: "04", title: "Performance & launch", body: "Lighthouse audits, load testing, production hardening, and deployment." },
    ],
    techStack: [
      { label: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4"] },
      { label: "Backend", items: ["Node.js", "Express", "Fastify", "tRPC"] },
      { label: "Database", items: ["PostgreSQL", "Prisma", "Drizzle", "Redis", "Supabase"] },
      { label: "DevOps", items: ["Vercel", "AWS", "Docker", "GitHub Actions"] },
    ],
    relatedPages: [
      { label: "Custom Software Development", href: "/services/custom-software", description: "End-to-end product development" },
      { label: "DevOps & SRE", href: "/services/devops-sre", description: "CI/CD and deployment infrastructure" },
      { label: "Mobile App Development", href: "/services/mobile-app", description: "Native and cross-platform mobile" },
    ],
    cta: { title: "Need a full-stack team that ships?", subtitle: "We can have developers working on your codebase within 5 days." },
    metaTitle: "Full Stack Development",
    metaDescription: "KivvaTech builds production-grade full-stack applications with Next.js, React, Node.js, and PostgreSQL. TypeScript-first, test-driven, and optimised for performance.",
    metaKeywords: ["full stack development", "Next.js development", "React development", "Node.js development", "full stack developer hire"],
    path: "/services/full-stack-development",
  },

  "mobile-app": {
    section: "Services",
    sectionHref: "/services",
    badge: "Services",
    title: "Mobile App Development",
    subtitle: "iOS, Android, and cross-platform. Shipped on time.",
    description:
      "We build mobile applications that perform, retain users, and pass App Store review on the first try. Our teams are fluent in Swift, Kotlin, and React Native — and know when each is the right choice.",
    capabilities: [
      { icon: IC.mobile, title: "Native iOS Development", body: "Swift and SwiftUI applications that leverage the full iOS SDK — Face ID, push notifications, background processing, and HealthKit." },
      { icon: IC.layers, title: "Native Android Development", body: "Kotlin and Jetpack Compose applications built for Google Play and enterprise MDM. Material Design 3 and Android 14+." },
      { icon: IC.code, title: "React Native (Cross-Platform)", body: "Shared codebase with native modules where required. One team, two platforms, significantly reduced cost." },
      { icon: IC.brain, title: "AI-Enhanced Mobile", body: "On-device ML with Core ML and TensorFlow Lite. Real-time image analysis, voice, and smart features without cloud latency." },
      { icon: IC.bolt, title: "App Store Optimisation", body: "We handle screenshots, descriptions, keyword research, and review process — reducing rejection risk and improving discoverability." },
      { icon: IC.shield, title: "Security & Compliance", body: "Biometric auth, certificate pinning, encrypted local storage, and HIPAA/GDPR-compliant data handling." },
    ],
    process: [
      { step: "01", title: "UX design & prototype", body: "Interactive prototype in Figma. Usability tested before engineering begins." },
      { step: "02", title: "Architecture & foundation", body: "Navigation, auth, state management, and API client. Decisions made early that are expensive to change later." },
      { step: "03", title: "Feature sprints", body: "2-week feature sprints with TestFlight/internal track builds every sprint end." },
      { step: "04", title: "App Store launch", body: "Store assets, review submission, launch monitoring, and rapid bug response." },
    ],
    techStack: [
      { label: "iOS", items: ["Swift", "SwiftUI", "UIKit", "Core ML"] },
      { label: "Android", items: ["Kotlin", "Jetpack Compose", "Coroutines"] },
      { label: "Cross-platform", items: ["React Native", "Expo", "TypeScript"] },
      { label: "Backend", items: ["Node.js", "Firebase", "Supabase", "AWS Amplify"] },
    ],
    relatedPages: [
      { label: "Custom Software Development", href: "/services/custom-software", description: "Web platform to complement your app" },
      { label: "Full Stack Development", href: "/services/full-stack-development", description: "Backend API for your app" },
      { label: "AI-Driven Product Engineering", href: "/ai-engineering/product", description: "Add AI features to your app" },
    ],
    cta: { title: "Have an app idea?", subtitle: "We'll scope it, design it, and tell you the true cost — in one meeting." },
    metaTitle: "Mobile App Development",
    metaDescription: "KivvaTech builds iOS, Android, and React Native apps — native performance, App Store optimised, and shipped on time.",
    metaKeywords: ["mobile app development", "iOS development", "Android development", "React Native development", "mobile app company"],
    path: "/services/mobile-app",
  },

  "cloud-infrastructure": {
    section: "Services",
    sectionHref: "/services",
    badge: "Services",
    title: "Cloud & Infrastructure",
    subtitle: "AWS, Azure, GCP. Built for reliability and cost efficiency.",
    description:
      "We design, build, and operate cloud infrastructure that scales reliably, costs less than it should, and keeps your engineering team focused on product rather than plumbing.",
    capabilities: [
      { icon: IC.cloud, title: "Cloud Architecture Design", body: "Well-Architected Framework reviews, multi-account strategy, landing zones, and network topology for AWS, Azure, or GCP." },
      { icon: IC.gear, title: "Infrastructure as Code", body: "Terraform, AWS CDK, and Pulumi. Every resource version-controlled and reproducible across environments." },
      { icon: IC.layers, title: "Kubernetes & Container Orchestration", body: "EKS, GKE, and AKS clusters. Helm charts, GitOps with ArgoCD/Flux, and operator development." },
      { icon: IC.bolt, title: "Cost Optimisation", body: "Right-sizing, reserved instance planning, Spot/Preemptible workloads, and savings plans. Average 35% reduction in first 90 days." },
      { icon: IC.shield, title: "Security & Compliance", body: "IAM hardening, VPC design, secrets management, GuardDuty, and Shopify Partner / AWS Certified compliance automation." },
      { icon: IC.chart, title: "Observability Stack", body: "Prometheus, Grafana, OpenTelemetry, and custom dashboards. SLOs, error budgets, and on-call runbooks." },
    ],
    process: [
      { step: "01", title: "Architecture review", body: "Assess your current infrastructure against the Well-Architected Framework. Identify risks and cost opportunities." },
      { step: "02", title: "Design & plan", body: "Target architecture diagram, IaC structure, and migration plan with rollback procedures." },
      { step: "03", title: "Build & migrate", body: "Implement in stages with zero-downtime migration. Automated testing at every step." },
      { step: "04", title: "Observability & handover", body: "Monitoring dashboards, runbooks, and knowledge transfer to your team." },
    ],
    techStack: [
      { label: "Cloud", items: ["AWS", "Azure", "GCP", "Multi-cloud"] },
      { label: "IaC", items: ["Terraform", "AWS CDK", "Pulumi", "Ansible"] },
      { label: "Containers", items: ["Kubernetes", "Docker", "Helm", "ArgoCD"] },
      { label: "Observability", items: ["Prometheus", "Grafana", "Datadog", "OpenTelemetry"] },
    ],
    relatedPages: [
      { label: "DevOps & SRE", href: "/services/devops-sre", description: "CI/CD and platform engineering" },
      { label: "AI Infrastructure & Deployment", href: "/ai-engineering/infrastructure", description: "GPU infrastructure for AI" },
      { label: "Data Engineering", href: "/services/data-engineering", description: "Cloud data warehouses" },
    ],
    cta: { title: "Is your cloud infrastructure costing too much?", subtitle: "We'll audit it in a week and show you exactly where the waste is." },
    metaTitle: "Cloud & Infrastructure",
    metaDescription: "KivvaTech designs and builds cloud infrastructure on AWS, Azure, and GCP — Kubernetes, Terraform, cost optimisation, and full observability.",
    metaKeywords: ["cloud infrastructure", "AWS architecture", "Kubernetes infrastructure", "Terraform IaC", "cloud cost optimisation"],
    path: "/services/cloud-infrastructure",
  },

  "devops-sre": {
    section: "Services",
    sectionHref: "/services",
    badge: "Services",
    title: "DevOps & SRE",
    subtitle: "Faster deployments. Fewer incidents. Engineering teams that ship.",
    description:
      "We embed DevOps and SRE practices that eliminate deployment friction — CI/CD pipelines, platform engineering, observability, and the on-call processes that actually work. Your engineers spend their time building, not firefighting.",
    capabilities: [
      { icon: IC.bolt, title: "CI/CD Pipeline Engineering", body: "GitHub Actions, GitLab CI, and Jenkins pipelines with automated testing, security scanning, and one-click production deployments." },
      { icon: IC.layers, title: "Platform Engineering", body: "Internal developer platforms (IDPs) with self-service infrastructure provisioning, environment management, and golden paths for every team." },
      { icon: IC.chart, title: "SLOs & Error Budgets", body: "Define SLIs and SLOs, implement error budget tracking, and build the alerting and on-call rotation that reflects your reliability commitments." },
      { icon: IC.gear, title: "GitOps & Release Engineering", body: "ArgoCD and Flux for declarative, auditable deployments. Feature flags, canary releases, and blue-green deployments." },
      { icon: IC.shield, title: "Security in the Pipeline", body: "SAST, DAST, container scanning, dependency audits, and secrets detection — automated and blocking in CI." },
      { icon: IC.brain, title: "Incident Management", body: "Runbook authoring, PagerDuty/OpsGenie setup, blameless post-mortems, and the feedback loops that reduce MTTR over time." },
    ],
    process: [
      { step: "01", title: "DevOps maturity audit", body: "Assess your current pipeline, incident rate, deployment frequency, and MTTR against DORA metrics." },
      { step: "02", title: "Improvement roadmap", body: "Prioritised list of improvements ranked by impact on deployment frequency and reliability." },
      { step: "03", title: "Implement & train", body: "Build improvements in phases, training your team on every change. No black-box systems." },
      { step: "04", title: "Measure & sustain", body: "DORA metric dashboards, regular reviews, and ongoing optimisation." },
    ],
    techStack: [
      { label: "CI/CD", items: ["GitHub Actions", "GitLab CI", "Jenkins", "Buildkite"] },
      { label: "GitOps", items: ["ArgoCD", "Flux", "Helm", "Kustomize"] },
      { label: "Monitoring", items: ["Prometheus", "Grafana", "PagerDuty", "Sentry"] },
      { label: "Security", items: ["Snyk", "Trivy", "Checkov", "OWASP ZAP"] },
    ],
    relatedPages: [
      { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure", description: "The infrastructure your pipelines deploy to" },
      { label: "Full Stack Development", href: "/services/full-stack-development", description: "Product code that ships through your pipelines" },
      { label: "AI Infrastructure & Deployment", href: "/ai-engineering/infrastructure", description: "MLOps for AI workloads" },
    ],
    cta: { title: "How often does your team deploy?", subtitle: "If the answer isn't \"multiple times a day\", we can help." },
    metaTitle: "DevOps & SRE",
    metaDescription: "KivvaTech implements DevOps and SRE practices — CI/CD pipelines, platform engineering, SLOs, and incident management that cut deployment friction.",
    metaKeywords: ["DevOps services", "SRE engineering", "CI/CD pipeline", "platform engineering", "DevOps consulting"],
    path: "/services/devops-sre",
  },

  "salesforce-erp": {
    section: "Services",
    sectionHref: "/services",
    badge: "Services",
    title: "Salesforce & ERP (Odoo)",
    subtitle: "Certified implementation. No shortcuts.",
    description:
      "Our Salesforce and ERP specialists are certified in the platforms they implement — not generalists who learned from documentation. We deliver Salesforce Sales Cloud, Service Cloud, CPQ, and Odoo implementations that actually get adopted.",
    capabilities: [
      { icon: IC.link, title: "Salesforce Implementation", body: "Sales Cloud, Service Cloud, Marketing Cloud, and Experience Cloud. Multi-cloud implementations with custom Apex triggers, LWC components, and Flow automation." },
      { icon: IC.bolt, title: "CPQ & Revenue Cloud", body: "Configure-Price-Quote implementations that speed up your sales cycle. Product catalogue design, pricing rules, and approval workflows." },
      { icon: IC.layers, title: "Odoo ERP Implementation", body: "Full Odoo deployment including manufacturing, inventory, accounting, HR, and CRM. Custom modules and third-party integrations." },
      { icon: IC.code, title: "Custom Development", body: "Apex classes, triggers, LWC components, and Visualforce pages built to certification standards. Clean, testable, and deploy-ready." },
      { icon: IC.database, title: "Data Migration", body: "Structured migration of CRM data, customer records, and historical transactions with zero data loss and full audit trail." },
      { icon: IC.gear, title: "Integration & API", body: "REST and SOAP integrations connecting Salesforce or Odoo to your ERP, billing, marketing, and data systems." },
    ],
    process: [
      { step: "01", title: "Business requirements", body: "Map current processes, pain points, and desired outcomes. Define the implementation scope." },
      { step: "02", title: "Solution design", body: "Salesforce/Odoo configuration blueprint, custom development spec, and data migration plan." },
      { step: "03", title: "Build & UAT", body: "Configure, develop, and test. User acceptance testing with your team before go-live." },
      { step: "04", title: "Go-live & training", body: "Staged go-live, user training, and hypercare support in the first 30 days." },
    ],
    techStack: [
      { label: "Salesforce", items: ["Apex", "LWC", "Flow", "CPQ", "Experience Cloud"] },
      { label: "Odoo", items: ["Odoo 17", "Python", "OWL", "PostgreSQL"] },
      { label: "Integration", items: ["REST APIs", "MuleSoft", "Boomi", "Custom middleware"] },
      { label: "DevOps", items: ["SFDX", "GitHub Actions", "Copado", "Metazoa"] },
    ],
    relatedPages: [
      { label: "AI Integration & Assistants", href: "/ai-engineering/integration", description: "Add AI to your Salesforce org" },
      { label: "Data Engineering", href: "/services/data-engineering", description: "Data pipelines from your CRM" },
      { label: "Custom Software Development", href: "/services/custom-software", description: "Software that integrates with your ERP" },
    ],
    cta: { title: "Evaluating Salesforce or Odoo?", subtitle: "We'll scope your implementation and give you an honest timeline and cost estimate." },
    metaTitle: "Salesforce & ERP (Odoo) Implementation",
    metaDescription: "KivvaTech delivers certified Salesforce and Odoo ERP implementations — Sales Cloud, CPQ, Service Cloud, and full Odoo ERP deployment.",
    metaKeywords: ["Salesforce implementation", "Odoo ERP", "Salesforce consulting", "CPQ implementation", "Salesforce developer"],
    path: "/services/salesforce-erp",
  },

  "data-engineering": {
    section: "Services",
    sectionHref: "/services",
    badge: "Services",
    title: "Data Engineering",
    subtitle: "Reliable data pipelines at the scale your business demands.",
    description:
      "We build the data infrastructure that powers your analytics, reporting, and AI — high-throughput ingestion pipelines, cloud data warehouses, and streaming architectures that handle billions of events without breaking.",
    capabilities: [
      { icon: IC.database, title: "Data Pipeline Development", body: "Batch and streaming pipelines with Apache Spark, Flink, and dbt. Ingestion from databases, SaaS APIs, event streams, and file stores." },
      { icon: IC.cloud, title: "Cloud Data Warehouse", body: "Snowflake, BigQuery, and Redshift — schema design, partitioning strategy, query optimisation, and cost management." },
      { icon: IC.layers, title: "Lakehouse Architecture", body: "Delta Lake and Apache Iceberg on S3 or Azure Data Lake. ACID transactions, time-travel queries, and schema evolution." },
      { icon: IC.bolt, title: "Real-Time Streaming", body: "Apache Kafka, AWS Kinesis, and Flink for sub-second event processing. Exactly-once delivery and stateful stream processing." },
      { icon: IC.chart, title: "Analytics Engineering", body: "dbt models, data marts, and semantic layers. Self-service analytics for your business teams with clean, documented data models." },
      { icon: IC.gear, title: "Data Observability", body: "Monte Carlo, Great Expectations, and custom monitoring for data freshness, schema drift, and quality anomalies — before they hit dashboards." },
    ],
    process: [
      { step: "01", title: "Data landscape audit", body: "Map your sources, consumers, current tools, and the pain points costing you most." },
      { step: "02", title: "Architecture design", body: "Choose the right stack for your volume, latency requirements, and team skills." },
      { step: "03", title: "Build & validate", body: "Iterative pipeline builds with data quality tests and stakeholder sign-off at each stage." },
      { step: "04", title: "Productionise & monitor", body: "SLA-backed pipelines, alerting, and runbooks your team can operate confidently." },
    ],
    techStack: [
      { label: "Processing", items: ["Apache Spark", "Apache Flink", "dbt", "Databricks"] },
      { label: "Warehouses", items: ["Snowflake", "BigQuery", "Redshift", "DuckDB"] },
      { label: "Streaming", items: ["Apache Kafka", "AWS Kinesis", "Confluent", "Pulsar"] },
      { label: "Orchestration", items: ["Airflow", "Prefect", "Dagster", "AWS Glue"] },
    ],
    relatedPages: [
      { label: "Data Engineering for AI", href: "/ai-engineering/data", description: "Feature stores and training data" },
      { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure", description: "Cloud platform for your data stack" },
      { label: "AI-Driven Product Engineering", href: "/ai-engineering/product", description: "Use your data for AI features" },
    ],
    cta: { title: "Is your data stack slowing your team down?", subtitle: "We'll identify the bottlenecks and propose a fix in the first week." },
    metaTitle: "Data Engineering Services",
    metaDescription: "KivvaTech builds data pipelines, cloud data warehouses, and streaming architectures — reliable, scalable data infrastructure for analytics and AI.",
    metaKeywords: ["data engineering", "data pipeline development", "Snowflake development", "Apache Spark", "cloud data warehouse"],
    path: "/services/data-engineering",
  },

  "ecommerce-solutions": {
    section: "Services",
    sectionHref: "/services",
    badge: "Services",
    title: "E-commerce Solutions",
    subtitle: "Shopify, headless commerce, and custom storefronts that convert.",
    description:
      "We build e-commerce experiences that load fast, convert well, and scale to peak demand without downtime. From Shopify theme customisation to fully headless storefronts powered by Next.js, we cover the full stack — storefront, integrations, payments, and fulfilment.",
    capabilities: [
      { icon: IC.layers, title: "Shopify & Shopify Plus", body: "Custom theme development, Liquid templates, app extensions, checkout customisation, and Shopify Plus scripts for enterprise-grade stores." },
      { icon: IC.code, title: "Headless Commerce", body: "Next.js storefronts powered by Shopify, Commerce.js, or custom backends. Full control over UX with the flexibility of a modern React front end." },
      { icon: IC.bolt, title: "Performance Optimisation", body: "Core Web Vitals tuning, image optimisation, CDN configuration, and lazy loading. Sub-2s LCP on mobile, every page." },
      { icon: IC.brain, title: "AI-Powered Personalisation", body: "Product recommendation engines, smart search with semantic ranking, and dynamic pricing — powered by your own data." },
      { icon: IC.link, title: "Third-Party Integrations", body: "ERP, CRM, PIM, payment gateways (Stripe, Razorpay, PayPal), logistics providers, and tax platforms — all wired into a single data flow." },
      { icon: IC.shield, title: "Security & PCI Compliance", body: "PCI DSS-aligned checkout flows, fraud detection, secure tokenised payments, and GDPR-compliant data handling." },
    ],
    process: [
      { step: "01", title: "Discovery & tech selection", body: "We audit your current stack, traffic, and conversion data then recommend the right platform — Shopify, headless, or custom." },
      { step: "02", title: "Design & UX", body: "Mobile-first Figma designs focused on conversion: product pages, cart, checkout, and post-purchase flows." },
      { step: "03", title: "Build & integrate", body: "Storefront development, payment gateway integration, inventory sync, and third-party app connections." },
      { step: "04", title: "Launch & optimise", body: "Staged rollout, A/B testing on key pages, and post-launch CRO sprints to keep improving metrics." },
    ],
    techStack: [
      { label: "Platforms", items: ["Shopify", "Shopify Plus", "WooCommerce", "Commerce.js"] },
      { label: "Storefront", items: ["Next.js", "React", "Tailwind CSS", "TypeScript"] },
      { label: "Payments", items: ["Stripe", "Razorpay", "PayPal", "Klarna"] },
      { label: "Integrations", items: ["Odoo ERP", "Salesforce", "Klaviyo", "Algolia"] },
    ],
    stats: [
      { value: "360+", label: "Completed projects" },
      { value: "15+", label: "Years experience" },
      { value: "48h", label: "Proposal turnaround" },
      { value: "5 days", label: "Team onboarding" },
    ],
    relatedPages: [
      { label: "Full Stack Development", href: "/services/full-stack-development", description: "Custom storefront backend" },
      { label: "Custom Software Development", href: "/services/custom-software", description: "End-to-end product engineering" },
      { label: "AI-Driven Product Engineering", href: "/ai-engineering/product", description: "Add AI personalisation to your store" },
    ],
    cta: { title: "Ready to grow your store?", subtitle: "We will audit your current setup and show you exactly where you are leaving revenue on the table." },
    metaTitle: "E-commerce Solutions",
    metaDescription: "KivvaTech builds Shopify stores, headless commerce platforms, and custom storefronts — fast, conversion-optimised, and fully integrated.",
    metaKeywords: ["ecommerce development", "Shopify development", "headless commerce", "Next.js storefront", "e-commerce solutions"],
    path: "/services/ecommerce-solutions",
  },
};

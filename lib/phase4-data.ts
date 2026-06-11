/**
 * Phase 4 — Industry page content.
 * Each entry drives an /industries/[slug] page via IndustryPageTemplate.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface IndustryChallenge {
  title: string;
  body: string;
}

export interface IndustrySolution {
  icon: string;
  title: string;
  body: string;
}

export interface IndustryUseCase {
  metric: string;
  metricLabel: string;
  title: string;
  body: string;
}

export interface IndustryPageConfig {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  challenges: IndustryChallenge[];
  solutions: IndustrySolution[];
  useCases: IndustryUseCase[];
  techStack: Array<{ label: string; items: string[] }>;
  relatedIndustries: Array<{ label: string; href: string }>;
  cta: { title: string; subtitle: string };
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
  chart:    "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z",
  database: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
  gear:     "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  shield:   "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  robot:    "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25zm.75-12h9v9h-9v-9z",
  link:     "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244",
  layers:   "M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3",
  chat:     "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
  globe:    "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
  users:    "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z",
  truck:    "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  star:     "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z",
  home:     "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  book:     "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
  mobile:   "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3",
  briefcase:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0c-.348-.284-.57-.674-.57-1.108v-3.03a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v3.031c0 .434-.222.823-.57 1.108M9.75 8.25V6a2.25 2.25 0 0 1 2.25-2.25h0A2.25 2.25 0 0 1 14.25 6v2.25",
};

// ─── Industry pages ───────────────────────────────────────────────────────────

export const INDUSTRY_PAGES: Record<string, IndustryPageConfig> = {

  "banking-finance": {
    slug: "banking-finance",
    badge: "Banking & Finance",
    title: "AI & Software for Banking and Finance",
    subtitle: "Faster decisions. Better compliance. Lower risk.",
    description:
      "We build AI and software systems for banks, fintechs, insurers, and capital markets firms — fraud detection, credit decisioning, compliance automation, and customer-facing digital banking products that meet regulatory standards.",
    challenges: [
      { title: "Fraud detection at scale", body: "Legacy rule-based fraud systems generate too many false positives, frustrating customers while missing sophisticated attacks." },
      { title: "Manual compliance workflows", body: "KYC, AML, and regulatory reporting consume significant analyst time — slowing onboarding and increasing operational cost." },
      { title: "Slow credit decisioning", body: "Manual underwriting creates days-long delays. Customers expect instant decisions; competitors are already delivering them." },
      { title: "Fragmented customer data", body: "Customer data siloed across core banking, CRM, and third-party systems makes personalisation and risk scoring unreliable." },
    ],
    solutions: [
      { icon: IC.shield, title: "Real-Time Fraud Detection", body: "ML models scoring every transaction in under 50ms — combining behavioural signals, device fingerprinting, and graph-based network analysis." },
      { icon: IC.bolt, title: "Automated KYC & AML", body: "Document verification, sanctions screening, and AML workflow automation — reducing onboarding time from days to minutes." },
      { icon: IC.brain, title: "AI Credit Decisioning", body: "Alternative data models for instant credit scoring — expanding approval rates while maintaining or improving portfolio performance." },
      { icon: IC.chart, title: "Risk Analytics Dashboards", body: "Real-time portfolio risk monitoring, stress testing, and regulatory reporting dashboards for risk and compliance teams." },
      { icon: IC.chat, title: "Conversational Banking", body: "AI assistants for customer support, account management, and financial advice — deployed across app, web, and WhatsApp." },
      { icon: IC.database, title: "Data Platform Modernisation", body: "Unified customer data platforms, real-time pipelines from core banking systems, and ML feature stores for model serving." },
    ],
    useCases: [
      { metric: "60%", metricLabel: "fraud reduction", title: "Real-time transaction fraud scoring for a regional bank", body: "Replaced rule-based system with ML scoring engine. False positive rate dropped 45%, fraud losses down 60%." },
      { metric: "3 min", metricLabel: "KYC completion", title: "Automated KYC pipeline reduces onboarding from 3 days to 3 minutes", body: "Document OCR, liveness check, and sanctions screening integrated into digital onboarding flow." },
      { metric: "40%", metricLabel: "more approvals", title: "Alternative data credit model expands approval rates for fintech lender", body: "ML model incorporating rental, utility, and payroll data improved approval rates without increasing default risk." },
    ],
    techStack: [
      { label: "AI / ML", items: ["XGBoost", "PyTorch", "scikit-learn", "Graph Neural Nets"] },
      { label: "Data", items: ["Snowflake", "Kafka", "Spark", "dbt"] },
      { label: "Compliance", items: ["Alloy", "Onfido", "ComplyAdvantage"] },
      { label: "Cloud", items: ["AWS", "Azure", "Kubernetes", "Terraform"] },
    ],
    relatedIndustries: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Retail & Commerce", href: "/industries/retail-commerce" },
    ],
    cta: { title: "Building AI for financial services?", subtitle: "We understand compliance requirements and regulatory constraints — not just the technology." },
    metaTitle: "AI & Software for Banking & Finance",
    metaDescription: "KivvaTech builds fraud detection, credit decisioning, KYC automation, and digital banking products for banks, fintechs, and financial institutions.",
    metaKeywords: ["fintech development", "banking AI", "fraud detection ML", "KYC automation", "credit scoring AI", "financial software development"],
    path: "/industries/banking-finance",
  },

  healthcare: {
    slug: "healthcare",
    badge: "Healthcare",
    title: "AI & Software for Healthcare",
    subtitle: "Better patient outcomes. Less administrative burden.",
    description:
      "We build healthcare technology that helps providers deliver better care — patient portals, clinical workflow automation, AI-assisted diagnostics, and data platforms that comply with HIPAA and integrate with existing EHR systems.",
    challenges: [
      { title: "Administrative overload", body: "Clinicians spend 2+ hours per day on documentation, scheduling, and billing — time that should be spent with patients." },
      { title: "Disconnected patient data", body: "Patient records scattered across EHR systems, labs, imaging platforms, and third-party data sources make coordinated care difficult." },
      { title: "Delayed diagnoses", body: "High imaging and pathology volumes create backlogs. Radiologists and pathologists are overwhelmed, and diagnosis delays cost lives." },
      { title: "Patient engagement gaps", body: "Patients disengage between appointments, miss follow-ups, and don't adhere to treatment plans — particularly for chronic conditions." },
    ],
    solutions: [
      { icon: IC.robot, title: "Clinical Documentation AI", body: "Ambient AI that listens to patient-clinician conversations and auto-generates structured clinical notes — reducing documentation time by 70%." },
      { icon: IC.brain, title: "AI-Assisted Diagnostics", body: "Computer vision models for radiology, pathology, and dermatology — flagging findings and prioritising worklists for clinician review." },
      { icon: IC.users, title: "Patient Engagement Platforms", body: "Personalised care journeys, medication reminders, symptom tracking, and telehealth — keeping patients engaged between visits." },
      { icon: IC.shield, title: "HIPAA-Compliant Data Infrastructure", body: "Secure data pipelines, encrypted patient data stores, and audit trails built to HIPAA and AWS Certified standards from day one." },
      { icon: IC.link, title: "EHR Integration", body: "HL7 FHIR and proprietary EHR integrations — Epic, Cerner, Athenahealth — connecting AI systems to the clinical record." },
      { icon: IC.bolt, title: "Revenue Cycle Automation", body: "Automated prior authorisation, claims scrubbing, and denial management that reduce revenue cycle time and increase collection rates." },
    ],
    useCases: [
      { metric: "60%", metricLabel: "admin reduction", title: "Patient portal cuts admin workload across 12-clinic network", body: "Automated scheduling, billing, and clinical workflow reduced admin FTEs needed by 60% while improving patient satisfaction scores." },
      { metric: "35%", metricLabel: "faster diagnosis", title: "AI radiology triage reduces report turnaround time by 35%", body: "Computer vision model prioritises urgent findings in imaging worklist, ensuring critical cases are reviewed first." },
      { metric: "28%", metricLabel: "readmission reduction", title: "Predictive discharge model reduces 30-day readmissions", body: "ML model scores discharge risk and triggers care coordination — reducing costly readmissions across a regional hospital system." },
    ],
    techStack: [
      { label: "Clinical AI", items: ["PyTorch", "MONAI", "Hugging Face", "Custom vision models"] },
      { label: "Interoperability", items: ["HL7 FHIR", "Epic APIs", "Cerner APIs", "Mirth Connect"] },
      { label: "Compliance", items: ["HIPAA", "AWS Certified", "AWS HealthLake", "Azure Health APIs"] },
      { label: "Data", items: ["Snowflake", "dbt", "Kafka", "PostgreSQL"] },
    ],
    relatedIndustries: [
      { label: "Banking & Finance", href: "/industries/banking-finance" },
      { label: "Education", href: "/industries/education" },
      { label: "Supply Chain & Logistics", href: "/industries/supply-chain-logistics" },
    ],
    cta: { title: "Building healthcare technology?", subtitle: "We understand HIPAA requirements, EHR integration complexity, and clinical workflow constraints." },
    metaTitle: "AI & Software for Healthcare",
    metaDescription: "KivvaTech builds healthcare AI — clinical documentation, AI diagnostics, patient portals, and HIPAA-compliant data platforms for providers and healthtech companies.",
    metaKeywords: ["healthcare AI development", "clinical AI software", "patient portal development", "HIPAA compliant software", "EHR integration"],
    path: "/industries/healthcare",
  },

  "retail-commerce": {
    slug: "retail-commerce",
    badge: "Retail & Commerce",
    title: "AI & Software for Retail and Commerce",
    subtitle: "Personalised at scale. Profitable at every touchpoint.",
    description:
      "We help retailers and e-commerce companies build AI-powered personalisation, demand forecasting, inventory optimisation, and customer experience platforms that convert more visitors and retain more customers.",
    challenges: [
      { title: "Generic customer experiences", body: "One-size-fits-all product recommendations and messaging fail to convert. Customers expect personalisation at every touchpoint." },
      { title: "Inventory and demand mismatch", body: "Overstocking and stockouts cost retailers billions annually. Manual forecasting can't keep pace with SKU complexity or demand signals." },
      { title: "Cart abandonment and churn", body: "Average e-commerce cart abandonment exceeds 70%. Identifying at-risk customers and intervening at the right moment requires ML." },
      { title: "Rising customer acquisition cost", body: "CAC is increasing across all channels. Retailers need to extract more value from existing customers through better retention." },
    ],
    solutions: [
      { icon: IC.star, title: "Personalisation Engine", body: "Real-time product recommendations, personalised search ranking, and dynamic homepage content — driving 15–30% uplift in conversion." },
      { icon: IC.chart, title: "Demand Forecasting", body: "ML-driven demand forecasts at SKU/location level — reducing stockouts by 25% and overstock by 30% across the product catalogue." },
      { icon: IC.bolt, title: "Dynamic Pricing", body: "AI pricing models that respond to competitor pricing, demand signals, inventory levels, and margin targets in real time." },
      { icon: IC.users, title: "Customer Lifetime Value Models", body: "CLV segmentation and churn prediction that inform acquisition bidding, loyalty investment, and retention intervention." },
      { icon: IC.chat, title: "Conversational Commerce", body: "AI shopping assistants that handle product discovery, size/compatibility questions, and order tracking — reducing support volume." },
      { icon: IC.database, title: "Unified Commerce Data Platform", body: "Single customer view from POS, e-commerce, loyalty, and marketing — enabling true omnichannel personalisation." },
    ],
    useCases: [
      { metric: "23%", metricLabel: "conversion uplift", title: "Personalisation engine drives 23% conversion increase for fashion retailer", body: "Real-time recommendation model replacing rule-based system. Tested via A/B framework before full rollout." },
      { metric: "30%", metricLabel: "stockout reduction", title: "ML demand forecasting cuts stockouts across 500-store network", body: "SKU-level forecasting model incorporating weather, events, and competitor pricing reduced stockouts by 30%." },
      { metric: "18%", metricLabel: "revenue increase", title: "Dynamic pricing drives 18% revenue per visit increase for electronics retailer", body: "AI pricing engine updated prices 4x daily based on competitor, inventory, and demand signals." },
    ],
    techStack: [
      { label: "Personalisation", items: ["Custom RecSys", "Elasticsearch", "Redis", "Kafka"] },
      { label: "ML", items: ["XGBoost", "LightGBM", "PyTorch", "Prophet"] },
      { label: "Commerce", items: ["Shopify", "Magento", "Commercetools", "Stripe"] },
      { label: "Data", items: ["Snowflake", "dbt", "Segment", "BigQuery"] },
    ],
    relatedIndustries: [
      { label: "Food & Beverages", href: "/industries/food-beverages" },
      { label: "Supply Chain & Logistics", href: "/industries/supply-chain-logistics" },
      { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
    ],
    cta: { title: "Ready to make personalisation a competitive advantage?", subtitle: "Tell us your current stack and revenue goals — we'll scope the right solution." },
    metaTitle: "AI & Software for Retail & Commerce",
    metaDescription: "KivvaTech builds AI personalisation engines, demand forecasting, dynamic pricing, and commerce platforms for retailers and e-commerce companies.",
    metaKeywords: ["retail AI development", "e-commerce personalisation", "demand forecasting retail", "recommendation engine", "retail software development"],
    path: "/industries/retail-commerce",
  },

  education: {
    slug: "education",
    badge: "Education",
    title: "AI & Software for Education",
    subtitle: "Personalised learning. Scalable delivery. Better outcomes.",
    description:
      "We build EdTech platforms, AI tutoring systems, learning management tools, and student analytics solutions for schools, universities, corporate learning teams, and online education companies.",
    challenges: [
      { title: "One-size-fits-all instruction", body: "Traditional instruction fails to adapt to individual learning pace, style, or gaps — leaving fast learners under-challenged and struggling learners behind." },
      { title: "Student disengagement and dropout", body: "Online courses lose 50–90% of students before completion. Identifying at-risk students and intervening early requires real-time behavioural analytics." },
      { title: "Educator administrative burden", body: "Grading, content creation, scheduling, and reporting consume educator time that should go to teaching and student support." },
      { title: "Content at scale", body: "Creating, maintaining, and localising quality educational content is expensive and slow — limiting reach for growing EdTech companies." },
    ],
    solutions: [
      { icon: IC.brain, title: "Adaptive Learning Engines", body: "AI that adjusts content difficulty, pacing, and format to each learner in real time — proven to improve completion rates and learning outcomes." },
      { icon: IC.robot, title: "AI Tutoring & Study Assistants", body: "24/7 AI tutors that answer questions in the learner's language, explain concepts differently when students struggle, and track mastery." },
      { icon: IC.chart, title: "Learning Analytics Platform", body: "Student progress dashboards, at-risk identification models, and outcome prediction for educators, administrators, and learners themselves." },
      { icon: IC.bolt, title: "Automated Grading & Feedback", body: "AI grading for essays, code submissions, and open-ended responses — with constructive feedback that mirrors what a human teacher would provide." },
      { icon: IC.book, title: "AI Content Generation", body: "Generate assessments, explanations, and practice problems from your curriculum — keeping content fresh without proportional authoring cost." },
      { icon: IC.mobile, title: "Learning Management Systems", body: "Custom LMS platforms with mobile-first design, SCORM compliance, and AI-powered course recommendations." },
    ],
    useCases: [
      { metric: "45%", metricLabel: "completion rate increase", title: "Adaptive learning platform doubles course completion for online university", body: "Personalised content sequencing and early intervention alerts increased completion from 31% to 45%." },
      { metric: "70%", metricLabel: "grading time saved", title: "AI grading reduces assessment turnaround from 5 days to 4 hours", body: "Automated essay grading with human review queue for edge cases — saving instructors 70% of grading time." },
      { metric: "3x", metricLabel: "content velocity", title: "AI content pipeline triples assessment library in 60 days", body: "LLM-powered question generation from curriculum documents produced a validated 3,000-question bank in 2 months." },
    ],
    techStack: [
      { label: "AI / ML", items: ["LLMs", "Custom NLP", "Recommendation models", "PyTorch"] },
      { label: "LMS", items: ["SCORM", "xAPI", "Canvas APIs", "Custom LMS"] },
      { label: "Frontend", items: ["React", "Next.js", "React Native", "TypeScript"] },
      { label: "Data", items: ["PostgreSQL", "Snowflake", "dbt", "Kafka"] },
    ],
    relatedIndustries: [
      { label: "Social Networking", href: "/industries/social-networking" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Sports", href: "/industries/sports" },
    ],
    cta: { title: "Building the future of learning?", subtitle: "We've helped EdTech companies from seed to Series B deliver AI-powered learning at scale." },
    metaTitle: "AI & Software for Education",
    metaDescription: "KivvaTech builds adaptive learning platforms, AI tutoring systems, learning analytics, and LMS software for EdTech companies and educational institutions.",
    metaKeywords: ["EdTech development", "adaptive learning platform", "AI tutoring system", "learning management system", "education AI"],
    path: "/industries/education",
  },

  "travel-hospitality": {
    slug: "travel-hospitality",
    badge: "Travel & Hospitality",
    title: "AI & Software for Travel and Hospitality",
    subtitle: "Smarter booking. Higher revenue. Loyal guests.",
    description:
      "We build technology for airlines, hotels, OTAs, and travel management companies — dynamic pricing engines, AI-powered booking experiences, personalisation platforms, and operational systems that maximise revenue per seat and per room.",
    challenges: [
      { title: "Revenue leakage from static pricing", body: "Static rate cards leave revenue on the table during peak periods and fail to fill capacity during low demand." },
      { title: "High customer acquisition cost", body: "OTAs take 15–25% commission. Travel brands need direct booking channels and loyalty programmes that actually work." },
      { title: "Generic guest experience", body: "Travellers expect hotels and airlines to know their preferences. Personalisation at scale requires AI, not manual segmentation." },
      { title: "Operational inefficiency", body: "Property management, crew scheduling, and supply chain coordination remain largely manual — creating costly inefficiencies." },
    ],
    solutions: [
      { icon: IC.chart, title: "Dynamic Pricing & Revenue Management", body: "ML pricing models that account for demand signals, competitor rates, cancellation patterns, and booking window to maximise RevPAR and RASM." },
      { icon: IC.star, title: "Personalised Booking Experience", body: "AI recommendation engines surfacing the right upsells, room upgrades, and ancillary products at the right moment in the booking flow." },
      { icon: IC.chat, title: "AI Concierge & Guest Services", body: "24/7 AI concierge for pre-arrival communication, in-stay requests, restaurant bookings, and post-stay feedback — across chat, SMS, and app." },
      { icon: IC.bolt, title: "Demand Forecasting", body: "Property and route-level demand forecasts incorporating events, weather, school calendars, and macroeconomic signals." },
      { icon: IC.users, title: "Loyalty & CRM Intelligence", body: "Guest lifetime value models, churn prediction, and personalised loyalty communications that drive direct booking and repeat visits." },
      { icon: IC.gear, title: "Operations Automation", body: "Housekeeping scheduling, maintenance prediction, and supply chain optimisation driven by occupancy forecasts and IoT sensor data." },
    ],
    useCases: [
      { metric: "22%", metricLabel: "RevPAR increase", title: "Dynamic pricing engine delivers 22% RevPAR uplift for boutique hotel group", body: "ML pricing model replacing manual rate management — optimising 500+ room types across 8 properties." },
      { metric: "35%", metricLabel: "direct bookings increase", title: "AI concierge drives 35% increase in direct bookings", body: "Personalised pre-arrival communications and seamless chat-based booking reduced OTA dependency significantly." },
      { metric: "18%", metricLabel: "ancillary revenue uplift", title: "In-context upsell engine drives 18% ancillary revenue increase for OTA", body: "Real-time recommendation model surfacing room upgrades and experiences at highest-conversion moments." },
    ],
    techStack: [
      { label: "ML / AI", items: ["Time series models", "Reinforcement learning", "NLP", "PyTorch"] },
      { label: "Integrations", items: ["PMS systems", "GDS", "Channel managers", "Amadeus APIs"] },
      { label: "Frontend", items: ["React", "Next.js", "React Native", "TypeScript"] },
      { label: "Data", items: ["Snowflake", "Kafka", "dbt", "Redis"] },
    ],
    relatedIndustries: [
      { label: "Retail & Commerce", href: "/industries/retail-commerce" },
      { label: "Food & Beverages", href: "/industries/food-beverages" },
      { label: "Real Estate", href: "/industries/real-estate" },
    ],
    cta: { title: "Ready to let AI manage your pricing and guest experience?", subtitle: "We understand PMS integrations, GDS complexity, and the revenue management challenges specific to travel." },
    metaTitle: "AI & Software for Travel & Hospitality",
    metaDescription: "KivvaTech builds dynamic pricing engines, AI concierge systems, demand forecasting, and personalisation platforms for hotels, airlines, and OTAs.",
    metaKeywords: ["travel technology development", "hotel AI software", "revenue management AI", "dynamic pricing travel", "OTA software development"],
    path: "/industries/travel-hospitality",
  },

  "supply-chain-logistics": {
    slug: "supply-chain-logistics",
    badge: "Supply Chain & Logistics",
    title: "AI & Software for Supply Chain and Logistics",
    subtitle: "Faster delivery. Lower cost. Full visibility.",
    description:
      "We build AI-powered logistics and supply chain systems — route optimisation, demand forecasting, warehouse automation, real-time tracking, and visibility platforms that reduce operational costs and improve on-time delivery.",
    challenges: [
      { title: "Routing inefficiency", body: "Manual or rules-based routing fails to account for real-time traffic, driver capacity, and delivery time windows — leaving trucks underutilised and customers waiting." },
      { title: "Inventory inaccuracy", body: "Siloed inventory data across warehouses and 3PLs creates inaccurate stock visibility, leading to both overstocking and stockouts." },
      { title: "Limited supply chain visibility", body: "Shippers and their customers lack real-time shipment tracking — leading to WISMO calls and eroding customer trust." },
      { title: "Reactive maintenance", body: "Fleet breakdowns cause costly delays and missed SLAs. Predictive maintenance requires sensor data and ML — most operators don't have either." },
    ],
    solutions: [
      { icon: IC.truck, title: "Route Optimisation AI", body: "ML routing that incorporates real-time traffic, driver hours, vehicle capacity, and time windows — reducing distance driven by 15–25%." },
      { icon: IC.chart, title: "Demand Forecasting & Inventory Optimisation", body: "Multi-echelon inventory models and demand forecasts at SKU and location level — reducing carrying cost while improving fill rates." },
      { icon: IC.globe, title: "Real-Time Tracking & Visibility", body: "Unified tracking platform with live shipment status, predictive ETA, and exception alerts across carriers and modes." },
      { icon: IC.bolt, title: "Warehouse Automation", body: "Pick path optimisation, slotting algorithms, and labour planning models that improve warehouse throughput without capital investment." },
      { icon: IC.gear, title: "Predictive Fleet Maintenance", body: "IoT sensor data and ML models that predict component failures 2–4 weeks in advance — reducing unplanned downtime by 40%." },
      { icon: IC.database, title: "Supply Chain Data Platform", body: "Unified data layer aggregating ERP, WMS, TMS, carrier, and IoT data — the foundation for every analytics and AI use case." },
    ],
    useCases: [
      { metric: "40%", metricLabel: "faster delivery", title: "AI routing cuts delivery times by 40% for Logibee", body: "Real-time routing AI replaced manual dispatch. Operational costs down 28%, customer satisfaction up significantly." },
      { metric: "500+", metricLabel: "vessels tracked", title: "Navig8 Connect delivers real-time visibility across 500+ vessels", body: "Live tracking, predictive ETA, and unified fleet dashboard across a global maritime fleet." },
      { metric: "35%", metricLabel: "maintenance cost reduction", title: "Predictive maintenance reduces fleet downtime for logistics operator", body: "IoT + ML system flagging 85% of failures 3+ weeks in advance — preventing costly roadside breakdowns." },
    ],
    techStack: [
      { label: "Optimisation", items: ["OR-Tools", "Custom routing ML", "Reinforcement learning"] },
      { label: "IoT & Tracking", items: ["MQTT", "AWS IoT", "Kafka", "TimescaleDB"] },
      { label: "Data", items: ["Snowflake", "dbt", "Spark", "PostgreSQL"] },
      { label: "Integration", items: ["ERP APIs", "TMS integration", "Carrier APIs", "EDI"] },
    ],
    relatedIndustries: [
      { label: "Retail & Commerce", href: "/industries/retail-commerce" },
      { label: "Food & Beverages", href: "/industries/food-beverages" },
      { label: "Banking & Finance", href: "/industries/banking-finance" },
    ],
    cta: { title: "Ready to make your supply chain smarter?", subtitle: "We've shipped logistics AI for companies moving everything from parcels to maritime cargo." },
    metaTitle: "AI & Software for Supply Chain & Logistics",
    metaDescription: "KivvaTech builds route optimisation AI, real-time tracking platforms, demand forecasting, and supply chain visibility systems for logistics companies.",
    metaKeywords: ["logistics software development", "supply chain AI", "route optimisation software", "fleet management AI", "warehouse management system"],
    path: "/industries/supply-chain-logistics",
  },

  "food-beverages": {
    slug: "food-beverages",
    badge: "Food & Beverages",
    title: "AI & Software for Food and Beverages",
    subtitle: "Faster orders. Less waste. Better margins.",
    description:
      "We build technology for restaurants, food delivery platforms, QSRs, and F&B supply chains — smart ordering systems, demand forecasting, waste reduction AI, and customer engagement platforms that improve margins and throughput.",
    challenges: [
      { title: "Order bottlenecks and wait times", body: "Manual order taking and kitchen coordination create bottlenecks at peak hours — increasing wait times and customer churn." },
      { title: "Food waste and over-ordering", body: "Inaccurate demand forecasting leads to over-ordering perishables. Food waste in the industry runs at 4–10% of revenue." },
      { title: "Disconnected delivery platforms", body: "Managing orders across multiple delivery apps (Uber Eats, DoorDash, in-house) creates operational complexity and margin pressure." },
      { title: "Low customer retention", body: "Restaurants struggle to convert one-time visitors into regulars. Loyalty programmes are expensive and underused." },
    ],
    solutions: [
      { icon: IC.bolt, title: "Smart Ordering Systems", body: "AI-powered kiosk and mobile ordering with intelligent upsell recommendations, personalised menu suggestions, and kitchen queue optimisation." },
      { icon: IC.chart, title: "Demand Forecasting & Waste Reduction", body: "ML models predicting daily covers and item-level demand — reducing food waste by 20–35% through better prep and ordering." },
      { icon: IC.link, title: "Aggregator Integration Platform", body: "Unified order management across Uber Eats, DoorDash, Just Eat, and in-house ordering — with a single kitchen display and reporting layer." },
      { icon: IC.users, title: "Customer Loyalty & CRM", body: "AI-driven loyalty programmes that identify high-value customers, predict churn, and trigger personalised offers at the right moment." },
      { icon: IC.database, title: "Supply Chain Optimisation", body: "Automated supplier ordering, perishable inventory tracking, and waste analytics integrated with your POS and kitchen management system." },
      { icon: IC.robot, title: "Conversational Ordering", body: "AI ordering assistants via WhatsApp, SMS, and website chat — handling table bookings, delivery orders, and customer queries 24/7." },
    ],
    useCases: [
      { metric: "40%", metricLabel: "faster order processing", title: "Smart ordering platform cuts order processing time by 40%", body: "AI-driven kiosk and kitchen display system eliminated order transcription errors and reduced kitchen wait times." },
      { metric: "28%", metricLabel: "waste reduction", title: "Demand forecasting reduces food waste by 28% for QSR chain", body: "Item-level daily demand forecast integrated with POS data and kitchen prep scheduling." },
      { metric: "22%", metricLabel: "repeat visit increase", title: "AI loyalty programme drives 22% increase in repeat visits", body: "Personalised offers triggered at optimal intervals based on visit frequency and customer lifetime value." },
    ],
    techStack: [
      { label: "POS & Integrations", items: ["Square", "Toast", "Lightspeed", "Uber Eats API"] },
      { label: "AI / ML", items: ["Prophet", "XGBoost", "LLMs", "Custom NLP"] },
      { label: "Mobile", items: ["React Native", "Expo", "iOS", "Android"] },
      { label: "Data", items: ["PostgreSQL", "Snowflake", "dbt", "Kafka"] },
    ],
    relatedIndustries: [
      { label: "Retail & Commerce", href: "/industries/retail-commerce" },
      { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
      { label: "Supply Chain & Logistics", href: "/industries/supply-chain-logistics" },
    ],
    cta: { title: "Ready to reduce waste and increase throughput?", subtitle: "We understand POS integrations, kitchen workflows, and the margins that matter in F&B." },
    metaTitle: "AI & Software for Food & Beverages",
    metaDescription: "KivvaTech builds smart ordering systems, demand forecasting, waste reduction AI, and customer loyalty platforms for restaurants and F&B companies.",
    metaKeywords: ["restaurant software development", "food tech AI", "demand forecasting restaurant", "smart ordering system", "food delivery platform"],
    path: "/industries/food-beverages",
  },

  sports: {
    slug: "sports",
    badge: "Sports",
    title: "AI & Software for Sports",
    subtitle: "Better performance. Smarter decisions. Deeper fan engagement.",
    description:
      "We build performance analytics, fan engagement platforms, sports betting intelligence, and team management systems for sports organisations, media companies, and sports technology startups.",
    challenges: [
      { title: "Underutilised performance data", body: "Teams collect vast amounts of player tracking, biometric, and video data — but lack the infrastructure to turn it into actionable coaching insights." },
      { title: "Fan engagement falling short", body: "Fans want personalised, real-time experiences — not generic broadcast content. Delivering this at scale requires AI and data infrastructure." },
      { title: "Injury prediction and prevention", body: "Injuries are the biggest performance risk in professional sport. Teams that predict and prevent injuries gain a measurable competitive advantage." },
      { title: "Scouting at scale", body: "Identifying talent across global leagues and competitions requires processing thousands of hours of video and statistical data that manual scouting can't cover." },
    ],
    solutions: [
      { icon: IC.chart, title: "Performance Analytics Platform", body: "Player tracking, biomechanical analysis, and performance trend dashboards that translate raw data into coaching decisions." },
      { icon: IC.brain, title: "Injury Prediction Models", body: "ML models combining workload, biometric, and movement data to flag elevated injury risk — enabling proactive load management." },
      { icon: IC.star, title: "AI Scouting & Talent ID", body: "Video analysis and statistical models that identify talent across leagues — dramatically expanding scouting reach without proportional cost." },
      { icon: IC.users, title: "Fan Engagement Platform", body: "Personalised content, real-time match statistics, fantasy integration, and interactive experiences that deepen fan loyalty." },
      { icon: IC.robot, title: "Sports Betting Intelligence", body: "Real-time odds modelling, in-play data feeds, and risk management systems for sports betting operators." },
      { icon: IC.mobile, title: "Team & Athlete Apps", body: "Custom mobile applications for training management, recovery tracking, team communication, and performance review." },
    ],
    useCases: [
      { metric: "32%", metricLabel: "injury reduction", title: "Predictive load management reduces soft tissue injuries for Premier League academy", body: "ML workload model flagging elevated risk 5–7 days in advance — enabling proactive rest and modified training." },
      { metric: "4x", metricLabel: "scouting coverage", title: "AI scouting platform expands talent identification coverage 4x", body: "Video and statistical analysis covering 50+ leagues — surfacing previously overlooked talent at a fraction of manual scouting cost." },
      { metric: "60%", metricLabel: "fan app engagement increase", title: "Personalised fan app drives 60% engagement increase", body: "AI-curated content, real-time stats, and personalised notifications increased daily active users significantly." },
    ],
    techStack: [
      { label: "AI / ML", items: ["Computer vision", "PyTorch", "Time series", "XGBoost"] },
      { label: "Video", items: ["OpenCV", "FFmpeg", "AWS Rekognition", "Custom models"] },
      { label: "Mobile", items: ["React Native", "Swift", "Kotlin", "Expo"] },
      { label: "Data", items: ["PostgreSQL", "TimescaleDB", "Kafka", "Snowflake"] },
    ],
    relatedIndustries: [
      { label: "Education", href: "/industries/education" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Social Networking", href: "/industries/social-networking" },
    ],
    cta: { title: "Ready to turn your data into a competitive edge?", subtitle: "We work with teams, broadcasters, and sports tech startups at every stage." },
    metaTitle: "AI & Software for Sports",
    metaDescription: "KivvaTech builds sports performance analytics, injury prediction, AI scouting, and fan engagement platforms for sports organisations and sports tech companies.",
    metaKeywords: ["sports analytics software", "sports AI development", "fan engagement platform", "injury prediction AI", "sports technology development"],
    path: "/industries/sports",
  },

  "social-networking": {
    slug: "social-networking",
    badge: "Social Networking",
    title: "AI & Software for Social Networking",
    subtitle: "Communities that grow. Platforms that scale.",
    description:
      "We build social platforms, community tools, and AI-powered content systems for consumer startups, enterprise community platforms, and creator economy companies — from MVP to millions of users.",
    challenges: [
      { title: "Content moderation at scale", body: "User-generated content grows faster than human moderation teams can review. Harmful content left up damages trust; over-moderation damages engagement." },
      { title: "Feed ranking and personalisation", body: "Chronological feeds fail to surface the content that keeps users coming back. Effective ranking requires real-time ML on user behaviour signals." },
      { title: "Creator monetisation", body: "Retaining top creators requires giving them monetisation tools and audience analytics that they can't get on larger platforms." },
      { title: "Spam and abuse", body: "Fake accounts, spam, and coordinated inauthentic behaviour degrade community quality. Detection needs to stay ahead of evolving tactics." },
    ],
    solutions: [
      { icon: IC.shield, title: "AI Content Moderation", body: "Multi-modal classifiers for text, image, and video that detect harmful content, spam, and policy violations at scale — with human review queues for edge cases." },
      { icon: IC.brain, title: "Feed Ranking & Personalisation", body: "Real-time ML ranking models that balance engagement, diversity, and creator reach — updated continuously from user interaction signals." },
      { icon: IC.chart, title: "Creator Analytics Platform", body: "Audience insights, content performance, and growth analytics that give creators the data they need to build their audience." },
      { icon: IC.bolt, title: "Engagement & Notification AI", body: "Smart notification systems that surface the right activity at the right time — increasing re-engagement without notification fatigue." },
      { icon: IC.users, title: "Community Health Monitoring", body: "Network-level analysis detecting coordinated inauthentic behaviour, emerging toxic communities, and platform health trends." },
      { icon: IC.database, title: "Real-Time Event Infrastructure", body: "WebSocket-based real-time messaging, live activity feeds, and notification delivery at millions of concurrent users." },
    ],
    useCases: [
      { metric: "85%", metricLabel: "moderation coverage", title: "AI moderation system handles 85% of content review without human review", body: "Multi-modal classifier covering text and images — maintaining 94% precision and dramatically reducing moderation team workload." },
      { metric: "40%", metricLabel: "DAU increase", title: "ML feed ranking drives 40% increase in daily active users", body: "Personalised content ranking replacing chronological feed — A/B tested over 6 weeks before full rollout." },
      { metric: "3x", metricLabel: "creator retention", title: "Creator analytics dashboard triples creator retention on platform", body: "Audience insights and content performance data giving creators the feedback they need to grow." },
    ],
    techStack: [
      { label: "Real-Time", items: ["WebSockets", "Redis Pub/Sub", "Kafka", "NATS"] },
      { label: "AI / ML", items: ["Content moderation models", "Ranking ML", "NLP", "Computer vision"] },
      { label: "Backend", items: ["Node.js", "Go", "PostgreSQL", "Redis", "Elasticsearch"] },
      { label: "Infrastructure", items: ["Kubernetes", "AWS", "CDN", "Cloudflare"] },
    ],
    relatedIndustries: [
      { label: "Education", href: "/industries/education" },
      { label: "Sports", href: "/industries/sports" },
      { label: "Retail & Commerce", href: "/industries/retail-commerce" },
    ],
    cta: { title: "Building a community platform that needs to scale?", subtitle: "We've built content moderation, feed ranking, and real-time infrastructure for platforms from launch to millions of users." },
    metaTitle: "AI & Software for Social Networking",
    metaDescription: "KivvaTech builds social platforms, AI content moderation, feed ranking algorithms, and community tools for social networking companies and creator economy startups.",
    metaKeywords: ["social platform development", "content moderation AI", "feed ranking algorithm", "community platform software", "social network development"],
    path: "/industries/social-networking",
  },

  "real-estate": {
    slug: "real-estate",
    badge: "Real Estate",
    title: "AI & Software for Real Estate",
    subtitle: "Smarter listings. Faster deals. Better investor decisions.",
    description:
      "We build PropTech platforms, AI-powered valuation models, property search experiences, and CRM tools for real estate portals, agencies, developers, and property investment firms.",
    challenges: [
      { title: "Inaccurate valuations", body: "AVMs built on basic comparables miss micro-location factors, renovation quality, and market momentum — leading to mispriced listings and missed investment opportunities." },
      { title: "Poor search and discovery", body: "Traditional keyword and filter-based property search fails to match buyers with properties that fit their actual preferences and lifestyle requirements." },
      { title: "Long time-to-close", body: "Manual document review, due diligence, and compliance checks slow transactions and frustrate buyers, sellers, and agents." },
      { title: "Fragmented market data", body: "Price trends, rental yield data, and planning information scattered across registries, portals, and local authority systems." },
    ],
    solutions: [
      { icon: IC.home, title: "AI Valuation Models", body: "Automated valuation models incorporating satellite imagery, planning data, school ratings, transport links, and comparable transactions — updated daily." },
      { icon: IC.brain, title: "Intelligent Property Search", body: "Natural language property search and preference-based recommendation engines that match buyers to properties their filter would miss." },
      { icon: IC.bolt, title: "Document & Due Diligence Automation", body: "AI document review for lease agreements, title deeds, and survey reports — extracting key terms, flagging risks, and accelerating closing." },
      { icon: IC.chart, title: "Market Intelligence Platform", body: "Investment analysis dashboards showing rental yields, capital growth trends, planning pipelines, and supply/demand indicators by micro-market." },
      { icon: IC.users, title: "Agent CRM & Productivity", body: "AI-enhanced CRM with automatic lead scoring, follow-up scheduling, and listing performance insights for estate agency teams." },
      { icon: IC.mobile, title: "Property Portal Development", body: "Full-stack portal development — search, listing management, virtual tours, mortgage calculators, and agent tools — built to scale." },
    ],
    useCases: [
      { metric: "5,000+", metricLabel: "listings in 6 months", title: "Doors Open property portal launches with 5,000 listings in 6 months", body: "Full-stack portal with AI search, virtual tours, and agent tools built for a competitive market launch." },
      { metric: "18%", metricLabel: "valuation accuracy improvement", title: "ML AVM improves valuation accuracy by 18% versus traditional comparables", body: "Model incorporating satellite imagery and planning data reduced median absolute percentage error significantly." },
      { metric: "40%", metricLabel: "faster due diligence", title: "AI document review cuts due diligence time by 40% for property investment firm", body: "Automated lease and title document review extracting break clauses, rent review terms, and encumbrances." },
    ],
    techStack: [
      { label: "AI / ML", items: ["AVM models", "NLP", "Computer vision", "Recommendation ML"] },
      { label: "Data", items: ["Land Registry", "OS data", "Planning APIs", "Rightmove feed"] },
      { label: "Frontend", items: ["Next.js", "React", "Mapbox GL", "TypeScript"] },
      { label: "Backend", items: ["Node.js", "PostgreSQL", "PostGIS", "Elasticsearch"] },
    ],
    relatedIndustries: [
      { label: "Banking & Finance", href: "/industries/banking-finance" },
      { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
      { label: "Supply Chain & Logistics", href: "/industries/supply-chain-logistics" },
    ],
    cta: { title: "Building PropTech that changes how people find and invest in property?", subtitle: "We've built portals, AVM engines, and investment platforms for real estate companies globally." },
    metaTitle: "AI & Software for Real Estate",
    metaDescription: "KivvaTech builds PropTech platforms — AI valuation models, property search, due diligence automation, and market intelligence for real estate companies.",
    metaKeywords: ["PropTech development", "real estate AI", "property portal development", "AVM model", "real estate software development"],
    path: "/industries/real-estate",
  },
};

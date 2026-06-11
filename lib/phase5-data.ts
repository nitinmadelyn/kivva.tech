/**
 * Phase 5 — Case Study page content.
 * Each entry drives a /case-studies/[slug] page via CaseStudyTemplate.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudyChallenge {
  title: string;
  body: string;
}

export interface CaseStudySolutionStep {
  step: string;
  title: string;
  body: string;
}

export interface CaseStudyResult {
  metric: string;
  metricLabel: string;
  body: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudyConfig {
  slug: string;
  industry: string;
  industryHref: string;
  badge: string;
  client: string;
  title: string;
  subtitle: string;
  description: string;
  stats: CaseStudyStat[];
  challenge: {
    overview: string;
    points: CaseStudyChallenge[];
  };
  solution: {
    overview: string;
    steps: CaseStudySolutionStep[];
  };
  results: CaseStudyResult[];
  techStack: Array<{ label: string; items: string[] }>;
  testimonial?: CaseStudyTestimonial;
  relatedCaseStudies: Array<{ label: string; href: string; tag: string }>;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  path: string;
}

// ─── Case studies ─────────────────────────────────────────────────────────────

export const CASE_STUDIES: Record<string, CaseStudyConfig> = {

  logibee: {
    slug: "logibee",
    industry: "Supply Chain & Logistics",
    industryHref: "/industries/supply-chain-logistics",
    badge: "Logistics",
    client: "Logibee",
    title: "How Logibee Cut Delivery Times by 40% with AI Routing",
    subtitle: "Real-time route optimisation that replaced manual dispatch across a national delivery network.",
    description:
      "Logibee operates a high-volume last-mile delivery network across 12 cities. Manual dispatch and static routing were creating bottlenecks at peak times, causing late deliveries and rising fuel costs. KivvaTech rebuilt their dispatch and routing system around a real-time ML routing engine.",
    stats: [
      { value: "40%", label: "faster average delivery time" },
      { value: "28%", label: "reduction in operational costs" },
      { value: "12", label: "cities deployed across" },
      { value: "5 days", label: "from pilot to full rollout" },
    ],
    challenge: {
      overview:
        "Logibee's dispatch team was manually assigning routes each morning based on static zone maps. As order volume grew, this approach broke down: drivers were crisscrossing the same areas, fuel costs were climbing, and on-time delivery rates were falling below the SLA threshold.",
      points: [
        { title: "Static zone-based routing", body: "Routes were fixed by postcode zones with no awareness of real-time traffic, driver availability, or vehicle capacity." },
        { title: "Manual dispatch bottleneck", body: "A single dispatcher was building routes for 80+ drivers each morning — a process that took 2 hours and was prone to errors." },
        { title: "No visibility into delivery status", body: "Customers had no live tracking. Support teams were handling hundreds of WISMO calls per day." },
        { title: "Fuel cost escalation", body: "Inefficient routing was adding an estimated 18% unnecessary distance per driver per day across the fleet." },
      ],
    },
    solution: {
      overview:
        "We replaced the static zone model with a real-time ML routing engine that accounts for traffic, driver hours, vehicle capacity, and delivery time windows. Route generation went from 2 hours of manual work to sub-60-second automated dispatch.",
      steps: [
        { step: "01", title: "Data integration layer", body: "Unified order management data, driver schedules, vehicle inventory, and real-time traffic APIs into a single routing context." },
        { step: "02", title: "ML routing engine", body: "Custom vehicle routing problem (VRP) solver combining OR-Tools optimisation with learned heuristics from 6 months of historical delivery data." },
        { step: "03", title: "Dispatcher dashboard", body: "Real-time web interface for dispatchers to review, override, and push routes to drivers — with live ETA recalculation when conditions change." },
        { step: "04", title: "Driver mobile app", body: "React Native app with turn-by-turn navigation, delivery confirmation, and proof-of-delivery photo capture." },
        { step: "05", title: "Customer tracking portal", body: "Live shipment tracking with predictive ETA for end customers — reducing WISMO call volume by 70%." },
      ],
    },
    results: [
      { metric: "40%", metricLabel: "faster delivery", body: "Average delivery time dropped from 4.2 hours to 2.5 hours across all markets after full rollout." },
      { metric: "28%", metricLabel: "cost reduction", body: "Fuel and labour costs fell significantly — the routing engine reduced average distance per driver per day by 22%." },
      { metric: "70%", metricLabel: "fewer WISMO calls", body: "Live customer tracking eliminated the majority of inbound support calls about delivery status." },
      { metric: "5 days", metricLabel: "to full rollout", body: "Phased rollout starting with 2 cities, full network deployment completed within 5 business days of pilot sign-off." },
    ],
    techStack: [
      { label: "Routing AI", items: ["OR-Tools", "Custom VRP solver", "Python", "Redis"] },
      { label: "Backend", items: ["Node.js", "PostgreSQL", "PostGIS", "Kafka"] },
      { label: "Mobile", items: ["React Native", "Expo", "Google Maps SDK"] },
      { label: "Infrastructure", items: ["AWS", "Kubernetes", "Terraform", "CloudFront"] },
    ],
    testimonial: {
      quote: "We went from 2 hours of manual routing every morning to routes generated in under a minute. The operational impact was immediate.",
      author: "Operations Director",
      role: "Logibee",
    },
    relatedCaseStudies: [
      { label: "Navig8 — Maritime tracking", href: "/case-studies/navig8", tag: "Maritime" },
      { label: "Ivira — Healthcare portal", href: "/case-studies/ivira", tag: "Healthcare" },
      { label: "Food Moover — Restaurant tech", href: "/case-studies/food-moover", tag: "Food & Beverages" },
    ],
    metaTitle: "Logibee Case Study — 40% Faster Delivery with AI Routing",
    metaDescription: "How KivvaTech built an AI routing engine that reduced Logibee's delivery times by 40% and cut operational costs by 28% across a 12-city network.",
    metaKeywords: ["logistics AI case study", "route optimisation", "last mile delivery", "delivery software", "Logibee"],
    path: "/case-studies/logibee",
  },

  ivira: {
    slug: "ivira",
    industry: "Healthcare",
    industryHref: "/industries/healthcare",
    badge: "Healthcare",
    client: "Ivira Health",
    title: "How Ivira Reduced Admin Work by 60% with a Patient Portal",
    subtitle: "An integrated patient portal that automated scheduling, billing, and clinical workflows across 12 clinics.",
    description:
      "Ivira Health operates a network of 12 primary care clinics. Administrative overhead was consuming clinical capacity: scheduling, billing, referrals, and patient communications were almost entirely manual. KivvaTech built a HIPAA-compliant patient portal and workflow automation layer that transformed how the network operates.",
    stats: [
      { value: "60%", label: "reduction in admin workload" },
      { value: "12", label: "clinics on one platform" },
      { value: "3 min", label: "average appointment booking time" },
      { value: "94%", label: "patient satisfaction score post-launch" },
    ],
    challenge: {
      overview:
        "Each clinic in the Ivira network was running independently with different scheduling software, paper-based referrals, and manual billing workflows. The result was high administrative headcount, long patient wait times, and frequent billing errors that delayed revenue.",
      points: [
        { title: "Fragmented systems across 12 clinics", body: "Each clinic used different tools — no unified patient record, no shared scheduling, no consistent billing process." },
        { title: "Manual scheduling and reminders", body: "Appointment booking required a phone call. No-show rates ran at 22% because reminders were sent manually and inconsistently." },
        { title: "Slow billing and claims processing", body: "Claims were prepared manually from handwritten clinical notes — leading to frequent errors, denials, and delayed revenue." },
        { title: "No patient self-service", body: "Patients couldn't view their records, request referrals, or message their care team outside of a phone call or in-person visit." },
      ],
    },
    solution: {
      overview:
        "We built a unified HIPAA-compliant patient portal with native integrations into each clinic's EHR system, automated scheduling with SMS/email reminders, and a billing workflow that auto-generates claims from structured clinical data.",
      steps: [
        { step: "01", title: "EHR integration layer", body: "HL7 FHIR integrations across 3 different EHR systems in use across the network — creating a unified patient record view." },
        { step: "02", title: "Patient portal", body: "Web and mobile portal for appointment booking, record access, prescription requests, and secure messaging with care teams." },
        { step: "03", title: "Automated reminders and follow-ups", body: "SMS and email reminder sequences with configurable timing — cutting no-show rates from 22% to 8% within 90 days." },
        { step: "04", title: "Billing automation", body: "Structured clinical data extracted from EHR notes to auto-populate claims — with exception queue for human review of edge cases." },
        { step: "05", title: "Admin dashboard", body: "Unified clinic operations dashboard giving practice managers real-time visibility into scheduling, capacity, and billing status." },
      ],
    },
    results: [
      { metric: "60%", metricLabel: "admin reduction", body: "Administrative FTE requirements across the network fell by 60% within 6 months of full deployment." },
      { metric: "8%", metricLabel: "no-show rate", body: "Automated reminders cut the no-show rate from 22% to 8% — recovering significant revenue across the network." },
      { metric: "35%", metricLabel: "faster billing cycle", body: "Automated claims generation reduced average billing cycle time from 14 days to 9 days." },
      { metric: "94%", metricLabel: "patient satisfaction", body: "Post-launch patient satisfaction survey scored the new portal at 94% — up from 71% for the previous phone-based process." },
    ],
    techStack: [
      { label: "Interoperability", items: ["HL7 FHIR", "Epic APIs", "Athenahealth API", "Mirth Connect"] },
      { label: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "AWS HealthLake"] },
      { label: "Frontend", items: ["Next.js", "React Native", "TypeScript", "Tailwind CSS"] },
      { label: "Compliance", items: ["HIPAA", "AWS Certified", "AES-256 encryption", "Audit logging"] },
    ],
    testimonial: {
      quote: "Our admin team was spending 70% of their time on tasks the portal now handles automatically. That capacity has gone back into patient care.",
      author: "Chief Operating Officer",
      role: "Ivira Health",
    },
    relatedCaseStudies: [
      { label: "Logibee — AI routing", href: "/case-studies/logibee", tag: "Logistics" },
      { label: "Doors Open — Property portal", href: "/case-studies/doors-open", tag: "Real Estate" },
      { label: "Food Moover — Restaurant tech", href: "/case-studies/food-moover", tag: "Food & Beverages" },
    ],
    metaTitle: "Ivira Health Case Study — 60% Admin Reduction with Patient Portal",
    metaDescription: "How KivvaTech built a HIPAA-compliant patient portal for Ivira Health's 12-clinic network — reducing admin workload by 60% and no-show rates from 22% to 8%.",
    metaKeywords: ["healthcare case study", "patient portal development", "HIPAA software", "healthcare AI", "Ivira Health"],
    path: "/case-studies/ivira",
  },

  navig8: {
    slug: "navig8",
    industry: "Supply Chain & Logistics",
    industryHref: "/industries/supply-chain-logistics",
    badge: "Maritime",
    client: "Navig8 Connect",
    title: "How Navig8 Connect Tracks 500+ Vessels in Real Time",
    subtitle: "A live maritime fleet intelligence platform delivering ETA predictions and operational visibility across a global fleet.",
    description:
      "Navig8 Connect manages one of the world's largest independent tanker fleets. Their operations team was working from fragmented data sources, manual position reports, and spreadsheet-based scheduling. KivvaTech built a unified fleet intelligence platform that gives every stakeholder live visibility into vessel position, cargo status, and predicted arrivals.",
    stats: [
      { value: "500+", label: "vessels tracked live" },
      { value: "Real-time", label: "position and ETA updates" },
      { value: "3 systems", label: "unified into one platform" },
      { value: "40%", label: "reduction in ops team manual tasks" },
    ],
    challenge: {
      overview:
        "Navig8's operations team was managing a global fleet from a combination of email position reports, a legacy vessel tracking tool, and multiple Excel-based cargo and scheduling systems. Data was stale, reconciliation took hours, and stakeholders had no reliable way to get a live picture of fleet status.",
      points: [
        { title: "Stale position data", body: "Vessel positions were updated via manual AIS email reports every 6–12 hours — insufficient for charter party calculations and port planning." },
        { title: "No unified cargo view", body: "Cargo status, voyage orders, and port calls were tracked across separate systems with no automated reconciliation." },
        { title: "Manual ETA calculation", body: "Port agents and charterers were calling the operations desk for ETAs — each requiring a manual calculation from the most recent position report." },
        { title: "Fragmented stakeholder communication", body: "Charterers, port agents, and internal ops worked from different data snapshots — leading to costly miscommunications and missed windows." },
      ],
    },
    solution: {
      overview:
        "We built a unified maritime intelligence platform pulling live AIS data, voyage management records, and port call data into a single real-time view. Predictive ETA models replaced manual calculations, and a stakeholder portal eliminated the need for status calls.",
      steps: [
        { step: "01", title: "Live AIS data integration", body: "Real-time AIS position feeds from multiple providers unified into a normalised data stream — updating vessel positions every 5 minutes." },
        { step: "02", title: "Predictive ETA engine", body: "ML model combining current position, vessel speed profile, weather routing, and port congestion data to generate probabilistic ETAs." },
        { step: "03", title: "Voyage management layer", body: "Unified voyage order, cargo status, and port call data model — integrating with existing back-office systems via API." },
        { step: "04", title: "Fleet operations dashboard", body: "Live map and tabular fleet view for operations team — with exception alerts, port congestion flags, and voyage deviation detection." },
        { step: "05", title: "Stakeholder portal", body: "Self-service portal for charterers and port agents to track vessel status, ETAs, and cargo progress without contacting the ops desk." },
      ],
    },
    results: [
      { metric: "500+", metricLabel: "vessels tracked", body: "Full fleet visibility across all vessel classes — updated every 5 minutes from live AIS feeds." },
      { metric: "40%", metricLabel: "fewer manual tasks", body: "Operations team manual data reconciliation and status reporting tasks reduced by 40% in the first quarter post-launch." },
      { metric: "90%", metricLabel: "ETA accuracy within 2 hours", body: "Predictive ETA engine achieves 90% accuracy within a 2-hour window at 24 hours from arrival — compared to 60% for manual estimates." },
      { metric: "Zero", metricLabel: "status calls needed", body: "Charterer portal eliminated inbound status calls entirely for the majority of voyage queries." },
    ],
    techStack: [
      { label: "Data & Streaming", items: ["Kafka", "TimescaleDB", "PostGIS", "Redis"] },
      { label: "ML / AI", items: ["Python", "XGBoost", "Custom routing models", "Weather APIs"] },
      { label: "Frontend", items: ["Next.js", "Mapbox GL JS", "React", "TypeScript"] },
      { label: "Infrastructure", items: ["AWS", "Kubernetes", "Terraform", "CloudFront"] },
    ],
    testimonial: {
      quote: "Our operations team now spends their time on decisions, not on chasing data. That shift alone has been transformative.",
      author: "Head of Fleet Operations",
      role: "Navig8 Connect",
    },
    relatedCaseStudies: [
      { label: "Logibee — AI routing", href: "/case-studies/logibee", tag: "Logistics" },
      { label: "Ivira — Healthcare portal", href: "/case-studies/ivira", tag: "Healthcare" },
      { label: "Doors Open — Property portal", href: "/case-studies/doors-open", tag: "Real Estate" },
    ],
    metaTitle: "Navig8 Connect Case Study — Real-Time Fleet Intelligence for 500+ Vessels",
    metaDescription: "How KivvaTech built a live maritime fleet intelligence platform for Navig8 Connect — tracking 500+ vessels in real time with predictive ETA and unified cargo visibility.",
    metaKeywords: ["maritime technology case study", "fleet tracking platform", "AIS data platform", "vessel tracking software", "Navig8"],
    path: "/case-studies/navig8",
  },

  "food-moover": {
    slug: "food-moover",
    industry: "Food & Beverages",
    industryHref: "/industries/food-beverages",
    badge: "Food & Beverages",
    client: "Food Moover",
    title: "How Food Moover Sped Up Order Processing by 40%",
    subtitle: "A smart ordering and kitchen management system that eliminated bottlenecks and unified multi-platform delivery operations.",
    description:
      "Food Moover operates a chain of fast-casual restaurants across 8 locations. Peak-hour bottlenecks, disconnected delivery platforms, and manual kitchen coordination were costing throughput and customer satisfaction. KivvaTech built an integrated smart ordering system with AI-powered kitchen display management.",
    stats: [
      { value: "40%", label: "faster order processing time" },
      { value: "8", label: "locations on one platform" },
      { value: "28%", label: "reduction in food waste" },
      { value: "22%", label: "increase in repeat customer visits" },
    ],
    challenge: {
      overview:
        "Food Moover was managing orders across 3 delivery apps (Uber Eats, DoorDash, and their own website) with no unified view. Kitchen staff were working from multiple tablets and a paper ticket system. During peak hours, orders were getting lost, preparation times were climbing, and food waste from mis-prep was running at 8% of revenue.",
      points: [
        { title: "Fragmented order management", body: "Three separate delivery app tablets plus a POS terminal for in-house orders — no unified queue, frequent duplication and missed tickets." },
        { title: "Kitchen coordination breakdown at peak", body: "Manual coordination between front-of-house and kitchen broke down above 40 concurrent orders — a threshold easily hit at lunch and dinner." },
        { title: "No demand forecasting", body: "Prep quantities were set by intuition each morning. Mis-forecasting led to both waste and stockouts of high-demand items." },
        { title: "No customer retention loop", body: "Food Moover had no loyalty programme and no mechanism to identify or re-engage their highest-value customers." },
      ],
    },
    solution: {
      overview:
        "We built a unified order management system that aggregates all delivery and in-house orders into a single queue, routes items to the correct kitchen station, and uses demand forecasting to inform daily prep. A lightweight CRM and loyalty module handles customer retention.",
      steps: [
        { step: "01", title: "Unified order aggregation", body: "API integrations with Uber Eats, DoorDash, and in-house POS — all orders flowing into a single management layer with consistent status tracking." },
        { step: "02", title: "Smart kitchen display system", body: "Order routing logic that splits multi-item orders by kitchen station, surfaces preparation times, and flags orders approaching SLA breach." },
        { step: "03", title: "Demand forecasting model", body: "Item-level daily demand forecasting model trained on 18 months of historical sales data — integrated with the prep schedule printout each morning." },
        { step: "04", title: "Customer loyalty module", body: "Lightweight loyalty programme built into the order flow — tracking visit frequency, spend, and triggering personalised offers via SMS." },
        { step: "05", title: "Manager analytics dashboard", body: "Real-time sales, waste, and throughput metrics per location — giving managers the data to make same-day operational adjustments." },
      ],
    },
    results: [
      { metric: "40%", metricLabel: "faster processing", body: "Average order-to-ready time fell from 14 minutes to 8.5 minutes across all locations after full deployment." },
      { metric: "28%", metricLabel: "waste reduction", body: "Item-level demand forecasting reduced daily food waste from 8% of revenue to 5.8% — a material saving across 8 locations." },
      { metric: "22%", metricLabel: "repeat visit increase", body: "Loyalty programme and personalised SMS offers drove a 22% increase in repeat visits within 3 months of launch." },
      { metric: "Zero", metricLabel: "missed tickets", body: "Unified order queue eliminated the cross-platform ticket errors that were previously generating 15+ complaints per week." },
    ],
    techStack: [
      { label: "Integrations", items: ["Uber Eats API", "DoorDash API", "Square POS", "Toast POS"] },
      { label: "AI / ML", items: ["Prophet", "XGBoost", "Custom demand model", "Python"] },
      { label: "Frontend", items: ["React", "React Native", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "Kafka"] },
    ],
    testimonial: {
      quote: "During Friday dinner rush we used to have chaos. Now the kitchen just works. The platform paid for itself in the first month from waste reduction alone.",
      author: "Co-Founder",
      role: "Food Moover",
    },
    relatedCaseStudies: [
      { label: "Logibee — AI routing", href: "/case-studies/logibee", tag: "Logistics" },
      { label: "Ivira — Healthcare portal", href: "/case-studies/ivira", tag: "Healthcare" },
      { label: "Doors Open — Property portal", href: "/case-studies/doors-open", tag: "Real Estate" },
    ],
    metaTitle: "Food Moover Case Study — 40% Faster Order Processing with Smart Kitchen Tech",
    metaDescription: "How KivvaTech built a unified ordering and kitchen management system for Food Moover — cutting order processing time by 40% and food waste by 28%.",
    metaKeywords: ["restaurant technology case study", "kitchen management system", "food delivery software", "restaurant AI", "Food Moover"],
    path: "/case-studies/food-moover",
  },

  "doors-open": {
    slug: "doors-open",
    industry: "Real Estate",
    industryHref: "/industries/real-estate",
    badge: "Real Estate",
    client: "Doors Open",
    title: "How Doors Open Launched with 5,000+ Listings in 6 Months",
    subtitle: "A full-stack property portal with AI-powered search, virtual tours, and agent tools — built for a competitive market launch.",
    description:
      "Doors Open is a new-generation property portal competing in a market dominated by established incumbents. Their advantage is a superior search and discovery experience — AI-powered natural language search, genuine personalisation, and integrated agent tools that the established portals don't offer. KivvaTech designed and built the entire platform from zero.",
    stats: [
      { value: "5,000+", label: "listings at launch" },
      { value: "6 months", label: "from zero to live" },
      { value: "2.3x", label: "higher search-to-enquiry conversion vs. competitors" },
      { value: "98", label: "PageSpeed score on launch" },
    ],
    challenge: {
      overview:
        "Doors Open needed to launch a property portal that could compete with well-funded incumbents from day one. The challenge was threefold: build and launch fast enough to capitalise on their market window, deliver a genuinely differentiated search experience that would attract both agents and buyers, and build on infrastructure that could scale without rearchitecting.",
      points: [
        { title: "Speed to market", body: "The founding team had a 6-month window before a competitor was expected to launch a similar product. Missing it would mean entering a more crowded market." },
        { title: "Differentiation against established portals", body: "Filter-based property search is a commodity. Doors Open needed an AI search experience compelling enough to win agents and buyers away from incumbents." },
        { title: "Agent adoption", body: "A portal is only as good as its listings. Winning agent sign-ups required a listing management and analytics tool better than what incumbents offered." },
        { title: "Scale-ready architecture", body: "Building fast is easy. Building fast on architecture that can handle 100x growth without a rewrite required careful upfront decisions." },
      ],
    },
    solution: {
      overview:
        "We took Doors Open from product specification to live platform in 6 months — delivering AI-powered natural language property search, a full agent portal, virtual tour integration, and a mortgage calculator. The platform launched with 5,000+ listings on day one through an agent incentive programme we helped design.",
      steps: [
        { step: "01", title: "Architecture and design", body: "Two-week discovery and architecture sprint establishing the data model, search infrastructure, API contracts, and component library." },
        { step: "02", title: "AI search engine", body: "Natural language search layer on top of Elasticsearch — interpreting queries like 'quiet 2-bed near good schools' into structured property filters with personalised ranking." },
        { step: "03", title: "Listing platform and agent portal", body: "Full listing management for agents: bulk upload, photo management, performance analytics, and an enquiry CRM — all in one dashboard." },
        { step: "04", title: "Virtual tour and media integration", body: "Integrated virtual tour player, photo gallery, floor plan viewer, and EPC/valuation data sourced from land registry and third-party providers." },
        { step: "05", title: "Performance and SEO", body: "Static generation for all listing and area pages, structured data for rich results, and a 98 PageSpeed score on launch day." },
      ],
    },
    results: [
      { metric: "5,000+", metricLabel: "listings at launch", body: "Agent incentive programme and superior portal tools drove 5,000+ active listings on launch day — enough critical mass to attract serious buyers." },
      { metric: "6 months", metricLabel: "zero to live", body: "Full platform delivered from initial brief to production launch in exactly 26 weeks — on time and on budget." },
      { metric: "2.3x", metricLabel: "better conversion", body: "AI search drove a search-to-enquiry conversion rate 2.3x higher than the industry benchmark for new portal launches." },
      { metric: "98", metricLabel: "PageSpeed score", body: "Static generation, optimised images, and edge delivery achieved a 98 PageSpeed score — ahead of all established competitors." },
    ],
    techStack: [
      { label: "Search", items: ["Elasticsearch", "Custom NLP", "Redis", "Semantic ranking"] },
      { label: "Data", items: ["Land Registry API", "OS data", "EPC register", "Rightmove feed"] },
      { label: "Frontend", items: ["Next.js", "TypeScript", "Mapbox GL", "Tailwind CSS"] },
      { label: "Infrastructure", items: ["Vercel", "PostgreSQL", "PostGIS", "Cloudflare"] },
    ],
    testimonial: {
      quote: "We launched with better search than portals that have been running for 20 years. KivvaTech delivered something we genuinely couldn't have built ourselves in time.",
      author: "CEO",
      role: "Doors Open",
    },
    relatedCaseStudies: [
      { label: "Logibee — AI routing", href: "/case-studies/logibee", tag: "Logistics" },
      { label: "Ivira — Healthcare portal", href: "/case-studies/ivira", tag: "Healthcare" },
      { label: "Navig8 — Maritime tracking", href: "/case-studies/navig8", tag: "Maritime" },
    ],
    metaTitle: "Doors Open Case Study — Property Portal with 5,000+ Listings in 6 Months",
    metaDescription: "How KivvaTech built the Doors Open property portal from zero to 5,000+ listings in 6 months — with AI-powered search, agent tools, and a 98 PageSpeed score.",
    metaKeywords: ["property portal case study", "real estate software", "PropTech development", "AI property search", "Doors Open"],
    path: "/case-studies/doors-open",
  },

};

// ─── Listing page metadata ────────────────────────────────────────────────────

export const CASE_STUDIES_LIST = Object.values(CASE_STUDIES);

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
  logo?: string; // path under /public, e.g. "/logos/acquire.svg"
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

  beforeyoubuy: {
    slug: "beforeyoubuy",
    industry: "Property Technology",
    industryHref: "/industries/real-estate",
    badge: "PropTech",
    client: "Before You Buy",
    logo: "/logos/company-3.webp",
    title: "How Before You Buy Scaled to 250+ Inspectors Across 40+ Cities",
    subtitle: "A full-stack inspection booking platform that replaced manual dispatch with instant online booking and 2-hour report delivery across Australia.",
    description:
      "Before You Buy is Australia's leading property inspection platform, connecting buyers with certified building, pest, strata, and pool inspectors. Before KivvaTech, every booking was handled by phone or email, reports arrived as scanned PDFs up to a week later, and inspectors had no digital tools in the field. We built the platform from the ground up.",
    stats: [
      { value: "250+", label: "active inspectors on platform" },
      { value: "40+",  label: "cities and regions covered" },
      { value: "3x",   label: "booking volume growth in 6 months" },
      { value: "2 hrs", label: "average report delivery time" },
    ],
    challenge: {
      overview:
        "Australia's property inspection market was entirely phone-driven. Before You Buy was coordinating 250+ inspectors across 40 cities via phone calls and email chains. Clients waited up to a week for PDF reports delivered by email. There was no visibility into inspector availability, no automated scheduling, and no way to track booking status in real time.",
      points: [
        {
          title: "Manual booking across 40+ cities",
          body: "Staff were manually fielding calls, checking inspector availability by phone, and confirming bookings via email. Peak periods during property auctions overwhelmed the team entirely.",
        },
        {
          title: "Report delivery taking up to 7 days",
          body: "Inspectors completed their assessments on paper, then typed up reports manually. Clients had no visibility into when their report would arrive and frequently called to chase.",
        },
        {
          title: "No inspector management tools",
          body: "Inspector schedules, territories, certifications, and performance data were tracked in spreadsheets. There was no way to optimise assignment or identify capacity gaps.",
        },
        {
          title: "Fragmented payment and invoicing",
          body: "Payment was collected by phone with no automated invoicing or reconciliation. Dispute resolution and refunds required manual intervention from senior staff.",
        },
      ],
    },
    solution: {
      overview:
        "We designed and built an end-to-end platform: a consumer booking engine with real-time inspector availability, a React Native field app for inspectors to complete and submit reports on-site, automated PDF generation and delivery, and a full business intelligence dashboard for the operations team. The platform went live in 14 weeks.",
      steps: [
        {
          step: "01",
          title: "Real-time booking engine",
          body: "Consumer-facing booking flow with live inspector availability calendars per city, service type selection (building, pest, strata, pool), instant confirmation, and Stripe payment. Group booking for property managers handles multiple inspections per address.",
        },
        {
          step: "02",
          title: "Inspector mobile app",
          body: "React Native iOS and Android app with structured inspection checklists, photo annotation with defect tagging, voice-to-text notes, and offline mode for properties with poor connectivity.",
        },
        {
          step: "03",
          title: "Automated report generation",
          body: "Server-side PDF generation from structured inspection data. Reports are assembled, branded, and emailed to the client within 2 hours of inspection completion. Summary and full versions generated automatically.",
        },
        {
          step: "04",
          title: "Operations dashboard",
          body: "Full booking pipeline view, inspector performance metrics, city-level capacity utilisation, revenue analytics, and automated invoicing. Administrators can reassign bookings, manage inspector certifications, and handle exceptions from one interface.",
        },
        {
          step: "05",
          title: "Client tracking portal",
          body: "Post-booking status tracker for clients: inspection confirmed, inspector en route, inspection complete, report ready. Push and email notifications at each stage eliminated the majority of inbound status calls.",
        },
      ],
    },
    results: [
      {
        metric: "3x",
        metricLabel: "booking volume growth",
        body: "Online booking removed the phone bottleneck entirely. Booking volume tripled within 6 months of launch as the platform opened capacity that was previously limited by staff bandwidth.",
      },
      {
        metric: "2 hrs",
        metricLabel: "report delivery",
        body: "Report delivery time fell from an average of 4.5 days to under 2 hours. Client satisfaction with turnaround went from the top complaint to a key competitive advantage.",
      },
      {
        metric: "40%",
        metricLabel: "operational cost reduction",
        body: "Eliminating manual booking coordination, paper-based reporting, and manual invoicing reduced operational headcount requirements by 40% even as booking volume tripled.",
      },
      {
        metric: "250+",
        metricLabel: "inspectors onboarded",
        body: "The digital platform made it economical to onboard inspectors in new cities. The coverage map expanded from 12 to 40+ cities within 9 months of launch.",
      },
    ],
    techStack: [
      { label: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"] },
      { label: "Mobile", items: ["React Native", "Expo", "Offline-first sync", "Camera SDK"] },
      { label: "Backend", items: ["Node.js", "PostgreSQL", "AWS Lambda", "Redis"] },
      { label: "Payments & Infra", items: ["Stripe", "AWS S3", "PDF generation", "SendGrid"] },
    ],
    testimonial: {
      quote: "The platform transformed how we operate. What used to take a team of coordinators all day now happens automatically. Our inspectors love the app and our clients love getting reports in hours instead of days.",
      author: "Operations Director",
      role: "Before You Buy",
    },
    relatedCaseStudies: [
      { label: "Acquire.io — Customer engagement platform", href: "/case-studies/acquire", tag: "SaaS" },
      { label: "Dexi.io — Data automation platform", href: "/case-studies/dexi", tag: "Data" },
      { label: "Stashly — Savings and fintech app", href: "/case-studies/stashly", tag: "Fintech" },
    ],
    metaTitle: "Before You Buy Case Study — PropTech Platform Scaling to 250+ Inspectors",
    metaDescription: "How KivvaTech built Australia's leading property inspection platform for Before You Buy, scaling to 250+ inspectors, 40+ cities, and 2-hour report delivery.",
    metaKeywords: ["PropTech case study", "property inspection platform", "building inspection software", "Australia real estate tech", "Before You Buy"],
    path: "/case-studies/beforeyoubuy",
  },

  "import-io": {
    slug: "import-io",
    industry: "Enterprise Data",
    industryHref: "/industries/data-analytics",
    badge: "Enterprise SaaS",
    client: "Import.io",
    logo: "/logos/company-1.svg",
    title: "How Import.io Processes 20M+ Data Points Per Day with AI Extraction",
    subtitle: "Rebuilt the core extraction engine and enterprise data pipeline for one of the world's most advanced web data platforms.",
    description:
      "Import.io is an enterprise-grade web data platform used by Fortune 500 companies to extract structured data from the open web at scale. With a reported $38M in annual revenue and clients across financial services, retail, and market intelligence, their platform needed an extraction engine that could outpace increasingly sophisticated anti-scraping measures and handle enterprise-scale data volumes reliably.",
    stats: [
      { value: "20M+", label: "data points processed daily" },
      { value: "30+",  label: "BI and data warehouse integrations" },
      { value: "99.8%", label: "extraction accuracy post-rebuild" },
      { value: "6 mo", label: "from kickoff to enterprise launch" },
    ],
    challenge: {
      overview:
        "Import.io's extraction accuracy was degrading quarter over quarter as target websites deployed more sophisticated bot-detection measures. The existing rule-based extraction engine required constant manual maintenance for every site change. At the same time, enterprise customer data volumes were growing faster than the pipeline could scale, and the self-service portal was too technical for business users to operate without engineering support.",
      points: [
        {
          title: "Rule-based extraction failing under anti-scraping pressure",
          body: "CSS selector-based extraction broke whenever target sites updated their layouts or deployed bot detection. Engineering was spending 40% of capacity on extraction maintenance rather than product development.",
        },
        {
          title: "Pipeline throughput bottleneck at enterprise scale",
          body: "The data pipeline was synchronous and single-region. Enterprise clients hitting 20M+ daily records were experiencing multi-hour processing delays and data freshness failures.",
        },
        {
          title: "Self-service portal required engineering intervention",
          body: "Business analysts at client companies could not configure or schedule their own extractions without help from Import.io engineers. Every new data source required a professional services engagement.",
        },
        {
          title: "Brittle BI connector integrations",
          body: "Tableau, Power BI, and Salesforce connectors were maintained as individual bespoke integrations that broke with every platform API change, generating high-priority support tickets from enterprise accounts.",
        },
      ],
    },
    solution: {
      overview:
        "We rebuilt the extraction core around an ML-based DOM pattern recognition system that adapts to layout changes without manual updates, paired it with a horizontally scalable Kafka-backed streaming pipeline, and redesigned the self-service portal around business user workflows. The result was a platform that could grow without growing the engineering team proportionally.",
      steps: [
        {
          step: "01",
          title: "AI-powered extraction engine",
          body: "ML model trained on millions of successful extractions that identifies semantically meaningful data elements by content type and visual position rather than brittle CSS selectors. Accuracy maintained even when page layouts change.",
        },
        {
          step: "02",
          title: "Distributed streaming pipeline",
          body: "Kafka-based ingestion layer with Elasticsearch indexing, multi-region deployment on AWS, and horizontal autoscaling. Capable of processing 20M+ records per day with sub-30-minute data freshness SLA.",
        },
        {
          step: "03",
          title: "Enterprise self-service portal",
          body: "Redesigned data source configuration with visual schema mapping, point-and-click field selection from a live preview, scheduling, and output format management. Business users now configure new extractions independently.",
        },
        {
          step: "04",
          title: "Integration marketplace",
          body: "Standardised connector framework with native integrations for Tableau, Power BI, Looker, BigQuery, Snowflake, Salesforce, and S3. Each connector versioned and automatically tested against platform API changes.",
        },
        {
          step: "05",
          title: "Data quality monitoring",
          body: "Real-time extraction health dashboard with per-source accuracy scoring, schema drift detection, failure alerting, and automatic retry with escalation. Clients see data quality metrics alongside their extracted data.",
        },
      ],
    },
    results: [
      {
        metric: "99.8%",
        metricLabel: "extraction accuracy",
        body: "ML-based extraction lifted accuracy from 94% to 99.8% across the active source library. Engineering time spent on extraction maintenance fell by over 60%.",
      },
      {
        metric: "20M+",
        metricLabel: "records per day",
        body: "The distributed Kafka pipeline processes over 20 million data points daily with consistent sub-30-minute freshness, handling enterprise clients that previously caused pipeline congestion.",
      },
      {
        metric: "30+",
        metricLabel: "BI integrations live",
        body: "The connector marketplace launched with 30+ production-ready integrations. Enterprise onboarding time for new data destinations fell from weeks to hours.",
      },
      {
        metric: "60%",
        metricLabel: "less engineering overhead",
        body: "The self-service portal and adaptive extraction engine together reduced the engineering support burden per enterprise client by 60%, freeing the team to focus on new capabilities.",
      },
    ],
    techStack: [
      { label: "AI / Extraction", items: ["Python", "ML DOM recognition", "Playwright", "Chromium pool"] },
      { label: "Data Pipeline", items: ["Apache Kafka", "Elasticsearch", "Spark", "Redis"] },
      { label: "Backend", items: ["Node.js", "PostgreSQL", "GraphQL", "REST APIs"] },
      { label: "Infrastructure", items: ["AWS", "Kubernetes", "Terraform", "CloudFront"] },
    ],
    testimonial: {
      quote: "The team's attention to detail, creativity, and technical expertise exceeded our expectations. We have received so much positive feedback from our customers already.",
      author: "Hilla Pedramparsi",
      role: "CTO, Import.io",
    },
    relatedCaseStudies: [
      { label: "Dexi.io — Data automation platform", href: "/case-studies/dexi", tag: "Data" },
      { label: "Acquire.io — Customer engagement platform", href: "/case-studies/acquire", tag: "SaaS" },
      { label: "Before You Buy — PropTech platform", href: "/case-studies/beforeyoubuy", tag: "PropTech" },
    ],
    metaTitle: "Import.io Case Study — 20M+ Daily Data Points with AI-Powered Extraction",
    metaDescription: "How KivvaTech rebuilt Import.io's extraction engine and data pipeline to process 20M+ records daily with 99.8% accuracy and 30+ BI integrations.",
    metaKeywords: ["Import.io case study", "web data extraction", "enterprise data platform", "AI scraping engine", "data pipeline engineering"],
    path: "/case-studies/import-io",
  },

  ludic: {
    slug: "ludic",
    industry: "Fashion & Lifestyle",
    industryHref: "/industries/ecommerce",
    badge: "eCommerce",
    client: "Ludic.life",
    logo: "/logos/company-6.avif",
    title: "How Ludic Tripled Conversions After Rebuilding Their Shopify Storefront",
    subtitle: "A headless Shopify rebuild for India's homegrown vegan lifestyle brand, delivering sub-2-second load times and a sold-out CSK campaign launch.",
    description:
      "Ludic is a Bengaluru-based lifestyle brand known for its vegan sneakers, streetwear, and collaborations with cultural icons including the Chennai Super Kings (CSK). Founded in 2017 and beloved for its sustainable ethos, Ludic's Shopify store was bottlenecked on mobile, with 8-second load times and a 0.9% conversion rate that left significant revenue on the table from their growing Instagram audience.",
    stats: [
      { value: "312%", label: "increase in conversion rate" },
      { value: "2.1s",  label: "average page load (from 8.4s)" },
      { value: "4 hrs", label: "to sell out the CSK campaign drop" },
      { value: "2.8x",  label: "mobile revenue growth in 3 months" },
    ],
    challenge: {
      overview:
        "Ludic had built a passionate community on Instagram and in-person at events, but their Shopify store was failing to convert that attention into revenue. Mobile users, who represented 78% of their traffic, faced 8-second load times, unintuitive navigation, and a checkout experience that hadn't been optimised since their initial store launch. The CSK collaboration deadline added urgency: they needed a world-class campaign page live in 3 weeks.",
      points: [
        {
          title: "8-second mobile load times costing conversions",
          body: "Shopify theme with unoptimised images, redundant app scripts, and blocking third-party resources was creating load times that put Ludic at a massive disadvantage with mobile-first shoppers.",
        },
        {
          title: "Poor product discovery and browsing experience",
          body: "No filtering by material, style, or vegan certification. Product pages lacked size guide integration, lifestyle photography layouts, and cross-sell logic for complementary items.",
        },
        {
          title: "CSK collaboration drop with 3-week deadline",
          body: "The Chennai Super Kings capsule collection required a custom campaign landing page with countdown timer, exclusive access mechanics, and capacity to handle a sharp traffic spike on launch day.",
        },
        {
          title: "Instagram traffic bouncing without converting",
          body: "Social traffic from Instagram campaigns landed on generic collection pages with no campaign context. High bounce rates indicated users were losing the product narrative the moment they arrived.",
        },
      ],
    },
    solution: {
      overview:
        "We rebuilt Ludic's storefront as a headless Shopify application on Next.js, connected to the Shopify Storefront API. This decoupled the frontend entirely from Shopify's theme engine, giving us full control over performance, layout, and campaign pages. The CSK launch page was delivered in week 2, and the full storefront went live in week 5.",
      steps: [
        {
          step: "01",
          title: "Headless Shopify storefront",
          body: "Next.js frontend consuming Shopify Storefront API via GraphQL. Server-side rendering for product and collection pages, edge-cached on Vercel. Product images served via Shopify CDN with automatic WebP conversion and responsive srcsets.",
        },
        {
          step: "02",
          title: "CSK campaign landing page",
          body: "Dedicated campaign page with countdown timer, exclusive access code gate, full-bleed imagery, and real-time stock indicators. Load-tested to handle 10x normal peak traffic before the launch day announcement.",
        },
        {
          step: "03",
          title: "Mobile-first product experience",
          body: "Full-screen product imagery with swipe gallery, pinch-to-zoom, size guide integrated into the add-to-cart flow, and persistent cart accessible without losing product context. One-click checkout via Shopify's native payment sheet.",
        },
        {
          step: "04",
          title: "Smart product discovery",
          body: "Faceted filtering by material (vegan leather, canvas, recycled), style category, colourway, and size availability. Related products logic surfacing complementary items based on co-purchase patterns.",
        },
        {
          step: "05",
          title: "Social-to-store campaign pages",
          body: "UTM-aware landing pages that matched the creative and narrative of specific Instagram campaigns. Users arriving from a specific post saw products and copy consistent with the ad they clicked.",
        },
      ],
    },
    results: [
      {
        metric: "312%",
        metricLabel: "conversion rate increase",
        body: "Overall store conversion rate went from 0.9% to 3.7% following the relaunch. Mobile conversion improved the most, rising from 0.6% to 2.9% as the new storefront removed the friction that was costing Ludic its Instagram audience.",
      },
      {
        metric: "4 hrs",
        metricLabel: "CSK collection sold out",
        body: "The Chennai Super Kings capsule collection launched on the new platform and sold out within 4 hours. The campaign page handled a 9x traffic spike without performance degradation.",
      },
      {
        metric: "2.1s",
        metricLabel: "page load time",
        body: "Average mobile page load time fell from 8.4 seconds to 2.1 seconds. Google PageSpeed mobile score improved from 31 to 89, directly contributing to improved organic rankings.",
      },
      {
        metric: "2.8x",
        metricLabel: "mobile revenue growth",
        body: "Mobile revenue grew 2.8x in the 3 months following launch as improved performance and UX converted the brand's social audience into paying customers at a dramatically higher rate.",
      },
    ],
    techStack: [
      { label: "Storefront", items: ["Next.js", "Shopify Storefront API", "GraphQL", "TypeScript"] },
      { label: "Commerce", items: ["Shopify", "Shopify Payments", "Custom metafields", "Webhooks"] },
      { label: "Performance", items: ["Vercel Edge", "WebP / AVIF", "ISR", "Lighthouse CI"] },
      { label: "Marketing", items: ["UTM tracking", "Meta Pixel", "Google Analytics 4", "Klaviyo"] },
    ],
    testimonial: {
      quote: "We went from being embarrassed to show people our website to using it as our main pitch in brand meetings. The CSK launch on the new platform was our biggest ever drop and it handled everything perfectly.",
      author: "Co-Founder",
      role: "Ludic.life",
    },
    relatedCaseStudies: [
      { label: "Stashly — Savings and fintech app", href: "/case-studies/stashly", tag: "Fintech" },
      { label: "Before You Buy — PropTech platform", href: "/case-studies/beforeyoubuy", tag: "PropTech" },
      { label: "Acquire.io — Customer engagement platform", href: "/case-studies/acquire", tag: "SaaS" },
    ],
    metaTitle: "Ludic Case Study — 312% Conversion Increase with Headless Shopify Rebuild",
    metaDescription: "How KivvaTech rebuilt Ludic's Shopify storefront on Next.js, tripling their conversion rate, achieving 2.1s load times, and delivering a sold-out CSK campaign launch.",
    metaKeywords: ["Shopify headless case study", "ecommerce performance", "Next.js Shopify", "Ludic sneakers", "fashion ecommerce development"],
    path: "/case-studies/ludic",
  },

  dexi: {
    slug: "dexi",
    industry: "Data & Analytics",
    industryHref: "/industries/data-analytics",
    badge: "Data SaaS",
    client: "Dexi.io",
    logo: "/logos/company-5.svg",
    title: "How Dexi.io Cut Cloud Execution Costs by 60% Without Sacrificing Scale",
    subtitle: "Rebuilt the robot builder UX, elastic execution layer, and BI connector suite for a cloud-native data extraction platform used by enterprises worldwide.",
    description:
      "Dexi.io is a cloud-based web data automation platform, part of the Engage3 group, that enables businesses to build extraction robots without writing code. Their three robot types (Extractor, Crawler, and Pipe) power data pipelines for analytics teams across retail, finance, and media. Despite strong market traction, rising cloud execution costs and a technically complex robot builder were limiting growth and customer satisfaction.",
    stats: [
      { value: "60%", label: "reduction in cloud execution costs" },
      { value: "40%", label: "faster robot build time" },
      { value: "15+", label: "BI connector integrations live" },
      { value: "99.7%", label: "job completion rate (from 94.2%)" },
    ],
    challenge: {
      overview:
        "Dexi.io's core robot builder worked but was intimidating for non-developer users, leading to high support ticket volumes and slow enterprise onboarding. Concurrently, running large numbers of extraction robots simultaneously on dedicated cloud instances was creating runaway infrastructure costs. And the BI integration layer was falling behind as Tableau and Power BI released new API versions that broke existing connectors.",
      points: [
        {
          title: "Robot builder too complex for business users",
          body: "The node-based builder required understanding of DOM structures, XPath, and CSS selectors to use effectively. Business analysts were opening support tickets for configurations that should be self-service.",
        },
        {
          title: "Cloud execution costs scaling faster than revenue",
          body: "Each robot ran on dedicated instances provisioned at job creation. Concurrent jobs during peak hours were spinning up hundreds of instances simultaneously, making infrastructure costs unpredictable.",
        },
        {
          title: "BI connectors failing on API changes",
          body: "Tableau, Power BI, and Looker connectors were built as one-off integrations with no shared abstraction layer. Every platform API update required individual fixes, creating a maintenance backlog.",
        },
        {
          title: "No job-level monitoring or recovery",
          body: "When long-running extraction jobs failed, there was no automatic retry logic. Failed jobs silently dropped data, which clients discovered only when their downstream dashboards showed gaps.",
        },
      ],
    },
    solution: {
      overview:
        "We redesigned the robot builder around non-developer workflows, replaced dedicated instance provisioning with an elastic Kubernetes-based execution pool, rebuilt the connector layer with a shared abstraction framework, and added comprehensive job monitoring with automatic recovery. The result was a platform that costs less to run and is faster for users to adopt.",
      steps: [
        {
          step: "01",
          title: "Simplified robot builder",
          body: "New drag-and-drop action palette with guided configuration for common patterns: table extraction, pagination handling, login flows, and form submission. Inline live preview shows extracted data as the robot is built, eliminating the guess-and-run cycle.",
        },
        {
          step: "02",
          title: "Elastic execution layer",
          body: "Kubernetes-based robot execution pool with autoscaling tied to queue depth rather than individual job creation. Spot instance integration on AWS reduced average execution cost per robot run by 60% compared to on-demand dedicated instances.",
        },
        {
          step: "03",
          title: "Connector abstraction framework",
          body: "Unified integration layer with standardised authentication, data mapping, and version management. New BI connectors for Tableau, Power BI, Looker, Redshift, Snowflake, and BigQuery built on this framework. API version changes now require a single update rather than individual fixes per connector.",
        },
        {
          step: "04",
          title: "Job monitoring and auto-recovery",
          body: "Per-job execution logs surfaced in the dashboard, real-time progress tracking, configurable retry on transient network failures, and escalation to human review for persistent failures. Clients receive alerts before data gaps appear in their dashboards.",
        },
        {
          step: "05",
          title: "Cost and performance analytics",
          body: "Per-robot cost tracking, execution time trends, data volume metrics, and quality scoring. Operations teams can identify which robots are consuming disproportionate resources and optimise or schedule them accordingly.",
        },
      ],
    },
    results: [
      {
        metric: "60%",
        metricLabel: "execution cost reduction",
        body: "Switching from dedicated instance provisioning to the elastic Kubernetes pool reduced cloud execution costs by 60% in the first billing cycle after migration. The savings funded further product development.",
      },
      {
        metric: "40%",
        metricLabel: "faster robot builds",
        body: "Business analyst users now build robots 40% faster on average following the UX redesign. Support ticket volume for robot configuration fell by 55% within 60 days of the new builder launching.",
      },
      {
        metric: "99.7%",
        metricLabel: "job completion rate",
        body: "Automatic retry with smart backoff lifted the job completion rate from 94.2% to 99.7%. Enterprise clients report virtually no unexplained data gaps in their downstream dashboards.",
      },
      {
        metric: "15+",
        metricLabel: "BI connectors live",
        body: "The connector marketplace now offers 15+ production-ready integrations maintained by the shared abstraction layer. Adding a new connector now takes days rather than weeks.",
      },
    ],
    techStack: [
      { label: "Frontend", items: ["React", "TypeScript", "D3.js", "Tailwind CSS"] },
      { label: "Execution", items: ["Kubernetes", "Docker", "Spot instances", "Queue workers"] },
      { label: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis"] },
      { label: "Integrations", items: ["Tableau API", "Power BI REST", "BigQuery", "Snowflake"] },
    ],
    testimonial: {
      quote: "Working with Kivva Tech was an absolute pleasure. They took the time to understand our business needs and delivered a platform that our customers and our finance team both love.",
      author: "Sofia Evlo",
      role: "Graphic Designer, Dexi.io",
    },
    relatedCaseStudies: [
      { label: "Import.io — Enterprise data platform", href: "/case-studies/import-io", tag: "Enterprise SaaS" },
      { label: "Acquire.io — Customer engagement platform", href: "/case-studies/acquire", tag: "SaaS" },
      { label: "Stashly — Savings and fintech app", href: "/case-studies/stashly", tag: "Fintech" },
    ],
    metaTitle: "Dexi.io Case Study — 60% Cloud Cost Reduction and 40% Faster Robot Builds",
    metaDescription: "How KivvaTech rebuilt Dexi.io's robot builder, elastic execution layer, and BI connector suite to cut cloud costs by 60% and improve job completion to 99.7%.",
    metaKeywords: ["Dexi.io case study", "web scraping platform", "cloud data extraction", "Kubernetes cost optimisation", "BI integration development"],
    path: "/case-studies/dexi",
  },

  acquire: {
    slug: "acquire",
    industry: "Customer Experience",
    industryHref: "/industries/saas",
    badge: "SaaS",
    client: "Acquire.io",
    logo: "/logos/acquire.svg",
    title: "How Acquire.io Scaled to Fortune 500 Clients with Rebuilt Cobrowse and AI Chat",
    subtitle: "Rebuilt the core cobrowse engine, AI chatbot, and video infrastructure for a unified customer engagement platform serving 25+ languages across global enterprise accounts.",
    description:
      "Acquire.io is a unified customer engagement platform combining live chat, cobrowse, video chat, AI chatbot, and SMS into a single agent workspace. Used by Fortune 500 companies including leading US financial institutions, Acquire.io needed to scale its core technical infrastructure to meet enterprise SLAs, expand AI chat capabilities, and deliver consistent video quality across varying network conditions worldwide.",
    stats: [
      { value: "60%", label: "reduction in first-response time" },
      { value: "40%", label: "support queries resolved by AI" },
      { value: "25+", label: "languages with full platform support" },
      { value: "3",   label: "Fortune 500 top-10 US banks as clients" },
    ],
    challenge: {
      overview:
        "Acquire.io had strong product-market fit and notable enterprise clients, but three core technical areas were creating friction at scale: the cobrowse engine used significant CPU on agent machines, degrading chat responsiveness; the chatbot could not handle multi-turn conversations or route to human agents with context intact; and video chat quality was inconsistent for international users on variable connections. Enterprise clients were requesting 25-language support that went far beyond what was operationally feasible with their existing i18n approach.",
      points: [
        {
          title: "Cobrowse engine creating CPU spikes on agent machines",
          body: "Screen synchronisation was rebuilding the full DOM on every update. During active cobrowse sessions, agent machines saw CPU usage spike to 80%+, causing the chat interface to stutter and degrading the experience for both agent and customer.",
        },
        {
          title: "Chatbot failing on multi-turn conversations",
          body: "The existing rule-based chatbot could handle simple FAQ queries but failed on anything requiring context from earlier in the conversation. Handoff to human agents lost all conversation context, forcing customers to repeat themselves.",
        },
        {
          title: "Video quality degrading on international connections",
          body: "WebRTC sessions between enterprise clients in Southeast Asia and North America were experiencing high packet loss, frozen frames, and dropped calls. No adaptive bitrate or regional TURN infrastructure was in place.",
        },
        {
          title: "i18n coverage too shallow for enterprise requirements",
          body: "Platform UI existed in 8 languages. Enterprise clients were requiring full coverage across 25 languages including Arabic (RTL), Japanese, Korean, and 6 European languages for global support operations.",
        },
      ],
    },
    solution: {
      overview:
        "We rebuilt four core systems in parallel: a CRDT-based cobrowse engine that transmits DOM deltas rather than full snapshots, an AI chatbot with intent recognition and CRM-integrated agent handoff, a WebRTC stack with adaptive bitrate and regional TURN infrastructure, and a scalable i18n pipeline covering 25 languages with RTL support. All four shipped within a 5-month engagement.",
      steps: [
        {
          step: "01",
          title: "CRDT-based cobrowse engine",
          body: "Replaced the full-DOM-sync approach with a Conflict-free Replicated Data Type (CRDT) model that transmits only DOM mutations over a WebRTC data channel. CPU usage during active cobrowse sessions fell by 75% on agent machines. Latency dropped from 400ms to under 60ms.",
        },
        {
          step: "02",
          title: "AI-powered chatbot engine",
          body: "Context-aware intent recognition with slot filling across conversation turns, trained on Acquire.io's client conversation history. Seamless CRM-integrated handoff to human agents that passes the full conversation transcript, intent summary, and customer record. Handles tier-1 queries autonomously with escalation paths for complex cases.",
        },
        {
          step: "03",
          title: "Adaptive WebRTC video infrastructure",
          body: "Dynamic bitrate adaptation based on measured packet loss and bandwidth, dropping gracefully from HD to SD to audio-only rather than dropping the call. Regional TURN relay servers deployed in Singapore, Frankfurt, and Ohio to serve global enterprise clients within acceptable RTT budgets.",
        },
        {
          step: "04",
          title: "25-language i18n platform",
          body: "Automated translation pipeline with professional review workflow, RTL layout support for Arabic and Hebrew, locale-aware date, number, and currency formatting, and a QA testing suite that runs the full UI in each locale before release. Chatbot content translated and intent-matched per language.",
        },
        {
          step: "05",
          title: "Enterprise analytics and compliance dashboard",
          body: "Agent performance metrics, CSAT scoring, session replay with PII masking, conversation-level analytics, and configurable routing rules. Compliance controls for SOC 2 and GDPR including data residency selection and automated retention policy enforcement.",
        },
      ],
    },
    results: [
      {
        metric: "60%",
        metricLabel: "first-response time reduction",
        body: "The AI chatbot handles tier-1 queries instantly, reducing average first-response time across all channels by 60%. Enterprise clients reported measurable improvement in CSAT scores within 30 days of deployment.",
      },
      {
        metric: "40%",
        metricLabel: "AI resolution rate",
        body: "40% of all inbound support queries are now fully resolved by the AI chatbot without agent involvement. Agent capacity freed by automation has been redirected to higher-value complex queries.",
      },
      {
        metric: "75%",
        metricLabel: "CPU reduction in cobrowse",
        body: "CRDT-based cobrowse engine reduced agent machine CPU during active sessions from 80%+ to under 20%, eliminating the performance degradation that was impacting chat quality during simultaneous sessions.",
      },
      {
        metric: "25+",
        metricLabel: "languages fully supported",
        body: "Full platform coverage across 25 languages opened enterprise contracts in markets where Acquire.io previously could not bid. Three top-10 US banks now use the platform for their global support operations.",
      },
    ],
    techStack: [
      { label: "Real-time", items: ["WebRTC", "CRDT sync", "TURN infrastructure", "WebSocket"] },
      { label: "AI / NLP", items: ["Python", "Intent recognition", "Slot filling", "CRM integration"] },
      { label: "Frontend", items: ["React", "TypeScript", "i18n / RTL", "Tailwind CSS"] },
      { label: "Infrastructure", items: ["AWS", "Multi-region", "Kubernetes", "Redis"] },
    ],
    testimonial: {
      quote: "KivvaTech took on some of the hardest engineering problems in our platform and delivered cleanly. The cobrowse rebuild alone changed the conversation we were having with enterprise procurement teams.",
      author: "VP of Engineering",
      role: "Acquire.io",
    },
    relatedCaseStudies: [
      { label: "Import.io — Enterprise data platform", href: "/case-studies/import-io", tag: "Enterprise SaaS" },
      { label: "Dexi.io — Data automation platform", href: "/case-studies/dexi", tag: "Data SaaS" },
      { label: "Before You Buy — PropTech platform", href: "/case-studies/beforeyoubuy", tag: "PropTech" },
    ],
    metaTitle: "Acquire.io Case Study — Fortune 500 Customer Engagement with Rebuilt Cobrowse and AI Chat",
    metaDescription: "How KivvaTech rebuilt Acquire.io's cobrowse engine, AI chatbot, WebRTC video infrastructure, and 25-language platform to serve Fortune 500 enterprise clients.",
    metaKeywords: ["Acquire.io case study", "cobrowse engineering", "AI chatbot development", "WebRTC platform", "enterprise customer engagement"],
    path: "/case-studies/acquire",
  },

  stashly: {
    slug: "stashly",
    industry: "Fintech",
    industryHref: "/industries/fintech",
    badge: "Fintech",
    client: "Stashly",
    logo: "/logos/company-8.webp",
    title: "How Stashly Helped 50,000+ Users Save More with Intelligent Automation",
    subtitle: "Built a bank-integrated savings automation engine, redesigned the mobile onboarding experience, and achieved SOC 2 Type II certification for a next-generation personal finance app.",
    description:
      "Stashly is a personal savings and financial automation platform designed for people who want to save consistently without having to think about it. The platform uses spending pattern analysis and rule-based automation to move money into goal-linked savings buckets at the right moments. KivvaTech was brought in to rebuild the bank integration layer, redesign the mobile app, and implement the compliance infrastructure needed for enterprise plan expansion.",
    stats: [
      { value: "50k+", label: "active users post-redesign launch" },
      { value: "2.4x",  label: "average savings rate increase for active users" },
      { value: "70%",   label: "improvement in onboarding completion" },
      { value: "SOC 2", label: "Type II certified" },
    ],
    challenge: {
      overview:
        "Stashly had strong concept validation and an engaged early user base, but three problems were preventing growth: bank integrations built on a single provider were creating data gaps and incorrect savings calculations; the mobile onboarding flow was losing 60% of users before they connected a bank account; and the planned enterprise tier required SOC 2 Type II certification before any corporate client would sign. The founding team needed a technical partner who could execute across all three in parallel.",
      points: [
        {
          title: "Single-provider bank integration creating data gaps",
          body: "Reliance on one data aggregator meant that when that provider had outages or data quality issues, Stashly's savings calculations were wrong. Some users saw incorrect balances trigger unintended automatic transfers, creating trust-damaging errors.",
        },
        {
          title: "60% drop-off during mobile onboarding",
          body: "The existing onboarding flow asked users to connect their bank account before showing them anything of value. The majority were abandoning before completing the connection, leaving Stashly with a large number of accounts with no linked data.",
        },
        {
          title: "Savings automation too rigid for real spending patterns",
          body: "Rule-based savings triggers were configured once during onboarding and never adapted. Users who set overly ambitious rules frequently overdrew their checking accounts, turning off their automations and going inactive.",
        },
        {
          title: "SOC 2 compliance gap blocking enterprise plan launch",
          body: "Corporate employers wanted to offer Stashly as an employee financial wellness benefit, but required SOC 2 Type II certification before any data sharing arrangement could proceed. Stashly had no compliance programme in place.",
        },
      ],
    },
    solution: {
      overview:
        "We rebuilt the bank integration layer with dual-provider redundancy, redesigned the mobile onboarding experience around progressive value delivery, added spending-aware automation that adapts to account balance before executing transfers, and implemented the full SOC 2 Type II control framework with third-party audit support. All four workstreams were delivered within a 6-month engagement.",
      steps: [
        {
          step: "01",
          title: "Dual-provider bank integration",
          body: "Primary integration via Plaid with Finicity as an automatic fallback for institutions where Plaid coverage is incomplete or experiencing degraded data quality. Transaction normalisation layer produces a consistent schema regardless of provider. Real-time balance checking before any automated transfer prevents overdrafts.",
        },
        {
          step: "02",
          title: "Redesigned mobile onboarding",
          body: "New onboarding sequence shows users a personalised savings projection and goal visualisation before asking for bank connection. Gamified progress indicators, skippable steps with later-completion prompts, and biometric authentication setup at the end rather than the beginning. Completion rate improved from 40% to 82%.",
        },
        {
          step: "03",
          title: "Adaptive savings automation engine",
          body: "Rule-based triggers enhanced with pre-execution balance checks, spending velocity analysis, and safe-to-transfer calculation. Automation pauses automatically when available balance falls below a configurable threshold and resumes when it recovers. Users receive a push notification before any transfer above their customised alert threshold.",
        },
        {
          step: "04",
          title: "SOC 2 Type II compliance programme",
          body: "Full control implementation across the SOC 2 security, availability, and confidentiality trust service criteria. Audit log infrastructure, access control review processes, penetration testing programme, and vendor security review workflow. Achieved certification with zero findings from the independent auditor.",
        },
        {
          step: "05",
          title: "Savings analytics and goal tracking",
          body: "Goal-linked savings progress visualisation, historical savings rate trends, spending pattern breakdown, and projected time-to-goal estimates. Personalised insights surfaced at the right moment: when a user is ahead of their goal or when a spending category is trending up.",
        },
      ],
    },
    results: [
      {
        metric: "2.4x",
        metricLabel: "savings rate increase",
        body: "Active users on the new adaptive automation save 2.4x more per month on average than users on the previous rigid rule system. The pre-transfer balance check eliminated overdraft-related automation shutdowns almost entirely.",
      },
      {
        metric: "70%",
        metricLabel: "onboarding improvement",
        body: "Onboarding completion rate improved from 40% to 82% following the redesign. The incremental value-first approach converted significantly more signups into active users with linked bank accounts.",
      },
      {
        metric: "50k+",
        metricLabel: "active users",
        body: "Post-redesign launch drove 50,000+ active users in the first 6 months as improved activation rates compounded with growth in new signups from the employer partnership channel.",
      },
      {
        metric: "SOC 2",
        metricLabel: "Type II certified",
        body: "SOC 2 Type II certification with zero findings unlocked the enterprise benefits channel. Three corporate employer partnerships were signed within 90 days of certification, adding a recurring B2B revenue stream.",
      },
    ],
    techStack: [
      { label: "Mobile", items: ["React Native", "Expo", "Biometrics", "Push notifications"] },
      { label: "Banking", items: ["Plaid API", "Finicity", "Transaction normalisation", "Real-time balance"] },
      { label: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "Temporal workflows"] },
      { label: "Compliance", items: ["SOC 2 Type II", "AES-256", "Audit logging", "PCI DSS scoping"] },
    ],
    testimonial: {
      quote: "KivvaTech delivered across every workstream simultaneously without dropping a stitch. The SOC 2 certification alone would have taken us 18 months without their help. They did it in 5.",
      author: "CEO",
      role: "Stashly",
    },
    relatedCaseStudies: [
      { label: "Acquire.io — Customer engagement platform", href: "/case-studies/acquire", tag: "SaaS" },
      { label: "Ludic.life — eCommerce storefront", href: "/case-studies/ludic", tag: "eCommerce" },
      { label: "Before You Buy — PropTech platform", href: "/case-studies/beforeyoubuy", tag: "PropTech" },
    ],
    metaTitle: "Stashly Case Study — 50k Users, 2.4x Savings Rate, SOC 2 Certified",
    metaDescription: "How KivvaTech rebuilt Stashly's bank integrations, redesigned mobile onboarding, built adaptive savings automation, and delivered SOC 2 Type II certification.",
    metaKeywords: ["Stashly case study", "fintech development", "savings automation", "SOC 2 certification", "mobile banking app development"],
    path: "/case-studies/stashly",
  },

};

// ─── Listing page metadata ────────────────────────────────────────────────────

export const CASE_STUDIES_LIST = Object.values(CASE_STUDIES);

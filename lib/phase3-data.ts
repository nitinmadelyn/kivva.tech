/**
 * Phase 3 page content — AI Solutions sub-pages and Hire Developer role pages.
 */

import type { SubPageConfig } from "@/lib/phase2-data";

// ─── Shared icon paths ────────────────────────────────────────────────────────

const IC = {
  brain:    "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  bolt:     "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  code:     "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
  cloud:    "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15z",
  robot:    "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25zm.75-12h9v9h-9v-9z",
  chart:    "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z",
  database: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
  gear:     "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  link:     "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244",
  layers:   "M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3",
  chat:     "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
  shield:   "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  check:    "M4.5 12.75l6 6 9-13.5",
  eye:      "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  globe:    "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
  users:    "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z",
  clock:    "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
  server:   "M21.75 17.25v.75a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25v-.75m19.5 0a2.25 2.25 0 0 0 2.25-2.25v-1.5a2.25 2.25 0 0 0-2.25-2.25m-19.5 0a2.25 2.25 0 0 0-2.25 2.25v1.5A2.25 2.25 0 0 0 2.25 17.25m19.5 0H2.25",
};

// ─── AI Solutions sub-pages ───────────────────────────────────────────────────

export const AI_SOLUTIONS_PAGES: Record<string, SubPageConfig> = {

  conversational: {
    section: "AI Solutions",
    sectionHref: "/ai-solutions",
    badge: "AI Solutions",
    title: "Conversational AI",
    subtitle: "Chatbots and voice assistants that actually understand your customers.",
    description:
      "We build conversational AI systems that go beyond scripted flows — context-aware, memory-enabled chatbots and voice assistants that handle complex queries, escalate intelligently, and integrate with your CRM and support stack.",
    stats: [
      { value: "60%", label: "Reduction in support tickets" },
      { value: "24/7", label: "Always available" },
      { value: "95%+", label: "Intent accuracy" },
      { value: "2 weeks", label: "To working prototype" },
    ],
    capabilities: [
      { icon: IC.chat, title: "LLM-Powered Chatbots", body: "Chatbots built on Claude, GPT-4, or Gemini with your knowledge base, brand voice, and escalation logic — not pre-built templates." },
      { icon: IC.globe, title: "Voice AI & IVR", body: "Conversational voice systems for customer service, appointment booking, and internal helpdesk using Deepgram, ElevenLabs, and Twilio." },
      { icon: IC.bolt, title: "Omnichannel Deployment", body: "Deploy the same assistant across your website, WhatsApp, Slack, Teams, and mobile app — with conversation continuity across channels." },
      { icon: IC.database, title: "Knowledge Base Integration", body: "Connect your assistant to Confluence, Notion, SharePoint, and product documentation via RAG — so answers are always accurate and up-to-date." },
      { icon: IC.link, title: "CRM & Helpdesk Integration", body: "Auto-create tickets in Zendesk, Jira, or Salesforce. Update contact records. Trigger workflows — all from conversation." },
      { icon: IC.chart, title: "Analytics & Improvement Loop", body: "Conversation dashboards, unhandled query reports, and CSAT tracking. We instrument every assistant for continuous improvement." },
    ],
    process: [
      { step: "01", title: "Use case scoping", body: "Define the primary use cases, success metrics, and escalation policy before any build begins." },
      { step: "02", title: "Knowledge base prep", body: "Ingest and structure your content. Build the retrieval layer and test retrieval accuracy." },
      { step: "03", title: "Assistant build & test", body: "Build conversation flows, tool integrations, and edge case handling. Tested with real queries before launch." },
      { step: "04", title: "Deploy & improve", body: "Production launch, analytics instrumentation, and monthly improvement sprints based on real conversation data." },
    ],
    techStack: [
      { label: "LLMs", items: ["Claude 3.5", "GPT-4o", "Gemini 1.5", "Llama 3"] },
      { label: "Voice", items: ["Deepgram", "ElevenLabs", "Twilio", "Whisper"] },
      { label: "Frameworks", items: ["LangChain", "LlamaIndex", "Rasa", "Botpress"] },
      { label: "Channels", items: ["Web widget", "WhatsApp", "Slack", "Teams", "Twilio"] },
    ],
    relatedPages: [
      { label: "AI Integration & Assistants", href: "/ai-engineering/integration", description: "Embed into your existing tools" },
      { label: "RAG & Knowledge Systems", href: "/ai-engineering/rag", description: "Knowledge retrieval for your assistant" },
      { label: "Agentic AI & Multi-Agent", href: "/ai-engineering/agentic", description: "Assistants that take action" },
    ],
    cta: { title: "Ready to give your customers an AI assistant that works?", subtitle: "We'll scope the build and show you a working prototype in two weeks." },
    metaTitle: "Conversational AI Development",
    metaDescription: "KivvaTech builds LLM-powered chatbots and voice AI assistants — deployed across web, WhatsApp, and Slack, integrated with your CRM and knowledge base.",
    metaKeywords: ["conversational AI", "AI chatbot development", "voice AI assistant", "customer service AI", "LLM chatbot"],
    path: "/ai-solutions/conversational",
  },

  predictive: {
    section: "AI Solutions",
    sectionHref: "/ai-solutions",
    badge: "AI Solutions",
    title: "Predictive Analytics",
    subtitle: "Know what happens next. Act before your competitors do.",
    description:
      "We build predictive models that turn your historical data into forward-looking intelligence — demand forecasting, churn prediction, fraud detection, and customer lifetime value models deployed directly into your operational systems.",
    stats: [
      { value: "35%", label: "Average forecast accuracy improvement" },
      { value: "28%", label: "Avg churn reduction" },
      { value: "6 weeks", label: "Model to production" },
      { value: "100%", label: "IP ownership" },
    ],
    capabilities: [
      { icon: IC.chart, title: "Demand Forecasting", body: "Time-series models for inventory, staffing, and capacity planning. Handles seasonality, promotions, and external signals." },
      { icon: IC.users, title: "Churn Prediction", body: "Identify at-risk customers 30–90 days before they leave. Trigger automated retention interventions at the right moment." },
      { icon: IC.shield, title: "Fraud & Anomaly Detection", body: "Real-time transaction scoring, behaviour anomaly detection, and rule-based hybrid systems for financial and e-commerce platforms." },
      { icon: IC.bolt, title: "Customer Lifetime Value", body: "CLV models that segment customers by value, predict future spend, and inform acquisition and retention budget allocation." },
      { icon: IC.brain, title: "Price Optimisation", body: "Dynamic pricing models that maximise revenue while maintaining competitive positioning and margin targets." },
      { icon: IC.gear, title: "Operational Predictive Maintenance", body: "IoT sensor data analysis and failure prediction for manufacturing, logistics, and infrastructure assets." },
    ],
    process: [
      { step: "01", title: "Problem definition & data audit", body: "Define the prediction target, identify data sources, and assess data quality and volume." },
      { step: "02", title: "Baseline model", body: "Establish a simple baseline and benchmark. Understand feature importance before adding complexity." },
      { step: "03", title: "Model development & validation", body: "Train, tune, and evaluate against holdout data and business-relevant metrics." },
      { step: "04", title: "Production integration", body: "Serve predictions via API, embed into your operational systems, and monitor drift over time." },
    ],
    techStack: [
      { label: "ML", items: ["scikit-learn", "XGBoost", "LightGBM", "PyTorch"] },
      { label: "Time Series", items: ["Prophet", "NeuralProphet", "Nixtla", "Statsmodels"] },
      { label: "MLOps", items: ["MLflow", "Weights & Biases", "SageMaker", "Vertex AI"] },
      { label: "Data", items: ["Snowflake", "BigQuery", "dbt", "Spark"] },
    ],
    relatedPages: [
      { label: "Custom AI Development", href: "/ai-engineering/custom-dev", description: "Custom model training for your domain" },
      { label: "Data Engineering", href: "/services/data-engineering", description: "Pipelines that feed your models" },
      { label: "AI Decision Intelligence", href: "/ai-solutions/decision", description: "Act on predictions automatically" },
    ],
    cta: { title: "What would you do differently if you could predict it?", subtitle: "Tell us the business problem and we'll tell you if ML can solve it." },
    metaTitle: "Predictive Analytics & ML Models",
    metaDescription: "KivvaTech builds predictive ML models for demand forecasting, churn prediction, fraud detection, and customer LTV — deployed to production, monitored continuously.",
    metaKeywords: ["predictive analytics", "ML model development", "demand forecasting", "churn prediction model", "fraud detection AI"],
    path: "/ai-solutions/predictive",
  },

  decision: {
    section: "AI Solutions",
    sectionHref: "/ai-solutions",
    badge: "AI Solutions",
    title: "AI Decision Intelligence",
    subtitle: "Real-time recommendations. Decisions made at machine speed.",
    description:
      "We build AI-powered decision engines that analyse data, apply business rules, and deliver real-time recommendations — directly into your applications, workflows, and operational systems.",
    capabilities: [
      { icon: IC.bolt, title: "Real-Time Recommendation Engines", body: "Product recommendations, content ranking, and next-best-action systems that process millions of events per second with sub-50ms latency." },
      { icon: IC.brain, title: "Decision Automation", body: "Automated approval workflows, credit decisioning, and operational rules engines that combine ML scores with business logic." },
      { icon: IC.chart, title: "A/B Testing Infrastructure", body: "Feature flags, experiment management, and statistical significance testing — so every decision change is validated before full rollout." },
      { icon: IC.layers, title: "Multi-Criteria Optimisation", body: "Optimisation models that balance competing objectives — margin, conversion, customer satisfaction, and inventory — simultaneously." },
      { icon: IC.shield, title: "Explainability & Audit Trails", body: "Every AI decision logged with the features, weights, and rules that drove it. Required for regulated industries and internal governance." },
      { icon: IC.gear, title: "Human-in-the-Loop Override", body: "Configurable confidence thresholds route low-confidence decisions to human review without blocking the high-confidence majority." },
    ],
    process: [
      { step: "01", title: "Decision mapping", body: "Identify which decisions are highest volume, highest cost, and most amenable to automation." },
      { step: "02", title: "Model & rules design", body: "Design the ML model, business rules layer, and the confidence thresholds that govern automation vs human review." },
      { step: "03", title: "Build & shadow mode", body: "Build in shadow mode — AI makes decisions alongside humans. Compare outcomes before cutting over." },
      { step: "04", title: "Production & governance", body: "Full production rollout with audit logging, monitoring, and governance dashboards." },
    ],
    relatedPages: [
      { label: "Predictive Analytics", href: "/ai-solutions/predictive", description: "The models that power your decisions" },
      { label: "AI Automation & Workflows", href: "/ai-engineering/automation", description: "Act on decisions automatically" },
      { label: "Agentic AI", href: "/ai-engineering/agentic", description: "Agents that decide and act" },
    ],
    cta: { title: "Which decisions in your business should AI be making?", subtitle: "Book a discovery call and we'll scope the decision intelligence opportunity." },
    metaTitle: "AI Decision Intelligence",
    metaDescription: "KivvaTech builds real-time AI recommendation engines and decision automation systems — combining ML predictions with business rules at machine speed.",
    metaKeywords: ["AI decision intelligence", "recommendation engine", "decision automation", "AI decisioning system", "real-time ML recommendations"],
    path: "/ai-solutions/decision",
  },

  "custom-models": {
    section: "AI Solutions",
    sectionHref: "/ai-solutions",
    badge: "AI Solutions",
    title: "Custom AI Models",
    subtitle: "Models trained on your data. Owned entirely by you.",
    description:
      "Generic foundation models give everyone the same capabilities. Custom models trained on your proprietary data give you a durable competitive advantage — higher accuracy, lower cost per inference, and IP that belongs to you.",
    stats: [
      { value: "40%", label: "Better accuracy vs generic models" },
      { value: "80%", label: "Inference cost reduction" },
      { value: "100%", label: "IP ownership" },
      { value: "4 weeks", label: "To production model" },
    ],
    capabilities: [
      { icon: IC.brain, title: "LLM Fine-Tuning", body: "Fine-tune Llama 3, Mistral, or Phi-3 on your domain content, style guides, and workflows. Deploy privately with no API cost." },
      { icon: IC.eye, title: "Computer Vision Models", body: "Custom image classification, object detection, segmentation, and OCR models for quality control, medical imaging, and document analysis." },
      { icon: IC.chart, title: "NLP & Text Classification", body: "Custom text classifiers, named entity recognition, sentiment models, and intent detection — tuned for your vocabulary and domain." },
      { icon: IC.database, title: "Training Data Curation", body: "Labelling pipelines, data augmentation, and synthetic data generation to build the dataset your model needs." },
      { icon: IC.gear, title: "Model Compression & Optimisation", body: "Quantisation, distillation, and pruning to reduce model size and inference cost — without meaningful accuracy loss." },
      { icon: IC.server, title: "Private Deployment", body: "Self-hosted on your cloud account or on-premises. Zero data leaving your infrastructure. Full compliance with data residency requirements." },
    ],
    process: [
      { step: "01", title: "Use case & data review", body: "Define what the model needs to do, review your data, and determine whether fine-tuning or custom training is the right path." },
      { step: "02", title: "Data preparation", body: "Clean, label, and structure your training dataset. Establish evaluation benchmarks." },
      { step: "03", title: "Training & evaluation", body: "Train, evaluate, and iterate against your benchmarks until accuracy targets are met." },
      { step: "04", title: "Production deployment", body: "Optimised model served via your infrastructure with monitoring and retraining pipeline." },
    ],
    techStack: [
      { label: "Frameworks", items: ["PyTorch", "Hugging Face", "Axolotl", "LLaMA Factory"] },
      { label: "Models", items: ["Llama 3", "Mistral", "Phi-3", "Custom architectures"] },
      { label: "Infra", items: ["A100/H100 GPUs", "AWS SageMaker", "Azure ML", "GCP Vertex AI"] },
      { label: "Serving", items: ["vLLM", "TGI", "Triton", "ONNX Runtime"] },
    ],
    relatedPages: [
      { label: "AI Infrastructure & Deployment", href: "/ai-engineering/infrastructure", description: "Host your model at scale" },
      { label: "Data Engineering for AI", href: "/ai-engineering/data", description: "Training data pipelines" },
      { label: "RAG & Knowledge Systems", href: "/ai-engineering/rag", description: "Combine with retrieval for better accuracy" },
    ],
    cta: { title: "Ready to build a model that gives you a real competitive edge?", subtitle: "Tell us your use case and we'll scope the data requirements and timeline." },
    metaTitle: "Custom AI Model Development",
    metaDescription: "KivvaTech builds custom AI models — LLM fine-tuning, computer vision, NLP classifiers — trained on your data, privately deployed, owned by you.",
    metaKeywords: ["custom AI model", "LLM fine-tuning", "custom machine learning model", "private AI model", "AI model training"],
    path: "/ai-solutions/custom-models",
  },

  assistants: {
    section: "AI Solutions",
    sectionHref: "/ai-solutions",
    badge: "AI Solutions",
    title: "AI Assistants & Copilots",
    subtitle: "Intelligent assistants embedded where your team works.",
    description:
      "We build AI copilots and assistants that sit inside your product or internal tools — helping users get work done faster, reducing errors, and surfacing information they would otherwise miss.",
    capabilities: [
      { icon: IC.robot, title: "Product Copilots", body: "AI assistants embedded in your SaaS product UI — natural language interfaces, smart suggestions, and proactive insights that increase user retention." },
      { icon: IC.chat, title: "Internal Knowledge Assistants", body: "Chat interfaces over your internal documentation, policies, and systems — replacing hours of searching with a single question." },
      { icon: IC.code, title: "Code & Developer Assistants", body: "Custom coding assistants trained on your codebase, standards, and patterns — accelerating developer velocity on your specific stack." },
      { icon: IC.bolt, title: "Sales & CRM Copilots", body: "AI that summarises call transcripts, drafts follow-up emails, scores leads, and surfaces next-best actions — directly in Salesforce or HubSpot." },
      { icon: IC.layers, title: "Workflow Automation Triggers", body: "Assistants that don't just answer — they act. Create tickets, update records, send messages, and trigger workflows from a single instruction." },
      { icon: IC.shield, title: "Access-Controlled Knowledge", body: "Document-level permissions enforced at retrieval time. Users only see answers grounded in content they're authorised to access." },
    ],
    process: [
      { step: "01", title: "Scope & personas", body: "Define who uses the assistant, what tasks it handles, and what success looks like for each user type." },
      { step: "02", title: "Knowledge base & tools", body: "Ingest your content, connect your APIs, and define what actions the assistant can take." },
      { step: "03", title: "Build & evaluate", body: "Build, test against real user queries, and tune response quality, tone, and tool use." },
      { step: "04", title: "Embed & improve", body: "Integrate into your product or tools, monitor usage, and run improvement sprints monthly." },
    ],
    techStack: [
      { label: "LLMs", items: ["Claude 3.5 Sonnet", "GPT-4o", "Gemini 1.5"] },
      { label: "Frameworks", items: ["LangChain", "LlamaIndex", "Vercel AI SDK"] },
      { label: "Vector Stores", items: ["Pinecone", "Weaviate", "pgvector"] },
      { label: "Deployment", items: ["Next.js", "Node.js", "AWS Lambda", "Vercel"] },
    ],
    relatedPages: [
      { label: "Conversational AI", href: "/ai-solutions/conversational", description: "Customer-facing chat assistants" },
      { label: "RAG & Knowledge Systems", href: "/ai-engineering/rag", description: "Knowledge retrieval that powers your assistant" },
      { label: "AI Integration & Assistants", href: "/ai-engineering/integration", description: "Embed AI into your existing tools" },
    ],
    cta: { title: "Which workflow should your team have an AI copilot for?", subtitle: "Book a call and we'll design the right assistant for your use case." },
    metaTitle: "AI Assistants & Copilots",
    metaDescription: "KivvaTech builds AI copilots and assistants embedded in your product and internal tools — knowledge assistants, sales copilots, and workflow automation.",
    metaKeywords: ["AI copilot", "AI assistant development", "product AI assistant", "internal knowledge assistant", "sales AI copilot"],
    path: "/ai-solutions/assistants",
  },
};

// ─── Hire Developer role pages ────────────────────────────────────────────────

export interface HireDevRole {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  stats: Array<{ value: string; label: string }>;
  skills: Array<{ category: string; items: string[] }>;
  whatTheyDo: Array<{ title: string; body: string }>;
  hiringProcess: Array<{ step: string; title: string; body: string }>;
  engagementModels: Array<{ name: string; tag: string | null; points: string[] }>;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  path: string;
}

export const HIRE_DEV_ROLES: Record<string, HireDevRole> = {

  "ai-ml-engineers": {
    slug: "ai-ml-engineers",
    badge: "Most Popular",
    title: "Hire AI / ML Engineers",
    subtitle: "LLMs, RAG, agents, and production ML — specialists who ship.",
    description:
      "Our AI/ML engineers have shipped production systems across LLM applications, RAG pipelines, agentic workflows, computer vision, and classical ML. Pre-vetted through technical screening — not just CV review.",
    stats: [
      { value: "5 days", label: "To onboard" },
      { value: "40–60%", label: "Cost vs local hiring" },
      { value: "72h", label: "Profiles delivered" },
      { value: "360+", label: "Completed projects" },
    ],
    skills: [
      { category: "LLM & Generative AI", items: ["LangChain", "LlamaIndex", "RAG", "Fine-tuning", "Prompt engineering", "LangGraph"] },
      { category: "ML & Deep Learning", items: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "XGBoost"] },
      { category: "AI Infrastructure", items: ["MLflow", "Weights & Biases", "SageMaker", "Vertex AI", "vLLM", "Triton"] },
      { category: "Data & Vector", items: ["Pinecone", "Weaviate", "pgvector", "Spark", "dbt", "Airflow"] },
    ],
    whatTheyDo: [
      { title: "Build LLM applications", body: "Design and deploy LLM-powered features — chatbots, copilots, document analysis, and code generation systems." },
      { title: "Design RAG pipelines", body: "Build retrieval-augmented generation systems with vector stores, hybrid search, and evaluation frameworks." },
      { title: "Train and fine-tune models", body: "Fine-tune open-source models on your domain data. Build training pipelines, run evals, and deploy to production." },
      { title: "Deploy ML to production", body: "Own the full ML lifecycle — from model development to serving infrastructure, monitoring, and retraining." },
    ],
    hiringProcess: [
      { step: "01", title: "Share requirements", body: "Tell us the role, stack, and timeline. Takes 10 minutes." },
      { step: "02", title: "Receive profiles", body: "2–3 pre-vetted candidates delivered within 72 hours." },
      { step: "03", title: "Interview & select", body: "Technical interview and code review on your schedule." },
      { step: "04", title: "Onboard in 5 days", body: "Contracts signed, access provisioned, ready for sprint one." },
    ],
    engagementModels: [
      { name: "Full-time dedicated", tag: "Most popular", points: ["40h/week", "Your tools and timezone", "Direct Slack/Teams access", "Replace within 2 weeks if needed"] },
      { name: "Part-time / Fractional", tag: null, points: ["20h/week", "Focused on specific deliverables", "Scales to full-time easily", "Flexible scheduling"] },
      { name: "Project-based", tag: null, points: ["Fixed scope and timeline", "Milestone payments", "Source code handoff", "Post-launch support available"] },
    ],
    metaTitle: "Hire AI / ML Engineers",
    metaDescription: "Hire pre-vetted AI and ML engineers — LLMs, RAG, agents, fine-tuning, and production ML. Onboard in 5 days. 40–60% cost saving vs local hiring.",
    metaKeywords: ["hire AI engineers", "hire ML engineers", "AI developer hire", "LLM engineer", "machine learning developer"],
    path: "/hire-developers/ai-ml-engineers",
  },

  "data-engineers": {
    slug: "data-engineers",
    badge: "Data Engineering",
    title: "Hire Data Engineers",
    subtitle: "Pipelines, warehouses, and lakehouses — built to last.",
    description:
      "Our data engineers design and build high-volume ingestion pipelines, cloud data warehouses, and streaming architectures. Every engineer has production experience with the tools your stack uses — not tutorial-level familiarity.",
    stats: [
      { value: "5 days", label: "To onboard" },
      { value: "40–60%", label: "Cost vs local hiring" },
      { value: "72h", label: "Profiles delivered" },
      { value: "15+", label: "Years experience" },
    ],
    skills: [
      { category: "Processing", items: ["Apache Spark", "Apache Flink", "dbt", "Databricks", "Pandas"] },
      { category: "Warehouses", items: ["Snowflake", "BigQuery", "Redshift", "DuckDB", "Delta Lake"] },
      { category: "Streaming", items: ["Apache Kafka", "AWS Kinesis", "Confluent", "Pulsar"] },
      { category: "Orchestration", items: ["Airflow", "Prefect", "Dagster", "AWS Glue", "dbt Cloud"] },
    ],
    whatTheyDo: [
      { title: "Build ingestion pipelines", body: "Ingest from APIs, databases, event streams, and files into your data warehouse or lakehouse." },
      { title: "Design warehouse schemas", body: "Data modelling, partitioning strategy, and query optimisation for analytical workloads." },
      { title: "Own data quality", body: "Implement validation frameworks, freshness monitoring, and schema drift detection." },
      { title: "Enable analytics teams", body: "Build dbt models, semantic layers, and data marts that non-engineers can use confidently." },
    ],
    hiringProcess: [
      { step: "01", title: "Share requirements", body: "Stack, scale, and team composition you need." },
      { step: "02", title: "Receive profiles", body: "2–3 pre-vetted data engineers in 72 hours." },
      { step: "03", title: "Technical interview", body: "Pipeline design review and SQL/Spark assessment." },
      { step: "04", title: "Onboard in 5 days", body: "Contracts, access, and first sprint ready." },
    ],
    engagementModels: [
      { name: "Full-time dedicated", tag: "Most popular", points: ["40h/week", "Embedded in your data team", "Daily standups", "Scales with your roadmap"] },
      { name: "Part-time / Fractional", tag: null, points: ["20h/week", "Ongoing maintenance and improvements", "Cost-effective for smaller pipelines", "Scale up easily"] },
      { name: "Project-based", tag: null, points: ["Migration or build projects", "Fixed timeline and cost", "Full documentation and handoff", "Post-launch support"] },
    ],
    metaTitle: "Hire Data Engineers",
    metaDescription: "Hire pre-vetted data engineers — Spark, dbt, Snowflake, Kafka, and Airflow. Onboard in 5 days. 40–60% cost saving vs local hiring.",
    metaKeywords: ["hire data engineers", "data engineer hire", "Snowflake developer", "dbt developer", "Apache Spark engineer"],
    path: "/hire-developers/data-engineers",
  },

  "cloud-specialists": {
    slug: "cloud-specialists",
    badge: "Cloud",
    title: "Hire Cloud Specialists",
    subtitle: "AWS, Azure, GCP. Infrastructure that scales reliably.",
    description:
      "Our cloud specialists design and operate production infrastructure — Kubernetes clusters, Terraform IaC, cost-optimised multi-account architectures, and security-hardened environments. Certified across major cloud platforms.",
    stats: [
      { value: "5 days", label: "To onboard" },
      { value: "35%", label: "Avg cloud cost reduction" },
      { value: "72h", label: "Profiles delivered" },
      { value: "AWS / Azure / GCP", label: "Certifications" },
    ],
    skills: [
      { category: "Cloud Platforms", items: ["AWS", "Azure", "GCP", "Multi-cloud"] },
      { category: "IaC", items: ["Terraform", "AWS CDK", "Pulumi", "Ansible", "CloudFormation"] },
      { category: "Containers", items: ["Kubernetes", "Docker", "Helm", "ArgoCD", "EKS/GKE/AKS"] },
      { category: "Security & Networking", items: ["VPC design", "IAM", "GuardDuty", "WAF", "PrivateLink"] },
    ],
    whatTheyDo: [
      { title: "Design cloud architecture", body: "Well-Architected reviews, landing zone design, and multi-account strategy." },
      { title: "Write infrastructure as code", body: "Terraform and CDK modules that make every environment reproducible." },
      { title: "Manage Kubernetes clusters", body: "EKS/GKE setup, cluster upgrades, GitOps workflows, and workload management." },
      { title: "Optimise cloud costs", body: "Right-sizing, reserved instance strategy, and Spot workload migration." },
    ],
    hiringProcess: [
      { step: "01", title: "Share requirements", body: "Cloud provider, current stack, and architecture challenges." },
      { step: "02", title: "Receive profiles", body: "Certified cloud specialists delivered in 72 hours." },
      { step: "03", title: "Technical assessment", body: "Architecture review session and IaC code review." },
      { step: "04", title: "Onboard in 5 days", body: "Access provisioned and first infrastructure task scoped." },
    ],
    engagementModels: [
      { name: "Full-time dedicated", tag: "Most popular", points: ["Full ownership of cloud infra", "On-call support available", "Proactive cost and security reviews", "Embedded in your team"] },
      { name: "Part-time / Fractional", tag: null, points: ["Ongoing infra management", "Ideal for stable environments", "Cost-effective coverage", "Available for incidents"] },
      { name: "Project-based", tag: null, points: ["Migration projects", "Well-Architected reviews", "Kubernetes setup", "Security hardening"] },
    ],
    metaTitle: "Hire Cloud Specialists",
    metaDescription: "Hire pre-vetted cloud specialists — AWS, Azure, GCP, Kubernetes, and Terraform. Onboard in 5 days. Certified engineers at 40–60% lower cost.",
    metaKeywords: ["hire cloud engineers", "AWS specialist hire", "Kubernetes engineer", "Terraform developer", "cloud architect hire"],
    path: "/hire-developers/cloud-specialists",
  },

  "devops-engineers": {
    slug: "devops-engineers",
    badge: "DevOps",
    title: "Hire DevOps Engineers",
    subtitle: "CI/CD, SRE, and platform engineering — done right.",
    description:
      "Our DevOps engineers build the deployment pipelines, observability stacks, and internal platforms that let your product teams ship fast and safely. They own the developer experience — not just the tooling.",
    stats: [
      { value: "5 days", label: "To onboard" },
      { value: "4x", label: "Deployment frequency increase" },
      { value: "72h", label: "Profiles delivered" },
      { value: "DORA", label: "Metrics focus" },
    ],
    skills: [
      { category: "CI/CD", items: ["GitHub Actions", "GitLab CI", "Jenkins", "Buildkite", "CircleCI"] },
      { category: "GitOps", items: ["ArgoCD", "Flux", "Helm", "Kustomize", "Skaffold"] },
      { category: "Monitoring", items: ["Prometheus", "Grafana", "Datadog", "OpenTelemetry", "Sentry"] },
      { category: "Security", items: ["Snyk", "Trivy", "Checkov", "Vault", "OWASP ZAP"] },
    ],
    whatTheyDo: [
      { title: "Build CI/CD pipelines", body: "Fast, reliable pipelines with automated testing, security scanning, and one-click deployments." },
      { title: "Implement GitOps", body: "Declarative, auditable deployments with ArgoCD or Flux across all environments." },
      { title: "Own observability", body: "Metrics, logs, traces, SLOs, and on-call processes that reduce MTTR." },
      { title: "Build internal platforms", body: "Self-service infrastructure and golden paths that eliminate developer toil." },
    ],
    hiringProcess: [
      { step: "01", title: "Share requirements", body: "Current tools, deployment frequency, and pain points." },
      { step: "02", title: "Receive profiles", body: "DevOps engineers with your stack experience in 72 hours." },
      { step: "03", title: "Technical interview", body: "Pipeline review and architecture discussion." },
      { step: "04", title: "Onboard in 5 days", body: "Repo access provisioned, first sprint scoped." },
    ],
    engagementModels: [
      { name: "Full-time dedicated", tag: "Most popular", points: ["Full platform ownership", "On-call support", "Continuous pipeline improvements", "Embedded in your team"] },
      { name: "Part-time / Fractional", tag: null, points: ["Pipeline maintenance and improvements", "20h/week", "Scales to full-time", "Good for stable platforms"] },
      { name: "Project-based", tag: null, points: ["CI/CD migrations", "Kubernetes setup", "SLO implementation", "Security pipeline hardening"] },
    ],
    metaTitle: "Hire DevOps Engineers",
    metaDescription: "Hire pre-vetted DevOps engineers — CI/CD, GitOps, Kubernetes, observability, and SRE. Onboard in 5 days. 40–60% cost saving vs local hiring.",
    metaKeywords: ["hire DevOps engineers", "DevOps developer hire", "CI/CD engineer", "SRE hire", "platform engineer hire"],
    path: "/hire-developers/devops-engineers",
  },

  "full-stack-developers": {
    slug: "full-stack-developers",
    badge: "Full Stack",
    title: "Hire Full Stack Developers",
    subtitle: "React, Next.js, Node.js, PostgreSQL — production-grade from day one.",
    description:
      "Our full-stack developers own the complete delivery — from API design and database schema to React UI and deployment. TypeScript-first, test-driven, and fluent in the patterns that scale.",
    stats: [
      { value: "5 days", label: "To onboard" },
      { value: "40–60%", label: "Cost vs local hiring" },
      { value: "72h", label: "Profiles delivered" },
      { value: "T5", label: "TypeScript, Next.js, Node" },
    ],
    skills: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Zustand"] },
      { category: "Backend", items: ["Node.js", "Express", "Fastify", "tRPC", "GraphQL", "REST"] },
      { category: "Database", items: ["PostgreSQL", "Prisma", "Drizzle", "Redis", "MongoDB", "Supabase"] },
      { category: "DevOps", items: ["Docker", "GitHub Actions", "Vercel", "AWS", "Playwright"] },
    ],
    whatTheyDo: [
      { title: "Build web applications", body: "Full-stack Next.js and React applications — from greenfield builds to feature work on existing codebases." },
      { title: "Design APIs", body: "REST and GraphQL APIs with OpenAPI documentation, authentication, and rate limiting." },
      { title: "Own data layers", body: "Database schema design, query optimisation, and migration management." },
      { title: "Ship production features", body: "End-to-end ownership of features from design review through to production monitoring." },
    ],
    hiringProcess: [
      { step: "01", title: "Share requirements", body: "Stack, current codebase, and the features you need to ship." },
      { step: "02", title: "Receive profiles", body: "Developers who know your exact stack in 72 hours." },
      { step: "03", title: "Code review & interview", body: "Code sample review and technical discussion on your architecture." },
      { step: "04", title: "Onboard in 5 days", body: "Repo access, local setup docs, and sprint one planned." },
    ],
    engagementModels: [
      { name: "Full-time dedicated", tag: "Most popular", points: ["Full sprint participation", "Your tools and process", "Code review and mentoring", "Long-term team fit"] },
      { name: "Part-time / Fractional", tag: null, points: ["20h/week", "Specific feature work", "Scales to full-time", "Ideal for lean phases"] },
      { name: "Project-based", tag: null, points: ["MVP builds", "Feature delivery", "Refactoring and migrations", "Fixed scope and cost"] },
    ],
    metaTitle: "Hire Full Stack Developers",
    metaDescription: "Hire pre-vetted full stack developers — React, Next.js, Node.js, TypeScript, and PostgreSQL. Onboard in 5 days. 40–60% cost saving vs local hiring.",
    metaKeywords: ["hire full stack developers", "React developer hire", "Next.js developer", "Node.js developer hire", "TypeScript developer"],
    path: "/hire-developers/full-stack-developers",
  },

  "salesforce-developers": {
    slug: "salesforce-developers",
    badge: "Salesforce",
    title: "Hire Salesforce Developers",
    subtitle: "Apex, LWC, CPQ, and multi-cloud — certified specialists.",
    description:
      "Our Salesforce developers are certified practitioners — not generalists who can follow documentation. Apex, Lightning Web Components, CPQ, and multi-cloud implementations delivered to Salesforce best practice standards.",
    stats: [
      { value: "5 days", label: "To onboard" },
      { value: "Certified", label: "Salesforce credentials" },
      { value: "72h", label: "Profiles delivered" },
      { value: "40–60%", label: "Cost vs local hiring" },
    ],
    skills: [
      { category: "Development", items: ["Apex", "LWC", "Visualforce", "SOQL", "SOSL", "Triggers"] },
      { category: "Products", items: ["Sales Cloud", "Service Cloud", "CPQ", "Experience Cloud", "Marketing Cloud"] },
      { category: "Automation", items: ["Flow Builder", "Process Builder", "Approval Processes", "Einstein Analytics"] },
      { category: "DevOps", items: ["SFDX", "GitHub Actions", "Copado", "Metazoa", "Gearset"] },
    ],
    whatTheyDo: [
      { title: "Custom Apex development", body: "Triggers, batch jobs, REST callouts, and platform events — written to Salesforce governor limit best practices." },
      { title: "Lightning Web Components", body: "Modern LWC components replacing legacy Visualforce pages — faster, more maintainable, and mobile-ready." },
      { title: "CPQ & revenue cloud", body: "Product catalogue, pricing rules, discount schedules, and quote approval workflows." },
      { title: "Integrations", body: "REST and SOAP integrations with ERP, billing, data warehouse, and third-party systems." },
    ],
    hiringProcess: [
      { step: "01", title: "Share requirements", body: "Org complexity, clouds in use, and the work to be done." },
      { step: "02", title: "Receive profiles", body: "Certified developers with relevant cloud experience in 72 hours." },
      { step: "03", title: "Technical review", body: "Apex code review and architecture discussion on your org." },
      { step: "04", title: "Onboard in 5 days", body: "Sandbox access, deployment process review, and first sprint planned." },
    ],
    engagementModels: [
      { name: "Full-time dedicated", tag: "Most popular", points: ["Full org ownership", "Embedded in your team", "Sprint participation", "Direct Slack access"] },
      { name: "Part-time / Fractional", tag: null, points: ["Ongoing enhancements", "20h/week", "Cost-effective for maintenance", "Scales to full-time"] },
      { name: "Project-based", tag: null, points: ["Implementation projects", "CPQ builds", "Migrations", "Fixed scope and price"] },
    ],
    metaTitle: "Hire Salesforce Developers",
    metaDescription: "Hire certified Salesforce developers — Apex, LWC, CPQ, and multi-cloud. Onboard in 5 days. 40–60% cost saving vs hiring locally.",
    metaKeywords: ["hire Salesforce developers", "Apex developer hire", "LWC developer", "Salesforce CPQ developer", "Salesforce consultant hire"],
    path: "/hire-developers/salesforce-developers",
  },

  "offshore-engineers": {
    slug: "offshore-engineers",
    badge: "Offshore Teams",
    title: "Hire Offshore Engineers",
    subtitle: "40–60% cost saving. World-class quality. Your timezone.",
    description:
      "KivvaTech's offshore engineers are pre-vetted, English-proficient professionals who work in your timezone, use your tools, and integrate seamlessly with your existing team — without the cost or complexity of local hiring.",
    stats: [
      { value: "40–60%", label: "Cost saving vs local" },
      { value: "5 days", label: "To onboard" },
      { value: "360+", label: "Completed projects" },
      { value: "NDA", label: "IP protection available" },
    ],
    skills: [
      { category: "Engineering", items: ["Full Stack", "AI/ML", "Data Engineering", "DevOps", "Cloud", "Mobile"] },
      { category: "Platforms", items: ["Salesforce", "Odoo ERP", "SAP", "Shopify", "Magento"] },
      { category: "Communication", items: ["English fluent", "Daily standups", "Async updates", "Slack/Teams"] },
      { category: "Compliance", items: ["NDA available", "IP assignment", "AWS Certified", "GDPR-compliant"] },
    ],
    whatTheyDo: [
      { title: "Integrate into your team", body: "Your tools, your process, your standards. Offshore engineers are an extension of your team — not a separate vendor." },
      { title: "Work in your timezone", body: "We match engineers to your working hours. Daily standups, real-time Slack communication, and sprint participation." },
      { title: "Deliver production-grade code", body: "The same multi-stage technical vetting as all KivvaTech engineers — no compromise on quality based on location." },
      { title: "Scale flexibly", body: "Add engineers in days. Scale down with 2 weeks notice. No long-term contracts required." },
    ],
    hiringProcess: [
      { step: "01", title: "Share requirements", body: "Role, stack, timezone, and number of engineers." },
      { step: "02", title: "Receive profiles", body: "Pre-vetted candidates in 72 hours." },
      { step: "03", title: "Interview", body: "Technical and culture fit interview on your schedule." },
      { step: "04", title: "Onboard in 5 days", body: "NDA signed, IP assignment in place, access provisioned." },
    ],
    engagementModels: [
      { name: "Dedicated offshore team", tag: "Most popular", points: ["Your timezone overlap", "Full-time commitment", "Your tools and process", "IP fully assigned to you"] },
      { name: "Staff augmentation", tag: null, points: ["Supplement your existing team", "Individual engineers", "Flexible headcount", "Scale up or down in weeks"] },
      { name: "Managed offshore team", tag: null, points: ["KivvaTech provides a PM", "Team of 3–10 engineers", "Sprint-based delivery", "Weekly reporting"] },
    ],
    metaTitle: "Hire Offshore Engineers",
    metaDescription: "Hire offshore engineers through KivvaTech — pre-vetted, English-proficient, in your timezone. 40–60% cost saving vs local hiring. Onboard in 5 days.",
    metaKeywords: ["hire offshore engineers", "offshore development team", "offshore developers India", "remote engineering team", "offshore software development"],
    path: "/hire-developers/offshore-engineers",
  },
};

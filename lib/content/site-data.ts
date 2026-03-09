import type { CaseStudy, InsightPost, ServiceArea } from "@/types/content";

export const serviceAreas: ServiceArea[] = [
  {
    slug: "web-applications",
    title: "Full-Stack Applications",
    teaser: "Next.js, Node.js, PostgreSQL with resilient release pipelines.",
    details:
      "We design platform-grade web apps with modular architecture, observable systems, and measurable performance budgets from the first sprint.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "tRPC"],
    outcomes: ["Single codebase", "Faster release cycles", "Production-grade reliability"],
  },
  {
    slug: "seo-architecture",
    title: "SEO Architecture",
    teaser: "Technical SEO and discoverability engineered into every route.",
    details:
      "Our SEO-first process bakes semantic structure, metadata automation, schema, and content architecture directly into the product foundation.",
    technologies: ["Core Web Vitals", "Schema.org", "Metadata API", "ISR"],
    outcomes: ["Higher crawl efficiency", "Better indexation", "Search-ready launch"],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Infrastructure",
    teaser: "Edge-ready deployments with observability and fault isolation.",
    details:
      "From serverless APIs to edge rendering, we architect scalable cloud topologies optimized for global speed and operational confidence.",
    technologies: ["AWS", "GCP", "Vercel Edge", "Terraform", "Cloudflare"],
    outcomes: ["Global low latency", "Elastic scaling", "Automated resilience"],
  },
  {
    slug: "api-development",
    title: "API Ecosystems",
    teaser: "Composable API platforms for products, partners, and teams.",
    details:
      "We create API-first ecosystems with clear contracts, authentication boundaries, and extensible integration layers for rapid product evolution.",
    technologies: ["GraphQL", "REST", "Webhooks", "OpenAPI", "OAuth2"],
    outcomes: ["Faster integrations", "Safer contracts", "Future-ready architecture"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "searchgrid-commerce",
    client: "SearchGrid Commerce",
    industry: "Retail SaaS",
    summary: "Replatformed storefront architecture to deliver indexable experiences across regions.",
    stack: ["Next.js", "Vercel", "Sanity", "PostgreSQL"],
    projectType: "Replatform + SEO",
    challenge:
      "Multiple fragmented storefronts created duplicate content, unstable performance, and delayed indexing for new launches.",
    solution:
      "DOSATECHNY unified the codebase, implemented schema-driven catalog rendering, and shipped route-level performance budgets.",
    results: "Organic sessions increased by 44% in 90 days with LCP reduced by 41%.",
    metrics: [
      { label: "Organic Traffic", value: "+44%" },
      { label: "Lighthouse Perf", value: "98" },
      { label: "Time To Publish", value: "-62%" },
    ],
    liveUrl: "https://example.com",
  },
  {
    slug: "finlytics-platform",
    client: "Finlytics",
    industry: "Fintech",
    summary: "Built an API and dashboard ecosystem for real-time reporting and compliance workflows.",
    stack: ["Next.js", "Node.js", "tRPC", "AWS"],
    projectType: "Greenfield Build",
    challenge: "Legacy reporting tools lacked automation and clear SEO landing surfaces for growth campaigns.",
    solution:
      "We delivered a modular dashboard system, event-driven API layer, and content-rich growth pages generated from shared models.",
    results: "User activation improved by 27% and API error rates dropped under 0.1%.",
    metrics: [
      { label: "Activation", value: "+27%" },
      { label: "API Error Rate", value: "<0.1%" },
      { label: "PageSpeed", value: "96" },
    ],
    githubUrl: "https://github.com",
  },
  {
    slug: "medistream-network",
    client: "MediStream Network",
    industry: "HealthTech",
    summary: "Scaled patient education platform with multilingual indexing and edge delivery.",
    stack: ["Next.js", "Cloudflare", "GraphQL", "Sanity"],
    projectType: "Scale + International SEO",
    challenge: "Regional microsites had inconsistent metadata and slow deployments across jurisdictions.",
    solution:
      "DOSATECHNY deployed a composable content model, locale-aware metadata generation, and edge rendering by market.",
    results: "International organic visibility rose 31% with release time reduced from days to minutes.",
    metrics: [
      { label: "Intl Visibility", value: "+31%" },
      { label: "Deploy Time", value: "-88%" },
      { label: "CLS", value: "0.03" },
    ],
  },
];

export const insightPosts: InsightPost[] = [
  {
    slug: "seo-architecture-patterns-nextjs",
    title: "SEO Architecture Patterns for Next.js Products",
    excerpt:
      "A practical blueprint for structuring metadata, schema, and content systems before launch day.",
    category: "SEO Engineering",
    author: "Ariya Das",
    readTime: "9 min",
    publishedAt: "2026-02-20",
    series: "Architecture Essentials",
    content: [
      "SEO outcomes are rarely fixed by content alone. They are enabled by architecture decisions made long before the first campaign.",
      "In modern Next.js builds, metadata and schema should be generated from typed data models so every route gets predictable indexing behavior.",
      "Treat discoverability as a product concern, not a marketing patch.",
    ],
  },
  {
    slug: "edge-rendering-for-global-products",
    title: "When Edge Rendering Actually Pays Off",
    excerpt:
      "Not every workload needs edge execution. Here is how to choose based on latency, cacheability, and crawl behavior.",
    category: "Cloud Strategy",
    author: "Nikhil Roy",
    readTime: "7 min",
    publishedAt: "2026-01-31",
    content: [
      "Edge rendering shines when personalization and low-latency delivery must coexist for globally distributed users.",
      "For highly cacheable content surfaces, static generation plus selective edge middleware is usually the better tradeoff.",
      "Model request classes first, then pick runtime boundaries.",
    ],
  },
  {
    slug: "designing-api-ecosystems-for-scale",
    title: "Designing API Ecosystems That Survive Scale",
    excerpt:
      "How to enforce contracts, versioning, and observability while keeping integration velocity high.",
    category: "Platform Engineering",
    author: "Leena Sharma",
    readTime: "11 min",
    publishedAt: "2026-01-15",
    content: [
      "API ecosystems fail when ownership is unclear and contracts are informal.",
      "Standardize design reviews around breaking-change risk, observability, and consumer migration strategy.",
      "Healthy ecosystems are explicit, measurable, and continuously tested.",
    ],
  },
];

export const credibilityStack = [
  "Next.js",
  "TypeScript",
  "Vercel",
  "AWS",
  "Cloudflare",
  "PostgreSQL",
  "GraphQL",
  "Sanity",
  "Node.js",
  "Docker",
  "Playwright",
  "GitHub Actions",
];

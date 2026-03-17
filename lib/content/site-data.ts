import type { CaseStudy, ServiceArea } from "@/types/content";

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
    slug: "salariscope",
    title: "An Educational platform",
    description: "an interactive website to discover your potential, through the quiz in the tech world",
    link: "https://salariscope.onrender.com/",
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

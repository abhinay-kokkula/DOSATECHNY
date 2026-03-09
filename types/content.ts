export interface ServiceArea {
  slug: string;
  title: string;
  teaser: string;
  details: string;
  technologies: string[];
  outcomes: string[];
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  summary: string;
  stack: string[];
  projectType: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: CaseStudyMetric[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  publishedAt: string;
  series?: string;
  content: string[];
}

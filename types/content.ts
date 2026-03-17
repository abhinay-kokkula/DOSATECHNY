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
  title: string;
  description: string;
  link: string;
}


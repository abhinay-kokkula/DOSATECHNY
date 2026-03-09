import { buildAbsoluteUrl, siteConfig } from "@/lib/seo/metadata";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    slogan: siteConfig.tagline,
    logo: buildAbsoluteUrl("/icons/logo.svg"),
    sameAs: [
      "https://www.linkedin.com/company/dosatechny",
      "https://github.com/dosatechny",
      "https://x.com/dosatechny",
    ],
  };
}

export function serviceSchema(name: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    description,
    areaServed: "Global",
    url: buildAbsoluteUrl(`/services/${slug}`),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    datePublished: input.publishedAt,
    dateModified: input.publishedAt,
    mainEntityOfPage: buildAbsoluteUrl(`/insights/${input.slug}`),
    author: {
      "@type": "Person",
      name: input.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: buildAbsoluteUrl("/icons/logo.svg"),
      },
    },
    image: buildAbsoluteUrl(siteConfig.ogImage),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(item.path),
    })),
  };
}

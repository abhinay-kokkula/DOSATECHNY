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

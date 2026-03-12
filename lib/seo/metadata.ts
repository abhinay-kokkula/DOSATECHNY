import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dosatechny.com";

export const siteConfig = {
  name: "Develop Once, Search Anywhere",
  tagline: "Develop Once, Search Anywhere",
  description:
    "Premium web application engineering studio focused on SEO-first architecture, scalable systems, and measurable digital growth.",
  url: baseUrl,
  ogImage: "/images/og-default.svg",
};

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
};

export function buildAbsoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const canonical = buildAbsoluteUrl(path);
  const composedTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title: composedTitle,
    description,
    keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      type,
      title: composedTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: composedTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

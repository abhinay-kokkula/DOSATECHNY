import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { insightPosts } from "@/lib/content/site-data";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = insightPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    return buildMetadata({
      title: "Article Not Found",
      description: "The requested article does not exist.",
      path: `/insights/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
    keywords: [post.category, "engineering insight", "technical blog"],
    type: "article",
  });
}

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
  const post = insightPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  const toc = ["Overview", "Architecture Notes", "Implementation Signals"];

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.excerpt,
            slug: post.slug,
            publishedAt: post.publishedAt,
            author: post.author,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: post.title, path: `/insights/${post.slug}` },
          ]),
        ]}
      />

      <section className="section-spacing">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.75fr_2fr]">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-subtle">Table of Contents</p>
            <nav className="mt-4 flex flex-col gap-2 text-sm">
              {toc.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-brand-muted hover:text-brand-primary">
                  {item}
                </a>
              ))}
            </nav>
          </aside>

          <article>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.16em] text-brand-primary">{post.category}</p>
              <h1 className="mt-4 max-w-4xl font-display text-4xl md:text-6xl">{post.title}</h1>
              <p className="mt-5 text-sm text-brand-subtle">
                {post.author} · {post.readTime} · {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </Reveal>

            {post.content.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.08} className="mt-8 rounded-2xl border border-white/10 bg-brand-surface/60 p-6">
                <h2 id={toc[index]?.toLowerCase().replace(/\s+/g, "-") ?? undefined} className="font-display text-2xl">
                  {toc[index] ?? `Section ${index + 1}`}
                </h2>
                <p className="mt-3 text-sm leading-7 text-brand-muted">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal className="mt-10 rounded-2xl border border-brand-primary/35 bg-brand-primary/10 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-primary">Newsletter</p>
              <h3 className="mt-3 font-display text-2xl">Get architecture insights at 75% scroll depth and beyond</h3>
              <form className="mt-5 flex flex-col gap-3 sm:flex-row" noValidate>
                <input
                  type="email"
                  placeholder="Work email"
                  className="w-full rounded-full border border-white/15 bg-black/25 px-4 py-3 text-sm text-brand-text outline-none focus:border-brand-primary"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </Reveal>
          </article>
        </div>
      </section>
    </>
  );
}

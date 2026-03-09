import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { insightPosts } from "@/lib/content/site-data";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Explore DOSATECHNY insights on SEO architecture, scalable cloud systems, API ecosystem design, and product engineering strategy.",
  path: "/insights",
  keywords: ["engineering blog", "seo architecture insights", "nextjs articles"],
});

export default function InsightsPage() {
  const [featured, ...posts] = insightPosts;

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }])} />
      <section className="section-spacing">
        <div className="container-shell">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-primary">Insights</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl md:text-6xl">A technical journal for teams building discoverable products</h1>
          </Reveal>

          <Reveal className="mt-10">
            <article className="rounded-2xl border border-white/10 bg-brand-surface/65 p-6 lg:p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-brand-primary">Featured Post</p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl">{featured.title}</h2>
              <p className="mt-4 max-w-3xl text-sm text-brand-muted">{featured.excerpt}</p>
              <p className="mt-4 text-xs text-brand-subtle">
                {featured.author} · {featured.readTime} · {featured.category}
              </p>
              <Link href={`/insights/${featured.slug}`} className="mt-6 inline-flex text-sm font-semibold text-brand-primary hover:text-cyan-200">
                Read featured article →
              </Link>
            </article>
          </Reveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.08}>
                <article className="group rounded-2xl border border-white/10 bg-brand-surface/70 p-6 transition-colors hover:border-brand-primary/35">
                  <p className="text-xs uppercase tracking-[0.14em] text-brand-primary">{post.category}</p>
                  <h3 className="mt-3 font-display text-2xl">{post.title}</h3>
                  <p className="mt-3 text-sm text-brand-muted">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-brand-subtle">{post.author} · {post.readTime}</p>
                  <Link href={`/insights/${post.slug}`} className="mt-5 inline-flex text-sm font-semibold text-brand-primary transition-colors group-hover:text-cyan-200">
                    Read article →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

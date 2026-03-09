import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { insightPosts } from "@/lib/content/site-data";

export function InsightsPreview() {
  const posts = insightPosts.slice(0, 3);

  return (
    <section className="section-spacing border-t border-white/10 bg-brand-surface/20">
      <div className="container-shell">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.24em] text-brand-primary">Insights</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">Engineering Notes from the Delivery Floor</h2>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08}>
              <article className="group h-full rounded-2xl border border-white/10 bg-brand-surface/75 p-6 transition-colors hover:border-brand-primary/45">
                <p className="text-xs uppercase tracking-[0.15em] text-brand-primary">{post.category}</p>
                <h3 className="mt-3 font-display text-2xl leading-tight text-brand-text">{post.title}</h3>
                <p className="mt-4 text-sm text-brand-muted">{post.excerpt}</p>
                <p className="mt-4 text-xs text-brand-subtle">
                  {post.author} · {post.readTime}
                </p>
                <Link
                  href={`/insights/${post.slug}`}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-brand-primary transition-colors group-hover:text-cyan-200"
                >
                  Read article →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

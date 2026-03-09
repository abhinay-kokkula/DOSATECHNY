import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { caseStudies } from "@/lib/content/site-data";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Work",
  description:
    "See how DOSATECHNY delivers measurable improvements in performance, discoverability, and conversion across industries.",
  path: "/work",
  keywords: ["case studies", "portfolio", "nextjs performance projects"],
});

const filters = ["All", "Retail", "Fintech", "HealthTech", "Next.js", "Cloud"];

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }])} />
      <section className="section-spacing">
        <div className="container-shell">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-primary">Portfolio</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl md:text-6xl">Case Studies with operational and search impact</h1>
            <p className="mt-6 max-w-3xl text-lg text-brand-muted">
              Filter by industry, stack, or project type to explore outcomes from real delivery engagements.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.14em] text-brand-muted transition-colors hover:border-brand-primary/35 hover:text-brand-primary"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.08}>
                <article className="group rounded-2xl border border-white/10 bg-brand-surface/75 p-5 transition-colors hover:border-brand-primary/35">
                  <p className="text-xs uppercase tracking-[0.14em] text-brand-subtle">{item.industry}</p>
                  <h2 className="mt-3 font-display text-2xl">{item.client}</h2>
                  <p className="mt-3 text-sm text-brand-muted">{item.summary}</p>
                  <p className="mt-4 text-sm text-brand-primary">{item.results}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((stackItem) => (
                      <span key={stackItem} className="rounded-full border border-white/10 px-3 py-1 text-xs text-brand-subtle">
                        {stackItem}
                      </span>
                    ))}
                  </div>
                  <Link href={`/work/case-studies/${item.slug}`} className="mt-6 inline-flex text-sm font-semibold text-brand-primary hover:text-cyan-200">
                    View Case Study →
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

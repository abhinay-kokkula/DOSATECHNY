import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/json-ld";
import { Reveal } from "@/components/animations/reveal";
import { caseStudies } from "@/lib/content/site-data";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    return buildMetadata({
      title: "Case Study Not Found",
      description: "The requested case study does not exist.",
      path: `/work/case-studies/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${study.client} Case Study`,
    description: study.summary,
    path: `/work/case-studies/${study.slug}`,
    keywords: [study.client, study.industry, "case study"],
  });
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: study.client, path: `/work/case-studies/${study.slug}` },
        ])}
      />

      <section className="section-spacing">
        <div className="container-shell">
          <Reveal>
            <Link href="/work" className="text-sm text-brand-primary hover:text-cyan-200">
              ← Back to portfolio
            </Link>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-brand-subtle">{study.industry}</p>
            <h1 className="mt-3 max-w-4xl font-display text-4xl md:text-6xl">{study.client}</h1>
            <p className="mt-5 max-w-3xl text-lg text-brand-muted">{study.summary}</p>
          </Reveal>

          <div className="mt-10 rounded-2xl border border-white/10 bg-[linear-gradient(130deg,rgba(0,240,255,0.12),rgba(112,0,255,0.16))] p-6">
            <div className="grid gap-4 md:grid-cols-3">
              {study.metrics.map((metric) => (
                <article key={metric.label} className="rounded-xl border border-white/15 bg-black/30 p-4 text-center">
                  <p className="text-2xl font-semibold text-brand-primary">{metric.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-brand-subtle">{metric.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <article className="glass-panel p-6">
                <h2 className="font-display text-2xl">Challenge</h2>
                <p className="mt-3 text-sm text-brand-muted">{study.challenge}</p>

                <h2 className="mt-8 font-display text-2xl">Solution</h2>
                <p className="mt-3 text-sm text-brand-muted">{study.solution}</p>

                <h2 className="mt-8 font-display text-2xl">Results</h2>
                <p className="mt-3 text-sm text-brand-muted">{study.results}</p>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="glass-panel p-6">
                <h3 className="font-display text-xl">Architecture Stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.stack.map((stackItem) => (
                    <span key={stackItem} className="rounded-full border border-white/10 px-3 py-1 text-xs text-brand-subtle">
                      {stackItem}
                    </span>
                  ))}
                </div>

                {study.liveUrl && (
                  <a href={study.liveUrl} className="mt-6 inline-flex text-sm font-semibold text-brand-primary hover:text-cyan-200" target="_blank" rel="noreferrer">
                    Live Site →
                  </a>
                )}

                {study.githubUrl && (
                  <a href={study.githubUrl} className="mt-3 inline-flex text-sm font-semibold text-brand-primary hover:text-cyan-200" target="_blank" rel="noreferrer">
                    GitHub →
                  </a>
                )}
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

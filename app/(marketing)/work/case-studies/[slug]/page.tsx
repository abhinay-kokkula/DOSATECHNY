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
    title: `${study.title} | Work`,
    description: study.description,
    path: `/work/case-studies/${study.slug}`,
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
          { name: study.title, path: `/work/case-studies/${study.slug}` },
        ])}
      />

      <section className="section-spacing">
        <div className="container-shell">
          <Reveal>
            <Link href="/work" className="text-sm text-brand-primary hover:text-cyan-200">
              ← Back to portfolio
            </Link>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-brand-subtle">Salariscope</p>
            <h1 className="mt-3 max-w-4xl font-display text-4xl md:text-6xl">{study.title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-brand-muted">{study.description}</p>
          </Reveal>
          <Reveal className="mt-10">
            <article className="glass-panel p-6">
              <h2 className="font-display text-2xl">Summary</h2>
              <p className="mt-3 text-sm text-brand-muted">This case study will be published soon. Reach out and we will share the details.</p>
              <Link href={study.link} className="mt-6 inline-flex text-sm font-semibold text-brand-primary hover:text-cyan-200">
                Visit →
              </Link>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}

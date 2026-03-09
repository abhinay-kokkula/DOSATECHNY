import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { serviceAreas } from "@/lib/content/site-data";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo/schema";

export function generateStaticParams() {
  return serviceAreas.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = serviceAreas.find((entry) => entry.slug === params.slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found",
      description: "The requested service does not exist.",
      path: `/services/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: service.title,
    description: service.details,
    path: `/services/${service.slug}`,
    keywords: [service.title, "technical consulting", "application development"],
  });
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceAreas.find((entry) => entry.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service.title, service.details, service.slug),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <section className="section-spacing">
        <div className="container-shell">
          <Reveal>
            <Link href="/services" className="text-sm text-brand-primary hover:text-cyan-200">
              ← Back to services
            </Link>
            <h1 className="mt-5 max-w-4xl font-display text-4xl md:text-6xl">{service.title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-brand-muted">{service.details}</p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="glass-panel p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-subtle">Problem / Solution</p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-rose-300/25 bg-rose-500/10 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-rose-200">Before</p>
                    <p className="mt-2 text-sm text-brand-muted">
                      Fragmented systems, weak indexability, and unclear ownership around performance and search.
                    </p>
                  </div>
                  <div className="rounded-xl border border-brand-primary/35 bg-brand-primary/10 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-primary">After</p>
                    <p className="mt-2 text-sm text-brand-muted">
                      Unified architecture with measurable web vitals, schema coverage, and high-confidence release pipelines.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="glass-panel p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-subtle">Process</p>
                <ol className="mt-5 space-y-3">
                  {[
                    "Technical discovery and stakeholder alignment",
                    "Platform architecture and SEO modeling",
                    "Implementation with QA gates",
                    "Launch optimization and handover",
                  ].map((step, index) => (
                    <li key={step} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.14em] text-brand-subtle">Phase {index + 1}</p>
                      <p className="mt-2 text-sm text-brand-muted">{step}</p>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          </div>

          <Reveal className="mt-10">
            <h2 className="font-display text-3xl">Technology Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-brand-muted">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-10 rounded-2xl border border-brand-primary/40 bg-brand-primary/10 p-6">
            <h2 className="font-display text-2xl">Project Estimator</h2>
            <p className="mt-3 text-sm text-brand-muted">Share your constraints and we will return a recommended architecture and delivery path.</p>
            <div className="mt-6">
              <MagneticButton href="/contact">Start Estimation</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

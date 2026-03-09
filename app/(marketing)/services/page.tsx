import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { serviceAreas } from "@/lib/content/site-data";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore DOSATECHNY services across full-stack development, technical SEO architecture, cloud solutions, and API ecosystems.",
  path: "/services",
  keywords: ["web app services", "technical SEO services", "cloud architecture consulting"],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <section className="section-spacing">
        <div className="container-shell">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-primary">Services</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl md:text-6xl">Engineering programs designed for growth-ready platforms</h1>
            <p className="mt-6 max-w-3xl text-lg text-brand-muted">
              Each service line is structured to ship measurable outcomes across performance, discoverability, and operational scale.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {serviceAreas.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.08}>
                <article className="electric-border rounded-2xl bg-brand-surface/75 p-6">
                  <h2 className="font-display text-2xl">{service.title}</h2>
                  <p className="mt-3 text-sm text-brand-muted">{service.details}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-brand-subtle">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={`/services/${service.slug}`} className="mt-6 inline-flex text-sm font-semibold text-brand-primary hover:text-cyan-200">
                    Explore service details →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <h2 className="font-display text-3xl">Delivery Process</h2>
            <ol className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                "Discovery + Architecture Mapping",
                "Experience + System Design",
                "Implementation + QA Automation",
                "Launch + Growth Instrumentation",
              ].map((step, index) => (
                <li key={step} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-subtle">Step {index + 1}</p>
                  <p className="mt-3 text-sm text-brand-muted">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="mt-14 rounded-2xl border border-brand-primary/35 bg-brand-primary/10 p-6">
            <h2 className="font-display text-2xl">Ready to scope your roadmap?</h2>
            <p className="mt-3 text-sm text-brand-muted">Estimate your project and receive a delivery recommendation in under 2 hours.</p>
            <div className="mt-6">
              <MagneticButton href="/contact">Start Project Estimator</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

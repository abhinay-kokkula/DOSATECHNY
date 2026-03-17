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

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }])} />
      <section className="section-spacing">
        <div className="container-shell">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-primary">My Works</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl md:text-6xl">Recent delivery highlights</h1>
            <p className="mt-6 max-w-3xl text-lg text-brand-muted">
              Here is a quick note with a link to continue the conversation.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.08}>
                <article className="group rounded-2xl border border-white/10 bg-brand-surface/75 p-5 transition-colors hover:border-brand-primary/35">
                  <p className="text-xs uppercase tracking-[0.14em] text-brand-subtle">Salariscope</p>
                  <h2 className="mt-3 font-display text-2xl">{item.title}</h2>
                  <p className="mt-3 text-sm text-brand-muted">{item.description}</p>
                  <Link href={item.link} className="mt-6 inline-flex text-sm font-semibold text-brand-primary hover:text-cyan-200">
                    View →
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

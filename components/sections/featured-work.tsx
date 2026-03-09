import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { caseStudies } from "@/lib/content/site-data";
import { MagneticButton } from "@/components/shared/magnetic-button";

export function FeaturedWork() {
  return (
    <section className="section-spacing border-y border-white/10 bg-brand-surface/25">
      <div className="container-shell">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.24em] text-brand-primary">Featured Work</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">Proof in Production</h2>
        </Reveal>

        <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4">
          {caseStudies.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.07} className="w-[360px] min-w-[360px] snap-start">
              <article className="electric-border h-full rounded-2xl bg-brand-surface/80 p-5">
                <div className="rounded-xl border border-white/10 bg-[linear-gradient(135deg,#11111a,#0a0a0f)] p-4">
                  <p className="font-display text-lg text-brand-text">{item.client}</p>
                  <p className="text-xs text-brand-subtle">{item.industry}</p>
                </div>

                <p className="mt-4 text-sm text-brand-muted">{item.summary}</p>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {item.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-center">
                      <p className="text-sm font-semibold text-brand-primary">{metric.value}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-brand-subtle">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((stackItem) => (
                    <span key={stackItem} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-brand-muted">
                      {stackItem}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <MagneticButton href={`/work/case-studies/${item.slug}`} variant="secondary" className="w-full">
                    View Case Study
                  </MagneticButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-right">
          <Link href="/work" className="text-sm font-semibold text-brand-primary transition-colors hover:text-cyan-200">
            Browse full portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}

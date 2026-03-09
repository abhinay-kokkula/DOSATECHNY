const marqueeItems = Array.from({ length: 12 }, (_, index) => (index % 2 === 0 ? "#development" : "#dosatechny"));

export function TechnicalCredibility() {
  return (
    <section className="section-spacing border-y border-white/10 bg-brand-surface/25">
      <div className="container-shell">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-brand-bg/60 py-6">
          <div className="marquee-track flex min-w-max animate-marquee gap-8 px-6" aria-hidden>
            {marqueeItems.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="flex items-center gap-4 whitespace-nowrap"
              >
                <span className="text-sm uppercase tracking-[0.22em] text-brand-subtle">#development</span>
                <span className="text-brand-subtle">|</span>
                <span className="text-3xl md:text-5xl font-display text-brand-primary">#dosatechny</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

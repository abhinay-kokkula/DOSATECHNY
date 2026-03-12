import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-surface/40">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl text-brand-text">DOSATECHNY</p>
          <p className="mt-3 max-w-md text-sm text-brand-muted">
            We engineer SEO-first web applications that launch discoverable, scale confidently, and convert consistently.
          </p>
          <form className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Work email"
              className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-brand-text outline-none placeholder:text-brand-subtle focus:border-brand-primary"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-subtle">Sitemap</p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-brand-muted transition-colors hover:text-brand-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-subtle">Connect</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-brand-muted">
            <a href="mailto:dosatechny@gmail.com" className="transition-colors hover:text-brand-primary">
              dosatechny@gmail.com
            </a>
            <a href="https://www.linkedin.com" className="transition-colors hover:text-brand-primary" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com" className="transition-colors hover:text-brand-primary" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="+91 7893975125" className="transition-colors hover:text-brand-primary">
              Cell: 91+ 7893975125
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-brand-subtle">
        <p>© {new Date().getFullYear()} DOSATECHNY. Develop Once, Search Everywhere.</p>
      </div>
    </footer>
  );
}

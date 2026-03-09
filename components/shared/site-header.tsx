"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/shared/magnetic-button";

const navLinks = [
  { href: "/#home", label: "Home", sectionId: "home" },
  { href: "/#services", label: "Services", sectionId: "services" },
  { href: "/#about", label: "About", sectionId: "about" },
  { href: "/#contact", label: "Contact Us", sectionId: "contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const sectionIds = navLinks
      .map((link) => link.sectionId)
      .filter((id): id is string => Boolean(id));

    const pickSection = () => {
      const anchor = window.innerHeight * 0.3; // near top third of viewport
      let closestId = sectionIds[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - anchor);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = id;
        }
      });

      setActiveSection(closestId || "home");
    };

    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      }
    };

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        pickSection();
        ticking = false;
      });
    };

    pickSection();
    syncHash();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", syncHash);
    };
  }, [isHome]);

  const isActive = (href: string, sectionId?: string) => {
    if (isHome && sectionId) {
      return activeSection === sectionId;
    }
    // Fallback highlighting when not on the home page
    if (!isHome) {
      return pathname.startsWith(href.replace("/#", "/"));
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg/70 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="font-display text-lg font-semibold tracking-[0.18em] text-brand-text">
          DOSATECHNY
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative py-1 text-sm font-medium text-brand-muted transition-colors hover:text-brand-text",
                isActive(link.href, link.sectionId) && "text-brand-primary",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-300",
                  isActive(link.href, link.sectionId) ? "w-full" : "w-0 group-hover:w-full",
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton href="/#contact">Start Your Project</MagneticButton>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-brand-text lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-brand-bg/95 px-6 py-6 lg:hidden"
          >
            <div className="mx-auto flex max-w-md flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-brand-muted transition-colors hover:text-brand-text"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

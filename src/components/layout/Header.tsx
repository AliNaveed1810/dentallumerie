"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-[var(--color-forest)]/10 bg-[var(--color-cream)]/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="group" aria-label="LUMIÈRE Dental Studio home">
          <span className="block font-[family-name:var(--font-cormorant)] text-2xl tracking-[0.08em] text-[var(--color-ink)]">
            {siteConfig.name}
          </span>
          <span className="block font-[family-name:var(--font-manrope)] text-[0.65rem] uppercase tracking-[0.28em] text-[var(--color-sage)]">
            Dental Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-[family-name:var(--font-manrope)] text-sm tracking-wide text-[var(--color-forest)]/80 transition-colors hover:text-[var(--color-ink)]",
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "text-[var(--color-ink)]"
                  : null,
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/book-appointment" size="md">
            Book an appointment
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-[var(--color-ink)] lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-[var(--color-forest)]/10 bg-[var(--color-cream)] lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Mobile">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 font-[family-name:var(--font-manrope)] text-base text-[var(--color-ink)] hover:bg-[var(--color-stone)]/40"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 px-3">
                <Button href="/book-appointment" className="w-full">
                  Book an appointment
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

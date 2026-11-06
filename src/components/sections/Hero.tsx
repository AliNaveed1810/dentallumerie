"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-ink)]">
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? false : { scale: 1.08, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2400&q=80"
          alt="Calm, contemporary dental studio interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/80 via-[var(--color-ink)]/55 to-[var(--color-ink)]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/50 via-transparent to-[var(--color-ink)]/20" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-24 pt-32 md:justify-center md:px-8 md:pb-20 md:pt-28">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-5xl tracking-[0.1em] text-[var(--color-cream)] md:text-6xl lg:text-7xl">
            {siteConfig.name}
          </p>
          <p className="mt-3 font-[family-name:var(--font-manrope)] text-xs uppercase tracking-[0.35em] text-[var(--color-sage)]">
            Dental Studio
          </p>
          <h1 className="mt-8 font-[family-name:var(--font-cormorant)] text-4xl leading-[1.08] text-[var(--color-cream)] md:text-5xl lg:text-6xl">
            A healthier smile. A more confident you.
          </h1>
          <p className="mt-6 max-w-lg font-[family-name:var(--font-manrope)] text-base leading-relaxed text-[var(--color-cream)]/75 md:text-lg">
            Thoughtful dentistry, tailored to you. Experience modern dental care
            in a calm and welcoming environment.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/book-appointment" variant="inverse" size="lg">
              Book an appointment
            </Button>
            <Button
              href="/treatments"
              variant="secondary"
              size="lg"
              className="border-[var(--color-cream)]/30 text-[var(--color-cream)] hover:border-[var(--color-cream)] hover:bg-white/5"
            >
              Explore treatments
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { ConversionCta } from "@/components/sections/ConversionCta";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the LUMIÈRE Dental Studio philosophy — modern private dentistry with personalised care in London.",
};

const pillars = [
  {
    title: "Sophisticated, not intimidating",
    text: "A quiet, considered environment designed to put patients at ease from the first moment.",
  },
  {
    title: "Professional, not clinical",
    text: "Evidence-led dentistry delivered with warmth, clarity and unhurried attention.",
  },
  {
    title: "Modern, never cold",
    text: "Contemporary techniques and technology, framed by hospitality rather than hard edges.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--color-cream)] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="About the studio"
              title="A private dental studio built around trust."
              description={`${siteConfig.fullName} is a contemporary practice concept for London — combining modern dentistry, personalised patient care and an exceptionally comfortable experience.`}
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80"
                alt="Bright, refined dental studio interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[var(--color-ink)] md:text-5xl">
              Confidence begins with care.
            </h2>
            <div className="mt-6 space-y-4 font-[family-name:var(--font-manrope)] text-base leading-relaxed text-[var(--color-forest)]/75">
              <p>
                We created LUMIÈRE for patients who want private dentistry without
                the pressure. Every consultation starts with listening. Every plan
                is explained before treatment begins. Every visit is paced to feel
                considered rather than transactional.
              </p>
              <p>
                The studio aesthetic is intentional: soft natural materials, quiet
                lighting and generous space. It signals the same standard we bring
                to clinical care — refined, reassuring and thoroughly prepared.
              </p>
              <p className="text-sm text-[var(--color-forest)]/55">
                {siteConfig.demoNotice}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-stone)]/35 py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Philosophy"
              title="How we approach every patient journey."
            />
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <p className="font-[family-name:var(--font-manrope)] text-xs uppercase tracking-[0.2em] text-[var(--color-sage)]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)]">
                  {pillar.title}
                </h3>
                <p className="mt-3 font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[var(--color-forest)]/75">
                  {pillar.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConversionCta
        eyebrow="Visit the studio"
        title="Experience dentistry designed around you."
        description="Request an appointment and our reception team will help you take the next step."
      />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedTreatments } from "@/data/treatments";

export function TreatmentsPreview() {
  const treatments = getFeaturedTreatments();

  return (
    <section className="bg-[var(--color-stone)]/35 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="02 — Treatments"
              title="Care for every smile."
              description="From preventive dentistry to refined aesthetic care, each pathway is designed around clarity, comfort and lasting results."
            />
            <Button href="/treatments" variant="secondary" className="shrink-0 self-start md:self-auto">
              View all treatments
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, index) => (
            <Reveal key={treatment.slug} delay={index * 0.08}>
              <Link
                href={`/treatments/${treatment.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/55 via-transparent to-transparent opacity-80" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)]">
                      {treatment.shortName}
                    </h3>
                    <p className="mt-2 font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[var(--color-forest)]/70">
                      {treatment.tagline}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[var(--color-sage)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

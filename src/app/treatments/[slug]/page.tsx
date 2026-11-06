import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getTreatment, treatments } from "@/data/treatments";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return { title: "Treatment" };

  return {
    title: treatment.name,
    description: treatment.summary,
  };
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) notFound();

  const related = treatments
    .filter((item) => item.slug !== treatment.slug)
    .slice(0, 3);

  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-[var(--color-ink)]">
        <Image
          src={treatment.image}
          alt={treatment.imageAlt}
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/55 to-[var(--color-ink)]/25" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-end px-5 pb-16 pt-36 md:px-8 md:pb-20">
          <div className="max-w-3xl">
            <p className="font-[family-name:var(--font-manrope)] text-xs uppercase tracking-[0.22em] text-[var(--color-sage)]">
              Treatment
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl leading-tight text-[var(--color-cream)] md:text-6xl">
              {treatment.name}
            </h1>
            <p className="mt-5 max-w-xl font-[family-name:var(--font-manrope)] text-base leading-relaxed text-[var(--color-cream)]/75 md:text-lg">
              {treatment.summary}
            </p>
            <div className="mt-8">
              <Button
                href={`/book-appointment?treatment=${treatment.slug}`}
                variant="inverse"
                size="lg"
              >
                Book a consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1.2fr_0.8fr] md:gap-16 md:px-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] md:text-4xl">
              About this treatment
            </h2>
            <p className="mt-5 font-[family-name:var(--font-manrope)] text-base leading-relaxed text-[var(--color-forest)]/75">
              {treatment.description}
            </p>

            <h3 className="mt-12 font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)]">
              Your journey
            </h3>
            <ol className="mt-6 space-y-6">
              {treatment.process.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="font-[family-name:var(--font-manrope)] text-sm text-[var(--color-sage)]">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-ink)]">
                      {step.title}
                    </p>
                    <p className="mt-2 font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[var(--color-forest)]/75">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-8 border border-[var(--color-forest)]/10 bg-white p-6 md:p-8">
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)]">
                  Benefits
                </h3>
                <ul className="mt-4 space-y-3 font-[family-name:var(--font-manrope)] text-sm text-[var(--color-forest)]/75">
                  {treatment.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-sage)]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)]">
                  Ideal for
                </h3>
                <ul className="mt-4 space-y-3 font-[family-name:var(--font-manrope)] text-sm text-[var(--color-forest)]/75">
                  {treatment.idealFor.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-sage)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                href={`/book-appointment?treatment=${treatment.slug}`}
                className="w-full"
              >
                Request this treatment
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-forest)]/10 bg-[var(--color-stone)]/30 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)]">
            Related treatments
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/treatments/${item.slug}`} className="group">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="mt-4 font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)]">
                  {item.name}
                </p>
                <p className="mt-2 font-[family-name:var(--font-manrope)] text-sm text-[var(--color-forest)]/70">
                  {item.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

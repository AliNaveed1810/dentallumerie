import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPreview() {
  return (
    <section className="bg-[var(--color-cream)] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=80"
              alt="Dental professional speaking calmly with a patient"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="01 — About the studio"
            title="Dentistry, with you in mind."
            description="Personalised treatment, attentive professionals and a comfortable experience at every visit. LUMIÈRE was designed as a private London studio where modern clinical care meets quiet hospitality."
          />
          <div className="mt-8 space-y-4 font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[var(--color-forest)]/75 md:text-base">
            <p>
              From the moment you arrive, the pace is unhurried. We listen first,
              explain clearly and plan care around your goals — whether that is
              prevention, restoration or a more confident smile.
            </p>
            <p>
              Sophisticated without intimidation. Professional without feeling
              clinical. Warm enough that patients return not only for treatment,
              but for trust.
            </p>
          </div>
          <div className="mt-10">
            <Button href="/about" variant="secondary">
              Our story
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

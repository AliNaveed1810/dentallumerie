import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ConversionCta } from "@/components/sections/ConversionCta";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { treatments } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore LUMIÈRE Dental Studio treatments — general dentistry, cosmetic care, orthodontics, hygiene, implants and more.",
};

export default function TreatmentsPage() {
  return (
    <>
      <section className="bg-[var(--color-cream)] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Treatments"
              title="Care for every smile."
              description="Each treatment pathway has its own dedicated page with clear guidance and a direct appointment call-to-action."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-3 md:px-8">
          {treatments.map((treatment, index) => (
            <Reveal key={treatment.slug} delay={(index % 3) * 0.06}>
              <Link href={`/treatments/${treatment.slug}`} className="group block">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] md:text-3xl">
                      {treatment.name}
                    </h2>
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
      </section>

      <ConversionCta
        title="Not sure where to begin?"
        description="Share your goals on the enquiry form and our team will recommend a suitable first appointment."
      />
    </>
  );
}

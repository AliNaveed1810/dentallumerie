import type { Metadata } from "next";
import Image from "next/image";
import { ConversionCta } from "@/components/sections/ConversionCta";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the LUMIÈRE Dental Studio clinicians and patient-care team — fictional profiles for this portfolio demonstration.",
};

export default function OurTeamPage() {
  return (
    <>
      <section className="bg-[var(--color-cream)] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our team"
              title="Meet your dental team."
              description="Attentive clinicians and a welcoming care team, presented here as fictional profiles for this portfolio concept."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8">
          {team.map((member, index) => (
            <Reveal key={member.id} delay={(index % 2) * 0.08}>
              <article className="grid gap-6 sm:grid-cols-[0.9fr_1.1fr] sm:items-start">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)]">
                    {member.name}
                  </h2>
                  <p className="mt-1 font-[family-name:var(--font-manrope)] text-sm text-[var(--color-sage)]">
                    {member.role}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-manrope)] text-xs uppercase tracking-[0.14em] text-[var(--color-forest)]/55">
                    {member.credentials}
                  </p>
                  <p className="mt-5 font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[var(--color-forest)]/75">
                    {member.bio}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="border border-[var(--color-forest)]/15 px-3 py-1 font-[family-name:var(--font-manrope)] text-xs text-[var(--color-forest)]/80"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ConversionCta
        title="Ready to meet the team in person?"
        description="Request an appointment and we will match you with the right clinician for your goals."
      />
    </>
  );
}

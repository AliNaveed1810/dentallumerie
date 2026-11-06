import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/data/team";

export function TeamPreview() {
  const featured = team.slice(0, 3);

  return (
    <section className="bg-[var(--color-cream)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="03 — Your dental team"
              title="Meet your dental team."
              description="Experienced clinicians and a welcoming patient-care team, united by a calm, attentive approach to private dentistry."
            />
            <Button href="/our-team" variant="secondary" className="shrink-0 self-start">
              Meet the team
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {featured.map((member, index) => (
            <Reveal key={member.id} delay={index * 0.08}>
              <article>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)]">
                  {member.name}
                </h3>
                <p className="mt-1 font-[family-name:var(--font-manrope)] text-sm text-[var(--color-sage)]">
                  {member.role}
                </p>
                <p className="mt-3 font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[var(--color-forest)]/70">
                  {member.bio.slice(0, 120)}…
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";

export function FaqSection() {
  return (
    <section className="bg-[var(--color-cream)] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Questions"
            title="Clear answers before you visit."
            description="Practical guidance for new patients, nervous visitors and anyone exploring private dental care."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Accordion items={faqItems} />
        </Reveal>
      </div>
    </section>
  );
}

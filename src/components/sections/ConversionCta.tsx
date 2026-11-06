import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type ConversionCtaProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function ConversionCta({
  eyebrow = "04 — Begin your visit",
  title = "Your next visit starts here.",
  description = "Request an appointment and our reception team will get back to you with available times.",
}: ConversionCtaProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-forest)] py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(244,240,233,0.18), transparent 40%), radial-gradient(circle at 80% 80%, rgba(132,148,135,0.35), transparent 35%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="font-[family-name:var(--font-manrope)] text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-sage)]">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[var(--color-cream)] md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-[family-name:var(--font-manrope)] text-base leading-relaxed text-[var(--color-cream)]/75">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/book-appointment" variant="inverse" size="lg">
              Book an appointment
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="border-[var(--color-cream)]/25 text-[var(--color-cream)] hover:border-[var(--color-cream)] hover:bg-white/5"
            >
              Contact the studio
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

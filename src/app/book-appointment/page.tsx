import type { Metadata } from "next";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { getTreatment } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Request an appointment at LUMIÈRE Dental Studio. Demo enquiry form with validation — no sensitive medical data collected.",
};

type PageProps = {
  searchParams: Promise<{ treatment?: string }>;
};

export default async function BookAppointmentPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const treatment = params.treatment ? getTreatment(params.treatment) : undefined;

  return (
    <section className="bg-[var(--color-cream)] pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Appointment enquiry"
            title="Your next visit starts here."
            description="Share a few details and our reception team will confirm availability. This form is built to hand off into email, WhatsApp or automation workflows."
          />
          <div className="mt-8 space-y-4 font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[var(--color-forest)]/75">
            {treatment ? (
              <p>
                You are enquiring about{" "}
                <span className="font-medium text-[var(--color-ink)]">
                  {treatment.name}
                </span>
                . You can change this on the form if needed.
              </p>
            ) : null}
            <p>
              Prefer messaging? Use the WhatsApp button or speak with the AI
              receptionist demo for opening hours and booking guidance.
            </p>
            <p className="text-xs text-[var(--color-forest)]/50">
              {siteConfig.demoNotice}
            </p>
          </div>
          <ol className="mt-10 space-y-4 border-t border-[var(--color-forest)]/10 pt-8">
            {[
              "Submit your enquiry",
              "Reception reviews availability",
              "Optional WhatsApp follow-up",
              "Appointment confirmed",
            ].map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="font-[family-name:var(--font-manrope)] text-xs uppercase tracking-[0.16em] text-[var(--color-sage)]">
                  0{index + 1}
                </span>
                <span className="font-[family-name:var(--font-manrope)] text-sm text-[var(--color-forest)]/80">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.08}>
          <AppointmentForm defaultTreatment={treatment?.slug} />
        </Reveal>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact LUMIÈRE Dental Studio — location, opening hours and appointment enquiries for this London portfolio concept.",
};

export default function ContactPage() {
  return (
    <section className="bg-[var(--color-cream)] pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="We would love to welcome you."
            description="Reach the studio by phone, email or WhatsApp. For appointments, the enquiry form is the quickest route."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-10 border border-[var(--color-forest)]/10 bg-white p-6 md:p-8">
              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)]">
                  Studio
                </h2>
                <p className="mt-3 font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[var(--color-forest)]/75">
                  {siteConfig.location.address}
                  <br />
                  {siteConfig.location.city} {siteConfig.location.postcode}
                  <br />
                  {siteConfig.location.country}
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)]">
                  Contact
                </h2>
                <div className="mt-3 space-y-2 font-[family-name:var(--font-manrope)] text-sm text-[var(--color-forest)]/75">
                  <p>
                    <a href={siteConfig.contact.phoneHref} className="hover:text-[var(--color-ink)]">
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="hover:text-[var(--color-ink)]"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)]">
                  Opening hours
                </h2>
                <ul className="mt-3 space-y-2 font-[family-name:var(--font-manrope)] text-sm text-[var(--color-forest)]/75">
                  {siteConfig.hours.map((item) => (
                    <li key={item.day} className="flex justify-between gap-6">
                      <span>{item.day}</span>
                      <span>{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/book-appointment">Book an appointment</Button>
                <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                  WhatsApp
                </Button>
              </div>

              <p className="font-[family-name:var(--font-manrope)] text-xs leading-relaxed text-[var(--color-forest)]/50">
                {siteConfig.demoNotice}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="min-h-[28rem] overflow-hidden border border-[var(--color-forest)]/10 bg-[var(--color-stone)]/40">
              <iframe
                title="LUMIÈRE Dental Studio location map"
                src="https://maps.google.com/maps?q=Harley%20Street%20London&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-full min-h-[28rem] w-full border-0 grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-forest)]/10 bg-[var(--color-ink)] text-[var(--color-cream)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-[family-name:var(--font-cormorant)] text-3xl tracking-[0.08em]">
            {siteConfig.name}
          </p>
          <p className="mt-2 font-[family-name:var(--font-manrope)] text-xs uppercase tracking-[0.28em] text-[var(--color-sage)]">
            Dental Studio
          </p>
          <p className="mt-6 max-w-sm font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[var(--color-cream)]/70">
            {siteConfig.description}
          </p>
          <p className="mt-6 max-w-sm font-[family-name:var(--font-manrope)] text-xs leading-relaxed text-[var(--color-cream)]/45">
            {siteConfig.demoNotice}
          </p>
        </div>

        <div>
          <p className="font-[family-name:var(--font-manrope)] text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-sage)]">
            Explore
          </p>
          <ul className="mt-5 space-y-3 font-[family-name:var(--font-manrope)] text-sm text-[var(--color-cream)]/75">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book-appointment"
                className="transition-colors hover:text-white"
              >
                Book appointment
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-[family-name:var(--font-manrope)] text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-sage)]">
            Visit
          </p>
          <div className="mt-5 space-y-3 font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[var(--color-cream)]/75">
            <p>
              {siteConfig.location.address}
              <br />
              {siteConfig.location.city} {siteConfig.location.postcode}
            </p>
            <p>
              <a
                href={siteConfig.contact.phoneHref}
                className="transition-colors hover:text-white"
              >
                {siteConfig.contact.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="transition-colors hover:text-white"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 font-[family-name:var(--font-manrope)] text-xs text-[var(--color-cream)]/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} LUMIÈRE Dental Studio. Portfolio demonstration.</p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

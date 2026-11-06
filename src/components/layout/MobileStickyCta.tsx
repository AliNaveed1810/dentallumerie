"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileStickyCta() {
  const pathname = usePathname();

  if (pathname === "/book-appointment") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--color-forest)]/10 bg-[var(--color-cream)]/95 p-3 backdrop-blur-md md:hidden">
      <Link
        href="/book-appointment"
        className="flex h-12 w-full items-center justify-center rounded-md bg-[var(--color-forest)] font-[family-name:var(--font-manrope)] text-sm font-medium tracking-wide text-[var(--color-cream)]"
      >
        Book an appointment
      </Link>
    </div>
  );
}

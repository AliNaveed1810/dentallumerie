import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-[var(--color-cream)] px-5 pt-32 pb-20 text-center">
      <p className="font-[family-name:var(--font-manrope)] text-xs uppercase tracking-[0.22em] text-[var(--color-sage)]">
        404
      </p>
      <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl text-[var(--color-ink)] md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[var(--color-forest)]/75">
        The page you are looking for is unavailable. Return home or request an
        appointment with our reception team.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back to home</Button>
        <Button href="/book-appointment" variant="secondary">
          Book an appointment
        </Button>
      </div>
    </section>
  );
}

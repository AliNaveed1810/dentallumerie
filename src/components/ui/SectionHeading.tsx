import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 font-[family-name:var(--font-manrope)] text-xs font-medium uppercase tracking-[0.22em]",
            light ? "text-[var(--color-sage)]" : "text-[var(--color-sage)]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-[family-name:var(--font-cormorant)] text-4xl leading-[1.1] tracking-tight md:text-5xl",
          light ? "text-[var(--color-cream)]" : "text-[var(--color-ink)]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 font-[family-name:var(--font-manrope)] text-base leading-relaxed md:text-lg",
            light
              ? "text-[var(--color-cream)]/75"
              : "text-[var(--color-forest)]/75",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  align?: "center" | "left";
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  align = "center",
  className,
  eyebrowClassName,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "reveal max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full bg-[var(--brand-beige)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-rose-dark)]",
            eyebrowClassName,
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-rose)]" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "mt-5 text-3xl font-bold leading-[1.15] text-[var(--brand-text)] sm:text-4xl md:text-[2.6rem]",
          titleClassName,
        )}
      >
        {title}{" "}
        {titleHighlight ? (
          <span className="text-rose-gradient">{titleHighlight}</span>
        ) : null}
      </h2>
    </div>
  );
}

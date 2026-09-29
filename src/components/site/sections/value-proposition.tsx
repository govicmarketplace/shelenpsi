import Image from "next/image";
import { Check } from "lucide-react";
import CtaButton from "../cta-button";

type ValuePropositionProps = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  items: { title: string; description: string }[];
  image: string;
  imageAlt: string;
  ctaLabel: string;
};

export default function ValueProposition({
  eyebrow,
  title,
  titleHighlight,
  items,
  image,
  imageAlt,
  ctaLabel,
}: ValuePropositionProps) {
  return (
    <section
      id="valor"
      className="relative overflow-hidden bg-[var(--brand-beige)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Image side */}
        <div className="relative order-last lg:order-first">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-full bg-[var(--brand-rose-light)]/60 blur-2xl" />
            <div className="absolute -bottom-4 -right-4 -z-10 h-40 w-40 rounded-full bg-[var(--brand-rose)]/15 blur-2xl" />

            <div className="overflow-hidden rounded-[2.5rem] border-4 border-white bg-white shadow-2xl shadow-rose-900/10">
              <Image
                src={image}
                alt={imageAlt}
                width={864}
                height={1152}
                className="h-[420px] w-full object-cover object-center sm:h-[520px] lg:h-[580px]"
              />
            </div>

            {/* Floating quote */}
            <div className="absolute -right-2 bottom-6 max-w-[16rem] rounded-2xl border border-[var(--brand-beige-dark)] bg-white/95 p-4 shadow-xl backdrop-blur sm:-right-6">
              <p className="text-sm font-medium leading-snug text-[var(--brand-text)]">
                <span className="text-rose-gradient">&ldquo;</span>
                Um espaço seguro, livre de julgamentos.
                <span className="text-rose-gradient">&rdquo;</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copy side */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-rose-dark)] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-rose)]" />
            {eyebrow}
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-[var(--brand-text)] sm:text-4xl">
            {title}{" "}
            {titleHighlight ? (
              <span className="text-rose-gradient">{titleHighlight}</span>
            ) : null}
          </h2>

          <ul className="mt-8 space-y-5">
            {items.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-[var(--brand-beige-dark)] bg-white/70 p-4 transition-colors hover:border-[var(--brand-rose-light)] hover:bg-white"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-green)]/15 text-[var(--brand-green-dark)]">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[var(--brand-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--brand-text-muted)]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CtaButton label={ctaLabel} size="lg" href="#agendar" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import SectionHeading from "../section-heading";
import CtaButton from "../cta-button";
import type { LucideIcon } from "lucide-react";

type MethodologyProps = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  intro: string;
  steps: { icon: LucideIcon; title: string; description: string }[];
  ctaLabel: string;
};

export default function Methodology({
  eyebrow,
  title,
  titleHighlight,
  intro,
  steps,
  ctaLabel,
}: MethodologyProps) {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleHighlight={titleHighlight}
        />

        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-[var(--brand-text-muted)] sm:text-lg">
          {intro}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="group relative flex flex-col rounded-3xl border border-[var(--brand-beige-dark)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-rose-light)] hover:shadow-xl lg:p-8"
              >
                {/* Step connector */}
                {idx < steps.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute right-[-1rem] top-1/2 hidden h-px w-8 -translate-y-1/2 bg-[var(--brand-rose-light)] md:block"
                  />
                ) : null}

                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-rose)]/10 text-[var(--brand-rose-dark)] transition-colors duration-300 group-hover:bg-[var(--brand-rose)] group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </span>

                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-rose-dark)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-beige)] text-[11px]">
                    {idx + 1}
                  </span>
                  Passo {idx + 1}
                </span>

                <h3 className="mt-3 text-xl font-bold text-[var(--brand-text)] lg:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--brand-text-muted)]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton
            label="Iniciar conversa inicial"
            size="lg"
            href="#agendar"
            showIcon={false}
            variant="soft"
            className="px-8 py-4"
          />
          <span className="sr-only">{ctaLabel}</span>
        </div>
      </div>
    </section>
  );
}

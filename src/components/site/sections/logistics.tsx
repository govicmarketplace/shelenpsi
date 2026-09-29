import { Check, ArrowRight } from "lucide-react";
import SectionHeading from "../section-heading";
import CtaButton from "../cta-button";
import type { LucideIcon } from "lucide-react";

type LogisticsProps = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  items: {
    icon: LucideIcon;
    title: string;
    description: string;
    highlights: string[];
    badge: string;
  }[];
  ctaLabel: string;
};

export default function Logistics({
  eyebrow,
  title,
  titleHighlight,
  items,
  ctaLabel,
}: LogisticsProps) {
  return (
    <section
      id="atendimentos"
      className="relative overflow-hidden bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleHighlight={titleHighlight}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            const isOnline = idx === 0;
            return (
              <article
                key={item.title}
                className={`reveal delay-${(idx + 1) * 100} group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-9 ${
                  isOnline
                    ? "border-[var(--brand-rose-light)] bg-gradient-to-br from-[var(--brand-beige)] to-white"
                    : "border-[var(--brand-beige-dark)] bg-white"
                } shadow-sm`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${
                      isOnline
                        ? "bg-[var(--brand-rose)] text-white"
                        : "bg-[var(--brand-green)]/15 text-[var(--brand-green-dark)]"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                      isOnline
                        ? "bg-[var(--brand-rose)]/15 text-[var(--brand-rose-dark)]"
                        : "bg-[var(--brand-green)]/15 text-[var(--brand-green-dark)]"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[var(--brand-text)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--brand-text-muted)]">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-3 text-sm font-medium text-[var(--brand-text)]"
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                          isOnline
                            ? "bg-[var(--brand-rose)]/15 text-[var(--brand-rose-dark)]"
                            : "bg-[var(--brand-green)]/15 text-[var(--brand-green-dark)]"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  <a
                    href="#agendar"
                    className={`group/btn inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                      isOnline
                        ? "text-[var(--brand-rose-dark)] hover:text-[var(--brand-rose)]"
                        : "text-[var(--brand-green-dark)] hover:text-[var(--brand-green)]"
                    }`}
                  >
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-[var(--brand-beige-dark)] bg-[var(--brand-beige)] p-6 text-center sm:p-8">
          <p className="text-sm leading-relaxed text-[var(--brand-text)] sm:text-base">
            <span className="font-semibold">Não sabe qual formato escolher?</span>{" "}
            <span className="text-[var(--brand-text-muted)]">
              A primeira sessão da Rota Antiburnout serve justamente para isso
              &mdash; mapear seus gatilhos e escolher o formato ideal para a sua
              realidade.
            </span>
          </p>
          <div className="mt-5 flex justify-center">
            <CtaButton label={ctaLabel} href="#agendar" />
          </div>
        </div>
      </div>
    </section>
  );
}

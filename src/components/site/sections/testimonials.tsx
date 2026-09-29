import { Star, Quote } from "lucide-react";
import SectionHeading from "../section-heading";

type TestimonialsProps = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  items: {
    name: string;
    initials: string;
    date: string;
    rating: number;
    text: string;
    accent: string;
  }[];
};

export default function Testimonials({
  eyebrow,
  title,
  titleHighlight,
  items,
}: TestimonialsProps) {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-[var(--brand-rose-light)] opacity-40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-12 h-72 w-72 rounded-full bg-[var(--brand-beige)] opacity-70 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleHighlight={titleHighlight}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
          {items.map((t) => (
            <article
              key={t.name}
              className="group relative flex flex-col rounded-3xl border border-[var(--brand-beige-dark)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <Quote
                className="absolute right-6 top-6 h-10 w-10 text-[var(--brand-rose-light)] transition-colors duration-300 group-hover:text-[var(--brand-rose)]"
                aria-hidden
              />

              <div className="flex items-center gap-1 text-[var(--brand-green-dark)]">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-4 text-base leading-relaxed text-[var(--brand-text)]">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-[var(--brand-beige)] pt-5">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${t.accent}`}
                >
                  {t.initials}
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-bold text-[var(--brand-text)]">
                    {t.name}
                  </span>
                  <span className="text-xs text-[var(--brand-text-muted)]">
                    {t.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

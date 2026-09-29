import Image from "next/image";
import SectionHeading from "../section-heading";
import CtaButton from "../cta-button";

type ProblemsProps = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  items: { image: string; alt: string; title: string; description: string }[];
  ctaLabel: string;
};

export default function Problems({
  eyebrow,
  title,
  titleHighlight,
  items,
  ctaLabel,
}: ProblemsProps) {
  return (
    <section
      id="problemas"
      className="relative overflow-hidden bg-[var(--brand-beige)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleHighlight={titleHighlight}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((item, i) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-[var(--brand-beige-dark)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-sm font-bold text-[var(--brand-rose-dark)] shadow-md backdrop-blur">
                  0{i + 1}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-[var(--brand-text-muted)]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-xl text-sm leading-relaxed text-[var(--brand-text-muted)]">
            Se algum desses pontos soa familiar, pode ser o momento de
            construir um caminho diferente. A terapia é um espaço para isso.
          </p>
          <CtaButton label={ctaLabel} size="lg" href="#agendar" />
        </div>
      </div>
    </section>
  );
}

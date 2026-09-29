import Image from "next/image";
import { MapPin, Globe2, ShieldCheck, Star } from "lucide-react";
import CtaButton from "../cta-button";

type HeroProps = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  badges: string[];
  image: string;
  imageAlt: string;
  ctaLabel: string;
};

export default function Hero({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  badges,
  image,
  imageAlt,
  ctaLabel,
}: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[var(--brand-cream)]"
    >
      {/* Soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-[var(--brand-rose-light)] opacity-50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[var(--brand-beige)] opacity-70 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-24 lg:pt-16 lg:px-8">
        {/* Left: copy */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-rose-light)] bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-rose-dark)] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-rose)]" />
            {eyebrow}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-[var(--brand-text)] sm:text-5xl lg:text-6xl">
            {title}{" "}
            <span className="text-rose-gradient">{titleHighlight}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--brand-text-muted)] sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton label={ctaLabel} size="lg" href="#agendar" />
            <a
              href="#metodo"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--brand-rose)] px-6 py-4 text-sm font-semibold text-[var(--brand-rose-dark)] transition-colors hover:bg-[var(--brand-rose)] hover:text-white sm:text-base"
            >
              Conhecer o método
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--brand-text-muted)]">
            {badges.map((b) => (
              <li key={b} className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[var(--brand-rose)]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Mini social proof */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["MA", "RT", "CR", "JP"].map((i, idx) => (
                <span
                  key={i}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow ${
                    ["bg-[var(--brand-rose)]", "bg-[var(--brand-green)]", "bg-[var(--brand-rose-dark)]", "bg-[var(--brand-rose-light)]"][idx % 4]
                  }`}
                  style={
                    idx === 3
                      ? { color: "var(--brand-rose-dark)" }
                      : undefined
                  }
                >
                  {i}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-[var(--brand-green-dark)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-0.5 text-xs text-[var(--brand-text-muted)]">
                Pacientes que já começaram esse processo
              </p>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2.5rem] bg-[var(--brand-rose-light)]/60" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-white shadow-2xl shadow-rose-900/10">
              <Image
                src={image}
                alt={imageAlt}
                width={768}
                height={1024}
                priority
                className="h-[460px] w-full object-cover object-top sm:h-[560px] lg:h-[620px]"
              />
            </div>

            {/* Floating location card */}
            <div className="absolute -left-3 bottom-6 flex items-center gap-3 rounded-2xl border border-[var(--brand-beige-dark)] bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:-left-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-green)]/15 text-[var(--brand-green-dark)]">
                <MapPin className="h-4 w-4" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-text-muted)]">
                  Presencial
                </span>
                <span className="text-sm font-semibold text-[var(--brand-text)]">
                  Rio de Janeiro
                </span>
              </div>
            </div>

            {/* Floating online card */}
            <div className="absolute -right-3 top-6 flex items-center gap-3 rounded-2xl border border-[var(--brand-beige-dark)] bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:-right-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-rose)]/15 text-[var(--brand-rose-dark)]">
                <Globe2 className="h-4 w-4" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-text-muted)]">
                  Online
                </span>
                <span className="text-sm font-semibold text-[var(--brand-text)]">
                  Brasil &amp; Mundo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div
        aria-hidden
        className="relative -mb-px h-12 w-full bg-[var(--brand-beige)] [mask-image:radial-gradient(ellipse_70%_100%_at_50%_0%,transparent_50%,#000_51%)]"
      />
    </section>
  );
}

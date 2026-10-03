import Image from "next/image";
import { GraduationCap, BookOpen, Video, Heart } from "lucide-react";
import WhatsAppIcon from "../whatsapp-icon";

type EducationItem = { degree: string; school: string };

type AboutProps = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  paragraphs: string[];
  credentials: string[];
  education: EducationItem[];
  image: string;
  name: string;
  role: string;
  ctaLabel: string;
  whatsappUrl: string;
};

export default function About({
  eyebrow,
  title,
  titleHighlight,
  paragraphs,
  credentials,
  education,
  image,
  name,
  role,
  ctaLabel,
  whatsappUrl,
}: AboutProps) {
  const icons = [GraduationCap, BookOpen, Video, Heart];

  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[var(--brand-beige)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Image side */}
          <div className="reveal relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main image */}
              <div className="overflow-hidden rounded-[2.5rem] border-4 border-white bg-white shadow-2xl shadow-rose-900/10">
                <Image
                  src={image}
                  alt={`${name}, ${role}`}
                  width={864}
                  height={1152}
                  className="h-[440px] w-full object-cover object-center sm:h-[560px] lg:h-[600px]"
                />
              </div>

              {/* Education seal card */}
              <div className="absolute -bottom-8 left-2 right-2 rounded-2xl border border-[var(--brand-beige-dark)] bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:left-4 sm:right-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-rose-dark)]">
                  Formação
                </p>
                <ul className="mt-2 space-y-1.5">
                  {education.map((e) => (
                    <li
                      key={e.degree}
                      className="text-xs leading-snug text-[var(--brand-text)]"
                    >
                      <span className="font-bold">{e.degree}:</span>{" "}
                      <span className="text-[var(--brand-text-muted)]">
                        {e.school}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Copy side */}
          <div className="flex flex-col justify-center">
            <span className="reveal inline-flex items-center gap-2 self-start rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-rose-dark)] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-rose)]" />
              {eyebrow}
            </span>

            <h2 className="reveal delay-100 mt-5 text-3xl font-bold leading-[1.15] text-[var(--brand-text)] sm:text-4xl">
              {title}{" "}
              <span className="text-rose-gradient">{titleHighlight}</span>
            </h2>

            <div className="reveal delay-200 mt-6 space-y-4">
              {paragraphs.map((p) => (
                <p
                  key={p}
                  className="text-sm leading-relaxed text-[var(--brand-text-muted)] sm:text-base"
                >
                  {p}
                </p>
              ))}
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {credentials.map((c, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                  <li
                    key={c}
                    className={`reveal delay-${(idx + 1) * 100} flex items-center gap-3 rounded-2xl border border-[var(--brand-beige-dark)] bg-white/80 p-3`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-rose)]/12 text-[var(--brand-rose-dark)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-[var(--brand-text)]">
                      {c}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="reveal delay-400 mt-8 flex items-center gap-3 border-t border-[var(--brand-beige-dark)] pt-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-rose)] text-base font-bold text-white shadow-md">
                {name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </span>
              <div className="flex flex-col">
                <span className="text-base font-bold text-[var(--brand-text)]">
                  {name}
                </span>
                <span className="text-xs text-[var(--brand-text-muted)]">
                  {role}
                </span>
              </div>
            </div>

            {/* WhatsApp CTA with official WhatsApp icon */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="reveal delay-500 group mt-6 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--brand-rose)] px-8 py-4 text-base font-semibold text-[var(--brand-rose-dark)] transition-colors hover:bg-[var(--brand-rose)] hover:text-white"
              aria-label={ctaLabel}
            >
              <WhatsAppIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              <span>{ctaLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

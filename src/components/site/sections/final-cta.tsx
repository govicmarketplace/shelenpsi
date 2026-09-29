"use client";

import { useState } from "react";
import { CalendarHeart, Mail, Phone, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

type FinalCtaProps = {
  title: string;
  titleHighlight: string;
  subtitle: string;
  ctaLabel: string;
  contact: {
    email: string;
    phone: string;
    instagram: string;
    whatsapp: string;
    location: string;
  };
  savedLeads: number;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  format: "online" | "presencial" | "indiferente" | "";
  message: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  format: "",
  message: "",
};

export default function FinalCta({
  title,
  titleHighlight,
  subtitle,
  ctaLabel,
  contact,
  savedLeads,
}: FinalCtaProps) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    if (!form.name || !form.email) {
      setError("Por favor, preencha nome e e-mail para prosseguir.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Não foi possível enviar agora.");
      }

      setStatus("success");
      setForm(EMPTY);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erro inesperado.");
    }
  };

  return (
    <section
      id="agendar"
      className="relative overflow-hidden bg-gradient-to-br from-[var(--brand-rose-dark)] via-[var(--brand-rose)] to-[var(--brand-rose-light)] py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Copy + info */}
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            <CalendarHeart className="h-3.5 w-3.5" />
            Conversa inicial
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-5xl">
            {title}{" "}
            <span className="text-white/80 underline decoration-white/50 decoration-2 underline-offset-4">
              {titleHighlight}
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
            {subtitle}
          </p>

          <ul className="mt-8 space-y-3">
            <li className="flex items-center gap-3 text-sm text-white/90">
              <Clock className="h-4 w-4 shrink-0 text-white" />
              <span>Sessões semanais de 50 minutos</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/90">
              <ShieldCheck className="h-4 w-4 shrink-0 text-white" />
              <span>Espaço seguro, sigiloso e sem julgamentos</span>
            </li>
            <li>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-3 text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-white" />
                <span>{contact.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-3 text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-white" />
                <span className="break-all">{contact.email}</span>
              </a>
            </li>
          </ul>

          <p className="mt-6 text-xs text-white/70">
            Mais de {savedLeads > 0 ? savedLeads : 80} pessoas já iniciaram sua
            conversa.
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-3xl border border-white/40 bg-white/95 p-6 shadow-2xl backdrop-blur sm:p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center py-8 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-green)]/15 text-[var(--brand-green-dark)]">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-[var(--brand-text)]">
                Recebido com carinho!
              </h3>
              <p className="mt-2 text-sm text-[var(--brand-text-muted)]">
                Em breve entrarei em contato para confirmar os detalhes da sua
                conversa inicial. Obrigada pela confiança.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--brand-beige-dark)] px-5 py-2.5 text-sm font-semibold text-[var(--brand-rose-dark)] transition-colors hover:bg-[var(--brand-beige)]"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              <h3 className="text-xl font-bold text-[var(--brand-text)]">
                Solicite sua conversa inicial
              </h3>
              <p className="text-sm text-[var(--brand-text-muted)]">
                Preencha os dados e retornarei em até 24 horas.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-[var(--brand-text)]">
                    Nome*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Seu nome"
                    className="rounded-xl border border-[var(--brand-beige-dark)] bg-white px-4 py-2.5 text-sm text-[var(--brand-text)] outline-none transition-colors focus:border-[var(--brand-rose)] focus:ring-2 focus:ring-[var(--brand-rose)]/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-[var(--brand-text)]">
                    WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="(21) 90000-0000"
                    className="rounded-xl border border-[var(--brand-beige-dark)] bg-white px-4 py-2.5 text-sm text-[var(--brand-text)] outline-none transition-colors focus:border-[var(--brand-rose)] focus:ring-2 focus:ring-[var(--brand-rose)]/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-[var(--brand-text)]">
                  E-mail*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="voce@email.com"
                  className="rounded-xl border border-[var(--brand-beige-dark)] bg-white px-4 py-2.5 text-sm text-[var(--brand-text)] outline-none transition-colors focus:border-[var(--brand-rose)] focus:ring-2 focus:ring-[var(--brand-rose)]/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--brand-text)]">
                  Formato desejado
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["online", "presencial", "indiferente"] as const).map((opt) => {
                    const isActive = form.format === opt;
                    const label =
                      opt === "online" ? "Online" : opt === "presencial" ? "Presencial" : "Indiferente";
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, format: opt }))}
                        className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-colors ${
                          isActive
                            ? "border-[var(--brand-rose)] bg-[var(--brand-rose)] text-white"
                            : "border-[var(--brand-beige-dark)] bg-white text-[var(--brand-text)] hover:border-[var(--brand-rose)]"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-[var(--brand-text)]">
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Conte um pouco sobre o que você busca..."
                  className="resize-none rounded-xl border border-[var(--brand-beige-dark)] bg-white px-4 py-2.5 text-sm text-[var(--brand-text)] outline-none transition-colors focus:border-[var(--brand-rose)] focus:ring-2 focus:ring-[var(--brand-rose)]/20"
                />
              </div>

              {error ? (
                <p className="rounded-xl bg-red-50 px-4 py-2.5 text-xs font-medium text-red-700">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-green)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition-all hover:bg-[var(--brand-green-dark)] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <CalendarHeart className="h-4 w-4" />
                    {ctaLabel}
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-[var(--brand-text-muted)]">
                Ao enviar, você concorda em ser contatado(a) sobre o
                atendimento. Seus dados ficam protegidos.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

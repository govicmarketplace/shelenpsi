import Link from "next/link";
import { HeartHandshake, Mail, Phone, MapPin, Instagram } from "lucide-react";

type NavItem = { label: string; href: string };
type Contact = {
  email: string;
  phone: string;
  instagram: string;
  whatsapp: string;
  location: string;
};

type SiteFooterProps = {
  brand: { name: string; role: string; tagline: string };
  contact: Contact;
  nav: NavItem[];
};

export default function SiteFooter({ brand, contact, nav }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="mt-auto border-t border-[var(--brand-beige-dark)] bg-[var(--brand-beige)]"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-rose)] text-white shadow-md">
                <HeartHandshake className="h-5 w-5" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-[var(--brand-text)]">
                  {brand.name}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--brand-text-muted)]">
                  {brand.tagline}
                </span>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--brand-text-muted)]">
              Atendimento psicológico humanizado e baseado em evidências. Online
              para todo o Brasil e presencial no Rio de Janeiro.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-rose-dark)]">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--brand-text-muted)] transition-colors hover:text-[var(--brand-rose-dark)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-rose-dark)]">
              Contato
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-sm text-[var(--brand-text-muted)] transition-colors hover:text-[var(--brand-rose-dark)]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[var(--brand-rose)]" />
                  <span className="break-all">{contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 text-sm text-[var(--brand-text-muted)] transition-colors hover:text-[var(--brand-rose-dark)]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[var(--brand-rose)]" />
                  <span>{contact.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--brand-text-muted)]">
                <MapPin className="h-4 w-4 shrink-0 text-[var(--brand-rose)]" />
                <span>{contact.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-rose-dark)]">
              Redes
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`https://instagram.com/${contact.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 text-sm text-[var(--brand-text-muted)] transition-colors hover:text-[var(--brand-rose-dark)]"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-[var(--brand-rose)]" />
                  <span>{contact.instagram}</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-white/60 p-4">
              <p className="text-xs leading-relaxed text-[var(--brand-text-muted)]">
                Atendimento presencial em locais de fácil acesso no Rio de
                Janeiro e videochamada para todo o Brasil.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--brand-beige-dark)] pt-6 sm:flex-row">
          <p className="text-xs text-[var(--brand-text-muted)]">
            &copy; {year} {brand.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[var(--brand-text-muted)]">
            {brand.role} &middot; Feito com cuidado
          </p>
        </div>
      </div>
    </footer>
  );
}

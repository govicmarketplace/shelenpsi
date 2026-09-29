"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";
import CtaButton from "./cta-button";

type NavItem = { label: string; href: string };

type SiteHeaderProps = {
  brand: { name: string; role: string; tagline: string };
  nav: NavItem[];
};

export default function SiteHeader({ brand, nav }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-[var(--brand-beige-dark)] bg-[var(--brand-cream)]/85 backdrop-blur-md shadow-sm"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="#inicio" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-rose)] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
            <HeartHandshake className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-[var(--brand-text)] lg:text-lg">
              {brand.name}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--brand-text-muted)]">
              {brand.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--brand-text)] transition-colors hover:bg-[var(--brand-beige)] hover:text-[var(--brand-rose-dark)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaButton label="Agendar Atendimento" className="shadow-md" />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--brand-beige-dark)] bg-white/60 text-[var(--brand-text)] transition-colors hover:bg-[var(--brand-beige)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 origin-top bg-[var(--brand-cream)] px-4 pb-6 pt-2 shadow-lg transition-all duration-300 lg:hidden",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium text-[var(--brand-text)] transition-colors hover:bg-[var(--brand-beige)] hover:text-[var(--brand-rose-dark)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3">
            <CtaButton
              label="Agendar Atendimento"
              size="lg"
              className="w-full"
              href="#agendar"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

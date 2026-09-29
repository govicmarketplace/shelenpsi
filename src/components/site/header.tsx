"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  brand: { name: string; role: string; tagline: string };
};

export default function SiteHeader({ brand }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-all duration-300",
        scrolled
          ? "border-[var(--brand-beige-dark)] bg-[var(--brand-cream)]/85 backdrop-blur-md shadow-sm"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="#inicio" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-rose)] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
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
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import WhatsAppIcon from "./whatsapp-icon";

type FloatingWhatsAppProps = {
  phone: string; // e.g., "5521900000000"
  label: string;
  message?: string;
};

export default function FloatingWhatsApp({
  phone,
  label,
  message,
}: FloatingWhatsAppProps) {
  const [autoShow, setAutoShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Auto-show the balloon on touch/no-hover devices (mobile) after a delay.
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none)");
    if (!mq.matches) return;
    const t = setTimeout(() => setAutoShow(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const href = `https://wa.me/${phone}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  const showBalloon = autoShow && !dismissed;

  return (
    <div
      className="fixed bottom-5 left-5 z-50 flex items-center group print:hidden"
      style={{ height: "3.5rem" }}
    >
      {/* Balloon (appears to the right of the button) */}
      <div
        aria-hidden={!showBalloon}
        className={cn(
          "pointer-events-none absolute left-16 top-1/2 max-w-[15rem] origin-left -translate-y-1/2 rounded-2xl border border-[var(--brand-beige-dark)] bg-white px-4 py-3 shadow-xl transition-all duration-300",
          showBalloon
            ? "scale-100 opacity-100"
            : "scale-90 opacity-0 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100",
        )}
      >
        {/* Close button (only relevant on auto-shown / mobile) */}
        {showBalloon ? (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDismissed(true);
            }}
            className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--brand-text)] text-white shadow-md"
            aria-label="Fechar mensagem"
          >
            <X className="h-3 w-3" />
          </button>
        ) : null}

        <p className="text-sm font-semibold leading-snug text-[var(--brand-text)]">
          {label}
        </p>
        <p className="mt-0.5 text-xs leading-snug text-[var(--brand-text-muted)]">
          Toque para conversar no WhatsApp
        </p>

        {/* Arrow pointing left to the button */}
        <span className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-b border-l border-[var(--brand-beige-dark)] bg-white" />
      </div>

      {/* Pulsing ring */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 h-14 w-14 -translate-y-1/2 animate-ping rounded-full bg-[#25D366] opacity-40"
      />

      {/* WhatsApp button */}
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Falar no WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/30 transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

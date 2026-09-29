"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

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
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.815 9.815 0 001.515 5.252l-.999 3.648 3.973-1.819zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
}

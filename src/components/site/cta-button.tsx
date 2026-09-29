import Link from "next/link";
import { CalendarHeart } from "lucide-react";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  label: string;
  href?: string;
  variant?: "solid" | "outline" | "soft";
  size?: "default" | "lg";
  className?: string;
  showIcon?: boolean;
};

export default function CtaButton({
  label,
  href = "#agendar",
  variant = "solid",
  size = "default",
  className,
  showIcon = true,
}: CtaButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--brand-rose)] focus-visible:ring-offset-background";

  const sizes: Record<string, string> = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants: Record<string, string> = {
    solid:
      "bg-[var(--brand-green)] text-white shadow-lg shadow-emerald-900/10 hover:bg-[var(--brand-green-dark)] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border-2 border-[var(--brand-rose)] text-[var(--brand-rose-dark)] bg-transparent hover:bg-[var(--brand-rose)] hover:text-white",
    soft:
      "bg-[var(--brand-beige)] text-[var(--brand-rose-dark)] hover:bg-[var(--brand-rose-light)] hover:text-white",
  };

  return (
    <Link
      href={href}
      className={cn(base, sizes[size], variants[variant], className)}
      aria-label={label}
    >
      {showIcon && (
        <CalendarHeart className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
      )}
      <span>{label}</span>
    </Link>
  );
}

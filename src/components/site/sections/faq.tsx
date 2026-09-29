"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ArrowRight } from "lucide-react";
import SectionHeading from "../section-heading";
import CtaButton from "../cta-button";

type FaqProps = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  items: { question: string; answer: string }[];
  ctaLabel: string;
};

export default function Faq({
  eyebrow,
  title,
  titleHighlight,
  items,
  ctaLabel,
}: FaqProps) {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[var(--brand-beige)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleHighlight={titleHighlight}
        />

        <div className="mt-12 rounded-3xl border border-[var(--brand-beige-dark)] bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, idx) => (
              <AccordionItem
                key={item.question}
                value={`item-${idx}`}
                className="border-b border-[var(--brand-beige)] last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-[var(--brand-text)] hover:no-underline hover:text-[var(--brand-rose-dark)] sm:text-lg">
                  <span className="flex items-start gap-3 pr-4">
                    <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-rose)]" />
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-8 text-sm leading-relaxed text-[var(--brand-text-muted)] sm:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-white p-6 text-center shadow-sm sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-[var(--brand-text)]">
              Ainda com dúvidas?
            </h3>
            <p className="mt-1 text-sm text-[var(--brand-text-muted)]">
              Fale comigo diretamente. Será um prazer esclarecer tudo o que
              precisar.
            </p>
          </div>
          <a
            href="#agendar"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-[var(--brand-rose)] px-6 py-3 text-sm font-semibold text-[var(--brand-rose-dark)] transition-colors hover:bg-[var(--brand-rose)] hover:text-white"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

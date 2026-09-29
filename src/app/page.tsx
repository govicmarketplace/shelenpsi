import {
  siteConfig,
  problems,
  methodology,
  valueProps,
  logistics,
  faqs,
  testimonials,
} from "@/components/site/site-content";
import SiteHeader from "@/components/site/header";
import FloatingWhatsApp from "@/components/site/floating-whatsapp";
import Hero from "@/components/site/sections/hero";
import Problems from "@/components/site/sections/problems";
import Methodology from "@/components/site/sections/methodology";
import ValueProposition from "@/components/site/sections/value-proposition";
import Logistics from "@/components/site/sections/logistics";
import About from "@/components/site/sections/about";
import Testimonials from "@/components/site/sections/testimonials";
import Faq from "@/components/site/sections/faq";
import FinalCta from "@/components/site/sections/final-cta";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-cream)]">
      <SiteHeader brand={siteConfig.brand} />
      <main className="flex-1">
        <Hero
          title={siteConfig.hero.title}
          titleHighlight={siteConfig.hero.titleHighlight}
          subtitle={siteConfig.hero.subtitle}
          badges={siteConfig.hero.badges}
          image={siteConfig.hero.image}
          imageAlt={siteConfig.hero.imageAlt}
          ctaLabel={siteConfig.hero.ctaLabel}
          secondaryCtaLabel={siteConfig.hero.secondaryCtaLabel}
        />
        <Problems
          eyebrow={siteConfig.problems.eyebrow}
          title={siteConfig.problems.title}
          titleHighlight={siteConfig.problems.titleHighlight}
          closingText={siteConfig.problems.closingText}
          items={problems}
          ctaLabel={siteConfig.problems.ctaLabel}
        />
        <Methodology
          eyebrow={siteConfig.methodology.eyebrow}
          title={siteConfig.methodology.title}
          titleHighlight={siteConfig.methodology.titleHighlight}
          intro={siteConfig.methodology.intro}
          steps={methodology}
          ctaLabel={siteConfig.methodology.ctaLabel}
        />
        <ValueProposition
          eyebrow={siteConfig.value.eyebrow}
          title={siteConfig.value.title}
          titleHighlight={siteConfig.value.titleHighlight}
          items={valueProps}
          image={siteConfig.value.image}
          imageAlt={siteConfig.value.imageAlt}
          ctaLabel={siteConfig.value.ctaLabel}
        />
        <Logistics
          eyebrow={siteConfig.logistics.eyebrow}
          title={siteConfig.logistics.title}
          items={logistics}
          ctaLabel={siteConfig.logistics.ctaLabel}
        />
        <About
          eyebrow={siteConfig.about.eyebrow}
          title={siteConfig.about.title}
          titleHighlight={siteConfig.about.titleHighlight}
          paragraphs={siteConfig.about.paragraphs}
          credentials={siteConfig.about.credentials}
          education={siteConfig.about.education}
          image={siteConfig.about.image}
          profileImage={siteConfig.about.profileImage}
          name={siteConfig.about.name}
          role={siteConfig.about.role}
          ctaLabel={siteConfig.about.ctaLabel}
          whatsappUrl={siteConfig.about.whatsappUrl}
        />
        <Testimonials
          eyebrow={siteConfig.testimonials.eyebrow}
          title={siteConfig.testimonials.title}
          titleHighlight={siteConfig.testimonials.titleHighlight}
          items={testimonials}
        />
        <Faq
          eyebrow={siteConfig.faq.eyebrow}
          title={siteConfig.faq.title}
          titleHighlight={siteConfig.faq.titleHighlight}
          items={faqs}
          ctaLabel={siteConfig.faq.ctaLabel}
        />
        <FinalCta
          title={siteConfig.finalCta.title}
          titleHighlight={siteConfig.finalCta.titleHighlight}
          subtitle={siteConfig.finalCta.subtitle}
          ctaLabel={siteConfig.finalCta.ctaLabel}
          contact={siteConfig.contact}
        />
      </main>
      <FloatingWhatsApp
        phone={siteConfig.floatingWhatsapp.phone}
        label={siteConfig.floatingWhatsapp.label}
        message={siteConfig.floatingWhatsapp.message}
      />
    </div>
  );
}

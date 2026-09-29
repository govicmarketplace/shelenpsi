import { db } from "@/lib/db";
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
import SiteFooter from "@/components/site/footer";
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
  // Count existing leads so we can show a small social-proof number.
  let savedLeads = 0;
  try {
    savedLeads = await db.lead.count();
  } catch {
    savedLeads = 0;
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-cream)]">
      <SiteHeader brand={siteConfig.brand} nav={siteConfig.nav} />
      <main className="flex-1">
        <Hero
          eyebrow={siteConfig.hero.eyebrow}
          title={siteConfig.hero.title}
          titleHighlight={siteConfig.hero.titleHighlight}
          subtitle={siteConfig.hero.subtitle}
          badges={siteConfig.hero.badges}
          image={siteConfig.hero.image}
          imageAlt={siteConfig.hero.imageAlt}
          ctaLabel={siteConfig.ctaLabel}
        />
        <Problems
          eyebrow={siteConfig.problems.eyebrow}
          title={siteConfig.problems.title}
          titleHighlight={siteConfig.problems.titleHighlight}
          items={problems}
          ctaLabel={siteConfig.ctaLabel}
        />
        <Methodology
          eyebrow={siteConfig.methodology.eyebrow}
          title={siteConfig.methodology.title}
          titleHighlight={siteConfig.methodology.titleHighlight}
          intro={siteConfig.methodology.intro}
          steps={methodology}
          ctaLabel={siteConfig.ctaLabel}
        />
        <ValueProposition
          eyebrow={siteConfig.value.eyebrow}
          title={siteConfig.value.title}
          titleHighlight={siteConfig.value.titleHighlight}
          items={valueProps}
          image={siteConfig.value.image}
          imageAlt={siteConfig.value.imageAlt}
          ctaLabel={siteConfig.ctaLabel}
        />
        <Logistics
          eyebrow={siteConfig.logistics.eyebrow}
          title={siteConfig.logistics.title}
          items={logistics}
          ctaLabel={siteConfig.ctaLabel}
        />
        <About
          eyebrow={siteConfig.about.eyebrow}
          title={siteConfig.about.title}
          titleHighlight={siteConfig.about.titleHighlight}
          paragraphs={siteConfig.about.paragraphs}
          credentials={siteConfig.about.credentials}
          image={siteConfig.about.image}
          profileImage={siteConfig.about.profileImage}
          name={siteConfig.about.name}
          role={siteConfig.about.role}
          ctaLabel={siteConfig.ctaLabel}
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
          ctaLabel={siteConfig.ctaLabel}
        />
        <FinalCta
          title={siteConfig.finalCta.title}
          titleHighlight={siteConfig.finalCta.titleHighlight}
          subtitle={siteConfig.finalCta.subtitle}
          ctaLabel={siteConfig.ctaLabel}
          contact={siteConfig.contact}
          savedLeads={savedLeads}
        />
      </main>
      <SiteFooter brand={siteConfig.brand} contact={siteConfig.contact} nav={siteConfig.nav} />
    </div>
  );
}

import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ScrollReveal from "@/components/site/scroll-reveal";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shelen Santos | Rota Antiburnout - Psicologia Comportamental",
  description:
    "Psicoterapia focada em burnout para mulheres de 25 a 45 anos que cansaram de viver no limite. Acompanhamento terapêutico prático para sair da sobrecarga sem largar a sua carreira. Online e presencial no Rio de Janeiro.",
  keywords: [
    "burnout",
    "esgotamento",
    "sobrecarga",
    "psicóloga",
    "psicologia comportamental",
    "Rota Antiburnout",
    "terapia para mulheres",
    "ansiedade no trabalho",
    "psicóloga Rio de Janeiro",
    "atendimento online",
    "Shelen Santos",
  ],
  authors: [{ name: "Shelen Santos" }],
  openGraph: {
    title: "Shelen Santos | Rota Antiburnout",
    description:
      "Psicoterapia focada em burnout para mulheres de 25 a 45 anos. Saia da sobrecarga sem largar a sua carreira.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shelen Santos | Rota Antiburnout",
    description:
      "Psicoterapia focada em burnout. Online para o Brasil e presencial no Rio de Janeiro.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/*
          Progressive enhancement: mark `<html>` as JS-ready BEFORE the body
          paints. The CSS only hides `.reveal` elements when this class is
          present, so users without JS (or if JS fails) still see all content.
          The safety timeout removes the class if the ScrollReveal observer
          never runs (e.g. a runtime error), guaranteeing content is visible.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js-ready');setTimeout(function(){if(document.querySelectorAll('.reveal').length>0&&document.querySelectorAll('.reveal.is-visible').length===0){document.documentElement.classList.remove('js-ready')}},2500);",
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        {/*
          Body-end inline script: immediately reveal above-the-fold `.reveal`
          elements right after the HTML is parsed (before React hydration).
          This eliminates the blank-page window between first paint and the
          ScrollReveal effect running.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var vh=window.innerHeight;document.querySelectorAll('.reveal:not(.is-visible)').forEach(function(el){var r=el.getBoundingClientRect();if(r.top<vh&&r.bottom>0){el.classList.add('is-visible')}})})()",
          }}
        />
        <ScrollReveal />
        <Toaster />

        {/* Meta Pixel Code — tracks PageView on all pages.
            Uses strategy="afterInteractive" so it loads AFTER hydration
            and never breaks React hydration. */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1120705677140263');
fbq('track', 'PageView');`}
        </Script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1120705677140263&ev=PageView&noscript=1" />`,
          }}
        />
      </body>
    </html>
  );
}

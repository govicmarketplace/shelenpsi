import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
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
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <ScrollReveal />
        <Toaster />
        {/* Fallback for users with JS disabled: reveal everything immediately */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}

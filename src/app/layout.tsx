import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
  title: "Bruna Chelen | Psicóloga Clínica - TCC Online e Presencial",
  description:
    "Psicóloga clínica especialista em Terapia Cognitivo Comportamental (TCC). Atendimentos online para todo o Brasil e presenciais no Rio de Janeiro. Ansiedade e esgotamento não precisam ditar sua vida.",
  keywords: [
    "psicóloga",
    "terapia",
    "TCC",
    "Terapia Cognitivo Comportamental",
    "ansiedade",
    "burnout",
    "psicóloga Rio de Janeiro",
    "atendimento online",
    "Bruna Chelen",
  ],
  authors: [{ name: "Bruna Chelen" }],
  openGraph: {
    title: "Bruna Chelen | Psicóloga Clínica",
    description:
      "Terapia Cognitivo Comportamental (TCC). Atendimentos online e presenciais no Rio de Janeiro.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruna Chelen | Psicóloga Clínica",
    description:
      "Terapia Cognitivo Comportamental. Online para o Brasil e presencial no Rio de Janeiro.",
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
        <Toaster />
      </body>
    </html>
  );
}

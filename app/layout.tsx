import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import { ContactFormScript } from "@/components/contact-form-script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "HelpHub — Demos dos pacotes de landing page",
    template: "%s · HelpHub",
  },
  description:
    "Quatro landing pages de demonstração (Essencial, Plus, Avançado e Premium) com o mesmo negócio fictício: Oficina Norte. Visual preto, branco e cinza, de propósito.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${instrument.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        {children}
        <ContactFormScript />
      </body>
    </html>
  );
}

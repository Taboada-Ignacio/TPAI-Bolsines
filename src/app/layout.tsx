import type { Metadata, Viewport } from "next";
import {
  Instrument_Serif,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";
import { cookies } from "next/headers";
import type { ReactNode } from "react";
import { parseTema, THEME_COLOR_BY_TEMA, THEME_COOKIE_NAME } from "@/lib/theme";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TPAI Bolsines — Sistema de Bolsines",
  description: "Gestión y seguimiento de bolsines en tránsito.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: THEME_COLOR_BY_TEMA.light,
    },
    { media: "(prefers-color-scheme: dark)", color: THEME_COLOR_BY_TEMA.dark },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const tema = parseTema(cookieStore.get(THEME_COOKIE_NAME)?.value);

  return (
    <html
      lang="es"
      data-theme={tema}
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-dvh bg-canvas text-fg font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

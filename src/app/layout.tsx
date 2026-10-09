import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

// Tipografía de titulares del diseño HUD (angular, técnica)
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-cp",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.heroIntro,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.heroIntro,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${chakraPetch.variable}`}
    >
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Fondo HUD: rejilla técnica + viñeta + scanlines (fijo, decorativo) */}
          <div aria-hidden className="hud-backdrop" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

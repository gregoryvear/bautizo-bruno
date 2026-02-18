import type { Metadata, Viewport } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";

// ═══════════════════════════════════════════════════════════════════════════
// FUENTES
// Inter: Sans-serif limpia para todo el contenido
// Great Vibes: Script elegante para "Bautizo" (estilo invitación premium)
// ═══════════════════════════════════════════════════════════════════════════

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

// ═══════════════════════════════════════════════════════════════════════════
// METADATA - SEO & Open Graph
// Optimizado para compartir en WhatsApp
// ═══════════════════════════════════════════════════════════════════════════

export const metadata: Metadata = {
  title: "Bautizo de Bruno | 11 de Abril 2026",
  description:
    "Estás invitado al Bautizo de Bruno Goncalvez Sevilla. Sábado 11 de abril de 2026 a las 12:00 PM en St. Katharine Drexel Catholic Parish, Weston, Florida.",
  keywords: ["bautismo", "bruno", "goncalvez", "sevilla", "weston", "florida", "invitación"],
  authors: [{ name: "Familia Goncalvez Sevilla" }],
  creator: "Familia Goncalvez Sevilla",
  
  // Open Graph - Para compartir en WhatsApp/Facebook/etc
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://bautismo-bruno.vercel.app", // Actualizar con URL real
    siteName: "Bautizo de Bruno",
    title: "🕊️ Bautizo de Bruno | 11 de Abril 2026",
    description:
      "Con mucha alegría, te invitamos a celebrar el Bautizo de Bruno. Sábado 11 de abril, 12:00 PM • Weston, FL",
    images: [
      {
        url: "/og-image.png", // Crear esta imagen
        width: 1200,
        height: 630,
        alt: "Bautizo de Bruno Goncalvez Sevilla - 11 de Abril 2026",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "🕊️ Bautizo de Bruno | 11 de Abril 2026",
    description:
      "Con mucha alegría, te invitamos a celebrar el Bautizo de Bruno. Sábado 11 de abril, 12:00 PM • Weston, FL",
    images: ["/og-image.png"],
  },
  
  // Iconos
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  
  // Otros
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FDFBF7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${greatVibes.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

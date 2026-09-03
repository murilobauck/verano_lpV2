import type { Metadata } from "next";
import { SiteJsonLd } from "./components/common/SiteJsonLd";
import "../styles/index.css";

const description =
  "Posicionamos empresas locais no topo do Google Maps com estratégia, dados e execução de alto nível. Solicite o diagnóstico gratuito do seu perfil.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.veranocompany.com.br"),
  title: "Verano Company | Agência de SEO Local e Google Maps",
  description,
  alternates: {
    canonical: "https://www.veranocompany.com.br/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Verano Company",
    title: "Verano Company | Agência de SEO Local e Google Maps",
    description,
    url: "https://www.veranocompany.com.br/",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className="bg-black min-h-screen text-white"
        style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
      >
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}

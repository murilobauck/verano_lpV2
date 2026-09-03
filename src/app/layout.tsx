import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MotionConfigProvider } from "./components/common/MotionConfigProvider";
import { SiteJsonLd } from "./components/common/SiteJsonLd";
import "../styles/index.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.veranocompany.com.br"),
  title: {
    template: "%s | Verano Company",
    default: "Verano Company | Agência de SEO Local e Google Maps",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Verano Company",
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
    <html lang="pt-BR" className={inter.variable}>
      <body
        className="bg-black min-h-screen text-white"
        style={{ fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif" }}
      >
        <SiteJsonLd />
        <MotionConfigProvider>{children}</MotionConfigProvider>
      </body>
    </html>
  );
}

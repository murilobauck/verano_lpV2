import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Verano Co.",
  description:
    "Posicionamos empresas locais no topo do Google Maps com estratégia, dados e execução de alto nível.",
  icons: {
    icon: "/favicon.svg",
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
        {children}
      </body>
    </html>
  );
}

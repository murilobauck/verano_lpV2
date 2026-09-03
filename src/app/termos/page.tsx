import type { Metadata } from "next";
import { TermsContent } from "./TermsContent";

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description:
    "Termos de Serviço da Verano Company: planos, pagamento, cancelamento, garantia e responsabilidades.",
  alternates: {
    canonical: "/termos",
  },
  openGraph: {
    title: "Termos de Serviço | Verano Company",
    url: "/termos",
  },
};

export default function Page() {
  return <TermsContent />;
}

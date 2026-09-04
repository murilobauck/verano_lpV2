import type { Metadata } from "next";
import { TermsContent } from "./TermsContent";
import { sharedOpenGraph } from "../shared-metadata";

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description:
    "Termos de Serviço da Verano Company: planos, pagamento, cancelamento, garantia e responsabilidades.",
  alternates: {
    canonical: "/termos",
  },
  openGraph: {
    ...sharedOpenGraph,
    title: "Termos de Serviço | Verano Company",
    url: "/termos",
  },
};

export default function Page() {
  return <TermsContent />;
}

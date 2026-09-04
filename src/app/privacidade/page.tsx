import type { Metadata } from "next";
import { PrivacyContent } from "./PrivacyContent";
import { sharedOpenGraph } from "../shared-metadata";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Verano Company coleta, usa e protege dados pessoais dos clientes, em conformidade com a LGPD.",
  alternates: {
    canonical: "/privacidade",
  },
  openGraph: {
    ...sharedOpenGraph,
    title: "Política de Privacidade | Verano Company",
    url: "/privacidade",
  },
};

export default function Page() {
  return <PrivacyContent />;
}

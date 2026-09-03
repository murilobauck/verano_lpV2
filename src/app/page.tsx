import type { Metadata } from "next";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Results } from "./components/sections/Results";
import { Services } from "./components/sections/Services";
import { Process } from "./components/sections/Process";
import { Pricing } from "./components/sections/Pricing";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";

const description =
  "Posicionamos empresas locais no topo do Google Maps com estratégia, dados e execução de alto nível. Solicite o diagnóstico gratuito do seu perfil.";

export const metadata: Metadata = {
  description,
  alternates: {
    canonical: "https://www.veranocompany.com.br/",
  },
  openGraph: {
    title: "Verano Company | Agência de SEO Local e Google Maps",
    description,
    url: "https://www.veranocompany.com.br/",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Results />
        <Services />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

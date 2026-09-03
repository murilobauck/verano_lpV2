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

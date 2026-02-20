import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Results } from "./components/Results";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  return (
    <div
      className="bg-black min-h-screen text-white"
      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #222;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #333;
        }

        /* Selection */
        ::selection {
          background: rgba(66, 133, 244, 0.3);
          color: #fff;
        }

        /* Input select option dark styling */
        select option {
          background-color: #0a0a0a;
          color: #fff;
        }
      `}</style>

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
    </div>
  );
}

export default App;

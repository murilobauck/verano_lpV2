import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";

function App() {
  return (
    <BrowserRouter>
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

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos" element={<TermsOfService />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

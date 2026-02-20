import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Serviços", href: "#services" },
    { name: "Resultados", href: "#results" },
    { name: "Processo", href: "#process" },
    { name: "Planos", href: "#pricing" },
    { name: "Cases", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#4285F4] via-[#EA4335] to-[#FBBC05] opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-[2px] rounded-[6px] bg-black flex items-center justify-center">
              <span className="text-white text-xs tracking-tighter" style={{ fontWeight: 800 }}>V</span>
            </div>
          </div>
          <span className="text-white tracking-tight">
            Verano<span className="text-gray-500"> Company</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs text-gray-400 hover:text-white transition-colors duration-200 uppercase tracking-[0.15em] font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="relative group px-5 py-2.5 text-sm font-semibold text-white border border-white/20 rounded-lg hover:border-[#4285F4]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(66,133,244,0.2)] overflow-hidden"
          >
            <span className="relative z-10">Diagnóstico Gratuito</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white text-sm uppercase tracking-widest font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 text-center px-5 py-3 text-sm font-semibold text-white border border-white/20 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Diagnóstico Gratuito
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

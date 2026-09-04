"use client";

import { m, AnimatePresence } from "motion/react";
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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 pt-4 md:pt-6 pointer-events-none">
      <div
        className={`w-full transition-all duration-500 pointer-events-auto flex flex-col ${scrolled
          ? "max-w-5xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] py-3 px-6"
          : "max-w-7xl bg-transparent border border-transparent py-4 px-2"
          }`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <div className="relative w-8 h-8 shrink-0">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#4285F4] via-[#EA4335] to-[#FBBC05] opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-[2px] rounded-[6px] bg-black flex items-center justify-center">
                <span className="text-white text-xs tracking-tighter" style={{ fontWeight: 800 }}>V</span>
              </div>
            </div>
            <span className="text-white tracking-tight transition-opacity duration-300 whitespace-nowrap">
              Verano<span className="text-gray-400"> Company</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-gray-400 hover:text-white transition-all duration-300 uppercase tracking-[0.15em] font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              className="relative group px-5 py-2.5 text-sm font-semibold text-white border border-white/20 rounded-lg hover:border-[#4285F4]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(66,133,244,0.2)] overflow-hidden whitespace-nowrap"
            >
              <span className="relative z-10">Diagnóstico Gratuito</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white p-2 shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <m.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden w-full"
            >
              <div className="flex flex-col gap-4 pt-6 pb-2 border-t border-white/5 mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm uppercase tracking-widest font-medium transition-colors px-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 text-center px-5 py-3 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-lg active:bg-white/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Diagnóstico Gratuito
                </a>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
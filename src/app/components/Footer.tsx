import { ArrowUpRight } from "lucide-react";

function IconInstagram() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const footerLinks = {
  Serviços: [
    { label: "Auditoria & Otimização", href: "#services" },
    { label: "Blindagem de Reputação", href: "#services" },
    { label: "Gestão de Avaliações", href: "#services" },
    { label: "Inteligência & Relatórios", href: "#services" },
  ],
  Empresa: [
    { label: "Nosso Processo", href: "#process" },
    { label: "Resultados", href: "#results" },
    { label: "Cases de Sucesso", href: "#testimonials" },
    { label: "Planos", href: "#pricing" },
  ],
  Legal: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Serviço", href: "#" },
  ],
};

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: IconInstagram,
  },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06] pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5 group">
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
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Posicionamos empresas locais no topo do Google Maps com estratégia, dados e execução de alto nível.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:border-white/15 hover:bg-white/[0.08] transition-all duration-200"
                >
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs text-gray-600 uppercase tracking-[0.18em] font-semibold mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 text-sm hover:text-gray-200 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 Verano Company. Todos os direitos reservados.
          </p>
          <a
            href="#hero"
            className="group inline-flex items-center gap-1.5 text-gray-600 text-xs hover:text-gray-300 transition-colors duration-200"
          >
            Voltar ao topo
            <ArrowUpRight size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
}

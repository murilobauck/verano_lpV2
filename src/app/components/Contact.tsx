import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Contact() {

  return (
    <section id="contact" className="py-28 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(66,133,244,0.05)_0%,transparent_60%)]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-xs text-[#4285F4] uppercase tracking-[0.25em] font-semibold mb-4">
                Fale conosco
              </p>
              <h2 className="text-3xl md:text-5xl text-white leading-tight tracking-tight mb-5">
                Pronto para liderar
                <br />
                <span className="text-gray-500">o Google na sua cidade?</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Solicite seu diagnóstico gratuito. Nossa equipe analisa seu perfil e apresenta um plano de ação personalizado — sem compromisso.
              </p>
            </div>


            {/* Contact info */}
            <div className="space-y-5">
              <a
                href="mailto:contato@veranocompany.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#4285F4]/10 flex items-center justify-center text-[#4285F4] flex-shrink-0 group-hover:bg-[#4285F4]/20 transition-colors">
                  <IconMail />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">E-mail</p>
                  <p className="text-gray-200 text-sm group-hover:text-white transition-colors">
                    contato@veranocompany.com.br
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/5519991501988"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#34A853]/10 flex items-center justify-center text-[#34A853] flex-shrink-0 group-hover:bg-[#34A853]/20 transition-colors">
                  <IconWhatsApp />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">WhatsApp</p>
                  <p className="text-gray-200 text-sm group-hover:text-white transition-colors">
                    +55 (19) 99574-8782
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EA4335]/10 flex items-center justify-center text-[#EA4335] flex-shrink-0">
                  <IconPin />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Localização</p>
                  <p className="text-gray-200 text-sm">Campinas, SP — Atendimento remoto nacional</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-950 border border-white/[0.06] rounded-2xl p-12 relative overflow-hidden flex flex-col items-center justify-center text-center gap-8"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#34A853]/8 blur-[60px] rounded-full pointer-events-none" />

            {/* WhatsApp Icon */}
            <div className="relative w-20 h-20 rounded-full bg-[#34A853]/10 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#34A853] flex items-center justify-center">
                <IconWhatsApp />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-3 relative z-10">
              <h3 className="text-white text-2xl font-semibold">
                Fale direto com nossa equipe
              </h3>
              <p className="text-gray-400 text-base leading-relaxed max-w-md">
                Clique no botão abaixo e converse com um especialista.
              </p>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5519995748782?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20gratuito%20do%20meu%20perfil%20no%20Google."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#34A853] overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(52,168,83,0.3)] hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <IconWhatsApp />
              <span className="relative">Iniciar Conversa no WhatsApp</span>
              <ArrowRight
                size={18}
                className="relative group-hover:translate-x-0.5 transition-transform"
              />
            </a>

            <p className="text-gray-600 text-xs relative z-10">
              Atendimento de segunda a sexta, das 9h às 18h
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

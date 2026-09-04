"use client";

import { m } from "motion/react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico Estratégico",
    description:
      "Analisamos profundamente seu perfil atual, a concorrência local e as oportunidades de ranqueamento. Mapeamos exatamente onde sua empresa perde visibilidade e clientes.",
    color: "#4285F4",
    outcome: "Relatório de oportunidades",
    icon: (
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Estruturação & Otimização",
    description:
      "Reestruturamos seu perfil do zero com arquitetura de palavras-chave, categorias precisas, horários, atributos e informações que o algoritmo do Google prioriza.",
    color: "#EA4335",
    outcome: "Perfil completamente otimizado",
    icon: (
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Construção de Autoridade",
    description:
      "Desenhamos suas campanhas promocionais, arquitetamos seu cronograma de postagens e construímos sinais de relevância local e avaliações legítimas que elevam seu ranking no algoritmo.",
    color: "#FBBC05",
    outcome: "Crescimento orgânico constante",
    icon: (
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Monitoramento & Escala",
    description:
      "Acompanhamento semanal de métricas, ajustes de estratégia baseados em dados e relatórios mensais detalhados. Iteramos continuamente para manter e escalar sua posição.",
    color: "#34A853",
    outcome: "Resultados escaláveis e sustentáveis",
    icon: (
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
  },
];

export function Process() {
  return (
    <section id="process" className="py-28 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(66,133,244,0.04)_0%,transparent_60%)]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left sticky */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 lg:sticky lg:top-28"
          >
            <p className="text-xs text-[#4285F4] uppercase tracking-[0.25em] font-semibold mb-4">
              Nossa metodologia
            </p>
            <h2 className="text-3xl md:text-5xl text-white leading-tight tracking-tight mb-6">
              Um processo
              <br />
              <span className="text-gray-400">desenhado para</span>
              <br />
              resultados reais.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Nenhuma ação é aleatória. Cada etapa do nosso processo foi validada com centenas de perfis para garantir o máximo de retorno com consistência.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/15 rounded-xl px-6 py-3 hover:border-[#4285F4]/40 hover:shadow-[0_0_20px_rgba(66,133,244,0.15)] transition-all duration-300"
            >
              Iniciar meu processo
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </m.div>

          {/* Right steps */}
          <div className="lg:w-7/12 space-y-0">
            {steps.map((step, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-white/[0.06]" />
                )}

                {/* Number dot */}
                <div
                  className="relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border"
                  style={{
                    backgroundColor: `${step.color}10`,
                    borderColor: `${step.color}30`,
                    color: step.color,
                    boxShadow: `0 0 20px ${step.color}10`,
                  }}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 pb-4 border-b border-white/[0.04] last:border-0 group-hover:border-white/[0.08] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono" style={{ color: `${step.color}80` }}>{step.number}</span>
                    <h3 className="text-white text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.description}</p>
                  <div className="inline-flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: step.color, boxShadow: `0 0 6px ${step.color}` }}
                    />
                    <span className="text-xs font-medium" style={{ color: step.color }}>
                      {step.outcome}
                    </span>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
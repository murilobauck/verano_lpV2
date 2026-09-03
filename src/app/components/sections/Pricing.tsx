"use client";

import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    tag: null,
    price: "R$ 697",
    period: "/mês",
    description: "Para empresas que querem iniciar com o pé direito no Google.",
    color: "#4285F4",
    features: [
      "Auditoria completa do perfil",
      "Otimização inicial full",
      "Cronograma estratégico (1 post/sem)",
      "Análise de avaliações e reviews",
      "Relatório mensal de desempenho",
      "Suporte por WhatsApp",
    ],
    cta: "Começar com Essencial",
    highlight: false,
  },
  {
    name: "Dominance",
    tag: "Mais escolhido",
    price: "R$ 1.500",
    period: "/mês",
    description: "Para negócios sérios que querem liderar o mercado local.",
    color: "#FBBC05",
    features: [
      "Tudo do Essencial",
      "Plan. de cronograma (3 dias/sem.)",
      "Estratégia de captação de avaliações",
      "Curadoria de remoção (reviews falsos)",
      "Consultoria de Q&A do perfil",
      "Análise de concorrência mensal",
      "Relatório executivo quinzenal",
      "Gerente de conta dedicado",
      "Reunião estratégica mensal",
    ],
    cta: "Quero ser Dominante",
    highlight: true,
  },
  {
    name: "Authority",
    tag: null,
    price: "Sob consulta",
    period: "",
    description: "Para múltiplas unidades ou empresas que exigem o máximo de resultado.",
    color: "#34A853",
    features: [
      "Tudo do Dominance",
      "Múltiplos perfis / unidades",
      "Estratégia de SEO Local integrada",
      "Gestão de campanhas Google Ads local",
      "Acesso direto ao time sênior",
    ],
    cta: "Falar com especialista",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(251,188,5,0.04)_0%,transparent_60%)]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-[#FBBC05] uppercase tracking-[0.25em] font-semibold mb-4">
            Planos e investimento
          </p>
          <h2 className="text-3xl md:text-5xl text-white leading-tight tracking-tight mb-4">
            Invista em presença.
            <br />
            <span className="text-gray-400">Colha clientes.</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Contratos mensais sem fidelidade. Cancelamento a qualquer momento. Resultado ou seu dinheiro de volta nos primeiros 30 dias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                borderColor: plan.highlight ? `${plan.color}40` : "rgba(255,255,255,0.06)",
                willChange: "opacity, transform",
                transform: "translateZ(0)",
              }}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-colors duration-300 ${plan.highlight
                ? "bg-white/[0.04] border-2 shadow-[0_0_60px_rgba(251,188,5,0.08)]"
                : "bg-white/[0.02] border hover:bg-white/[0.03]"
                }`}
            >
              {plan.tag && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold"
                  style={{ backgroundColor: plan.color, color: "#000" }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  {plan.tag}
                </div>
              )}

              {/* Header */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: plan.color }}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-white text-4xl tracking-tight">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.05]" />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check
                      size={14}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: plan.color }}
                    />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/5519995748782?text=Olá!%20Quero%20contratar%20o%20plano%20${encodeURIComponent(plan.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-full mt-2 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${plan.highlight
                  ? "text-black hover:opacity-90"
                  : "text-white border border-white/10 hover:border-white/25 hover:bg-white/[0.03]"
                  }`}
                style={
                  plan.highlight
                    ? { backgroundColor: plan.color, boxShadow: `0 0 30px ${plan.color}30` }
                    : {}
                }
              >
                {plan.cta}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-400 text-xs mt-10"
        >
          Sem taxa de setup · Sem fidelidade mínima · Garantia de 30 dias ou reembolso integral
        </motion.p>
      </div>
    </section>
  );
}
"use client";

import { motion } from "motion/react";

/* Custom icon components for a unique, non-generic look */
function IconAudit({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </svg>
  );
}

function IconReputation({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 14.2l-4.8 2.4.9-5.3-3.8-3.7 5.3-.8z" />
      <path d="M4 20h16" />
    </svg>
  );
}

function IconContent({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
      <circle cx="15" cy="15" r="2" />
    </svg>
  );
}

function IconCamera({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
      <path d="M17 10h.01" />
    </svg>
  );
}

function IconAnalytics({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M7 16l4-8 4 4 4-6" />
      <circle cx="7" cy="16" r="1.5" fill={color} />
      <circle cx="11" cy="8" r="1.5" fill={color} />
      <circle cx="15" cy="12" r="1.5" fill={color} />
      <circle cx="19" cy="6" r="1.5" fill={color} />
    </svg>
  );
}

function IconShield({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const services = [
  {
    number: "01",
    title: "Otimização de Algoritmo (Google Profile)",
    description:
      "Planejamento estratégico no Perfil da Empresa no Google (Google Meu Negócio) com o objetivo estrito de aumentar a relevância do perfil, otimizar o ranqueamento local e elevar a pontuação da empresa no algoritmo de busca.",
    Icon: IconAudit,
    color: "#4285F4",
    tag: "Fundação",
  },
  {
    number: "02",
    title: "Blindagem de Reputação",
    description:
      "Proteção ativa da sua imagem online. Atuamos na remoção de avaliações falsas e difamatórias que prejudicam seu estabelecimento, além de estratégias para captação de reviews legítimos que fortalecem sua autoridade no Google.",
    Icon: IconShield,
    color: "#FBBC05",
    tag: "Reputação",
  },
  {
    number: "03",
    title: "Curadoria e Cronograma de Conteúdo",
    description:
      "Orientação técnica exata sobre quais fotografias devem ser utilizadas e em quais dias da semana elas devem ir ao ar para maximizar a retenção e o engajamento.",
    Icon: IconContent,
    color: "#EA4335",
    tag: "Presença",
  },
  {
    number: "04",
    title: "Consultoria Promocional",
    description:
      "Planejamento e estruturação de promoções comerciais embasadas em dados, garantindo maior conversão e atração da demanda local reprimida.",
    Icon: IconCamera,
    color: "#34A853",
    tag: "Comercial",
  },
  {
    number: "05",
    title: "Inteligência & Relatórios",
    description:
      "Dashboard mensal com métricas reais: impressões, cliques, ligações, rotas solicitadas. Decisões baseadas em dados, não em suposições.",
    Icon: IconAnalytics,
    color: "#4285F4",
    tag: "Inteligência",
  },
  {
    number: "06",
    title: "Estratégia de Avaliações",
    description:
      "Estruturamos processos de captação e orientamos as respostas de cada review com técnica. Construímos reputação sólida, geramos confiança e transformamos avaliações em ferramenta de conversão algorítmica.",
    Icon: IconReputation,
    color: "#EA4335",
    tag: "Conversão",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-black relative overflow-hidden">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <p className="text-xs text-[#4285F4] uppercase tracking-[0.25em] font-semibold mb-4">
              O que entregamos
            </p>
            <h2 className="text-3xl md:text-5xl text-white leading-tight tracking-tight">
              Soluções que colocam
              <br />
              <span className="text-gray-500">sua empresa no mapa.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:w-1/2 flex flex-col justify-end"
          >
            <p className="text-gray-400 text-base leading-relaxed max-w-lg">
              Não oferecemos pacotes genéricos. Cada serviço é aplicado com precisão cirúrgica para gerar resultado real no posicionamento local da sua empresa.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-5 h-5 rounded-full bg-[#34A853]/20 flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34A853" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-400">
                Garantia de resultados mensuráveis nos primeiros 60 dias
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.04]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group bg-black p-8 flex flex-col gap-5 hover:bg-white/[0.025] transition-colors duration-300 cursor-default"
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${service.color}15`,
                    boxShadow: `0 0 20px ${service.color}20`,
                  }}
                >
                  <service.Icon color={service.color} />
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: `${service.color}10`, color: service.color }}
                >
                  {service.tag}
                </span>
              </div>

              <div>
                <p className="text-xs text-gray-600 font-mono mb-2">{service.number}</p>
                <h3 className="text-white text-lg font-semibold mb-3 group-hover:text-gray-100 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Proprietário",
    company: "Bella Vista Ristorante",
    text: "Em 60 dias saímos da página 2 para o primeiro resultado em 'restaurante italiano' na nossa cidade. O telefone literalmente não para. Foi transformador para o negócio.",
    metric: "+287%",
    metricLabel: "em ligações",
    metricColor: "#4285F4",
    img: "https://images.unsplash.com/photo-1759521296047-89338c8e083d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwb3duZXIlMjBjaGVmJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxNTQ0ODg1fDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Dra. Ana Souza",
    role: "Odontologista",
    company: "Clínica Renovare",
    text: "Minha clínica registrou um aumento de 43% nos agendamentos vindos do Google Maps em apenas 3 meses. O profissionalismo da equipe é incomparável.",
    metric: "+43%",
    metricLabel: "novos pacientes",
    metricColor: "#34A853",
    img: "https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBvd25lciUyMHNtaWxpbmclMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE1NDQ4ODd8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Ricardo Oliveira",
    role: "Empresário",
    company: "Auto Plaza Mecânica",
    text: "Tentei fazer sozinho por anos e nunca apareci direito. Em 45 dias já estava no top 3 da minha região. Resultado objetivo, sem enrolação.",
    metric: "Top 3",
    metricLabel: "Google Maps",
    metricColor: "#FBBC05",
    img: "https://images.unsplash.com/photo-1770656505784-3fad3cd41fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMHNob3AlMjBvd25lciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzE1NDQ4ODh8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Fernanda Lima",
    role: "Advogada Sócia",
    company: "Lima & Associados",
    text: "Para um escritório de advocacia, credibilidade é tudo. A gestão das nossas avaliações nos trouxe clientes de alto padrão que jamais chegaríamos de outra forma.",
    metric: "4.9★",
    metricLabel: "no Google",
    metricColor: "#EA4335",
    img: "https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwb2ZmaWNlfGVufDF8fHx8MTc3MTU0NDg4OHww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Marcos Viana",
    role: "Diretor Executivo",
    company: "Studio K Academia",
    text: "Saímos de 18 para 142 avaliações em 4 meses e subimos para a primeira posição em 'academia' na cidade. A estratégia de captação de reviews é genial.",
    metric: "+680%",
    metricLabel: "em avaliações",
    metricColor: "#4285F4",
    img: "https://images.unsplash.com/photo-1758518729058-b158e71c5a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0JTIwY29uZmlkZW50JTIwc3VpdHxlbnwxfHx8fDE3NzE0ODc5NDF8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Juliana Castro",
    role: "CEO & Fundadora",
    company: "Espaço Integrar",
    text: "Já trabalhei com outras agências antes. Nenhuma entregou o que a Verano entrega. Relatórios claros, comunicação impecável e resultados que aparecem nos números.",
    metric: "+190%",
    metricLabel: "visitas ao perfil",
    metricColor: "#34A853",
    img: "https://images.unsplash.com/photo-1695996660160-366ff8d602c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0JTIwZGFyayUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcxNDMwMjM5fDA&ixlib=rb-4.1.0&q=80&w=400",
  },
];

function StarIcon({ size = 11 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#FBBC05" stroke="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[380px] bg-neutral-950 border border-white/[0.06] rounded-2xl p-7 flex flex-col gap-5 hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-300">
      {/* Metric */}
      <div
        className="inline-flex items-baseline gap-1.5 px-3 py-1.5 rounded-full self-start"
        style={{ backgroundColor: `${t.metricColor}10` }}
      >
        <span className="text-sm font-bold" style={{ color: t.metricColor }}>
          {t.metric}
        </span>
        <span className="text-xs" style={{ color: `${t.metricColor}99` }}>
          {t.metricLabel}
        </span>
      </div>

      {/* Text */}
      <p className="text-gray-400 text-sm leading-relaxed flex-1">"{t.text}"</p>

      {/* Divider */}
      <div className="h-px bg-white/[0.05]" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-white/10">
          <img
            src={t.img}
            alt={t.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="min-w-0">
          <p className="text-white text-sm font-semibold truncate">{t.name}</p>
          <p className="text-gray-500 text-xs truncate">
            {t.role} · {t.company}
          </p>
        </div>
        <div className="ml-auto flex gap-0.5 flex-shrink-0">
          {[...Array(5)].map((_, j) => (
            <StarIcon key={j} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollPos = useRef(0);

  // Duplicate the items for infinite loop
  const items = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 0.5; // pixels per frame
    const singleSetWidth = testimonials.length * (380 + 20); // card width + gap

    const animate = () => {
      if (container) {
        scrollPos.current += speed;
        if (scrollPos.current >= singleSetWidth) {
          scrollPos.current -= singleSetWidth;
        }
        container.scrollLeft = scrollPos.current;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section id="testimonials" className="py-28 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,rgba(52,168,83,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-xs text-[#34A853] uppercase tracking-[0.25em] font-semibold mb-4">
                  Cases de sucesso
                </p>
                <h2 className="text-3xl md:text-5xl text-white leading-tight tracking-tight">
                  Empresas reais.
                  <br />
                  <span className="text-gray-500">Resultados reais.</span>
                </h2>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scrolling carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-hidden px-6 py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {items.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

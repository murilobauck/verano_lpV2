import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  color: string;
}

function Counter({ target, suffix = "", prefix = "", decimals = 0, color }: CounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(parseFloat((eased * target).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasStarted, decimals]);

  return (
    <span ref={ref} style={{ color }}>
      {prefix}
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 3.7,
    suffix: "M+",
    label: "Visualizações geradas",
    description: "Tráfego qualificado para os nossos parceiros.",
    color: "#4285F4",
    decimals: 1,
  },
  {
    value: 312,
    suffix: "%",
    prefix: "+",
    label: "Aumento Médio de Visibilidade",
    description: "nos primeiros 90 dias de gestão ativa",
    color: "#EA4335",
  },
  {
    value: 4.8,
    suffix: "★",
    label: "Avaliação Média",
    description: "média dos perfis geridos pela nossa equipe",
    color: "#FBBC05",
    decimals: 1,
  },
  {
    value: 97,
    suffix: "%",
    label: "Taxa de Retenção",
    description: "de clientes renovam o contrato mensalmente",
    color: "#34A853",
  },
];

export function Results() {
  return (
    <section id="results" className="py-28 bg-neutral-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(66,133,244,0.04)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs text-[#4285F4] uppercase tracking-[0.25em] font-semibold mb-4">
            Números que falam por si
          </p>
          <h2 className="text-3xl md:text-5xl text-white leading-tight tracking-tight">
            Resultados que constroem
            <br />
            <span className="text-gray-500">referências no mercado.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.04]">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-neutral-950 p-10 flex flex-col gap-3 group hover:bg-white/[0.02] transition-colors duration-300"
            >
              <p
                className="text-5xl md:text-6xl tracking-tight"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                  color={stat.color}
                />
              </p>
              <p className="text-white text-base font-semibold">{stat.label}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
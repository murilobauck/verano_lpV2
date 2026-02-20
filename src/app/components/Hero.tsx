import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const floatingStats = [
  {
    value: "+312%",
    label: "Aumento em visibilidade",
    color: "#4285F4",
    position: "top-[22%] left-[5%]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    value: "4.9★",
    label: "Média de avaliações",
    color: "#FBBC05",
    position: "top-[30%] right-[4%]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    value: "#1",
    label: "Google Maps local",
    color: "#34A853",
    position: "bottom-[25%] left-[3%]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Deep background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(66,133,244,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(234,67,53,0.06)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(52,168,83,0.05)_0%,transparent_60%)]" />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating stat bubbles — desktop only */}
      {floatingStats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + i * 0.2, duration: 0.6 }}
          className={`absolute hidden xl:flex items-center gap-3 ${stat.position} bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-2xl px-4 py-3`}
          style={{ boxShadow: `0 0 30px ${stat.color}15` }}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
          >
            {stat.icon}
          </div>
          <div>
            <p className="text-white text-sm font-bold">{stat.value}</p>
            <p className="text-gray-400 text-xs">{stat.label}</p>
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8 inline-flex">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-gray-400 uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse shadow-[0_0_6px_#34A853]" />
              Especialistas em Google My Business
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[82px] text-white leading-[1.05] tracking-[-0.03em] mb-7"
          >
            A primeira posição
            <br />
            no Google não é{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05]">
                sorte.
              </span>
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Posicionamos sua empresa no topo do{" "}
            <span className="text-white">Google Maps</span> com estratégia, dados e execução de alto nível. Resultados mensuráveis. Clientes qualificados.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] opacity-0 group-hover:opacity-15 transition-opacity duration-400" />
              <span className="relative">Solicitar Diagnóstico Gratuito</span>
              <ArrowRight
                size={16}
                className="relative group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>

            <a
              href="#results"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm text-gray-300 font-medium border border-white/10 rounded-xl hover:border-white/25 hover:text-white transition-all duration-300"
            >
              Ver Resultados
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-10 border-t border-white/[0.06]"
          >
            <p className="text-xs text-gray-600 uppercase tracking-[0.2em] mb-7">
              Empresas que dominam o Google com a Verano Company
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {[
                "Clínica Renovare",
                "Auto Plaza",
                "Bella Vista Ristorante",
                "Studio K",
                "TechFix",
                "Advocacia Pessoa",
              ].map((brand) => (
                <span
                  key={brand}
                  className="text-gray-600 text-sm font-medium tracking-wide hover:text-gray-400 transition-colors duration-200 cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

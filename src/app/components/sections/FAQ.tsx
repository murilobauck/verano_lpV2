"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { faqs } from "@/data/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-[#FBBC05] uppercase tracking-[0.25em] font-semibold mb-4">
            Perguntas frequentes
          </p>
          <h2 className="text-3xl md:text-5xl text-white leading-tight tracking-tight">
            Tire suas dúvidas
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="border-b border-white/[0.06]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-white text-sm md:text-base pr-8 group-hover:text-gray-200 transition-colors">
                  {faq.question}
                </span>
                <div
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-white/20 transition-colors"
                >
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`text-gray-400 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}
                  >
                    <line x1="7" y1="1" x2="7" y2="13" />
                    <line x1="1" y1="7" x2="13" y2="7" />
                  </svg>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                    id={`faq-answer-${i}`}
                  >
                    <p className="text-gray-400 text-sm leading-relaxed pb-6 pr-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
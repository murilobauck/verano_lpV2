"use client";

import { m } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { BreadcrumbJsonLd } from "@/app/components/common/BreadcrumbJsonLd";

export function TermsContent() {
  return (
    <div className="bg-black min-h-screen text-white">
      <BreadcrumbJsonLd path="/termos" label="Termos de Uso" />
      <div className="container mx-auto px-6 max-w-4xl py-20">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Voltar para o site
          </a>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Termos de Serviço</h1>
          <p className="text-gray-400 mb-12">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao contratar os serviços da Verano Company, você concorda em cumprir e estar vinculado a estes Termos
                de Serviço. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos
                serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Descrição dos Serviços</h2>
              <p className="mb-3">A Verano Company oferece serviços de consultoria estratégica e otimização de perfis do Google Meu Negócio, incluindo:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Auditoria e otimização algorítmica de perfis</li>
                <li>Curadoria e elaboração de cronogramas de conteúdo e promoções</li>
                <li>Consultoria de reputação e estratégia para gestão de avaliações</li>
                <li>Relatórios analíticos mensais de desempenho</li>
                <li>Estratégias avançadas de SEO local</li>
                <li>Suporte e inteligência comercial de mercado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Planos e Pagamento</h2>
              <div className="space-y-3">
                <p><strong>3.1 Planos Disponíveis:</strong> Oferecemos três planos principais (Essencial, Dominance e Authority), cada um com recursos específicos detalhados em nosso site.</p>
                <p><strong>3.2 Faturamento:</strong> Os serviços são cobrados mensalmente, com pagamento antecipado até o dia 5 de cada mês.</p>
                <p><strong>3.3 Formas de Pagamento:</strong> Aceitamos pagamentos via PIX ou transferência bancária.</p>
                <p><strong>3.4 Atraso no Pagamento:</strong> O não pagamento até a data de vencimento resultará na suspensão dos serviços após 5 dias úteis.</p>
                <p><strong>3.5 Reajuste:</strong> Os valores podem ser reajustados anualmente com base no IGPM ou outro índice acordado.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Duração e Cancelamento</h2>
              <div className="space-y-3">
                <p><strong>4.1 Sem Fidelidade:</strong> Nossos contratos são mensais, sem período mínimo de fidelidade.</p>
                <p><strong>4.2 Cancelamento:</strong> Qualquer parte pode cancelar o serviço com aviso prévio de 30 dias.</p>
                <p><strong>4.3 Garantia de 30 Dias:</strong> Oferecemos garantia de satisfação nos primeiros 30 dias. Se não estiver satisfeito, reembolsaremos integralmente o valor pago.</p>
                <p><strong>4.4 Após Cancelamento:</strong> Após o cancelamento, você terá acesso aos serviços até o final do período pago.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Responsabilidades do Cliente</h2>
              <p className="mb-3">O cliente se compromete a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer acesso administrativo ao perfil do Google Meu Negócio</li>
                <li>Fornecer informações precisas e atualizadas sobre o negócio</li>
                <li>Responder solicitações de informações em tempo hábil</li>
                <li>Não realizar alterações no perfil sem coordenação com nossa equipe</li>
                <li>Manter a confidencialidade de credenciais de acesso</li>
                <li>Cumprir as políticas do Google para perfis de negócios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Responsabilidades da Verano Company</h2>
              <p className="mb-3">Nos comprometemos a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Executar os serviços conforme descrito no plano contratado</li>
                <li>Manter a confidencialidade das informações do cliente</li>
                <li>Fornecer relatórios periódicos de desempenho</li>
                <li>Responder solicitações em até 2 horas úteis</li>
                <li>Seguir as melhores práticas e diretrizes do Google</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Limitações e Exclusões</h2>
              <div className="space-y-3">
                <p><strong>7.1 Resultados:</strong> Embora nos esforcemos para maximizar resultados, não garantimos posicionamento específico ou número exato de visualizações, pois dependem de algoritmos do Google.</p>
                <p><strong>7.2 Avaliações Negativas:</strong> Não podemos garantir a remoção de todas as avaliações negativas, apenas aquelas que violam as políticas do Google.</p>
                <p><strong>7.3 Suspensão pelo Google:</strong> Não nos responsabilizamos por suspensões ou penalizações aplicadas pelo Google devido a violações das políticas por parte do cliente.</p>
                <p><strong>7.4 Força Maior:</strong> Não seremos responsáveis por falhas causadas por eventos fora de nosso controle (falhas do Google, desastres naturais, etc.).</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Propriedade Intelectual</h2>
              <p>
                Todo conteúdo criado pela Verano Company (textos, imagens, estratégias) permanece de propriedade do
                cliente após o pagamento. Relatórios, metodologias e ferramentas proprietárias permanecem de
                propriedade da Verano Company.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Confidencialidade</h2>
              <p>
                Ambas as partes concordam em manter confidenciais todas as informações proprietárias e sensíveis
                compartilhadas durante a prestação dos serviços, exceto quando exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Modificações dos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. Clientes ativos serão
                notificados por e-mail com 30 dias de antecedência sobre alterações significativas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Lei Aplicável e Foro</h2>
              <p>
                Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca
                de São Paulo, SP, para dirimir quaisquer controvérsias decorrentes destes termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Contato</h2>
              <p className="mb-3">
                Para dúvidas sobre estes Termos de Serviço, entre em contato:
              </p>
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 space-y-2">
                <p><strong>Verano Company</strong></p>
                <p>E-mail: contato@veranocompany.com.br</p>
                <p>WhatsApp: +55 (19) 99574-8782</p>
                <p>Endereço: Campinas, SP - Brasil</p>
              </div>
            </section>

            <section className="border-t border-white/[0.08] pt-8">
              <p className="text-sm text-gray-400">
                Ao contratar nossos serviços, você declara ter lido, compreendido e concordado com estes Termos de
                Serviço e nossa Política de Privacidade.
              </p>
            </section>
          </div>
        </m.div>
      </div>
    </div>
  );
}

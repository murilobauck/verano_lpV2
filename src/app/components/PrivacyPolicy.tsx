import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto px-6 max-w-4xl py-20">
        <motion.div
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

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-gray-400 mb-12">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introdução</h2>
              <p>
                A Verano Company ("nós", "nosso" ou "empresa") está comprometida em proteger a privacidade e segurança
                dos dados pessoais de nossos clientes. Esta Política de Privacidade descreve como coletamos, usamos,
                armazenamos e protegemos suas informações pessoais após a contratação de nossos serviços, em
                conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
              <p className="mt-3 text-sm bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                <strong>Importante:</strong> Este site não coleta dados pessoais, não utiliza cookies de rastreamento
                e não emprega ferramentas de análise de terceiros. Esta política aplica-se exclusivamente aos dados
                coletados após a contratação formal de nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Informações que Coletamos</h2>
              <p className="mb-3">
                Após a contratação de nossos serviços, coletamos as seguintes informações necessárias para a prestação
                adequada do serviço:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nome completo e nome da empresa</li>
                <li>E-mail profissional</li>
                <li>Número de telefone/WhatsApp</li>
                <li>Segmento de negócio</li>
                <li>Informações sobre o perfil do Google Meu Negócio</li>
                <li>Credenciais de acesso ao perfil (quando necessário)</li>
                <li>Dados de faturamento (CNPJ, endereço, dados bancários)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Como Usamos suas Informações</h2>
              <p className="mb-3">Utilizamos seus dados pessoais exclusivamente para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer e gerenciar nossos serviços de gestão de perfis do Google</li>
                <li>Entrar em contato para responder solicitações e fornecer suporte</li>
                <li>Enviar relatórios de desempenho e atualizações sobre seu perfil</li>
                <li>Processar pagamentos e emitir notas fiscais</li>
                <li>Cumprir obrigações legais e contratuais</li>
                <li>Comunicações relacionadas ao serviço contratado</li>
              </ul>
              <p className="mt-3 text-sm text-gray-400">
                Não utilizamos seus dados para marketing não solicitado ou compartilhamento com terceiros para fins
                comerciais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Base Legal para Processamento</h2>
              <p className="mb-3">Processamos seus dados pessoais com base em:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Execução de contrato: para fornecer os serviços contratados</li>
                <li>Consentimento: quando aplicável para comunicações específicas</li>
                <li>Obrigação legal: para cumprir requisitos legais, fiscais e regulatórios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Compartilhamento de Dados</h2>
              <p className="mb-3">
                Não vendemos suas informações pessoais. Compartilhamos seus dados apenas quando estritamente
                necessário:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Google (para gerenciamento do perfil Google Meu Negócio)</li>
                <li>Prestadores de serviços essenciais (hospedagem de dados, processamento de pagamentos)</li>
                <li>Autoridades legais quando exigido por lei ou ordem judicial</li>
              </ul>
              <p className="mt-3 text-sm text-gray-400">
                Todos os prestadores de serviços são cuidadosamente selecionados e obrigados contratualmente a manter
                a confidencialidade e segurança dos dados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Segurança dos Dados</h2>
              <p>
                Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra
                acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia, controles de
                acesso e monitoramento regular de segurança.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Retenção de Dados</h2>
              <p>
                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta
                política, a menos que um período de retenção mais longo seja exigido ou permitido por lei. Após o
                término do contrato, seus dados serão mantidos por até 5 anos para fins de obrigações legais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Seus Direitos</h2>
              <p className="mb-3">De acordo com a LGPD, você tem direito a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
                <li>Solicitar a portabilidade dos dados</li>
                <li>Revogar o consentimento</li>
                <li>Opor-se ao tratamento de dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Navegação no Site</h2>
              <p>
                Este site não utiliza cookies de rastreamento, ferramentas de análise de terceiros (como Google
                Analytics) ou pixels de rastreamento. A navegação no site é completamente anônima e não coletamos
                nenhuma informação sobre visitantes. Dados pessoais são coletados apenas após a contratação formal de
                nossos serviços através de comunicação direta (WhatsApp, e-mail ou telefone).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer
                alterações significativas por e-mail ou através de aviso em nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Contato</h2>
              <p className="mb-3">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
              </p>
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 space-y-2">
                <p><strong>Verano Company</strong></p>
                <p>E-mail: privacidade@veranocompany.com</p>
                <p>WhatsApp: +55 (19) 99574-8782</p>
                <p>Endereço: Campinas, SP - Brasil</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

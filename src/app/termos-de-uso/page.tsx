"use client";
import React from "react";

export default function PoliticaPrivacidade() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
                Política de Privacidade – Impacto Móveis
            </h1>

            <p className="mb-4">
                A <strong>Impacto Móveis</strong> valoriza a privacidade e a proteção dos
                dados pessoais de seus clientes e visitantes. Esta Política de
                Privacidade explica como coletamos, utilizamos e protegemos as
                informações fornecidas em nosso site, em conformidade com a{" "}
                <strong>Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018)</strong>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-3">1. Coleta de Informações</h2>
            <p className="mb-4">
                Coletamos informações pessoais fornecidas voluntariamente pelos usuários,
                como nome, e-mail, telefone e mensagem, por meio de nossos{" "}
                <strong>formulários de contato</strong> e canais de atendimento (como
                WhatsApp, e-mail ou redes sociais). Também podemos coletar dados de
                navegação, como endereço IP, tipo de dispositivo, navegador e páginas
                visitadas, para fins de estatística e melhoria da experiência do usuário.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-3">2. Uso das Informações</h2>
            <p className="mb-4">
                As informações coletadas são utilizadas exclusivamente para:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Entrar em contato com o cliente em resposta a solicitações enviadas;</li>
                <li>Elaborar orçamentos e propostas comerciais;</li>
                <li>Personalizar a comunicação e melhorar nossos serviços;</li>
                <li>Enviar informações sobre produtos, promoções e novidades, quando autorizado;</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-3">3. Compartilhamento de Dados</h2>
            <p className="mb-4">
                A <strong>Impacto Móveis</strong> não compartilha, vende ou aluga dados
                pessoais com terceiros. O compartilhamento poderá ocorrer apenas com
                prestadores de serviços que nos auxiliam na operação do site, como
                plataformas de hospedagem, envio de e-mails ou ferramentas de
                atendimento, sempre mediante contratos que garantem a confidencialidade
                e a conformidade com a LGPD.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-3">4. Armazenamento e Segurança</h2>
            <p className="mb-4">
                Adotamos medidas técnicas e administrativas para proteger os dados
                pessoais contra acesso não autorizado, perda, alteração ou destruição.
                Os dados são armazenados em servidores seguros e mantidos apenas pelo
                tempo necessário para cumprir as finalidades descritas nesta política.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-3">5. Direitos do Titular dos Dados</h2>
            <p className="mb-4">
                De acordo com a LGPD, o titular dos dados tem o direito de:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Confirmar a existência de tratamento de dados pessoais;</li>
                <li>Acessar, corrigir ou atualizar seus dados;</li>
                <li>Solicitar a exclusão de seus dados;</li>
                <li>Revogar o consentimento para uso de dados;</li>
                <li>Solicitar a portabilidade para outro fornecedor de serviço.</li>
            </ul>
            <p className="mb-4">
                Para exercer seus direitos, o titular poderá entrar em contato pelo e-mail:{" "}
                <a
                    href="mailto:contato@impactomoveis.com"
                    className="text-blue-600 hover:underline"
                >
                    contato@impactomoveis.com
                </a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-3">6. Cookies e Tecnologias de Rastreamento</h2>
            <p className="mb-4">
                Nosso site pode utilizar cookies e tecnologias semelhantes para melhorar
                a experiência do usuário, analisar estatísticas de uso e personalizar o
                conteúdo exibido. O visitante pode, a qualquer momento, configurar seu
                navegador para recusar cookies, mas isso pode limitar algumas
                funcionalidades do site.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-3">7. Alterações nesta Política</h2>
            <p className="mb-4">
                A <strong>Impacto Móveis</strong> poderá atualizar esta Política de
                Privacidade periodicamente. Recomendamos a leitura regular deste
                documento para estar ciente de eventuais modificações.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-3">8. Contato</h2>
            <p>
                Caso tenha dúvidas sobre esta Política de Privacidade ou sobre o
                tratamento dos seus dados pessoais, entre em contato conosco pelo e-mail:{" "}
                <a
                    href="mailto:contato@impactomoveisecolchoes.com.br"
                    className="text-blue-600 hover:underline"
                >
                    contato@impactomoveisecolchoes.com.br
                </a>{" "}
                ou pelo WhatsApp disponível em nosso site.
            </p>

            <p className="text-sm text-gray-500 mt-10 text-center">
                Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
        </main>
    );
}

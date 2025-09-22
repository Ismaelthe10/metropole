import Seo from "../../components/Seo/Seo.jsx";
export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Política de Privacidade - Metrópole Serviços"
        description="Consulte a política de privacidade da Metrópole Serviços para entender como suas informações são tratadas ao visitar nosso site."
        canonical="https://www.metropoleserv.com.br/politica-de-privacidade"
        robots="noindex, follow"
        structuredData={privacyStructuredData}
      />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-950 mb-6">
          Política de Privacidade da Metrópole Serviços
        </h1>
        <p className="text-gray-700 mb-4">
          Última atualização: 15 de agosto de 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Bem-vindo ao site da Metrópole Serviços. A sua privacidade é
            importante para nós.
          </h2>
          <p className="text-gray-700 mb-4">
            Esta Política de Privacidade descreve como suas informações são
            tratadas ao visitar nosso site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            1. Coleta de Dados Pessoais
          </h2>
          <p className="text-gray-700 mb-4">
            Nosso site é de natureza informativa e{" "}
            <strong>não coleta diretamente dados pessoais</strong> de seus
            visitantes através de formulários ou outras ferramentas de coleta
            interna. Não solicitamos seu nome, e-mail, telefone ou qualquer
            outra informação pessoal diretamente neste site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            2. Links Externos
          </h2>
          <p className="text-gray-700 mb-4">
            Este site contém links para plataformas de comunicação externas,
            como e-mail, WhatsApp e Instagram. Ao clicar nesses links, você será
            direcionado para as respectivas plataformas, que possuem suas
            próprias políticas de privacidade e termos de uso. A Metrópole
            Serviços não se responsabiliza pela coleta ou tratamento de dados
            realizado por essas plataformas de terceiros.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            3. Cookies e Tecnologias de Rastreamento
          </h2>
          <p className="text-gray-700 mb-4">
            Este site pode utilizar cookies estritamente necessários para o seu
            funcionamento básico (por exemplo, para garantir a segurança da
            navegação ). Não utilizamos cookies para rastreamento de
            comportamento do usuário ou para fins de marketing. Caso ferramentas
            de análise (como Google Analytics) sejam implementadas no futuro,
            esta política será atualizada para refletir a coleta de dados e o
            uso de cookies para tais fins.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            4. Segurança dos Dados
          </h2>
          <p className="text-gray-700 mb-4">
            Como não coletamos dados pessoais diretamente neste site, não
            armazenamos informações pessoais de visitantes. Medidas de segurança
            são aplicadas para proteger a integridade do nosso site contra
            acessos não autorizados.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            5. Alterações a Esta Política de Privacidade
          </h2>
          <p className="text-gray-700 mb-4">
            Podemos atualizar nossa Política de Privacidade periodicamente.
            Quaisquer alterações serão publicadas nesta página. Aconselhamos que
            você revise esta Política de Privacidade periodicamente para
            quaisquer alterações.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            6. Contato
          </h2>
          <p className="text-gray-700 mb-4">
            Se você tiver alguma dúvida sobre esta Política de Privacidade,
            entre em contato conosco através dos canais disponíveis em nosso
            site (e-mail, WhatsApp, telefone).
          </p>
        </section>
      </main>
    </>
  );
}

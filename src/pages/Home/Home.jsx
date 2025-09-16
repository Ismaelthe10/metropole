import { Helmet } from "react-helmet-async";
import { FaShieldAlt, FaBroom, FaTools } from "react-icons/fa";
import Card from "../../components/Card/Card.jsx";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Metrópole Serviços - Terceirização em Curitiba | Segurança, Limpeza e
          Facilities
        </title>
        <meta
          name="description"
          content="Empresa especializada em terceirização de serviços em Curitiba e região. Oferecemos soluções completas em segurança patrimonial, limpeza profissional e manutenção predial para empresas e condomínios."
        />
        <meta
          name="keywords"
          content="terceirização serviços Curitiba, segurança patrimonial, limpeza predial, portaria 24h, facilities, manutenção predial, Curitiba, Paraná"
        />
        <link rel="canonical" href="https://www.metropoleserv.com.br/" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Metrópole Serviços - Terceirização de Serviços em Curitiba"
        />
        <meta
          property="og:description"
          content="Soluções completas em segurança, limpeza e manutenção para empresas e condomínios em Curitiba e região."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.metropoleserv.com.br/" />
        <meta
          property="og:image"
          content="https://www.metropoleserv.com.br/assets/og-image-home.jpg"
        />{" "}
        {/* Imagem específica para a Home */}
        <meta property="og:site_name" content="Metrópole Serviços" />
        <meta property="og:locale" content="pt_BR" />
        {/* Exemplo de Schema Markup (JSON-LD ) para LocalBusiness */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Metrópole Serviços",
              "description": "Empresa especializada em terceirização de serviços em Curitiba e região.",
              "url": "https://www.metropoleserv.com.br",
              "telephone": "+5541987937115",
              "email": "metropoleservicos.pr@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Curitiba",
                "addressRegion": "PR",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-25.4284",
                "longitude": "-49.2733"
              },
              "openingHours": "Mo-Fr 08:00-18:00",
              "sameAs": [
                "https://www.instagram.com/metropoleserv"
              ]
            }
          `}
        </script>
      </Helmet>

      <main>
        {/* ===== SEÇÃO 1: HERO (APRESENTAÇÃO PRINCIPAL ) ===== */}
        <section id="inicio" className="text-center py-20 px-4 bg-white">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-950 mb-4 leading-tight px-4">
            Soluções em Terceirização de Serviços em Curitiba e Região
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Garantimos ambientes seguros, limpos e bem gerenciados com soluções
            eficientes em portaria, segurança, limpeza e manutenção para
            empresas e condomínios.
          </p>
          <a
            href="https://wa.me/5541987937115?text=Ol%C3%A1%2C%20encontrei%20a%20Metr%C3%B3pole%20Servi%C3%A7os%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os.
"
            className="inline-block bg-yellow-500 text-blue-950 font-bold py-4 px-10 rounded-lg text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            Solicite um Orçamento Gratuito
          </a>
        </section>

        {/* ===== SEÇÃO 2: NOSSOS SERVIÇOS ===== */}
        <section id="servicos" className="py-20 bg-gray-50 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Nossas Soluções Completas
            </h2>
            <p className="text-md md:text-lg text-gray-600 mb-12">
              Somos uma empresa comprometida em fazer a diferença no seu dia a
              dia. Oferecemos excelência em cada detalhe, desde a segurança do
              seu patrimônio até a conservação dos seus espaços.
            </p>
          </div>

          {/* Grid com os serviços */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              icon={<FaShieldAlt className="text-yellow-500" size={40} />}
              title="Segurança Patrimonial e Controle de Acesso"
              description="Soluções completas em segurança para empresas e condomínios, com projetos estratégicos, protocolos rigorosos e equipe qualificada."
              items={[
                "Portaria e Vigia 24h",
                "Controle de Acesso Rigoroso",
                "Serviço Tático e Rondas Periódicas",
                "Segurança para Eventos, Festas e Geral",
              ]}
            />

            <Card
              icon={<FaBroom className="text-yellow-500" size={40} />}
              title="Limpeza Profissional e Conservação"
              description="Alto padrão em limpeza e conservação com gestão eficaz, produtos de alto desempenho e foco no uso consciente dos recursos."
              items={[
                "Limpeza e Asseio Contínuo",
                "Diaristas Qualificadas",
                "Jardinagem e Manutenção de Áreas Verdes",
                "Pintura Predial",
              ]}
            />

            <Card
              icon={<FaTools className="text-yellow-500" size={40} />}
              title="Manutenção e Reparos Gerais (Facilities)"
              description="Gama completa de serviços de manutenção para garantir a funcionalidade e a valorização do seu imóvel com agilidade e qualidade."
              items={[
                "Serviços Hidráulicos",
                "Serviços Elétricos",
                "Pequenos Reparos e Instalações",
              ]}
            />
          </div>
        </section>

        {/* ===== SEÇÃO 3: CHAMADA PARA AÇÃO (CTA) FINAL ===== */}
        <section id="contato" className="bg-white text-blue-950 py-20 px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Otimizar a Gestão do seu Espaço?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Deixe que a Metrópole cuide de tudo para você. Entre em contato
              conosco hoje mesmo e descubra como nossas soluções podem trazer
              mais tranquilidade e eficiência para o seu negócio ou condomínio.
            </p>
            <a
              href="https://wa.me/5541987937115?text=Ol%C3%A1%2C%20encontrei%20a%20Metr%C3%B3pole%20Servi%C3%A7os%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os.
"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-blue-950 font-bold py-4 px-10 rounded-lg text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
            >
              Falar com um Especialista no WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

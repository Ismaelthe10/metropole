import { FaRegBuilding, FaRegEye, FaRegHeart } from "react-icons/fa";
import aboutImg from "../../assets/about-image.png";
import Seo from "../../components/Seo/Seo.jsx";

export default function About() {
  const aboutStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Sobre a Metrópole Serviços",
      description:
        "Conheça a história, missão e valores da Metrópole Serviços. Empresa curitibana especializada em terceirização com foco em qualidade e transparência.",
      url: "https://www.metropoleserv.com.br/sobre",
      mainEntity: {
        "@type": "Organization",
        name: "Metrópole Serviços",
        description:
          "Mais do que uma prestadora de serviços, somos seus parceiros em criar ambientes seguros, limpos e eficientes em Curitiba e Região.",
        foundingDate: "2023",
        founder: {
          "@type": "Person",
          name: "Fábio",
        },
        mission:
          "Garantir a tranquilidade de nossos clientes através de serviços de segurança e facilities executados com máxima eficiência e profissionalismo.",
        vision:
          "Ser a empresa de terceirização de serviços mais confiável e recomendada de Curitiba, reconhecida pela nossa excelência e integridade.",
        values:
          "Compromisso, Qualidade, Transparência, Segurança e Respeito às Pessoas",
        address: {
          "@type": "PostalAddress",
          streetAddress: "R. Julio Luvisotto, 72 ",
          addressLocality: "Campina Grande do Sul",
          addressRegion: "PR",
          postalCode: "83430-000",
          addressCountry: "BR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+5541987937115",
          email: "metropoleservicos.pr@gmail.com",
          contactType: "customer service",
        },
        sameAs: ["https://www.instagram.com/metropoleserv"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.metropoleserv.com.br/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sobre",
          item: "https://www.metropoleserv.com.br/sobre",
        },
      ],
    },
  ];
  return (
    <>
      <Seo
        keywords="sobre metrópole serviços, história empresa, missão visão valores, terceirização Curitiba"
        title="Sobre a Metrópole Serviços - Nossa História e Valores | Curitiba"
        description="Conheça a história, missão e valores da Metrópole Serviços. Empresa curitibana especializada em terceirização com foco em qualidade e transparência."
        canonical="https://www.metropoleserv.com.br/sobre"
        ogTitle="Conheça a Metrópole Serviços - História e Missão"
        ogDescription="Saiba mais sobre a Metrópole Serviços, nossa jornada e compromisso com a excelência em terceirização."
        ogUrl="https://www.metropoleserv.com.br/sobre"
        ogImage="https://www.metropoleserv.com.br/images/home-og.jpg"
        structuredData={aboutStructuredData}
      />

      <main className="bg-white">
        {/* ===== SEÇÃO 1: TÍTULO E INTRODUÇÃO ===== */}
        <section className="py-20 px-4 text-center bg-gray-50">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">
            Conheça a Metrópole Serviços
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Mais do que uma prestadora de serviços, somos seus parceiros em
            criar ambientes seguros, limpos e eficientes em Curitiba e Região.
          </p>
        </section>

        {/* ===== SEÇÃO 2: NOSSA HISTÓRIA E MISSÃO ===== */}
        <section className="py-20 px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-140">
            <div className="order-last md:order-first">
              <img
                src={aboutImg}
                alt="Escritório da Metrópole Serviços em Curitiba"
                className="rounded-lg shadow-xl w-full h-auto flex-shrink-0 hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="text-gray-700 text-center">
              <h2 className="text-3xl font-bold text-blue-950 mb-6">
                Nossa Jornada
              </h2>
              <p className="mb-4">
                A Metrópole Serviços nasceu da visão de oferecer ao mercado de
                Curitiba uma solução em terceirização que realmente fizesse a
                diferença. Com anos de experiência no setor, percebemos a
                necessidade de um serviço que unisse alta qualificação
                profissional com um atendimento próximo e transparente.
              </p>
              <p>
                Hoje, nos orgulhamos de ter uma equipe dedicada e de construir
                relações de confiança com cada um de nossos clientes, sejam eles
                grandes empresas ou condomínios residenciais.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 3: MISSÃO, VISÃO E VALORES ===== */}
        <section className="py-20 px-4 bg-blue-950 text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6">
              <FaRegBuilding className="mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-2 text-yellow-400">
                Missão
              </h3>
              <p className="text-blue-200">
                Garantir a tranquilidade de nossos clientes através de serviços
                de segurança e facilities executados com máxima eficiência e
                profissionalismo.
              </p>
            </div>
            <div className="p-6">
              <FaRegEye className="mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-2 text-yellow-400">Visão</h3>
              <p className="text-blue-200">
                Ser a empresa de terceirização de serviços mais confiável e
                recomendada de Curitiba, reconhecida pela nossa excelência e
                integridade.
              </p>
            </div>
            <div className="p-6">
              <FaRegHeart className="mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-2 text-yellow-400">
                Valores
              </h3>
              <p className="text-blue-200">
                Compromisso, Qualidade, Transparência, Segurança e Respeito às
                Pessoas.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 4: NOSSA LOCALIZAÇÃO (MAPA) ===== */}
        <section id="localizacao" className="py-20 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Onde Estamos
            </h2>
            <p className="text-md md:text-lg text-gray-600 mb-12">
              Nosso escritório está de portas abertas para você. Venha tomar um
              café conosco!
            </p>
            <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              {/* O Google Maps é inserido aqui via iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.6465281966857!2d-49.1140229!3d-25.3496396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dceb255cccd22b%3A0x11920dbd7e1545a0!2sBOMTEMPO%20ASSESSORIA!5e0!3m2!1spt-BR!2sbr!4v1755285112277!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Metrópole Serviços"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

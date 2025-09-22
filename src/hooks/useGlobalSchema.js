import { useEffect } from "react";

export const useGlobalSchema = () => {
  useEffect(() => {
    const websiteStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Metrópole Serviços",
      alternateName: "Metropole Servicos",
      description:
        "Empresa especializada em terceirização de serviços em Curitiba e região. Segurança, limpeza e manutenção predial.",
      url: "https://www.metropoleserv.com.br",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://www.metropoleserv.com.br/busca?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      publisher: {
        "@type": "Organization",
        name: "Metrópole Serviços",
        logo: {
          "@type": "ImageObject",
          url: "https://www.metropoleserv.com.br/images/logo.svg",
        },
      },
      copyrightYear: "2025",
      copyrightHolder: {
        "@type": "Organization",
        name: "Metrópole Serviços",
      },
      inLanguage: "pt-BR",
      audience: {
        "@type": "Audience",
        audienceType:
          "Business owners, Property managers, Condominium administrators",
      },
    };

    const globalSchemaScript = document.createElement("script");
    globalSchemaScript.type = "application/ld+json";
    globalSchemaScript.id = "website-schema";
    globalSchemaScript.textContent = JSON.stringify(websiteStructuredData);

    const existingGlobalSchema = document.getElementById("website-schema");
    if (!existingGlobalSchema) {
      document.head.appendChild(globalSchemaScript);
    }

    return () => {
      const schemaToRemove = document.getElementById("website-schema");
      if (schemaToRemove) {
        schemaToRemove.remove();
      }
    };
  }, []);
};

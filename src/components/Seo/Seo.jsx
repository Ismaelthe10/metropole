import { useEffect } from "react";

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogType = "website",
  ogUrl,
  ogImage,
  robots = "index, follow",
  structuredData,
}) {
  useEffect(() => {
    // Título
    if (title) document.title = title;

    // Helper para meta tags
    const updateMeta = (name, content, isProperty = false) => {
      if (!content) return;

      const selector = isProperty
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(isProperty ? "property" : "name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Meta tags
    updateMeta("description", description);
    updateMeta("keywords", keywords);
    updateMeta("robots", robots);

    // Open Graph
    updateMeta("og:title", ogTitle || title, true);
    updateMeta("og:description", ogDescription || description, true);
    updateMeta("og:type", ogType, true);
    updateMeta("og:url", ogUrl, true);
    updateMeta("og:image", ogImage, true);
    updateMeta("og:site_name", "Metrópole Serviços", true); // Adicionado para consistência
    updateMeta("og:locale", "pt_BR", true); // Adicionado para consistência

    // Canonical
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    }

    // Structured Data (JSON-LD)
    // Remove scripts existentes de structured data
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingScripts.forEach((script) => script.remove());

    if (structuredData) {
      // Se structuredData é um array, cria um script para cada item
      const dataArray = Array.isArray(structuredData)
        ? structuredData
        : [structuredData];

      dataArray.forEach((data, index) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = `structured-data-${index}`;
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }
  }, [
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogType,
    ogUrl,
    ogImage,
    robots,
    structuredData,
  ]);

  return null; // Componente não renderiza nada
}

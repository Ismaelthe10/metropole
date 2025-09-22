import { useEffect } from "react";

const SEO = ({
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
}) => {
  useEffect(() => {
    // Título
    if (title) document.title = title;

    // Helper para meta tags
    const updateMeta = (selector, attribute, value) => {
      if (!value) return;

      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        const [attr, attrValue] = selector.match(/\[(.+?)="(.+?)"\]/) || [];
        if (attr) {
          const [attrName, attrVal] = attrValue.split("=");
          element.setAttribute(
            attrName.replace(/"/g, ""),
            attrVal.replace(/"/g, "")
          );
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Meta tags
    updateMeta('meta[name="description"]', "content", description);
    updateMeta('meta[name="keywords"]', "content", keywords);
    updateMeta('meta[name="robots"]', "content", robots);

    // Open Graph
    updateMeta('meta[property="og:title"]', "content", ogTitle || title);
    updateMeta(
      'meta[property="og:description"]',
      "content",
      ogDescription || description
    );
    updateMeta('meta[property="og:type"]', "content", ogType);
    updateMeta('meta[property="og:url"]', "content", ogUrl);
    updateMeta('meta[property="og:image"]', "content", ogImage);

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
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
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
};

export default SEO;

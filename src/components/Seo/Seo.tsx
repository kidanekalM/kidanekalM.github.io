import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeoData } from "../../lib/seo";

const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const seo = getSeoData(location.pathname);
    document.title = seo.title;
    setMeta('meta[name="description"]', "name", "description", seo.description);
    setMeta('meta[name="robots"]', "name", "robots", seo.robots);
    setMeta('meta[property="og:title"]', "property", "og:title", seo.title);
    setMeta('meta[property="og:description"]', "property", "og:description", seo.description);
    setMeta('meta[property="og:url"]', "property", "og:url", seo.canonical);
    setMeta('meta[property="og:image"]', "property", "og:image", seo.image);
    setMeta('meta[property="og:type"]', "property", "og:type", seo.type);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", seo.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", seo.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", seo.image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = seo.canonical;

    let structuredData = document.head.querySelector<HTMLScriptElement>("#structured-data");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "structured-data";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(seo.structuredData);
  }, [location.pathname]);

  return null;
}

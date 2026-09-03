import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const distDirectory = path.join(root, "dist");
const serverDirectory = path.join(root, "dist-ssr");
const serverEntry = path.join(serverDirectory, "entry-server.js");
const template = await readFile(path.join(distDirectory, "index.html"), "utf8");
const manifest = await readManifest();
const { getRouteModule, getSeoData, prerenderRoutes, render } = await import(
  `${pathToFileURL(serverEntry).href}?v=${Date.now()}`
);

if (!template.includes("<!--seo-head-start-->") || !template.includes('<div id="root"></div>')) {
  throw new Error("The client HTML template is missing its SEO or app-root markers.");
}

if (new Set(prerenderRoutes).size !== prerenderRoutes.length) {
  throw new Error("Duplicate pre-render routes were generated from resume data.");
}

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const seoHead = (seo, stylesheets = []) => {
  const structuredData = JSON.stringify(seo.structuredData).replaceAll("<", "\\u003c");
  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="robots" content="${escapeHtml(seo.robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`,
    `<meta property="og:site_name" content="Kidanekal Melkam Alem" />`,
    `<meta property="og:type" content="${seo.type}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(seo.canonical)}" />`,
    `<meta property="og:image" content="${escapeHtml(seo.image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(seo.image)}" />`,
    ...stylesheets.map((href) => `<link rel="stylesheet" href="/${escapeHtml(href)}" />`),
    `<script id="structured-data" type="application/ld+json">${structuredData}</script>`,
  ].join("\n    ");
};

const buildDocument = (pathname, appHtml = "") => {
  const seo = getSeoData(pathname);
  const stylesheets = collectCss(getRouteModule(pathname));
  return template
    .replace(/<!--seo-head-start-->[\s\S]*?<!--seo-head-end-->/, seoHead(seo, stylesheets))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
};

for (const route of prerenderRoutes) {
  const appHtml = await render(route);
  const outputPath = routeToFile(route);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, buildDocument(route, appHtml));
}

await writeFile(path.join(distDirectory, "spa.html"), buildDocument("/adminsignin"));
await writeFile(path.join(distDirectory, "404.html"), buildDocument("/404", await render("/404")));

const sitemapRoutes = prerenderRoutes.filter((route) => getSeoData(route).robots.startsWith("index"));
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapRoutes.map((route) => `  <url><loc>${escapeHtml(getSeoData(route).canonical)}</loc></url>`),
  "</urlset>",
].join("\n");
await writeFile(path.join(distDirectory, "sitemap.xml"), sitemap);

await rm(serverDirectory, { recursive: true, force: true });
console.log(`Pre-rendered ${prerenderRoutes.length} public routes.`);

function routeToFile(route) {
  if (route === "/") return path.join(distDirectory, "index.html");
  return path.join(distDirectory, `${route.slice(1)}.html`);
}

async function readManifest() {
  for (const candidate of [".vite/manifest.json", "manifest.json"]) {
    try {
      return JSON.parse(await readFile(path.join(distDirectory, candidate), "utf8"));
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  throw new Error("Vite manifest was not generated.");
}

function collectCss(moduleId) {
  if (!moduleId) return [];
  if (!manifest[moduleId]) throw new Error(`Missing Vite manifest entry for ${moduleId}.`);
  const stylesheets = new Set();
  const visited = new Set();

  const visit = (id) => {
    if (visited.has(id) || !manifest[id]) return;
    visited.add(id);
    const entry = manifest[id];
    for (const css of entry.css ?? []) stylesheets.add(css);
    for (const imported of [...(entry.imports ?? []), ...(entry.dynamicImports ?? [])]) visit(imported);
  };

  visit(moduleId);
  return [...stylesheets];
}

# Kidanekal Melkam Alem Portfolio

React and TypeScript portfolio deployed at [kidanekal.is-a.dev](https://kidanekal.is-a.dev).

## Content

`src/data/resume-data.ts` is the source of truth for portfolio content. Project and certification detail routes, SEO metadata, structured data, and sitemap entries are generated from it.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run lint
npm run build
```

The production build creates the Vite client, an internal SSR bundle, and static HTML for every public route. It also generates `sitemap.xml`, preserves an SPA shell for admin routes, and emits `404.html`. The temporary server bundle is removed after pre-rendering.

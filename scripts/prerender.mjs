// Renders each route to static HTML at build time and writes dist/<route>/index.html.
//
// Why: the site is a client-rendered SPA, so every route used to return the same empty
// shell. Anyone curling the site — or any crawler / link-preview bot that doesn't run
// JS — saw no page content at all. This bakes the real markup into each route's HTML.
//
// Runs after `vite build` (client) and `vite build --ssr` (server bundle). See the
// "build" script in package.json.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");

// Routes worth shipping as real HTML. /docs is deliberately excluded: it's a large
// client-driven app surface (search, syntax highlighting) and isn't the content a
// reviewer or crawler is looking for.
const ROUTES = [
  "/",
  "/whitepaper",
  "/validation",
  "/protocol",
  "/systems",
  "/impact",
  "/for-agents",
  "/privacy",
];

const template = readFileSync(join(distDir, "index.html"), "utf8");

// Neutral shell for routes that aren't prerendered (/docs/*, 404s). The SPA fallback
// in public/_redirects points here rather than at index.html — index.html now holds the
// prerendered homepage, and serving that for every unknown URL would show crawlers
// homepage content on paths that aren't the homepage.
writeFileSync(join(distDir, "spa.html"), template);

const { render } = await import(pathToFileURL(join(root, "dist-ssr", "entry-server.js")).href);

/**
 * Splice the rendered app and its per-route head tags into the built template.
 *
 * React 19 lets components render <title>/<meta>/<link> anywhere in the tree and hoists
 * them into <head> in the browser. renderToString emits them inline instead, so without
 * this the real per-route <title> ends up buried in <body> — where crawlers ignore it —
 * and the template's generic title wins. Hoist them here, and drop the template's
 * <title>/description when the route supplied its own.
 */
function buildPage(appHtml, helmet) {
  let page = template;
  let body = appHtml;
  const hoisted = [];

  const lift = (re) => {
    body = body.replace(re, (tag) => {
      hoisted.push(tag);
      return "";
    });
  };

  // <title>, <meta> and <link> are head-only elements — anything of theirs sitting in
  // the rendered body is React-hoisted metadata, so lifting all of them is safe.
  lift(/<title[^>]*>[\s\S]*?<\/title>/g);
  lift(/<meta\s[^>]*?\/?>/g);
  lift(/<link\s[^>]*?\/?>/g);

  // react-helmet-async's server context, for anything that still routes through it.
  for (const tag of [helmet?.title, helmet?.meta, helmet?.link]) {
    const str = tag?.toString?.() ?? "";
    if (str) hoisted.push(str);
  }

  const routeTitle = hoisted.find((t) => t.startsWith("<title"));
  if (routeTitle) {
    page = page.replace(/<title>[\s\S]*?<\/title>/, routeTitle);
  }

  const headTags = hoisted.filter((t) => t !== routeTitle);

  if (headTags.some((t) => /name="description"/.test(t))) {
    page = page.replace(/\s*<meta\s+name="description"[^>]*\/?>/, "");
  }

  if (headTags.length) {
    page = page.replace("</head>", `  ${headTags.join("\n    ")}\n  </head>`);
  }

  return page.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

let failures = 0;

for (const route of ROUTES) {
  try {
    const { html, helmet } = render(route);

    if (!html || html.length < 500) {
      throw new Error(`rendered only ${html?.length ?? 0} chars — route likely matched nothing`);
    }

    const outFile =
      route === "/" ? join(distDir, "index.html") : join(distDir, route, "index.html");
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, buildPage(html, helmet));

    console.log(`  prerendered ${route.padEnd(14)} ${html.length.toLocaleString()} chars`);
  } catch (err) {
    failures += 1;
    console.error(`  FAILED ${route}: ${err.message}`);
  }
}

if (failures > 0) {
  // Fail the build rather than silently shipping empty shells again.
  console.error(`\nprerender: ${failures} route(s) failed`);
  process.exit(1);
}

console.log(`prerender: ${ROUTES.length} routes written`);

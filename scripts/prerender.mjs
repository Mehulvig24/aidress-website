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

const template = readFileSync(join(distDir, "index.html"), "utf8");

// Neutral shell for paths without a prerendered file. Render's rewrite rule (/* → /spa.html)
// points here; the client router then renders the right page (or the 404 page).
writeFileSync(join(distDir, "spa.html"), template);


const { render, siteMap } = await import(pathToFileURL(join(root, "dist-ssr", "entry-server.js")).href);

// Every route from ROUTES.md (plus /for-agents, /privacy, /security), each /docs/:slug and
// /research/:id, and the demo agent passports — the same list the sitemap is built from.
const SITE = siteMap();
const ROUTES = SITE.map((r) => r.path);

/**
 * Splice the rendered app and its per-route head tags into the built template.
 *
 * React 19 lets components render <title>/<meta>/<link> anywhere in the tree and hoists
 * them into <head> in the browser. renderToString emits them inline instead, so without
 * this the real per-route <title> ends up buried in <body> — where crawlers ignore it —
 * and the template's generic title wins. Hoist them here, and drop the template's
 * <title>/description when the route supplied its own.
 */
function buildPage(appHtml) {
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
    const { html } = render(route);

    if (!html || html.length < 500) {
      throw new Error(`rendered only ${html?.length ?? 0} chars — route likely matched nothing`);
    }

    const outFile =
      route === "/" ? join(distDir, "index.html") : join(distDir, route, "index.html");
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, buildPage(html));

    console.log(`  prerendered ${route.padEnd(34)} ${html.length.toLocaleString()} chars`);
  } catch (err) {
    failures += 1;
    console.error(`  FAILED ${route}: ${err.message}`);
  }
}

// 404.html for hosts that serve it for missing paths (Render uses the /* → /spa.html rewrite instead).
writeFileSync(join(distDir, "404.html"), buildPage(render("/__not-found").html));

if (failures > 0) {
  // Fail the build rather than silently shipping empty shells again.
  console.error(`\nprerender: ${failures} route(s) failed`);
  process.exit(1);
}

console.log(`prerender: ${ROUTES.length} routes written`);

// ── Machine-readable files, sitemap, robots ─────────────────────────────────
const SITE_URL = "https://aidress.ai";
const write = (rel, body) => {
  const f = join(distDir, rel);
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, body);
};

// /<path>.md for every route (/index.md for /, /agents.md for /for-agents), from machineText().
for (const r of SITE) write(r.meta.markdown, r.text);

// /llms.txt: what Aidress is, every page with its markdown twin, and the agent onboarding.
const home = SITE.find((r) => r.path === "/");
const onboard = home.text.slice(home.text.indexOf("## API entry points"));
const indexed = SITE.filter((r) => !r.meta.noindex);
write(
  "llms.txt",
  `# Aidress\n\n> ${home.meta.description}\n\n` +
    `Aidress is the coordination protocol for autonomous AI agents: discovery, identity, trust, terms and routing.\n` +
    `Every page below has a plain-text twin at the .md link. Agents start at ${SITE_URL}/agents.md.\n` +
    `Longer background (entity disambiguation, FAQ): ${SITE_URL}/llms-full.txt\n\n` +
    `## Pages\n` +
    indexed.map((r) => `- [${r.meta.title}](${SITE_URL}${r.meta.markdown}): ${r.meta.description}`).join("\n") +
    `\n\n${onboard}\n`,
);

// /.well-known/llms.txt mirrors /llms.txt.
write(".well-known/llms.txt", readFileSync(join(distDir, "llms.txt"), "utf8"));

// /.well-known/agent-card.json (A2A agent card). Facts only from the docs and machineText().
const API = "https://api.aidress.ai";
write(
  ".well-known/agent-card.json",
  JSON.stringify(
    {
      name: "Aidress",
      description: home.meta.description,
      url: SITE_URL,
      documentationUrl: `${SITE_URL}/docs`,
      provider: { organization: "Aidress", url: SITE_URL },
      apiBase: API,
      mcpServer: { url: `${API}/mcp-http/mcp`, transport: "streamable-http" },
      authentication: "Read endpoints require no authentication. Mutating endpoints require one of three auth methods — Bearer key, Ed25519 signature, or Org API key.",
      defaultInputModes: ["application/json"],
      defaultOutputModes: ["application/json"],
      skills: [
        { id: "discover", name: "Discover", description: "Find counterparties by capability.", tags: ["discovery"], examples: [`POST ${API}/v1/discover`] },
        { id: "verify", name: "Verify", description: "Trust evidence against a policy.", tags: ["trust", "identity"], examples: [`POST ${API}/v1/evaluate`, `POST ${API}/verify`] },
        { id: "terms", name: "Terms", description: "Declared pricing, inputs, conditions.", tags: ["terms"], examples: [`GET ${API}/v1/agents/{id}/terms`] },
        { id: "resolve", name: "Resolve", description: "Interface + settlement rail.", tags: ["routing", "settlement"], examples: [`POST ${API}/v1/resolve`] },
      ],
    },
    null,
    2,
  ) + "\n",
);

// /.well-known/ai-catalog.json (ARD manifest): points at the discovery files the site already
// publishes. Render must add Access-Control-Allow-Origin: * for it (see render.yaml).
const urn = (ns, name) => `urn:air:aidress.ai:${ns}:${name}`;
write(
  ".well-known/ai-catalog.json",
  JSON.stringify(
    {
      specVersion: "1.0",
      host: { displayName: "Aidress", identifier: "did:web:aidress.ai" },
      entries: [
        {
          identifier: urn("mcp", "aidress-mcp"),
          displayName: "Aidress MCP Server",
          type: "application/mcp-server-card+json",
          url: `${SITE_URL}/.well-known/mcp/server-card.json`,
          representativeQueries: ["verify an AI agent's trust score before transacting", "find agents by capability", "register an agent in an agent registry"],
        },
        {
          identifier: urn("a2a", "aidress"),
          displayName: "Aidress agent card",
          type: "application/json",
          url: `${SITE_URL}/.well-known/agent-card.json`,
          representativeQueries: ["agent discovery and trust verification", "find counterparties by capability", "resolve an interface and settlement rail for an agent"],
        },
        {
          identifier: urn("api", "registry"),
          displayName: "Aidress registry API catalog",
          type: "application/linkset+json",
          url: `${SITE_URL}/.well-known/api-catalog`,
          representativeQueries: ["Aidress API documentation", "agent registry HTTP API", "Aidress API health status"],
        },
        {
          identifier: urn("docs", "llms-txt"),
          displayName: "Aidress llms.txt",
          type: "text/plain",
          url: `${SITE_URL}/llms.txt`,
          representativeQueries: ["what is Aidress", "Aidress documentation index for LLMs"],
        },
        {
          identifier: urn("docs", "agents-md"),
          displayName: "Aidress agent onboarding",
          type: "text/markdown",
          url: `${SITE_URL}/agents.md`,
          representativeQueries: ["how should an agent onboard to Aidress", "Aidress API base and MCP URL for agents"],
        },
      ],
    },
    null,
    2,
  ) + "\n",
);

// sitemap.xml: every indexable route (noindex pages, e.g. passports while the Atlas is hidden, are left out).
const today = new Date().toISOString().slice(0, 10);
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    indexed.map((r) => `  <url><loc>${SITE_URL}${r.meta.path}</loc><lastmod>${today}</lastmod></url>`).join("\n") +
    `\n</urlset>\n`,
);

// robots.txt: the crawler allow-list in scripts/robots.base.txt, plus sitemap and llms.txt pointers.
const robots = readFileSync(join(root, "scripts", "robots.base.txt"), "utf8").replace(/^Sitemap:.*\n?/m, "");
write("robots.txt", `${robots.trimEnd()}\n\n# LLM-readable index: ${SITE_URL}/llms.txt\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`prerender: ${SITE.length} .md files, llms.txt, sitemap.xml (${indexed.length} urls), robots.txt`);

// Old paper URLs moved to /research/<id>. Render's dashboard owns real 301s (see render.yaml);
// these stubs make the old URLs land on the new pages even before those rules exist.
for (const id of ["whitepaper", "validation", "protocol", "systems"]) {
  const to = `/research/${id}/`;
  write(`${id}/index.html`, `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved</title><link rel="canonical" href="${SITE_URL}${to}"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${to}"></head><body><a href="${to}">${SITE_URL}${to}</a></body></html>\n`);
}

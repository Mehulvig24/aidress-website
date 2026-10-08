// Build-time only. Rendered by scripts/prerender.mjs to produce real HTML per route,
// so crawlers, link-preview bots, and anyone running `curl` see actual content
// instead of an empty SPA shell.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppRoutes } from "./App";
import { machineText } from "./lib/machineText";
import { parseRouteName, pathToRoute, routeToPath } from "./lib/routes";
import { metaFor } from "./seo/meta";
import { AidressDocs } from "./content/docsContent";
import { AW } from "./data/site";

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  );
  return { html };
}

/** Everything the build needs to know about routes, from the same sources the app uses. */
export function siteMap() {
  const paths = [
    "/", "/industries",
    ...Object.keys(AW.industries).map((id) => "/industries/" + id),
    "/scoped-registries", "/atlas", "/developers", "/docs",
    ...AidressDocs.sidebarNav.flatMap((g) => g.items.map((i) => "/docs/" + i.slug)),
    "/research",
    ...(AW.papers || []).map((p) => "/research/" + p.id),
    "/impact", "/crew", "/for-agents", "/privacy", "/security",
    ...Object.keys(AW.agents).map((id) => "/atlas/agents/" + id),
  ];
  return [...new Set(paths)].map((path) => {
    const route = pathToRoute(path);
    return { path, meta: metaFor(route), text: absoluteLinks(machineText(route)) };
  });
}

/** machineText() links in-app routes as "(#industry:logistics)"; static files need real URLs. */
function absoluteLinks(text: string) {
  return text.replace(/\]\(#([^)]+)\)/g, (_, name) => "](https://aidress.ai" + routeToPath(parseRouteName(name)) + ")");
}

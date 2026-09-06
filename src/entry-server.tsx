// Build-time only. Rendered by scripts/prerender.mjs to produce real HTML per route,
// so crawlers, link-preview bots, and anyone running `curl` see actual content
// instead of an empty SPA shell.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppRoutes } from "./App";

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>,
  );
  return { html, helmet: helmetContext.helmet };
}

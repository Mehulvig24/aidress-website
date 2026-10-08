// Per-route <title>, description, canonical, robots and OG/Twitter tags. React 19 hoists these into
// <head> in the browser; scripts/prerender.mjs lifts them into <head> of each prerendered page.
import { metaFor, OG_IMAGE, SITE_URL } from './meta';
import type { Route } from '../lib/routes';

export function RouteHead({ route }: { route: Route }) {
  const m = metaFor(route);
  const url = SITE_URL + (m.path === '/' ? '/' : m.path);
  return (
    <>
      <title>{m.title}</title>
      <meta name="description" content={m.description} />
      <link rel="canonical" href={url} />
      {m.noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="alternate" type="text/markdown" href={m.markdown} title="Machine-readable version" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Aidress" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={m.title} />
      <meta property="og:description" content={m.description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={m.title} />
      <meta name="twitter:description" content={m.description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </>
  );
}

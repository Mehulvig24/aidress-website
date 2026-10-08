// Maps the mock's route names (SiteApp.jsx: go('industry',{id}), go('docs:quickstart'), …) to real
// URLs from design_handoff_aidress_website/ROUTES.md, so page code calls go() exactly as in the mock.

export interface Route {
  name: string;
  params: Record<string, string>;
}

export type Go = (name: string, params?: Record<string, string>) => void;

/** go('docs:quickstart') → { name: 'docs', params: { id: 'quickstart' } }, as SiteApp.jsx does. */
export function parseRouteName(name: string, params: Record<string, string> = {}): Route {
  if (name.includes(':')) {
    const [n, id] = name.split(':');
    return { name: n, params: { id } };
  }
  return { name, params };
}

const enc = encodeURIComponent;

/**
 * Canonical URLs end in a slash (/industries/, /docs/quickstart/). Render serves a prerendered
 * dist/<path>/index.html only for the slashed form; slash-less paths fall through to its
 * /* → /spa.html rewrite. The home page stays "/", and query strings follow the slash.
 */
export function withSlash(path: string): string {
  const [p, q] = path.split('?');
  const slashed = p === '/' || p.endsWith('/') ? p : p + '/';
  return q ? slashed + '?' + q : slashed;
}

export function routeToPath(route: Route): string {
  return withSlash(rawPath(route));
}

function rawPath({ name, params }: Route): string {
  const id = params.id;
  switch (name) {
    case 'home': return '/';
    case 'industries': return '/industries';
    case 'industry': return '/industries/' + enc(id || 'logistics');
    case 'scoped': return '/scoped-registries';
    case 'crew': return '/crew';
    case 'developers': return '/developers' + (params.example ? '?example=' + enc(params.example) : '');
    case 'docs': return id ? '/docs/' + enc(id) : '/docs';
    case 'impact': return '/impact';
    case 'atlas': return '/atlas' + (params.selected ? '?selected=' + enc(params.selected) : '');
    case 'passport': return '/atlas/agents/' + enc(id || 'A');
    case 'research': return id ? '/research/' + enc(id) : '/research';
    case 'for-agents': return '/for-agents';
    case 'privacy': return '/privacy';
    case 'security': return '/security';
    default: return '/';
  }
}

/** Inverse of routeToPath. Unknown paths resolve to { name: 'notfound' }. */
export function pathToRoute(pathname: string, search = ''): Route {
  const q = new URLSearchParams(search);
  const parts = pathname.replace(/\/+$/, '').split('/').filter(Boolean).map(decodeURIComponent);
  const [a, b, c] = parts;
  const only = (n: number) => parts.length === n;
  if (parts.length === 0) return { name: 'home', params: {} };
  if (a === 'industries' && only(1)) return { name: 'industries', params: {} };
  if (a === 'industries' && only(2)) return { name: 'industry', params: { id: b } };
  if (a === 'scoped-registries' && only(1)) return { name: 'scoped', params: {} };
  if (a === 'crew' && only(1)) return { name: 'crew', params: {} };
  if (a === 'developers' && only(1)) return { name: 'developers', params: q.get('example') ? { example: q.get('example')! } : {} };
  if (a === 'docs' && only(1)) return { name: 'docs', params: {} };
  if (a === 'docs' && only(2)) return { name: 'docs', params: { id: b } };
  if (a === 'impact' && only(1)) return { name: 'impact', params: {} };
  if (a === 'atlas' && only(1)) return { name: 'atlas', params: q.get('selected') ? { selected: q.get('selected')! } : {} };
  if (a === 'atlas' && b === 'agents' && c && only(3)) return { name: 'passport', params: { id: c } };
  if (a === 'research' && only(1)) return { name: 'research', params: {} };
  if (a === 'research' && only(2)) return { name: 'research', params: { id: b } };
  if (a === 'for-agents' && only(1)) return { name: 'for-agents', params: {} };
  if (a === 'privacy' && only(1)) return { name: 'privacy', params: {} };
  if (a === 'security' && only(1)) return { name: 'security', params: {} };
  return { name: 'notfound', params: {} };
}

// Module-level bridge for content modules that navigate outside React props
// (docsContent's <Link> used window.__adGo in the mock).
let current: Go = () => {};
export function setGlobalGo(go: Go) { current = go; }
export const globalGo: Go = (name, params) => current(name, params);

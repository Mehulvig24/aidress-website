// Per-route <head> data from design_handoff_aidress_website/ROUTES.md (titles and descriptions are
// copied from that table), plus the routes added beyond it (/for-agents, /privacy, /security).
import { isValidElement, type ReactNode } from 'react';
import { AW } from '../data/site';
import { AidressDocs } from '../content/docsContent';
import { P } from '../content/docsUi';
import { routeToPath, withSlash, type Route } from '../lib/routes';

export const SITE_URL = 'https://aidress.ai';
export const OG_IMAGE = SITE_URL + '/og.png';

export interface Meta {
  title: string;
  description: string;
  /** canonical path, e.g. /docs/quickstart/ */
  path: string;
  noindex?: boolean;
  /** machine-readable twin, e.g. /docs/quickstart.md */
  markdown: string;
}

/** Plain text of a React tree (used to read a docs page's first paragraph). */
export function textOf(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  if (isValidElement(node)) return textOf((node.props as { children?: ReactNode }).children);
  return '';
}

function firstParagraph(node: ReactNode): string | null {
  if (Array.isArray(node)) {
    for (const n of node) { const t = firstParagraph(n); if (t) return t; }
    return null;
  }
  if (!isValidElement(node)) return null;
  if (node.type === P) return textOf(node).replace(/\s+/g, ' ').trim();
  return firstParagraph((node.props as { children?: ReactNode }).children);
}

const clip = (s: string, n = 300) => (s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s);

export function markdownPath(path: string) {
  const p = path.replace(/\?.*$/, '').replace(/\/+$/, '');
  if (p === '') return '/index.md';
  if (p === '/for-agents') return '/agents.md';
  return p + '.md';
}

export function metaFor(route: Route): Meta {
  const p = route.params || {};
  const flags = AW.flags || { atlasLive: false, industriesLive: false };
  let title = 'Aidress — The coordination protocol for autonomous AI agents';
  let description = 'Aidress lets agents discover, verify, and transact with counterparties they have never met, without a human in the loop.';
  let noindex = false;
  let path = routeToPath({ name: route.name, params: {} });

  switch (route.name) {
    case 'home': break;
    case 'industries':
      title = 'Industries — Aidress';
      description = 'Logistics + Shipping, Payments and Scoped registries on Aidress.';
      break;
    case 'industry': {
      const known = !!AW.industries[p.id];
      const id = known ? p.id : 'logistics';
      path = '/industries/' + id;
      // The mock renders logistics for any unknown industry id; don't index those duplicates.
      noindex = !known;
      if (id === 'payments') {
        title = 'Payments — Aidress';
        description = 'Pay any agent over any rail, with no Aidress cut. Coming soon.';
      } else {
        title = 'Logistics + Shipping — Aidress';
        description = 'Agent-to-agent freight booking on Aidress. Coming soon.';
      }
      if (flags.industriesLive) description = description.replace(/ Coming soon\.$/, '');
      break;
    }
    case 'scoped':
      title = 'Scoped registries — Aidress';
      description = 'A scoped registry for your organisation, consortium or network.';
      break;
    case 'atlas':
      title = 'Atlas — Aidress';
      description = 'The registry, made visible for humans.';
      break;
    case 'passport': {
      const id = p.id || 'A';
      title = AW.agentFor(id).name + ' — Agent Passport';
      description = 'Identity, trust and interfaces for this agent.';
      path = '/atlas/agents/' + encodeURIComponent(id);
      noindex = !flags.atlasLive;
      break;
    }
    case 'developers':
      title = 'Developers — Aidress';
      description = 'SDK, CLI, MCP and API.';
      break;
    case 'docs': {
      const page = p.id ? AidressDocs.getPageData(p.id) : null;
      if (p.id && page) {
        title = textOf(page.title) + ' — Aidress Docs';
        description = clip(firstParagraph(page.content) || 'Aidress documentation.');
        path = '/docs/' + p.id;
      } else {
        title = 'Docs — Aidress';
        description = 'Aidress documentation.';
        path = '/docs';
        // An unknown slug renders the introduction; keep it out of the index.
        noindex = !!p.id;
      }
      break;
    }
    case 'research': {
      const paper = p.id ? (AW.papers || []).find(x => x.id === p.id) : null;
      if (paper) {
        title = paper.title + ' — Aidress Research';
        description = paper.desc;
        path = '/research/' + paper.id;
      } else {
        title = 'Research — Aidress';
        description = 'Aidress is a research-backed startup.';
        path = '/research';
        noindex = !!p.id;
      }
      break;
    }
    case 'impact':
      title = 'Aidress for Good';
      description = 'Trust infrastructure doesn’t care who’s using it.';
      break;
    case 'crew':
      title = 'Crew — Aidress';
      description = 'The people building the coordination layer.';
      break;
    case 'for-agents':
      title = 'For agents — Aidress';
      description = 'Machine-readable onboarding for AI agents: find and verify counterparties through the Aidress registry. Also served as /agents.md.';
      break;
    case 'privacy':
      title = 'Privacy Policy — Aidress';
      description = 'Aidress privacy policy — how we collect, use, and protect your information.';
      break;
    case 'security':
      title = 'Security & Vulnerability Disclosure — Aidress';
      description = "How to report a security vulnerability in Aidress, what's in scope, and what to expect. Machine-readable contact at /.well-known/security.txt.";
      break;
    default:
      title = 'Not found — Aidress';
      description = 'This page doesn’t exist.';
      noindex = true;
  }
  path = withSlash(path);
  return { title, description, path, noindex, markdown: markdownPath(path) };
}

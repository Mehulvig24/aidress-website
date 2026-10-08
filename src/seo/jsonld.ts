// Per-route schema.org JSON-LD. Built only from content the site already shows (AW data, the docs,
// the research papers), so the markup always matches the visible page:
// - home: Organization, WebSite, SoftwareApplication
// - /docs/:slug: TechArticle + breadcrumbs; /docs/faq/ also FAQPage built from its own Q&A
// - /research/:id: Article (authors and date where the paper lists them) + breadcrumbs
// - other inner pages: breadcrumbs
import { isValidElement, type ReactNode } from 'react';
import { AW } from '../data/site';
import { AidressDocs } from '../content/docsContent';
import { H2, P } from '../content/docsUi';
import type { Route } from '../lib/routes';
import { SITE_URL, OG_IMAGE, textOf, type Meta } from './meta';

type Json = Record<string, unknown>;
const ORG_ID = SITE_URL + '/#organization';
const SITE_ID = SITE_URL + '/#website';
const abs = (path: string) => SITE_URL + path;

const person = ([name, role, , linkedin]: [string, string, string, string, string]) => ({
  '@type': 'Person',
  name,
  jobTitle: role,
  ...(linkedin ? { sameAs: linkedin } : {}),
});

function organization(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Aidress',
    legalName: 'Aidress',
    url: SITE_URL,
    logo: abs('/assets/logo-mark-ink.png'),
    description: 'The coordination protocol for autonomous AI agents. Aidress lets agents discover, verify, and transact with counterparties they have never met, without a human in the loop.',
    email: 'teamaidress@gmail.com',
    address: { '@type': 'PostalAddress', addressCountry: 'SG' },
    disambiguatingDescription: 'Registered in Singapore. A Delaware C-corp is in progress.',
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'security', email: 'teamaidress@gmail.com', url: abs('/.well-known/security.txt') },
      { '@type': 'ContactPoint', contactType: 'customer support', email: 'teamaidress@gmail.com' },
    ],
    founder: (AW.founders || []).map(person),
    member: (AW.advisors || []).map(person),
    sameAs: [
      'https://www.linkedin.com/company/aidress',
      'https://github.com/Aidress-ai/Aidress',
      'https://x.com/aidabornnative',
      'https://www.instagram.com/aidress.ai',
    ],
  };
}

function website(): Json {
  return { '@context': 'https://schema.org', '@type': 'WebSite', '@id': SITE_ID, name: 'Aidress', url: SITE_URL + '/', publisher: { '@id': ORG_ID } };
}

function softwareApplication(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Aidress',
    url: SITE_URL + '/',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    description: 'Aidress lets agents discover, verify, and transact with counterparties they have never met, without a human in the loop.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Read endpoints (/verify, /match, /registry) are free.' },
    publisher: { '@id': ORG_ID },
  };
}

function breadcrumbs(trail: [string, string][]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })),
  };
}

/** FAQPage from a docs page whose questions are H2s, each answered by the P(s) that follow. */
function faqFrom(content: ReactNode): Json | null {
  const nodes: ReactNode[] = [];
  const flat = (n: ReactNode) => {
    if (Array.isArray(n)) n.forEach(flat);
    else if (isValidElement(n) && n.type !== H2 && n.type !== P) flat((n.props as { children?: ReactNode }).children);
    else nodes.push(n);
  };
  flat(content);
  const qa: { q: string; a: string[] }[] = [];
  for (const n of nodes) {
    if (!isValidElement(n)) continue;
    if (n.type === H2) qa.push({ q: textOf(n), a: [] });
    else if (n.type === P && qa.length) qa[qa.length - 1].a.push(textOf(n).replace(/\s+/g, ' ').trim());
  }
  const items = qa.filter(x => x.q && x.a.length);
  if (!items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(x => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a.join(' ') } })),
  };
}

export function jsonLdFor(route: Route, meta: Meta): Json[] {
  const p = route.params || {};
  const crumbHome: [string, string] = ['Aidress', '/'];
  switch (route.name) {
    case 'home':
      return [organization(), website(), softwareApplication()];
    case 'docs': {
      const page = p.id ? AidressDocs.getPageData(p.id) : null;
      if (!page || meta.noindex) return [breadcrumbs([crumbHome, ['Docs', '/docs/']])];
      const title = textOf(page.title);
      const out: Json[] = [
        {
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: title,
          description: meta.description,
          url: abs(meta.path),
          articleSection: page.breadcrumb,
          inLanguage: 'en',
          image: OG_IMAGE,
          author: { '@id': ORG_ID },
          publisher: { '@id': ORG_ID },
          isPartOf: { '@id': SITE_ID },
        },
        breadcrumbs([crumbHome, ['Docs', '/docs/'], [title, meta.path]]),
      ];
      if (p.id === 'faq') {
        const faq = faqFrom(page.content);
        if (faq) out.push(faq);
      }
      return out;
    }
    case 'research': {
      const paper = p.id ? (AW.papers || []).find(x => x.id === p.id) : null;
      if (!paper) return [breadcrumbs([crumbHome, ['Research', '/research/']])];
      const authors = paper.authors ? paper.authors.split(/\s*&\s*/).map(name => ({ '@type': 'Person', name })) : null;
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: paper.title,
          description: paper.desc,
          url: abs(meta.path),
          articleSection: paper.cat,
          ...(paper.date ? { datePublished: paper.date } : {}),
          author: authors && authors.length ? authors : { '@id': ORG_ID },
          publisher: { '@id': ORG_ID },
          image: paper.img ? abs(paper.img) : OG_IMAGE,
          isPartOf: { '@id': SITE_ID },
        },
        breadcrumbs([crumbHome, ['Research', '/research/'], [paper.title, meta.path]]),
      ];
    }
    case 'industry':
      return [breadcrumbs([crumbHome, ['Industries', '/industries/'], [meta.title.replace(/ — Aidress$/, ''), meta.path]])];
    case 'notfound':
      return [];
    default:
      return [breadcrumbs([crumbHome, [meta.title.replace(/ — Aidress$/, ''), meta.path]])];
  }
}

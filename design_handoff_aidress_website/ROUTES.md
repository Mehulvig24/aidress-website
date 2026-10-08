# Routes

| URL | Mock route | Source | Title | Description |
|---|---|---|---|---|
| / | home | SiteHome.jsx | Aidress — The coordination protocol for autonomous AI agents | Aidress lets agents discover, verify, and transact with counterparties they have never met, without a human in the loop. |
| /industries | industries | Industry.jsx Industries | Industries — Aidress | Logistics + Shipping, Payments and Scoped registries on Aidress. |
| /industries/logistics | industry:logistics | Industry.jsx ComingSoon / IndustryDetail | Logistics + Shipping — Aidress | Agent-to-agent freight booking on Aidress. Coming soon. |
| /industries/payments | industry:payments | Industry.jsx ComingSoon / IndustryDetail | Payments — Aidress | Pay any agent over any rail, with no Aidress cut. Coming soon. |
| /scoped-registries | scoped | Industry.jsx ScopedRegistries | Scoped registries — Aidress | A scoped registry for your organisation, consortium or network. |
| /atlas | atlas | AtlasSoon (flag off) / SiteAtlas.jsx | Atlas — Aidress | The registry, made visible for humans. |
| /atlas/agents/:id | passport:id | AtlasSoon / SiteAtlas.jsx Passport | <Agent> — Agent Passport | Identity, trust and interfaces for this agent. |
| /developers | developers | Dev.jsx Developers | Developers — Aidress | SDK, CLI, MCP and API. |
| /docs | docs | Docs.jsx | Docs — Aidress | Aidress documentation. |
| /docs/:slug | docs:slug | Docs.jsx + docsContent.jsx sidebarNav | <Doc> — Aidress Docs | First paragraph of the page. |
| /research | research | Research.jsx | Research — Aidress | Aidress is a research-backed startup. |
| /research/:id | research:id | Research.jsx + papersContent.jsx | <Paper> — Aidress Research | The paper's description from data. |
| /impact | impact | Impact.jsx | Aidress for Good | Trust infrastructure doesn’t care who’s using it. |
| /crew | crew | Research.jsx Crew | Crew — Aidress | The people building the coordination layer. |

While a flag is off, coming-soon pages stay indexable and `/atlas/agents/:id` is noindex.

Machine-readable versions: `/llms.txt` and `/<path>.md`, generated from machineText().

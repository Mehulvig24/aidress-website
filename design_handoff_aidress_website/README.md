# Handoff: Aidress website (aidress.ai)

**Setup:** put this folder at the root of your local `aidress-website` repo, then unzip `handoff-design.zip` inside it. That creates `design_handoff_aidress_website/design/` (all the code and assets) and `standalone/` (the one-file site). Move these .md files into `design_handoff_aidress_website/`. Then follow PROMPTS.md.

## Goal
Ship the site **exactly as designed** (`design/ui_kits/website/`) inside `Mehulvig24/aidress-website`, and add production plumbing: real URLs, sitemap, SEO, llms.txt, fonts, forms, deploy.

**Rule #1: change nothing visual.** Every colour, size, spacing value, copy string, animation timing and interaction must match the mock. The mock wins over the existing repo and over framework defaults. Don't "improve" anything, round values to a grid, or swap in library components.

## About the design files
The mock is already React (function components, inline styles, CSS variables), running in the browser via Babel. Port it almost line for line (JSX → TSX, window globals → imports). Don't redesign it or rebuild from screenshots.
- Fidelity: high / final. Match it pixel for pixel.
- To view the reference, run `npx serve design` and open `/ui_kits/website/`.

## File map
| Mock file | What it is | Port to |
|---|---|---|
| styles.css + tokens/*.css | All design tokens | global CSS |
| components/**/X.jsx + X.d.ts | Design-system primitives (Button, NavBar, SectionHeader, IndustryTile, Tag, Badge, Avatar, Icon, SearchInput, ModeToggle, MachineView, StatRow, TextLink, LayerTabs, FlowDiagram, NetworkGraph, AgentPopover…) | src/components/ds/*.tsx |
| _ds_bundle.js | Compiled copy of components/; reference only, don't ship | — |
| SiteApp.jsx | Shell: routing, header (5 tabs + hover dropdowns), search (/), dark mode, Human/Machine, mobile menu, machineText() | App.tsx + router |
| SiteHome.jsx | Homepage | pages/Home |
| Layers5.jsx | Interactive five layers (desktop + MobileLayers) | components/FiveLayers |
| Diagrams.jsx, Shared.jsx | HeroTrace, Band, Photo, Parallax, Stepper | components/ |
| Industry.jsx | Industries, IndustryDetail, ComingSoon (redacted brief), ScopedRegistries, AtlasSoon, EarlyAccess | pages/Industries* |
| SiteAtlas.jsx, atlasApi.js | Atlas + Passport (api.aidress.ai with demo fallback), hidden by a flag | pages/Atlas, lib/atlasApi |
| Dev.jsx | Developers + Integrate + open source | pages/Developers |
| Docs.jsx, docsContent.jsx, interopDoc.jsx | Docs portal + orange BigFooter | pages/Docs, components/Footer |
| Research.jsx, papersContent.jsx, papers.css | Research site, paper readers, Crew | pages/Research, pages/Crew |
| Impact.jsx | Aidress for Good | pages/Impact |
| data.js, data2.js | Content + feature flags (`A.flags`) | src/data/*.ts |

## Behaviour that must survive
- **Header:** Platform (▾ Five layers, Atlas) · Industries · Developers (▾ Overview, Docs, Quickstart, API reference, MCP server, GitHub ↗) · Research · Company (▾ Aidress for Good, Crew, Contact). Small hover dropdowns. Logo + AIDRESS top-left links home. Right side: Search, Dark/Light, Human/Machine, Connect agent.
- **Mobile (≤760px):** logo, Search, Dark, Menu, with a full-screen grouped menu. All `@media` rules in index.html's `<style>` are part of the design.
- **Dark mode:** stored in localStorage `aidress-site-theme`, same on every page; uses the page-invert approach (`html[data-theme=dark]` rules).
- **Machine view:** a plain-text page from machineText(). Also publish it as static files.
- **Five-layer timings:** desktop 1700ms per step, mobile 1400ms, Terms click-through 750ms, travelling dot 700ms. Respect prefers-reduced-motion.
- **Coming soon:** `A.flags = { atlasLive:false, industriesLive:false }`. Keep both code paths. Redacted bars flash the real word orange for 900ms on hover or tap.
- **Parallax:** subtle, hero and Atlas band only.

## Tokens
Copy `design/tokens/*.css` verbatim.
- Colours: vermilion `#E84A27` is the only brand colour (orange = resolved/active); ink `#212320`; box border `#92968c`.
- Fonts: sans is Neue Haas Grotesk Display Pro, mono is RM Mono. Both are licensed and the files are not included.
- Style: square corners, 1px borders, no gradients.

## Assets
- `design/assets/`: logo marks, icons, crew and impact photos, white-paper cover, LangChain/Strands/Stripe logos, textures.
- Industry photos are Unsplash URLs in data2.js, with credits. Self-host them before launch.

## Open items
- Font files and `@font-face` rules, once licensed.
- The early-access and notify forms are front-end only.
- Some revealed words in the coming-soon briefs are placeholders.

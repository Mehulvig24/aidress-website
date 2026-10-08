# Aidress Design System

Aidress is the coordination protocol for autonomous AI agents — the infrastructure that lets agents discover, verify, and transact with unknown counterparties without human intervention. We are the universal registry that powers the agentic economy. Current protocols like A2A(identity) or x402(routing) solve parts of the gap, but discovery, *universal* identity, trust, and terms, remain either unsolved or disunited. We are building the protocol that collectively enables autonomous transactions through these 5 layers.

**Mission:** 

To build the foundational coordination layer that enables autonomous agents to discover, verify, and transact with each other - making the machine economy function

**Vision:** 

What the internet did for information and what payment rails did for money, Aidress does for autonomous agents. We are building the base infrastructure of the agentic economy - the universal layer that every agent plugs into to find, trust, and transact with the world. A future where agents operate at the speed and scale of machines, all without human intervention, runs on Aidress. 

## Product surfaces

One continuous application rather than separate marketing pages:

- **Home / Hero** — the hero *is* the product entry point: a hover-responsive network graph; clicking a node transitions into the Atlas.
- **Atlas** — force-directed registry graph with pan/zoom, industry/capability filters, clustering, and a side inspector.
- **Agent Passport** — an individual agent: identity record, capabilities, trust, protocols, transactions, revealed progressively.
- **Industry Grid / Industry Detail** — verticals (Logistics, Payments, Healthcare, Research, Finance, Retail, Developer Tools) with interactive workflow diagrams.
- **Technology** — layered architecture (Identity, Trust, Routing, Protocol Support, API & SDK, Open Source).
- **Research** (living knowledge base), **Docs** (developer portal), **About / Contact / Footer** — described in the brief, not yet wireframed.

## Sources

- `uploads/Screenshot 2026-09-28 at 11.37.02 PM.png` — colour plate: "A colour built for infrastructure", "Orange = resolved", vermilion grain field.
- `uploads/Screenshot 2026-09-28 at 11.37.11 PM.png` — type plate: RM Mono (Light → Black) + Neue Haas Grotesk.
- `uploads/Wireframe.pdf` — 8 greyscale wireframes (Canva, author Karu Thanu Kumar). Rasterised to `assets/reference/wireframe-1…8.png`.
- Designer's notes (chat, 20/08/2026) on colour, typography and the interaction model. No codebase, Figma file or logo was provided.

---

## CONTENT FUNDAMENTALS

- **Voice:** declarative, infrastructural, calm. Short noun-led headlines, then one plain sentence. Confident without hype. *"For the Agentic Economy." "A universal registry for autonomous agents to discover, verify, and collaborate."*
- **Rhythm:** headline → one-line lead → numbers. Taglines use full stops as beats: *"Real workflows. Measurable impact." "Interoperable. Verifiable. Developer-friendly."*
- **Casing:** Title Case for headlines, buttons, nav and labels (*Explore the Atlas, Register Agent, Trust Score, View Full Profile*). Sentence case for leads/body. Eyebrows are ALL-CAPS mono (*THE COORDINATION LAYER, FILTER BY INDUSTRY*).
- **Person:** product speaks about agents and "you" implicitly (imperatives: *Explore, Register, Connect, View*). The company refers to itself as AIDRESS (all caps in body copy) — the brief uses "Aidress" in prose; both appear.
- **Numbers do the persuading:** before → after metrics with an arrow (*4h → 18s, 2 days → 4s, 3 min → 4s*), compact figures (*10K+, 1.2M, 99.8%, < 1s, -94%*). Use the → character, not "to".
- **Technical nouns are literal:** A2A, MCP, x402, agent IDs, trust score, attestations, routing — set in mono when they're identifiers.
- **Vocabulary:** resolve, route, registry, verify, discover, coordinate, passport, atlas, node, layer. Avoid "revolutionary", "AI-powered magic", exclamation marks.
- **Emoji:** never. Unicode used only for → ← and ≥.

## VISUAL FOUNDATIONS
- **Marketing rhythm (Sept 29 mock):** alternating paper (#F3F2EE) and stone (#E7E7DF) full-width bands, one ink (#212320) band for the Atlas + footer. Each band opens with a mono `01 / LABEL` line and a right-aligned mono tagline (`ONE REGISTRY. FIVE LAYERS.`), then an 88–104px medium-weight headline at −0.05em with a grey lead pinned bottom-right. Sharp edges: diagram boxes, photos and marketing cards have 0 radius; 1px #92968C box borders; #AAAAAA rules under tabs. Active tabs/tiles turn vermilion with a 3px vermilion underline.

- **Colour:** one strong colour. **Vermilion #E84A27** — deeper and redder than safety orange, chosen for visibility and infrastructure associations. It is *functional*: **orange = resolved** — resolved nodes, verified identity, active route, the metric that matters. Everything else is warm paper greys (#F7F6F3 paper, #DBD9CD stone specimen, #D9D9D9 plate grey) and ink (#161616) / black. Never blue-greys. Never more than one orange focal point per view.
- **Type:** Neue Haas Grotesk for everything human-readable (tight negative tracking on display: −0.03 to −0.045em, semibold 600, bold 700 for posters). RM Mono for identifiers, addresses, coordinates, eyebrows and brand-plate headings ("ORANGE = RESOLVED"). "Retro in reference, not retro in appearance" — never go all-mono.
- **Backgrounds:** flat paper on product surfaces. Brand/hero plates use a **grain texture** — noisy vermilion field falling from signal red (#E83518) to oxblood (#8F2C31), with a flare orange (#F58A4C) edge. Copied textures in `assets/`. No bluish/purple gradients, no illustrations.
- **Layout:** 1440 frame, 44px gutters, 60px sticky nav. Hairline (1px #E6E5E1) dividers structure everything — between stats, rows, panes. Atlas is a 3-pane layout (252 sidebar / canvas / 380 inspector).
- **Cards:** white on paper, 1px subtle border, 4px radius (2px for media/technical cards), no shadow at rest; hover adds a soft two-layer shadow and darkens the border. No coloured left-borders.
- **Corners:** nearly square. 4px buttons/inputs/cards; circles only for nodes and avatars.
- **Shadows:** flat by default. Only floating things (popovers, hover cards) get `--shadow-popover`. Graph hub nodes use an offset ring (paper gap + 1px ink/vermilion ring).
- **Borders:** 1px everywhere. Secondary buttons are 1px ink outlines. Focus = ink border (inputs).
- **Hover:** text links → vermilion-600 and the arrow nudges 3px; primary buttons darken ink → black; cards lift with shadow; graph hover dims non-neighbours to 30% and reveals the mono agent ID.
- **Press:** 1px translateY; no scale bounce.
- **Motion:** progressive disclosure and state transitions, not decoration. Easing `--ease-resolve` cubic-bezier(.22,1,.36,1) — fast out, long settle. 140ms hovers, 240ms panels/tabs, 480–800ms scene transitions (hero → Atlas). Resolving routes animate as moving dashed vermilion lines; the active workflow step pulses. Scroll-triggered reveals and parallax on marketing sections (per brief).
- **Transparency/blur:** only the sticky nav (82% paper + 12px blur). Otherwise opaque.
- **Imagery:** none supplied. Media slots are quiet stone panels with a mono caption; brand moments use the grain texture. If photography is added: warm, grainy, desaturated with vermilion as the only saturated note.
- **Data display:** big semibold numbers with small grey labels, hairline-separated. Tabular numerals.

## ICONOGRAPHY

- The wireframes use thin-stroke outline icons (search, arrows, user, envelope, network, globe, list, refresh, chevrons, ellipsis). No icon set was supplied, so **Lucide** (closest match — 24px grid, round caps, outline) is used as a **substitute**. 42 icons were copied programmatically from `lucide-static@0.460.0` into `assets/icons/*.svg` and embedded in the `Icon` component (default stroke 1.5 to match the light wireframe line).
- Icons are monochrome ink; vermilion only when the icon marks a resolved state (Verified badge check).
- No emoji. No icon font. Unicode arrows (→ ←) appear in metric copy.
- **Logo:** none provided. The wordmark is typeset "AIDRESS" in Neue Haas Grotesk Bold, −0.035em. Do not draw a mark.

## Fonts — SUBSTITUTION FLAG

Neue Haas Grotesk and RM Mono are commercial and were not supplied. Tokens reference the real families first; fallbacks load from Google Fonts: **Inter Tight** (for Neue Haas) and **JetBrains Mono** (for RM Mono). Add licensed `.woff2` files to `assets/fonts/` and `@font-face` rules in `tokens/fonts.css`.

---

## Index

- `styles.css` — entry point (@imports only) → `tokens/fonts.css, colors.css, typography.css, spacing.css, motion.css, base.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `assets/` — `texture-vermilion-grain.png`, `texture-flare-strip.png`, `texture-ember-strip.png`, `icons/` (Lucide subset), `reference/` (wireframes)
- `components/` — React primitives (below), each with `.jsx`, `.d.ts`, `.prompt.md`, plus one card per folder
- `ui_kits/platform/` — first-round click-through from the wireframes: Home, Industries, Industry Detail (+ Workflow), Atlas, Agent Passport, Technology
- `ui_kits/website/` — **current website mock**: Home (hero graph → five layers → industries → workflow step-through → Atlas → Research → Developers), Industries grid + 3 curated industry pages (Logistics & Shipping, Payments, Commerce), Atlas sub-site + Passport, Research sub-site (dark, Rox-style index), Crew, and a Human/Machine toggle that swaps any page for plain machine-readable text. Photos are drop-in `<image-slot>`s.
- `thumbnail.html`, `SKILL.md`

## Components

- **core/** — Button, IconButton, Badge, Tag, Avatar, Eyebrow, Icon, MediaSlot
- **forms/** — SearchInput, RadioList, Accordion, SegmentedControl
- **navigation/** — NavBar, Tabs, TextLink
- **data/** — Stat, StatRow, KeyValueList, ActivityList, TrustMeter
- **cards/** — IndustryCard, LayerCard, AgentPopover, AgentPanel
- **workflow/** — WorkflowRail
- **site/** — SectionHeader, LayerTabs, FlowDiagram, IndustryTile, ModeToggle, MachineView, SiteFooter (marketing-site vocabulary from the Sept 29 mock round)
- **graph/** — NetworkGraph

The inventory is derived from what the wireframes show (no component library was supplied).

### Intentional additions

- **Icon** — wraps the Lucide substitute set so every glyph is consistent.
- **MediaSlot** — standardises the wireframes' image placeholders and the grain texture.
- **Eyebrow** — the mono section label repeated on every page.

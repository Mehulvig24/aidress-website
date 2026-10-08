# Claude Code prompts

Open Claude Code in your `aidress-website` repo, with the handoff unzipped as described in README.md. Paste these one at a time, check each result, and commit after each step.

## 0. Orientation
```
Read design_handoff_aidress_website/README.md, ROUTES.md and design/ui_kits/website/LAUNCH.md. Look at this repo (package.json, src/, routing, styling). Don't change anything yet. Tell me how you'll map the mock onto this repo, what gets replaced, and any conflicts. The goal is a pixel-exact port: nothing visual may change.
```

## 1. Tokens + components
```
Create a branch named redesign. Copy design/styles.css and design/tokens/*.css verbatim into global styles. Port every design/components/**/X.jsx to TSX in src/components/ds/, keeping the exact inline styles and using X.d.ts for the props. Copy design/assets/ to public/assets/. Don't round or rename any values. Commit.
```

## 2. Shell, routing, header, footer
```
Port design/ui_kits/website/SiteApp.jsx into the app shell. Replace the localStorage route with real URL routing using ROUTES.md, so back and forward work and every page is linkable. Port the header with its 5 tabs and small hover dropdowns, Search (with the / shortcut), dark mode (same invert approach, same localStorage key), the Human/Machine toggle and the mobile menu. Port the orange BigFooter from Docs.jsx. Port the global <style> block from design/ui_kits/website/index.html, including all @media rules. Commit.
```

## 3. Pages
```
Port each page in design/ui_kits/website/ to its route from ROUTES.md: SiteHome, Layers5 (desktop and MobileLayers, same timings), Diagrams, Shared, Industry (Industries, ComingSoon, ScopedRegistries, AtlasSoon, EarlyAccess), SiteAtlas + atlasApi, Dev, Docs + docsContent + interopDoc, Research + papersContent + papers.css, and Impact. Move data.js and data2.js into src/data as typed modules. Keep A.flags and both code paths for each flag. Copy all text exactly. Commit after each page.
```

## 4. Visual check
```
Serve design_handoff_aidress_website/design next to the app. For every route at 1440px and 390px wide, list every difference from the mock (spacing, size, colour, wrapping, hover, animation, mobile layout) and fix them all. Repeat until there are none. Also check dark mode, the Machine view, search, the five-layers play cycle, the dropdowns and the mobile menu.
```

## 5. SEO + sitemap
```
Add a title, meta description, canonical URL and OG/Twitter tags for each route from ROUTES.md. The OG image is the logo on #E84A27, 1200×630. Generate sitemap.xml at build time, including every /docs/:slug and /research/:id. Add a robots.txt that points to the sitemap. Set noindex on /atlas/agents/:id while atlasLive is false. Generate /llms.txt and a .md file per page from machineText() at build time. Prerender or statically generate every route so crawlers get full HTML, without changing anything visual. Commit.
```

## 6. Fonts, forms, images, performance
```
When I add the Neue Haas Grotesk Display Pro and RM Mono files to public/fonts/, add @font-face rules with font-display: swap and keep the fallback stacks. Post the EarlyAccess and Notify forms to <ENDPOINT>. Self-host the Unsplash images from src/data at responsive sizes and keep the credits. Aim for 90+ in Lighthouse without any visual change. Commit.
```

## 7. Deploy
```
Deploy to Vercel from main and point aidress.ai at it. Open a PR from redesign to main with a screenshot of each route next to its mock.
```

## Later
- "Set atlasLive to true, remove noindex from passports, and add the agent URLs to the sitemap."
- "Set industriesLive to true."
- "Add I.commerce back to A.industries and add its route."

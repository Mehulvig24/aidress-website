# Launch switches

Unfinished sections are hidden behind flags in `data2.js`. The full pages are still in the code; flip a flag to bring them back.

```js
A.flags = { atlasLive: false, industriesLive: false };
```

- **atlasLive** — `false`: /atlas and agent passports show the "Coming soon" brief (`AtlasSoon` in Industry.jsx). `true`: the live Atlas (SiteAtlas.jsx) and Passport pages.
- **industriesLive** — `false`: Logistics + Shipping and Payments show the redacted brief (`ComingSoon` in Industry.jsx). `true`: the full industry pages (workflow stepper, five layers, agents).

Edit the redacted brief rows in `data2.js` (`I.logistics.brief`, `I.payments.brief`) and `ATLAS_BRIEF` in Industry.jsx. Text in `{braces}` is redacted and flashes on hover.

Commerce data (`I.commerce`) is kept in data.js; add it back to `A.industries` to show it.

Early-access forms are front-end only; wire `EarlyAccess` in Industry.jsx to your email/CRM endpoint before launch.

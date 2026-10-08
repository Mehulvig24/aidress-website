// Tells IndexNow (Bing, and through it ChatGPT search, Yandex, Seznam…) about every URL in the
// live sitemap. Run after a deploy has gone live: `npm run indexnow`.
// The key is public by design; it must match public/<key>.txt on the site.
const KEY = "35a5193ca2d74edd821dc89e5b9abca0";
const HOST = "aidress.ai";

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error("no URLs found in the live sitemap");

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
if (!res.ok && res.status !== 202) process.exit(1);

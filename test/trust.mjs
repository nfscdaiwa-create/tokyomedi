import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import worker from '../src/index.js';
import {CONTENT_LOCALES,LOCALES,UI,SITE} from '../src/data.js';
const hit=path=>worker.fetch(new Request(SITE+path));
const page=async path=>(await hit(path)).text();
const sitemap=await page('/sitemap.xml');
const locations=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>x[1]);
assert.equal(locations.length,153);assert(locations.every(url=>CONTENT_LOCALES.includes(new URL(url).pathname.split('/')[1])));
assert(!sitemap.includes('hreflang="pcm"')&&!sitemap.includes('/de/'));
for(const l of LOCALES){
 const html=await page('/'+l+'/guides/read-japanese-medicine-information');
 const alternates=[...html.matchAll(/<link rel="alternate" hreflang="([^"]+)"/g)].map(x=>x[1]);
 assert.deepEqual(alternates,['en','zh-Hans','ja','x-default']);
 const complete=CONTENT_LOCALES.includes(l);
 assert(html.includes(`name="robots" content="${complete?'index':'noindex'},follow`),l);
 assert(html.includes(`<link rel="canonical" href="${SITE}/${complete?l:'en'}/guides/read-japanese-medicine-information">`));
 for(const kind of ['privacy','terms']){
  const res=await hit('/'+l+'/'+kind);assert.equal(res.status,200);const text=await res.text();
  assert(text.includes(`href="/${l}/privacy"`)&&text.includes(`href="/${l}/terms"`));
  assert(!text.includes('undefined')&&text.includes('2026-10-05'));
 }
 const home=await page('/'+l);if(!complete)assert(home.includes(`<title>${UI[l].heroTitle} | TOKYO MEDI</title>`));
 assert(home.includes('property="og:image" content="https://tokyomedi.com/og-cover.png"')&&home.includes('name="twitter:card" content="summary_large_image"'));
 const schema=[...home.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(x=>JSON.parse(x[1]));
 const org=schema.flatMap(x=>x['@graph']||[]).find(x=>x['@type']==='Organization');
 assert.equal(org.url,SITE+'/en');assert(!org.legalName&&!org.address&&!org.telephone); // Real operator details must not be fabricated.
}
for(const url of ['https://www.tokyomedi.com/en/health?q=DHC','http://www.tokyomedi.com/ja/medicines?area=cardio']){
 const res=await worker.fetch(new Request(url));assert.equal(res.status,301);assert.equal(res.headers.get('location'),url.replace('http:','https:').replace('www.tokyomedi.com','tokyomedi.com'));
}
for(const path of ['/en/privacy/extra','/ja/terms/extra'])assert.equal((await hit(path)).status,404);
const assetEnv={ASSETS:{async fetch(req){return new URL(req.url).pathname==='/og-cover.png'?new Response('image bytes',{headers:{'content-type':'image/png','etag':'asset-test'}}):new Response('Not Found',{status:404})}}};
let asset=await worker.fetch(new Request(SITE+'/og-cover.png'),assetEnv);assert.equal(asset.status,200);assert.equal(asset.headers.get('etag'),'asset-test');assert.equal(asset.headers.get('strict-transport-security'),'max-age=31536000');
asset=await worker.fetch(new Request('https://www.tokyomedi.com/og-cover.png'),assetEnv);assert.equal(asset.status,301);assert.equal(asset.headers.get('location'),SITE+'/og-cover.png');
assert.equal((await worker.fetch(new Request(SITE+'/en/privacy'),assetEnv)).status,200);
const inquiry=await page('/zh-hans/inquiry');assert(inquiry.includes('不向本站服务器提交所填内容')&&inquiry.includes('href="/zh-hans/privacy"'));
const bytes=readFileSync(new URL('../public/og-cover.png',import.meta.url));assert(bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])));assert.equal(bytes.readUInt32BE(16),1200);assert.equal(bytes.readUInt32BE(20),630);
console.log('PASS: 153 complete-language sitemap URLs, bidirectional three-language alternates, 17 noindex/canonical fallbacks, 40 policy routes, localized home titles, permanent www redirects, real sharing image and non-fabricated identity');

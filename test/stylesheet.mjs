import assert from 'node:assert/strict';
import worker from '../src/index.js';
import {CSS} from '../src/styles.js';
import {DESIGN_CSS} from '../src/styles-v2.js';
import {STYLESHEET_PATH,STYLESHEET_ETAG} from '../src/stylesheet.js';
import {LOCALES} from '../src/data.js';

const request=(path,options={})=>new Request('https://tokyomedi.com'+path,options);
const css=await worker.fetch(request(STYLESHEET_PATH));
assert.equal(css.status,200);
assert.equal(await css.text(),CSS+DESIGN_CSS,'The extracted cascade must be byte-for-byte identical');
assert.equal(css.headers.get('content-type'),'text/css; charset=utf-8');
assert.equal(css.headers.get('cache-control'),'public, max-age=31536000, immutable');
assert.equal(css.headers.get('x-content-type-options'),'nosniff');
assert.equal(css.headers.get('etag'),STYLESHEET_ETAG);
assert.match(STYLESHEET_PATH,/^\/assets\/site-[0-9a-f]{16}\.css$/);
for(const etag of [STYLESHEET_ETAG,'W/'+STYLESHEET_ETAG,'"other", '+STYLESHEET_ETAG,'*']){
 const res=await worker.fetch(request(STYLESHEET_PATH,{headers:{'if-none-match':etag}}));
 assert.equal(res.status,304);assert.equal(await res.text(),'');
}
assert.equal((await worker.fetch(request(STYLESHEET_PATH,{headers:{'if-none-match':'"old"'}}))).status,200);
const head=await worker.fetch(request(STYLESHEET_PATH,{method:'HEAD'}));
assert.equal(head.status,200);assert.equal(await head.text(),'');
assert.equal(head.headers.get('etag'),STYLESHEET_ETAG);
assert.equal((await worker.fetch(request('/assets/site-0000000000000000.css'))).status,404);
assert.equal((await worker.fetch(request(STYLESHEET_PATH,{method:'POST'}))).status,405);
const assetEnv={ASSETS:{fetch(){throw new Error('Stylesheet must not depend on static asset fallback');}}};
assert.equal((await worker.fetch(request(STYLESHEET_PATH),assetEnv)).status,200);
for(const locale of LOCALES){
 for(const route of ['', '/inquiry', '/medicines', '/medicines/semaglutide', '/missing']){
  const html=await (await worker.fetch(request('/'+locale+route))).text();
  assert.equal(html.split('href="'+STYLESHEET_PATH+'"').length-1,1);
  assert(!html.includes(CSS),'Shared CSS is not repeated in HTML');
 }
}
console.log('PASS: exact CSS cascade; immutable content fingerprint; 100 localized pages; GET/HEAD/304/405/404; static-binding independence');

import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import worker from '../src/index.js';
import {medicines,healthProducts} from '../src/data.js';
import {medicineDossiers} from '../src/medicine-dossiers.js';
import {healthDossiers} from '../src/health-dossiers.js';
import {healthLabels,healthPhotos} from '../src/health-labels.js';
import {dossierSources} from '../src/dossier-sources.js';
const fields=['overview','mechanism','indications','dosing','risks','contraindications','interactions','monitoring','storage'];
assert.equal(medicines.length,16);assert.equal(healthProducts.length,21);
for(const product of medicines){
 assert(dossierSources[product.slug]?.labelHtml.includes('/iyakuDetail/'),product.slug+' official label');
 for(const locale of ['zh-hans','ja','en']){
  for(const field of fields)assert(medicineDossiers[product.slug]?.[field]?.[locale]?.length>15,product.slug+'/'+field+'/'+locale);
  const response=await worker.fetch(new Request('https://tokyomedi.com/'+locale+'/medicines/'+product.slug));
  const html=await response.text();assert.equal(response.status,200);
  assert.equal((html.match(/class="referenceSection"/g)||[]).length,10,product.slug+' all detail sections');
  assert(html.includes(dossierSources[product.slug].encyclopedia));assert(!html.includes('undefined'));
 }
}
for(const product of healthProducts){
 const photo=healthPhotos[product.slug];const bytes=readFileSync(new URL('../public'+photo.path,import.meta.url));
 assert(bytes.length>1000,product.slug+' local photo');
 assert(bytes[0]===0xff&&bytes[1]===0xd8||bytes.subarray(0,4).toString()==='RIFF',product.slug+' image signature');
 const label=healthLabels[product.slug];
 if(product.brand==='DHC'){
  assert(label?.ingredientsJa.length>5,product.slug+' ingredients');
  assert(label.nutrients.length>=6,product.slug+' full panel');
  assert(label.nutrients.every(n=>n.amount!=='—'),product.slug+' parsed amounts');
  assert(label.source.startsWith('https://top.dhc.co.jp/'));assert(product.pack.includes(label.daily*(product.pack.includes('60日')?60:20)+'粒'),product.slug+' pack matches daily count');
 }
 for(const locale of ['zh-hans','ja','en']){
  for(const field of ['overview','knowledge','caution'])assert(healthDossiers[product.slug]?.[field]?.[locale]?.length>20,product.slug+'/'+field);
  const response=await worker.fetch(new Request('https://tokyomedi.com/'+locale+'/health/'+product.slug));const html=await response.text();assert.equal(response.status,200);
  assert.equal((html.match(/class="referenceSection"/g)||[]).length,8,product.slug+' all detail sections');
  assert(html.includes(photo.path));assert(html.includes(photo.page));assert(!html.includes('undefined'));
  if(label){assert.equal((html.match(/scope="row"/g)||[]).length,label.nutrients.length,product.slug+' all nutrition rows');assert(html.includes('lang="ja"'));}
  // All on-page directory links resolve to actual section IDs.
  for(const target of html.matchAll(/href="#(reference-[^"]+)"/g))assert(html.includes('id="'+target[1]+'"'),product.slug+' '+target[1]);
 }
}
const amount=(slug,name)=>healthLabels[slug].nutrients.find(n=>n.name.ja===name)?.amount;
assert.equal(amount('dhc-heme-iron','鉄'),'10.0mg');
assert.equal(amount('dhc-ornithine','アルギニン'),'300mg');
assert.equal(amount('dhc-sustained-release-folic-acid','葉酸'),'400μg');
assert.equal(amount('dhc-coenzyme-q10','コエンザイムQ10'),'75mg');
assert(healthLabels['dhc-coenzyme-q10'].nutrients.find(n=>n.name.ja==='コエンザイムQ10包接体').amount.includes('15mg'));
assert.deepEqual(healthLabels['dhc-calcium-magnesium-20'].nutrients,healthLabels['dhc-calcium-magnesium-60'].nutrients);
assert.deepEqual(healthLabels['dhc-concentrated-ukon-20'].nutrients,healthLabels['dhc-concentrated-ukon-60'].nutrients);
assert.equal(healthProducts.find(x=>x.slug==='dhc-natural-vitamin-e-soy').kind,'food');
assert(healthProducts.find(x=>x.slug==='dhc-kozu-black-vinegar').ja.includes('香酢'));
assert(medicineDossiers.semaglutide.overview['zh-hans'].includes('口服'));
console.log('PASS: all 37 product dossiers, 111 translated detail routes, 21 local photos, full label tables, anchors and variant-sensitive amounts');

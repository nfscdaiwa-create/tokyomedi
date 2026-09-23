import worker from '../src/index.js';
import {medicines,healthProducts,hospitals,guides,LOCALES,SITE} from '../src/data.js';
import {healthImageUrls} from '../src/health-images.js';
import {CSS} from '../src/styles.js';
const hit=async(path,lang='zh-CN')=>worker.fetch(new Request('https://tokyomedi.com'+path,{headers:{'accept-language':lang}}));
const checks=[];
const luminance=hex=>{const channels=hex.match(/[\da-f]{2}/gi).map(v=>parseInt(v,16)/255);return channels.map(v=>v<=0.04045?v/12.92:((v+0.055)/1.055)**2.4).reduce((sum,v,i)=>sum+v*[0.2126,0.7152,0.0722][i],0)};
const contrast=(foreground,background)=>{const a=luminance(foreground),b=luminance(background);return (Math.max(a,b)+0.05)/(Math.min(a,b)+0.05)};
const hospitalMetaColor=CSS.match(/\.hospitalRow small\{[^}]*color:(#[\da-f]{6})/i)?.[1];
checks.push(['desktop hospital metadata contrast',Boolean(hospitalMetaColor)&&contrast(hospitalMetaColor,'#f6f5f1')>=4.5]);
checks.push(['contact email',true]);
let redirect=await hit('/','en-US,en;q=0.9,zh-CN;q=0.1'); checks.push(['language preference weighting',redirect.status===302&&redirect.headers.get('location')==='https://tokyomedi.com/en'&&redirect.headers.get('vary')==='Accept-Language'&&redirect.headers.get('cache-control')==='private, no-store']);
redirect=await worker.fetch(new Request('http://tokyomedi.com/en/medicines?q=Rybelsus')); checks.push(['HTTP upgrades to HTTPS',redirect.status===308&&redirect.headers.get('location')==='https://tokyomedi.com/en/medicines?q=Rybelsus']);
checks.push(['HTTPS HSTS header',(await hit('/en')).headers.get('strict-transport-security')==='max-age=31536000']);
checks.push(['local HTTP has no HSTS',(await worker.fetch(new Request('http://localhost/en'))).headers.get('strict-transport-security')===null]);
redirect=await hit('/','ja-JP,zh-CN;q=0.5'); checks.push(['Japanese root redirect',redirect.headers.get('location')==='https://tokyomedi.com/ja']);
redirect=await hit('/en/medicines/?q=Rybelsus'); checks.push(['trailing slash canonical redirect',redirect.status===308&&redirect.headers.get('location')==='https://tokyomedi.com/en/medicines?q=Rybelsus']);
const requiredMedicineFields=['slug','en','ja','zh','productJa','brandEn','manufacturerJa','strengths','status','labelUpdated','verifiedAt','source'];
checks.push(['medicine product-level completeness',medicines.length>=16&&medicines.every(m=>requiredMedicineFields.every(k=>Boolean(m[k]))&&m.source.includes('pmda.go.jp'))]);
checks.push(['medicine sources product-specific',new Set(medicines.map(m=>m.source)).size===medicines.length]);
checks.push(['health catalogue restored',healthProducts.length>=20&&healthProducts.every(x=>x.slug&&x.brand&&x.zh&&x.ja&&x.en&&x.pack&&x.sourcePage&&x.verifiedAt)]);
checks.push(['health source SKUs are unique',new Set(healthProducts.map(x=>x.sku)).size===healthProducts.length]);
checks.push(['hospital intake provenance',hospitals.length>=7&&hospitals.every(h=>h.url&&h.verified&&h.facts&&h.facts.en?.length>=2&&h.facts['zh-hans']?.length>=2&&h.facts.ja?.length>=2)]);
let r=await hit('/zh-hans'); let s=await r.text(); checks.push(['home',r.status===200&&s.includes('日本医学研究与医疗发展')&&s.includes('处方药资料索引')]); checks.push(['health on homepage',s.includes('04 · HEALTH & NUTRITION')&&s.includes('/zh-hans/health/')&&s.includes('/media/health/')&&s.includes('健康与营养')]); checks.push(['no promotional question-style copy',!s.includes('先看证据，再看服务')&&!s.includes('日本医学实力，有具体成果')&&!s.includes('查到药以后，下一步是什么？')&&!s.includes('为什么选择 TOKYO MEDI')&&!s.includes('你现在要做什么？')]); checks.push(['homepage trust-first hierarchy',
  s.includes('资料来源与核验') &&
  s.includes('日本医学研究与医疗发展') &&
  s.includes('日本医药品资料库') &&
  s.indexOf('class="section proofSection"') < s.indexOf('class="section strength evidenceSection"') &&
  s.indexOf('class="section strength evidenceSection"') < s.indexOf('class="section database"')
]);
checks.push(['no patient service flow on homepage',
  !s.includes('class="section pathwaySection"') &&
  !s.includes('赴日就医基本流程') &&
  !s.includes('PATIENT / INDIVIDUAL') &&
  !s.includes('初诊登记')
]);
checks.push(['institution-only inquiry on homepage',
  s.includes('医药品询价说明') &&
  s.includes('仅面向医疗机构、药局与企业') &&
  s.includes('不提供个人医疗咨询')
 ]); checks.push(['fully opaque reading text',!s.includes('animation-timeline:view(block)')&&!s.includes('opacity:.45')]); checks.push(['analytics CSP',
  (r.headers.get('content-security-policy')||'').includes('https://static.cloudflareinsights.com')&&
  (r.headers.get('content-security-policy')||'').includes('https://cloudflareinsights.com')
 ]);
checks.push(['seo home metadata',
  s.includes('<title>日本医药品资料库与赴日医疗 | TOKYO MEDI</title>') &&
  s.includes('name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"') &&
  s.includes('hreflang="x-default"') &&
  s.includes('rel="icon" href="/favicon.svg"') &&
  s.includes('"@type":"Organization"') &&
  s.includes('"@type":"WebSite"')
]);
r=await hit('/zh-hans/medicines'); s=await r.text(); checks.push(['premium medicine index',r.status===200&&s.includes('class="medicineCardGrid"')&&s.includes('class="medicineIndexTrust"')&&s.includes('制造销售企业')&&s.includes('规格 / 含量')&&s.includes('本站核验')&&s.includes('PMDA')&&!s.includes('class="medicineTable"')]); checks.push(['medicine product imagery',s.includes('/media/medicine/amlodipine')&&s.includes('/media/medicine/nivolumab')&&s.includes('class="medicineCardMedia"')]);
const zhName=s.indexOf('<h2>纳武利尤单抗</h2>'), jaProduct=s.indexOf('オプジーボ点滴静注20mg'); checks.push(['localized medicine hierarchy',zhName>-1&&jaProduct>zhName]);
r=await hit('/zh-hans/medicines?q=opdivo'); s=await r.text(); checks.push(['medicine search by brand',r.status===200&&s.includes('纳武利尤单抗')&&s.includes('オプジーボ')&&s.includes('小野薬品工業')]); checks.push(['query pages noindex',s.includes('name="robots" content="noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"')]);
r=await hit('/en/medicines?q=%EF%BC%B2%EF%BC%B9%EF%BC%A2%EF%BC%A5%EF%BC%AC%EF%BC%B3%EF%BC%B5%EF%BC%B3'); s=await r.text(); checks.push(['full-width Latin search',s.includes('/en/medicines/semaglutide')&&s.includes('<b>1</b>')]);
r=await hit('/en/medicines?q='+encodeURIComponent('X'.repeat(500))); s=await r.text(); checks.push(['search query size limit',s.includes('X'.repeat(120))&&!s.includes('X'.repeat(121))]);
r=await hit('/zh-hans/medicines/nivolumab'); s=await r.text(); checks.push(['medicine verified detail',r.status===200&&s.includes('オプジーボ点滴静注20mg')&&s.includes('制造销售企业')&&s.includes('2026-08-25')&&s.includes('2026-09-22')&&s.includes('PMDA · 专业资料')]); checks.push(['medicine detail image',s.includes('class="medicineHeroMedia"')&&s.includes('/media/medicine/nivolumab')]); checks.push(['medicine semantic schema',s.includes('"@type":"Drug"')&&s.includes('"manufacturer"')&&s.includes('"BreadcrumbList"')&&s.includes('"prescriptionStatus":"https://schema.org/PrescriptionOnly"')]); checks.push(['patient medicine CTA',s.includes('href="/zh-hans/travel">查看赴日医疗资讯</a>')&&!s.includes('type=personal')&&s.includes('type=institution')]);
r=await hit('/en/medicines/semaglutide'); s=await r.text(); checks.push(['representative oral tablet form',s.includes('<dt>Dosage form</dt><dd>oral tablet</dd>')]);
r=await hit('/zh-hans/medicines/semaglutide'); s=await r.text(); checks.push(['localized dosage form',s.includes('<dt>剂型</dt><dd>口服片剂</dd>')]);
r=await hit('/zh-hans/medicines/ramelteon'); s=await r.text(); checks.push(['regulatory status nuance',r.status===200&&s.includes('解除“处方笺医药品”指定')&&!s.includes('<strong>Rx ·')]);
r=await hit('/en/guides/read-japanese-medicine-information'); s=await r.text(); checks.push(['article schema',r.status===200&&s.includes('"@type":"Article"')&&s.includes('"BreadcrumbList"')&&s.includes('"publisher":{"@id":"https://tokyomedi.com/#organization"}')]);
r=await hit('/en/medical-travel'); checks.push(['legacy route 404',r.status===404]);
r=await hit('/en/travel'); s=await r.text(); checks.push(['travel',r.status===200&&s.includes('National Cancer Center')&&s.includes('designated coordinating agent')&&s.includes('Center for Global Health')]);
r=await hit('/zh-hans/health'); s=await r.text(); checks.push(['health page',r.status===200&&s.includes('日本深海鱼胶原蛋白')&&s.includes('DHC 发酵黑芝麻素 PREMIUM')&&s.includes('class="healthCardGrid"')&&s.includes('/media/health/dhc-fermented-black-sesamin-premium')]);
r=await hit('/zh-hans/health/dhc-fermented-black-sesamin-premium'); s=await r.text(); checks.push(['health detail',r.status===200&&s.includes('食品 · 非医药品')&&s.includes('TSU-HF-0013')&&s.includes('/media/health/dhc-fermented-black-sesamin-premium')&&s.includes('"@type":"Product"')]);
r=await hit('/en/health/dhc-blood-sugar-care'); s=await r.text(); checks.push(['health origin is not invented',!s.includes('<dt>Origin</dt>')]);
checks.push(['health image source allowlist',Object.values(healthImageUrls).length===healthProducts.length&&Object.values(healthImageUrls).every(url=>url.startsWith('https://tsubaki-jp.com/wp-content/uploads/'))]);
const originalFetch=globalThis.fetch;
globalThis.fetch=()=>{throw new Error('Medicine media must not fetch a retailer')};
r=await hit('/media/medicine/nivolumab'); s=await r.text(); checks.push(['medicine image has no external dependency',r.status===200&&r.headers.get('content-type').startsWith('image/svg+xml')&&s.includes('Opdivo')]);
globalThis.fetch=async url=>new Response('image bytes',{headers:{'content-type':'image/jpeg'}});
r=await hit('/media/health/dhc-blood-sugar-care'); checks.push(['health image uses direct source',r.status===200&&r.headers.get('content-type')==='image/jpeg'&&await r.text()==='image bytes']);
globalThis.fetch=async()=>new Response('<html>error</html>',{headers:{'content-type':'text/html'}});
r=await hit('/media/health/dhc-calcium-cbp'); s=await r.text(); checks.push(['non-image source falls back safely',r.status===200&&r.headers.get('content-type').startsWith('image/svg+xml')&&s.includes('DHC Calcium')]);
globalThis.fetch=originalFetch;

r=await hit('/ja/inquiry?type=institution'); s=await r.text(); checks.push(['inquiry',r.status===200&&s.includes('医療機関 / 薬局 / 企業')&&s.includes('B2B / INSTITUTIONAL')&&!s.includes('INFORMATION / INDIVIDUAL')]);
r=await hit('/sitemap.xml'); s=await r.text(); checks.push(['sitemap',r.status===200&&s.includes('/zh-hans/medicines/nivolumab')&&s.includes('/zh-hans/health/dhc-fermented-black-sesamin-premium')&&s.includes('<lastmod>2026-09-23</lastmod>')&&s.includes('xmlns:xhtml=')&&s.includes('hreflang="x-default"')]);
r=await hit('/robots.txt'); s=await r.text(); checks.push(['robots ai crawl',r.status===200&&s.includes('User-agent: OAI-SearchBot')&&s.includes('Sitemap: https://tokyomedi.com/sitemap.xml')]);
r=await hit('/llms.txt'); s=await r.text(); checks.push(['llms discovery',r.status===200&&s.includes('# TOKYO MEDI')&&s.includes('/en/medicines')&&s.includes('/en/health')&&s.includes('PMDA')]);
r=await hit('/favicon.svg'); s=await r.text(); checks.push(['favicon',r.status===200&&s.includes('<svg')]);
r=await hit('/zh-hans/inquiry'); s=await r.text(); checks.push(['contact email rendered',s.includes('beibei7jp1978@yahoo.co.jp')&&!s.includes('business@tokyomedi.com')]); checks.push(['accessible inquiry form',s.includes('label for="f0"')&&s.includes('id="f0" name="f0"')]);
r=await hit('/zh-hans/inquiry?type=personal'); s=await r.text(); checks.push(['no personal consultation mode',r.status===200&&s.includes('本页仅用于医疗机构、药局与企业的医药品询价')&&s.includes('不提供个人医疗咨询')&&!s.includes('个人资料咨询')&&!s.includes('INFORMATION / INDIVIDUAL')]);
r=await hit('/en/inquiry?medicine='+encodeURIComponent('X'.repeat(500))); s=await r.text(); checks.push(['inquiry prefill size limit',s.includes('X'.repeat(200))&&!s.includes('X'.repeat(201))]);
r=await hit('/healthz'); const j=await r.json(); checks.push(['health',j.ok===true&&j.version]);
const suffixes=['','medicines','health','guides','travel','sources','about','inquiry',...medicines.map(x=>'medicines/'+x.slug),...healthProducts.map(x=>'health/'+x.slug),...guides.map(x=>'guides/'+x.slug)];
const validPaths=new Set(LOCALES.flatMap(l=>suffixes.map(x=>'/'+l+(x?'/'+x:''))));
const routeFailures=[];
for(const l of LOCALES)for(const suffix of suffixes){
 const path='/'+l+(suffix?'/'+suffix:'');
 const response=await hit(path);
 const html=await response.text();
 const internalLinks=[...html.matchAll(/<a\b[^>]*href="(\/[^"]+)"/g)].map(x=>new URL(x[1],SITE).pathname);
 if(response.status!==200||!html.includes(`<link rel="canonical" href="${SITE+path}">`)||!html.includes(`<html lang="${l==='zh-hans'?'zh-Hans':l}">`)||(html.match(/<h1\b/g)||[]).length!==1||internalLinks.some(x=>!validPaths.has(x)))routeFailures.push(path);
}
checks.push(['all localized routes and internal links',validPaths.size===147&&routeFailures.length===0]);
if(routeFailures.length)console.error('Route failures:',routeFailures.join(', '));
const failures=[]; for(const [name,ok] of checks){console.log(`${ok?'PASS':'FAIL'} ${name}`); if(!ok)failures.push(name);} if(failures.length){console.error(`::error title=Smoke failures::${failures.join(', ')}`);process.exitCode=1;}

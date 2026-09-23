import {SITE,EMAIL,VERSION,LOCALES,UI} from './data.js';
import {CSS} from './styles.js';
import {DESIGN_CSS} from './styles-v2.js';
import {medicineUse,medicinePhotos} from './medicine-info.js';

export const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
export const p=(l,s='')=>`/${l}${s?'/'+s:''}`;
export const searchText=v=>String(v??'').normalize('NFKC').toLocaleLowerCase();
export const labelArea=(l,a)=>UI[l].filters[a]||a;
const dosageForms={
 'tablet / OD tablet':{'zh-hans':'片剂 / 口崩片',ja:'錠剤 / OD錠'},
 'IV infusion':{'zh-hans':'静脉输注剂',ja:'点滴静注剤'},
 tablet:{'zh-hans':'片剂',ja:'錠剤'},
 'tablet / pediatric granule tablet':{'zh-hans':'片剂 / 儿童用颗粒片',ja:'錠剤 / 小児用粒状錠'},
 'oral tablet':{'zh-hans':'口服片剂',ja:'経口錠剤'},
 'OD tablet / granules':{'zh-hans':'口崩片 / 颗粒剂',ja:'OD錠 / 顆粒'},
 'SC pen / syringe':{'zh-hans':'皮下注射笔 / 预充式注射器',ja:'皮下注ペン / シリンジ'},
 'tablet / oral solution':{'zh-hans':'片剂 / 口服液',ja:'錠剤 / 内用液'},
 'SC syringe / pen':{'zh-hans':'预充式注射器 / 皮下注射笔',ja:'皮下注シリンジ / ペン'}
};
export const localizedForm=(l,form)=>dosageForms[form]?.[l]||form;
export const htmlLang=l=>l==='zh-hans'?'zh-Hans':l;
export const htmlDir=l=>['ar','ur'].includes(l)?'rtl':'ltr';
const localeName={en:'English','zh-hans':'简体中文',hi:'हिन्दी',es:'Español',ar:'العربية',fr:'Français',bn:'বাংলা',pt:'Português',id:'Bahasa Indonesia',ur:'اردو',ru:'Русский',de:'Deutsch',ja:'日本語',pcm:'Nigerian Pidgin',mr:'मराठी',vi:'Tiếng Việt',te:'తెలుగు',sw:'Kiswahili',ha:'Hausa',tr:'Türkçe'};
const ogLocale={en:'en_US','zh-hans':'zh_CN',hi:'hi_IN',es:'es_ES',ar:'ar_SA',fr:'fr_FR',bn:'bn_BD',pt:'pt_BR',id:'id_ID',ur:'ur_PK',ru:'ru_RU',de:'de_DE',ja:'ja_JP',pcm:'en_NG',mr:'mr_IN',vi:'vi_VN',te:'te_IN',sw:'sw_KE',ha:'ha_NG',tr:'tr_TR'};
export function swapLocale(pathname,l){const parts=pathname.split('/').filter(Boolean); if(parts.length&&LOCALES.includes(parts[0]))parts[0]=l; else parts.unshift(l); return '/'+parts.join('/');}
function pageTitle(l,title){return title==='TOKYO MEDI'?'TOKYO MEDI':`${title} | TOKYO MEDI`;}
function brandLogo(){
 return `<span class="brandSymbol" aria-hidden="true"><svg viewBox="0 0 48 48" role="img"><path d="M5 12.5H31M18 12.5V39M6.5 37V23.5L18 31.5L29.5 23.5V37" class="logoLine"/><circle cx="38" cy="10" r="3.2" class="logoDot"/></svg></span><span class="wordmark"><span class="wordTop"><b>TOKYO</b><b>MEDI</b></span><small>JAPAN MEDICAL REFERENCE</small></span>`;
}
export function jsonLd(obj){return `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g,'\\u003c')}</script>`;}
export function breadcrumbLd(l,items){
 return jsonLd({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:items.map((x,i)=>({'@type':'ListItem',position:i+1,name:x[0],item:SITE+(x[1]||p(l))}))});
}
function siteGraph(l){
 return {
  '@context':'https://schema.org',
  '@graph':[
   {'@type':'WebSite','@id':SITE+'/#website',name:'TOKYO MEDI',url:SITE,inLanguage:htmlLang(l),publisher:{'@id':SITE+'/#organization'}},
   {'@type':'Organization','@id':SITE+'/#organization',name:'TOKYO MEDI',url:SITE,logo:{'@type':'ImageObject',url:SITE+'/logo.svg'},email:EMAIL,description:l==='zh-hans'?'日本医药品、健康与营养产品、官方来源、医疗指南与赴日医疗资讯平台。':l==='ja'?'日本の医薬品、健康食品・サプリメント、一次情報、医療ガイド、医療渡航情報を整理する情報プラットフォーム。':'Reference platform for Japanese medicines, health and nutrition products, primary sources, medical guides and medical travel.',knowsAbout:['Japanese medicines','PMDA medicine information','Japanese health foods and supplements','Medical travel in Japan']}
  ]
 };
}
function speculationRules(){
 const rules={prefetch:[{where:{and:[{href_matches:"/*"},{not:{selector_matches:"a[target='_blank'],a[href^='mailto:'],.no-prefetch"}}]},eagerness:"moderate"}]};
 return `<script type="speculationrules">${JSON.stringify(rules).replace(/</g,'\\u003c')}</script>`;
}
function localeSwitchQuery(url,active,l){
 const params=new URLSearchParams();
 if(active==='medicines'||active==='health'){
  const q=(url.searchParams.get('q')||'').trim().slice(0,120);
  if(q)params.set('q',q);
 }
 if(active==='medicines'){
  const area=url.searchParams.get('area')||'';
  if(area&&UI[l].filters[area])params.set('area',area);
 }
 if(active==='travel'){
  const area=(url.searchParams.get('area')||'').slice(0,40);
  if(/^[a-z-]+$/.test(area))params.set('area',area);
 }
 if(active==='inquiry'){
  const medicine=(url.searchParams.get('medicine')||'').slice(0,200);
  if(medicine)params.set('medicine',medicine);
  if(url.searchParams.get('type')==='institution')params.set('type','institution');
 }
 const query=params.toString();
 return query?'?'+query:'';
}
export function shell(l,req,title,description,active,body,extraLd=''){
 const url=new URL(req.url); const canonical=SITE+url.pathname; const currentLang=htmlLang(l); const robots=url.search?'noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1':'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
 const alts=LOCALES.map(x=>`<link rel="alternate" hreflang="${htmlLang(x)}" href="${SITE+swapLocale(url.pathname,x)}">`).join('')+`<link rel="alternate" hreflang="x-default" href="${SITE+swapLocale(url.pathname,'en')}">`;
 const ogAlts=LOCALES.filter(x=>x!==l).map(x=>`<meta property="og:locale:alternate" content="${ogLocale[x]}">`).join('');
 const t=UI[l]; const switchQuery=localeSwitchQuery(url,active,l);
 const nav=['medicines','health','guides','travel','sources','about'];
 const fullTitle=pageTitle(l,title);
 return `<!doctype html><html lang="${currentLang}" dir="${htmlDir(l)}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(fullTitle)}</title><meta name="description" content="${esc(description)}"><meta name="author" content="TOKYO MEDI"><meta name="robots" content="${robots}"><meta name="theme-color" content="#26363a"><meta name="color-scheme" content="light"><meta name="format-detection" content="telephone=no"><link rel="preconnect" href="https://images.unsplash.com" crossorigin><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="sitemap" type="application/xml" href="/sitemap.xml"><link rel="canonical" href="${canonical}">${alts}<meta property="og:type" content="website"><meta property="og:site_name" content="TOKYO MEDI"><meta property="og:title" content="${esc(fullTitle)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta property="og:locale" content="${ogLocale[l]}">${ogAlts}${jsonLd(siteGraph(l))}${extraLd}${speculationRules()}<style>${CSS}${DESIGN_CSS}</style></head><body>
 <header class="top"><div class="wrap bar"><a class="brand" href="${p(l)}">${brandLogo()}</a><nav class="nav" aria-label="Primary navigation">${nav.map(n=>`<a class="${active===n?'on':''}" ${active===n?'aria-current="page"':''} href="${p(l,n)}">${esc(t.nav[n])}</a>`).join('')}</nav><div class="headTools"><a class="headSearch" href="${p(l,'medicines')}">⌕ ${esc(t.search)}</a><span class="searchContext" role="note">${esc(t.official)} · PMDA / MHLW</span><select class="lang" aria-label="Language" onchange="location.href=this.value">${LOCALES.map(x=>`<option value="${swapLocale(url.pathname,x)}${switchQuery}" ${x===l?'selected':''}>${localeName[x]}</option>`).join('')}</select></div></div></header>
 ${body}
 <footer class="foot"><div class="wrap footGrid"><div><div class="brand footBrand">${brandLogo()}</div><p>${esc(t.footer)}</p><p>${esc(t.rxNotice)}</p></div><div class="footLinks"><div>${['medicines','health','guides','travel'].map(n=>`<a href="${p(l,n)}">${esc(t.nav[n])}</a>`).join('')}</div><div>${['sources','about','inquiry'].map(n=>`<a href="${p(l,n)}">${esc(t.nav[n])}</a>`).join('')}<a href="mailto:${EMAIL}">${EMAIL}</a></div></div></div><div class="wrap footBottom"><span>© ${new Date().getUTCFullYear()} TOKYO MEDI</span><span>Tokyo · Japan · ${VERSION}</span></div></footer></body></html>`;
}

export function medicineName(l,m){
 if(l==='ja') return m.productJa||m.ja;
 if(l==='zh-hans') return m.brandEn?`${m.brandEn}｜${m.zh}`:m.zh;
 return m.brandEn?`${m.brandEn} (${m.en})`:m.en;
}
export function medicineProductName(m){return m.productJa||m.ja||m.en;}
function medicineListPrimary(l,m){
 if(l==='zh-hans') return [m.zh,m.brandEn].filter(Boolean).join(' · ');
 if(l==='ja') return m.productJa||m.ja;
 return m.brandEn?[m.brandEn,m.en].filter(Boolean).join(' · '):m.en;
}
function medicineListSecondary(l,m){
 if(l==='zh-hans') return [m.productJa,m.manufacturerJa].filter(Boolean).join(' · ');
 if(l==='ja') return [m.en,m.brandEn,m.manufacturerJa].filter(Boolean).join(' · ');
 return [m.productJa,m.manufacturerJa].filter(Boolean).join(' · ');
}
export function medicineRows(l,items,limit=Infinity){return items.slice(0,limit).map(m=>{
 const photo=medicinePhotos[m.slug];
 const thumb=photo?`<img src="${esc(photo.path)}" loading="lazy" decoding="async" alt="">`:`<span aria-hidden="true" class="referenceMark">TM</span>`;
 return `<a class="medicineRow" href="${p(l,'medicines/'+m.slug)}"><div class="medicineRowThumb">${thumb}</div><div><strong>${esc(medicineListPrimary(l,m))}</strong><small>${esc(medicineListSecondary(l,m))}</small><small class="medicineRowUse">${esc(medicineUse(l,m))}</small></div><span class="area">${esc(labelArea(l,m.area))}</span><span class="rxTag">${esc(m.status)}</span><b>→</b></a>`;
 }).join('');}
export function rxRows(l,items,limit=8){return items.slice(0,limit).map(m=>{
 const photo=medicinePhotos[m.slug];
 const thumb=photo?`<img src="${esc(photo.path)}" loading="lazy" decoding="async" alt="">`:`<span aria-hidden="true" class="referenceMark">TM</span>`;
 return `<a class="rxItem" href="${p(l,'medicines/'+m.slug)}"><div class="rxThumb">${thumb}</div><div><strong>${esc(medicineListPrimary(l,m))}</strong><small>${esc(medicineListSecondary(l,m))}</small><small class="medicineRowUse">${esc(medicineUse(l,m))}</small></div><span class="area">${esc(labelArea(l,m.area))}</span><span class="rxTag">${esc(m.status)}</span><b>→</b></a>`;
 }).join('');}
export function guideTitle(l,g){return g.title[l]||g.title.en} export function guideExcerpt(l,g){return g.excerpt[l]||g.excerpt.en}

export function securityHeaders(extra={}){return {'x-content-type-options':'nosniff','x-frame-options':'SAMEORIGIN','referrer-policy':'strict-origin-when-cross-origin','permissions-policy':'camera=(), microphone=(), geolocation=()','content-security-policy':"default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'inline-speculation-rules' https://static.cloudflareinsights.com; img-src 'self' data: https://images.unsplash.com; connect-src 'self' https://cloudflareinsights.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self' mailto:",'cross-origin-opener-policy':'same-origin','cross-origin-resource-policy':'same-origin',...extra};}

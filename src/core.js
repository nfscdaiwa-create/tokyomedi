import {SITE,EMAIL,VERSION,LOCALES,UI} from './data.js';
import {CSS} from './styles.js';

export const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
export const p=(l,s='')=>`/${l}${s?'/'+s:''}`;
export const labelArea=(l,a)=>UI[l].filters[a]||a;
export const htmlLang=l=>l==='zh-hans'?'zh-Hans':l;
const localeName={en:'English',ja:'日本語','zh-hans':'简体中文'};
const ogLocale={en:'en_US',ja:'ja_JP','zh-hans':'zh_CN'};
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
   {'@type':'Organization','@id':SITE+'/#organization',name:'TOKYO MEDI',url:SITE,logo:{'@type':'ImageObject',url:SITE+'/logo.svg'},email:EMAIL,description:l==='zh-hans'?'日本医药品资料、官方来源、医疗指南与赴日医疗信息平台。':l==='ja'?'日本の医薬品資料、一次情報、医療ガイド、医療渡航情報を整理する情報プラットフォーム。':'Reference platform for Japanese medicines, primary sources, medical guides and medical travel.',knowsAbout:['Japanese medicines','PMDA medicine information','Medical travel in Japan']}
  ]
 };
}
function speculationRules(){
 const rules={prefetch:[{where:{and:[{href_matches:"/*"},{not:{selector_matches:"a[target='_blank'],a[href^='mailto:'],.no-prefetch"}}]},eagerness:"moderate"}]};
 return `<script type="speculationrules">${JSON.stringify(rules).replace(/</g,'\\u003c')}</script>`;
}
export function shell(l,req,title,description,active,body,extraLd=''){
 const url=new URL(req.url); const canonical=SITE+url.pathname; const currentLang=htmlLang(l); const robots=url.search?'noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1':'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
 const alts=LOCALES.map(x=>`<link rel="alternate" hreflang="${htmlLang(x)}" href="${SITE+swapLocale(url.pathname,x)}">`).join('')+`<link rel="alternate" hreflang="x-default" href="${SITE+swapLocale(url.pathname,'en')}">`;
 const ogAlts=LOCALES.filter(x=>x!==l).map(x=>`<meta property="og:locale:alternate" content="${ogLocale[x]}">`).join('');
 const t=UI[l];
 const nav=['medicines','guides','travel','sources','about'];
 const fullTitle=pageTitle(l,title);
 return `<!doctype html><html lang="${currentLang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(fullTitle)}</title><meta name="description" content="${esc(description)}"><meta name="author" content="TOKYO MEDI"><meta name="robots" content="${robots}"><meta name="theme-color" content="#26363a"><meta name="color-scheme" content="light"><meta name="format-detection" content="telephone=no"><link rel="preconnect" href="https://images.unsplash.com" crossorigin><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="sitemap" type="application/xml" href="/sitemap.xml"><link rel="canonical" href="${canonical}">${alts}<meta property="og:type" content="website"><meta property="og:site_name" content="TOKYO MEDI"><meta property="og:title" content="${esc(fullTitle)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta property="og:locale" content="${ogLocale[l]}">${ogAlts}${jsonLd(siteGraph(l))}${extraLd}${speculationRules()}<style>${CSS}</style></head><body>
 <header class="top"><div class="wrap bar"><a class="brand" href="${p(l)}" aria-label="TOKYO MEDI">${brandLogo()}</a><nav class="nav">${nav.map(n=>`<a class="${active===n?'on':''}" href="${p(l,n)}">${esc(t.nav[n])}</a>`).join('')}</nav><div class="headTools"><a class="headSearch" href="${p(l,'medicines')}">⌕ ${esc(t.search)}</a><span class="searchContext" role="note">${esc(t.official)} · PMDA / MHLW</span><select class="lang" aria-label="Language" onchange="location.href=this.value">${LOCALES.map(x=>`<option value="${swapLocale(url.pathname,x)}${url.search}" ${x===l?'selected':''}>${localeName[x]}</option>`).join('')}</select></div></div></header>
 ${body}
 <footer class="foot"><div class="wrap footGrid"><div><div class="brand footBrand">${brandLogo()}</div><p>${esc(t.footer)}</p><p>${esc(t.rxNotice)}</p></div><div class="footLinks"><div>${['medicines','guides','travel'].map(n=>`<a href="${p(l,n)}">${esc(t.nav[n])}</a>`).join('')}</div><div>${['sources','about','inquiry'].map(n=>`<a href="${p(l,n)}">${esc(t.nav[n])}</a>`).join('')}<a href="mailto:${EMAIL}">${EMAIL}</a></div></div></div><div class="wrap footBottom"><span>© ${new Date().getUTCFullYear()} TOKYO MEDI</span><span>Tokyo · Japan · ${VERSION}</span></div></footer></body></html>`;
}

export function medicineName(l,m){
 if(l==='ja') return m.productJa||m.ja;
 if(l==='zh-hans') return m.brandEn?`${m.brandEn}｜${m.zh}`:m.zh;
 return m.brandEn?`${m.brandEn} (${m.en})`:m.en;
}
export function medicineProductName(m){return m.productJa||m.ja||m.en;}
export function medicineRows(l,items,limit=Infinity){return items.slice(0,limit).map(m=>`<a class="medicineRow" href="${p(l,'medicines/'+m.slug)}"><div><strong>${esc(medicineProductName(m))}</strong><small>${esc(m.brandEn||m.en)} · ${esc(m.en)} · ${esc(m.manufacturerJa||'')}</small></div><span class="area">${esc(labelArea(l,m.area))}</span><span class="rxTag">${esc(m.status)}</span><b>→</b></a>`).join('');}
export function rxRows(l,items,limit=8){return items.slice(0,limit).map(m=>`<a class="rxItem" href="${p(l,'medicines/'+m.slug)}"><div class="rxGlyph">${m.status==='Rx'?'RX':'MED'}</div><div><strong>${esc(medicineProductName(m))}</strong><small>${esc(m.brandEn||m.en)} · ${esc(m.en)} · ${esc(m.manufacturerJa||'')}</small></div><span class="area">${esc(labelArea(l,m.area))}</span><span class="rxTag">${esc(m.status)}</span><b>→</b></a>`).join('');}
export function guideTitle(l,g){return g.title[l]||g.title.en} export function guideExcerpt(l,g){return g.excerpt[l]||g.excerpt.en}

export function securityHeaders(extra={}){return {'x-content-type-options':'nosniff','x-frame-options':'SAMEORIGIN','referrer-policy':'strict-origin-when-cross-origin','permissions-policy':'camera=(), microphone=(), geolocation=()','content-security-policy':"default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'inline-speculation-rules'; img-src 'self' data: https://images.unsplash.com; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self' mailto:",'cross-origin-opener-policy':'same-origin','cross-origin-resource-policy':'same-origin',...extra};}

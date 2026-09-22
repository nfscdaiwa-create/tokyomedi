import {SITE,EMAIL,VERSION,LOCALES,UI} from './data.js';
import {CSS} from './styles.js';

export const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
export const p=(l,s='')=>`/${l}${s?'/'+s:''}`;
export const labelArea=(l,a)=>UI[l].filters[a]||a;
const localeName={en:'English',ja:'日本語','zh-hans':'简体中文'};
export function swapLocale(pathname,l){const parts=pathname.split('/').filter(Boolean); if(parts.length&&LOCALES.includes(parts[0]))parts[0]=l; else parts.unshift(l); return '/'+parts.join('/');}
function pageTitle(l,title){return `${title} | TOKYO MEDI`;}
export function jsonLd(obj){return `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g,'\\u003c')}</script>`;}
function speculationRules(){
 const rules={prefetch:[{where:{and:[{href_matches:"/*"},{not:{selector_matches:"a[target='_blank'],a[href^='mailto:'],.no-prefetch"}}]},eagerness:"moderate"}]};
 return `<script type="speculationrules">${JSON.stringify(rules).replace(/</g,'\\u003c')}</script>`;
}
export function shell(l,req,title,description,active,body,extraLd=''){
 const url=new URL(req.url); const canonical=SITE+url.pathname;
 const alts=LOCALES.map(x=>`<link rel="alternate" hreflang="${x==='zh-hans'?'zh-Hans':x}" href="${SITE+swapLocale(url.pathname,x)}">`).join('');
 const t=UI[l];
 const nav=['medicines','guides','travel','sources','about'];
 return `<!doctype html><html lang="${l==='zh-hans'?'zh-Hans':l}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(pageTitle(l,title))}</title><meta name="description" content="${esc(description)}"><meta name="theme-color" content="#0c2830"><meta name="color-scheme" content="light"><meta name="format-detection" content="telephone=no"><link rel="preconnect" href="https://images.unsplash.com" crossorigin><link rel="canonical" href="${canonical}">${alts}<meta property="og:type" content="website"><meta property="og:site_name" content="TOKYO MEDI"><meta property="og:title" content="${esc(pageTitle(l,title))}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}">${jsonLd({'@context':'https://schema.org','@type':'WebSite',name:'TOKYO MEDI',url:SITE,inLanguage:l==='zh-hans'?'zh-Hans':l})}${extraLd}${speculationRules()}<style>${CSS}</style></head><body>
 <header class="top"><div class="wrap bar"><a class="brand" href="${p(l)}"><span class="brandMark">+</span><span>TOKYO MEDI<small>JAPAN HEALTHCARE REFERENCE</small></span></a><nav class="nav">${nav.map(n=>`<a class="${active===n?'on':''}" href="${p(l,n)}">${esc(t.nav[n])}</a>`).join('')}</nav><div class="headTools"><a class="headSearch" href="${p(l,'medicines')}">⌕ ${esc(t.search)}</a><span class="searchContext" role="note">${esc(t.official)} · PMDA / MHLW</span><select class="lang" aria-label="Language" onchange="location.href=this.value">${LOCALES.map(x=>`<option value="${swapLocale(url.pathname,x)}${url.search}" ${x===l?'selected':''}>${localeName[x]}</option>`).join('')}</select></div></div></header>
 ${body}
 <footer class="foot"><div class="wrap footGrid"><div><div class="brand"><span class="brandMark">+</span><span>TOKYO MEDI<small>JAPAN HEALTHCARE REFERENCE</small></span></div><p>${esc(t.footer)}</p><p>${esc(t.rxNotice)}</p></div><div class="footLinks"><div>${['medicines','guides','travel'].map(n=>`<a href="${p(l,n)}">${esc(t.nav[n])}</a>`).join('')}</div><div>${['sources','about','inquiry'].map(n=>`<a href="${p(l,n)}">${esc(t.nav[n])}</a>`).join('')}<a href="mailto:${EMAIL}">${EMAIL}</a></div></div></div><div class="wrap footBottom"><span>© ${new Date().getUTCFullYear()} TOKYO MEDI</span><span>Tokyo · Japan · ${VERSION}</span></div></footer></body></html>`;
}

export function medicineName(l,m){return l==='ja'?m.ja:l==='zh-hans'?m.zh:m.en;}
export function medicineRows(l,items,limit=Infinity){return items.slice(0,limit).map(m=>`<a class="medicineRow" href="${p(l,'medicines/'+m.slug)}"><div><strong>${esc(medicineName(l,m))}</strong><small>${esc(m.en)} · ${esc(m.ja)}</small></div><span class="area">${esc(labelArea(l,m.area))}</span><span class="rxTag">${m.status}</span><b>→</b></a>`).join('');}
export function rxRows(l,items,limit=8){return items.slice(0,limit).map(m=>`<a class="rxItem" href="${p(l,'medicines/'+m.slug)}"><div class="rxGlyph">RX</div><div><strong>${esc(medicineName(l,m))}</strong><small>${esc(m.en)} · ${esc(m.ja)}</small></div><span class="area">${esc(labelArea(l,m.area))}</span><span class="rxTag">${m.status}</span><b>→</b></a>`).join('');}
export function guideTitle(l,g){return g.title[l]||g.title.en} export function guideExcerpt(l,g){return g.excerpt[l]||g.excerpt.en}

export function securityHeaders(extra={}){return {'x-content-type-options':'nosniff','x-frame-options':'SAMEORIGIN','referrer-policy':'strict-origin-when-cross-origin','permissions-policy':'camera=(), microphone=(), geolocation=()','content-security-policy':"default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'inline-speculation-rules'; img-src 'self' data: https://images.unsplash.com; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self' mailto:",'cross-origin-opener-policy':'same-origin','cross-origin-resource-policy':'same-origin',...extra};}

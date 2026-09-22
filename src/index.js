import {SITE,VERSION,LOCALES,medicines,guides} from './data.js';
import {p,securityHeaders} from './core.js';
import {home,medicinesPage,medicineDetail} from './pages-home.js';
import {guidesPage,guideDetail,travelPage,sourcesPage,aboutPage,inquiryPage} from './pages-content.js';

const SITE_LASTMOD='2026-09-22';
const xmlEsc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const hrefLang=l=>l==='zh-hans'?'zh-Hans':l;

function sitemap(){
 const records=[
  {path:'',lastmod:SITE_LASTMOD},
  {path:'medicines',lastmod:SITE_LASTMOD},
  {path:'guides',lastmod:SITE_LASTMOD},
  {path:'travel',lastmod:SITE_LASTMOD},
  {path:'sources',lastmod:SITE_LASTMOD},
  {path:'about',lastmod:SITE_LASTMOD},
  {path:'inquiry',lastmod:SITE_LASTMOD},
  ...medicines.map(m=>({path:'medicines/'+m.slug,lastmod:m.verifiedAt||SITE_LASTMOD})),
  ...guides.map(g=>({path:'guides/'+g.slug,lastmod:g.date||SITE_LASTMOD}))
 ];
 const urls=[];
 for(const r of records){
  const alternates=LOCALES.map(l=>`<xhtml:link rel="alternate" hreflang="${hrefLang(l)}" href="${xmlEsc(SITE+p(l,r.path))}"/>`).join('')+`<xhtml:link rel="alternate" hreflang="x-default" href="${xmlEsc(SITE+p('en',r.path))}"/>`;
  for(const l of LOCALES){
   urls.push(`<url><loc>${xmlEsc(SITE+p(l,r.path))}</loc><lastmod>${r.lastmod}</lastmod>${alternates}</url>`);
  }
 }
 return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>`;
}

function brandSvg(){
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" rx="24" fill="#f7f6f2"/><path d="M18 34h66M51 34v72M20 101V64l31 23 31-23v37" fill="none" stroke="#243236" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="101" cy="27" r="9" fill="#b85849"/></svg>`;
}

function llms(){
 return `# TOKYO MEDI

TOKYO MEDI is a multilingual reference platform for Japanese medicines, primary regulatory sources, medical guides, and medical-travel intake information.

## Languages
- Simplified Chinese: ${SITE}/zh-hans
- English: ${SITE}/en
- Japanese: ${SITE}/ja

## Primary sections
- Japanese medicine reference: ${SITE}/en/medicines
- Medical guides: ${SITE}/en/guides
- Medical travel in Japan: ${SITE}/en/travel
- Source and editorial policy: ${SITE}/en/sources
- About TOKYO MEDI: ${SITE}/en/about

## Source policy
Medicine records are matched to Japanese product names, manufacturers, strengths, and PMDA product-level sources where available. Hospital intake information links back to official hospital pages. Official document dates and TOKYO MEDI verification dates are kept separate.

## Medical boundary
TOKYO MEDI does not provide remote prescribing, individualized diagnosis, or treatment recommendations. Prescription medicines are reference items, not ordinary ecommerce products.

## Contact
${SITE}/en/inquiry
`;
}

export default {async fetch(req){
 const url=new URL(req.url),pathname=url.pathname.replace(/\/+$/,'')||'/';
 if(pathname==='/healthz')return Response.json({ok:true,service:'tokyomedi',version:VERSION},{headers:securityHeaders({'cache-control':'no-store'})});
 if(pathname==='/robots.txt')return new Response(`User-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`,{headers:securityHeaders({'content-type':'text/plain; charset=utf-8','cache-control':'public, max-age=3600'})});
 if(pathname==='/sitemap.xml')return new Response(sitemap(),{headers:securityHeaders({'content-type':'application/xml; charset=utf-8','cache-control':'public, max-age=3600'})});
 if(pathname==='/llms.txt')return new Response(llms(),{headers:securityHeaders({'content-type':'text/plain; charset=utf-8','cache-control':'public, max-age=3600'})});
 if(pathname==='/favicon.svg'||pathname==='/logo.svg')return new Response(brandSvg(),{headers:securityHeaders({'content-type':'image/svg+xml; charset=utf-8','cache-control':'public, max-age=86400'})});
 if(pathname==='/'){const a=(req.headers.get('accept-language')||'').toLowerCase();const l=a.includes('zh')?'zh-hans':a.includes('ja')?'ja':'en';return Response.redirect(new URL('/'+l,url),302);}
 const parts=pathname.split('/').filter(Boolean),l=parts[0];
 if(!LOCALES.includes(l))return Response.redirect(new URL('/en',url),302);
 const section=parts[1]||'',slug=parts.slice(2).join('/');
 let html=null;
 if(!section)html=home(l,req);
 else if(section==='medicines')html=slug?medicineDetail(l,req,slug):medicinesPage(l,req);
 else if(section==='guides')html=slug?guideDetail(l,req,slug):guidesPage(l,req);
 else if(section==='travel')html=travelPage(l,req);
 else if(section==='sources')html=sourcesPage(l,req);
 else if(section==='about')html=aboutPage(l,req);
 else if(section==='inquiry')html=inquiryPage(l,req);
 if(!html)return new Response('Not Found',{status:404,headers:securityHeaders({'content-type':'text/plain; charset=utf-8','x-robots-tag':'noindex'})});
 return new Response(html,{headers:securityHeaders({'content-type':'text/html; charset=utf-8','cache-control':'public, max-age=0, must-revalidate','content-language':l==='zh-hans'?'zh-CN':l})});
}};

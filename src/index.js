import {SITE,VERSION,LOCALES,medicines,healthProducts,guides} from './data.js';
import {p,securityHeaders} from './core.js';
import {home,medicinesPage,medicineDetail} from './pages-home.js';
import {guidesPage,guideDetail,travelPage,sourcesPage,aboutPage,inquiryPage} from './pages-content.js';
import {healthPage,healthDetail} from './pages-products.js';

const SITE_LASTMOD='2026-09-22';
const xmlEsc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const hrefLang=l=>l==='zh-hans'?'zh-Hans':l;

function sitemap(){
 const records=[
  {path:'',lastmod:SITE_LASTMOD},
  {path:'medicines',lastmod:SITE_LASTMOD},
  {path:'health',lastmod:SITE_LASTMOD},
  {path:'guides',lastmod:SITE_LASTMOD},
  {path:'travel',lastmod:SITE_LASTMOD},
  {path:'sources',lastmod:SITE_LASTMOD},
  {path:'about',lastmod:SITE_LASTMOD},
  {path:'inquiry',lastmod:SITE_LASTMOD},
  ...medicines.map(m=>({path:'medicines/'+m.slug,lastmod:m.verifiedAt||SITE_LASTMOD})),
  ...healthProducts.map(x=>({path:'health/'+x.slug,lastmod:x.verifiedAt||SITE_LASTMOD})),
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
- Health & nutrition products: ${SITE}/en/health
- Medical guides: ${SITE}/en/guides
- Medical travel in Japan: ${SITE}/en/travel
- Source and editorial policy: ${SITE}/en/sources
- About TOKYO MEDI: ${SITE}/en/about

## Source policy
Medicine records are matched to Japanese product names, manufacturers, strengths, and PMDA product-level sources where available. Hospital intake information links back to official hospital pages. Official document dates and TOKYO MEDI verification dates are kept separate.

## Medical boundary
TOKYO MEDI does not provide remote prescribing, individualized diagnosis, or treatment recommendations. Prescription medicines are reference items, not ordinary ecommerce products. Health foods and supplements are presented in a separate product category and are not described as medicines.

## Contact
${SITE}/en/inquiry
`;
}


const retailHeaders={'user-agent':'Mozilla/5.0 (compatible; TOKYO-MEDI/1.0; +https://tokyomedi.com)'};

function decodeHtmlUrl(v=''){return v.replace(/&amp;/g,'&').replace(/&#038;/g,'&').replace(/&#x26;/gi,'&');}
function pageImage(html,base){
 const patterns=[
  /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
  /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
  /<img[^>]+class=["'][^"']*(?:wp-post-image|attachment-woocommerce_single|woocommerce-product-gallery__image)[^"']*["'][^>]+src=["']([^"']+)["']/i,
  /<img[^>]+src=["']([^"']+)["'][^>]+class=["'][^"']*(?:wp-post-image|attachment-woocommerce_single)[^"']*["']/i
 ];
 for(const ptn of patterns){const m=html.match(ptn);if(m?.[1]){try{return new URL(decodeHtmlUrl(m[1]),base).href}catch{}}}
 return '';
}
function productLinkFromSearch(html){
 const re=/href=["'](https?:\/\/tsubaki-jp\.com\/(?:ja\/|zh-hans\/|en\/)?product\/[^"'#?]+\/?)[^"']*["']/gi;
 const seen=new Set(); let m;
 while((m=re.exec(html))){const v=decodeHtmlUrl(m[1]); if(!seen.has(v)){seen.add(v);return v;}}
 return '';
}
function fallbackProductSvg(title='TOKYO MEDI'){
 const safe=String(title).replace(/[<>&"']/g,'').slice(0,34);
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560"><rect width="800" height="560" fill="#f3f4f0"/><rect x="230" y="82" width="340" height="330" rx="24" fill="#fff" stroke="#ccd3cf" stroke-width="2"/><path d="M330 160h140M400 130v60" stroke="#426e68" stroke-width="12" stroke-linecap="round"/><text x="400" y="290" text-anchor="middle" font-family="Arial,sans-serif" font-size="24" font-weight="700" fill="#243236">TOKYO MEDI</text><text x="400" y="330" text-anchor="middle" font-family="Arial,sans-serif" font-size="15" fill="#718083">${safe}</text><text x="400" y="470" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" fill="#8c9798">PRODUCT REFERENCE</text></svg>`;
}
async function resolveMedicinePage(m){
 if(m.imagePage)return m.imagePage;
 const known={amlodipine:'https://tsubaki-jp.com/zh-hans/product/%E6%B0%A8%E6%B0%AF%E5%9C%B0%E5%B9%B3-2/'};
 if(known[m.slug])return known[m.slug];
 const productStem=(m.productJa||'').split(/[／・]/)[0].replace(/(?:錠|点滴静注|皮下注|OD錠).*$/,'').trim();
 const queries=[productStem,m.brandEn,m.en,m.ja,m.zh].filter(Boolean);
 for(const q of queries){
  try{
   const u='https://tsubaki-jp.com/?post_type=product&s='+encodeURIComponent(q);
   const res=await fetch(u,{headers:retailHeaders,redirect:'follow'});
   if(!res.ok)continue;
   const link=productLinkFromSearch(await res.text());
   if(link)return link;
  }catch{}
 }
 return '';
}
async function productMedia(kind,slug){
 const records=kind==='health'?healthProducts:medicines;
 const x=records.find(v=>v.slug===slug);
 if(!x)return new Response('Not Found',{status:404});
 const key=new Request('https://tokyomedi.com/media/'+kind+'/'+encodeURIComponent(slug));
 try{
  if(typeof caches!=='undefined'){
   const cached=await caches.default.match(key);
   if(cached)return cached;
  }
  const page=kind==='health'?x.sourcePage:await resolveMedicinePage(x);
  if(page){
   const pageRes=await fetch(page,{headers:retailHeaders,redirect:'follow'});
   if(pageRes.ok){
    const imageUrl=pageImage(await pageRes.text(),page);
    if(imageUrl){
     const imageRes=await fetch(imageUrl,{headers:retailHeaders,redirect:'follow'});
     if(imageRes.ok&&imageRes.body){
      const response=new Response(imageRes.body,{headers:{
       'content-type':imageRes.headers.get('content-type')||'image/jpeg',
       'cache-control':'public, max-age=86400, s-maxage=604800',
       'x-content-type-options':'nosniff'
      }});
      if(typeof caches!=='undefined')await caches.default.put(key,response.clone());
      return response;
     }
    }
   }
  }
 }catch{}
 const label=kind==='health'?(x.en||x.ja||x.zh):(x.brandEn||x.en||x.ja);
 return new Response(fallbackProductSvg(label),{headers:{'content-type':'image/svg+xml; charset=utf-8','cache-control':'public, max-age=3600'}});
}

export default {async fetch(req){
 const url=new URL(req.url),pathname=url.pathname.replace(/\/+$/,'')||'/';
 if(pathname==='/healthz')return Response.json({ok:true,service:'tokyomedi',version:VERSION},{headers:securityHeaders({'cache-control':'no-store'})});
 if(pathname==='/robots.txt')return new Response(`User-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`,{headers:securityHeaders({'content-type':'text/plain; charset=utf-8','cache-control':'public, max-age=3600'})});
 if(pathname==='/sitemap.xml')return new Response(sitemap(),{headers:securityHeaders({'content-type':'application/xml; charset=utf-8','cache-control':'public, max-age=3600'})});
 if(pathname==='/llms.txt')return new Response(llms(),{headers:securityHeaders({'content-type':'text/plain; charset=utf-8','cache-control':'public, max-age=3600'})});
 if(pathname==='/favicon.svg'||pathname==='/logo.svg')return new Response(brandSvg(),{headers:securityHeaders({'content-type':'image/svg+xml; charset=utf-8','cache-control':'public, max-age=86400'})});
 if(pathname.startsWith('/media/health/'))return productMedia('health',decodeURIComponent(pathname.slice('/media/health/'.length)));
 if(pathname.startsWith('/media/medicine/'))return productMedia('medicine',decodeURIComponent(pathname.slice('/media/medicine/'.length)));
 if(pathname==='/'){const a=(req.headers.get('accept-language')||'').toLowerCase();const l=a.includes('zh')?'zh-hans':a.includes('ja')?'ja':'en';return Response.redirect(new URL('/'+l,url),302);}
 const parts=pathname.split('/').filter(Boolean),l=parts[0];
 if(!LOCALES.includes(l))return Response.redirect(new URL('/en',url),302);
 const section=parts[1]||'',slug=parts.slice(2).join('/');
 let html=null;
 if(!section)html=home(l,req);
 else if(section==='medicines')html=slug?medicineDetail(l,req,slug):medicinesPage(l,req);
 else if(section==='health')html=slug?healthDetail(l,req,slug):healthPage(l,req);
 else if(section==='guides')html=slug?guideDetail(l,req,slug):guidesPage(l,req);
 else if(section==='travel')html=travelPage(l,req);
 else if(section==='sources')html=sourcesPage(l,req);
 else if(section==='about')html=aboutPage(l,req);
 else if(section==='inquiry')html=inquiryPage(l,req);
 if(!html)return new Response('Not Found',{status:404,headers:securityHeaders({'content-type':'text/plain; charset=utf-8','x-robots-tag':'noindex'})});
 return new Response(html,{headers:securityHeaders({'content-type':'text/html; charset=utf-8','cache-control':'public, max-age=0, must-revalidate','content-language':l==='zh-hans'?'zh-CN':l})});
}};

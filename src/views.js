import { BUILD_META } from "./build-meta.js";
import { SITE, EMAIL, L, D, slugs } from "./content.js";
import { CSS } from "./styles.js";

export function esc(v){
  return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}

export function path(l,s){
  return "/"+l+(s?"/"+s:"");
}

function idx(s){
  return {medicines:0,kampo:1,health:2,"medical-travel":3,resources:4,about:5,contact:6}[s];
}

export function lab(l,s){
  return L[l].nav[idx(s)];
}

function header(l,active){
  const t=L[l];
  return '<header class="top"><div class="wrap bar">'+
    '<a class="brand" href="'+path(l,'')+'"><span class="mark">+</span><span>TOKYO MEDI<small>JAPAN HEALTHCARE</small></span></a>'+
    '<nav class="nav">'+slugs.slice(0,5).map(s=>'<a class="'+(active===s?'on':'')+'" href="'+path(l,s)+'">'+esc(lab(l,s))+'</a>').join('')+'</nav>'+
    '<div class="actions"><a class="btn" href="'+path(l,'contact')+'">'+esc(t.nav[6])+'</a>'+
    '<select class="lang" onchange="location.href=this.value" aria-label="Language">'+
    Object.keys(L).map(k=>'<option value="'+path(k,active||'')+'" '+(k===l?'selected':'')+'>'+esc(L[k].name)+'</option>').join('')+
    '</select></div></div></header>';
}

function footer(l){
  const t=L[l];
  return '<footer class="foot"><div class="wrap footGrid"><div>'+
    '<div class="brand"><span class="mark">+</span><span>TOKYO MEDI<small>JAPAN HEALTHCARE</small></span></div>'+
    '<p>'+esc(t.final)+'</p></div><div class="footLinks"><div>'+
    slugs.slice(0,4).map(s=>'<a href="'+path(l,s)+'">'+esc(lab(l,s))+'</a>').join('')+
    '</div><div>'+
    slugs.slice(4).map(s=>'<a href="'+path(l,s)+'">'+esc(lab(l,s))+'</a>').join('')+
    '<a href="mailto:'+EMAIL+'">'+EMAIL+'</a></div></div></div>'+
    '<div class="wrap bottom"><span>© '+new Date().getUTCFullYear()+' TOKYO MEDI</span><span>Tokyo · Japan</span></div></footer>';
}

function shell(l,title,desc,active,body){
  return '<!doctype html><html lang="'+(l==='zh'?'zh-CN':l)+'"><head>'+
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'+
    '<title>'+esc(title)+' | TOKYO MEDI</title>'+
    '<meta name="description" content="'+esc(desc)+'">'+
    '<meta name="theme-color" content="#0d1f2c">'+
    '<link rel="canonical" href="'+SITE+path(l,active||'')+'">'+
    '<meta property="og:type" content="website"><meta property="og:site_name" content="TOKYO MEDI">'+
    '<meta property="og:title" content="'+esc(title)+' | TOKYO MEDI">'+
    '<meta property="og:description" content="'+esc(desc)+'">'+
    '<style>'+CSS+'</style></head><body>'+
    header(l,active)+body+footer(l)+
    '<div class="rev" title="Deployment revision">'+esc(BUILD_META.commit.slice(0,12))+'</div>'+
    '</body></html>';
}

export function home(l){
  const t=L[l];
  const ss=["medicines","kampo","health","medical-travel","resources","about"];
  const ds=l==='zh'
    ?["日本药品信息与安全背景","汉方方剂与生药资料","健康、营养与自我护理","赴日就医准备与流程","日本官方与一手资料","平台原则与信息标准"]
    :l==='ja'
      ?["日本の医薬品情報と安全性","漢方の処方・生薬情報","健康・栄養・セルフケア","日本での受診準備","公的機関・一次情報","情報基準と考え方"]
      :["Japanese medicine & safety context","Kampo formulas & ingredients","Health, nutrition & self-care","Medical travel preparation","Primary Japanese sources","Platform standards & principles"];

  const body='<main>'+
    '<section class="hero"><div class="wrap heroGrid"><div>'+
    '<div class="eyebrow">'+esc(t.eyebrow)+'</div><h1>'+esc(t.hero)+'</h1><p class="lead">'+esc(t.lead)+'</p>'+
    '<div class="buttons"><a class="btn primary" href="'+path(l,'medicines')+'">'+esc(t.primary)+'</a>'+
    '<a class="btn" href="'+path(l,'medical-travel')+'">'+esc(t.secondary)+'</a></div></div>'+
    '<aside class="panel"><div class="panelTitle">TOKYO MEDI INDEX</div><div class="quick">'+
    ss.slice(0,4).map((s,i)=>'<a href="'+path(l,s)+'"><span>0'+(i+1)+'</span><strong>'+esc(lab(l,s))+'</strong></a>').join('')+
    '</div></aside></div></section>'+
    '<section class="trust"><div class="wrap trustGrid">'+
    t.trust.map((x,i)=>'<div class="trustItem"><div class="icon">'+["✓","文","○","↗"][i]+'</div><div><strong>'+esc(x)+'</strong><p>'+esc(t.trustText[i])+'</p></div></div>').join('')+
    '</div></section>'+
    '<section class="section"><div class="wrap"><div class="head"><h2>'+esc(t.section)+'</h2><p>'+esc(t.lead)+'</p></div>'+
    '<div class="cards">'+ss.map((s,i)=>'<a class="card" href="'+path(l,s)+'"><small>0'+(i+1)+'</small><h3>'+esc(lab(l,s))+'</h3><p>'+esc(ds[i])+'</p><span class="arrow">↗</span></a>').join('')+
    '</div></div></section>'+
    '<section class="cta soft"><div class="wrap ctaBox"><div><h2>'+esc(t.final)+'</h2><p>'+esc(t.lead)+'</p></div>'+
    '<a class="btn primary" href="'+path(l,'resources')+'">'+esc(lab(l,'resources'))+' ↗</a></div></section>'+
    '</main>';

  return shell(l,t.hero,t.lead,'',body);
}

export function page(l,s){
  const d=D[l][s];
  const cards=s==='contact'?[]:[
    [
      l==='zh'?'来源清楚':l==='ja'?'情報源を明確に':'Clear sourcing',
      l==='zh'?'重要信息应能追溯到原始来源。':l==='ja'?'重要な情報は元の情報源まで確認できるようにします。':'Important information should lead back to its source.'
    ],
    [
      l==='zh'?'结构清晰':l==='ja'?'分かりやすい構造':'Clear structure',
      l==='zh'?'让国际用户快速找到真正需要的信息。':l==='ja'?'海外利用者が必要な情報をすばやく確認できる構造です。':'Built for international readers to scan and understand quickly.'
    ],
    [
      l==='zh'?'安全边界':l==='ja'?'安全性の境界':'Safety boundary',
      l==='zh'?'医疗内容只做一般信息，不替代专业判断。':l==='ja'?'一般情報であり、専門家の判断に代わるものではありません。':'Medical content stays informational and does not replace professional judgment.'
    ]
  ];

  const inner=s==='contact'
    ?'<div class="contactBox"><strong>'+esc(d[0])+'</strong><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></div>'
    :'<div class="infoGrid">'+cards.map(c=>'<article class="info"><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></article>').join('')+'</div>';

  const body='<main><section class="pageHero"><div class="wrap"><div class="eyebrow">'+esc(d[0])+'</div>'+
    '<h1>'+esc(d[1])+'</h1><p class="lead">'+esc(d[2])+'</p></div></section>'+
    '<section class="content"><div class="wrap">'+inner+'</div></section></main>';

  return shell(l,d[1],d[2],s,body);
}

export function sitemap(){
  const urls=[];
  Object.keys(L).forEach(l=>{
    urls.push(SITE+path(l,''));
    slugs.forEach(s=>urls.push(SITE+path(l,s)));
  });
  return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+
    urls.map(x=>'  <url><loc>'+x+'</loc></url>').join('\n')+
    '\n</urlset>';
}

export function headers(extra){
  return Object.assign({
    "x-content-type-options":"nosniff",
    "x-frame-options":"SAMEORIGIN",
    "referrer-policy":"strict-origin-when-cross-origin",
    "permissions-policy":"camera=(), microphone=(), geolocation=()"
  },extra||{});
}

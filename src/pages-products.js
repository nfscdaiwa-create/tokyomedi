import {SITE,UI,healthProducts} from './data.js';
import {esc,p,shell,jsonLd,breadcrumbLd,htmlLang} from './core.js';

const nameFor=(l,x)=>l==='zh-hans'?x.zh:l==='ja'?x.ja:x.en;
const kindFor=(l,k)=>{
 const map={
  food:{'zh-hans':'健康食品',ja:'健康食品',en:'Health food'},
  'functional-food':{'zh-hans':'功能性标示食品',ja:'機能性表示食品',en:'Food with Function Claims'},
  'nutrient-food':{'zh-hans':'营养功能食品',ja:'栄養機能食品',en:'Food with Nutrient Function Claims'}
 };
 return map[k]?.[l]||map[k]?.en||k;
};

export function healthPage(l,req){
 const t=UI[l],u=new URL(req.url),rawQ=(u.searchParams.get('q')||'').trim(),q=rawQ.toLowerCase();
 const items=q?healthProducts.filter(x=>[x.zh,x.ja,x.en,x.brand,x.sku,x.pack,x.kind].join(' ').toLowerCase().includes(q)):healthProducts;
 const intro=l==='zh-hans'?'日本健康食品、营养补给品与相关产品资料。此栏目与医药品资料分开，食品不作为药品展示，也不作疾病治疗或预防宣传。':l==='ja'?'日本の健康食品・サプリメント等の製品資料です。医薬品とは分けて掲載し、食品を医薬品として表示したり、疾病の治療・予防を標榜したりしません。':'Japanese health foods, supplements and related product information. This section is separate from medicines; foods are not presented as medicines and no disease-treatment or prevention claims are made.';
 const cards=items.map(x=>`<a class="healthCard" href="${p(l,'health/'+x.slug)}"><div class="healthCardMedia"><img src="/media/health/${encodeURIComponent(x.slug)}" loading="lazy" decoding="async" alt="${esc(nameFor(l,x))}"></div><div class="healthCardBody"><div class="healthCardTop"><span>${esc(kindFor(l,x.kind))}</span><small>${esc(x.brand)}</small></div><h2>${esc(nameFor(l,x))}</h2><p>${esc(x.pack)}</p><div class="healthCardFoot"><span>${esc(x.sku)}</span><b>${l==='zh-hans'?'查看产品资料':l==='ja'?'製品情報を見る':'View product information'} →</b></div></div></a>`).join('');
 const body=`<main class="healthIndex"><section class="healthIndexHero"><div class="wrap healthIndexHeroGrid"><div><div class="eyebrow">HEALTH & NUTRITION</div><h1>${esc(t.health)}</h1><p>${esc(intro)}</p><form class="healthSearch" action="${p(l,'health')}" method="get"><input name="q" value="${esc(rawQ)}" placeholder="${l==='zh-hans'?'搜索品牌 / 产品名 / SKU':l==='ja'?'ブランド・製品名・SKUを検索':'Search brand / product / SKU'}"><button>${l==='zh-hans'?'搜索产品':l==='ja'?'製品検索':'Search products'}</button></form></div><aside class="healthBoundary"><span>FOOD / SUPPLEMENT</span><strong>${healthProducts.length} ${l==='zh-hans'?'条产品资料':l==='ja'?'件の製品情報':'product records'}</strong><p>${l==='zh-hans'?'健康食品与处方药采用不同展示逻辑。本栏目不提供医疗判断。':l==='ja'?'健康食品と処方薬は異なる情報構造で掲載します。本欄は医療判断を提供しません。':'Health products and prescription medicines use separate information structures. This section does not provide medical judgment.'}</p></aside></div></section><section class="healthIndexBody"><div class="wrap"><div class="healthToolbar"><span><b>${items.length}</b> ${l==='zh-hans'?'件产品':l==='ja'?'件':'products'}</span>${rawQ?`<a href="${p(l,'health')}">${l==='zh-hans'?'清除搜索':l==='ja'?'検索を解除':'Clear search'} ×</a>`:''}</div>${items.length?`<div class="healthCardGrid">${cards}</div>`:`<div class="medicineEmpty"><strong>${l==='zh-hans'?'没有找到匹配产品。':l==='ja'?'一致する製品がありません。':'No matching products.'}</strong><a href="${p(l,'health')}">${l==='zh-hans'?'查看全部':l==='ja'?'すべて見る':'View all'} →</a></div>`}<div class="healthDisclaimer"><strong>${l==='zh-hans'?'食品属性说明':l==='ja'?'食品区分について':'Food-category notice'}</strong><p>${l==='zh-hans'?'本栏目产品为健康食品、营养补给品或相关食品类别。页面用于产品资料展示，不把食品描述为医药品，不提供疾病诊断、治疗或预防建议。':l==='ja'?'本欄の製品は健康食品、サプリメント等の食品カテゴリーです。製品情報を提供するもので、食品を医薬品として扱わず、疾病の診断・治療・予防に関する助言を行いません。':'Products in this section are health foods, supplements or related food categories. Pages provide product information only and do not describe foods as medicines or provide disease diagnosis, treatment or prevention advice.'}</p></div></div></section></main>`;
 const ld=jsonLd({'@context':'https://schema.org','@type':'CollectionPage',name:t.health,description:intro,url:SITE+p(l,'health'),inLanguage:htmlLang(l),mainEntity:{'@type':'ItemList',itemListElement:items.map((x,i)=>({'@type':'ListItem',position:i+1,name:nameFor(l,x),url:SITE+p(l,'health/'+x.slug)}))}})+breadcrumbLd(l,[[l==='zh-hans'?'首页':l==='ja'?'ホーム':'Home',p(l)],[t.health,p(l,'health')]]);
 return shell(l,req,t.health,intro,'health',body,ld);
}

export function healthDetail(l,req,slug){
 const t=UI[l],x=healthProducts.find(v=>v.slug===slug); if(!x)return null;
 const title=nameFor(l,x);
 const desc=l==='zh-hans'?`${title} 产品资料。品牌：${x.brand}；内容量：${x.pack}。食品类产品，非医药品。`:l==='ja'?`${title} の製品情報。ブランド：${x.brand}、内容量：${x.pack}。食品カテゴリーであり、医薬品ではありません。`:`Product information for ${title}. Brand: ${x.brand}; pack: ${x.pack}. This is a food-category product, not a medicine.`;
 const rows=l==='zh-hans'?[
  ['产品名称',x.zh],['日文名称',x.ja],['英文名称',x.en],['品牌',x.brand],['SKU',x.sku],['内容量',x.pack],['产品属性',kindFor(l,x.kind)],['原产信息',x.origin||'日本'],['资料核验',x.verifiedAt]
 ]:l==='ja'?[
  ['製品名',x.ja],['中国語名',x.zh],['英語名',x.en],['ブランド',x.brand],['SKU',x.sku],['内容量',x.pack],['区分',kindFor(l,x.kind)],['原産情報',x.origin||'日本'],['確認日',x.verifiedAt]
 ]:[
  ['Product name',x.en],['Japanese name',x.ja],['Chinese name',x.zh],['Brand',x.brand],['SKU',x.sku],['Pack size',x.pack],['Category',kindFor(l,x.kind)],['Origin',x.origin||'Japan'],['Verified',x.verifiedAt]
 ];
 const body=`<main class="healthDetail"><section class="healthDetailHero"><div class="wrap healthDetailGrid"><div class="healthDetailMedia"><img src="/media/health/${encodeURIComponent(x.slug)}" alt="${esc(title)}"></div><div class="healthDetailIntro"><div class="eyebrow">${esc(kindFor(l,x.kind))} · ${esc(x.brand)}</div><h1>${esc(title)}</h1><p>${esc(desc)}</p><div class="healthDetailBadges"><span>SKU ${esc(x.sku)}</span><span>${esc(x.pack)}</span><span>${l==='zh-hans'?'食品 · 非医药品':l==='ja'?'食品 · 医薬品ではありません':'Food · not a medicine'}</span></div></div></div></section><section class="content"><div class="wrap detailGrid"><div><dl class="factList">${rows.map(r=>`<div class="fact"><dt>${esc(r[0])}</dt><dd>${esc(r[1])}</dd></div>`).join('')}</dl><div class="sourceBox"><strong>${l==='zh-hans'?'产品资料来源':l==='ja'?'製品情報源':'Product source'}</strong><p>${l==='zh-hans'?'产品图与基础规格来自授权产品资料。成分与标签内容应以实际包装和厂家最新资料为准。':l==='ja'?'製品画像と基本仕様は許可された製品資料を使用しています。成分・表示内容は実際のパッケージとメーカー最新情報をご確認ください。':'Product images and basic specifications use authorized product material. Ingredients and label details should be confirmed against the actual package and latest manufacturer information.'}</p><a href="${esc(x.sourcePage)}" target="_blank" rel="noopener">${l==='zh-hans'?'查看原始产品页':l==='ja'?'元の製品ページを見る':'View source product page'} ↗</a></div></div><aside class="sideNote healthSideNote"><strong>HEALTH / NUTRITION</strong><p>${l==='zh-hans'?'此产品属于食品类别，不是处方药，也不用于替代诊断或治疗。':l==='ja'?'本製品は食品カテゴリーであり、処方薬ではなく、診断・治療の代替ではありません。':'This is a food-category product, not a prescription medicine, and it is not a substitute for diagnosis or treatment.'}</p><a class="btn ghost" href="${p(l,'health')}">${l==='zh-hans'?'返回健康与营养':l==='ja'?'ヘルス・栄養に戻る':'Back to health & nutrition'}</a></aside></div></section></main>`;
 const ld=jsonLd({'@context':'https://schema.org','@type':'Product',name:title,sku:x.sku,brand:{'@type':'Brand',name:x.brand},description:desc,image:SITE+'/media/health/'+encodeURIComponent(x.slug),url:SITE+p(l,'health/'+x.slug),category:kindFor(l,x.kind)})+breadcrumbLd(l,[[l==='zh-hans'?'首页':l==='ja'?'ホーム':'Home',p(l)],[t.health,p(l,'health')],[title,p(l,'health/'+x.slug)]]);
 return shell(l,req,title,desc,'health',body,ld);
}

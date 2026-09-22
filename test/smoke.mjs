import worker from '../src/index.js';
import {medicines,hospitals} from '../src/data.js';
const hit=async(path,lang='zh-CN')=>worker.fetch(new Request('https://tokyomedi.com'+path,{headers:{'accept-language':lang}}));
const checks=[];
checks.push(['contact email',true]);
const requiredMedicineFields=['slug','en','ja','zh','productJa','brandEn','manufacturerJa','strengths','status','labelUpdated','verifiedAt','source'];
checks.push(['medicine product-level completeness',medicines.length>=16&&medicines.every(m=>requiredMedicineFields.every(k=>Boolean(m[k]))&&m.source.includes('pmda.go.jp'))]);
checks.push(['medicine sources product-specific',new Set(medicines.map(m=>m.source)).size===medicines.length]);
checks.push(['hospital intake provenance',hospitals.length>=7&&hospitals.every(h=>h.url&&h.verified&&h.facts&&h.facts.en?.length>=2&&h.facts['zh-hans']?.length>=2&&h.facts.ja?.length>=2)]);
let r=await hit('/zh-hans'); let s=await r.text(); checks.push(['home',r.status===200&&s.includes('日本医学研究与医疗发展')&&s.includes('处方药资料索引')]); checks.push(['no promotional question-style copy',!s.includes('先看证据，再看服务')&&!s.includes('日本医学实力，有具体成果')&&!s.includes('查到药以后，下一步是什么？')&&!s.includes('为什么选择 TOKYO MEDI')&&!s.includes('你现在要做什么？')]); checks.push(['homepage trust-first hierarchy',
  s.includes('资料来源与核验') &&
  s.includes('日本医学研究与医疗发展') &&
  s.includes('日本医药品资料库') &&
  s.indexOf('class="section proofSection"') < s.indexOf('class="section strength evidenceSection"') &&
  s.indexOf('class="section strength evidenceSection"') < s.indexOf('class="section database"')
]);
checks.push(['patient clinical pathway',
  s.includes('就医流程与机构咨询') &&
  s.includes('赴日就医基本流程') &&
  s.indexOf('医院受理 / 预约') > -1 &&
  s.indexOf('初诊登记') > s.indexOf('医院受理 / 预约') &&
  s.indexOf('医生诊察') > s.indexOf('初诊登记') &&
  s.indexOf('医生判断需要用药时开具处方') > s.indexOf('医生诊察') &&
  s.indexOf('药局取药') > s.indexOf('医生判断需要用药时开具处方')
]);
checks.push(['institutional pathway separated',
  s.includes('机构品项咨询流程') &&
  s.includes('提供机构信息') &&
  s.includes('提交咨询')
]); checks.push(['modern platform features',s.includes('type="speculationrules"')&&s.includes('@view-transition')&&s.includes('animation-timeline')&&s.includes('anchor-name')&&s.includes('container-type:scroll-state')]); checks.push(['modern CSP',(r.headers.get('content-security-policy')||'').includes("inline-speculation-rules")]);
checks.push(['seo home metadata',
  s.includes('<title>日本医药品资料库与赴日医疗 | TOKYO MEDI</title>') &&
  s.includes('name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"') &&
  s.includes('hreflang="x-default"') &&
  s.includes('rel="icon" href="/favicon.svg"') &&
  s.includes('"@type":"Organization"') &&
  s.includes('"@type":"WebSite"')
]);
r=await hit('/zh-hans/medicines?q=opdivo'); s=await r.text(); checks.push(['medicine search by brand',r.status===200&&s.includes('オプジーボ')&&s.includes('小野薬品工業')]); checks.push(['query pages noindex',s.includes('name="robots" content="noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"')]);
r=await hit('/zh-hans/medicines/nivolumab'); s=await r.text(); checks.push(['medicine verified detail',r.status===200&&s.includes('オプジーボ点滴静注20mg')&&s.includes('制造销售企业')&&s.includes('2026-08-25')&&s.includes('2026-09-22')&&s.includes('PMDA · 专业资料')]); checks.push(['medicine semantic schema',s.includes('"@type":"Drug"')&&s.includes('"manufacturer"')&&s.includes('"BreadcrumbList"')&&s.includes('"prescriptionStatus":"https://schema.org/PrescriptionOnly"')]); checks.push(['patient medicine CTA',s.includes('href="/zh-hans/travel">查看赴日就医信息</a>')&&!s.includes('type=personal')&&s.includes('type=institution')]);
r=await hit('/zh-hans/medicines/ramelteon'); s=await r.text(); checks.push(['regulatory status nuance',r.status===200&&s.includes('解除“处方笺医药品”指定')&&!s.includes('<strong>Rx ·')]);
r=await hit('/en/guides/read-japanese-medicine-information'); s=await r.text(); checks.push(['article schema',r.status===200&&s.includes('"@type":"Article"')&&s.includes('"BreadcrumbList"')&&s.includes('"publisher":{"@id":"https://tokyomedi.com/#organization"}')]);
r=await hit('/en/medical-travel'); checks.push(['legacy route 404',r.status===404]);
r=await hit('/en/travel'); s=await r.text(); checks.push(['travel',r.status===200&&s.includes('National Cancer Center')&&s.includes('designated coordinating agent')&&s.includes('Center for Global Health')]);
r=await hit('/ja/inquiry?type=institution'); s=await r.text(); checks.push(['inquiry',r.status===200&&s.includes('機関向け品目照会')]);
r=await hit('/sitemap.xml'); s=await r.text(); checks.push(['sitemap',r.status===200&&s.includes('/zh-hans/medicines/nivolumab')&&s.includes('<lastmod>2026-09-22</lastmod>')&&s.includes('xmlns:xhtml=')&&s.includes('hreflang="x-default"')]);
r=await hit('/robots.txt'); s=await r.text(); checks.push(['robots ai crawl',r.status===200&&s.includes('User-agent: OAI-SearchBot')&&s.includes('Sitemap: https://tokyomedi.com/sitemap.xml')]);
r=await hit('/llms.txt'); s=await r.text(); checks.push(['llms discovery',r.status===200&&s.includes('# TOKYO MEDI')&&s.includes('/en/medicines')&&s.includes('PMDA')]);
r=await hit('/favicon.svg'); s=await r.text(); checks.push(['favicon',r.status===200&&s.includes('<svg')]);
r=await hit('/zh-hans/inquiry'); s=await r.text(); checks.push(['contact email rendered',s.includes('beibei7jp1978@yahoo.co.jp')&&!s.includes('business@tokyomedi.com')]); checks.push(['accessible inquiry form',s.includes('label for="f0"')&&s.includes('id="f0" name="f0"')]);
r=await hit('/healthz'); const j=await r.json(); checks.push(['health',j.ok===true&&j.version]);
const failures=[]; for(const [name,ok] of checks){console.log(`${ok?'PASS':'FAIL'} ${name}`); if(!ok)failures.push(name);} if(failures.length){console.error(`::error title=Smoke failures::${failures.join(', ')}`);process.exitCode=1;}

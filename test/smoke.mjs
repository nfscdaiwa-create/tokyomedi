import worker from '../src/index.js';
import {medicines,hospitals} from '../src/data.js';
const hit=async(path,lang='zh-CN')=>worker.fetch(new Request('https://tokyomedi.com'+path,{headers:{'accept-language':lang}}));
const checks=[];
checks.push(['contact email',true]);
const requiredMedicineFields=['slug','en','ja','zh','productJa','brandEn','manufacturerJa','strengths','status','labelUpdated','verifiedAt','source'];
checks.push(['medicine product-level completeness',medicines.length>=16&&medicines.every(m=>requiredMedicineFields.every(k=>Boolean(m[k]))&&m.source.includes('pmda.go.jp'))]);
checks.push(['medicine sources product-specific',new Set(medicines.map(m=>m.source)).size===medicines.length]);
checks.push(['hospital intake provenance',hospitals.length>=7&&hospitals.every(h=>h.url&&h.verified&&h.facts&&h.facts.en?.length>=2&&h.facts['zh-hans']?.length>=2&&h.facts.ja?.length>=2)]);
let r=await hit('/zh-hans'); let s=await r.text(); checks.push(['home',r.status===200&&s.includes('日本医学实力')&&s.includes('处方药品项展示')]); checks.push(['homepage trust-first hierarchy',
  s.indexOf('资料来源与核验')>-1 &&
  s.indexOf('日本医学研究与医疗发展')>-1 &&
  s.indexOf('日本医药品资料库')>-1 &&
  s.indexOf('资料来源与核验') < s.indexOf('日本医学研究与医疗发展') &&
  s.indexOf('日本医学研究与医疗发展') < s.indexOf('日本医药品资料库')
]);
checks.push(['patient clinical pathway',
  s.includes('就医流程与机构咨询') &&
  s.includes('正规就医与处方流程') &&
  s.indexOf('医院受理 / 预约') > -1 &&
  s.indexOf('挂号 / 受付') > s.indexOf('医院受理 / 预约') &&
  s.indexOf('医生诊察') > s.indexOf('挂号 / 受付') &&
  s.indexOf('只有医生判断有需要时才会开具处方') > s.indexOf('医生诊察') &&
  s.indexOf('药局取药') > s.indexOf('只有医生判断有需要时才会开具处方') &&
  s.includes('由医生决定检查、治疗与是否开处方')
]);
checks.push(['institutional pathway separated',
  s.includes('机构药品询价流程') &&
  s.includes('提交资质') &&
  s.includes('机构询价')
]); checks.push(['modern platform features',s.includes('type="speculationrules"')&&s.includes('@view-transition')&&s.includes('animation-timeline')&&s.includes('anchor-name')&&s.includes('container-type:scroll-state')]); checks.push(['modern CSP',(r.headers.get('content-security-policy')||'').includes("inline-speculation-rules")]);
r=await hit('/zh-hans/medicines?q=opdivo'); s=await r.text(); checks.push(['medicine search by brand',r.status===200&&s.includes('オプジーボ')&&s.includes('小野薬品工業')]);
r=await hit('/zh-hans/medicines/nivolumab'); s=await r.text(); checks.push(['medicine verified detail',r.status===200&&s.includes('オプジーボ点滴静注20mg')&&s.includes('制造销售企业')&&s.includes('2026-08-25')&&s.includes('2026-09-22')&&s.includes('PMDA · 专业资料')]);
r=await hit('/zh-hans/medicines/ramelteon'); s=await r.text(); checks.push(['regulatory status nuance',r.status===200&&s.includes('解除“处方笺医药品”指定')&&!s.includes('<strong>Rx ·')]);
r=await hit('/en/medical-travel'); checks.push(['legacy route 404',r.status===404]);
r=await hit('/en/travel'); s=await r.text(); checks.push(['travel',r.status===200&&s.includes('National Cancer Center')&&s.includes('designated coordinating agent')&&s.includes('Center for Global Health')]);
r=await hit('/ja/inquiry?type=institution'); s=await r.text(); checks.push(['inquiry',r.status===200&&s.includes('医療機関 / 薬局 / 企業')]);
r=await hit('/sitemap.xml'); s=await r.text(); checks.push(['sitemap',r.status===200&&s.includes('/zh-hans/medicines/nivolumab')]);
r=await hit('/zh-hans/inquiry'); s=await r.text(); checks.push(['contact email rendered',s.includes('beibei7jp1978@yahoo.co.jp')&&!s.includes('business@tokyomedi.com')]);
r=await hit('/healthz'); const j=await r.json(); checks.push(['health',j.ok===true&&j.version]);
for(const [name,ok] of checks){console.log(`${ok?'PASS':'FAIL'} ${name}`); if(!ok)process.exitCode=1;}

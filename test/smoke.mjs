import worker from '../src/index.js';
const hit=async(path,lang='zh-CN')=>worker.fetch(new Request('https://tokyomedi.com'+path,{headers:{'accept-language':lang}}));
const checks=[];
let r=await hit('/zh-hans'); let s=await r.text(); checks.push(['home',r.status===200&&s.includes('日本医学实力')&&s.includes('处方药品项展示')]);
r=await hit('/zh-hans/medicines?q=nivolumab'); s=await r.text(); checks.push(['medicine search',r.status===200&&s.includes('Nivolumab')&&s.includes('纳武利尤单抗')]);
r=await hit('/en/medical-travel'); checks.push(['legacy route 404',r.status===404]);
r=await hit('/en/travel'); s=await r.text(); checks.push(['travel',r.status===200&&s.includes('National Cancer Center')]);
r=await hit('/ja/inquiry?type=institution'); s=await r.text(); checks.push(['inquiry',r.status===200&&s.includes('医療機関 / 薬局 / 企業')]);
r=await hit('/sitemap.xml'); s=await r.text(); checks.push(['sitemap',r.status===200&&s.includes('/zh-hans/medicines/nivolumab')]);
r=await hit('/healthz'); const j=await r.json(); checks.push(['health',j.ok===true&&j.version]);
for(const [name,ok] of checks){console.log(`${ok?'PASS':'FAIL'} ${name}`); if(!ok)process.exitCode=1;}

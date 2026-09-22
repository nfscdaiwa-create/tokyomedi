export const CSS = `
:root{
  --paper:#f6f5f1;
  --paper-2:#efeee9;
  --surface:#ffffff;
  --surface-soft:#faf9f6;
  --ink:#203136;
  --ink-2:#33484d;
  --muted:#667579;
  --muted-2:#859093;
  --line:#d8dad4;
  --line-strong:#c5c9c2;
  --teal:#396b64;
  --teal-dark:#2c5953;
  --teal-soft:#e7efec;
  --red:#a25448;
  --red-soft:#f3e8e5;
  --max:1180px;
  --header:70px;
  --radius:6px;
  --radius-lg:10px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scrollbar-gutter:stable}
body{
  margin:0;
  background:var(--paper);
  color:var(--ink);
  font-family:-apple-system,BlinkMacSystemFont,"Hiragino Sans","Yu Gothic","YuGothic","Noto Sans JP","PingFang SC","Microsoft YaHei","Segoe UI",sans-serif;
  font-size:14px;
  line-height:1.7;
  -webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
}
:lang(ja) body{font-family:"Hiragino Sans","Yu Gothic","YuGothic",-apple-system,BlinkMacSystemFont,sans-serif}
:lang(zh-Hans) body{font-family:"PingFang SC","Microsoft YaHei",-apple-system,BlinkMacSystemFont,sans-serif}
a{color:inherit;text-decoration:none}
button,input,textarea,select{font:inherit;color:inherit}
button{cursor:pointer}
img{display:block;max-width:100%}
figure{margin:0}
h1,h2,h3,p{margin-top:0}
h1,h2,h3{color:var(--ink);text-wrap:balance}
p{text-wrap:pretty}
.wrap{width:min(var(--max),calc(100% - 48px));margin-inline:auto}
.eyebrow,.kicker{
  color:var(--teal);
  font-size:10px;
  line-height:1.3;
  font-weight:800;
  letter-spacing:.13em;
  text-transform:uppercase;
}
.textLink{
  display:inline-flex;
  align-items:center;
  gap:7px;
  color:var(--teal-dark);
  font-size:11px;
  font-weight:750;
  letter-spacing:.02em;
}
.textLink:hover{color:var(--red)}
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-height:42px;
  padding:10px 16px;
  border:1px solid var(--ink);
  border-radius:4px;
  background:var(--ink);
  color:#fff;
  font-size:11px;
  font-weight:750;
  line-height:1.25;
  transition:background .16s ease,border-color .16s ease,color .16s ease;
}
.btn:hover{background:var(--ink-2);border-color:var(--ink-2)}
.btn.teal{background:var(--teal);border-color:var(--teal)}
.btn.teal:hover{background:var(--teal-dark);border-color:var(--teal-dark)}
.btn.ghost{background:transparent;color:var(--ink);border-color:var(--line-strong)}
.btn.ghost:hover{background:var(--paper-2);border-color:#aeb6b0}

/* Header */
.top{
  position:sticky;
  top:0;
  z-index:50;
  background:rgba(246,245,241,.96);
  border-bottom:1px solid var(--line);
  backdrop-filter:blur(14px);
  container-type:scroll-state;
  container-name:sitebar;
}
.bar{
  height:var(--header);
  display:flex;
  align-items:center;
  gap:26px;
}
.brand{
  display:inline-flex;
  align-items:center;
  gap:10px;
  flex:0 0 auto;
}
.brandSymbol{width:34px;height:34px;display:block;flex:0 0 34px}
.brandSymbol svg{width:100%;height:100%}
.logoLine{
  fill:none;
  stroke:var(--ink);
  stroke-width:2.05;
  stroke-linecap:round;
  stroke-linejoin:round;
}
.logoDot{fill:var(--red)}
.wordmark{display:block;line-height:1}
.wordTop{display:flex;gap:6px;align-items:baseline}
.wordTop b{font-size:12px;line-height:1;font-weight:800;letter-spacing:.11em}
.wordmark small{
  display:block;
  margin-top:5px;
  color:var(--muted-2);
  font-size:6.5px;
  font-weight:750;
  letter-spacing:.15em;
}
.nav{
  display:flex;
  align-self:stretch;
  align-items:center;
  gap:24px;
  margin-left:auto;
}
.nav a{
  position:relative;
  display:flex;
  align-items:center;
  height:100%;
  color:#516166;
  font-size:11px;
  font-weight:650;
  white-space:nowrap;
}
.nav a:after{
  content:"";
  position:absolute;
  left:0;right:0;bottom:-1px;
  height:2px;
  background:var(--red);
  transform:scaleX(0);
  transform-origin:left;
  transition:transform .18s ease;
}
.nav a:hover,.nav a.on{color:var(--ink)}
.nav a:hover:after,.nav a.on:after{transform:scaleX(1)}
.headTools{
  display:flex;
  align-items:center;
  gap:14px;
  flex:0 0 auto;
  anchor-scope:--search-anchor;
}
.headSearch{
  anchor-name:--search-anchor;
  color:#59696d;
  font-size:10px;
  font-weight:700;
  white-space:nowrap;
}
.headSearch:hover{color:var(--teal-dark)}
.lang{
  min-width:92px;
  padding:7px 20px 7px 8px;
  border:1px solid var(--line-strong);
  border-radius:4px;
  background:var(--surface);
  color:var(--ink-2);
  font-size:10px;
}
.searchContext{display:none}

/* Hero */
.hero{padding:50px 0 42px}
.heroGrid{
  display:grid;
  grid-template-columns:minmax(0,.92fr) minmax(480px,1.08fr);
  gap:56px;
  align-items:start;
}
.hero h1{
  max-width:640px;
  margin:14px 0 18px;
  font-size:clamp(42px,4.8vw,62px);
  line-height:1.07;
  letter-spacing:-.045em;
  font-weight:720;
}
.lead{
  max-width:650px;
  margin:0;
  color:#586a6e;
  font-size:15px;
  line-height:1.78;
}
.searchBox{
  display:flex;
  gap:0;
  margin-top:24px;
  max-width:650px;
  border:1px solid var(--line-strong);
  border-radius:5px;
  background:var(--surface);
  overflow:hidden;
}
.searchBox input{
  min-width:0;
  flex:1;
  height:44px;
  padding:0 13px;
  border:0;
  outline:0;
  background:transparent;
  font-size:12px;
}
.searchBox input::placeholder{color:#98a1a1}
.searchBox button{
  min-width:108px;
  border:0;
  border-left:1px solid var(--line-strong);
  background:var(--ink);
  color:#fff;
  font-size:10.5px;
  font-weight:750;
}
.searchBox button:hover{background:var(--ink-2)}
.heroMeta{
  display:flex;
  flex-wrap:wrap;
  gap:10px 18px;
  margin-top:16px;
  color:#738083;
  font-size:10px;
}
.heroMeta span{display:flex;align-items:center;gap:7px}
.heroMeta i{width:4px;height:4px;border-radius:50%;background:var(--red)}
.heroStage{display:grid;grid-template-rows:360px auto}
.heroPhoto{
  position:relative;
  height:360px;
  overflow:hidden;
  border-radius:var(--radius-lg);
  background:#dfe5e2;
}
.heroPhoto img{
  width:100%;
  height:100%;
  object-fit:cover;
  filter:saturate(.72) contrast(1.02);
}
.heroPhotoVeil{
  position:absolute;
  inset:0;
  background:linear-gradient(180deg,rgba(18,35,39,.02),rgba(18,35,39,.3));
}
.heroPhoto figcaption{
  position:absolute;
  left:22px;right:22px;bottom:18px;
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:20px;
  color:#fff;
}
.heroPhoto figcaption span{
  font-size:8px;
  font-weight:750;
  letter-spacing:.13em;
}
.heroPhoto figcaption strong{
  max-width:330px;
  font-size:11px;
  line-height:1.5;
  font-weight:650;
  text-align:right;
}
.route{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  border:1px solid var(--line);
  border-top:0;
  background:var(--surface);
}
.routeTitle{
  grid-column:1/-1;
  padding:12px 14px 9px;
  color:var(--muted-2);
  font-size:9px;
  font-weight:800;
  letter-spacing:.12em;
  text-transform:uppercase;
}
.routeRow{
  display:grid;
  grid-template-columns:26px minmax(0,1fr) 18px;
  gap:9px;
  align-items:start;
  padding:13px 14px;
  border-top:1px solid var(--line);
  transition:background .16s ease;
}
.routeRow:nth-of-type(even){border-left:1px solid var(--line)}
.routeRow:hover{background:var(--surface-soft)}
.routeNo{padding-top:2px;color:#9da5a5;font-size:9px}
.routeRow strong{display:block;font-size:12px;font-weight:720;line-height:1.4}
.routeRow small{
  display:block;
  margin-top:4px;
  color:var(--muted);
  font-size:10px;
  line-height:1.5;
}
.routeRow b{color:var(--red);font-size:13px;font-weight:500}

/* Source rail */
.sourceRail{
  border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);
  background:var(--paper-2);
}
.sourceRailInner{
  min-height:64px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:28px;
}
.sourceRailLead{
  color:#627174;
  font-size:10px;
  font-weight:700;
}
.sourceRailMarks{display:flex;margin-left:auto}
.sourceRailMarks span{
  min-width:145px;
  padding:3px 18px;
  border-left:1px solid #d0d1cb;
}
.sourceRailMarks b{
  display:block;
  color:var(--ink);
  font-size:11px;
  line-height:1.25;
  letter-spacing:.05em;
}
.sourceRailMarks small{
  display:block;
  margin-top:4px;
  color:#899294;
  font-size:8.5px;
  line-height:1.35;
}

/* Global sections */
.section{padding:68px 0}
.sectionHead{
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(260px,420px);
  gap:42px;
  align-items:end;
  margin-bottom:26px;
}
.sectionHead h2{
  margin:7px 0 0;
  font-size:clamp(30px,3.5vw,45px);
  line-height:1.12;
  letter-spacing:-.038em;
  font-weight:700;
}
.sectionHead>p{
  margin:0;
  color:var(--muted);
  font-size:12px;
  line-height:1.72;
}

/* Trust proof */
.proofSection{background:var(--surface);border-bottom:1px solid var(--line)}
.compactHead{margin-bottom:20px}
.proofGrid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);
}
.proofItem{
  min-height:174px;
  padding:20px 22px;
  border-left:1px solid var(--line);
}
.proofItem:first-child{border-left:0}
.proofItem>span{
  display:block;
  margin-bottom:28px;
  color:var(--red);
  font-size:9px;
  font-weight:800;
  letter-spacing:.12em;
}
.proofItem h3{margin:0 0 8px;font-size:15px;font-weight:720}
.proofItem p{margin:0;color:var(--muted);font-size:11px;line-height:1.65}

/* Research evidence */
.evidenceSection{background:var(--paper)}
.evidenceList{border-top:1px solid var(--line)}
.evidenceRow{
  display:grid;
  grid-template-columns:88px minmax(0,1fr) 120px;
  gap:24px;
  align-items:center;
  padding:20px 0;
  border-bottom:1px solid var(--line);
}
.evidenceYear{color:var(--red);font-size:22px;font-weight:650;letter-spacing:-.03em}
.evidenceRow h3{margin:0 0 5px;font-size:17px;font-weight:700}
.evidenceRow p{max-width:720px;margin:0;color:var(--muted);font-size:11px;line-height:1.62}
.evidenceRow>b{
  justify-self:end;
  color:#718083;
  font-size:9px;
  font-weight:750;
  letter-spacing:.07em;
}
.evidenceRow:hover h3{color:var(--teal-dark)}

/* Medicine database */
.database{
  background:var(--surface);
  border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);
}
.dbPanel{
  display:grid;
  grid-template-columns:300px minmax(0,1fr);
  gap:30px;
  align-items:start;
}
.dbSearch{
  padding-right:28px;
  border-right:1px solid var(--line);
}
.dbSearch h3{margin:0 0 6px;font-size:19px;font-weight:700}
.dbSearch>p{margin:0;color:var(--muted);font-size:10.5px}
.dbProof{
  margin:18px 0 0;
  border-top:1px solid var(--line);
}
.dbProof span{
  display:block;
  padding:10px 0;
  border-bottom:1px solid var(--line);
  color:#788588;
  font-size:9.5px;
  line-height:1.5;
}
.dbProof b{display:block;color:var(--ink);font-size:13px}
.dbSearch .searchBox{margin-top:16px}
.chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:11px}
.chip,.filter{
  display:inline-flex;
  align-items:center;
  min-height:30px;
  padding:5px 9px;
  border:1px solid var(--line-strong);
  border-radius:4px;
  background:transparent;
  color:#667477;
  font-size:10px;
  line-height:1.2;
}
.chip:hover,.filter:hover{border-color:#aeb8b3;color:var(--ink);background:var(--surface-soft)}
.filter.on{background:var(--ink);border-color:var(--ink);color:#fff}
.medicineRows,.medicineTable{
  border-top:1px solid var(--line);
}
.medicineRow{
  display:grid;
  grid-template-columns:minmax(0,1.55fr) minmax(110px,.55fr) 42px 18px;
  gap:16px;
  align-items:center;
  padding:14px 0;
  border-bottom:1px solid var(--line);
}
.medicineRow strong{
  display:block;
  color:var(--ink);
  font-size:12.5px;
  line-height:1.45;
  font-weight:700;
  overflow-wrap:anywhere;
}
.medicineRow small{
  display:block;
  margin-top:4px;
  color:#7c898b;
  font-size:9.5px;
  line-height:1.5;
  overflow-wrap:anywhere;
}
.medicineRow .area{color:#627174;font-size:10px}
.rxTag{
  color:var(--red);
  font-size:9px;
  font-weight:800;
  letter-spacing:.04em;
}
.medicineRow>b{color:#8d625c;font-size:13px;font-weight:500}
.medicineRow:hover strong{color:var(--teal-dark)}

/* Care pathway */
.pathwaySection{
  background:var(--paper-2);
  border-bottom:1px solid var(--line);
}
.pathwaySplit{
  display:grid;
  grid-template-columns:minmax(0,1.4fr) minmax(300px,.6fr);
  gap:40px;
  align-items:start;
}
.patientPath{padding-right:36px;border-right:1px solid #cccec7}
.pathTitle{
  display:flex;
  align-items:flex-start;
  gap:13px;
  margin-bottom:22px;
}
.pathTitle>span{
  width:30px;height:30px;
  display:grid;
  place-items:center;
  flex:0 0 30px;
  border:1px solid #aeb9b5;
  border-radius:4px;
  color:var(--red);
  font-size:9px;
  font-weight:800;
}
.pathTitle small{
  display:block;
  margin-bottom:4px;
  color:#7a8789;
  font-size:8px;
  line-height:1.3;
  font-weight:800;
  letter-spacing:.1em;
}
.pathTitle h3{margin:0;font-size:19px;font-weight:700;letter-spacing:-.02em}
.clinicalFlow{
  display:grid;
  grid-template-columns:repeat(7,1fr);
  margin-bottom:16px;
  border-top:1px solid #c7cac3;
  border-bottom:1px solid #c7cac3;
}
.clinicalStep{
  min-height:164px;
  padding:17px 11px;
  border-left:1px solid #d5d6d1;
}
.clinicalStep:first-child{border-left:0}
.clinicalStep>span{
  display:block;
  margin-bottom:26px;
  color:var(--red);
  font-size:9px;
  font-weight:800;
}
.clinicalStep strong{display:block;margin-bottom:6px;font-size:11px;line-height:1.45}
.clinicalStep p{margin:0;color:#6d7b7e;font-size:9.5px;line-height:1.55}
.institutionFlow{border-top:1px solid #c7cac3;margin-bottom:16px}
.institutionStep{
  display:grid;
  grid-template-columns:28px minmax(0,1fr);
  gap:11px;
  padding:12px 0;
  border-bottom:1px solid #d5d6d1;
}
.institutionStep>span{padding-top:2px;color:var(--red);font-size:9px;font-weight:800}
.institutionStep strong{display:block;margin-bottom:3px;font-size:11px}
.institutionStep p{margin:0;color:#6f7c7e;font-size:9.5px;line-height:1.52}
.clinicalNotice{
  margin-top:20px;
  padding:13px 0 0;
  border-top:1px solid #c7cac3;
  color:#687679;
  font-size:10px;
  line-height:1.65;
}

/* Care in Japan */
.travelGrid{
  display:grid;
  grid-template-columns:minmax(330px,.82fr) minmax(0,1.18fr);
  gap:30px;
}
.travelVisual{
  position:relative;
  min-height:420px;
  overflow:hidden;
  border-radius:var(--radius-lg);
  background:#dfe4e1;
}
.travelVisual img{width:100%;height:100%;object-fit:cover;filter:saturate(.72) contrast(1.02)}
.travelVisual:after{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(180deg,transparent 35%,rgba(17,35,39,.56));
}
.travelVisualCopy{
  position:absolute;
  z-index:1;
  left:22px;right:22px;bottom:20px;
  color:#fff;
}
.travelVisualCopy span{
  display:block;
  margin-bottom:8px;
  font-size:8px;
  font-weight:800;
  letter-spacing:.13em;
}
.travelVisualCopy strong{
  display:block;
  max-width:470px;
  font-size:20px;
  line-height:1.45;
  font-weight:650;
}
.travelFlow{display:grid;gap:20px}
.timeline{padding:2px 0 0}
.step{
  position:relative;
  padding:0 0 18px 27px;
  border-left:1px solid #afc2bd;
}
.step:last-child{padding-bottom:0}
.step:before{
  content:"";
  position:absolute;
  left:-4px;top:6px;
  width:7px;height:7px;
  border-radius:50%;
  background:var(--teal);
}
.step strong{font-size:11.5px}
.step p{margin:4px 0 0;color:#748184;font-size:10px;line-height:1.58}
.hospitalPreview{border-top:1px solid var(--line)}
.hospitalRow{
  display:grid;
  grid-template-columns:minmax(0,1fr) 70px 16px;
  gap:12px;
  align-items:center;
  padding:12px 0;
  border-bottom:1px solid var(--line);
}
.hospitalRow strong{display:block;font-size:11.5px;font-weight:700}
.hospitalRow small{display:block;margin-top:3px;color:#7a8789;font-size:9px;line-height:1.45}
.hospitalRow>span{color:#778487;font-size:9px;text-align:right}
.hospitalRow>b{color:#8b625c;font-size:12px;font-weight:500}
.hospitalRow:hover strong{color:var(--teal-dark)}

/* Editorial principles */
.trustSection{background:var(--surface-soft);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.trustLayout{
  display:grid;
  grid-template-columns:minmax(280px,.7fr) minmax(0,1.3fr);
  gap:48px;
}
.trustStatement h2{
  margin:8px 0 14px;
  font-size:clamp(30px,3.4vw,44px);
  line-height:1.12;
  letter-spacing:-.038em;
}
.trustStatement p{max-width:420px;margin:0 0 18px;color:var(--muted);font-size:12px;line-height:1.72}
.whyStack{border-top:1px solid var(--line)}
.whyItem{
  display:grid;
  grid-template-columns:42px minmax(0,1fr);
  gap:16px;
  padding:17px 0;
  border-bottom:1px solid var(--line);
}
.whyItem>span{padding-top:2px;color:#8a9697;font-size:9px;font-weight:800}
.whyItem h3{margin:0 0 5px;font-size:15px;font-weight:700}
.whyItem p{margin:0;color:var(--muted);font-size:10.5px;line-height:1.6}

/* Guides */
.guides{background:var(--paper)}
.guideLayout{
  display:grid;
  grid-template-columns:minmax(0,1.04fr) minmax(0,.96fr);
  gap:28px;
}
.featuredGuide{
  min-height:320px;
  padding:28px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  border-radius:var(--radius-lg);
  background:
    linear-gradient(180deg,rgba(24,42,46,.16),rgba(24,42,46,.64)),
    url("https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?auto=format&fit=crop&q=80&w=1200") center/cover;
  color:#fff;
}
.featuredGuide .eyebrow{color:#d6e8e4}
.featuredGuide h3{
  max-width:560px;
  margin:16px 0 10px;
  color:#fff;
  font-size:29px;
  line-height:1.18;
  letter-spacing:-.035em;
}
.featuredGuide p{max-width:560px;margin:0;color:#e5ecea;font-size:11px;line-height:1.65}
.featuredGuide .textLink{color:#fff}
.guideList{border-top:1px solid var(--line)}
.guideRow{
  min-height:92px;
  display:grid;
  grid-template-columns:minmax(0,1fr) 18px;
  gap:14px;
  align-items:center;
  padding:15px 0;
  border-bottom:1px solid var(--line);
}
.guideRow h3{margin:0 0 4px;font-size:14.5px;line-height:1.4}
.guideRow p{margin:0;color:var(--muted);font-size:10px;line-height:1.55}
.guideRow>b{color:#8d625c;font-size:12px;font-weight:500}
.guideRow:hover h3{color:var(--teal-dark)}

/* Prescription index */
.rxShowcase{background:var(--surface);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.rxTable{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:0 30px;
}
.rxItem{
  min-height:80px;
  display:grid;
  grid-template-columns:42px minmax(0,1fr) 38px 18px;
  gap:12px;
  align-items:center;
  padding:13px 0;
  border-top:1px solid var(--line);
}
.rxItem:nth-last-child(-n+2){border-bottom:1px solid var(--line)}
.rxGlyph{
  width:36px;height:24px;
  display:grid;
  place-items:center;
  border:1px solid #c4cbc8;
  border-radius:4px;
  color:#7b625d;
  font-size:8px;
  font-weight:800;
}
.rxItem strong{display:block;font-size:11.5px;line-height:1.4;overflow-wrap:anywhere}
.rxItem small{display:block;margin-top:3px;color:#7c898b;font-size:9px;line-height:1.4;overflow-wrap:anywhere}
.rxItem .area{display:none}
.rxItem>b{color:#8d625c;font-size:12px;font-weight:500}
.rxItem:hover strong{color:var(--teal-dark)}
.rxNext{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:28px;
  padding:18px 0 0;
}
.rxNext strong{
  display:block;
  max-width:800px;
  margin-top:5px;
  font-size:14px;
  line-height:1.55;
  font-weight:650;
}

/* Interior page headers */
.pageHero{
  padding:48px 0 34px;
  background:var(--paper-2);
  border-bottom:1px solid var(--line);
}
.pageHero h1{
  max-width:900px;
  margin:10px 0 12px;
  font-size:clamp(36px,4.5vw,56px);
  line-height:1.08;
  letter-spacing:-.04em;
  font-weight:700;
}
.pageHero p{max-width:760px;margin:0;color:var(--muted);font-size:13px;line-height:1.72}
.pageHero .searchBox{max-width:680px;margin-top:20px}
.content{padding:48px 0 66px}
.filters{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:20px}

/* Medicine detail */
.verificationStrip{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:20px;
}
.verificationStrip span{
  display:flex;
  align-items:center;
  gap:7px;
  min-height:34px;
  padding:6px 9px;
  border:1px solid var(--line-strong);
  border-radius:4px;
  color:#6c7a7d;
  font-size:9.5px;
}
.verificationStrip b{color:var(--ink);font-size:10px}
.detailGrid{
  display:grid;
  grid-template-columns:minmax(0,1fr) 300px;
  gap:34px;
  align-items:start;
}
.factList{margin:0;border-top:1px solid var(--line)}
.fact{
  display:grid;
  grid-template-columns:190px minmax(0,1fr);
  gap:22px;
  padding:12px 0;
  border-bottom:1px solid var(--line);
}
.fact dt{color:#738083;font-size:10px;font-weight:650}
.fact dd{margin:0;color:var(--ink);font-size:11.5px;line-height:1.55;overflow-wrap:anywhere}
.sideNote{
  padding:20px;
  border:1px solid #d5ceca;
  border-radius:var(--radius-lg);
  background:#f5efec;
}
.sideNote>strong{display:block;color:#765a55;font-size:10px;letter-spacing:.05em}
.sideNote>p{margin:9px 0 16px;color:#695e5b;font-size:10.5px;line-height:1.65}
.sideVerify{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:8px;
  margin:14px 0;
}
.sideVerify span{
  padding:9px;
  border:1px solid #dfd3cf;
  border-radius:4px;
  color:#816e69;
  font-size:9px;
}
.sideVerify b{display:block;margin-top:3px;color:#5d4a46;font-size:9.5px}
.sideNote .btn{width:100%}
.sideInstitution{margin-top:12px}
.sourceBox{
  margin-top:20px;
  padding:17px 0 0;
  border-top:1px solid var(--line);
}
.sourceBox>strong{font-size:11px}
.sourceBox>p{max-width:760px;margin:7px 0 10px;color:var(--muted);font-size:10.5px;line-height:1.65}
.sourceBox>a{color:var(--teal-dark);font-size:10px;font-weight:700}
.sourceButtons{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
.sourceButtons .btn{width:auto}
.statusNote{
  margin-top:18px;
  padding:14px 0;
  border-top:1px solid #dacbc7;
  border-bottom:1px solid #dacbc7;
}
.statusNote strong{color:#795b55;font-size:10px}
.statusNote p{margin:5px 0 0;color:#756360;font-size:10.5px;line-height:1.62}
.altProducts p:last-child{margin-bottom:0}

/* Articles */
.article{max-width:790px}
.articleMeta{
  display:flex;
  flex-wrap:wrap;
  gap:8px 18px;
  margin-bottom:28px;
  padding-bottom:14px;
  border-bottom:1px solid var(--line);
  color:#7d898b;
  font-size:10px;
}
.article h2{margin:34px 0 10px;font-size:24px;line-height:1.25;letter-spacing:-.025em}
.article p{margin:0;color:#4f6266;font-size:13px;line-height:1.88}
.articleFooter{margin-top:38px}

/* Hospitals */
.hospitalGrid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:0 28px;
  border-top:1px solid var(--line);
}
.hospitalCard{
  padding:20px 0 22px;
  border-bottom:1px solid var(--line);
}
.hospitalCard:nth-child(even){padding-left:24px;border-left:1px solid var(--line)}
.hospitalCard h3{margin:7px 0 2px;font-size:17px;line-height:1.35}
.hospitalJa{margin:0 0 10px;color:#788588;font-size:10px}
.hospitalRoute{
  margin:10px 0 12px;
  padding:8px 10px;
  border-left:3px solid var(--teal);
  background:var(--teal-soft);
  color:#48615f;
  font-size:10px;
  font-weight:650;
  line-height:1.5;
}
.hospitalFacts{margin:0 0 14px;padding-left:18px;color:#5e6f72;font-size:10.5px;line-height:1.65}
.hospitalFacts li+li{margin-top:4px}
.hospitalMeta{
  display:flex;
  flex-wrap:wrap;
  gap:5px 14px;
  margin-bottom:10px;
  color:#859092;
  font-size:9px;
}
.hospitalCard>a{color:var(--teal-dark);font-size:10px;font-weight:700}

/* Sources / about */
.sourceHierarchy{border-top:1px solid var(--line)}
.sourceLevel{
  display:grid;
  grid-template-columns:220px minmax(0,1fr);
  gap:26px;
  padding:17px 0;
  border-bottom:1px solid var(--line);
}
.sourceLevel h3{margin:0;font-size:14px}
.sourceLevel p{max-width:760px;margin:0;color:var(--muted);font-size:10.5px;line-height:1.65}
.policyGrid,.aboutBoundary{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:0;
  margin-top:28px;
  border-top:1px solid var(--line);
}
.policyCard,.aboutBoundary article{
  padding:20px 22px;
  border-bottom:1px solid var(--line);
}
.policyCard:nth-child(even),.aboutBoundary article:nth-child(even){border-left:1px solid var(--line)}
.policyCard>span,.aboutBoundary article>span{
  display:block;
  margin-bottom:22px;
  color:#8b9899;
  font-size:9px;
  font-weight:800;
}
.policyCard h3,.aboutBoundary h3{margin:0 0 7px;font-size:15px}
.policyCard p,.aboutBoundary p{margin:0;color:var(--muted);font-size:10.5px;line-height:1.65}
.sourceLinks{
  margin-top:28px;
  border-top:1px solid var(--line);
}
.sourceLink{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:20px;
  padding:12px 0;
  border-bottom:1px solid var(--line);
}
.sourceLink strong{font-size:11px}
.sourceLink small{color:#7f8b8d;font-size:9px}
.sourceLink b{color:#8d625c;font-weight:500}
.transparencyBox{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  margin-top:28px;
  border:1px solid var(--line);
  background:var(--line);
  gap:1px;
}
.transparencyBox>div{padding:20px;background:var(--surface-soft)}
.transparencyBox strong{font-size:11px}
.transparencyBox p{margin:6px 0 0;color:var(--muted);font-size:10.5px;line-height:1.65}
.strengthList{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  margin-top:30px;
  border-top:1px solid var(--line);
}
.strengthRow{
  padding:18px 20px 20px 0;
  border-bottom:1px solid var(--line);
}
.strengthRow:nth-child(even){padding-left:20px;border-left:1px solid var(--line)}
.strengthRow>span{display:block;margin-bottom:18px;color:#8a9697;font-size:9px;font-weight:800}
.strengthRow h3{margin:0 0 7px;font-size:15px}
.strengthRow p{margin:0;color:var(--muted);font-size:10.5px;line-height:1.65}

/* Inquiry form */
.formGrid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:16px 18px;
}
.field{display:grid;gap:6px}
.field.full{grid-column:1/-1}
.field label{color:#526468;font-size:10px;font-weight:700}
.field input,.field textarea{
  width:100%;
  border:1px solid var(--line-strong);
  border-radius:4px;
  background:var(--surface);
  outline:0;
  font-size:12px;
  transition:border-color .16s ease,box-shadow .16s ease;
}
.field input{height:42px;padding:0 11px}
.field textarea{min-height:116px;padding:10px 11px;resize:vertical;field-sizing:content}
.field input:focus,.field textarea:focus{border-color:#7ea29b;box-shadow:0 0 0 3px rgba(57,107,100,.08)}
.formNote{max-width:760px;margin:9px 0 0;color:#7c888a;font-size:9.5px;line-height:1.6}
.generated{
  display:none;
  margin-top:20px;
  padding:16px;
  border:1px solid var(--line);
  border-radius:4px;
  background:var(--surface-soft);
  white-space:pre-wrap;
  font-size:10.5px;
  line-height:1.65;
}

/* Notices */
.rxNote{
  margin-top:18px;
  padding:13px 0;
  border-top:1px solid #d9cbc7;
  color:#765f5a;
  font-size:10px;
  line-height:1.65;
}

/* Footer */
.foot{
  padding:42px 0 20px;
  background:#26383c;
  color:#e6eceb;
}
.footGrid{
  display:grid;
  grid-template-columns:minmax(0,1.2fr) minmax(300px,.8fr);
  gap:56px;
}
.footBrand .logoLine{stroke:#eef3f1}
.footBrand .logoDot{fill:#c96d60}
.footBrand .wordTop b{color:#eef3f1}
.footBrand .wordmark small{color:#93a3a4}
.foot p{max-width:680px;margin:14px 0 0;color:#aebbbb;font-size:10px;line-height:1.65}
.footLinks{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:28px;
}
.footLinks>div{display:grid;align-content:start;gap:10px}
.footLinks a{color:#d0d8d7;font-size:10.5px}
.footLinks a:hover{color:#fff}
.footBottom{
  display:flex;
  justify-content:space-between;
  gap:20px;
  margin-top:28px;
  padding-top:14px;
  border-top:1px solid rgba(255,255,255,.12);
  color:#849698;
  font-size:9px;
}

/* Progressive enhancement */
.section,.content{content-visibility:auto;contain-intrinsic-size:auto 700px}
@view-transition{navigation:auto}
.top{view-transition-name:site-header}
.brand{view-transition-name:site-brand}
.hero h1,.pageHero h1{view-transition-name:page-title}
::view-transition-group(site-header),
::view-transition-group(site-brand),
::view-transition-group(page-title){animation-duration:.32s;animation-timing-function:cubic-bezier(.22,1,.36,1)}

@supports (anchor-name: --tm-anchor){
  .searchContext{
    display:block;
    position:fixed;
    position-anchor:--search-anchor;
    position-area:bottom;
    margin:7px;
    padding:7px 9px;
    border:1px solid #d1d5d1;
    border-radius:4px;
    background:rgba(32,49,54,.96);
    color:#e9f2f0;
    font-size:9px;
    opacity:0;
    translate:0 -4px;
    pointer-events:none;
    transition:opacity .15s ease,translate .15s ease;
    z-index:80;
  }
  .headTools:has(.headSearch:hover) .searchContext,
  .headTools:has(.headSearch:focus-visible) .searchContext{opacity:1;translate:0 0}
}
@container sitebar scroll-state(stuck:top){
  .top{box-shadow:0 8px 22px rgba(24,43,47,.045)}
}
@supports (animation-timeline:view()){
  .sectionHead,.proofItem,.evidenceRow,.medicineRow,.guideRow,.hospitalRow,.hospitalCard,.whyItem{
    animation:tm-reveal linear both;
    animation-timeline:view(block);
    animation-range:entry 8% cover 24%;
  }
  @keyframes tm-reveal{
    from{opacity:.45;transform:translateY(7px)}
    to{opacity:1;transform:none}
  }
}

/* Tablet */
@media(max-width:1080px){
  .bar{gap:18px}
  .nav{gap:17px}
  .heroGrid{grid-template-columns:1fr;gap:30px}
  .heroStage{grid-template-rows:350px auto}
  .heroPhoto{height:350px}
  .sectionHead{grid-template-columns:1fr;gap:10px;align-items:start}
  .sectionHead>p{max-width:680px}
  .proofGrid{grid-template-columns:repeat(2,1fr)}
  .proofItem:nth-child(3){border-left:0;border-top:1px solid var(--line)}
  .proofItem:nth-child(4){border-top:1px solid var(--line)}
  .dbPanel{grid-template-columns:1fr;gap:20px}
  .dbSearch{padding:0 0 20px;border-right:0;border-bottom:1px solid var(--line)}
  .pathwaySplit{grid-template-columns:1fr;gap:28px}
  .patientPath{padding-right:0;border-right:0}
  .institutionPath{padding-top:24px;border-top:1px solid #cccec7}
  .clinicalFlow{grid-template-columns:repeat(4,1fr)}
  .clinicalStep:nth-child(5){border-left:0}
  .clinicalStep:nth-child(n+5){border-top:1px solid #d5d6d1}
  .trustLayout{grid-template-columns:1fr;gap:24px}
  .guideLayout{grid-template-columns:1fr}
  .featuredGuide{min-height:290px}
  .detailGrid{grid-template-columns:minmax(0,1fr) 270px}
}

/* Mobile */
@media(max-width:820px){
  :root{--header:auto}
  .wrap{width:min(var(--max),calc(100% - 30px))}
  .bar{
    min-height:64px;
    height:auto;
    flex-wrap:wrap;
    gap:10px 16px;
    padding:10px 0 8px;
  }
  .brand{order:1}
  .headTools{order:2;margin-left:auto;gap:10px}
  .headSearch{display:none}
  .lang{min-width:86px}
  .nav{
    order:3;
    width:100%;
    margin:0;
    padding-top:7px;
    gap:20px;
    overflow-x:auto;
    border-top:1px solid var(--line);
    scrollbar-width:none;
  }
  .nav::-webkit-scrollbar{display:none}
  .nav a{height:auto;padding:0 0 7px}
  .nav a:after{bottom:0}
  .hero{padding:34px 0 28px}
  .hero h1{font-size:clamp(35px,10vw,47px);margin:12px 0 14px}
  .lead{font-size:13px;line-height:1.72}
  .searchBox{margin-top:18px}
  .heroStage{grid-template-rows:280px auto}
  .heroPhoto{height:280px}
  .heroPhoto figcaption{display:none}
  .route{grid-template-columns:1fr}
  .routeRow:nth-of-type(even){border-left:0}
  .sourceRailInner{
    align-items:flex-start;
    flex-direction:column;
    gap:10px;
    padding:14px 0;
  }
  .sourceRailMarks{width:100%;margin:0}
  .sourceRailMarks span{flex:1;min-width:0;padding:3px 9px}
  .sourceRailMarks span:first-child{border-left:0}
  .section{padding:50px 0}
  .sectionHead{margin-bottom:22px}
  .sectionHead h2{font-size:31px}
  .proofGrid{grid-template-columns:1fr}
  .proofItem,.proofItem:nth-child(n){
    min-height:0;
    padding:16px 0;
    border-left:0;
    border-top:1px solid var(--line);
  }
  .proofItem:first-child{border-top:0}
  .proofItem>span{margin-bottom:12px}
  .evidenceRow{grid-template-columns:60px minmax(0,1fr);gap:13px;padding:16px 0}
  .evidenceYear{font-size:18px}
  .evidenceRow h3{font-size:15px}
  .evidenceRow>b{grid-column:2;justify-self:start}
  .medicineRow{
    grid-template-columns:minmax(0,1fr) 38px 16px;
    gap:10px;
  }
  .medicineRow .area{display:none}
  .clinicalFlow{grid-template-columns:1fr}
  .clinicalStep,.clinicalStep:nth-child(n){
    min-height:0;
    display:grid;
    grid-template-columns:34px minmax(0,1fr);
    gap:10px;
    padding:11px 0;
    border-left:0;
    border-top:1px solid #d5d6d1;
  }
  .clinicalStep:first-child{border-top:0}
  .clinicalStep>span{margin:1px 0 0}
  .travelGrid{grid-template-columns:1fr}
  .travelVisual{min-height:300px}
  .travelVisualCopy strong{font-size:17px}
  .rxTable{grid-template-columns:1fr}
  .rxItem:nth-last-child(-n+2){border-bottom:0}
  .rxItem:last-child{border-bottom:1px solid var(--line)}
  .rxNext{align-items:flex-start;flex-direction:column;gap:14px}
  .detailGrid{grid-template-columns:1fr}
  .sideNote{order:-1}
  .fact{grid-template-columns:130px minmax(0,1fr);gap:16px}
  .hospitalGrid{grid-template-columns:1fr}
  .hospitalCard,.hospitalCard:nth-child(even){padding:18px 0;border-left:0}
  .policyGrid,.aboutBoundary,.transparencyBox,.strengthList{grid-template-columns:1fr}
  .policyCard,.aboutBoundary article,.policyCard:nth-child(even),.aboutBoundary article:nth-child(even){
    padding:17px 0;
    border-left:0;
  }
  .strengthRow,.strengthRow:nth-child(even){padding:17px 0;border-left:0}
  .sourceLevel{grid-template-columns:1fr;gap:5px}
  .formGrid{grid-template-columns:1fr}
  .field.full{grid-column:auto}
  .footGrid{grid-template-columns:1fr;gap:32px}
  .footLinks{gap:18px}
}
@media(max-width:520px){
  body{font-size:13px}
  .wordmark small{display:none}
  .brandSymbol{width:31px;height:31px;flex-basis:31px}
  .wordTop b{font-size:11px}
  .sourceRailMarks{display:grid;grid-template-columns:1fr}
  .sourceRailMarks span{padding:7px 0;border-left:0;border-top:1px solid #d0d1cb}
  .sourceRailMarks span:first-child{border-top:0}
  .searchBox button{min-width:90px;padding-inline:10px}
  .medicineRow{grid-template-columns:minmax(0,1fr) 34px 14px}
  .pathTitle small{font-size:7.5px}
  .fact{grid-template-columns:1fr;gap:4px}
  .sideVerify{grid-template-columns:1fr}
  .sourceButtons{display:grid}
  .sourceButtons .btn{width:100%}
  .footLinks{grid-template-columns:1fr}
  .footBottom{flex-direction:column;gap:5px}
}
@media(prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *,*::before,*::after{animation:none!important;transition:none!important}
  @view-transition{navigation:none}
}
`;

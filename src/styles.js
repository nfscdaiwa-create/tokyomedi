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
  --header:74px;
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
.brandSymbol{width:37px;height:37px;display:block;flex:0 0 37px}
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
.wordTop b{font-size:13px;line-height:1;font-weight:800;letter-spacing:.105em}
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
  gap:27px;
  margin-left:auto;
}
.nav a{
  position:relative;
  display:flex;
  align-items:center;
  height:100%;
  color:#516166;
  font-size:11.5px;
  font-weight:680;
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

/* Institution-only inquiry */
.institutionInquiry{
  background:var(--paper-2);
  border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);
}
.institutionInquiryGrid{
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(320px,.55fr);
  gap:54px;
  align-items:start;
}
.institutionInquiry h2{
  margin:8px 0 12px;
  font-size:clamp(30px,3.4vw,44px);
  line-height:1.12;
  letter-spacing:-.038em;
}
.institutionInquiry p{
  max-width:720px;
  margin:0;
  color:var(--muted);
  font-size:12px;
  line-height:1.72;
}
.institutionInquiryMeta{
  border-top:1px solid #c8cbc4;
}
.institutionInquiryMeta span{
  display:grid;
  grid-template-columns:70px 1fr;
  gap:12px;
  padding:12px 0;
  border-bottom:1px solid #d3d5cf;
  color:#657376;
  font-size:10px;
  line-height:1.55;
}
.institutionInquiryMeta b{
  color:var(--ink);
  font-size:10px;
}
.institutionInquiryMeta .btn{margin-top:16px}

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

/* Medicine index */
.medicineIndex{
  background:#f4f5f1;
  min-height:70vh;
}
.medicineIndexHero{
  padding:46px 0 34px;
  border-bottom:1px solid var(--line);
  background:
    radial-gradient(circle at 88% 12%,rgba(57,107,100,.07),transparent 24%),
    linear-gradient(180deg,#f7f7f3 0%,#f1f2ee 100%);
}
.medicineIndexHeroGrid{
  display:grid;
  grid-template-columns:minmax(0,1.22fr) minmax(360px,.78fr);
  gap:60px;
  align-items:end;
}
.medicineIndexIntro h1{
  margin:10px 0 12px;
  font-size:clamp(42px,4.4vw,58px);
  line-height:1.04;
  letter-spacing:-.045em;
  font-weight:720;
}
.medicineIndexIntro>p{
  max-width:720px;
  margin:0;
  color:#5f6f73;
  font-size:13px;
  line-height:1.72;
}
.medicineSearch{
  display:flex;
  margin-top:22px;
  max-width:760px;
  min-height:48px;
  border:1px solid #bcc5c1;
  border-radius:7px;
  background:#fff;
  overflow:hidden;
  box-shadow:0 1px 0 rgba(31,49,54,.02);
}
.medicineSearch input{
  min-width:0;
  flex:1;
  padding:0 15px;
  border:0;
  outline:0;
  background:transparent;
  font-size:12px;
}
.medicineSearch input::placeholder{color:#9aa4a4}
.medicineSearch button{
  min-width:124px;
  border:0;
  border-left:1px solid #c6ceca;
  background:var(--ink);
  color:#fff;
  font-size:11px;
  font-weight:760;
}
.medicineSearch button:hover{background:var(--ink-2)}
.medicineIndexTrust{
  padding:20px 22px 18px;
  border-radius:10px;
  background:#263b40;
  color:#e8efed;
  box-shadow:0 12px 32px rgba(32,49,54,.08);
}
.medicineIndexTrust>div{
  display:grid;
  grid-template-columns:108px minmax(0,1fr);
  gap:14px;
  align-items:center;
  padding:10px 0;
  border-bottom:1px solid rgba(255,255,255,.11);
}
.medicineIndexTrust>div:first-child{padding-top:0}
.medicineIndexTrust>div span{
  color:#fff;
  font-size:13px;
  font-weight:760;
  letter-spacing:.02em;
}
.medicineIndexTrust>div strong{
  color:#b9c7c6;
  font-size:10px;
  line-height:1.45;
  font-weight:650;
}
.medicineIndexTrust>p{
  margin:14px 0 0;
  color:#aebdbc;
  font-size:9.5px;
  line-height:1.65;
}
.medicineIndexBody{
  padding:30px 0 72px;
  background:#f7f7f4;
}
.medicineToolbar{
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:24px;
  margin-bottom:12px;
}
.medicineToolbar>div:first-child{
  display:flex;
  align-items:baseline;
  gap:10px;
}
.medicineResultCount{
  color:#667579;
  font-size:10px;
  font-weight:650;
}
.medicineResultCount b{
  margin-right:3px;
  color:var(--ink);
  font-size:19px;
  line-height:1;
  letter-spacing:-.025em;
}
.medicineQuery{
  color:var(--teal-dark);
  font-size:10px;
  font-weight:700;
}
.medicineFilterLabel{
  color:#778487;
  font-size:9.5px;
  font-weight:700;
}
.medicineFilters{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-bottom:22px;
}
.medicineFilters .filter{
  min-height:34px;
  gap:8px;
  padding:6px 10px 6px 11px;
  border-radius:999px;
  background:#fff;
}
.medicineFilters .filter b{
  min-width:20px;
  height:20px;
  display:grid;
  place-items:center;
  border-radius:999px;
  background:#eef0ec;
  color:#7a8586;
  font-size:8px;
  font-weight:800;
}
.medicineFilters .filter.on{
  background:var(--ink);
  border-color:var(--ink);
}
.medicineFilters .filter.on b{
  background:rgba(255,255,255,.14);
  color:#fff;
}
.medicineCardGrid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:14px;
}
.medicineCard{
  position:relative;
  min-height:286px;
  display:flex;
  flex-direction:column;
  padding:21px 22px 18px;
  border:1px solid #d8dcd7;
  border-radius:11px;
  background:#fff;
  overflow:hidden;
  transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease;
}
.medicineCard:before{
  content:"";
  position:absolute;
  left:0;top:0;bottom:0;
  width:3px;
  background:#6d9891;
  opacity:.72;
}
.medicineCard:hover{
  transform:translateY(-2px);
  border-color:#b8c8c3;
  box-shadow:0 12px 28px rgba(35,57,61,.07);
}
.medicineCardMedia{
  height:170px;
  display:grid;
  place-items:center;
  margin:-21px -22px 18px;
  padding:16px 22px;
  overflow:hidden;
  border-bottom:1px solid #e1e4df;
  background:linear-gradient(180deg,#fafbf8,#f0f2ee);
}
.medicineCardMedia img{
  width:100%;
  height:100%;
  object-fit:contain;
  mix-blend-mode:multiply;
  transition:transform .2s ease;
}
.medicineCard:hover .medicineCardMedia img{transform:scale(1.025)}
.medicineCardTop{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px;
  margin-bottom:13px;
}
.medicineArea{
  display:inline-flex;
  align-items:center;
  min-height:25px;
  padding:4px 8px;
  border-radius:999px;
  background:var(--teal-soft);
  color:var(--teal-dark);
  font-size:9px;
  line-height:1.2;
  font-weight:750;
}
.medicineStatus{
  color:var(--red);
  font-size:9px;
  font-weight:850;
  letter-spacing:.06em;
}
.medicineCard h2{
  margin:0;
  font-size:20px;
  line-height:1.28;
  letter-spacing:-.025em;
  font-weight:720;
}
.medicineCardNames{
  min-height:38px;
  margin:7px 0 15px;
  color:#748184;
  font-size:10px;
  line-height:1.55;
  overflow-wrap:anywhere;
}
.medicineCardFacts{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  margin-top:auto;
  border-top:1px solid var(--line);
  border-left:1px solid var(--line);
}
.medicineCardFacts>div{
  min-height:58px;
  padding:9px 10px;
  border-right:1px solid var(--line);
  border-bottom:1px solid var(--line);
}
.medicineCardFacts span{
  display:block;
  margin-bottom:4px;
  color:#879193;
  font-size:8px;
  line-height:1.3;
  font-weight:700;
}
.medicineCardFacts strong{
  display:block;
  color:#405358;
  font-size:9.5px;
  line-height:1.48;
  font-weight:650;
  overflow-wrap:anywhere;
}
.medicineCardFoot{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  padding-top:13px;
}
.pmdaVerified{
  display:inline-flex;
  align-items:center;
  gap:6px;
  color:#647477;
  font-size:9px;
  font-weight:750;
}
.pmdaVerified i{
  width:6px;height:6px;
  border-radius:50%;
  background:#4f8178;
  box-shadow:0 0 0 3px rgba(79,129,120,.1);
}
.medicineCardFoot>b{
  color:var(--teal-dark);
  font-size:10px;
  font-weight:760;
}
.medicineEmpty{
  padding:54px 24px;
  border:1px solid var(--line);
  border-radius:10px;
  background:#fff;
  text-align:center;
}
.medicineEmpty strong{
  display:block;
  margin-bottom:13px;
  color:#586a6e;
  font-size:13px;
}
.medicineEmpty a{
  color:var(--teal-dark);
  font-size:10px;
  font-weight:760;
}
.medicineIndexNote{
  display:grid;
  grid-template-columns:140px minmax(0,1fr) auto;
  gap:20px;
  align-items:center;
  margin-top:26px;
  padding:16px 18px;
  border:1px solid var(--line);
  border-radius:8px;
  background:#f0f1ed;
}
.medicineIndexNote>div span{
  display:block;
  color:var(--teal-dark);
  font-size:10px;
  font-weight:850;
  letter-spacing:.08em;
}
.medicineIndexNote>div strong{
  display:block;
  margin-top:3px;
  color:#596b6f;
  font-size:9px;
}
.medicineIndexNote p{
  margin:0;
  color:#68777a;
  font-size:9.5px;
  line-height:1.58;
}
.medicineIndexNote>a{
  white-space:nowrap;
  color:var(--teal-dark);
  font-size:10px;
  font-weight:760;
}

/* Health & nutrition */
.homeHealth{background:#eef2ec;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.homeHealthGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.homeHealthCard{
  min-width:0;
  border:1px solid #d6dcd5;
  border-radius:10px;
  background:#fff;
  overflow:hidden;
  transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease;
}
.homeHealthCard:hover{transform:translateY(-2px);border-color:#b9c9bf;box-shadow:0 10px 25px rgba(37,63,56,.06)}
.homeHealthMedia{height:190px;padding:14px;background:linear-gradient(180deg,#fbfcf8,#f2f4ee)}
.homeHealthMedia img{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}
.homeHealthBody{padding:14px 15px 15px}
.homeHealthBody span{display:block;color:#7a8883;font-size:9px;line-height:1.4}
.homeHealthBody h3{min-height:42px;margin:6px 0 12px;font-size:14px;line-height:1.45}
.homeHealthBody b{color:var(--teal-dark);font-size:9.5px;font-weight:760}
.homeHealthFoot{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:24px;
  margin-top:18px;
  padding-top:15px;
  border-top:1px solid #d5dbd4;
}
.homeHealthFoot p{margin:0;color:#66766f;font-size:10px;line-height:1.6}

.healthIndex{background:#f5f6f2;min-height:70vh}
.healthIndexHero{
  padding:48px 0 36px;
  border-bottom:1px solid var(--line);
  background:
    radial-gradient(circle at 84% 20%,rgba(96,137,91,.10),transparent 25%),
    linear-gradient(180deg,#f8f9f5,#eef1eb);
}
.healthIndexHeroGrid{
  display:grid;
  grid-template-columns:minmax(0,1.2fr) minmax(320px,.8fr);
  gap:54px;
  align-items:end;
}
.healthIndexHero h1{
  margin:10px 0 12px;
  font-size:clamp(42px,4.3vw,58px);
  line-height:1.04;
  letter-spacing:-.045em;
}
.healthIndexHero p{max-width:700px;margin:0;color:#5f7068;font-size:13px;line-height:1.75}
.healthSearch{
  display:flex;
  max-width:690px;
  min-height:48px;
  margin-top:22px;
  border:1px solid #bdc9bf;
  border-radius:7px;
  background:#fff;
  overflow:hidden;
}
.healthSearch input{min-width:0;flex:1;border:0;outline:0;padding:0 14px;font-size:12px;background:transparent}
.healthSearch button{min-width:118px;border:0;border-left:1px solid #c7d0c8;background:#355f54;color:#fff;font-size:10.5px;font-weight:760}
.healthBoundary{
  padding:21px 22px;
  border-radius:10px;
  background:#345b52;
  color:#e9f0ec;
}
.healthBoundary>span{display:block;color:#b9d1c8;font-size:9px;font-weight:800;letter-spacing:.11em}
.healthBoundary>strong{display:block;margin-top:8px;font-size:21px;line-height:1.3}
.healthBoundary>p{margin:12px 0 0;color:#c0d0ca;font-size:10px;line-height:1.65}
.healthIndexBody{padding:28px 0 70px}
.healthToolbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:17px;color:#718079;font-size:10px}
.healthToolbar b{color:var(--ink);font-size:18px;margin-right:3px}
.healthToolbar a{color:var(--teal-dark);font-weight:700}
.healthCardGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.healthCard{
  display:flex;
  min-width:0;
  flex-direction:column;
  border:1px solid #d7dcd6;
  border-radius:11px;
  background:#fff;
  overflow:hidden;
  transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease;
}
.healthCard:hover{transform:translateY(-2px);border-color:#b5c7bb;box-shadow:0 12px 28px rgba(34,61,52,.07)}
.healthCardMedia{height:220px;padding:17px;background:linear-gradient(180deg,#fbfcf9,#f1f3ee)}
.healthCardMedia img{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply;transition:transform .2s ease}
.healthCard:hover .healthCardMedia img{transform:scale(1.025)}
.healthCardBody{display:flex;flex:1;flex-direction:column;padding:15px 16px}
.healthCardTop{display:flex;justify-content:space-between;gap:10px;color:#7b8983;font-size:8.5px}
.healthCardTop span{color:#477268;font-weight:760}
.healthCard h2{margin:9px 0 6px;font-size:15px;line-height:1.42}
.healthCardBody>p{margin:0;color:#697871;font-size:10px}
.healthCardFoot{display:flex;justify-content:space-between;gap:10px;margin-top:auto;padding-top:14px;border-top:1px solid #e0e3de;color:#89938f;font-size:8.5px}
.healthCardFoot b{color:#426b61;font-size:9px}
.healthDisclaimer{
  display:grid;
  grid-template-columns:150px minmax(0,1fr);
  gap:22px;
  margin-top:28px;
  padding:17px 19px;
  border:1px solid #d5dbd4;
  border-radius:8px;
  background:#eef1ec;
}
.healthDisclaimer strong{font-size:10px;color:#405c54}
.healthDisclaimer p{margin:0;color:#66766f;font-size:10px;line-height:1.65}

.healthDetailHero{padding:44px 0 36px;border-bottom:1px solid var(--line);background:#f0f3ed}
.healthDetailGrid{display:grid;grid-template-columns:380px minmax(0,1fr);gap:52px;align-items:center}
.healthDetailMedia{height:340px;padding:24px;border:1px solid #d4dcd4;border-radius:12px;background:#fff}
.healthDetailMedia img{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}
.healthDetailIntro h1{margin:10px 0 12px;font-size:clamp(36px,4vw,52px);line-height:1.1;letter-spacing:-.04em}
.healthDetailIntro>p{max-width:680px;margin:0;color:#5f7068;font-size:13px;line-height:1.75}
.healthDetailBadges{display:flex;flex-wrap:wrap;gap:7px;margin-top:18px}
.healthDetailBadges span{padding:6px 9px;border:1px solid #c8d1c9;border-radius:999px;background:#f9faf7;color:#66756f;font-size:9px}
.healthSideNote{background:#edf3ee;border-color:#ccd9cf}
.healthSideNote>strong{color:#466b5e}

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
.medicineHeroGrid{
  display:grid;
  grid-template-columns:minmax(0,1fr) 300px;
  gap:42px;
  align-items:center;
}
.medicineHeroCopy{min-width:0}
.medicineHeroMedia{
  height:250px;
  display:grid;
  place-items:center;
  padding:18px;
  border:1px solid var(--line);
  border-radius:10px;
  background:#fff;
}
.medicineHeroMedia img{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}
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
  .homeHealthGrid{grid-template-columns:repeat(2,1fr)}
  .healthIndexHeroGrid{grid-template-columns:1fr;gap:24px}
  .healthCardGrid{grid-template-columns:repeat(3,1fr)}
  .healthDetailGrid{grid-template-columns:300px minmax(0,1fr);gap:34px}
  .medicineHeroGrid{grid-template-columns:minmax(0,1fr) 250px;gap:28px}
  .medicineIndexHeroGrid{grid-template-columns:1fr;gap:26px}
  .medicineIndexTrust{display:grid;grid-template-columns:repeat(3,1fr);gap:0}
  .medicineIndexTrust>div{grid-template-columns:1fr;gap:3px;padding:0 16px;border-bottom:0;border-left:1px solid rgba(255,255,255,.11)}
  .medicineIndexTrust>div:first-child{padding-left:0;border-left:0}
  .medicineIndexTrust>p{grid-column:1/-1;margin-top:16px}
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
  .trustLayout{grid-template-columns:1fr;gap:24px}
  .guideLayout{grid-template-columns:1fr}
  .featuredGuide{min-height:290px}
  .detailGrid{grid-template-columns:minmax(0,1fr) 270px}
}

/* Mobile */
@media(max-width:820px){
  .homeHealthGrid{grid-template-columns:1fr 1fr}
  .homeHealthFoot{align-items:flex-start;flex-direction:column}
  .healthIndexHero{padding:32px 0 27px}
  .healthIndexHero h1{font-size:38px}
  .healthCardGrid{grid-template-columns:repeat(2,1fr)}
  .healthDetailGrid{grid-template-columns:1fr;gap:22px}
  .healthDetailMedia{height:300px}
  .medicineHeroGrid{grid-template-columns:1fr}
  .medicineHeroMedia{height:240px}
  .medicineIndexHero{padding:32px 0 26px}
  .medicineIndexIntro h1{font-size:38px}
  .medicineIndexHeroGrid{gap:22px}
  .medicineIndexTrust{display:block;padding:17px 18px}
  .medicineIndexTrust>div{grid-template-columns:100px 1fr;padding:8px 0;border-left:0;border-bottom:1px solid rgba(255,255,255,.11)}
  .medicineIndexTrust>div:first-child{padding-top:0}
  .medicineIndexBody{padding:24px 0 54px}
  .medicineToolbar{align-items:flex-start;flex-direction:column;gap:5px}
  .medicineCardGrid{grid-template-columns:1fr}
  .medicineCard{min-height:0}
  .medicineIndexNote{grid-template-columns:1fr;gap:10px}
  .institutionInquiryGrid{grid-template-columns:1fr;gap:24px}
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
  .homeHealthGrid,.healthCardGrid{grid-template-columns:1fr}
  .homeHealthMedia{height:210px}
  .healthCardMedia{height:250px}
  .healthDisclaimer{grid-template-columns:1fr;gap:5px}
  .medicineSearch{min-height:46px}
  .medicineSearch button{min-width:100px}
  .medicineCard{padding:18px 17px 15px}
  .medicineCard h2{font-size:18px}
  .medicineCardFacts{grid-template-columns:1fr}
  .medicineCardFacts>div{min-height:0}
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

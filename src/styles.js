export const CSS = `
:root{
  --ink:#0c2830;
  --ink-2:#153b43;
  --paper:#f7f8f5;
  --paper-2:#eef4f1;
  --paper-3:#e5efeb;
  --teal:#0c766c;
  --teal-2:#0f9184;
  --teal-soft:#dff0eb;
  --line:#d7e2df;
  --line-dark:rgba(255,255,255,.14);
  --muted:#64767b;
  --muted-dark:#a9bcc0;
  --white:#fff;
  --rx:#914c46;
  --rx-soft:#f7e8e5;
  --max:1240px;
  --shadow:0 18px 50px rgba(19,53,58,.10);
  --shadow-lg:0 30px 80px rgba(11,43,48,.15);
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  background:var(--paper);
  color:var(--ink);
  font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  line-height:1.58;
  -webkit-font-smoothing:antialiased;
}
a{color:inherit;text-decoration:none}
button,input,select,textarea{font:inherit}
button{cursor:pointer}
.wrap{width:min(var(--max),calc(100% - 56px));margin:auto}

.top{
  position:sticky;top:0;z-index:50;
  border-bottom:1px solid rgba(215,226,223,.92);
  background:rgba(250,252,250,.94);
  backdrop-filter:blur(20px);
}
.bar{height:80px;display:flex;align-items:center;gap:30px}
.brand{
  display:flex;align-items:center;gap:12px;min-width:max-content;
  font-weight:900;letter-spacing:.065em;font-size:13px;
}
.brandMark{
  width:40px;height:40px;border-radius:14px;
  display:grid;place-items:center;
  background:var(--ink);color:#d7f2eb;
  font-size:21px;font-weight:400;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.08);
}
.brand small{
  display:block;margin-top:2px;color:#8a9a9d;
  font-size:8px;letter-spacing:.18em;font-weight:700;
}
.nav{
  display:flex;gap:28px;margin-left:auto;
  font-size:12px;color:#53666c;
}
.nav a{
  padding:30px 0 25px;border-bottom:2px solid transparent;
  transition:.2s ease;
}
.nav a:hover,.nav a.on{color:var(--teal);border-color:var(--teal)}
.headTools{display:flex;gap:8px;align-items:center}
.headSearch,.lang{
  border:1px solid var(--line);background:#fff;
  border-radius:999px;padding:9px 12px;font-size:11px;color:var(--ink);
}
.headSearch:hover{border-color:#b9d1cb;color:var(--teal)}

.hero{
  position:relative;overflow:hidden;
  padding:78px 0 72px;
  background:
    radial-gradient(circle at 12% 10%,rgba(15,145,132,.08),transparent 34%),
    linear-gradient(180deg,#f4f8f5 0%,#f7f8f5 100%);
}
.hero:before{
  content:"";position:absolute;right:-180px;top:-220px;
  width:560px;height:560px;border-radius:50%;
  border:1px solid rgba(12,118,108,.10);
  box-shadow:0 0 0 72px rgba(12,118,108,.026),0 0 0 145px rgba(12,118,108,.018);
  pointer-events:none;
}
.heroGrid{
  position:relative;
  display:grid;grid-template-columns:minmax(0,1.03fr) minmax(420px,.97fr);
  gap:72px;align-items:center;
}
.kicker,.eyebrow{
  font-size:10px;font-weight:900;letter-spacing:.18em;
  text-transform:uppercase;color:var(--teal);
}
.hero h1{
  max-width:760px;margin:18px 0 23px;
  font-size:clamp(52px,6.1vw,78px);
  line-height:.98;letter-spacing:-.06em;
}
.lead{
  max-width:760px;margin:0;
  color:var(--muted);
  font-size:clamp(16px,1.4vw,19px);
  line-height:1.78;
}
.searchBox{
  display:grid;grid-template-columns:1fr auto;gap:8px;
  margin-top:28px;padding:7px;
  border:1px solid #cbdad6;border-radius:15px;
  background:#fff;box-shadow:var(--shadow);
}
.searchBox input{
  min-width:0;border:0;outline:0;background:transparent;
  padding:12px 14px;color:var(--ink);font-size:13px;
}
.searchBox input::placeholder{color:#99a6a7}
.searchBox button,.btn{
  border:0;border-radius:10px;padding:13px 18px;
  background:var(--ink);color:white;
  font-size:12px;font-weight:850;
  letter-spacing:.01em;
}
.searchBox button:hover,.btn:hover{background:var(--teal)}
.btn.teal{background:var(--teal)}
.btn.teal:hover{background:#095f58}
.btn.ghost{background:#fff;color:var(--ink);border:1px solid var(--line)}
.heroMeta{
  display:flex;gap:24px;flex-wrap:wrap;margin-top:23px;
  color:#667a7e;font-size:10px;font-weight:750;
}
.heroMeta span{display:inline-flex;align-items:center;gap:8px}
.heroMeta i{
  width:6px;height:6px;border-radius:50%;background:var(--teal);display:inline-block
}

.route{
  position:relative;overflow:hidden;
  border:0;border-radius:30px;padding:30px 30px 24px;
  background:
    radial-gradient(circle at 82% 16%,rgba(69,184,167,.17),transparent 30%),
    linear-gradient(145deg,#102f37,#0b242c);
  color:white;box-shadow:var(--shadow-lg);
}
.route:before{
  content:"JP";position:absolute;right:18px;top:-16px;
  font-size:116px;line-height:1;font-weight:900;letter-spacing:-.08em;
  color:rgba(255,255,255,.035);pointer-events:none;
}
.route:after{
  content:"";position:absolute;right:-60px;bottom:-80px;
  width:230px;height:230px;border-radius:50%;
  border:1px solid rgba(112,211,195,.12);
  box-shadow:0 0 0 40px rgba(112,211,195,.025),0 0 0 80px rgba(112,211,195,.018);
}
.routeTitle{
  position:relative;z-index:1;
  font-size:11px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;
  color:#9fd5cc;margin-bottom:14px;
}
.routeRow{
  position:relative;z-index:1;
  display:grid;grid-template-columns:38px 1fr 28px;gap:12px;
  padding:18px 5px;border-top:1px solid rgba(255,255,255,.13);
  align-items:center;transition:.2s ease;
}
.routeRow:hover{padding-left:10px;background:rgba(255,255,255,.025)}
.routeNo{font-size:10px;color:#74a49e}
.routeRow strong{display:block;font-size:15px;letter-spacing:-.01em}
.routeRow small{
  display:block;margin-top:4px;
  color:#9fb1b5;font-size:11px;line-height:1.45;
}
.routeRow b{color:#83d7c9;font-size:18px}

.section{padding:96px 0;position:relative}
.sectionHead{
  display:flex;justify-content:space-between;gap:44px;align-items:flex-end;
  margin-bottom:40px;
}
.sectionHead h2{
  margin:0;
  font-size:clamp(36px,4.3vw,58px);
  line-height:1.03;letter-spacing:-.052em;
}
.sectionHead p{
  max-width:590px;margin:0 0 4px;
  color:var(--muted);font-size:14px;line-height:1.8;
}
.textLink{
  display:inline-flex;align-items:center;gap:8px;
  color:var(--teal);font-size:11px;font-weight:900;
  text-transform:uppercase;letter-spacing:.08em;
}

.strength{
  background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line);
}
.strength:after{
  content:"JAPAN MEDICINE";
  position:absolute;right:5vw;top:72px;
  color:#eef3f1;font-size:72px;font-weight:900;letter-spacing:-.06em;
  pointer-events:none;
}
.strength .sectionHead{position:relative;z-index:1}
.strengthList{
  display:grid;grid-template-columns:repeat(2,1fr);gap:18px;
  border:0;
}
.strengthRow{
  position:relative;overflow:hidden;
  display:grid;grid-template-columns:58px 1fr;
  gap:10px 22px;padding:30px;
  border:1px solid var(--line);border-radius:22px;
  background:linear-gradient(180deg,#fff,#fbfcfa);
  transition:.25s ease;
}
.strengthRow:hover{transform:translateY(-3px);box-shadow:var(--shadow)}
.strengthRow:after{
  content:"";position:absolute;right:-22px;bottom:-28px;
  width:100px;height:100px;border-radius:50%;
  border:1px solid rgba(12,118,108,.09);
}
.strengthRow span{
  grid-row:1/3;
  font-size:11px;color:#8ea19e;font-weight:800;letter-spacing:.08em;
}
.strengthRow h3{
  margin:0;font-size:24px;line-height:1.18;letter-spacing:-.032em;
}
.strengthRow p{
  margin:4px 0 0;color:var(--muted);
  font-size:13px;line-height:1.75;max-width:560px;
}

.database{
  overflow:hidden;background:#0a2830;color:#f5fbfa;
}
.database:before{
  content:"";position:absolute;left:-140px;top:-130px;
  width:420px;height:420px;border-radius:50%;
  background:radial-gradient(circle,rgba(42,152,137,.16),transparent 68%);
}
.database .sectionHead,.database .dbPanel{position:relative;z-index:1}
.database .eyebrow{color:#7fd0c4}
.database .sectionHead p{color:#9fb4b9}
.dbPanel{
  display:grid;grid-template-columns:360px minmax(0,1fr);gap:22px;
  align-items:stretch;
}
.dbSearch{
  border:1px solid rgba(255,255,255,.12);
  border-radius:24px;padding:28px;
  background:linear-gradient(180deg,#123944,#10333c);
}
.dbSearch h3{margin:0 0 8px;font-size:24px;letter-spacing:-.03em}
.dbSearch p{margin:0;color:#adc1c5;font-size:12px}
.dbSearch .searchBox{margin-top:23px;box-shadow:none;border-color:rgba(255,255,255,.14)}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}
.chip{
  display:inline-flex;padding:7px 10px;border-radius:999px;
  border:1px solid rgba(255,255,255,.13);
  color:#d8e5e6;font-size:10px;transition:.2s;
}
.chip:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.24)}
.medicineRows{
  border:1px solid rgba(255,255,255,.11);border-radius:24px;
  overflow:hidden;background:rgba(255,255,255,.025);
}
.medicineRow{
  display:grid;grid-template-columns:1.45fr .8fr .42fr 28px;
  gap:18px;align-items:center;
  padding:20px 22px;
  border-bottom:1px solid rgba(255,255,255,.09);
  transition:.2s ease;
}
.medicineRow:last-child{border-bottom:0}
.medicineRow:hover{background:rgba(255,255,255,.04)}
.medicineRow strong{font-size:14px}
.medicineRow small{
  display:block;margin-top:3px;
  color:#8fa9af;font-size:10px;
}
.area{font-size:10px;color:#bacbce}
.rxTag{
  justify-self:start;
  padding:5px 8px;border-radius:999px;
  border:1px solid rgba(242,154,147,.16);
  background:rgba(173,85,78,.14);
  color:#efb5af;font-size:9px;font-weight:800;
}
.medicineRow b{color:#76d0c3}

.whyGrid{
  display:grid;grid-template-columns:repeat(4,1fr);gap:16px;
}
.whyItem{
  min-height:220px;padding:27px 26px 24px;
  border:1px solid var(--line);border-radius:20px;
  background:#fff;position:relative;overflow:hidden;
}
.whyItem:before{
  content:"";position:absolute;left:0;top:0;width:100%;height:4px;background:var(--teal);
  opacity:.75;
}
.whyItem span{
  display:block;color:#8aa29f;
  font-size:10px;font-weight:900;letter-spacing:.12em;
}
.whyItem h3{
  margin:38px 0 10px;
  font-size:21px;line-height:1.2;letter-spacing:-.028em;
}
.whyItem p{margin:0;color:var(--muted);font-size:12px;line-height:1.72}

.guides{background:#edf3f0}
.guideLayout{display:grid;grid-template-columns:1.1fr .9fr;gap:24px}
.featuredGuide{
  position:relative;overflow:hidden;
  min-height:420px;padding:38px;
  border-radius:28px;border:0;
  background:
    radial-gradient(circle at 85% 15%,rgba(93,205,186,.18),transparent 30%),
    linear-gradient(145deg,#10333b,#0c282f);
  color:#fff;box-shadow:var(--shadow-lg);
  display:flex;flex-direction:column;justify-content:space-between;
}
.featuredGuide:after{
  content:"01";position:absolute;right:22px;bottom:-16px;
  font-size:150px;line-height:1;font-weight:900;
  color:rgba(255,255,255,.045);letter-spacing:-.08em;
}
.featuredGuide .eyebrow{color:#8fd8cd}
.featuredGuide h3{
  max-width:620px;margin:18px 0 14px;
  font-size:38px;line-height:1.08;letter-spacing:-.045em;
}
.featuredGuide p{
  max-width:620px;margin:0;color:#afc3c6;line-height:1.75;font-size:13px;
}
.featuredGuide .textLink{color:#a7e2d9}
.guideList{
  overflow:hidden;border:1px solid var(--line);border-radius:28px;background:#fff;
}
.guideRow{
  display:grid;grid-template-columns:1fr 28px;gap:18px;
  min-height:132px;padding:24px 26px;
  border-bottom:1px solid var(--line);
  align-items:center;transition:.2s;
}
.guideRow:last-child{border-bottom:0}
.guideRow:hover{background:#f8fbf9}
.guideRow h3{
  margin:0 0 8px;
  font-size:18px;line-height:1.25;letter-spacing:-.02em;
}
.guideRow p{margin:0;color:var(--muted);font-size:11px;line-height:1.65}
.guideRow b{color:var(--teal)}

.travelGrid{display:grid;grid-template-columns:.82fr 1.18fr;gap:26px;align-items:stretch}
.timeline{
  margin:0;border:0;border-radius:26px;padding:30px 30px 12px;
  background:var(--ink);color:white;box-shadow:var(--shadow);
}
.step{
  position:relative;padding:0 0 27px 36px;
  border-left:1px solid rgba(255,255,255,.13);
}
.step:last-child{padding-bottom:12px}
.step:before{
  content:"";position:absolute;left:-5px;top:5px;
  width:9px;height:9px;border-radius:50%;background:#73d1c2;
  box-shadow:0 0 0 6px rgba(115,209,194,.08);
}
.step strong{font-size:14px}
.step p{
  margin:6px 0 0;color:#a9bdc1;
  font-size:11px;line-height:1.65;
}
.hospitalPreview{
  border:1px solid var(--line);border-radius:26px;overflow:hidden;background:#fff;
}
.hospitalRow{
  display:grid;grid-template-columns:1fr 88px 24px;gap:18px;
  align-items:center;padding:22px 24px;border-bottom:1px solid var(--line);
  transition:.2s;
}
.hospitalRow:last-child{border-bottom:0}
.hospitalRow:hover{background:#f8fbf9}
.hospitalRow strong{font-size:14px}
.hospitalRow small{
  display:block;margin-top:4px;color:var(--muted);
  font-size:10px;line-height:1.5;
}
.hospitalRow span{font-size:10px;color:var(--teal);font-weight:850}

.inquirySection{
  background:linear-gradient(180deg,#e6f1ed,#eef5f2);
  border-top:1px solid #d8e6e1;border-bottom:1px solid #d8e6e1;
}
.inquirySplit{
  display:grid;grid-template-columns:1fr 1fr;
  gap:16px;border:0;background:transparent;
}
.inquiryCard{
  min-height:340px;padding:34px;
  border:1px solid #cadbd6;border-radius:24px;background:#fff;
  box-shadow:0 10px 30px rgba(33,70,72,.05);
}
.inquiryCard+ .inquiryCard{border-left:1px solid #cadbd6}
.inquiryCard:nth-child(2){
  background:var(--ink);color:white;border-color:var(--ink);
}
.inquiryCard:nth-child(2) .eyebrow{color:#7ed0c2}
.inquiryCard:nth-child(2) p,.inquiryCard:nth-child(2) ul{color:#a9bdc1}
.inquiryCard h3{
  margin:14px 0 12px;
  font-size:28px;line-height:1.15;letter-spacing:-.036em;
}
.inquiryCard p{margin:0;color:var(--muted);min-height:78px;font-size:13px;line-height:1.7}
.inquiryCard ul{padding-left:17px;margin:18px 0 24px;color:#53666c;font-size:12px;line-height:1.85}
.rxNote{
  margin-top:18px;padding:18px 20px;
  border:1px solid #ecd7d2;border-left:4px solid var(--rx);
  border-radius:14px;background:#fff9f7;color:#76534e;font-size:11px;
}

.rxShowcase{background:#fff}
.rxTable{
  display:grid;grid-template-columns:repeat(4,1fr);gap:14px;
  border:0;
}
.rxItem{
  position:relative;overflow:hidden;
  min-height:260px;padding:22px;
  border:1px solid var(--line);border-radius:20px;
  background:linear-gradient(180deg,#fff,#f9fbf9);
  display:flex;flex-direction:column;align-items:flex-start;gap:0;
  transition:.25s ease;
}
.rxItem:hover{transform:translateY(-4px);box-shadow:var(--shadow)}
.rxGlyph{
  width:58px;height:42px;margin-bottom:34px;
  border-radius:10px;border:1px solid #cfe0dc;
  background:var(--teal-soft);display:grid;place-items:center;
  color:var(--teal);font-size:10px;font-weight:900;letter-spacing:.08em;
}
.rxItem>div:nth-child(2){min-height:74px}
.rxItem strong{font-size:14px;line-height:1.35}
.rxItem small{
  display:block;margin-top:4px;color:var(--muted);
  font-size:10px;line-height:1.45;
}
.rxItem .area{margin-top:20px;color:#5b7075;font-size:10px}
.rxItem .rxTag{position:absolute;top:22px;right:22px;color:#8d514a;background:var(--rx-soft);border-color:#ead0cb}
.rxItem b{
  margin-top:auto;align-self:flex-end;
  width:30px;height:30px;border-radius:50%;
  display:grid;place-items:center;background:var(--ink);color:#fff;
}

.pageHero{
  position:relative;overflow:hidden;
  padding:78px 0 58px;
  background:
    radial-gradient(circle at 85% 10%,rgba(12,118,108,.08),transparent 30%),
    #f4f8f5;
  border-bottom:1px solid var(--line);
}
.pageHero h1{
  max-width:900px;margin:16px 0 18px;
  font-size:clamp(46px,5.5vw,70px);
  line-height:1.02;letter-spacing:-.055em;
}
.pageHero p{
  max-width:820px;margin:0;color:var(--muted);
  font-size:15px;line-height:1.8;
}
.pageHero .searchBox{max-width:800px}
.content{padding:72px 0 100px}
.filters{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 28px}
.filter{
  padding:9px 13px;border-radius:999px;
  border:1px solid var(--line);background:#fff;
  font-size:10px;font-weight:780;
}
.filter.on{background:var(--ink);color:#fff;border-color:var(--ink)}
.medicineTable{
  overflow:hidden;border:1px solid var(--line);border-radius:22px;background:#fff;
}
.medicineTable .medicineRow{
  color:var(--ink);border-color:var(--line);
  grid-template-columns:1.3fr .8fr .55fr .3fr 28px;
  padding:20px 22px;
}
.medicineTable .medicineRow small{color:var(--muted)}
.medicineTable .area{color:#566d72}
.medicineTable .rxTag{color:#8d514a;background:var(--rx-soft);border-color:#ead0cb}
.medicineTable .medicineRow b{color:var(--teal)}

.detailGrid{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:34px}
.factList{
  overflow:hidden;margin:0;border:1px solid var(--line);border-radius:20px;background:#fff;
}
.fact{
  display:grid;grid-template-columns:190px 1fr;gap:22px;
  padding:17px 20px;border-bottom:1px solid var(--line);
}
.fact:last-child{border-bottom:0}
.fact dt{font-size:10px;color:var(--muted);font-weight:800;text-transform:uppercase;letter-spacing:.06em}
.fact dd{margin:0;font-size:14px;font-weight:750}
.sideNote{
  position:sticky;top:106px;
  border:1px solid #e8d7d2;border-radius:20px;padding:24px;
  background:#fff9f7;box-shadow:0 12px 34px rgba(87,54,48,.06);
}
.sideNote strong{color:#81483f}
.sideNote p{font-size:12px;color:#765b56;line-height:1.7}
.sourceBox{
  margin-top:24px;padding:24px;border-radius:20px;
  border:1px solid var(--line);background:#f2f6f4;
}
.sourceBox p{color:var(--muted);font-size:12px;line-height:1.7}
.sourceBox a{color:var(--teal);font-weight:850;font-size:12px}

.article{max-width:860px}
.articleMeta{
  display:flex;gap:18px;flex-wrap:wrap;
  margin-bottom:32px;color:var(--muted);font-size:10px;
}
.article h2{
  margin:44px 0 14px;
  font-size:32px;line-height:1.15;letter-spacing:-.036em;
}
.article p{color:#455a60;line-height:1.9;font-size:15px}
.articleFooter{margin-top:54px;padding-top:26px;border-top:1px solid var(--line)}

.hospitalGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.hospitalCard{
  padding:26px;border:1px solid var(--line);border-radius:20px;background:#fff;
  transition:.22s;
}
.hospitalCard:hover{transform:translateY(-3px);box-shadow:var(--shadow)}
.hospitalCard h3{margin:0 0 6px;font-size:20px;letter-spacing:-.025em}
.hospitalCard p{color:var(--muted);font-size:12px;line-height:1.7}
.hospitalMeta{display:flex;gap:8px;flex-wrap:wrap}
.hospitalMeta span{font-size:9px;padding:5px 8px;background:var(--paper-2);border-radius:999px}
.hospitalCard a{display:inline-block;margin-top:16px;color:var(--teal);font-weight:850;font-size:11px}

.sourceHierarchy{counter-reset:src}
.sourceLevel{
  display:grid;grid-template-columns:56px .78fr 1.22fr;gap:30px;
  padding:28px 0;border-top:1px solid var(--line);
}
.sourceLevel:before{
  counter-increment:src;content:"0" counter(src);
  font-size:10px;color:#91a19f;font-weight:850;
}
.sourceLevel h3{margin:0;font-size:22px;letter-spacing:-.02em}
.sourceLevel p{margin:0;color:var(--muted);font-size:13px;line-height:1.75}
.sourceLinks{
  margin-top:36px;border:1px solid var(--line);border-radius:18px;overflow:hidden;background:#fff;
}
.sourceLink{
  display:flex;justify-content:space-between;gap:20px;
  padding:18px 20px;border-top:1px solid var(--line);
}
.sourceLink:first-child{border-top:0}
.sourceLink small{color:var(--muted)}
.sourceLink b{color:var(--teal)}

.formGrid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.field label{display:block;font-size:10px;font-weight:850;margin-bottom:7px;color:#52676b}
.field input,.field select,.field textarea{
  width:100%;border:1px solid var(--line);border-radius:12px;
  padding:12px;background:#fff;outline:none;
}
.field input:focus,.field select:focus,.field textarea:focus{border-color:#9bc3bb;box-shadow:0 0 0 3px rgba(12,118,108,.07)}
.field textarea{min-height:120px;resize:vertical}
.field.full{grid-column:1/-1}
.formNote{font-size:10px;color:var(--muted);margin:12px 0 0}
.generated{
  display:none;margin-top:22px;padding:18px;
  border:1px dashed #9fb8b3;border-radius:14px;
  background:var(--paper-2);white-space:pre-wrap;font-size:12px;
}

.foot{
  background:#0b252c;color:#eef5f4;
  padding:64px 0 28px;
}
.footGrid{display:grid;grid-template-columns:1.25fr .75fr;gap:70px}
.foot p{max-width:680px;color:#93a9ad;font-size:10px;line-height:1.75}
.footLinks{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.footLinks a{display:block;color:#b3c3c6;font-size:11px;margin:9px 0}
.footLinks a:hover{color:#fff}
.footBottom{
  display:flex;justify-content:space-between;
  margin-top:34px;padding-top:18px;border-top:1px solid rgba(255,255,255,.1);
  color:#677f84;font-size:9px;
}

@media(max-width:1080px){
  .nav{display:none}
  .heroGrid,.dbPanel,.guideLayout,.travelGrid,.detailGrid{grid-template-columns:1fr}
  .route{margin-top:6px}
  .strengthList{grid-template-columns:1fr 1fr}
  .whyGrid{grid-template-columns:repeat(2,1fr)}
  .rxTable{grid-template-columns:repeat(2,1fr)}
  .sideNote{position:static}
  .hospitalGrid{grid-template-columns:1fr}
}
@media(max-width:760px){
  .wrap{width:min(var(--max),calc(100% - 28px))}
  .bar{height:68px}
  .brandMark{width:36px;height:36px}
  .headSearch{display:none}
  .hero{padding:52px 0 44px}
  .heroGrid{gap:34px}
  .hero h1{font-size:clamp(42px,13vw,60px)}
  .lead{font-size:15px}
  .heroMeta{gap:12px}
  .route{padding:24px 22px;border-radius:24px}
  .searchBox{grid-template-columns:1fr}
  .section{padding:68px 0}
  .sectionHead{display:block;margin-bottom:28px}
  .sectionHead h2{font-size:38px}
  .sectionHead p{margin-top:13px}
  .strength:after{display:none}
  .strengthList{grid-template-columns:1fr}
  .strengthRow{grid-template-columns:42px 1fr;padding:24px}
  .dbPanel{gap:14px}
  .dbSearch{padding:22px}
  .medicineRow,.medicineTable .medicineRow{grid-template-columns:1fr 24px}
  .medicineRow .area,.medicineRow .rxTag,.medicineTable .medicineRow .area,.medicineTable .medicineRow .rxTag{display:none}
  .whyGrid{grid-template-columns:1fr}
  .whyItem{min-height:auto}
  .guideLayout{gap:14px}
  .featuredGuide{min-height:360px;padding:28px}
  .featuredGuide h3{font-size:31px}
  .travelGrid{gap:14px}
  .timeline{padding:26px 24px 10px}
  .hospitalRow{grid-template-columns:1fr 24px;padding:20px}
  .hospitalRow span{display:none}
  .inquirySplit{grid-template-columns:1fr}
  .inquiryCard+ .inquiryCard{border-left:1px solid #cadbd6}
  .inquiryCard{min-height:auto;padding:28px}
  .rxTable{grid-template-columns:1fr}
  .rxItem{min-height:230px}
  .pageHero{padding:56px 0 40px}
  .pageHero h1{font-size:44px}
  .fact{grid-template-columns:1fr;gap:5px}
  .sourceLevel{grid-template-columns:40px 1fr}
  .sourceLevel p{grid-column:2}
  .formGrid,.footGrid{grid-template-columns:1fr}
  .footLinks{grid-template-columns:1fr 1fr}
}


/* editorial media layer */
.heroGrid{grid-template-columns:minmax(0,.94fr) minmax(480px,1.06fr);gap:76px}
.heroStage{position:relative;min-height:630px}
.heroPhoto{
  position:absolute;inset:0 0 58px 32px;margin:0;
  overflow:hidden;border-radius:32px;
  background:#dfe9e5;box-shadow:0 34px 90px rgba(10,38,45,.16);
}
.heroPhoto img{
  width:100%;height:100%;display:block;object-fit:cover;object-position:center;
  filter:saturate(.82) contrast(1.03);
  transform:scale(1.015);
}
.heroPhotoVeil{
  position:absolute;inset:0;
  background:
    linear-gradient(180deg,rgba(5,31,37,.02),rgba(5,31,37,.22)),
    linear-gradient(90deg,rgba(8,38,45,.10),transparent 48%);
}
.heroPhoto figcaption{
  position:absolute;left:26px;right:26px;top:24px;
  display:flex;justify-content:space-between;gap:20px;align-items:flex-start;
  color:#fff;text-shadow:0 2px 16px rgba(0,0,0,.25);
}
.heroPhoto figcaption span{
  font-size:9px;font-weight:900;letter-spacing:.16em;
}
.heroPhoto figcaption strong{
  max-width:250px;text-align:right;font-size:12px;line-height:1.45;
}
.heroStage .route{
  position:absolute;left:-54px;right:26px;bottom:0;z-index:4;
  border-radius:24px;padding:22px 24px 18px;
}
.heroStage .routeRow{padding:14px 4px}
.heroStage .routeTitle{margin-bottom:8px}
.heroStage .route:before{font-size:88px;top:-8px}

.strengthMedia{
  display:grid;grid-template-columns:1.28fr .72fr;gap:18px;
  margin:10px 0 24px;
}
.strengthPhoto{
  position:relative;overflow:hidden;margin:0;height:470px;border-radius:26px;
  background:#d9e5e1;
}
.strengthPhoto img{
  width:100%;height:100%;display:block;object-fit:cover;object-position:center;
  filter:saturate(.78) contrast(1.02);
}
.strengthManifesto{
  min-height:470px;border-radius:26px;padding:34px;
  display:flex;flex-direction:column;justify-content:space-between;
  background:
    radial-gradient(circle at 75% 18%,rgba(94,207,188,.17),transparent 32%),
    var(--ink);
  color:#fff;box-shadow:var(--shadow);
}
.manifestoNo{
  font-size:112px;line-height:.82;font-weight:900;letter-spacing:-.075em;
  color:rgba(255,255,255,.09);
}
.strengthManifesto .eyebrow{color:#79d0c2}
.strengthManifesto strong{
  display:block;margin-top:12px;
  font-size:25px;line-height:1.18;letter-spacing:-.035em;
}
.strength .strengthList{
  grid-template-columns:repeat(4,1fr);gap:18px;
}
.strength .strengthRow{
  display:block;min-height:205px;padding:24px 18px 0 0;
  border:0;border-top:1px solid var(--line);border-radius:0;
  background:transparent;box-shadow:none;transform:none;
}
.strength .strengthRow:hover{box-shadow:none;transform:none}
.strength .strengthRow:after{display:none}
.strength .strengthRow span{
  display:block;margin-bottom:42px;
  font-size:9px;letter-spacing:.14em;color:#8da09d;
}
.strength .strengthRow h3{
  margin:0 0 10px;font-size:20px;line-height:1.18;
}
.strength .strengthRow p{
  margin:0;font-size:11px;line-height:1.65;
}

.trustSection{
  overflow:hidden;background:
    linear-gradient(180deg,#fbfcfa,#f5f8f6);
}
.trustSection:before{
  content:"SOURCE / CLARITY / PATHWAY";
  position:absolute;left:50%;top:48px;transform:translateX(-50%);
  width:max-content;
  font-size:clamp(46px,7vw,108px);font-weight:900;letter-spacing:-.06em;
  color:#edf2f0;pointer-events:none;
}
.trustSection .wrap{position:relative;z-index:1}
.trustSection .whyGrid{gap:1px;background:var(--line);border:1px solid var(--line);border-radius:24px;overflow:hidden}
.trustSection .whyItem{
  border:0;border-radius:0;min-height:270px;
  padding:30px;background:#fff;
}
.trustSection .whyItem:before{height:3px}
.trustSection .whyItem h3{margin-top:58px;font-size:23px}
.trustSection .whyItem p{font-size:12px}

.featuredGuide{
  background:#0d2b32;
}
.featuredGuide:before{
  content:"";position:absolute;inset:0;
  background:
    linear-gradient(90deg,rgba(8,35,41,.92) 0%,rgba(8,35,41,.76) 44%,rgba(8,35,41,.18) 100%),
    url("https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?auto=format&fit=crop&q=72&w=1400") center/cover no-repeat;
  opacity:.92;
}
.featuredGuide>*,.featuredGuide .eyebrow{position:relative;z-index:2}

.travelGrid{grid-template-columns:.88fr 1.12fr;gap:22px;align-items:start}
.travelVisual{
  position:sticky;top:104px;overflow:hidden;
  min-height:620px;border-radius:28px;
  background:#173c43;box-shadow:var(--shadow-lg);
}
.travelVisual img{
  position:absolute;inset:0;width:100%;height:100%;
  object-fit:cover;object-position:center;display:block;
  filter:saturate(.72) brightness(.76) contrast(1.06);
}
.travelVisual:after{
  content:"";position:absolute;inset:0;
  background:linear-gradient(180deg,rgba(6,30,36,.05) 20%,rgba(6,30,36,.82) 100%);
}
.travelVisualCopy{
  position:absolute;z-index:2;left:30px;right:30px;bottom:30px;
  color:#fff;
}
.travelVisualCopy span{
  display:block;margin-bottom:12px;color:#9ad9cf;
  font-size:9px;font-weight:900;letter-spacing:.16em;
}
.travelVisualCopy strong{
  display:block;max-width:440px;
  font-size:28px;line-height:1.14;letter-spacing:-.035em;
}
.travelFlow{display:grid;gap:16px}
.travelFlow .timeline{min-height:auto}
.travelFlow .hospitalPreview{min-height:320px}

.rxItem:before{
  content:"";position:absolute;left:22px;top:84px;width:56px;height:10px;
  border-radius:999px;background:linear-gradient(90deg,#d5eae4 0 44%,#8abfb4 44% 52%,#edf4f1 52%);
  opacity:.92;
}
.rxItem:after{
  content:"";position:absolute;left:28px;top:87px;width:5px;height:5px;border-radius:50%;
  background:#fff;box-shadow:15px 0 0 #fff,30px 0 0 rgba(255,255,255,.8);
}
.rxGlyph{margin-bottom:54px}

@supports(animation-timeline:view()){
  .heroPhoto img{
    animation:tm-photo-drift linear both;
    animation-timeline:scroll(root block);
    animation-range:0 90vh;
  }
  .strengthPhoto img,.travelVisual img{
    animation:tm-media-pan linear both;
    animation-timeline:view(block);
    animation-range:entry 0% exit 100%;
  }
  @keyframes tm-photo-drift{
    from{transform:scale(1.04) translateY(0)}
    to{transform:scale(1.10) translateY(28px)}
  }
  @keyframes tm-media-pan{
    from{transform:scale(1.06) translateY(-12px)}
    to{transform:scale(1.12) translateY(18px)}
  }
}

@media(max-width:1080px){
  .heroGrid{grid-template-columns:1fr}
  .heroStage{min-height:720px}
  .heroPhoto{left:0;right:0;bottom:110px}
  .heroStage .route{left:34px;right:34px;bottom:0}
  .strengthMedia{grid-template-columns:1fr}
  .strengthPhoto{height:430px}
  .strengthManifesto{min-height:300px}
  .strength .strengthList{grid-template-columns:repeat(2,1fr)}
  .travelVisual{position:relative;top:auto;min-height:520px}
}
@media(max-width:760px){
  .heroStage{min-height:720px}
  .heroPhoto{height:460px;bottom:auto;inset:0 0 auto 0}
  .heroPhoto figcaption{left:18px;right:18px;top:18px;display:block}
  .heroPhoto figcaption strong{display:block;text-align:left;margin-top:8px;max-width:270px}
  .heroStage .route{left:14px;right:14px;bottom:0}
  .strengthPhoto{height:340px}
  .strengthManifesto{min-height:280px;padding:26px}
  .manifestoNo{font-size:90px}
  .strengthManifesto strong{font-size:22px}
  .strength .strengthList{grid-template-columns:1fr 1fr}
  .strength .strengthRow{min-height:190px}
  .trustSection .whyGrid{grid-template-columns:1fr}
  .trustSection .whyItem{min-height:220px}
  .travelVisual{min-height:480px}
  .travelVisualCopy{left:24px;right:24px;bottom:24px}
  .travelVisualCopy strong{font-size:24px}
}

/* 2026 progressive-enhancement layer */
html{scrollbar-gutter:stable}
h1,h2,h3{text-wrap:balance}
p{overflow-wrap:anywhere;text-wrap:pretty}
.section,.content{content-visibility:auto;contain-intrinsic-size:auto 820px}
.database .wrap{container:medicine-db / inline-size}
.guides .wrap{container:guide-module / inline-size}
.inquirySection .wrap{container:inquiry-module / inline-size}
.rxShowcase .wrap{container:rx-module / inline-size}

@view-transition{navigation:auto}
.top{view-transition-name:site-header}
.brand{view-transition-name:site-brand}
.hero h1,.pageHero h1{view-transition-name:page-title}
::view-transition-group(site-header),
::view-transition-group(site-brand),
::view-transition-group(page-title){animation-duration:.48s;animation-timing-function:cubic-bezier(.22,1,.36,1)}
::view-transition-old(root){animation:tm-root-out .26s ease both}
::view-transition-new(root){animation:tm-root-in .42s cubic-bezier(.22,1,.36,1) both}
@keyframes tm-root-out{to{opacity:0;filter:blur(4px);transform:scale(.995)}}
@keyframes tm-root-in{from{opacity:0;filter:blur(5px);transform:translateY(8px)}}

@property --route-angle{
  syntax:"<angle>";
  inherits:false;
  initial-value:0deg;
}
.route{
  --route-angle:0deg;
  background:
    radial-gradient(circle at 82% 16%,rgba(69,184,167,.18),transparent 30%),
    conic-gradient(from var(--route-angle) at 82% 18%,transparent 0 74%,rgba(126,224,208,.08) 79%,transparent 86%),
    linear-gradient(145deg,#102f37,#0b242c);
  animation:route-aura 16s linear infinite;
}
@keyframes route-aura{to{--route-angle:360deg}}

@scope (.route){
  :scope:has(.routeRow:hover){box-shadow:0 34px 100px rgba(7,37,42,.22)}
  .routeRow:focus-visible{outline:2px solid #8dd9ce;outline-offset:6px;border-radius:12px}
}

.headTools{anchor-scope:--search-anchor;position:relative}
.headSearch{anchor-name:--search-anchor}
.searchContext{display:none}
@supports(anchor-name:--tm-anchor){
  .searchContext{
    display:block;
    position:fixed;
    position-anchor:--search-anchor;
    position-area:bottom;
    position-try-fallbacks:flip-block,flip-inline;
    width:max-content;max-width:260px;
    padding:8px 10px;margin:8px;
    border:1px solid rgba(215,226,223,.96);
    border-radius:10px;
    background:rgba(11,37,44,.96);color:#d9eeea;
    box-shadow:0 12px 34px rgba(8,32,37,.2);
    font-size:9px;font-weight:800;letter-spacing:.06em;
    opacity:0;translate:0 -5px;scale:.98;
    pointer-events:none;
    transition:opacity .18s ease,translate .18s ease,scale .18s ease;
    z-index:80;
  }
  .headTools:has(.headSearch:hover) .searchContext,
  .headTools:has(.headSearch:focus-visible) .searchContext{
    opacity:1;translate:0 0;scale:1;
  }
}

.top{container-type:scroll-state;container-name:sitebar}
@container sitebar scroll-state(stuck:top){
  .bar{height:66px}
  .brand small{opacity:.38}
  .top{box-shadow:0 12px 34px rgba(17,50,56,.07)}
}

@supports(animation-timeline:scroll()){
  .top::after{
    content:"";
    position:absolute;left:0;right:0;bottom:-1px;height:2px;
    background:linear-gradient(90deg,#0c766c,#76cfc0);
    transform-origin:left;transform:scaleX(0);
    animation-name:tm-scroll-progress;
    animation-timing-function:linear;
    animation-fill-mode:both;
    animation-timeline:scroll(root block);
  }
  @keyframes tm-scroll-progress{to{transform:scaleX(1)}}
}

@supports(animation-timeline:view()){
  .sectionHead,
  .strengthRow,
  .whyItem,
  .guideRow,
  .hospitalRow,
  .inquiryCard,
  .rxItem,
  .hospitalCard,
  .sourceLevel{
    animation-name:tm-reveal;
    animation-fill-mode:both;
    animation-timeline:view(block);
    animation-range:entry 8% cover 32%;
  }
  .featuredGuide,.timeline,.dbSearch{
    animation-name:tm-reveal-scale;
    animation-fill-mode:both;
    animation-timeline:view(block);
    animation-range:entry 6% cover 36%;
  }
  .hero:before{
    animation-name:tm-hero-orbit;
    animation-fill-mode:both;
    animation-timeline:scroll(root block);
    animation-range:0 85vh;
  }
  @keyframes tm-reveal{
    from{opacity:.15;transform:translateY(28px);filter:blur(5px)}
    to{opacity:1;transform:none;filter:none}
  }
  @keyframes tm-reveal-scale{
    from{opacity:.2;transform:translateY(24px) scale(.975)}
    to{opacity:1;transform:none}
  }
  @keyframes tm-hero-orbit{
    from{transform:translate3d(0,0,0) scale(1)}
    to{transform:translate3d(-28px,36px,0) scale(1.05)}
  }
}

@container medicine-db (max-width:860px){
  .dbPanel{grid-template-columns:1fr}
  .dbSearch{display:grid;grid-template-columns:1fr 1fr;gap:12px 20px}
  .dbSearch h3,.dbSearch p{grid-column:1/-1}
  .dbSearch .searchBox,.dbSearch .chips{margin-top:0}
}
@container guide-module (max-width:860px){
  .guideLayout{grid-template-columns:1fr}
  .featuredGuide{min-height:350px}
}
@container inquiry-module (max-width:760px){
  .inquirySplit{grid-template-columns:1fr}
}
@container rx-module (max-width:920px){
  .rxTable{grid-template-columns:repeat(2,1fr)}
}
@container rx-module (max-width:520px){
  .rxTable{grid-template-columns:1fr}
}

.field textarea{field-sizing:content;min-height:120px}

@media(prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;scroll-behavior:auto!important}
  @view-transition{navigation:none}
}
@media(prefers-reduced-data:reduce){
  .route{animation:none}
}

`;

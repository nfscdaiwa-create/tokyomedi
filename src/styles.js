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


/* Brand + information architecture refinement */
.brand{gap:13px;letter-spacing:0}
.brandSymbol{width:44px;height:44px;display:block;flex:0 0 44px}
.brandSymbol svg{width:100%;height:100%;display:block}
.logoBg{fill:var(--ink)}
.logoLine{
  fill:none;stroke:#ecf7f4;stroke-width:2.25;
  stroke-linecap:round;stroke-linejoin:round;
}
.logoDot{fill:#d96c5d}
.wordmark{display:block;line-height:1}
.wordTop{display:flex;align-items:baseline;gap:5px}
.wordTop b{
  font-size:13px;line-height:1;font-weight:900;letter-spacing:.085em;
}
.wordTop b:last-child{color:var(--teal)}
.wordmark small{
  display:block;margin-top:5px;
  color:#85969a;font-size:7px;font-weight:800;letter-spacing:.19em;
}
.brand:hover .brandSymbol{transform:rotate(-2deg) translateY(-1px)}
.brandSymbol{transition:transform .22s cubic-bezier(.22,1,.36,1)}
.footBrand .logoBg{fill:#eef7f4}
.footBrand .logoLine{stroke:#14343b}
.footBrand .logoDot{fill:#d96c5d}
.footBrand .wordTop b{color:#eef6f4}
.footBrand .wordTop b:last-child{color:#87d4c7}
.footBrand .wordmark small{color:#80989c}

.sourceRail{
  background:#0b2931;color:#e7f1ef;
  border-top:1px solid rgba(255,255,255,.04);
  border-bottom:1px solid rgba(255,255,255,.06);
}
.sourceRailInner{
  min-height:92px;display:flex;align-items:center;justify-content:space-between;gap:40px;
}
.sourceRailLead{
  max-width:320px;color:#9eb4b8;
  font-size:10px;line-height:1.65;font-weight:760;letter-spacing:.03em;
}
.sourceRailMarks{display:flex;align-items:stretch;gap:0;margin-left:auto}
.sourceRailMarks span{
  min-width:170px;padding:6px 24px;
  border-left:1px solid rgba(255,255,255,.11);
}
.sourceRailMarks b{
  display:block;color:#fff;font-size:14px;letter-spacing:.08em;
}
.sourceRailMarks small{
  display:block;margin-top:4px;color:#728f94;
  font-size:8px;letter-spacing:.07em;text-transform:uppercase;
}

.trustSection:before{content:"METHOD / SOURCE / PATHWAY"}
.trustLayout{
  display:grid;grid-template-columns:minmax(300px,.72fr) minmax(0,1.28fr);
  gap:70px;align-items:start;
}
.trustStatement{
  position:sticky;top:112px;
  padding:12px 0 20px;
}
.trustStatement h2{
  margin:10px 0 18px;font-size:clamp(42px,5vw,62px);
  line-height:1;letter-spacing:-.055em;
}
.trustStatement p{
  max-width:420px;margin:0 0 24px;
  color:var(--muted);font-size:14px;line-height:1.8;
}
.whyStack{
  overflow:hidden;border:1px solid var(--line);border-radius:26px;background:#fff;
}
.trustSection .whyItem{
  min-height:auto;
  display:grid;grid-template-columns:58px 1fr;gap:22px;
  align-items:start;padding:28px 30px;
  border:0;border-bottom:1px solid var(--line);border-radius:0;background:#fff;
}
.trustSection .whyItem:last-child{border-bottom:0}
.trustSection .whyItem:before{
  width:3px;height:100%;background:var(--teal);opacity:0;
  transition:opacity .2s ease;
}
.trustSection .whyItem:hover:before{opacity:1}
.trustSection .whyItem span{
  padding-top:4px;color:#8ea19e;font-size:10px;font-weight:900;letter-spacing:.12em;
}
.trustSection .whyItem h3{
  margin:0 0 8px;font-size:22px;line-height:1.2;
}
.trustSection .whyItem p{
  max-width:620px;margin:0;color:var(--muted);font-size:12px;line-height:1.7;
}

.inquiryHead p{max-width:520px}
.decisionRail{
  display:grid;grid-template-columns:auto 1fr auto 1fr auto;
  align-items:center;gap:16px;
  margin:0 0 20px;padding:0 4px;
}
.decisionRail span{
  font-size:9px;font-weight:900;letter-spacing:.1em;
  color:#657d80;text-transform:uppercase;white-space:nowrap;
}
.decisionRail i{
  height:1px;background:linear-gradient(90deg,#afc9c3,#d5e2df);
  position:relative;
}
.decisionRail i:after{
  content:"";position:absolute;right:0;top:50%;
  width:5px;height:5px;border-radius:50%;background:var(--teal);transform:translateY(-50%);
}
.inquiryCard{
  position:relative;overflow:hidden;
}
.inquiryCard:after{
  content:"";position:absolute;right:-34px;bottom:-42px;
  width:130px;height:130px;border-radius:50%;
  border:1px solid rgba(12,118,108,.09);
  box-shadow:0 0 0 30px rgba(12,118,108,.022);
  pointer-events:none;
}
.inquiryCard:nth-child(2):after{
  border-color:rgba(128,214,201,.11);
  box-shadow:0 0 0 30px rgba(128,214,201,.025);
}

.rxNext{
  margin-top:22px;padding:28px 30px;
  border-radius:22px;
  display:flex;justify-content:space-between;align-items:center;gap:30px;
  background:
    radial-gradient(circle at 88% 12%,rgba(99,207,190,.16),transparent 24%),
    var(--ink);
  color:#fff;
}
.rxNext .eyebrow{color:#79d0c2}
.rxNext strong{
  display:block;max-width:760px;margin-top:8px;
  font-size:20px;line-height:1.35;letter-spacing:-.025em;
}
.rxNext .btn{flex:0 0 auto}

@media(max-width:1080px){
  .sourceRailInner{align-items:flex-start;flex-direction:column;padding:24px 0}
  .sourceRailMarks{width:100%;margin:0}
  .sourceRailMarks span{flex:1;min-width:0}
  .trustLayout{grid-template-columns:1fr;gap:28px}
  .trustStatement{position:static}
}
@media(max-width:760px){
  .brandSymbol{width:38px;height:38px;flex-basis:38px}
  .wordTop b{font-size:11px}
  .wordmark small{font-size:6px;letter-spacing:.13em}
  .sourceRailMarks{display:grid;grid-template-columns:1fr}
  .sourceRailMarks span{border-left:0;border-top:1px solid rgba(255,255,255,.1);padding:12px 0}
  .sourceRailMarks span:first-child{border-top:0}
  .trustSection .whyItem{grid-template-columns:42px 1fr;padding:23px 22px}
  .decisionRail{grid-template-columns:1fr;gap:8px}
  .decisionRail i{display:none}
  .rxNext{display:block;padding:24px}
  .rxNext strong{font-size:18px}
  .rxNext .btn{margin-top:20px}
}


/* Compact editorial rhythm */
.bar{height:72px}
.nav a{padding:26px 0 21px}
.hero{padding:56px 0 50px}
.heroGrid{gap:50px}
.hero h1{margin:14px 0 18px;font-size:clamp(48px,5.7vw,72px)}
.lead{font-size:clamp(15px,1.3vw,18px);line-height:1.66}
.searchBox{margin-top:22px}
.heroMeta{margin-top:16px;gap:16px}
.heroStage{min-height:550px}
.heroPhoto{inset:0 0 44px 26px;border-radius:28px}
.heroStage .route{left:-42px;right:18px;padding:18px 22px 14px}
.heroStage .routeRow{padding:11px 4px}
.heroStage .routeTitle{margin-bottom:5px}
.sourceRailInner{min-height:72px}
.sourceRailMarks span{padding:4px 20px;min-width:155px}

.section{padding:70px 0}
.sectionHead{gap:30px;margin-bottom:26px}
.sectionHead h2{font-size:clamp(32px,3.8vw,50px)}
.sectionHead p{font-size:13px;line-height:1.68}

.strength:after{top:52px;font-size:60px}
.strengthMedia{margin:6px 0 18px}
.strengthPhoto{height:390px}
.strengthManifesto{min-height:390px;padding:28px}
.manifestoNo{font-size:96px}
.strengthManifesto strong{font-size:22px}
.strength .strengthList{gap:14px}
.strength .strengthRow{min-height:160px;padding:20px 14px 0 0}
.strength .strengthRow span{margin-bottom:24px}
.strength .strengthRow h3{font-size:18px;margin-bottom:7px}
.strength .strengthRow p{font-size:10.5px;line-height:1.58}

.dbPanel{grid-template-columns:330px minmax(0,1fr);gap:16px}
.dbSearch{padding:22px;border-radius:20px}
.dbSearch h3{font-size:21px}
.dbSearch .searchBox{margin-top:18px}
.chips{margin-top:13px;gap:6px}
.chip{padding:6px 9px}
.medicineRows{border-radius:20px}
.medicineRow{padding:15px 18px}
.medicineRow strong{font-size:13px}
.medicineRow small{font-size:9px}

.trustLayout{gap:46px}
.trustStatement{padding:6px 0 12px}
.trustStatement h2{margin:8px 0 14px;font-size:clamp(38px,4.6vw,56px)}
.trustStatement p{font-size:13px;line-height:1.68;margin-bottom:18px}
.whyStack{border-radius:22px}
.trustSection .whyItem{padding:21px 24px;grid-template-columns:48px 1fr;gap:18px}
.trustSection .whyItem h3{font-size:19px;margin-bottom:6px}
.trustSection .whyItem p{font-size:11px;line-height:1.62}

.guideLayout{gap:16px}
.featuredGuide{min-height:340px;padding:30px;border-radius:24px}
.featuredGuide h3{font-size:32px;margin:14px 0 10px}
.featuredGuide p{font-size:12px;line-height:1.64}
.guideList{border-radius:24px}
.guideRow{min-height:102px;padding:17px 21px}
.guideRow h3{font-size:16px;margin-bottom:5px}
.guideRow p{font-size:10px;line-height:1.55}

.travelGrid{gap:16px}
.travelVisual{min-height:500px;border-radius:24px}
.travelVisualCopy{left:24px;right:24px;bottom:24px}
.travelVisualCopy strong{font-size:24px}
.travelFlow{gap:10px}
.timeline{padding:22px 24px 8px;border-radius:22px}
.step{padding:0 0 20px 30px}
.step strong{font-size:13px}
.step p{font-size:10px;line-height:1.55}
.travelFlow .hospitalPreview{min-height:0;border-radius:22px}
.hospitalRow{padding:15px 18px}
.hospitalRow strong{font-size:13px}
.hospitalRow small{font-size:9px}

.decisionRail{margin-bottom:14px}
.inquirySplit{gap:12px}
.inquiryCard{min-height:280px;padding:27px;border-radius:20px}
.inquiryCard h3{font-size:24px;margin:10px 0 9px}
.inquiryCard p{min-height:54px;font-size:12px;line-height:1.58}
.inquiryCard ul{margin:12px 0 18px;font-size:11px;line-height:1.65}
.rxNote{margin-top:12px;padding:14px 16px}

.rxTable{gap:10px}
.rxItem{min-height:218px;padding:18px;border-radius:17px}
.rxGlyph{width:52px;height:38px;margin-bottom:40px}
.rxItem:before{left:18px;top:74px}
.rxItem:after{left:24px;top:77px}
.rxItem>div:nth-child(2){min-height:58px}
.rxItem strong{font-size:13px}
.rxItem small{font-size:9px}
.rxItem .area{margin-top:14px}
.rxItem .rxTag{top:18px;right:18px}
.rxNext{margin-top:14px;padding:21px 24px;border-radius:18px}
.rxNext strong{font-size:18px}

.pageHero{padding:56px 0 40px}
.pageHero h1{margin:12px 0 14px;font-size:clamp(42px,5vw,62px)}
.pageHero p{font-size:14px;line-height:1.68}
.content{padding:54px 0 72px}
.filters{margin-bottom:20px}
.medicineTable .medicineRow{padding:15px 18px}
.detailGrid{gap:26px}
.fact{padding:13px 17px}
.sourceBox{margin-top:18px;padding:20px}
.articleMeta{margin-bottom:22px}
.article h2{margin:32px 0 10px;font-size:28px}
.article p{line-height:1.75}
.articleFooter{margin-top:38px;padding-top:20px}
.hospitalGrid{gap:12px}
.hospitalCard{padding:21px}
.sourceLevel{padding:20px 0}
.sourceLinks{margin-top:26px}
.sourceLink{padding:14px 18px}

.foot{padding:46px 0 22px}
.footGrid{gap:48px}
.footBottom{margin-top:24px;padding-top:14px}

@media(max-width:1080px){
  .heroStage{min-height:650px}
  .heroPhoto{bottom:96px}
  .heroStage .route{left:28px;right:28px}
  .strengthPhoto{height:370px}
  .strengthManifesto{min-height:270px}
  .travelVisual{min-height:460px}
}
@media(max-width:760px){
  .bar{height:64px}
  .hero{padding:42px 0 34px}
  .heroGrid{gap:26px}
  .hero h1{font-size:clamp(39px,12vw,54px);margin-bottom:15px}
  .heroMeta{margin-top:12px}
  .heroStage{min-height:650px}
  .heroPhoto{height:420px}
  .heroStage .route{left:10px;right:10px;padding:17px 18px 13px}
  .section{padding:54px 0}
  .sectionHead{margin-bottom:22px}
  .sectionHead h2{font-size:34px}
  .strengthPhoto{height:300px}
  .strengthManifesto{min-height:235px;padding:22px}
  .strength .strengthRow{min-height:150px}
  .featuredGuide{min-height:300px;padding:24px}
  .featuredGuide h3{font-size:28px}
  .travelVisual{min-height:410px}
  .inquiryCard{padding:23px}
  .rxItem{min-height:205px}
  .pageHero{padding:44px 0 32px}
  .content{padding:44px 0 58px}
  .foot{padding:38px 0 20px}
}


/* Provenance, verification and trust layer */
.verificationStrip{
  display:flex;flex-wrap:wrap;gap:8px;margin-top:22px;
}
.verificationStrip span{
  display:flex;align-items:center;gap:7px;
  padding:8px 10px;border:1px solid #cfe0dc;border-radius:10px;
  background:rgba(255,255,255,.7);color:#687b80;
  font-size:9px;font-weight:750;
}
.verificationStrip b{color:var(--ink);font-size:10px}
.medicineHero .eyebrow{color:var(--rx)}
.statusNote{
  margin-top:16px;padding:17px 19px;
  border:1px solid #e8d7d2;border-left:4px solid var(--rx);
  border-radius:14px;background:#fff9f7;
}
.statusNote strong{font-size:11px;color:#7b4a44}
.statusNote p{margin:6px 0 0;color:#705b57;font-size:11px;line-height:1.65}
.altProducts p{margin-bottom:0}
.sourceActions{background:#f4f8f6}
.sourceButtons{display:flex;flex-wrap:wrap;gap:9px;margin-top:15px}
.sourceButtons .btn{display:inline-flex;align-items:center}
.sideVerify{
  display:grid;grid-template-columns:1fr 1fr;gap:8px;
  margin:16px 0;
}
.sideVerify span{
  padding:10px;border:1px solid #eadeda;border-radius:10px;
  color:#846d68;font-size:9px;
}
.sideVerify b{display:block;margin-top:4px;color:#5c4743;font-size:10px}

.policyGrid{
  display:grid;grid-template-columns:repeat(2,1fr);gap:12px;
  margin:34px 0;
}
.policyCard{
  padding:22px;border:1px solid var(--line);border-radius:18px;background:#fff;
}
.policyCard span{
  display:block;margin-bottom:24px;color:#8ca19e;
  font-size:9px;font-weight:900;letter-spacing:.12em;
}
.policyCard h3{margin:0 0 8px;font-size:18px;letter-spacing:-.02em}
.policyCard p{margin:0;color:var(--muted);font-size:11px;line-height:1.68}
.transparencyBox{
  display:grid;grid-template-columns:1fr 1fr;gap:1px;
  margin-top:24px;border:1px solid var(--line);border-radius:18px;overflow:hidden;
  background:var(--line);
}
.transparencyBox>div{padding:22px;background:#f7faf8}
.transparencyBox strong{font-size:12px}
.transparencyBox p{margin:8px 0 0;color:var(--muted);font-size:11px;line-height:1.7}

.aboutBoundary{
  display:grid;grid-template-columns:repeat(2,1fr);gap:12px;
  margin-bottom:34px;
}
.aboutBoundary article{
  position:relative;padding:24px;border:1px solid var(--line);border-radius:18px;background:#fff;
}
.aboutBoundary article>span{
  display:block;color:#8da29f;font-size:9px;font-weight:900;letter-spacing:.12em;margin-bottom:30px;
}
.aboutBoundary h3{margin:0 0 8px;font-size:19px}
.aboutBoundary p{margin:0;color:var(--muted);font-size:11px;line-height:1.7}

.hospitalJa{margin:0 0 10px!important}
.hospitalRoute{
  margin:10px 0 14px;padding:9px 11px;border-radius:10px;
  background:var(--paper-2);color:#38565c;font-size:10px;font-weight:800;
}
.hospitalFacts{
  margin:0 0 14px;padding-left:17px;color:#5e7075;font-size:10px;line-height:1.7;
}
.hospitalFacts li+li{margin-top:4px}
.hospitalMeta{margin-top:10px}

.medicineRow strong,.rxItem strong{overflow-wrap:anywhere}
.medicineRow small,.rxItem small{overflow-wrap:anywhere}

@media(max-width:760px){
  .verificationStrip{gap:6px}
  .verificationStrip span{width:100%;justify-content:space-between}
  .policyGrid,.transparencyBox,.aboutBoundary{grid-template-columns:1fr}
  .sourceButtons{display:grid}
  .sideVerify{grid-template-columns:1fr}
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


/* Final institutional editorial direction */
:root{
  --ink:#243236;
  --ink-2:#34464a;
  --paper:#f7f6f2;
  --paper-2:#efeee9;
  --paper-3:#e7e6df;
  --teal:#426e68;
  --teal-2:#527f78;
  --teal-soft:#e5ece9;
  --line:#d8d8d1;
  --muted:#69777a;
  --rx:#a65346;
  --rx-soft:#f3e9e6;
  --max:1180px;
  --shadow:none;
  --shadow-lg:none;
}
body{
  background:var(--paper);
  color:var(--ink);
  font-family:-apple-system,BlinkMacSystemFont,"Hiragino Sans","Yu Gothic","YuGothic","Noto Sans JP","PingFang SC","Microsoft YaHei","Segoe UI",sans-serif;
}
:lang(ja) body{font-family:"Hiragino Sans","Yu Gothic","YuGothic",-apple-system,BlinkMacSystemFont,sans-serif}
:lang(zh-Hans) body{font-family:"PingFang SC","Microsoft YaHei",-apple-system,BlinkMacSystemFont,sans-serif}
.wrap{width:min(var(--max),calc(100% - 52px))}

/* Header / identity */
.top{
  border-bottom:1px solid var(--line);
  background:rgba(247,246,242,.96);
  backdrop-filter:blur(14px);
}
.bar{height:68px;gap:24px}
.brand{gap:11px}
.brandSymbol{width:34px;height:34px;flex-basis:34px}
.logoLine{stroke:var(--ink);stroke-width:2.05}
.logoDot{fill:#b85849}
.wordTop{gap:6px}
.wordTop b{
  color:var(--ink)!important;
  font-size:12px;
  font-weight:760;
  letter-spacing:.12em;
}
.wordmark small{
  margin-top:4px;color:#879193;
  font-size:6.5px;letter-spacing:.16em;
}
.nav{gap:25px;font-size:11px}
.nav a{padding:24px 0 20px}
.nav a:hover,.nav a.on{color:var(--ink);border-color:#b85849}
.headSearch,.lang{
  padding:7px 2px;border:0;border-bottom:1px solid #bfc3bf;
  border-radius:0;background:transparent;font-size:10px;
}
.headSearch:hover{border-color:var(--ink);color:var(--ink)}

/* Hero: editorial, not dashboard */
.hero{
  padding:48px 0 42px;
  background:var(--paper);
}
.hero:before{display:none}
.heroGrid{
  grid-template-columns:minmax(0,.9fr) minmax(500px,1.1fr);
  gap:54px;align-items:start;
}
.kicker,.eyebrow{color:var(--teal);letter-spacing:.14em}
.hero h1{
  max-width:650px;margin:14px 0 17px;
  font-size:clamp(44px,5vw,64px);
  line-height:1.03;letter-spacing:-.045em;font-weight:720;
}
.lead{
  max-width:650px;
  font-size:16px;line-height:1.72;color:#627174;
}
.searchBox{
  margin-top:22px;padding:5px;
  border:1px solid #bfc8c5;border-radius:2px;
  box-shadow:none;background:#fff;
}
.searchBox input{padding:11px 12px}
.searchBox button,.btn{
  border-radius:2px;
  background:var(--ink);
  padding:12px 17px;
  font-size:11px;font-weight:760;
}
.searchBox button:hover,.btn:hover{background:#32484b}
.btn.teal{background:var(--teal)}
.btn.teal:hover{background:#355c57}
.btn.ghost{border:1px solid #aeb8b5;background:transparent;color:var(--ink)}
.heroMeta{margin-top:14px;gap:14px;font-size:9px}
.heroMeta i{width:4px;height:4px;background:#b85849}

.heroStage{
  position:relative;min-height:0;
  display:grid;grid-template-rows:390px auto;
}
.heroPhoto{
  position:relative;inset:auto;height:390px;margin:0;
  border-radius:2px;box-shadow:none;
}
.heroPhoto img{filter:saturate(.68) contrast(1.02);transform:none}
.heroPhotoVeil{
  background:linear-gradient(180deg,rgba(22,37,40,.02),rgba(22,37,40,.22));
}
.heroPhoto figcaption{
  left:20px;right:20px;top:auto;bottom:17px;
  align-items:flex-end;
}
.heroPhoto figcaption span{font-size:8px}
.heroPhoto figcaption strong{font-size:11px;font-weight:600}
.heroStage .route{
  position:static;left:auto;right:auto;bottom:auto;
  display:grid;grid-template-columns:repeat(2,1fr);
  padding:0;border:0;border-bottom:1px solid var(--line);
  border-radius:0;box-shadow:none;
  background:transparent!important;color:var(--ink);
  animation:none!important;
}
.heroStage .route:before,.heroStage .route:after{display:none}
.heroStage .routeTitle{
  grid-column:1/-1;
  margin:0;padding:14px 0 9px;
  color:#7c898b;font-size:8px;letter-spacing:.14em;
}
.heroStage .routeRow{
  grid-template-columns:28px 1fr 18px;
  gap:8px;padding:12px 10px 12px 0;
  border-top:1px solid var(--line);
  background:transparent!important;
}
.heroStage .routeRow:nth-of-type(even){padding-left:14px;border-left:1px solid var(--line)}
.routeRow:hover{padding-left:0}
.heroStage .routeRow:nth-of-type(even):hover{padding-left:14px}
.routeNo{color:#9aa2a2;font-size:8px}
.routeRow strong{font-size:12px;font-weight:720}
.routeRow small{color:#7b8789;font-size:9px}
.routeRow b{color:#9d5b50;font-size:13px}

/* Source rail becomes a quiet credibility line */
.sourceRail{
  background:#eeece6;color:var(--ink);
  border-color:var(--line);
}
.sourceRailInner{min-height:62px}
.sourceRailLead{color:#687679;font-size:9px}
.sourceRailMarks span{
  min-width:150px;padding:3px 18px;border-left:1px solid #d0d0c9;
}
.sourceRailMarks b{color:var(--ink);font-size:11px}
.sourceRailMarks small{color:#899295;font-size:7px}

/* Sections */
.section{padding:64px 0}
.sectionHead{margin-bottom:24px;align-items:flex-end}
.sectionHead h2{
  font-size:clamp(30px,3.5vw,46px);
  line-height:1.08;letter-spacing:-.04em;font-weight:700;
}
.sectionHead p{font-size:12px;line-height:1.72}
.textLink{font-size:9px;letter-spacing:.1em}

/* Database is the visual core */
.database{
  background:#fff;color:var(--ink);
  border-top:1px solid var(--line);border-bottom:1px solid var(--line);
}
.database:before{display:none}
.database .eyebrow{color:var(--teal)}
.database .sectionHead p{color:var(--muted)}
.dbPanel{
  grid-template-columns:300px minmax(0,1fr);
  gap:30px;align-items:start;
}
.dbSearch{
  padding:0 30px 0 0;
  border:0;border-right:1px solid var(--line);
  border-radius:0;background:transparent;
}
.dbSearch h3{font-size:20px;font-weight:700}
.dbSearch p{color:var(--muted);font-size:10px}
.dbProof{
  display:grid;grid-template-columns:1fr;
  gap:0;margin:18px 0 8px;border-top:1px solid var(--line);
}
.dbProof span{
  padding:11px 0;border-bottom:1px solid var(--line);
  color:#7a8789;font-size:8px;line-height:1.45;
}
.dbProof b{
  display:block;color:var(--ink);
  font-size:13px;letter-spacing:.02em;margin-bottom:2px;
}
.dbSearch .searchBox{margin-top:16px;border-color:#bdc5c2}
.chips{margin-top:10px;gap:5px}
.chip{
  padding:5px 8px;border:1px solid #d2d6d2;
  border-radius:2px;color:#6f7b7d;font-size:8px;
}
.chip:hover{background:#f2f1ed;border-color:#abb5b2}
.medicineRows{
  border:0;border-top:1px solid var(--line);
  border-radius:0;background:transparent;
}
.medicineRow{
  grid-template-columns:1.5fr .7fr .26fr 20px;
  padding:15px 0;border-bottom:1px solid var(--line);
  color:var(--ink);
}
.medicineRow:hover{background:transparent}
.medicineRow strong{font-size:12px;font-weight:700}
.medicineRow small{color:#7f8a8c;font-size:8px}
.medicineRow .area{color:#687679}
.rxTag{
  padding:0;border:0;border-radius:0;background:transparent;
  color:#9d5b50;font-size:8px;font-weight:800;
}
.medicineRow b{color:#8b625b}

/* Japan strengths become supporting evidence */
.strength{
  background:var(--paper);border:0;
}
.strength:after{display:none}
.strengthMedia{display:none!important}
.strength .strengthList{
  grid-template-columns:repeat(4,1fr);gap:0;
  border-top:1px solid var(--line);border-bottom:1px solid var(--line);
}
.strength .strengthRow{
  min-height:0;padding:20px 22px 22px;
  border:0;border-left:1px solid var(--line);
}
.strength .strengthRow:first-child{border-left:0}
.strength .strengthRow span{margin-bottom:26px;font-size:8px}
.strength .strengthRow h3{font-size:16px;font-weight:700}
.strength .strengthRow p{font-size:10px;line-height:1.62}

/* Method: flat editorial list */
.trustSection{
  background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line);
}
.trustSection:before{display:none}
.trustLayout{gap:48px}
.trustStatement{position:static;padding:0}
.trustStatement h2{font-size:clamp(34px,4vw,50px);font-weight:700}
.trustStatement p{font-size:12px;line-height:1.75}
.whyStack{
  border:0;border-top:1px solid var(--line);
  border-radius:0;background:transparent;
}
.trustSection .whyItem{
  grid-template-columns:42px 1fr;gap:18px;
  padding:18px 0;border-bottom:1px solid var(--line);
  background:transparent;
}
.trustSection .whyItem:before{display:none}
.trustSection .whyItem span{font-size:8px}
.trustSection .whyItem h3{font-size:17px;font-weight:700}
.trustSection .whyItem p{font-size:10px;line-height:1.65}

/* Guides: one editorial image, everything else quiet */
.guides{background:var(--paper)}
.guideLayout{grid-template-columns:1.03fr .97fr;gap:28px}
.featuredGuide{
  min-height:320px;padding:26px;
  border-radius:2px;box-shadow:none;
}
.featuredGuide:after{display:none}
.featuredGuide h3{
  max-width:540px;font-size:29px;font-weight:680;letter-spacing:-.035em;
}
.featuredGuide p{font-size:11px}
.guideList{
  border:0;border-top:1px solid var(--line);
  border-radius:0;background:transparent;
}
.guideRow{
  min-height:0;padding:17px 0;border-bottom:1px solid var(--line);
  background:transparent;
}
.guideRow:hover{background:transparent}
.guideRow h3{font-size:15px;font-weight:700}
.guideRow p{font-size:9px}

/* Travel: documentary image + information */
.travelGrid{grid-template-columns:.82fr 1.18fr;gap:30px}
.travelVisual{
  min-height:440px;border-radius:2px;box-shadow:none;
}
.travelVisualCopy{left:22px;right:22px;bottom:20px}
.travelVisualCopy strong{font-size:21px;font-weight:650}
.travelFlow{gap:0}
.timeline{
  padding:0 0 4px 0;
  border-radius:0;background:transparent;color:var(--ink);box-shadow:none;
}
.step{
  padding:0 0 18px 27px;
  border-left:1px solid #b8c7c3;
}
.step:before{
  width:7px;height:7px;left:-4px;background:var(--teal);box-shadow:none;
}
.step strong{font-size:12px}
.step p{color:#788588;font-size:9px}
.hospitalPreview{
  border:0;border-top:1px solid var(--line);
  border-radius:0;background:transparent;
}
.hospitalRow{
  padding:14px 0;border-bottom:1px solid var(--line);
}
.hospitalRow:hover{background:transparent}
.hospitalRow strong{font-size:12px}
.hospitalRow small{font-size:8px}
.hospitalRow span{font-size:8px}

/* Prescription reference: flat document index, not product cards */
.rxShowcase{
  background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line);
}
.rxTable{
  grid-template-columns:repeat(2,1fr);
  gap:0 32px;border-bottom:1px solid var(--line);
}
.rxItem{
  min-height:0;padding:16px 0;
  border:0;border-top:1px solid var(--line);
  border-radius:0;background:transparent;
  display:grid;grid-template-columns:46px 1fr 34px 20px;
  gap:12px;align-items:center;
}
.rxItem:hover{transform:none;box-shadow:none}
.rxItem:before,.rxItem:after{display:none}
.rxGlyph{
  width:38px;height:24px;margin:0;
  border:1px solid #c6cecb;border-radius:2px;
  background:transparent;color:#7e625c;
  font-size:7px;
}
.rxItem>div:nth-child(2){min-height:0}
.rxItem strong{font-size:11px;font-weight:700}
.rxItem small{font-size:8px}
.rxItem .area{display:none}
.rxItem .rxTag{
  position:static;padding:0;background:transparent;border:0;color:#9d5b50;font-size:8px;
}
.rxItem b{
  margin:0;align-self:auto;width:auto;height:auto;border-radius:0;
  background:transparent;color:#8d6b64;font-size:11px;
}
.rxNext{
  margin-top:0;padding:18px 0;
  border-radius:0;border:0;
  background:transparent;color:var(--ink);
}
.rxNext .eyebrow{color:var(--teal)}
.rxNext strong{font-size:16px;font-weight:650}

/* Inquiry is the final action, not another feature block */
.inquirySection{
  background:#efeee9;border-top:0;border-bottom:1px solid var(--line);
}
.decisionRail{margin-bottom:10px}
.inquirySplit{
  gap:0;border-top:1px solid #cfd0ca;border-bottom:1px solid #cfd0ca;
}
.inquiryCard{
  min-height:0;padding:24px 28px 24px 0;
  border:0;border-radius:0;background:transparent;box-shadow:none;
}
.inquiryCard+ .inquiryCard{
  border:0;border-left:1px solid #cfd0ca;padding-left:28px;
}
.inquiryCard:nth-child(2){
  background:transparent;color:var(--ink);border-color:#cfd0ca;
}
.inquiryCard:nth-child(2) .eyebrow{color:var(--teal)}
.inquiryCard:nth-child(2) p,.inquiryCard:nth-child(2) ul{color:#627174}
.inquiryCard:after{display:none}
.inquiryCard h3{font-size:21px;font-weight:700}
.inquiryCard p{min-height:0;font-size:11px}
.inquiryCard ul{font-size:10px}
.rxNote{
  padding:12px 0;border:0;border-top:1px solid #d7cbc7;
  border-radius:0;background:transparent;color:#775e59;
}

/* Interior pages follow the same restrained language */
.pageHero{
  padding:50px 0 36px;
  background:#f1f0eb;border-bottom:1px solid var(--line);
}
.pageHero h1{
  font-size:clamp(38px,4.6vw,58px);
  font-weight:700;letter-spacing:-.045em;
}
.content{padding:48px 0 64px}
.filter{
  padding:6px 9px;border-radius:2px;background:transparent;font-size:8px;
}
.filter.on{background:var(--ink)}
.medicineTable{
  border:0;border-top:1px solid var(--line);
  border-radius:0;background:transparent;
}
.medicineTable .medicineRow{padding:14px 0}
.factList{
  border:0;border-top:1px solid var(--line);
  border-radius:0;background:transparent;
}
.fact{padding:13px 0;border-bottom:1px solid var(--line)}
.sideNote{
  border:1px solid #d8cfcb;border-radius:2px;
  background:#f5efec;box-shadow:none;
}
.sourceBox{
  padding:18px 0;border:0;border-top:1px solid var(--line);
  border-radius:0;background:transparent;
}
.statusNote{
  padding:15px 0;border:0;border-top:1px solid #d9c8c3;border-bottom:1px solid #d9c8c3;
  border-radius:0;background:transparent;
}
.verificationStrip span{
  border-radius:2px;background:transparent;
}
.policyGrid,.aboutBoundary{gap:0}
.policyCard,.aboutBoundary article{
  border-radius:0;box-shadow:none;background:transparent;
  border:0;border-top:1px solid var(--line);
}
.policyCard:nth-child(even),.aboutBoundary article:nth-child(even){border-left:1px solid var(--line)}
.transparencyBox{
  border-radius:0;
}
.hospitalGrid{gap:0}
.hospitalCard{
  padding:20px 22px 22px 0;
  border:0;border-top:1px solid var(--line);
  border-radius:0;background:transparent;
}
.hospitalCard:nth-child(even){padding-left:22px;border-left:1px solid var(--line)}
.hospitalCard:hover{transform:none;box-shadow:none}
.hospitalRoute{border-radius:2px}
.sourceLinks{border-radius:0}

/* Footer remains the only major dark plane */
.foot{
  background:#26363a;
  padding:42px 0 20px;
}
.footBrand .logoLine{stroke:#f1f3ef}
.footBrand .wordTop b{color:#f1f3ef!important}
.footBrand .wordmark small{color:#899a9d}
.foot p{color:#a8b4b5}
.footLinks a{color:#c6cece}

/* Motion stays modern but becomes almost invisible */
.route{animation:none!important}
@keyframes tm-reveal{
  from{opacity:.55;transform:translateY(8px)}
  to{opacity:1;transform:none}
}
@keyframes tm-reveal-scale{
  from{opacity:.6;transform:translateY(7px)}
  to{opacity:1;transform:none}
}
@keyframes tm-photo-drift{
  from{transform:scale(1.01)}
  to{transform:scale(1.035)}
}
@keyframes tm-media-pan{
  from{transform:scale(1.02)}
  to{transform:scale(1.05)}
}

@media(max-width:1080px){
  .heroGrid{grid-template-columns:1fr;gap:32px}
  .heroStage{min-height:0;grid-template-rows:390px auto}
  .heroPhoto{height:390px}
  .heroStage .route{position:static}
  .dbPanel{grid-template-columns:1fr;gap:20px}
  .dbSearch{padding:0 0 20px;border-right:0;border-bottom:1px solid var(--line)}
  .strength .strengthList{grid-template-columns:repeat(2,1fr)}
  .strength .strengthRow:nth-child(3){border-left:0;border-top:1px solid var(--line)}
  .strength .strengthRow:nth-child(4){border-top:1px solid var(--line)}
  .travelVisual{position:relative;top:auto;min-height:400px}
}
@media(max-width:760px){
  .wrap{width:min(var(--max),calc(100% - 30px))}
  .bar{height:62px}
  .brandSymbol{width:31px;height:31px;flex-basis:31px}
  .hero{padding:36px 0 30px}
  .hero h1{font-size:clamp(36px,11vw,49px)}
  .heroStage{grid-template-rows:300px auto}
  .heroPhoto{height:300px}
  .heroPhoto figcaption{display:none}
  .heroStage .route{grid-template-columns:1fr}
  .heroStage .routeRow:nth-of-type(even){
    padding-left:0;border-left:0;
  }
  .sourceRailInner{padding:16px 0;gap:12px}
  .sourceRailMarks{display:grid;grid-template-columns:repeat(3,1fr)}
  .sourceRailMarks span{min-width:0;padding:4px 8px}
  .sourceRailMarks span:first-child{border-left:0}
  .section{padding:48px 0}
  .sectionHead h2{font-size:31px}
  .strength .strengthList{grid-template-columns:1fr}
  .strength .strengthRow,.strength .strengthRow:nth-child(n){
    border-left:0;border-top:1px solid var(--line);padding:17px 0;
  }
  .strength .strengthRow:first-child{border-top:0}
  .guideLayout,.travelGrid{grid-template-columns:1fr}
  .featuredGuide{min-height:280px}
  .travelVisual{min-height:320px}
  .rxTable{grid-template-columns:1fr}
  .inquirySplit{grid-template-columns:1fr}
  .inquiryCard,.inquiryCard+ .inquiryCard{padding:20px 0;border-left:0}
  .inquiryCard+ .inquiryCard{border-top:1px solid #cfd0ca}
  .policyGrid,.aboutBoundary,.transparencyBox{grid-template-columns:1fr}
  .policyCard:nth-child(even),.aboutBoundary article:nth-child(even){border-left:0}
  .hospitalGrid{grid-template-columns:1fr}
  .hospitalCard,.hospitalCard:nth-child(even){padding:18px 0;border-left:0}
}


/* Trust-first homepage architecture */
.compactHead{margin-bottom:18px}
.proofSection{
  padding-top:44px;padding-bottom:52px;
  background:#fff;border-bottom:1px solid var(--line);
}
.proofGrid{
  display:grid;grid-template-columns:repeat(4,1fr);
  border-top:1px solid var(--line);border-bottom:1px solid var(--line);
}
.proofItem{
  padding:20px 22px 22px;border-left:1px solid var(--line);
}
.proofItem:first-child{border-left:0}
.proofItem>span{
  display:block;margin-bottom:30px;color:#9a635a;
  font-size:8px;font-weight:800;letter-spacing:.14em;
}
.proofItem h3{
  margin:0 0 8px;font-size:15px;font-weight:720;letter-spacing:-.015em;
}
.proofItem p{
  margin:0;color:var(--muted);font-size:10px;line-height:1.68;
}

/* Evidence is specific and source-linked, not promotional */
.evidenceSection{background:var(--paper)}
.evidenceList{border-top:1px solid var(--line)}
.evidenceRow{
  display:grid;grid-template-columns:88px minmax(0,1fr) 116px;
  gap:24px;align-items:center;
  padding:20px 0;border-bottom:1px solid var(--line);
}
.evidenceRow:hover h3{color:var(--teal)}
.evidenceYear{
  color:#9a635a;font-size:22px;font-weight:650;letter-spacing:-.03em;
}
.evidenceRow h3{
  margin:0 0 5px;font-size:18px;font-weight:700;transition:.18s ease;
}
.evidenceRow p{
  margin:0;max-width:680px;color:var(--muted);font-size:10px;line-height:1.65;
}
.evidenceRow>b{
  justify-self:end;color:#778487;
  font-size:8px;font-weight:800;letter-spacing:.09em;
}

/* Care pathway is the core conversion logic for individuals */
.pathwaySection{
  background:#f0efe9;border-top:1px solid var(--line);border-bottom:1px solid var(--line);
}
.pathwaySplit{
  display:grid;grid-template-columns:minmax(0,1.45fr) minmax(320px,.55fr);
  gap:42px;align-items:start;
}
.patientPath{padding-right:36px;border-right:1px solid #cdcec7}
.institutionPath{padding-left:0}
.pathTitle{
  display:flex;gap:14px;align-items:flex-start;margin-bottom:24px;
}
.pathTitle>span{
  width:30px;height:30px;display:grid;place-items:center;
  border:1px solid #adb8b5;color:#9a635a;font-size:9px;font-weight:800;
}
.pathTitle small{
  display:block;margin-bottom:4px;color:#7d898b;
  font-size:7px;font-weight:800;letter-spacing:.13em;
}
.pathTitle h3{
  margin:0;font-size:20px;font-weight:700;letter-spacing:-.025em;
}
.clinicalFlow{
  display:grid;grid-template-columns:repeat(7,minmax(0,1fr));
  border-top:1px solid #c9cbc5;border-bottom:1px solid #c9cbc5;
  margin-bottom:16px;
}
.clinicalStep{
  position:relative;padding:18px 12px 18px 0;
  min-height:150px;border-left:1px solid #d4d5cf;
}
.clinicalStep:first-child{border-left:0}
.clinicalStep>span{
  display:block;margin-bottom:30px;
  color:#9a635a;font-size:8px;font-weight:800;
}
.clinicalStep strong{
  display:block;margin-bottom:6px;font-size:11px;font-weight:720;
}
.clinicalStep p{
  margin:0;color:#6f7b7d;font-size:8.5px;line-height:1.55;
}
.institutionFlow{
  border-top:1px solid #c9cbc5;margin-bottom:16px;
}
.institutionStep{
  display:grid;grid-template-columns:30px 1fr;gap:12px;
  padding:13px 0;border-bottom:1px solid #d4d5cf;
}
.institutionStep>span{
  color:#9a635a;font-size:8px;font-weight:800;padding-top:2px;
}
.institutionStep strong{
  display:block;margin-bottom:3px;font-size:11px;
}
.institutionStep p{
  margin:0;color:#738083;font-size:8.5px;line-height:1.5;
}
.clinicalNotice{
  margin-top:20px;padding:13px 0;
  border-top:1px solid #c9cbc5;
  color:#6c787a;font-size:9px;line-height:1.65;
}

/* Database follows trust proof and should feel like the evidence becoming useful */
.database{border-top:0}
.dbProof{margin-top:14px}

/* Later brand-method section is intentionally quieter */
.trustSection{background:#faf9f6}
.trustStatement h2{font-size:clamp(31px,3.5vw,44px)}
.trustStatement p{max-width:390px}

/* Final personal inquiry copy should not resemble medicine shopping */
.inquiryCard:first-child .btn{
  background:transparent;color:var(--ink);border:1px solid #adb8b5;
}
.inquiryCard:first-child .btn:hover{background:#e6e5df}

@media(max-width:1080px){
  .proofGrid{grid-template-columns:repeat(2,1fr)}
  .proofItem:nth-child(3){border-left:0;border-top:1px solid var(--line)}
  .proofItem:nth-child(4){border-top:1px solid var(--line)}
  .pathwaySplit{grid-template-columns:1fr;gap:30px}
  .patientPath{padding-right:0;border-right:0}
  .institutionPath{padding-top:26px;border-top:1px solid #cdcec7}
  .clinicalFlow{grid-template-columns:repeat(4,1fr)}
  .clinicalStep:nth-child(5){border-left:0;border-top:1px solid #d4d5cf}
  .clinicalStep:nth-child(n+5){border-top:1px solid #d4d5cf}
}
@media(max-width:760px){
  .proofSection{padding:36px 0 42px}
  .proofGrid{grid-template-columns:1fr}
  .proofItem,.proofItem:nth-child(n){
    padding:16px 0;border-left:0;border-top:1px solid var(--line);
  }
  .proofItem:first-child{border-top:0}
  .proofItem>span{margin-bottom:15px}
  .evidenceRow{
    grid-template-columns:62px 1fr;gap:14px;padding:17px 0;
  }
  .evidenceYear{font-size:18px}
  .evidenceRow h3{font-size:15px}
  .evidenceRow>b{grid-column:2;justify-self:start}
  .clinicalFlow{grid-template-columns:1fr}
  .clinicalStep,.clinicalStep:nth-child(n){
    min-height:0;
    display:grid;grid-template-columns:34px 1fr;gap:10px;
    padding:12px 0;border-left:0;border-top:1px solid #d4d5cf;
  }
  .clinicalStep:first-child{border-top:0}
  .clinicalStep>span{margin:1px 0 0}
  .pathTitle h3{font-size:18px}
}

`;

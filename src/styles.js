export const CSS=`
:root{
  --ink:#0f2433;
  --muted:#657787;
  --line:#dfe7eb;
  --soft:#f5f9fa;
  --soft2:#e8f4f2;
  --teal:#0b746d;
  --navy:#0d4057;
  --max:1180px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--ink);background:#fff;line-height:1.55;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
button,input,select{font:inherit}
.wrap{width:min(var(--max),calc(100% - 40px));margin:0 auto}
.top{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.94);backdrop-filter:blur(18px);border-bottom:1px solid var(--line)}
.bar{height:74px;display:flex;align-items:center;justify-content:space-between;gap:22px}
.brand{display:flex;align-items:center;gap:10px;font-weight:850;letter-spacing:.07em;min-width:max-content}
.mark{width:38px;height:38px;border-radius:12px;background:linear-gradient(145deg,var(--teal),var(--navy));color:#fff;display:grid;place-items:center;font-size:22px;font-weight:500}
.brand small{display:block;font-size:9px;letter-spacing:.15em;color:#8494a1}
.nav{display:flex;gap:24px;font-size:13px;color:#536575}
.nav a:hover,.nav a.on{color:var(--teal)}
.actions{display:flex;align-items:center;gap:10px}
.contactMini{padding:9px 13px;border-radius:999px;background:var(--ink);color:#fff;font-size:12px;font-weight:800}
.lang{padding:9px 11px;border:1px solid var(--line);border-radius:999px;font-size:12px;background:#fff;color:var(--ink)}
.hero2{padding:72px 0 46px;background:radial-gradient(circle at 82% 12%,rgba(18,146,136,.13),transparent 30%),linear-gradient(180deg,#fafeff 0%,#fff 100%)}
.hero2Grid{display:grid;grid-template-columns:minmax(0,1.06fr) minmax(360px,.94fr);gap:56px;align-items:center}
.heroCopy{max-width:760px}
.eyebrow{font-size:11px;font-weight:850;letter-spacing:.16em;color:var(--teal)}
h1{font-size:clamp(48px,6vw,78px);line-height:1.01;letter-spacing:-.055em;margin:16px 0 22px}
.lead{font-size:clamp(17px,1.7vw,20px);line-height:1.72;color:var(--muted);max-width:780px}
.bigSearch{display:flex;align-items:center;gap:10px;margin-top:30px;padding:8px 8px 8px 16px;background:#fff;border:1px solid #d5e1e6;border-radius:15px;box-shadow:0 14px 38px rgba(15,36,51,.08)}
.bigSearch span{font-size:24px;color:var(--teal);line-height:1}
.bigSearch input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:var(--ink);font-size:14px}
.bigSearch input::placeholder{color:#96a3ad}
.bigSearch button{border:0;border-radius:10px;background:var(--teal);color:#fff;font-size:12px;font-weight:800;padding:12px 16px;cursor:pointer}
.taskPanel{padding:22px;border:1px solid var(--line);border-radius:24px;background:rgba(255,255,255,.9);box-shadow:0 24px 70px rgba(15,36,51,.08)}
.taskPanelTitle{font-size:13px;font-weight:850;margin-bottom:10px}
.taskRow{display:grid;grid-template-columns:34px 1fr 24px;gap:12px;align-items:center;padding:15px 8px;border-top:1px solid #edf2f4}
.taskRow:first-of-type{border-top:0}
.taskRow:hover strong{color:var(--teal)}
.taskNo{font-size:10px;color:#98a5af}
.taskRow strong{display:block;font-size:14px}
.taskRow small{display:block;margin-top:3px;font-size:11px;color:#8494a1;line-height:1.4}
.taskRow b{font-size:18px;color:var(--teal)}
.section{padding:78px 0}
.sectionTitle{margin-bottom:28px}
.sectionTitle h2{font-size:clamp(32px,4vw,48px);letter-spacing:-.045em;margin:0}
.taskSection{border-top:1px solid var(--line)}
.taskCards{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
.taskCard{display:grid;grid-template-columns:54px 1fr 24px;gap:16px;align-items:center;padding:24px;border:1px solid var(--line);border-radius:18px;background:#fff;transition:.2s}
.taskCard:hover{transform:translateY(-3px);box-shadow:0 16px 44px rgba(15,36,51,.07)}
.taskIcon{width:54px;height:54px;border-radius:16px;background:var(--soft2);display:grid;place-items:center;color:var(--teal);font-weight:900}
.taskCard h3{margin:0 0 6px;font-size:19px}
.taskCard p{margin:0;color:var(--muted);font-size:13px}
.taskCard b{color:var(--teal);font-size:19px}
.howSection{background:var(--soft)}
.howGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.howStep{padding:25px;border-radius:18px;background:#fff;border:1px solid #e6edef}
.howStep span{font-size:11px;letter-spacing:.12em;color:var(--teal);font-weight:850}
.howStep h3{margin:18px 0 8px;font-size:18px}
.howStep p{margin:0;color:var(--muted);font-size:13px;line-height:1.65}
.medicalCta{padding:72px 0}
.medicalCtaBox{padding:40px;border-radius:26px;background:linear-gradient(120deg,#e7f4f3,#edf6fa);display:flex;justify-content:space-between;align-items:center;gap:30px}
.medicalCtaBox h2{font-size:clamp(30px,4vw,48px);letter-spacing:-.045em;margin:10px 0}
.medicalCtaBox p{margin:0;color:var(--muted);max-width:700px}
.btn{padding:13px 18px;border-radius:12px;font-size:13px;font-weight:800;border:1px solid var(--line);display:inline-flex;align-items:center;justify-content:center;white-space:nowrap}
.btn.primary{background:var(--ink);color:#fff;border-color:var(--ink)}
.pageHero{padding:66px 0 48px;background:linear-gradient(180deg,#f8fbfc,#fff);border-bottom:1px solid var(--line)}
.pageHero h1{font-size:clamp(44px,6vw,68px);line-height:1.03;letter-spacing:-.05em;max-width:980px}
.content{padding:64px 0 78px}
.infoGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.info{padding:24px;border:1px solid var(--line);border-radius:18px;background:#fff}
.info h3{margin:0 0 9px;font-size:18px}
.info p{margin:0;color:var(--muted);font-size:13px;line-height:1.65}
.contactBox{max-width:760px;padding:32px;border-radius:22px;background:var(--soft)}
.contactBox strong{display:block;font-size:14px}
.contactBox a{display:block;margin-top:14px;color:var(--teal);font-size:20px;font-weight:850;word-break:break-all}
.searchPageForm{max-width:760px}
.searchResults{max-width:900px}
.searchResults h2{font-size:28px;margin:0 0 20px}
.searchResult{display:flex;justify-content:space-between;align-items:center;gap:22px;padding:20px 4px;border-top:1px solid var(--line)}
.searchResult:first-of-type{border-top:0}
.searchResult strong{display:block;font-size:17px}
.searchResult p{margin:5px 0 0;color:var(--muted);font-size:13px}
.searchResult b{font-size:20px;color:var(--teal)}
.searchEmpty{padding:26px;border-radius:16px;background:var(--soft);color:var(--muted)}
.foot{padding:52px 0 24px;background:#0d1f2c;color:#edf3f5}
.footGrid{display:grid;grid-template-columns:1.2fr .8fr;gap:60px}
.foot p{max-width:680px;color:#9eb0bc;font-size:11px;line-height:1.7}
.footLinks{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.footLinks a{display:block;color:#adbbc5;font-size:12px;margin:8px 0}
.bottom{margin-top:34px;padding-top:16px;border-top:1px solid rgba(255,255,255,.09);display:flex;justify-content:space-between;color:#718695;font-size:10px}
@media(max-width:1000px){
  .nav{display:none}
  .hero2Grid{grid-template-columns:1fr}
  .taskPanel{max-width:760px}
}
@media(max-width:760px){
  .wrap{width:min(var(--max),calc(100% - 28px))}
  .bar{height:68px}
  .contactMini{display:none}
  .hero2{padding:52px 0 36px}
  .hero2Grid{gap:28px}
  h1{font-size:clamp(42px,13vw,60px)}
  .lead{font-size:16px}
  .bigSearch{display:grid;grid-template-columns:26px 1fr;padding:10px}
  .bigSearch button{grid-column:1 / -1;width:100%}
  .taskPanel{padding:16px}
  .taskCards,.howGrid,.infoGrid,.footGrid{grid-template-columns:1fr}
  .section{padding:62px 0}
  .taskCard{grid-template-columns:48px 1fr 20px}
  .taskIcon{width:48px;height:48px}
  .medicalCtaBox{display:block;padding:28px}
  .medicalCtaBox .btn{margin-top:20px}
  .footLinks{grid-template-columns:1fr 1fr}
}
`;

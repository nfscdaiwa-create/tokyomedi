export const CSS=`
:root{--ink:#102435;--muted:#687b8c;--line:#dfe9ed;--soft:#f3f8f8;--teal:#0b726c;--navy:#0c4057;--max:1180px}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--ink);background:#fff;line-height:1.55;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.wrap{width:min(var(--max),calc(100% - 40px));margin:auto}
.top{position:sticky;top:0;z-index:20;background:rgba(255,255,255,.93);backdrop-filter:blur(18px);border-bottom:1px solid var(--line)}
.bar{height:76px;display:flex;align-items:center;justify-content:space-between;gap:22px}
.brand{display:flex;align-items:center;gap:10px;font-weight:850;letter-spacing:.07em}
.mark{width:38px;height:38px;border-radius:12px;background:linear-gradient(145deg,var(--teal),var(--navy));color:#fff;display:grid;place-items:center;font-size:22px}
.brand small{display:block;font-size:9px;letter-spacing:.15em;color:#8795a2}
.nav{display:flex;gap:24px;font-size:13px;color:#536575}
.nav a:hover,.nav a.on{color:var(--teal)}
.actions{display:flex;gap:10px;align-items:center}
.lang{padding:9px 11px;border:1px solid var(--line);border-radius:999px;font-size:12px;background:#fff}
.hero{padding:82px 0 56px;overflow:hidden;background:radial-gradient(circle at 88% 20%,rgba(22,151,142,.13),transparent 31%),linear-gradient(180deg,#fbfefe,#fff)}
.heroGrid{display:grid;grid-template-columns:1.08fr .92fr;gap:55px;align-items:center}
.eyebrow{font-size:11px;letter-spacing:.16em;font-weight:850;color:var(--teal)}
h1{font-size:clamp(48px,6.2vw,82px);line-height:.99;letter-spacing:-.055em;margin:18px 0 22px}
.lead{font-size:clamp(17px,1.8vw,21px);line-height:1.7;color:var(--muted);max-width:760px}
.buttons{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}
.btn{padding:14px 19px;border-radius:12px;font-size:13px;font-weight:800;border:1px solid var(--line);display:inline-flex;align-items:center;justify-content:center}
.btn.primary{background:var(--ink);color:#fff;border-color:var(--ink)}
.panel{padding:27px;border:1px solid var(--line);border-radius:26px;background:rgba(255,255,255,.88);box-shadow:0 24px 70px rgba(16,36,53,.09)}
.panelTitle{font-size:12px;letter-spacing:.13em;font-weight:850;margin-bottom:20px}
.quick{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.quick a{min-height:112px;padding:17px;border-radius:16px;background:var(--soft);display:flex;flex-direction:column;justify-content:space-between;transition:.2s}
.quick a:hover{transform:translateY(-2px)}
.quick span{font-size:11px;color:#8797a5}
.quick strong{font-size:15px}
.trust{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:22px 0}
.trustGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
.trustItem{display:flex;gap:12px}
.icon{width:32px;height:32px;border-radius:10px;background:#e6f3f1;color:var(--teal);display:grid;place-items:center;font-weight:900;flex:0 0 32px}
.trustItem strong{font-size:13px;display:block}
.trustItem p{font-size:11px;color:#7a8a98;margin:4px 0 0}
.section{padding:88px 0}
.head{display:flex;align-items:end;justify-content:space-between;gap:30px;margin-bottom:32px}
.head h2{font-size:clamp(32px,4vw,50px);letter-spacing:-.045em;margin:0}
.head p{max-width:560px;color:var(--muted);margin:0}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}
.card{padding:25px;border:1px solid var(--line);border-radius:19px;min-height:210px;display:flex;flex-direction:column;background:#fff;transition:.2s}
.card:hover{transform:translateY(-3px);box-shadow:0 18px 48px rgba(16,36,53,.07)}
.card small{color:#8b9aa8;letter-spacing:.12em}
.card h3{font-size:21px;margin:18px 0 10px}
.card p{font-size:13px;color:var(--muted);margin:0}
.arrow{margin-top:auto;padding-top:20px;color:var(--teal);font-weight:900}
.soft{background:var(--soft)}
.cta{padding:72px 0}
.ctaBox{padding:42px;border-radius:26px;background:linear-gradient(120deg,#e5f4f2,#eef7fa);display:flex;justify-content:space-between;align-items:center;gap:30px}
.ctaBox h2{font-size:clamp(30px,4vw,48px);margin:0 0 10px;letter-spacing:-.045em}
.ctaBox p{margin:0;color:var(--muted);max-width:700px}
.pageHero{padding:72px 0 52px;background:linear-gradient(#f8fbfc,#fff);border-bottom:1px solid var(--line)}
.pageHero h1{font-size:clamp(44px,6vw,70px);max-width:950px}
.content{padding:66px 0}
.infoGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}
.info{padding:24px;border:1px solid var(--line);border-radius:18px;background:#fff}
.info h3{margin:0 0 9px}
.info p{font-size:13px;color:var(--muted);margin:0}
.contactBox{padding:32px;background:var(--soft);border-radius:22px;max-width:760px}
.contactBox a{display:block;margin-top:12px;color:var(--teal);font-size:20px;font-weight:850}
.foot{padding:54px 0 24px;background:#0d1f2c;color:#eaf1f5}
.footGrid{display:grid;grid-template-columns:1.2fr .8fr;gap:60px}
.foot p{font-size:11px;line-height:1.7;color:#9fb0be;max-width:680px}
.footLinks{display:grid;grid-template-columns:1fr 1fr}
.footLinks a{display:block;color:#aebcc7;font-size:12px;margin:8px 0}
.bottom{margin-top:34px;padding-top:16px;border-top:1px solid rgba(255,255,255,.09);display:flex;justify-content:space-between;color:#718696;font-size:10px}
.rev{position:fixed;right:10px;bottom:10px;background:rgba(13,31,44,.82);color:#fff;padding:6px 8px;border-radius:8px;font:10px ui-monospace,monospace;opacity:.45}
@media(max-width:980px){
  .nav{display:none}.heroGrid{grid-template-columns:1fr}.panel{max-width:720px}.trustGrid{grid-template-columns:1fr 1fr}.cards{grid-template-columns:1fr 1fr}
}
@media(max-width:680px){
  .wrap{width:min(var(--max),calc(100% - 28px))}.bar{height:68px}.hero{padding:56px 0 38px}.panel{padding:20px}.trustGrid,.cards,.infoGrid,.footGrid{grid-template-columns:1fr}.head{display:block}.head p{margin-top:12px}.section{padding:66px 0}.ctaBox{display:block;padding:28px}.ctaBox .btn{display:inline-flex;margin-top:20px}.footLinks{gap:20px}
}
`;

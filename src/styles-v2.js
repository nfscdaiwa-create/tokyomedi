/* Page-specific redesign overrides for the existing shared components. */
export const DESIGN_CSS = `
:root{--paper:#f5f2e9;--paper-2:#edece4;--surface:#fffefb;--surface-soft:#f8f7f1;--ink:#183b3c;--ink-2:#315556;--muted:#506467;--line:#d8dfd7;--line-strong:#adc2b8;--teal:#21645c;--teal-dark:#174c47;--teal-soft:#e5f0e8;--red:#ac634d;--max:1320px;--header:84px}
body{font-size:16px;line-height:1.7;background:var(--paper)}
.wrap{width:min(var(--max),calc(100% - 64px))}
.eyebrow,.kicker{font-size:12px;letter-spacing:.17em}
.textLink{font-size:14px}
.top{background:rgba(255,254,249,.96);box-shadow:0 1px 0 rgba(19,60,58,.05)}
.bar{gap:31px}
.nav{gap:24px}
.nav a{font-size:14px;font-weight:650}
.nav a:after{height:3px}
.headSearch{font-size:13px}
.lang{font-size:12px;min-width:110px;padding:10px}
.wordTop b{font-size:16px}.wordmark small{font-size:8px}
.btn{min-height:50px;padding:13px 20px;font-size:14px;font-weight:700}
:focus-visible{outline:3px solid #b45638;outline-offset:3px}
/* Home: product photography is the first visual, with an immediate path to each record. */
.hero{padding:46px 0 46px;background:linear-gradient(140deg,#f7f5ed 0%,#e9efe8 100%)}
.heroGrid{grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr);gap:48px;align-items:center}
.heroIntro{padding:0;border:0}
.hero h1{max-width:600px;margin:16px 0 22px;font-size:clamp(48px,4.7vw,72px);line-height:1.08}
:lang(zh-Hans) .hero h1,:lang(ja) .hero h1{font-size:clamp(48px,4.6vw,70px);line-height:1.16}
.lead{font-size:18px;line-height:1.75}
.searchBox{margin-top:27px;max-width:600px;border:1px solid #9fb9ae;box-shadow:0 12px 28px rgba(23,60,52,.08)}
.searchBox input{font-size:15px}.searchBox button{font-size:14px}
.heroMeta{font-size:12px;gap:9px 17px}
.heroMedicineGallery{display:grid;grid-template-columns:1.12fr .88fr;grid-template-rows:210px 210px;gap:12px;min-height:432px}
.heroMedicine{position:relative;display:grid;grid-template-columns:45% minmax(0,1fr);overflow:hidden;border:1px solid #d2dcd4;background:#fffef9;box-shadow:0 16px 32px rgba(29,66,54,.08);transition:transform .18s,box-shadow .18s}
.heroMedicine:hover{transform:translateY(-4px);box-shadow:0 22px 39px rgba(29,66,54,.13)}
.heroMedicine1{grid-row:1/3;grid-column:1;display:flex;flex-direction:column}
.heroMedicine2,.heroMedicine3{grid-column:2}
.heroMedicineImage{display:flex;align-items:center;justify-content:center;min-width:0;min-height:0;padding:14px;background:#f7f8f5;overflow:hidden}
.heroMedicineImage img{display:block;width:100%;height:100%;min-width:0;min-height:0;max-width:100%;max-height:100%;object-fit:contain}
.heroMedicine1 .heroMedicineImage{height:250px;flex:0 0 250px;padding:22px;background:#f7f8f5}
.heroMedicine1 .heroMedicineImage img{object-fit:contain;object-position:center}
.heroMedicine2 .heroMedicineImage img,.heroMedicine3 .heroMedicineImage img{object-fit:contain}
.heroMedicineInfo{min-width:0;padding:20px 18px}
.heroMedicineInfo span{display:block;color:#416c61;font-size:10px;font-weight:800;letter-spacing:.09em;text-transform:uppercase}
.heroMedicineInfo strong{display:block;margin-top:5px;color:var(--ink);font-size:20px;line-height:1.25}
.heroMedicineInfo small{display:block;color:#5c7070;font-size:11px;overflow-wrap:anywhere}
.heroMedicineInfo p{margin:8px 0 0;color:#344e4d;font-size:13px;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.heroMedicine:not(.heroMedicine1) .heroMedicineInfo small,.heroMedicine:not(.heroMedicine1) .heroMedicineInfo p{display:none}
.heroMedicine:not(.heroMedicine1) .heroMedicineInfo strong{font-size:20px;margin-top:11px}
.heroMedicine1 .heroMedicineInfo{padding:16px 19px}
.heroMedicine1 .heroMedicineInfo strong{font-size:25px}
.heroMedicine1 .heroMedicineInfo p{-webkit-line-clamp:2}
.heroMedicineArrow{position:absolute;right:13px;top:10px;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:#fffef9;color:var(--teal);font-size:18px}
.heroMedicineInfo .heroMedicineCredit{display:block;margin-top:10px;padding-top:8px;border-top:1px solid #e0e6df;color:#526564;font-size:10px;font-weight:400;letter-spacing:0;line-height:1.5;text-transform:none;overflow-wrap:anywhere}
.heroActions{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px}
.heroActions .textLink{padding:7px 0}
.route{margin-top:30px;box-shadow:none;border:0;gap:8px;background:transparent}
.routeTitle{border:1px solid var(--line);background:#174d48;color:#fff;font-size:12px}
.routeRow{min-height:146px;border:1px solid #d6ded5!important;background:#fffefa;padding:17px 18px}
.routeRow strong{font-size:16px}.routeRow small{font-size:12px}
.sourceRail{background:#174d48}
.section{padding:76px 0}
.sectionHead{margin-bottom:29px}
.sectionHead h2,.trustStatement h2,.institutionInquiry h2{font-size:clamp(38px,3.7vw,52px)}
.sectionHead>p,.trustStatement p,.institutionInquiry p{font-size:15px}
.proofItem p,.evidenceRow p{font-size:14px}
.proofItem h3{font-size:19px}
.dbPanel{background:#fffef9;border:1px solid var(--line);padding:25px}
.homeMedicineGrid{gap:12px}
.homeMedicineCard{grid-template-columns:120px minmax(0,1fr);min-height:172px;border-color:#d5ded5;padding:10px}
.homeMedicineMedia{display:grid;grid-template-rows:minmax(0,1fr) auto;gap:8px;height:172px;min-height:0;align-self:start;padding:8px;background:#f7f8f5}
.homeMedicineMedia img{min-width:0;min-height:0;width:100%;height:100%;max-width:100%;max-height:100%;object-fit:contain}
.homeMedicineCredit{position:static;max-width:none;padding:0;background:transparent;color:#526564;font-size:9px;line-height:1.4;text-align:start;overflow-wrap:anywhere}
.homeMedicineText>span{font-size:11px}.homeMedicineText h3{font-size:18px}.homeMedicineText small{font-size:10px}
.homeMedicineText p{font-size:13px}.homeMedicineText b{font-size:12px}
.homeHealthBody h3{font-size:18px}.homeHealthBody span,.homeHealthBody b{font-size:12px}
.guideRow h3{font-size:18px}.guideRow p{font-size:13px}.featuredGuide h3{font-size:30px}.featuredGuide p{font-size:15px}
.foot p{font-size:13px}.footLinks a{font-size:13px}.footBottom{font-size:11px}
/* Catalogues: denser image-led cards and legible filters. */
.medicineIndexHero,.healthIndexHero{padding:29px 0;background:linear-gradient(110deg,#f4f1e8,#e4eee7)}
.medicineIndexHeroGrid,.healthIndexHeroGrid{align-items:center;gap:44px}
.medicineIndexIntro h1,.healthIndexHero h1{margin:8px 0 15px;font-size:clamp(45px,4.6vw,66px)}
.medicineIndexIntro>p,.healthIndexHero p{font-size:16px;line-height:1.75}
.medicineSearch,.healthSearch{min-height:56px;margin-top:25px}
.medicineSearch input,.healthSearch input{font-size:15px}
.medicineSearch button,.healthSearch button{font-size:14px}
.medicineIndexTrust,.healthBoundary{padding:21px 25px;background:#174d48;border-radius:2px}
.medicineIndexTrust{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.medicineIndexTrust>div,.medicineIndexTrust>div:first-child{display:flex;flex-direction:column;align-items:flex-start;gap:5px;padding:0;border:0}
.medicineIndexTrust>p{grid-column:1/-1;margin-top:5px;padding-top:12px;border-top:1px solid rgba(255,255,255,.15)}
.medicineIndexTrust>div span,.healthBoundary>strong{font-size:23px}
.medicineIndexTrust>div strong,.medicineIndexTrust>p,.healthBoundary>p{font-size:13px}
.medicineIndexBody,.healthIndexBody{padding:32px 0 80px;background:#fbfaf5}
.medicineResultCount,.medicineFilterLabel,.healthToolbar{font-size:13px}
.medicineResultCount b,.healthToolbar b{font-size:27px}
.medicineFilters{gap:9px;margin-bottom:24px}
.medicineFilters .filter,.filters .filter{min-height:43px;padding:8px 15px;font-size:13px;border:1px solid #cbd9d1;border-radius:3px;background:#fff}
.medicineFilters .filter b{min-width:23px;height:23px;font-size:11px}
.medicineCardGrid{gap:16px}
.medicineCard{min-height:0;padding:0;border:1px solid #d3dfd5;border-radius:2px;background:#fff;box-shadow:0 4px 16px rgba(31,69,53,.035)}
.medicineCard:before{display:none}
.medicineCardMedia{display:block;height:auto;margin:0;padding:0;border-bottom:1px solid #e2e8df;background:#f7f8f5}
.medicinePhotoFrame{display:flex;align-items:center;justify-content:center;height:270px;min-width:0;min-height:0;padding:22px}
.medicinePhotoFrame img{display:block;flex:0 1 auto;width:100%;height:100%;min-width:0;min-height:0;max-width:100%;max-height:100%;object-fit:contain;mix-blend-mode:normal}
.medicineCard:hover .medicineCardMedia img{transform:none}
.medicinePhotoLabel{display:block;position:static;max-width:none;padding:10px 18px;border-top:1px solid #e2e8df;background:#fff;color:#526564;font-size:11px;font-weight:400;line-height:1.5;overflow-wrap:anywhere}
.medicineCardTop{margin:19px 22px 8px}
.medicineArea{font-size:12px;min-height:27px;padding:4px 10px;border-radius:3px}
.medicineStatus{font-size:11px}
.medicineCard h2{margin:0 22px;font-size:26px;line-height:1.25}
.medicineCardNames{min-height:0;margin:7px 22px 13px;font-size:13px;line-height:1.5}
.medicineCardUse{margin:0 22px 13px;padding:11px 13px;border:0;background:#eaf2eb}
.medicineCardUse span{font-size:11px}.medicineCardUse p{font-size:15px;line-height:1.55}
.medicineCardMeta{margin:0 22px;gap:6px}.medicineCardMeta span{font-size:11px;padding:5px 7px}
.medicineCardFoot{margin:15px 22px 19px;padding-top:13px}
.medicineCardFoot>b,.pmdaVerified{font-size:12px}
.healthCardGrid{grid-template-columns:repeat(3,minmax(0,1fr));gap:17px}
.healthCard{border-radius:2px}.healthCardMedia{height:280px;background:#eff4ec}
.healthCardBody{padding:20px}.healthCardTop,.healthCardBody>p,.healthCardFoot{font-size:12px}
.healthCard h2{font-size:21px}.healthCardFoot b{font-size:12px}
.healthDisclaimer strong,.healthDisclaimer p{font-size:13px}
/* Detail pages: larger photography and a readable primary use. */
.pageHero{position:relative;padding:45px 0 42px;background:linear-gradient(110deg,#f4f1e8,#e8eee7)}
.pageHero:before{content:"";position:absolute;left:0;top:0;bottom:0;width:7px;background:#ba7459}
.pageHero h1{font-size:clamp(45px,4.5vw,66px);line-height:1.14;margin:12px 0 17px}
.pageHero p{max-width:830px;font-size:17px;line-height:1.7}
.content{padding:45px 0 80px;background:#fffefa}
.medicineHero{padding:42px 0}
.medicineHeroGrid{grid-template-columns:minmax(0,1fr) minmax(390px,.8fr);gap:48px}
.medicineHeroCopy h1{font-size:clamp(38px,3.7vw,56px)}
.medicineHeroMedia{height:380px;padding:20px;background:#fff;border:1px solid #cbdacf;border-radius:3px}
.medicineHeroMedia img{width:100%;max-height:325px;object-fit:contain;mix-blend-mode:normal}
.medicineHeroMedia figcaption{font-size:11px;line-height:1.4}
.verificationStrip span{padding:8px 11px;font-size:12px}.verificationStrip b{font-size:12px}
.medicineUseBox{padding:21px 24px;margin-bottom:23px;border-left:5px solid var(--teal);background:#e8f2e9}
.medicineUseBox span{font-size:12px}.medicineUseBox strong{font-size:21px}.medicineUseBox small{font-size:13px}
.detailGrid{grid-template-columns:minmax(0,1fr) 320px;gap:45px}
.fact{grid-template-columns:180px minmax(0,1fr);padding:15px 0;gap:20px}
.fact dt,.fact dd{font-size:14px;line-height:1.55}
.sideNote{padding:23px;border-radius:3px;background:#f6f0eb}
.sideNote>strong{font-size:13px}.sideNote>p{font-size:13px}.sideVerify span,.sideVerify b{font-size:12px}
.sourceBox{padding-top:20px}.sourceBox>strong{font-size:15px}.sourceBox>p,.sourceBox>a{font-size:13px}
.healthDetailHero{padding:42px 0;background:#ebf0e8}
.healthDetailGrid{grid-template-columns:minmax(380px,.8fr) minmax(0,1fr);gap:58px}
.healthDetailMedia{height:430px;padding:30px;border-radius:3px}
.healthDetailIntro h1{font-size:clamp(40px,3.9vw,58px)}.healthDetailIntro>p{font-size:17px}
.healthDetailBadges span{font-size:12px;padding:7px 11px;border-radius:3px}
/* Editorial pages: each section gets a clear visual unit. */
.content .guideList{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
.content .guideRow{display:flex;min-height:230px;padding:25px;border:1px solid #d4dfd6;background:#f8f9f3;align-items:flex-start}
.content .guideRow:nth-child(3n+1){background:#194c48;color:#fff}
.content .guideRow:nth-child(3n+1) h3,.content .guideRow:nth-child(3n+1) p,.content .guideRow:nth-child(3n+1) .eyebrow,.content .guideRow:nth-child(3n+1)>b{color:#fff}
.content .guideRow h3{margin:18px 0 9px;font-size:25px;line-height:1.25}
.content .guideRow p{font-size:15px;line-height:1.55}.content .guideRow .eyebrow{font-size:11px}
.content .guideRow>b{font-size:22px}
.article{max-width:900px;margin-inline:auto}
.articleMeta{font-size:12px;margin-bottom:24px}
.article h2{margin:35px 0 10px;font-family:var(--display);font-size:31px;font-weight:600}
.article p{font-size:17px;line-height:1.85;color:#3b5353}
.articleFooter{margin-top:40px;padding:18px 24px;border-left:4px solid var(--teal);background:#edf3ec}
/* Hospital finder */
.filters{gap:10px;margin-bottom:25px}
.filters .filter.on{background:var(--ink);border-color:var(--ink);color:#fff}
.hospitalGrid{gap:16px;border:0}
.hospitalCard,.hospitalCard:nth-child(even){padding:24px;border:1px solid #d6e0d6;background:#f9faf5}
.hospitalCard h2{font-size:23px;margin:12px 0 4px}
.hospitalJa{font-size:13px;margin-bottom:15px}
.hospitalRoute{font-size:13px;padding:12px 14px;margin:14px 0 16px}
.hospitalFacts{font-size:13px;line-height:1.7;margin-bottom:18px}
.hospitalMeta{font-size:11px;margin-bottom:14px}.hospitalCard>a{font-size:13px}
/* Provenance and organization */
.sourceHierarchy{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px;border:0}
.sourceLevel{display:block;min-height:166px;padding:22px 25px;border:1px solid #d9e0d6;background:#f7f9f3}
.sourceLevel:nth-child(1){background:#184b48;color:#fff;border-color:#184b48}
.sourceLevel:nth-child(1) h2,.sourceLevel:nth-child(1) p{color:#fff}
.sourceLevel h2{font-size:20px;margin:0 0 13px}.sourceLevel p{font-size:14px;line-height:1.65}
.policyGrid,.aboutBoundary{gap:14px;border:0;margin-top:40px}
.policyCard,.aboutBoundary article,.policyCard:nth-child(even),.aboutBoundary article:nth-child(even){padding:25px;border:1px solid #d9e0d6;background:#f7f9f3}
.policyCard>span,.aboutBoundary article>span{margin-bottom:25px;color:#ab634d;font-size:13px}
.policyCard h3,.aboutBoundary h3{font-size:20px}.policyCard p,.aboutBoundary p{font-size:14px;line-height:1.68}
.sourceLinks{margin-top:40px}.sourceLink{padding:18px 7px}.sourceLink strong{font-size:16px}.sourceLink small{font-size:13px}
.transparencyBox{margin-top:30px}.transparencyBox>div{padding:25px}.transparencyBox strong{font-size:16px}.transparencyBox p{font-size:14px}
.strengthList{gap:14px;border:0;margin-top:30px}
.strengthRow,.strengthRow:nth-child(even){padding:24px;border:1px solid #d9e0d6;background:#f7f9f3}
.strengthRow>span{font-size:13px}.strengthRow h3{font-size:19px}.strengthRow p{font-size:14px}
/* Inquiry */
.institutionOnlyNotice{margin:0 0 24px;padding:16px 20px;background:#f8eee9;border:1px solid #e4ccc1;font-size:13px}
.formGrid{gap:19px}.field{gap:8px}.field label{font-size:14px}.field input{height:50px;padding:0 14px}.field textarea{min-height:120px;padding:13px 14px}.field input,.field textarea{font-size:15px;border-radius:3px}
.formNote{font-size:12px}.generated{font-size:13px;padding:20px}.rxNote{font-size:13px}
@media(max-width:1100px){
 .nav{gap:14px}.nav a{font-size:12px}.headSearch{display:none}
 .heroGrid{grid-template-columns:1fr}.heroMedicineGallery{max-width:850px}
 .medicineIndexHeroGrid,.healthIndexHeroGrid{grid-template-columns:1fr;gap:22px}
 .medicineIndexTrust{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.medicineIndexTrust>div{display:block;border:0;padding:0}.medicineIndexTrust>p{grid-column:1/-1}
 .healthBoundary{max-width:100%}.healthCardGrid{grid-template-columns:repeat(2,minmax(0,1fr))}
 .medicineHeroGrid{grid-template-columns:minmax(0,1fr) minmax(320px,.8fr);gap:24px}
}
@media(max-width:820px){
 .wrap{width:min(var(--max),calc(100% - 32px))}
 .bar{gap:9px 14px}.nav{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:2px 12px;overflow:visible;width:100%;white-space:normal}.nav a{height:auto;padding:4px 0;font-size:13px;white-space:normal}
 .hero{padding:36px 0}.hero h1,:lang(zh-Hans) .hero h1,:lang(ja) .hero h1{font-size:clamp(40px,8vw,56px)}.lead{font-size:16px}
 .heroMedicineGallery{grid-template-rows:190px 190px}.heroMedicineInfo strong{font-size:17px}.heroMedicineInfo p{font-size:12px}.heroMedicine1 .heroMedicineInfo strong{font-size:21px}
 .route{grid-template-columns:repeat(2,minmax(0,1fr))}.routeRow,.routeRow:last-child{min-height:130px;grid-column:auto}
 .section{padding:56px 0}.sectionHead h2{font-size:38px}
 .medicineIndexHero,.healthIndexHero{padding:34px 0}.medicineIndexIntro h1,.healthIndexHero h1,.pageHero h1{font-size:clamp(39px,8vw,54px)}
 .medicineCardGrid{grid-template-columns:1fr}.medicinePhotoFrame{height:260px}
 .medicineHeroGrid,.healthDetailGrid,.detailGrid{grid-template-columns:1fr}.medicineHeroMedia{height:330px}.healthDetailMedia{height:350px}
 .content .guideList,.sourceHierarchy,.hospitalGrid{grid-template-columns:1fr}.content .guideRow{min-height:0}
 .sourceLevel{min-height:0}.policyGrid,.aboutBoundary,.strengthList{grid-template-columns:repeat(2,minmax(0,1fr))}
 .sideNote{order:0}.healthCardGrid{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media(max-width:560px){
 .wrap{width:calc(100% - 28px)}.bar{min-height:60px}.wordmark small{display:none}.wordTop b{font-size:12px}.brandSymbol{width:36px;height:36px;flex-basis:36px}.lang{min-width:86px;font-size:11px}.nav a{font-size:12px}
 .heroGrid{grid-template-columns:minmax(0,1fr)}.heroIntro,.heroStage,.heroMedicineGallery{min-width:0;width:100%}.searchBox{width:100%;max-width:100%}.searchBox input{min-width:0;width:0;flex:1 1 0}.searchBox button{min-width:96px;padding-inline:8px}
 .hero h1,:lang(zh-Hans) .hero h1,:lang(ja) .hero h1{font-size:42px}.lead{font-size:15px}
 .heroMedicineGallery{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:270px auto;gap:8px;min-height:0}
 .heroMedicine2,.heroMedicine3{min-height:210px}
 .heroMedicine1{grid-column:1/-1;grid-row:1}.heroMedicine1 .heroMedicineImage{height:155px;flex-basis:155px;padding:14px}.heroMedicine2,.heroMedicine3{grid-column:auto;display:flex;flex-direction:column}.heroMedicineImage{height:90px;flex:0 0 90px;padding:10px}.heroMedicineInfo{padding:9px}.heroMedicineInfo span{font-size:10px}.heroMedicineInfo strong,.heroMedicine1 .heroMedicineInfo strong{font-size:16px}.heroMedicineInfo small,.heroMedicineInfo p{display:none}.heroMedicineInfo .heroMedicineCredit{margin-top:5px;padding-top:5px;font-size:9px}.heroMedicineArrow{width:23px;height:23px;font-size:14px}
 .route{grid-template-columns:1fr}.routeRow,.routeRow:last-child{min-height:0}
 .medicineIndexTrust{display:block}.medicineIndexTrust>div{padding:7px 0;border-bottom:1px solid rgba(255,255,255,.15)}
 .medicineIndexTrust{display:flex;align-items:center;gap:18px;padding:12px 15px}.medicineIndexTrust>div{padding:0;border:0}.medicineIndexTrust>div span{font-size:16px}.medicineIndexTrust>div strong{font-size:10px}.medicineIndexTrust>div:nth-child(3),.medicineIndexTrust>p{display:none}
 .medicineFilters{display:flex;overflow-x:auto;flex-wrap:nowrap;padding-bottom:7px}.medicineFilters .filter{flex:none}
 .medicinePhotoFrame{height:225px;padding:18px}.medicineCard h2{font-size:23px}.medicineCardUse p{font-size:14px}.medicineCardMeta span{font-size:10px}
 .healthCardGrid{grid-template-columns:1fr}.healthCardMedia{height:250px}.healthDetailMedia{height:290px}
 .medicineHeroMedia{height:300px}.medicineUseBox strong{font-size:18px}.verificationStrip span{font-size:11px}
 .pageHero{padding:33px 0}.pageHero h1{font-size:42px}.pageHero p{font-size:15px}.content{padding:30px 0 55px}
 .content .guideRow h3{font-size:21px}.content .guideRow p,.article p{font-size:15px}.article h2{font-size:26px}
 .policyGrid,.aboutBoundary,.strengthList,.transparencyBox{grid-template-columns:1fr}
 .fact{grid-template-columns:1fr;gap:2px}.fact dt,.fact dd{font-size:13px}
 .formGrid{grid-template-columns:1fr}
}
/* Product dossiers: aligned sections and readable source-backed facts. */
.productReference{min-width:0;margin-top:42px}.referenceIntro{padding:25px 28px;background:#edf2ef;border-left:4px solid #23665b}.referenceIntro>span{font-size:10px;font-weight:700;letter-spacing:1.5px;color:#315d53}.referenceIntro h2{font-size:27px;margin:9px 0 12px;line-height:1.35}.referenceIntro p{font-size:14px;line-height:1.9;margin:0;color:#475953}
.referenceSection{padding:32px 0;border-bottom:1px solid #d8dfdb;scroll-margin-top:130px;min-width:0}.referenceHeading{display:flex;align-items:baseline;gap:15px;margin:0 0 17px}.referenceHeading>span{color:#52786a;font:500 13px/1 monospace;flex:none}.referenceHeading h2{font-size:24px;line-height:1.4;margin:0;letter-spacing:-.3px}.referenceSection p{font-size:16px;line-height:1.95;color:#384b43;margin:0 0 15px;overflow-wrap:anywhere}.referenceSection h3{font-size:15px;margin:20px 0 10px}.referenceCitation{font-size:12px;color:#256553;display:inline-block;margin-top:3px;text-underline-offset:3px;text-decoration:underline}.referenceSidebar{align-self:start;position:sticky;top:112px;min-width:0}.referenceNav{padding-bottom:24px;margin-bottom:23px;border-bottom:1px solid #cad6ce}.referenceNav>strong{display:block;font-size:15px;color:#173e31;margin-bottom:14px}.referenceNav ol{list-style:none;padding:0;margin:0}.referenceNav li+li{margin-top:6px}.referenceNav a{display:flex;gap:10px;align-items:baseline;font-size:13px;line-height:1.65;padding:3px 0;color:#305745}.referenceNav a:hover{color:#132f25;text-decoration:underline}.referenceNav a span{font-size:10px;font-family:monospace;color:#507664;flex:none}
.referenceTable{width:100%;border-collapse:collapse;table-layout:fixed;font-size:14px;margin:20px 0}.referenceTable caption{text-align:left;font-size:12px;color:#54695f;padding:0 0 9px}.referenceTable th,.referenceTable td{text-align:left;vertical-align:top;border-bottom:1px solid #dce3de;padding:12px 16px;overflow-wrap:anywhere;line-height:1.7}.referenceTable thead th{background:#e9efeb;font-size:12px;letter-spacing:.3px}.referenceTable thead th:first-child{width:52%}.referenceTable tbody th{font-weight:500}.referenceTable tbody tr:nth-child(even){background:#f4f6f3}.referenceTable small{display:block;font-size:11px;line-height:1.65;color:#64736a;margin-top:2px}.referenceMiniFacts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin:20px 0;background:#eff3ef}.referenceMiniFacts div{padding:16px;border-right:1px solid #d9e1da;min-width:0}.referenceMiniFacts dt{font-size:11px;color:#536a5c}.referenceMiniFacts dd{font-size:15px;margin:7px 0 0;overflow-wrap:anywhere;font-weight:600}.referenceSection .originalLabel{font-size:14px;padding:18px;background:#f1f3ee;line-height:1.95;border:1px solid #e0e5dc}.referenceSources{list-style:none;padding:0;margin:0}.referenceSources li{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:15px;border-top:1px solid #e1e6df;padding:18px 0}.referenceSources a{font-weight:600;font-size:14px;text-decoration:underline;text-underline-offset:3px}.referenceSources li p{font-size:12px;margin:6px 0 0;line-height:1.8}.referenceSources li>span{font-size:10px;color:#566d5c;overflow-wrap:anywhere;max-width:160px;padding-top:4px}.referenceVerified{font-size:12px!important;color:#55715e!important}
.healthDetailMedia{margin:0;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;height:430px;padding:25px}.healthDetailMedia img{display:block;max-height:350px;width:100%;object-fit:contain;min-height:0;flex:1}.healthDetailMedia figcaption{font-size:11px;line-height:1.7;margin-top:12px;color:#526452;text-align:center}.healthDetailMedia figcaption a{text-decoration:underline;text-underline-offset:2px}.healthDetailGrid{align-items:center}.healthCardMedia img,.homeHealthMedia img{object-fit:contain;height:100%;width:100%}
@media(max-width:820px){.referenceSidebar{position:static;grid-row:1}.referenceNav ol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px 18px}.referenceSidebar>.sideVerify,.referenceSidebar>.btn,.referenceSidebar>.textLink{display:none}.referenceSidebar>p{font-size:12px;margin-bottom:0}.referenceNav{margin-bottom:15px;padding-bottom:15px}.referenceSection{scroll-margin-top:125px}.healthDetailMedia{height:370px}.healthDetailMedia img{max-height:290px}.detailGrid{gap:28px}}
@media(max-width:560px){.referenceIntro{padding:20px}.referenceIntro h2{font-size:24px}.referenceHeading{gap:12px}.referenceHeading h2{font-size:21px}.referenceSection{padding:27px 0}.referenceSection p{font-size:15px;line-height:1.95}.referenceTable th,.referenceTable td{padding:10px;font-size:13px}.referenceTable small{font-size:10px}.referenceSources li{grid-template-columns:1fr;gap:3px}.referenceSources li>span{max-width:none;order:-1}.referenceMiniFacts{grid-template-columns:1fr}.referenceMiniFacts div{display:grid;grid-template-columns:105px minmax(0,1fr);border-right:0;border-bottom:1px solid #d9e1da;padding:12px 15px;align-items:baseline}.referenceMiniFacts dd{margin:0;font-size:13px}.referenceNav a{font-size:11px}.referenceNav ol{gap:2px 10px}.healthDetailMedia{height:330px;padding:20px}.healthDetailMedia img{max-height:255px}.productReference{margin-top:30px}}
/* Navigation and reading improvements based on the second live-site audit. */
.skipLink{position:fixed;top:8px;left:14px;transform:translateY(-180%);z-index:100;background:#fff;padding:12px 20px;color:#183d34;border:2px solid #183d34}.skipLink:focus{transform:none}
#main-content{scroll-margin-top:135px;outline:none}.breadcrumbs{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;padding-top:18px;padding-bottom:18px;font-size:12px;color:#53635c}.breadcrumbs a{text-decoration:underline;text-underline-offset:3px}.breadcrumbs [aria-current]{overflow-wrap:anywhere}.contentLanguage{font-size:13px;padding-top:8px;padding-bottom:18px}.contentLanguage a{text-decoration:underline}
.searchHint{font-size:12px!important;line-height:1.7!important;margin:12px 0 0!important;color:#52645b!important}.searchHint a{color:#214a3e;text-decoration:underline;text-underline-offset:3px}.medicineIndexTrust>div:last-of-type{grid-column:1/-1;padding-top:10px;border-top:1px solid #57736b}.medicineIndexTrust>div:last-of-type span{font-size:19px;white-space:nowrap;font-variant-numeric:tabular-nums}
.healthFilters{margin-bottom:24px}.healthCardServing{display:flex;justify-content:space-between;gap:12px;border-top:1px solid #d8dfda;padding-top:12px;margin-top:auto;font-size:12px;color:#52665a}.healthCardServing strong{color:#274b3c}.healthCardBody{display:flex;flex-direction:column;flex:1}.healthCardBody>p{margin-bottom:18px}.healthCardFoot{margin-top:16px}.packVariants{padding:18px 20px;background:#edf2eb;margin-top:24px}.packVariants strong{display:block;font-size:13px;margin-bottom:8px}.packVariants a{font-size:14px;text-decoration:underline;text-underline-offset:3px}
.readingMenu summary{display:none}.readingActions{display:flex;gap:12px;flex-wrap:wrap;border-bottom:1px solid #cbd6ce;padding-bottom:16px;margin-bottom:18px}.readingActions button,.readingActions a{font:inherit;font-size:12px;color:#284d3e;background:transparent;border:1px solid #bdcfc1;padding:9px 10px;cursor:pointer}.referenceSidebar{max-height:calc(100dvh - 130px);overflow:auto;scrollbar-width:thin}.referenceNav a{min-height:30px}.referenceNav a:focus-visible{outline-offset:0}.referenceSection:target .referenceHeading h2{text-decoration:underline;text-decoration-color:#8faaa0;text-underline-offset:6px}
.generated{white-space:normal;scroll-margin-top:145px}.generated h2{font-size:24px;margin:0 0 12px}.generated label{display:block;font-size:13px;margin:16px 0 8px}.generated textarea{display:block;width:100%;min-height:270px;padding:15px;border:1px solid #b8c9bd;font:inherit;font-size:14px;line-height:1.8;resize:vertical;background:#fff;color:#24392e}.draftActions{display:flex;flex-wrap:wrap;gap:12px;margin-top:16px}.generated [role=status]{font-size:13px;min-height:1.7em;margin:12px 0 0}
@media(max-width:820px){.referenceSidebar{max-height:none;overflow:visible}.readingMenu{position:fixed;inset-inline:14px;bottom:calc(12px + env(safe-area-inset-bottom));z-index:35;background:#fff;border:1px solid #bdcfc1;box-shadow:0 5px 25px #1a352b26;max-height:65dvh;overflow:auto;border-radius:4px}.readingMenu summary{display:flex;justify-content:space-between;padding:14px 18px;background:#224c3e;color:#fff;font-size:14px;cursor:pointer;list-style:none;min-height:48px}.readingMenu summary::-webkit-details-marker{display:none}.readingMenu[open] summary span{transform:rotate(45deg)}.readingMenu .referenceNav{margin:0;padding:12px 16px;border:0}.readingMenu .referenceNav>strong{display:none}.readingMenu .referenceNav a{font-size:13px;min-height:42px;padding:9px 0}.readingActions{margin:0;padding:0;border:0}.referenceSidebar>strong,.referenceSidebar>p{display:none}.referenceSidebar{padding:0!important;border:0!important;background:transparent!important}.detailGrid{gap:16px}main:has(.productReference){padding-bottom:75px}}
@media(max-width:560px){.breadcrumbs{padding-top:14px;padding-bottom:14px;gap:7px;font-size:11px}.medicineIndexTrust>div:last-of-type{display:none}.readingActions button,.readingActions a{padding:10px 14px;min-height:44px}.readingMenu .referenceNav ol{grid-template-columns:1fr 1fr;gap:0 12px}.readingMenu .referenceNav a{font-size:12px}.healthCardServing strong{font-size:12px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto!important}*,*::before,*::after{animation:none!important;transition:none!important}}
@media print{@page{size:A4;margin:16mm}html,body{background:white!important;color:#111!important;font-size:11pt}header.top,.foot,.skipLink,.readingMenu,.readingActions,.referenceSidebar,.breadcrumbs,.contentLanguage,.sourceActions,.packVariants,.heroActions{display:none!important}.wrap{max-width:none;width:100%;padding:0}.detailGrid,.medicineHeroGrid,.healthDetailGrid{display:block!important}.pageHero,.medicineHero,.healthDetailHero,.content{padding:0!important;background:#fff!important;border:0!important}.medicineHeroCopy h1,.healthDetailIntro h1{font-size:24pt!important}.medicineHeroMedia,.healthDetailMedia{height:auto!important;max-width:70mm;margin:8mm 0;padding:0!important;break-inside:avoid}.medicineHeroMedia img,.healthDetailMedia img{max-height:50mm!important;max-width:70mm!important}.referenceIntro{margin-top:8mm;padding:5mm;break-inside:avoid}.referenceSection{padding:5mm 0;scroll-margin:0}.referenceSection p{font-size:10pt;line-height:1.6}.referenceHeading{break-after:avoid}.referenceHeading h2{font-size:16pt}.referenceTable th,.referenceTable td{padding:2mm;font-size:9pt}.referenceTable thead{display:table-header-group}.referenceTable tr,.fact,.referenceSources li{break-inside:avoid}.referenceCitation,.referenceSources a{color:#111;text-decoration:underline}.referenceSources a::after{content:' (' attr(href) ')';font-size:8pt;overflow-wrap:anywhere}.referenceSources li{display:block}.referenceSources li>span{display:none}.verificationStrip,.healthDetailBadges{font-size:9pt}main:has(.productReference){padding-bottom:0}}

.operatorDisclosure{background:#edf2eb;border-left:3px solid #42685a;padding:24px 28px;margin-bottom:30px}.operatorDisclosure h2{font-size:20px;margin:0 0 12px}.operatorDisclosure p{font-size:14px;line-height:1.9;margin:10px 0}.operatorDisclosure a,.inquiryPrivacy a{color:#285d48;text-decoration:underline;text-underline-offset:3px}.inquiryPrivacy{font-size:13px;line-height:1.8;margin:14px 0}.legalArticle section{padding:22px 0;border-bottom:1px solid #d6dfd8}.legalArticle section h2{font-size:24px;margin:0 0 12px}.legalArticle section p{margin:0;line-height:1.9}.policyUpdated{font-size:13px!important;margin-top:18px!important}.policyServices a,.policyRelated a{color:#285d48;text-decoration:underline;text-underline-offset:3px}.policyServices li{margin:10px 0;overflow-wrap:anywhere}.policyRelated{display:flex;gap:20px;flex-wrap:wrap;padding-top:24px;font-size:14px}
@media(max-width:560px){.operatorDisclosure{padding:20px}.legalArticle section h2{font-size:20px}.legalArticle section p{font-size:15px}.legalArticle section{padding:20px 0}}
`;

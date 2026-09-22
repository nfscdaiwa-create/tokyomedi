import { SITE, EMAIL, L, D, slugs } from "./content.js";
import { CSS } from "./styles.js";

export function esc(v){
  return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
export function path(l,s){ return "/"+l+(s?"/"+s:""); }
function idx(s){ return {medicines:0,kampo:1,health:2,"medical-travel":3,resources:4,about:5,contact:6}[s]; }
export function lab(l,s){ return L[l].nav[idx(s)]; }

function header(l,active){
  const t=L[l];
  return '<header class="top"><div class="wrap bar">'+
    '<a class="brand" href="'+path(l,'')+'"><span class="mark">+</span><span>TOKYO MEDI<small>JAPAN HEALTHCARE</small></span></a>'+
    '<nav class="nav">'+slugs.slice(0,5).map(s=>'<a class="'+(active===s?'on':'')+'" href="'+path(l,s)+'">'+esc(lab(l,s))+'</a>').join('')+'</nav>'+
    '<div class="actions"><a class="contactMini" href="'+path(l,'contact')+'">'+esc(t.nav[6])+'</a>'+
    '<select class="lang" onchange="location.href=this.value" aria-label="Language">'+
    Object.keys(L).map(k=>'<option value="'+path(k,active||'')+'" '+(k===l?'selected':'')+'>'+esc(L[k].name)+'</option>').join('')+
    '</select></div></div></header>';
}

function footer(l){
  const t=L[l];
  const disclaimer=l==='zh'
    ?'本站提供一般信息，不替代医生、药师或其他持证医疗专业人员。'
    :l==='ja'
      ?'本サイトは一般情報を提供するもので、医師・薬剤師などの医療専門家に代わるものではありません。'
      :'General information only. TOKYO MEDI does not replace doctors, pharmacists or other licensed healthcare professionals.';
  return '<footer class="foot"><div class="wrap footGrid"><div>'+
    '<div class="brand"><span class="mark">+</span><span>TOKYO MEDI<small>JAPAN HEALTHCARE</small></span></div>'+
    '<p>'+esc(disclaimer)+'</p></div><div class="footLinks"><div>'+
    slugs.slice(0,4).map(s=>'<a href="'+path(l,s)+'">'+esc(lab(l,s))+'</a>').join('')+
    '</div><div>'+slugs.slice(4).map(s=>'<a href="'+path(l,s)+'">'+esc(lab(l,s))+'</a>').join('')+
    '<a href="mailto:'+EMAIL+'">'+EMAIL+'</a></div></div></div>'+
    '<div class="wrap bottom"><span>© '+new Date().getUTCFullYear()+' TOKYO MEDI</span><span>Tokyo · Japan</span></div></footer>';
}

function shell(l,title,desc,active,body){
  return '<!doctype html><html lang="'+(l==='zh'?'zh-CN':l)+'"><head>'+
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'+
    '<title>'+esc(title)+' | TOKYO MEDI</title>'+
    '<meta name="description" content="'+esc(desc)+'"><meta name="theme-color" content="#0d2835">'+
    '<link rel="canonical" href="'+SITE+path(l,active||'')+'">'+
    '<meta property="og:type" content="website"><meta property="og:site_name" content="TOKYO MEDI">'+
    '<meta property="og:title" content="'+esc(title)+' | TOKYO MEDI"><meta property="og:description" content="'+esc(desc)+'">'+
    '<style>'+CSS+'</style></head><body>'+header(l,active)+body+footer(l)+'</body></html>';
}

function homeCopy(l){
  if(l==='zh') return {
    eyebrow:'日本药品 · 汉方 · 赴日医疗',
    title:'查日本药品、汉方和医疗信息，一打开就能用。',
    lead:'按药名、成分、厂家、汉方或赴日医疗需求查找资料。重要内容尽量链接日本官方和一手来源。',
    search:'搜索 TOKYO MEDI 内容',
    searchBtn:'开始查找',
    taskTitle:'你来这里，是要解决哪件事？',
    tasks:[
      ['medicines','查日本药品','药名、成分、剂型、厂家与安全信息'],
      ['kampo','查汉方','方剂名称、生药组成与资料来源'],
      ['health','查健康产品','营养、健康与自我护理产品'],
      ['medical-travel','准备赴日看病','病历、翻译、预约、费用与流程']
    ],
    how:'怎么用 TOKYO MEDI',
    steps:[
      ['01','先找到你要的内容','从药名、成分、类别或医疗需求开始。'],
      ['02','看清资料来源','重要信息尽量回到日本官方、厂家或医疗机构公开资料。'],
      ['03','再做个人医疗决定','涉及用药、诊断或治疗时，由医生或药师判断。']
    ],
    travelTitle:'准备来日本看病？',
    travelText:'把病历、翻译、预约问题、费用和回国后的随访一次准备清楚。',
    travelCta:'打开赴日医疗指南'
  };
  if(l==='ja') return {
    eyebrow:'医薬品 · 漢方 · 日本での受診',
    title:'日本の医薬品・漢方・医療情報を、すぐに探せる。',
    lead:'医薬品名、成分、メーカー、漢方、日本での受診準備を、情報源付きで分かりやすく整理します。',
    search:'TOKYO MEDI内を検索',
    searchBtn:'検索する',
    taskTitle:'何を調べたいですか？',
    tasks:[
      ['medicines','日本の医薬品を調べる','名称、成分、剤形、メーカー、安全性'],
      ['kampo','漢方を調べる','処方名、生薬、情報源'],
      ['health','健康関連製品を調べる','栄養、ウェルネス、セルフケア'],
      ['medical-travel','日本での受診を準備する','診療情報、翻訳、予約、費用']
    ],
    how:'TOKYO MEDIの使い方',
    steps:[
      ['01','必要な情報を探す','医薬品名、成分、カテゴリー、医療ニーズから始めます。'],
      ['02','情報源を確認する','公的機関、メーカー、医療機関などの一次情報を優先します。'],
      ['03','医療判断は専門家と行う','用薬、診断、治療は医師・薬剤師などに確認します。']
    ],
    travelTitle:'日本での受診を予定していますか？',
    travelText:'診療記録、翻訳、予約時の質問、費用、帰国後のフォローまで事前に整理します。',
    travelCta:'医療渡航ガイドを見る'
  };
  return {
    eyebrow:'JAPANESE MEDICINES · KAMPO · MEDICAL CARE',
    title:'Find Japanese medicines, Kampo and healthcare information.',
    lead:'Search by medicine name, ingredient, manufacturer, Kampo formula or medical-travel need. Important information links back to Japanese primary sources whenever possible.',
    search:'TOKYO MEDI topic',
    searchBtn:'Search',
    taskTitle:'What are you here to do?',
    tasks:[
      ['medicines','Find Japanese medicines','Names, ingredients, dosage forms, manufacturers and safety context'],
      ['kampo','Look up Kampo','Formula names, crude drugs and source information'],
      ['health','Understand health products','Nutrition, wellness and self-care categories'],
      ['medical-travel','Prepare medical travel','Records, translation, appointments, costs and process']
    ],
    how:'How TOKYO MEDI works',
    steps:[
      ['01','Find the topic','Start with a medicine, ingredient, category or healthcare need.'],
      ['02','Check the source','Prefer official, manufacturer and medical-institution source material.'],
      ['03','Make medical decisions with professionals','Medication, diagnosis and treatment decisions stay with licensed professionals.']
    ],
    travelTitle:'Planning medical care in Japan?',
    travelText:'Prepare records, translation needs, appointment questions, expected costs and follow-up before you travel.',
    travelCta:'Open medical travel guide'
  };
}

export function home(l){
  const c=homeCopy(l);
  const body='<main>'+
    '<section class="hero2"><div class="wrap hero2Grid"><div class="heroCopy">'+
    '<div class="eyebrow">'+esc(c.eyebrow)+'</div><h1>'+esc(c.title)+'</h1><p class="lead">'+esc(c.lead)+'</p>'+
    '<form class="bigSearch" action="'+path(l,'medicines')+'" method="get"><span>⌕</span><input name="q" placeholder="'+esc(c.search)+'" aria-label="'+esc(c.search)+'"><button type="submit">'+esc(c.searchBtn)+'</button></form>'+
    '</div><div class="taskPanel"><div class="taskPanelTitle">'+esc(c.taskTitle)+'</div>'+
    c.tasks.map((x,i)=>'<a class="taskRow" href="'+path(l,x[0])+'"><span class="taskNo">0'+(i+1)+'</span><div><strong>'+esc(x[1])+'</strong><small>'+esc(x[2])+'</small></div><b>→</b></a>').join('')+
    '</div></div></section>'+
    '<section class="section taskSection"><div class="wrap"><div class="sectionTitle"><h2>'+esc(c.taskTitle)+'</h2></div><div class="taskCards">'+
    c.tasks.map((x,i)=>'<a class="taskCard" href="'+path(l,x[0])+'"><span class="taskIcon">'+['Rx','漢','+','✈'][i]+'</span><div><h3>'+esc(x[1])+'</h3><p>'+esc(x[2])+'</p></div><b>↗</b></a>').join('')+
    '</div></div></section>'+
    '<section class="section howSection"><div class="wrap"><div class="sectionTitle"><h2>'+esc(c.how)+'</h2></div><div class="howGrid">'+
    c.steps.map(x=>'<div class="howStep"><span>'+x[0]+'</span><h3>'+esc(x[1])+'</h3><p>'+esc(x[2])+'</p></div>').join('')+
    '</div></div></section>'+
    '<section class="medicalCta"><div class="wrap medicalCtaBox"><div><div class="eyebrow">'+esc(lab(l,'medical-travel'))+'</div><h2>'+esc(c.travelTitle)+'</h2><p>'+esc(c.travelText)+'</p></div><a class="btn primary" href="'+path(l,'medical-travel')+'">'+esc(c.travelCta)+' →</a></div></section>'+
    '</main>';
  return shell(l,c.title,c.lead,'',body);
}

function pageCards(l,s){
  if(s==='medicines'){
    return l==='zh'
      ?[['按药名查','从日文名、英文名或商品名进入。'],['按成分查','理解主要成分与剂型信息。'],['按厂家查','查看日本厂家与产品资料入口。'],['OTC 与处方药','分开整理，不混在一起。'],['标签与注意事项','帮助理解常见日本药品标签术语。'],['来源链接','重要信息尽量回到原始资料。']]
      :l==='ja'
        ?[['製品名から探す','日本語名・英語名・商品名から確認。'],['成分から探す','主成分と剤形を確認。'],['メーカーから探す','日本のメーカーと製品情報へ。'],['OTC・処方薬','カテゴリーを分けて整理。'],['表示・注意事項','日本の医薬品表示の基本用語を確認。'],['情報源','重要情報は一次資料へ。']]
        :[['Search by medicine','Japanese, English or product names.'],['Search by ingredient','Understand active ingredients and dosage forms.'],['Browse manufacturers','Find Japanese manufacturer and product sources.'],['OTC vs prescription','Keep the categories clearly separated.'],['Labels & cautions','Understand common Japanese medicine-label terminology.'],['Primary sources','Follow important information back to source material.']];
  }
  if(s==='kampo'){
    return l==='zh'
      ?[['方剂名称','按日文名、罗马字或常见中文名查找。'],['组成生药','理解方剂由哪些生药构成。'],['厂家资料','查看日本汉方厂家的公开资料。'],['剂型','颗粒、片剂等常见剂型信息。'],['安全提示','关注相互作用、重复成分和个体差异。'],['资料来源','尽量回到日本官方或厂家资料。']]
      :l==='ja'
        ?[['処方名','日本語名・ローマ字から確認。'],['構成生薬','処方を構成する生薬を確認。'],['メーカー情報','漢方メーカーの公開情報へ。'],['剤形','顆粒・錠剤などの情報。'],['安全性','相互作用や重複成分に注意。'],['情報源','公的・メーカー資料へつなげます。']]
        :[['Formula names','Find Japanese and romanized formula names.'],['Ingredients','See crude-drug composition.'],['Manufacturers','Reach Japanese Kampo manufacturer sources.'],['Dosage forms','Granules, tablets and other common forms.'],['Safety context','Interactions, duplicate ingredients and individual differences.'],['Sources','Connect back to official or manufacturer material.']];
  }
  if(s==='health'){
    return l==='zh'
      ?[['营养成分','先看成分，而不是先看广告词。'],['功能声称','区分标签声称与医学证据。'],['日常自我护理','整理常见自我护理类别。'],['日本健康产品','解释日本常见分类与标签。'],['安全边界','不把健康产品写成治疗方案。'],['资料来源','尽量给出原始信息入口。']]
      :l==='ja'
        ?[['栄養成分','広告より先に成分を見る。'],['表示上の主張','表示と医学的根拠を分ける。'],['セルフケア','日常的なセルフケア情報。'],['日本の健康製品','カテゴリーと表示を整理。'],['安全性の境界','健康製品を治療として扱わない。'],['情報源','元資料への導線を用意。']]
        :[['Ingredients first','Look at ingredients before marketing claims.'],['Claims vs evidence','Separate label claims from medical evidence.'],['Self-care','Organize everyday self-care categories.'],['Japanese health products','Explain common categories and labels.'],['Safety boundary','Do not present wellness products as treatment.'],['Sources','Provide direct paths to original material.']];
  }
  if(s==='medical-travel'){
    return l==='zh'
      ?[['01 准备病历','近期报告、影像、用药清单和简要病史。'],['02 确认翻译','只翻译接诊机构真正需要的内容。'],['03 预约与费用','提前问清远程预审、到院要求和费用范围。'],['04 行程安排','给检查、复诊、翻译和恢复留足时间。'],['05 陪同与语言','提前确认是否需要翻译或陪同。'],['06 回国后随访','出发前就想清楚后续如何衔接。']]
      :l==='ja'
        ?[['01 診療情報','直近の報告書、画像、服薬リストを準備。'],['02 翻訳','受診先が必要とする内容を優先。'],['03 予約・費用','遠隔確認、来院条件、概算費用を確認。'],['04 日程','検査、通訳、再診、回復時間を確保。'],['05 通訳・同行','必要なサポートを事前確認。'],['06 帰国後','フォローアップ方法を先に決める。']]
        :[['01 Prepare records','Recent reports, imaging, medication list and concise history.'],['02 Confirm translation','Translate what the receiving institution actually needs.'],['03 Appointments & costs','Clarify remote review, in-person requirements and estimated fees.'],['04 Plan the schedule','Allow time for tests, interpretation, follow-up and recovery.'],['05 Language support','Confirm interpretation or companion needs in advance.'],['06 Follow-up','Plan continuity of care after returning home.']];
  }
  if(s==='resources'){
    return l==='zh'
      ?[['PMDA','日本医药品医疗器械综合机构。'],['厚生劳动省','日本卫生与医疗政策官方信息。'],['厂家资料','药品与产品的官方公开资料。'],['医疗机构资料','医院与医疗机构公开信息。'],['安全信息','药品安全与风险沟通资料。'],['更新记录','重要内容保留来源和更新时间。']]
      :l==='ja'
        ?[['PMDA','医薬品医療機器総合機構。'],['厚生労働省','日本の保健医療に関する公的情報。'],['メーカー資料','製品の公式公開情報。'],['医療機関資料','病院・医療機関の公開情報。'],['安全性情報','医薬品安全性・リスク情報。'],['更新履歴','重要情報の出典と更新時期を明確に。']]
        :[['PMDA','Pharmaceuticals and Medical Devices Agency.'],['MHLW','Official Japanese health and medical policy information.'],['Manufacturer sources','Official product and medicine material.'],['Medical institutions','Hospital and institution public information.'],['Safety information','Medicine safety and risk communication.'],['Update history','Keep sources and update dates visible.']];
  }
  if(s==='about'){
    return l==='zh'
      ?[['做什么','整理日本医疗信息，让国际用户更容易理解和使用。'],['不做什么','不替代医生，不把广告当医学结论。'],['信息标准','重要内容尽量可追溯到来源。'],['语言','先做好英语、日语、中文，再扩展。'],['产品方向','搜索、药品资料、汉方、赴日医疗。'],['纠错','欢迎医疗机构、厂家和用户反馈更正。']]
      :l==='ja'
        ?[['目的','日本の医療情報を海外利用者が使いやすい形に整理。'],['しないこと','診断の代替や広告表現の誇張はしない。'],['情報基準','重要情報は出典まで追跡できるように。'],['言語','英語・日本語・中国語から展開。'],['プロダクト','検索、医薬品、漢方、医療渡航。'],['訂正','医療機関・メーカー・利用者からの修正を受け付けます。']]
        :[['What we do','Organize Japanese healthcare information for international users.'],['What we do not do','We do not replace clinicians or turn marketing into medical conclusions.'],['Information standard','Important content should be traceable to sources.'],['Languages','English, Japanese and Chinese first.'],['Product focus','Search, medicine reference, Kampo and medical travel.'],['Corrections','Institutions, manufacturers and users can submit corrections.']];
  }
  return [];
}

export function page(l,s){
  const d=D[l][s];
  if(s==='contact'){
    const contactText=l==='zh'?'商务合作、资料更正、医疗机构或厂家联系，可直接发邮件。':l==='ja'?'事業提携、情報訂正、医療機関・メーカーからのご連絡はこちら。':'For business cooperation, corrections, medical institutions or manufacturers, email us directly.';
    const body='<main><section class="pageHero"><div class="wrap"><div class="eyebrow">'+esc(d[0])+'</div><h1>'+esc(d[1])+'</h1><p class="lead">'+esc(contactText)+'</p></div></section><section class="content"><div class="wrap"><div class="contactBox"><strong>'+esc(d[0])+'</strong><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></div></div></section></main>';
    return shell(l,d[1],contactText,s,body);
  }
  const cards=pageCards(l,s);
  const body='<main><section class="pageHero"><div class="wrap"><div class="eyebrow">'+esc(d[0])+'</div><h1>'+esc(d[1])+'</h1><p class="lead">'+esc(d[2])+'</p></div></section>'+
    '<section class="content"><div class="wrap"><div class="infoGrid">'+cards.map(c=>'<article class="info"><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></article>').join('')+'</div></div></section></main>';
  return shell(l,d[1],d[2],s,body);
}

export function searchPage(l,q){
  const query=(q||"").trim();
  const t=L[l];
  const labels={
    en:{title:"Search TOKYO MEDI",empty:"Enter a topic to search.",none:"No matching section found.",found:"Matching sections",button:"Search"},
    ja:{title:"TOKYO MEDIを検索",empty:"検索するテーマを入力してください。",none:"一致するセクションが見つかりません。",found:"検索結果",button:"検索"},
    zh:{title:"搜索 TOKYO MEDI",empty:"请输入要查找的主题。",none:"没有找到匹配的栏目。",found:"匹配结果",button:"搜索"}
  }[l];
  const hay=slugs.map(slug=>({slug,title:lab(l,slug),text:(D[l][slug]||[]).join(" ")}));
  const needle=query.toLowerCase();
  const results=needle?hay.filter(x=>(x.title+" "+x.text).toLowerCase().includes(needle)):hay;
  const cards=results.length
    ? results.map(x=>'<a class="searchResult" href="'+path(l,x.slug)+'"><div><strong>'+esc(x.title)+'</strong><p>'+esc((D[l][x.slug]||[])[2]||"")+'</p></div><b>→</b></a>').join("")
    : '<div class="searchEmpty">'+esc(labels.none)+'</div>';
  const body='<main><section class="pageHero"><div class="wrap"><div class="eyebrow">'+esc(labels.title)+'</div><h1>'+esc(query||labels.title)+'</h1><form class="bigSearch searchPageForm" action="'+path(l,'search')+'" method="get"><span>⌕</span><input name="q" value="'+esc(query)+'" placeholder="'+esc(labels.empty)+'"><button type="submit">'+esc(labels.button)+'</button></form></div></section><section class="content"><div class="wrap"><div class="searchResults"><h2>'+esc(labels.found)+'</h2>'+cards+'</div></div></section></main>';
  return shell(l,query?query+" — "+labels.title:labels.title,labels.title,"search",body);
}

export function sitemap(){
  const urls=[];
  Object.keys(L).forEach(l=>{ urls.push(SITE+path(l,'')); slugs.forEach(s=>urls.push(SITE+path(l,s))); });
  return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+urls.map(x=>'  <url><loc>'+x+'</loc></url>').join('\n')+'\n</urlset>';
}
export function headers(extra){
  return Object.assign({"x-content-type-options":"nosniff","x-frame-options":"SAMEORIGIN","referrer-policy":"strict-origin-when-cross-origin","permissions-policy":"camera=(), microphone=(), geolocation=()"},extra||{});
}

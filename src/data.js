export const SITE = 'https://tokyomedi.com';
export const EMAIL = 'business@tokyomedi.com';
export const VERSION = '2026.09.22-rebuild';
export const LOCALES = ['zh-hans','en','ja'];

export const UI = {
  'zh-hans': {
    lang:'简体中文', nav:{medicines:'日本医药品',guides:'最新指南',travel:'赴日医疗',sources:'资料来源',about:'关于',inquiry:'咨询'},
    heroKicker:'日本医药品 · 医疗指南 · 赴日医疗',
    heroTitle:'先把日本医疗信息弄清楚，再决定下一步。',
    heroLead:'TOKYO MEDI 面向国际用户整理日本药品、官方资料、医疗指南和赴日医疗路径。处方药只作资料与品项展示，实际使用必须经过专业医疗流程。',
    searchPlaceholder:'搜索药名 / 成分 / 日文名 / 英文名', search:'搜索资料库',
    routeTitle:'你现在要做什么？',
    routeItems:[['medicines','查日本药品','按药名、成分和治疗领域查资料'],['guides','看医疗指南','读懂日本药品与医疗制度'],['travel','准备赴日医疗','按医疗需求理解接诊路径'],['inquiry','咨询下一步','个人咨询与机构询价分开处理']],
    strength:'日本医学实力', strengthLead:'不靠空泛宣传，直接从监管透明度、科研体系与临床机构能力理解日本医疗。',
    medicineDb:'日本医药品资料库', medicineLead:'数据库是工具，不是商城。以名称、成分、类别和官方来源为核心组织。',
    why:'为什么选择 TOKYO MEDI', guides:'最新指南', travel:'赴日医疗资讯', inquiry:'医药品询价说明', rx:'处方药品项展示',
    viewAll:'查看全部', read:'阅读指南', details:'查看资料', official:'官方资料', updated:'核验日期',
    noBuy:'资料展示 · 不提供在线购买', rxNotice:'处方药信息仅供资料参考，不构成处方、诊断或治疗建议。是否适合使用、如何使用以及能否取得，必须由医生、药师及相关医疗流程决定。',
    filters:{all:'全部领域',cardio:'心血管',oncology:'肿瘤',metabolic:'代谢',neuro:'神经',immune:'免疫',respiratory:'呼吸'},
    travelFilter:'按医疗需求筛选', hospitalOfficial:'医院官方国际患者信息',
    personal:'个人用户', institution:'医疗机构 / 药局 / 企业',
    personalDesc:'先确认药品资料、处方属性和赴日医疗路径；不在网站上直接购买处方药。', institutionDesc:'按药品、数量、目的国和机构资质准备询价信息。',
    startPersonal:'了解个人咨询流程', startInstitution:'准备机构询价',
    footer:'一般医疗信息平台。信息不能替代医生、药师或其他持证医疗专业人员。'
  },
  en: {
    lang:'English', nav:{medicines:'Medicines',guides:'Guides',travel:'Medical Travel',sources:'Sources',about:'About',inquiry:'Inquiry'},
    heroKicker:'JAPANESE MEDICINES · GUIDES · MEDICAL TRAVEL',
    heroTitle:'Understand the information first. Then decide the next step.',
    heroLead:'TOKYO MEDI organizes Japanese medicine references, official sources, medical guides and medical-travel pathways for international users. Prescription medicines are reference-only; use requires an appropriate clinical process.',
    searchPlaceholder:'Search medicine / ingredient / Japanese or English name', search:'Search database',
    routeTitle:'What are you here to do?',
    routeItems:[['medicines','Look up medicines','Search names, ingredients and therapeutic areas'],['guides','Read medical guides','Understand Japanese medicine and care systems'],['travel','Plan care in Japan','Start from your medical need and intake pathway'],['inquiry','Find the next step','Separate patient questions from institutional sourcing']],
    strength:'Japan healthcare strengths', strengthLead:'Understand Japan through transparent regulation, research ecosystems and advanced clinical institutions — not vague marketing.',
    medicineDb:'Japanese medicine reference', medicineLead:'A reference tool, not a shop. Organized around names, ingredients, categories and primary sources.',
    why:'Why TOKYO MEDI', guides:'Latest guides', travel:'Medical travel', inquiry:'Medicine inquiry', rx:'Prescription reference',
    viewAll:'View all', read:'Read guide', details:'View reference', official:'Official source', updated:'Verified',
    noBuy:'Reference only · no online purchase', rxNotice:'Prescription-medicine information is provided for reference and does not constitute a prescription, diagnosis or treatment recommendation. Suitability, use and access require licensed professionals and the relevant clinical process.',
    filters:{all:'All fields',cardio:'Cardiovascular',oncology:'Oncology',metabolic:'Metabolic',neuro:'Neurology',immune:'Immunology',respiratory:'Respiratory'},
    travelFilter:'Filter by medical need', hospitalOfficial:'Official international-patient information',
    personal:'Individuals', institution:'Institutions / pharmacies / companies',
    personalDesc:'Confirm reference information, prescription status and care pathways first; prescription medicines are not sold directly on this site.', institutionDesc:'Prepare medicine, quantity, destination country and institutional credentials for an inquiry.',
    startPersonal:'See individual pathway', startInstitution:'Prepare institutional inquiry',
    footer:'General medical information platform. Content does not replace a doctor, pharmacist or other licensed professional.'
  },
  ja: {
    lang:'日本語', nav:{medicines:'医薬品',guides:'ガイド',travel:'医療渡航',sources:'情報源',about:'TOKYO MEDI',inquiry:'お問い合わせ'},
    heroKicker:'日本の医薬品 · 医療ガイド · 医療渡航',
    heroTitle:'まず情報を明確に。その上で次の行動を決める。',
    heroLead:'TOKYO MEDIは、海外利用者向けに日本の医薬品情報、一次資料、医療ガイド、医療渡航の受診経路を整理します。処方薬は資料・品目表示のみで、実際の使用には適切な医療プロセスが必要です。',
    searchPlaceholder:'医薬品名・成分・日本語名・英語名を検索', search:'データベース検索',
    routeTitle:'何をしたいですか？',
    routeItems:[['medicines','日本の医薬品を調べる','名称・成分・領域から資料を探す'],['guides','医療ガイドを読む','日本の医薬品・制度を理解する'],['travel','日本での受診を準備する','医療ニーズから受入経路を確認する'],['inquiry','次の相談先を確認する','個人相談と機関向け照会を分ける']],
    strength:'日本医療の強み', strengthLead:'抽象的な宣伝ではなく、規制の透明性、研究基盤、臨床機関の受入体制から理解します。',
    medicineDb:'日本医薬品データベース', medicineLead:'ECではなくリファレンス。名称、成分、カテゴリー、一次情報を中心に整理します。',
    why:'TOKYO MEDIを選ぶ理由', guides:'最新ガイド', travel:'医療渡航情報', inquiry:'医薬品照会の流れ', rx:'処方薬リファレンス',
    viewAll:'すべて見る', read:'ガイドを読む', details:'資料を見る', official:'一次情報', updated:'確認日',
    noBuy:'資料表示のみ · オンライン販売なし', rxNotice:'処方薬情報は資料目的であり、処方・診断・治療の推奨ではありません。適否、使用方法、入手可否は医師・薬剤師等の専門家および適切な医療プロセスで判断されます。',
    filters:{all:'すべて',cardio:'循環器',oncology:'腫瘍',metabolic:'代謝',neuro:'神経',immune:'免疫',respiratory:'呼吸器'},
    travelFilter:'医療ニーズで絞り込む', hospitalOfficial:'病院公式・国際患者情報',
    personal:'個人の方', institution:'医療機関 / 薬局 / 企業',
    personalDesc:'まず医薬品情報、処方区分、日本での受診経路を確認します。処方薬の直接販売は行いません。', institutionDesc:'医薬品、数量、仕向国、機関資格を整理して照会します。',
    startPersonal:'個人向けの流れを見る', startInstitution:'機関向け照会を準備',
    footer:'一般的な医療情報プラットフォームです。医師・薬剤師等の有資格専門家に代わるものではありません。'
  }
};

export const strengths = [
  {id:'regulation',title:{'zh-hans':'监管与原始资料','en':'Regulation & primary sources','ja':'規制と一次資料'},body:{'zh-hans':'以 PMDA、厚生劳动省、厂家与医疗机构公开资料作为事实核验起点。','en':'Use PMDA, MHLW, manufacturer and medical-institution sources as the starting point for verification.','ja':'PMDA、厚生労働省、メーカー、医療機関の公開資料を検証の起点にします。'}},
  {id:'research',title:{'zh-hans':'科研与转化医学','en':'Research & translational medicine','ja':'研究とトランスレーショナル医療'},body:{'zh-hans':'关注 iPS、再生医疗、肿瘤学、精准诊疗等日本持续活跃的研究与临床转化领域。','en':'Follow active Japanese research and clinical translation in iPS, regenerative medicine, oncology and precision care.','ja':'iPS、再生医療、腫瘍学、精密医療など、日本で活発な研究と臨床応用を追います。'}},
  {id:'institutions',title:{'zh-hans':'先进医疗机构体系','en':'Advanced clinical institutions','ja':'高度医療機関'},body:{'zh-hans':'把医院强项、国际患者受理路径、语言与协调要求分开整理，避免把“名气”当成就诊指南。','en':'Separate hospital strengths, overseas-patient intake, language and coordination requirements instead of treating reputation as a care pathway.','ja':'病院の強み、海外患者の受入経路、言語・調整条件を分けて整理します。'}},
  {id:'traceability',title:{'zh-hans':'可追溯的信息结构','en':'Traceable information','ja':'追跡可能な情報構造'},body:{'zh-hans':'页面显示来源层级与核验日期，让用户知道信息从哪里来、什么时候确认过。','en':'Show source level and verification date so readers know where information came from and when it was checked.','ja':'情報源の階層と確認日を表示し、出典と更新状況を明確にします。'}}
];

export const medicines = [
  ['amlodipine','Amlodipine','アムロジピン','氨氯地平','cardio','tablet','Rx'],
  ['nivolumab','Nivolumab','ニボルマブ','纳武利尤单抗','oncology','injection','Rx'],
  ['pembrolizumab','Pembrolizumab','ペムブロリズマブ','帕博利珠单抗','oncology','injection','Rx'],
  ['osimertinib','Osimertinib','オシメルチニブ','奥希替尼','oncology','tablet','Rx'],
  ['trastuzumab-deruxtecan','Trastuzumab deruxtecan','トラスツズマブ デルクステカン','曲妥珠单抗德鲁斯特康','oncology','injection','Rx'],
  ['lecanemab','Lecanemab','レカネマブ','仑卡奈单抗','neuro','injection','Rx'],
  ['sacubitril-valsartan','Sacubitril / valsartan','サクビトリルバルサルタン','沙库巴曲缬沙坦','cardio','tablet','Rx'],
  ['empagliflozin','Empagliflozin','エンパグリフロジン','恩格列净','metabolic','tablet','Rx'],
  ['semaglutide','Semaglutide','セマグルチド','司美格鲁肽','metabolic','product-dependent','Rx'],
  ['edoxaban','Edoxaban','エドキサバン','依度沙班','cardio','tablet','Rx'],
  ['tolvaptan','Tolvaptan','トルバプタン','托伐普坦','cardio','tablet','Rx'],
  ['pirfenidone','Pirfenidone','ピルフェニドン','吡非尼酮','respiratory','tablet','Rx'],
  ['dupilumab','Dupilumab','デュピルマブ','度普利尤单抗','immune','injection','Rx'],
  ['upadacitinib','Upadacitinib','ウパダシチニブ','乌帕替尼','immune','tablet','Rx'],
  ['risankizumab','Risankizumab','リサンキズマブ','利生奇珠单抗','immune','injection','Rx'],
  ['ramelteon','Ramelteon','ラメルテオン','雷美替胺','neuro','tablet','Rx']
].map(([slug,en,ja,zh,area,form,status])=>({slug,en,ja,zh,area,form,status,verified:'2026-09-22',source:'https://www.pmda.go.jp/english/'}));

export const guides = [
  {
    slug:'read-japanese-medicine-information', date:'2026-09-22',
    title:{'zh-hans':'如何读懂日本药品官方资料','en':'How to read official Japanese medicine information','ja':'日本の医薬品公式資料の読み方'},
    excerpt:{'zh-hans':'先分清商品名、一般名、剂型、处方属性与官方附件，再看任何二手说明。','en':'Separate brand name, generic name, dosage form, prescription status and official documents before reading summaries.','ja':'商品名、一般名、剤形、処方区分、公式文書を分けて確認してから二次情報を読みます。'},
    sections:{
      'zh-hans':[['先确认“这是什么”','同一个成分可能对应不同商品、厂家和剂型。不要只凭包装照片或中文译名判断。'],['再回到官方资料','优先查看 PMDA、厚生劳动省和厂家公开资料，并确认资料日期。'],['最后才讨论个人使用','资料页能帮助理解药品，但不能替代医生对适应证、禁忌、剂量和相互作用的个体判断。']],
      en:[['First identify the medicine','The same ingredient can exist under different products, manufacturers and dosage forms. Do not identify a medicine from packaging or translation alone.'],['Then return to primary sources','Prioritize PMDA, MHLW and manufacturer material and check the date of the document.'],['Personal use comes last','A reference page can explain a medicine, but individual indication, contraindication, dose and interactions require a clinician.']],
      ja:[['まず医薬品を特定する','同じ成分でも製品、メーカー、剤形が異なることがあります。包装や翻訳名だけで判断しません。'],['一次資料に戻る','PMDA、厚生労働省、メーカー資料を優先し、資料の日付を確認します。'],['個人の使用判断は最後','資料の理解と、適応・禁忌・用量・相互作用の個別判断は別です。後者は医療専門家が行います。']]
    }
  },
  {
    slug:'prescription-vs-otc-japan', date:'2026-09-22',
    title:{'zh-hans':'日本处方药与 OTC 为什么必须分开','en':'Why prescription medicines and OTC medicines must be separated','ja':'処方薬とOTCを分けて考える理由'},
    excerpt:{'zh-hans':'页面结构、用户路径和咨询方式都不应该套同一种电商逻辑。','en':'Page structure, user journey and inquiry flow should not share one ecommerce pattern.','ja':'ページ構造、ユーザー導線、相談方法を同じECロジックに載せるべきではありません。'},
    sections:{
      'zh-hans':[['处方药不是普通商品','TOKYO MEDI 的处方药页面只展示事实资料和下一步医疗流程，不提供加入购物车。'],['OTC 也有风险分级','日本一般用医药品存在不同风险类别，具体销售与信息提供要求应以日本现行规则和药师指导为准。'],['网站的责任是分流','用户应该一眼知道自己是在查资料、准备就医，还是代表机构进行业务询价。']],
      en:[['Prescription medicine is not ordinary ecommerce','TOKYO MEDI prescription pages provide reference facts and next-step clinical pathways, not an add-to-cart flow.'],['OTC still has risk categories','Japanese non-prescription medicines are categorized by risk; current rules and pharmacist guidance remain important.'],['The site should route intent clearly','A reader should instantly know whether they are researching, preparing for care or making an institutional inquiry.']],
      ja:[['処方薬は一般的なEC商品ではない','TOKYO MEDIの処方薬ページは事実資料と医療上の次の手順を示し、カート購入は提供しません。'],['OTCにもリスク区分がある','日本の一般用医薬品にはリスク区分があり、販売・情報提供は現行制度と薬剤師の関与が重要です。'],['サイトは目的を分岐させる','情報検索、受診準備、機関照会を最初から分けて案内します。']]
    }
  },
  {
    slug:'prepare-records-for-japan', date:'2026-09-22',
    title:{'zh-hans':'赴日前，先准备哪些医疗资料','en':'What medical records to prepare before travelling to Japan','ja':'来日前に準備する医療資料'},
    excerpt:{'zh-hans':'病历摘要、近期检查、影像、用药清单和翻译需求应在联系医院前整理。','en':'Organize a medical summary, recent tests, imaging, medication list and translation needs before contacting a hospital.','ja':'診療サマリー、最近の検査、画像、服薬リスト、翻訳の必要性を病院連絡前に整理します。'},
    sections:{
      'zh-hans':[['先做一页病情摘要','把诊断、主要症状、既往治疗、目前问题和目标整理成一页，方便机构快速判断是否属于其接诊范围。'],['资料不要“全部翻译”','先确认医院真正需要哪些材料，再翻译关键报告和摘要，减少无效成本。'],['提前确认受理方式','部分日本大型医疗机构要求通过协调机构、原医疗机构或国际患者部门联系，不能假设可以直接到院。']],
      en:[['Create a one-page medical summary','Summarize diagnosis, major symptoms, prior treatment, current problem and goal so the institution can assess fit quickly.'],['Do not translate everything by default','Confirm what the hospital actually needs before translating key reports and summaries.'],['Confirm the intake route','Some major Japanese hospitals require coordinators, referring institutions or international-patient offices; do not assume walk-in access.']],
      ja:[['1ページの診療サマリーを作る','診断、主症状、既往治療、現在の課題、受診目的を簡潔にまとめます。'],['すべてを翻訳しない','病院が必要とする資料を確認してから、重要な報告書や要約を翻訳します。'],['受入経路を確認する','大規模病院ではコーディネーター、紹介元医療機関、国際患者窓口を通す場合があります。']]
    }
  },
  {
    slug:'foreign-approval-vs-japan', date:'2026-09-22',
    title:{'zh-hans':'海外获批，不等于日本已经可用','en':'Foreign approval does not equal Japanese availability','ja':'海外承認は日本での使用可能性と同義ではない'},
    excerpt:{'zh-hans':'一个药在美国或其他国家获批，并不会自动获得日本上市资格。','en':'Approval in the US or another country does not automatically confer Japanese marketing authorization.','ja':'米国などで承認されても、日本で自動的に承認されるわけではありません。'},
    sections:{
      'zh-hans':[['不同监管体系独立运行','判断日本状态时，应查询日本自己的批准、审评和官方资料，而不是只看海外新闻。'],['不要把“海外批准”写成“日本可购买”','这两件事在医疗和合规上完全不同，网站文案必须明确区分。'],['最终以日本主管机构与医疗机构为准','涉及未批准、适应证外使用或临床试验时，应进一步核对日本主管部门和实际接诊机构。']],
      en:[['Regulatory systems operate independently','To understand Japanese status, check Japanese approval and review information rather than relying on foreign news.'],['Do not turn “approved overseas” into “available in Japan”','Those are different medical and regulatory statements and must be written separately.'],['Use Japanese authorities and institutions for the final check','Unapproved use, off-label questions and clinical trials require current Japanese regulatory and clinical confirmation.']],
      ja:[['規制制度は独立している','日本での状況は、海外ニュースではなく日本の承認・審査・公式資料で確認します。'],['「海外承認」を「日本で入手可能」と書かない','医療上・規制上まったく異なる事実です。'],['最終確認は日本の主管機関と医療機関で','未承認、適応外、治験に関わる場合は、最新の日本の公的情報と受入医療機関を確認します。']]
    }
  }
];

export const hospitals = [
  {slug:'national-cancer-center',name:'National Cancer Center Hospital',ja:'国立がん研究センター中央病院',city:'Tokyo',area:'oncology',path:'Coordinator / international-patient route',url:'https://www.ncc.go.jp/en/about/appointments/index.html',verified:'2026-09-22'},
  {slug:'utokyo-hospital',name:'The University of Tokyo Hospital',ja:'東京大学医学部附属病院',city:'Tokyo',area:'multidisciplinary',path:'International Medical Center',url:'https://www.h.u-tokyo.ac.jp/english/international-patients/',verified:'2026-09-22'},
  {slug:'keio-hospital',name:'Keio University Hospital',ja:'慶應義塾大学病院',city:'Tokyo',area:'multidisciplinary',path:'International Patient Services / partner route for overseas patients',url:'https://www.hosp.keio.ac.jp/en/shinryo/international-patient-services/',verified:'2026-09-22'},
  {slug:'osaka-university-hospital',name:'The University of Osaka Hospital',ja:'大阪大学医学部附属病院',city:'Osaka',area:'multidisciplinary',path:'Center for Global Health / pre-arrival contact',url:'https://www.hosp.med.osaka-u.ac.jp/english/foreign_patients/',verified:'2026-09-22'},
  {slug:'kyoto-university-hospital',name:'Kyoto University Hospital',ja:'京都大学医学部附属病院',city:'Kyoto',area:'multidisciplinary',path:'Coordinator route for patients living outside Japan',url:'https://www.kuhp.kyoto-u.ac.jp/english/access/index.html',verified:'2026-09-22'},
  {slug:'ncvc',name:'National Cerebral and Cardiovascular Center',ja:'国立循環器病研究センター',city:'Osaka',area:'cardio',path:'Foreign-patient information / advanced cardiovascular and cerebrovascular care',url:'https://www.ncvc.go.jp/english/hospital/about/',verified:'2026-09-22'},
  {slug:'tokyo-midtown-clinic',name:'Tokyo Midtown Clinic',ja:'東京ミッドタウンクリニック',city:'Tokyo',area:'checkup',path:'Outpatient care / health screening / foreign visitor services',url:'https://www.tokyomidtown-mc.jp/en/',verified:'2026-09-22'}
];

export const sourceLinks = [
  ['PMDA','Pharmaceuticals and Medical Devices Agency','https://www.pmda.go.jp/english/'],
  ['MHLW','Ministry of Health, Labour and Welfare','https://www.mhlw.go.jp/english/'],
  ['RAD-AR','Risk/Benefit Assessment of Drugs – patient medicine information','https://www.rad-ar.or.jp/siori/english/']
];

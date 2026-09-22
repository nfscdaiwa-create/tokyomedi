export const SITE = 'https://tokyomedi.com';
export const EMAIL = 'beibei7jp1978@yahoo.co.jp';
export const VERSION = '2026.09.22-rebuild';
export const LOCALES = ['zh-hans','en','ja'];

export const UI = {
  'zh-hans': {
    lang:'简体中文', nav:{medicines:'日本医药品',guides:'最新指南',travel:'赴日医疗',sources:'资料来源',about:'关于',inquiry:'咨询'},
    heroKicker:'日本医药品 · 医疗指南 · 赴日医疗',
    heroTitle:'日本医药品与赴日医疗信息，以一手资料为起点。',
    heroLead:'药品尽量对应日本商品名、厂家、规格与 PMDA 产品级资料；赴日医疗信息回到医院官方国际患者入口。处方药不按普通商品处理，个人患者应进入正规的预约、诊察与处方流程。',
    searchPlaceholder:'搜索药名 / 成分 / 日文名 / 英文名', search:'搜索资料库',
    routeTitle:'你现在要做什么？',
    routeItems:[['medicines','查日本药品','按药名、成分和治疗领域查资料'],['guides','看医疗指南','读懂日本药品与医疗制度'],['travel','准备赴日医疗','按医疗需求理解接诊路径'],['inquiry','咨询下一步','个人咨询与机构询价分开处理']],
    strength:'日本医学实力，有具体成果', strengthLead:'不靠“日本医疗很先进”这种口号，用可核验的医学成果说明研究实力，再回到今天真实的药品与就医资料。',
    medicineDb:'日本医药品资料库', medicineLead:'数据库是工具，不是商城。以名称、成分、类别和官方来源为核心组织。',
    why:'为什么选择 TOKYO MEDI', guides:'最新指南', travel:'赴日医疗资讯', inquiry:'下一步：就医或机构询价', rx:'处方药品项展示',
    viewAll:'查看全部', read:'阅读指南', details:'查看资料', official:'官方资料', updated:'核验日期',
    noBuy:'资料展示 · 不提供在线购买', rxNotice:'处方药信息仅供资料参考，不构成处方、诊断或治疗建议。是否适合使用、如何使用以及能否取得，必须由医生、药师及相关医疗流程决定。',
    filters:{all:'全部领域',cardio:'心血管',oncology:'肿瘤',metabolic:'代谢',neuro:'神经',immune:'免疫',respiratory:'呼吸'},
    travelFilter:'按医疗需求筛选', hospitalOfficial:'医院官方国际患者信息',
    personal:'个人用户', institution:'医疗机构 / 药局 / 企业',
    personalDesc:'个人患者从医院受理、预约与挂号进入医生诊察；是否检查、治疗和开药由医生判断。本站不直接销售处方药。', institutionDesc:'按药品、数量、目的国和机构资质准备询价信息。',
    startPersonal:'查看赴日就医流程', startInstitution:'准备机构询价',
    footer:'一般医疗信息平台。信息不能替代医生、药师或其他持证医疗专业人员。'
  },
  en: {
    lang:'English', nav:{medicines:'Medicines',guides:'Guides',travel:'Medical Travel',sources:'Sources',about:'About',inquiry:'Inquiry'},
    heroKicker:'JAPANESE MEDICINES · GUIDES · MEDICAL TRAVEL',
    heroTitle:'Japanese medicines and care pathways, grounded in primary sources.',
    heroLead:'Medicine records lead to Japanese product names, manufacturers, strengths and PMDA product-level sources; medical-travel information leads back to official hospital intake routes. Prescription medicines are not treated as ordinary ecommerce.',
    searchPlaceholder:'Search medicine / ingredient / Japanese or English name', search:'Search database',
    routeTitle:'What are you here to do?',
    routeItems:[['medicines','Look up medicines','Search names, ingredients and therapeutic areas'],['guides','Read medical guides','Understand Japanese medicine and care systems'],['travel','Plan care in Japan','Start from your medical need and intake pathway'],['inquiry','Find the next step','Separate patient questions from institutional sourcing']],
    strength:'Japan healthcare strength, shown through evidence', strengthLead:'Use verifiable medical achievements to understand Japan’s research strength, then connect that trust to current medicine and hospital sources.',
    medicineDb:'Japanese medicine reference', medicineLead:'A reference tool, not a shop. Organized around names, ingredients, categories and primary sources.',
    why:'Why TOKYO MEDI', guides:'Latest guides', travel:'Medical travel', inquiry:'Next step: care or institutional inquiry', rx:'Prescription reference',
    viewAll:'View all', read:'Read guide', details:'View reference', official:'Official source', updated:'Verified',
    noBuy:'Reference only · no online purchase', rxNotice:'Prescription-medicine information is provided for reference and does not constitute a prescription, diagnosis or treatment recommendation. Suitability, use and access require licensed professionals and the relevant clinical process.',
    filters:{all:'All fields',cardio:'Cardiovascular',oncology:'Oncology',metabolic:'Metabolic',neuro:'Neurology',immune:'Immunology',respiratory:'Respiratory'},
    travelFilter:'Filter by medical need', hospitalOfficial:'Official international-patient information',
    personal:'Individuals', institution:'Institutions / pharmacies / companies',
    personalDesc:'Individuals enter care through hospital intake, appointment/registration and clinician consultation. Testing, treatment and prescribing decisions are made by clinicians.', institutionDesc:'Prepare medicine, quantity, destination country and institutional credentials for an inquiry.',
    startPersonal:'See care pathway', startInstitution:'Prepare institutional inquiry',
    footer:'General medical information platform. Content does not replace a doctor, pharmacist or other licensed professional.'
  },
  ja: {
    lang:'日本語', nav:{medicines:'医薬品',guides:'ガイド',travel:'医療渡航',sources:'情報源',about:'TOKYO MEDI',inquiry:'お問い合わせ'},
    heroKicker:'日本の医薬品 · 医療ガイド · 医療渡航',
    heroTitle:'日本の医薬品と受診経路を、一次資料から。',
    heroLead:'医薬品は日本販売名、製造販売元、規格、PMDA製品別資料へ、医療渡航は病院公式の海外患者受入経路へ戻って確認します。処方薬は一般的なEC商品として扱いません。',
    searchPlaceholder:'医薬品名・成分・日本語名・英語名を検索', search:'データベース検索',
    routeTitle:'何をしたいですか？',
    routeItems:[['medicines','日本の医薬品を調べる','名称・成分・領域から資料を探す'],['guides','医療ガイドを読む','日本の医薬品・制度を理解する'],['travel','日本での受診を準備する','医療ニーズから受入経路を確認する'],['inquiry','次の相談先を確認する','個人相談と機関向け照会を分ける']],
    strength:'日本医療の強みを、具体的な成果から', strengthLead:'「日本医療は進んでいる」という宣伝ではなく、検証可能な医学研究の成果から信頼の土台を示します。',
    medicineDb:'日本医薬品データベース', medicineLead:'ECではなくリファレンス。名称、成分、カテゴリー、一次情報を中心に整理します。',
    why:'TOKYO MEDIを選ぶ理由', guides:'最新ガイド', travel:'医療渡航情報', inquiry:'次のステップ：受診または機関照会', rx:'処方薬リファレンス',
    viewAll:'すべて見る', read:'ガイドを読む', details:'資料を見る', official:'一次情報', updated:'確認日',
    noBuy:'資料表示のみ · オンライン販売なし', rxNotice:'処方薬情報は資料目的であり、処方・診断・治療の推奨ではありません。適否、使用方法、入手可否は医師・薬剤師等の専門家および適切な医療プロセスで判断されます。',
    filters:{all:'すべて',cardio:'循環器',oncology:'腫瘍',metabolic:'代謝',neuro:'神経',immune:'免疫',respiratory:'呼吸器'},
    travelFilter:'医療ニーズで絞り込む', hospitalOfficial:'病院公式・国際患者情報',
    personal:'個人の方', institution:'医療機関 / 薬局 / 企業',
    personalDesc:'個人患者は病院の受入・予約・受付から医師の診察へ進み、検査・治療・処方の要否は医師が判断します。処方薬の直接販売は行いません。', institutionDesc:'医薬品、数量、仕向国、機関資格を整理して照会します。',
    startPersonal:'受診の流れを見る', startInstitution:'機関向け照会を準備',
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
  {
    slug:'amlodipine',en:'Amlodipine',ja:'アムロジピン',zh:'氨氯地平',area:'cardio',form:'tablet / OD tablet',status:'Rx',
    productJa:'ノルバスク錠2.5mg／5mg／10mg・ノルバスクOD錠2.5mg／5mg／10mg',brandEn:'Norvasc',
    manufacturerJa:'ヴィアトリス製薬合同会社',strengths:'2.5 mg / 5 mg / 10 mg',scope:'representative',
    labelUpdated:'2026-05-20',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2171022F1029_4?user=1',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2171022F1029_4?user=2'
  },
  {
    slug:'nivolumab',en:'Nivolumab',ja:'ニボルマブ',zh:'纳武利尤单抗',area:'oncology',form:'IV infusion',status:'Rx',
    productJa:'オプジーボ点滴静注20mg／100mg／120mg／240mg',brandEn:'Opdivo',
    manufacturerJa:'小野薬品工業株式会社',strengths:'20 mg / 100 mg / 120 mg / 240 mg',scope:'brand-family',
    labelUpdated:'2026-08-25',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/4291427A1024_1?user=1',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/4291427A1024_1?user=2'
  },
  {
    slug:'pembrolizumab',en:'Pembrolizumab',ja:'ペムブロリズマブ',zh:'帕博利珠单抗',area:'oncology',form:'IV infusion',status:'Rx',
    productJa:'キイトルーダ点滴静注100mg',brandEn:'Keytruda',
    manufacturerJa:'MSD株式会社',strengths:'100 mg',scope:'brand-family',
    labelUpdated:'2026-09-16',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/4291435A2025_1?user=1',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/4291435A2025_1?user=2'
  },
  {
    slug:'osimertinib',en:'Osimertinib',ja:'オシメルチニブ',zh:'奥希替尼',area:'oncology',form:'tablet',status:'Rx',
    productJa:'タグリッソ錠40mg／80mg',brandEn:'Tagrisso',
    manufacturerJa:'アストラゼネカ株式会社',strengths:'40 mg / 80 mg',scope:'brand-family',
    labelUpdated:'2026-01-13',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/4291045F1027_1?user=1',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/4291045F1027_1?user=2'
  },
  {
    slug:'trastuzumab-deruxtecan',en:'Trastuzumab deruxtecan',ja:'トラスツズマブ デルクステカン',zh:'曲妥珠单抗德鲁斯特康',area:'oncology',form:'IV infusion',status:'Rx',
    productJa:'エンハーツ点滴静注用100mg',brandEn:'Enhertu',
    manufacturerJa:'第一三共株式会社',strengths:'100 mg',scope:'brand-family',
    labelUpdated:'2026-09-16',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/4291452D1029_1?user=1',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/4291452D1029_1?user=2'
  },
  {
    slug:'lecanemab',en:'Lecanemab',ja:'レカネマブ',zh:'仑卡奈单抗',area:'neuro',form:'IV infusion',status:'Rx',
    productJa:'レケンビ点滴静注200mg／500mg',brandEn:'Leqembi',
    manufacturerJa:'エーザイ株式会社',strengths:'200 mg / 500 mg',scope:'brand-family',
    labelUpdated:'2026-09-16',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/1190408A1025_1?user=1',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/1190408A1025_1?user=2'
  },
  {
    slug:'sacubitril-valsartan',en:'Sacubitril / valsartan',ja:'サクビトリルバルサルタン',zh:'沙库巴曲缬沙坦',area:'cardio',form:'tablet / pediatric granules',status:'Rx',
    productJa:'エンレスト錠50mg／100mg／200mg・粒状錠小児用12.5mg／31.25mg',brandEn:'Entresto',
    manufacturerJa:'ノバルティスファーマ株式会社',strengths:'50 mg / 100 mg / 200 mg; pediatric 12.5 mg / 31.25 mg',scope:'brand-family',
    labelUpdated:'2025-09-09',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2190041F1027_1?user=1',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2190041F1027_1?user=2'
  },
  {
    slug:'empagliflozin',en:'Empagliflozin',ja:'エンパグリフロジン',zh:'恩格列净',area:'metabolic',form:'tablet',status:'Rx',
    productJa:'ジャディアンス錠10mg／25mg',brandEn:'Jardiance',
    manufacturerJa:'日本ベーリンガーインゲルハイム株式会社',strengths:'10 mg / 25 mg',scope:'brand-family',
    labelUpdated:'2025-09-01',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3969023F1023_1?user=1',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3969023F1023_1?user=2'
  },
  {
    slug:'semaglutide',en:'Semaglutide',ja:'セマグルチド',zh:'司美格鲁肽',area:'metabolic',form:'product-dependent',status:'Rx',
    productJa:'リベルサス錠3mg／7mg／14mg',brandEn:'Rybelsus',
    manufacturerJa:'ノボ ノルディスク ファーマ株式会社',strengths:'3 mg / 7 mg / 14 mg',scope:'representative',
    alternateProductsJa:['オゼンピック皮下注2mg','ウゴービ皮下注（複数規格）'],
    labelUpdated:'2025-07',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/iyakuDetail/ResultDataSetPDF/620023_2499014F1021_1_06',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2499014F1021_1?user=2'
  },
  {
    slug:'edoxaban',en:'Edoxaban',ja:'エドキサバン',zh:'依度沙班',area:'cardio',form:'tablet',status:'Rx',
    productJa:'リクシアナ錠15mg／30mg／60mg',brandEn:'Lixiana',
    manufacturerJa:'第一三共株式会社',strengths:'15 mg / 30 mg / 60 mg',scope:'brand-family',
    labelUpdated:'2025-11-26',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3339002F1020_1?user=1',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3339002F1020_1?user=2'
  },
  {
    slug:'tolvaptan',en:'Tolvaptan',ja:'トルバプタン',zh:'托伐普坦',area:'cardio',form:'OD tablet / granules',status:'Rx',
    productJa:'サムスカOD錠7.5mg／15mg／30mg・サムスカ顆粒1%',brandEn:'Samsca',
    manufacturerJa:'大塚製薬株式会社',strengths:'7.5 mg / 15 mg / 30 mg; granules 1%',scope:'brand-family',
    labelUpdated:'2025-12-09',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2139011D1022_1?user=1',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2139011D1022_1?user=2'
  },
  {
    slug:'pirfenidone',en:'Pirfenidone',ja:'ピルフェニドン',zh:'吡非尼酮',area:'respiratory',form:'tablet',status:'Rx',
    productJa:'ピレスパ錠200mg',brandEn:'Pirespa',
    manufacturerJa:'塩野義製薬株式会社',strengths:'200 mg',scope:'brand-family',
    labelUpdated:'2023-09-15',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999025F1021_1?user=1',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999025F1021_1?user=2'
  },
  {
    slug:'dupilumab',en:'Dupilumab',ja:'デュピルマブ',zh:'度普利尤单抗',area:'immune',form:'SC pen / syringe',status:'Rx',
    productJa:'デュピクセント皮下注300mg／200mg ペン・シリンジ',brandEn:'Dupixent',
    manufacturerJa:'サノフィ株式会社',strengths:'200 mg / 300 mg',scope:'brand-family',
    labelUpdated:'2026-03-23',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/4490405G1024_1?user=1',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/4490405G1024_1?user=2'
  },
  {
    slug:'upadacitinib',en:'Upadacitinib',ja:'ウパダシチニブ',zh:'乌帕替尼',area:'immune',form:'tablet / oral solution',status:'Rx',
    productJa:'リンヴォック錠7.5mg／15mg／30mg／45mg・内用液0.1%',brandEn:'Rinvoq',
    manufacturerJa:'アッヴィ合同会社',strengths:'7.5 mg / 15 mg / 30 mg / 45 mg; oral solution 0.1%',scope:'brand-family',
    labelUpdated:'2026-08-25',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999048G2024_1?user=1',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999048G2024_1?user=2'
  },
  {
    slug:'risankizumab',en:'Risankizumab',ja:'リサンキズマブ',zh:'利生奇珠单抗',area:'immune',form:'SC syringe / pen',status:'Rx',
    productJa:'スキリージ皮下注55mg／75mg／150mg シリンジ・150mgペン',brandEn:'Skyrizi',
    manufacturerJa:'アッヴィ合同会社',strengths:'55 mg / 75 mg / 150 mg',scope:'brand-family',
    labelUpdated:'2026-09-16',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999450G1028_1?user=1',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999450G1028_1?user=2'
  },
  {
    slug:'ramelteon',en:'Ramelteon',ja:'ラメルテオン',zh:'雷美替胺',area:'neuro',form:'tablet',status:'Medical',
    productJa:'ロゼレム錠8mg',brandEn:'Rozerem',
    manufacturerJa:'武田薬品工業株式会社',strengths:'8 mg',scope:'brand-family',
    statusNoteJa:'2026年9月に処方箋医薬品の指定解除',statusNoteEn:'Prescription-only designation removed in September 2026; still listed by PMDA as a medical-use medicine.',
    statusNoteZh:'2026年9月解除“处方笺医药品”指定；仍属于 PMDA 医疗用医药品信息范围。',
    labelUpdated:'2026-09-01',verifiedAt:'2026-09-22',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/1190016F1024_1?user=1',
    patientSource:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/1190016F1024_1?user=2'
  }
];

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
  {
    slug:'national-cancer-center',name:'National Cancer Center Hospital',ja:'国立がん研究センター中央病院',city:'Tokyo',area:'oncology',
    path:'Designated coordinating agent required for international patients',
    facts:{
      'zh-hans':['国际患者及非日语母语患者原则上需通过指定协调机构联系','院方医疗服务以日语为主，沟通支持需提前安排','国际患者费用体系与日本医保患者不同'],
      en:['International and non-native Japanese patients are asked to contact the hospital through a designated coordinating agent','Clinical services are provided in Japanese; communication support must be arranged','International-patient fees differ from Japanese national-insurance billing'],
      ja:['海外患者・日本語を母語としない患者は指定コーディネーター経由での連絡が原則','診療は日本語で提供され、コミュニケーション支援の事前手配が必要','国際患者向け料金体系は日本の保険診療と異なる']
    },
    officialUpdated:'2026-01',url:'https://www.ncc.go.jp/en/about/appointments/index.html',verified:'2026-09-22'
  },
  {
    slug:'utokyo-hospital',name:'The University of Tokyo Hospital',ja:'東京大学医学部附属病院',city:'Tokyo',area:'multidisciplinary',
    path:'International Medical Center / coordinator-facilitator route',
    facts:{
      'zh-hans':['居住在日本以外的患者原则上需指定医疗协调员/协助机构','需提供转诊资料及当前健康状况资料','国际医疗中心处理多语言、资料翻译及费用等受理条件'],
      en:['Patients living outside Japan are basically required to appoint a medical coordinator/facilitator','Referral and current health-condition information are required','The International Medical Center supports multilingual, document-translation and financial intake needs'],
      ja:['海外居住患者は原則として医療コーディネーター／ファシリテーターの指定が必要','紹介状と現在の健康状態に関する情報が必要','国際診療部が多言語、医療文書翻訳、費用面などの受入条件を支援']
    },
    url:'https://www.h.u-tokyo.ac.jp/english/international-patients/',verified:'2026-09-22'
  },
  {
    slug:'keio-hospital',name:'Keio University Hospital',ja:'慶應義塾大学病院',city:'Tokyo',area:'multidisciplinary',
    path:'International Patient Services / approved business-partner route',
    facts:{
      'zh-hans':['海外患者需先准备转诊/病情资料并联系院方合作机构或医疗协调员','合作机构协助预约、医疗签证、翻译、住宿及交通等','院方说明不会直接提供医疗口译，非日语/英语患者应自行安排'],
      en:['Overseas patients prepare referral/medical information and contact a hospital business partner or medical coordinator','Partners can arrange appointments, medical-stay visa support, interpreters, accommodation and transport','The hospital states that it does not directly provide interpretation; patients should arrange it when needed'],
      ja:['海外患者は紹介状・診療情報を準備し、提携事業者または医療コーディネーターへ連絡','提携事業者が予約、医療滞在ビザ、通訳、宿泊、交通等を支援','病院は通訳を直接提供せず、必要に応じ患者側で手配']
    },
    url:'https://www.hosp.keio.ac.jp/en/shinryo/international-patient-services/',verified:'2026-09-22'
  },
  {
    slug:'osaka-university-hospital',name:'The University of Osaka Hospital',ja:'大阪大学医学部附属病院',city:'Osaka',area:'multidisciplinary',
    path:'Center for Global Health / pre-arrival contact',
    facts:{
      'zh-hans':['海外患者来日前应先联系 Center for Global Health','首次预约只能由医疗机构提出，不能由患者本人直接预约','语言支持需要预约；首次就诊原则上需要转诊信'],
      en:['Overseas patients should contact the Center for Global Health before coming to Japan','A first appointment can only be made by a medical clinic/institution, not by the patient','Language services require reservation; a referral is expected for the first visit'],
      ja:['海外患者は来日前にCenter for Global Healthへ連絡','初診予約は医療機関からのみで、患者本人からは不可','言語支援は予約制で、初診は紹介状が原則必要']
    },
    url:'https://www.hosp.med.osaka-u.ac.jp/english/foreign_patients/',verified:'2026-09-22'
  },
  {
    slug:'kyoto-university-hospital',name:'Kyoto University Hospital',ja:'京都大学医学部附属病院',city:'Kyoto',area:'multidisciplinary',
    path:'Coordinator required for patients living outside Japan',
    facts:{
      'zh-hans':['居住在日本以外的患者需通过医疗协调员联系医院','需从日本外务省相关名单选择协调员','协调员负责与医院进行联系和沟通'],
      en:['Patients living outside Japan need to contact the hospital via a coordinator','The hospital directs patients to select a coordinator from the relevant Ministry of Foreign Affairs list','The coordinator communicates with the hospital on the patient’s behalf'],
      ja:['日本国外居住の患者は医療コーディネーター経由で連絡が必要','外務省関連リストからコーディネーターを選択','コーディネーターが患者に代わって病院と連絡・調整']
    },
    url:'https://www.kuhp.kyoto-u.ac.jp/english/access/index.html',verified:'2026-09-22'
  },
  {
    slug:'ncvc',name:'National Cerebral and Cardiovascular Center',ja:'国立循環器病研究センター',city:'Osaka',area:'cardio',
    path:'Official foreign-patient information / advanced cerebral and cardiovascular care',
    facts:{
      'zh-hans':['官方页面明确说明接收海外患者并提供先进医疗','核心领域为脑血管与心血管疾病的临床、研究和教育一体化','具体海外患者受理步骤应以院方最新官方入口确认'],
      en:['The official site states that the hospital accepts patients from overseas for advanced care','Its core mission integrates clinical care, research and education in cerebral and cardiovascular disease','Specific overseas intake steps should be confirmed on the latest official hospital page'],
      ja:['公式ページで海外患者の受入と高度医療の提供を明示','脳血管・心血管疾患の診療・研究・教育を統合','具体的な海外患者受入手順は最新の公式ページで確認']
    },
    officialUpdated:'2025-07-18',url:'https://www.ncvc.go.jp/english/hospital/about/',verified:'2026-09-22'
  },
  {
    slug:'tokyo-midtown-clinic',name:'Tokyo Midtown Clinic',ja:'東京ミッドタウンクリニック',city:'Tokyo',area:'checkup',
    path:'Foreign-visitor medical checkup route / reservation agent required',
    facts:{
      'zh-hans':['面向海外访日人士提供体检服务，并有英语工作人员','外国访客体检需通过预约代理机构，不接受个人直接预约','医疗口译由代理机构安排，费用和日本居住者套餐不同'],
      en:['Medical checkup services are offered to overseas visitors with English-speaking staff available','Foreign-visitor checkups require a reservation agent; direct individual reservations are not accepted','Medical interpreters are arranged by the agent, and foreign-visitor fees differ from resident pricing'],
      ja:['海外訪日者向け健診サービスを提供し、英語対応スタッフあり','海外訪日者の健診は予約代理店経由で、個人の直接予約は不可','医療通訳は代理店が手配し、料金は日本居住者向けと異なる']
    },
    url:'https://www.tokyomidtown-mc.jp/en/premium/visiting-foreigners/',verified:'2026-09-22'
  }
];

export const sourceLinks = [
  ['PMDA Medicine Search','Product-level labels, patient guides, interview forms and safety documents','https://www.pmda.go.jp/PmdaSearch/iyakuSearch/'],
  ['PMDA おくすりサーチ','Patient-facing search for prescribed medicines','https://www.pmda.go.jp/okusuri_search/'],
  ['MHLW','Ministry of Health, Labour and Welfare','https://www.mhlw.go.jp/english/'],
  ['RAD-AR','Risk/Benefit Assessment of Drugs – patient medicine information','https://www.rad-ar.or.jp/siori/english/']
];

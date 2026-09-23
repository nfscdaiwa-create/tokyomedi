export const SITE = 'https://tokyomedi.com';
export const EMAIL = 'beibei7jp1978@yahoo.co.jp';
export const VERSION = '2026.09.23-design';
export const LOCALES = ['zh-hans','en','ja'];

export const UI = {
  'zh-hans': {
    lang:'简体中文', nav:{medicines:'日本医药品',health:'健康与营养',guides:'医疗指南',travel:'赴日医疗资讯',sources:'资料来源',about:'关于',inquiry:'机构询价'},
    heroKicker:'日本医药品 · 官方资料 · 赴日就医',
    heroTitle:'日本医药品资料与赴日就医信息',
    heroLead:'整理日本商品名、一般名、制造销售企业、规格与 PMDA 产品级资料，并汇总日本医疗机构面向海外患者的受理与预约信息。处方药的使用与取得须经过医生诊察及相应医疗流程。',
    searchPlaceholder:'搜索药名 / 成分 / 日文名 / 英文名', search:'搜索资料库',
    routeTitle:'主要入口',
    routeItems:[['medicines','日本医药品资料','按商品名、一般名、厂家与治疗领域查询'],['health','健康与营养','日本健康食品、补给品与产品资料'],['guides','医疗指南','了解药品资料与日本医疗制度'],['travel','赴日医疗资讯','查看医院官方受理条件与海外患者信息'],['inquiry','机构询价','面向医疗机构、药局与企业的品项询价']],
    strength:'日本医学研究与医疗发展', strengthLead:'列出与现代医疗相关的代表性研究成果及来源，作为理解日本医学研究发展的背景资料。',
    medicineDb:'日本医药品资料库', medicineLead:'按日本商品名、一般名、制造销售企业、规格、治疗领域与官方来源整理。',
    why:'资料整理原则', health:'健康与营养', healthLead:'健康食品与补给品独立于医药品展示，明确标注食品属性、内容量与产品来源。', guides:'医疗指南', travel:'赴日医疗资讯', inquiry:'医药品询价说明', rx:'处方药资料索引',
    viewAll:'查看全部', read:'阅读指南', details:'查看资料', official:'官方资料', updated:'核验日期',
    noBuy:'资料展示 · 不提供在线购买', rxNotice:'处方药信息仅供资料参考，不构成处方、诊断或治疗建议。是否适合使用、如何使用以及能否取得，必须由医生、药师及相关医疗流程决定。',
    filters:{all:'全部领域',cardio:'心血管',oncology:'肿瘤',metabolic:'代谢',neuro:'神经',immune:'免疫',respiratory:'呼吸'},
    travelFilter:'按医疗需求筛选', hospitalOfficial:'医院官方国际患者信息',
    personal:'资料联系', institution:'医疗机构 / 药局 / 企业',
    personalDesc:'本站不提供个人医疗咨询、诊断、挂号、处方或就医协调服务。', institutionDesc:'仅面向医疗机构、药局与企业。可整理药品、规格、数量、目的地与公开的许可登记信息，生成品项询价邮件。',
    startPersonal:'查看赴日医疗资讯', startInstitution:'提交机构询价',
    footer:'本站提供一般医疗与药品资料信息，不提供诊断、处方或个体化治疗建议。'
  },
  en: {
    lang:'English', nav:{medicines:'Medicines',health:'Health & Nutrition',guides:'Medical Guides',travel:'Medical Travel Info',sources:'Sources',about:'About',inquiry:'Institutional Inquiry'},
    heroKicker:'JAPANESE MEDICINES · PRIMARY SOURCES · CARE IN JAPAN',
    heroTitle:'Japanese medicine reference and care information in Japan',
    heroLead:'Japanese product names, generics, marketing authorization holders, strengths and PMDA product-level sources are organized alongside official hospital intake information for international patients. Prescription medicines require clinician assessment and the appropriate care process.',
    searchPlaceholder:'Search medicine / ingredient / Japanese or English name', search:'Search database',
    routeTitle:'Main sections',
    routeItems:[['medicines','Medicine reference','Search by product, generic, manufacturer or therapeutic area'],['health','Health & nutrition','Japanese health foods, supplements and product information'],['guides','Medical guides','Understand medicine information and the Japanese healthcare system'],['travel','Medical travel information','Check official hospital intake and overseas-patient information'],['inquiry','Institutional inquiry','For medicine inquiries from institutions, pharmacies and companies']],
    strength:'Medical research and care in Japan', strengthLead:'Selected developments in Japanese medical research are presented with verifiable sources as background for understanding current medicine and care information.',
    medicineDb:'Japanese medicine reference', medicineLead:'Organized by Japanese product name, generic name, marketing authorization holder, strength, therapeutic area and primary source.',
    why:'Editorial principles', health:'Health & nutrition', healthLead:'Health foods and supplements are kept separate from medicines and clearly labeled with food status, pack size and product sources.', guides:'Medical guides', travel:'Medical travel information', inquiry:'Institutional medicine inquiry', rx:'Prescription medicine reference',
    viewAll:'View all', read:'Read guide', details:'View reference', official:'Official source', updated:'Verified',
    noBuy:'Reference only · no online purchase', rxNotice:'Prescription-medicine information is provided for reference and does not constitute a prescription, diagnosis or treatment recommendation. Suitability, use and access require licensed professionals and the relevant clinical process.',
    filters:{all:'All fields',cardio:'Cardiovascular',oncology:'Oncology',metabolic:'Metabolic',neuro:'Neurology',immune:'Immunology',respiratory:'Respiratory'},
    travelFilter:'Filter by medical need', hospitalOfficial:'Official international-patient information',
    personal:'Information contact', institution:'Institutions / pharmacies / companies',
    personalDesc:'TOKYO MEDI does not provide personal medical consultation, appointments, diagnosis, prescribing or care coordination.', institutionDesc:'For institutions, pharmacies and companies only. Prepare a product inquiry email with medicine, strength, quantity, destination and public licence information.',
    startPersonal:'View medical travel information', startInstitution:'Submit institutional inquiry',
    footer:'This site provides general medicine and healthcare reference information. It does not provide diagnosis, prescribing or individualized treatment advice.'
  },
  ja: {
    lang:'日本語', nav:{medicines:'医薬品',health:'ヘルス・栄養',guides:'医療ガイド',travel:'医療渡航情報',sources:'情報源',about:'TOKYO MEDI',inquiry:'機関向け照会'},
    heroKicker:'日本の医薬品 · 一次情報 · 日本での受診',
    heroTitle:'日本の医薬品資料と受診情報',
    heroLead:'日本販売名、一般名、製造販売元、規格、PMDA の製品別資料と、海外患者向けの病院公式受入情報を整理しています。処方薬の使用・入手には医師の診察と適切な医療手続きが必要です。',
    searchPlaceholder:'医薬品名・成分・日本語名・英語名を検索', search:'データベース検索',
    routeTitle:'主な入口',
    routeItems:[['medicines','医薬品資料','販売名・一般名・メーカー・領域から検索'],['health','ヘルス・栄養','日本の健康食品・サプリメントと製品資料'],['guides','医療ガイド','医薬品情報と日本の医療制度を確認'],['travel','医療渡航情報','病院公式の受入条件・海外患者情報を確認'],['inquiry','機関向け照会','医療機関・薬局・企業向けの品目照会']],
    strength:'日本の医学研究と医療', strengthLead:'現代医療に関連する代表的な研究成果と出典を、現在の医薬品・受診情報を理解するための背景資料として紹介します。',
    medicineDb:'日本医薬品データベース', medicineLead:'日本販売名、一般名、製造販売元、規格、領域、一次情報を軸に整理しています。',
    why:'情報整理の方針', health:'ヘルス・栄養', healthLead:'健康食品・サプリメントは医薬品と分け、食品区分、内容量、製品情報源を明確に表示します。', guides:'医療ガイド', travel:'医療渡航情報', inquiry:'機関向け医薬品照会', rx:'処方薬資料',
    viewAll:'すべて見る', read:'ガイドを読む', details:'資料を見る', official:'一次情報', updated:'確認日',
    noBuy:'資料表示のみ · オンライン販売なし', rxNotice:'処方薬情報は資料目的であり、処方・診断・治療の推奨ではありません。適否、使用方法、入手可否は医師・薬剤師等の専門家および適切な医療プロセスで判断されます。',
    filters:{all:'すべて',cardio:'循環器',oncology:'腫瘍',metabolic:'代謝',neuro:'神経',immune:'免疫',respiratory:'呼吸器'},
    travelFilter:'医療ニーズで絞り込む', hospitalOfficial:'病院公式・国際患者情報',
    personal:'情報連絡', institution:'医療機関 / 薬局 / 企業',
    personalDesc:'TOKYO MEDI は個人向けの医療相談、予約、診断、処方、受診調整を行いません。', institutionDesc:'医療機関・薬局・企業向けです。医薬品、規格、数量、仕向地、公開されている許可登録情報を記載した照会メールを作成できます。',
    startPersonal:'医療渡航情報を見る', startInstitution:'機関向け照会',
    footer:'一般的な医薬品・医療情報を提供するサイトです。診断、処方、個別の治療助言は行いません。'
  }
};

export const strengths = [
  {id:'regulation',title:{'zh-hans':'监管与一次资料','en':'Regulation & primary sources','ja':'規制と一次資料'},body:{'zh-hans':'以 PMDA、厚生劳动省、厂家与医疗机构公开资料作为事实核验起点。','en':'Use PMDA, MHLW, manufacturer and medical-institution sources as the starting point for verification.','ja':'PMDA、厚生労働省、メーカー、医療機関の公開資料を検証の起点にします。'}},
  {id:'research',title:{'zh-hans':'研究与临床转化','en':'Research & clinical translation','ja':'研究と臨床応用'},body:{'zh-hans':'关注 iPS、再生医疗、肿瘤学、精准诊疗等日本持续活跃的研究与临床转化领域。','en':'Follow active Japanese research and clinical translation in iPS, regenerative medicine, oncology and precision care.','ja':'iPS、再生医療、腫瘍学、精密医療など、日本で活発な研究と臨床応用を追います。'}},
  {id:'institutions',title:{'zh-hans':'医疗机构与受理信息','en':'Hospitals & intake information','ja':'医療機関と受入情報'},body:{'zh-hans':'分别整理医院官方受理入口、语言要求、转诊与协调条件，避免用二手概括代替院方规则。','en':'Hospital intake routes, language requirements, referrals and coordination conditions are kept separate and linked to official sources.','ja':'病院公式の受入窓口、言語要件、紹介、調整条件を分けて整理します。'}},
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
    slug:'sacubitril-valsartan',en:'Sacubitril / valsartan',ja:'サクビトリルバルサルタン',zh:'沙库巴曲缬沙坦',area:'cardio',form:'tablet / pediatric granule tablet',status:'Rx',
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
    slug:'semaglutide',en:'Semaglutide',ja:'セマグルチド',zh:'司美格鲁肽',area:'metabolic',form:'oral tablet',status:'Rx',
    productJa:'リベルサス錠3mg／7mg／14mg',brandEn:'Rybelsus',
    manufacturerJa:'ノボ ノルディスク ファーマ株式会社',strengths:'3 mg / 7 mg / 14 mg',scope:'representative',
    alternateProductsJa:['オゼンピック皮下注2mg','ウゴービ皮下注（複数規格）'],
    labelUpdated:'2026-05-22',verifiedAt:'2026-09-23',
    source:'https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2499014F1021_1?user=1',
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

export const healthProducts = [
  {slug:'fish-collagen-peptide-granules-w',sku:'TSU-HF-0001',brand:'Tsubaki Trading',zh:'日本深海鱼胶原蛋白',ja:'日本発・高品質 深海魚コラーゲン',en:'Japan Deep-Sea Fish Collagen Peptide',pack:'500g',price:'280 CNY',kind:'food',origin:'日本',sourcePage:'https://tsubaki-jp.com/ja/product/fish-collagen-peptide-granules-w/',verifiedAt:'2026-09-23'},
  {slug:'dhc-blood-sugar-care',sku:'TSU-HF-0020',brand:'DHC',zh:'DHC 血糖值双重对策',ja:'DHC 血糖値ダブル対策',en:'DHC Blood Sugar Double Support',pack:'60粒 / 20日分',price:'¥2,418',kind:'functional-food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-blood-sugar-care/',verifiedAt:'2026-09-23'},
  {slug:'dhc-calcium-cbp',sku:'TSU-HF-0021',brand:'DHC',zh:'DHC 钙 + CBP',ja:'DHC カルシウム + CBP',en:'DHC Calcium + CBP',pack:'80粒 / 20日分',price:'¥969',kind:'nutrient-food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-calcium-cbp/',verifiedAt:'2026-09-23'},
  {slug:'dhc-calcium-magnesium-20',sku:'TSU-HF-0003',brand:'DHC',zh:'DHC 钙 / 镁',ja:'DHC カルシウム／マグ',en:'DHC Calcium / Magnesium',pack:'60粒 / 20日分',price:'¥663',kind:'nutrient-food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-calcium-magnesium-2/',verifiedAt:'2026-09-23'},
  {slug:'dhc-calcium-magnesium-60',sku:'TSU-HF-0002',brand:'DHC',zh:'DHC 钙 / 镁 60日装',ja:'DHC カルシウム／マグ 60日分',en:'DHC Calcium / Magnesium 60-Day',pack:'180粒 / 60日分',price:'¥1,788',kind:'nutrient-food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-calcium-magnesium/',verifiedAt:'2026-09-23'},
  {slug:'dhc-citrulline',sku:'TSU-HF-0014',brand:'DHC',zh:'DHC 瓜氨酸',ja:'DHC シトルリン',en:'DHC Citrulline',pack:'60粒 / 20日分',price:'¥2,256',kind:'food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-citrulline/',verifiedAt:'2026-09-23'},
  {slug:'dhc-coenzyme-q10',sku:'TSU-HF-0015',brand:'DHC',zh:'DHC 包接体辅酶 Q10',ja:'DHC コエンザイムQ10 包接体',en:'DHC Coenzyme Q10 Inclusion Complex',pack:'20日分',price:'¥1,548',kind:'food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-coenzyme-q10/',verifiedAt:'2026-09-23'},
  {slug:'dhc-concentrated-ukon-20',sku:'TSU-HF-0016',brand:'DHC',zh:'DHC 浓缩姜黄',ja:'DHC 濃縮ウコン',en:'DHC Concentrated Turmeric Ukon',pack:'40粒 / 20日分',price:'¥1,302',kind:'food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-concentrated-ukon-turmeric/',verifiedAt:'2026-09-23'},
  {slug:'dhc-concentrated-ukon-60',sku:'TSU-HF-0017',brand:'DHC',zh:'DHC 浓缩姜黄 60日装',ja:'DHC 濃縮ウコン 60日分',en:'DHC Concentrated Turmeric Ukon 60-Day',pack:'120粒 / 60日分',price:'¥3,603',kind:'food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-concentrated-ukon-turmeric-2/',verifiedAt:'2026-09-23'},
  {slug:'dhc-fermented-black-sesamin-stamina',sku:'TSU-HF-0012',brand:'DHC',zh:'DHC 发酵黑芝麻素 + 活力',ja:'DHC 醗酵黒セサミン＋スタミナ',en:'DHC Fermented Black Sesamin + Stamina',pack:'120粒 / 20日分',price:'¥2,823',kind:'food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-fermented-black-sesamin-stamina/',verifiedAt:'2026-09-23'},
  {slug:'dhc-fermented-black-sesamin-premium',sku:'TSU-HF-0013',brand:'DHC',zh:'DHC 发酵黑芝麻素 PREMIUM',ja:'DHC 醗酵黒セサミン プレミアム',en:'DHC Fermented Black Sesamin Premium',pack:'120粒 / 20日分',price:'¥4,755',kind:'food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-fermented-black-sesamin-premium/',verifiedAt:'2026-09-23'},
  {slug:'dhc-hatomugi-coix-extract',sku:'TSU-HF-0006',brand:'DHC',zh:'DHC 薏仁精华',ja:'DHC はとむぎエキス',en:'DHC Hatomugi Extract',pack:'20日分',price:'¥1,056',kind:'food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-hatomugi-coix-extract/',verifiedAt:'2026-09-23'},
  {slug:'dhc-heme-iron',sku:'TSU-HF-0005',brand:'DHC',zh:'DHC 血红素铁',ja:'DHC ヘム鉄',en:'DHC Heme Iron',pack:'40粒 / 20日分',price:'¥1,227',kind:'nutrient-food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-heme-iron/',verifiedAt:'2026-09-23'},
  {slug:'dhc-kozu-black-vinegar',sku:'TSU-HF-0011',brand:'DHC',zh:'DHC 黑醋',ja:'DHC 黒酢',en:'DHC Kozu Black Vinegar',pack:'60粒 / 20日分',price:'¥1,794',kind:'food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-kozu-black-vinegar/',verifiedAt:'2026-09-23'},
  {slug:'dhc-liver-extract-ornithine',sku:'TSU-HF-0018',brand:'DHC',zh:'DHC 肝脏精华 + 鸟氨酸',ja:'DHC 肝臓エキス＋オルニチン',en:'DHC Liver Extract + Ornithine',pack:'60粒 / 20日分',price:'¥2,160',kind:'food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-liver-extract-ornithine/',verifiedAt:'2026-09-23'},
  {slug:'dhc-multivitamin',sku:'TSU-HF-0007',brand:'DHC',zh:'DHC 综合维生素',ja:'DHC マルチビタミン',en:'DHC Multivitamin',pack:'20粒 / 20日分',price:'¥663',kind:'nutrient-food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-multivitamin/',verifiedAt:'2026-09-23'},
  {slug:'dhc-natural-vitamin-e-soy',sku:'TSU-HF-0004',brand:'DHC',zh:'DHC 天然维生素 E（大豆）',ja:'DHC 天然ビタミンE（大豆）',en:'DHC Natural Vitamin E (Soy)',pack:'20日分',price:'¥663',kind:'nutrient-food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-natural-vitamin-e-soy/',verifiedAt:'2026-09-23'},
  {slug:'dhc-ornithine',sku:'TSU-HF-0019',brand:'DHC',zh:'DHC 鸟氨酸',ja:'DHC オルニチン',en:'DHC Ornithine',pack:'100粒 / 20日分',price:'¥1,815',kind:'food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-ornithine/',verifiedAt:'2026-09-23'},
  {slug:'dhc-perfect-supple-multivitamin-mineral',sku:'TSU-HF-0009',brand:'DHC',zh:'DHC 完美综合维生素与矿物质',ja:'DHC パーフェクトサプリ マルチビタミン＆ミネラル',en:'DHC Perfect Supplement Multivitamin & Mineral',pack:'20日分',price:'¥2,844',kind:'nutrient-food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-perfect-supple-multivitamin-mineral/',verifiedAt:'2026-09-23'},
  {slug:'dhc-domestic-perfect-vegetable-premium',sku:'TSU-HF-0010',brand:'DHC',zh:'DHC 国产完美蔬菜 PREMIUM',ja:'DHC 国産パーフェクト野菜 プレミアム',en:'DHC Perfect Vegetables Premium',pack:'20日分',price:'¥1,344',kind:'food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-domestic-perfect-vegetable-premium/',verifiedAt:'2026-09-23'},
  {slug:'dhc-sustained-release-folic-acid',sku:'TSU-HF-0008',brand:'DHC',zh:'DHC 缓释叶酸',ja:'DHC 持続型葉酸',en:'DHC Sustained-Release Folic Acid',pack:'60日分',price:'¥1,554',kind:'nutrient-food',sourcePage:'https://tsubaki-jp.com/ja/product/dhc-sustained-release-folic-acid/',verifiedAt:'2026-09-23'}
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

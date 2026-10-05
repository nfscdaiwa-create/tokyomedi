const tr=(zh,en,ja)=>({'zh-hans':zh,en,ja});
const calciumMag={
 overview:tr('钙、镁与维生素 D 复合补充剂，另含 CPP（酪蛋白磷酸肽）。本站分别收录 20 日装 60 粒、60 日装 180 粒；两者每日目安均为 3 粒，包装天数不是每日成分量的倍数。','Calcium, magnesium and vitamin D with CPP. Both pack sizes use the same three-capsule daily serving.','Ca、Mg、ビタミンD、CPPを配合。20日・60日分とも1日3粒が目安です。'),
 knowledge:tr('钙是骨骼与牙齿的重要矿物质；镁参与多种酶反应和能量代谢；维生素 D 参与钙吸收调节。CPP 来自酪蛋白，不能和另一产品的 CBP（浓缩乳清活性蛋白）混为一谈。成分的生理功能不等于本产品可以治疗骨质疏松或纠正所有缺乏。','Calcium supports bone structure, magnesium participates in enzyme reactions and vitamin D regulates calcium absorption. CPP and CBP are different ingredients.','Caは骨・歯、Mgは酵素・代謝、DはCa吸収に関わります。CPPとCBPは別成分です。'),
 caution:tr('含乳、鱿鱼及明胶。服用其他矿物质补充剂时需合计摄取量；肾病、相关代谢问题或正在用药者先核查。不要以增加粒数代替对营养摄取与骨健康的评估。','Contains milk, squid and gelatin. Review combined mineral intake and consult if you have kidney disease or take medicines.','乳・いか・ゼラチンを含みます。他のミネラル補給と重複しないよう確認します。'),
 term:'Calcium',extra:'https://ods.od.nih.gov/factsheets/Calcium-Consumer/'
};
const turmeric={
 overview:tr('DHC 将秋姜黄、春姜黄和紫姜黄来源浓缩提取物配合在软胶囊中。20 日装 40 粒和 60 日装 120 粒均按每日 2 粒计算；每份姜黄浓缩提取物 240 mg，其中姜黄素类 50 mg。','Concentrated turmeric softgels. Both 20/60-day packs use two capsules daily, with 240 mg extract including 50 mg curcuminoids.','濃縮ウコンのソフトカプセル。20日・60日分とも1日2粒、エキス240mg（クルクミノイド50mg）です。'),
 knowledge:tr('姜黄素类是姜黄中的一组化合物，提取物重量不等于纯姜黄素重量；“110 倍浓缩”是厂家对原料加工的表述，不能等同于 110 倍临床效果。普通食品姜黄与高浓度补充剂的摄取情境不同，本品不能用于解酒、治疗酒精性肝病或支持增加饮酒量。','Curcuminoid content differs from total extract weight. Concentration claims do not establish clinical benefit or protection from alcohol.','抽出物量とクルクミノイド量は異なります。濃縮倍率は臨床効果の倍率ではありません。'),
 caution:tr('含大豆和明胶。NCCIH 提醒部分姜黄／姜黄素补充剂有肝损伤报告；出现黄疸、深色尿、食欲明显下降等应停用并就医。肝病或用药者应先核查，不能把“护肝”当作安全保证。','Contains soy and gelatin. Turmeric supplements have liver-injury reports; assess symptoms and medication use.','大豆・ゼラチンを含みます。ウコン補給で肝障害報告があり、異常時は中止して受診します。'),
 term:'Curcumin',extra:'https://www.nccih.nih.gov/health/turmeric'
};
export const healthDossiers={
 'fish-collagen-peptide-granules-w':{
  overview:tr('鱼源胶原蛋白肽颗粒（顆粒 W），品牌资料列示 500 g 袋装、每日 3–5 g，可加入水、饮料或食物。所示标签列有鱼皮来源原料，品牌网页使用“深海鱼”称呼，但不能仅凭该称呼认定鱼种、捕捞水域或成分纯度。','Fish collagen peptide granules W, 500 g. Brand guidance is 3–5 g daily in drinks/food. The “deep-sea” description does not independently establish species or origin.','フィッシュコラーゲン顆粒W、500g。ブランド目安は1日3～5gです。名称だけで魚種・産地は断定しません。'),
  knowledge:tr('胶原蛋白是结缔组织中的结构蛋白；胶原蛋白肽由水解获得较小片段。口服后仍需消化、吸收和代谢，并不是把胶原直接运送到皮肤或关节。成分研究不能自动证明此具体产品的美容、关节或疾病治疗效果。','Collagen is a structural protein; hydrolyzed peptides are digested and metabolized. Ingredient research does not prove benefits for this specific product.','コラーゲンは構造たんぱく質です。経口ペプチドも消化・代謝され、特定製品の効果を保証しません。'),
  caution:tr('品牌页面标示鱼／明胶过敏风险。不要把其他鱼胶原产品的营养表、分子量、重金属检验或临床结果套入本品。当前公开资料未提供完整营养成分表与独立检测报告，页面明确保留这一资料缺口。','Brand information flags fish/gelatin allergy. A full nutrition panel, molecular-weight specification and independent test report were not publicly provided.','魚・ゼラチンのアレルギー表示を確認します。公開資料に完全な栄養表・分子量・独立試験報告はありません。'),
  term:'Collagen'
 },
 'dhc-blood-sugar-care':{
  overview:tr('血糖值双重对策属于日本功能性标示食品，DHC 官方页面列示届出号 I478。本站为 20 日装 60 粒、每日 3 粒，功能性相关成分为桑叶来源亚氨基糖 3.15 mg、巴拿巴叶来源科罗索酸 1 mg。','A Japanese Food with Function Claims, notification I478; 20 days/60 tablets, three daily.','届出番号I478の機能性表示食品。20日分60粒、1日3粒です。'),
  knowledge:tr('日本届出表示涉及桑叶来源成分对糖吸收及餐后血糖、巴拿巴叶来源成分对偏高空腹血糖的报告。功能性标示为企业责任下的届出制度，不属于日本政府对个别产品疗效的批准，更不能作为糖尿病治疗或停用降糖药的依据。','Reported Japanese claims concern post-meal and elevated fasting glucose. Notification is not individual government efficacy approval or diabetes treatment.','届出表示は食後・高めの空腹時血糖に関するものです。国の個別許可や糖尿病治療とは異なります。'),
  caution:tr('按厂家要求随餐用水或温水整粒摄取，不咀嚼；严格按每日目安。糖尿病患者、正在服降糖药者及孕哺期人群需先咨询，若出现身体异常应停用。对食品成分研究不能替代实际疾病诊断。','Take whole with water at meals. People with diabetes, on glucose-lowering medicines or pregnant/breastfeeding should seek advice first.','食事時に水等で噛まずに摂取。糖尿病・服薬中・妊娠授乳中は事前に相談します。'),
  term:'Corosolic_acid',extra:'https://www.caa.go.jp/policies/policy/food_labeling/foods_with_function_claims/'
 },
 'dhc-calcium-cbp':{
  overview:tr('钙＋CBP 为营养功能食品（钙），20 日装 80 粒、每日 4 粒。每份钙 370 mg，另有 CBP 12 mg 和维生素 D 0.07 μg；钙量、胶囊总重和蛋白配合量是不同数据。','Calcium nutrient-function food, 80 tablets/20 days. Four daily provide 370 mg calcium and 12 mg CBP.','Caの栄養機能食品。20日分80粒、1日4粒でCa370mg、CBP12mgです。'),
  knowledge:tr('CBP 是浓缩乳清活性蛋白的缩写，来源于乳成分；钙是骨骼与牙齿形成所需营养素。它与“钙／镁”产品的 CPP 不同，本品没有同等镁配方。应先评估膳食和其他补充剂中的钙摄取，再判断是否需要补充。','CBP is concentrated whey active protein, different from CPP. This is not the same formula as calcium/magnesium.','CBPは濃縮乳清活性たんぱくで、CPPとは異なります。Ca/Mg製品と同じ配合ではありません。'),
  caution:tr('含蛋和乳成分，原料包括蛋壳粉。过敏者不宜摄取；肾病、结石相关问题或用药者需核查，不用增加粒数代替营养评估。营养功能食品是按标准展示营养功能，并非个别审查的特保。','Contains egg and milk, including eggshell-derived material. Check allergy, combined intake and medical conditions.','卵・乳を含みます。過剰摂取を避け、アレルギー・疾病・服薬を確認します。'),
  term:'Calcium',extra:'https://ods.od.nih.gov/factsheets/Calcium-Consumer/'
 },
 'dhc-calcium-magnesium-20':calciumMag,
 'dhc-calcium-magnesium-60':calciumMag,
 'dhc-citrulline':{
  overview:tr('瓜氨酸胶囊，20 日装 60 粒、每日 3 粒。每份瓜氨酸 825 mg、精氨酸 150 mg；属于健康食品，没有药品适应症。包装中的胶囊总重量 1,341 mg 不等于瓜氨酸有效含量。','Citrulline capsules, three daily: 825 mg citrulline plus 150 mg arginine; a food supplement.','シトルリン食品。1日3粒にシトルリン825mgとアルギニン150mgを配合します。'),
  knowledge:tr('瓜氨酸是非蛋白组成氨基酸，参与尿素循环，并与精氨酸代谢相关；精氨酸又参与一氧化氮生成。这些生化关系不证明本产品可以治疗血管病、高血压或性功能障碍，也不能把健身研究的其他剂量套入标签。','Citrulline participates in the urea cycle and arginine metabolism. Biochemical pathways do not establish disease-treatment claims.','尿素回路とアルギニン代謝に関わる成分ですが、その機序だけで疾病治療効果は示せません。'),
  caution:tr('含明胶。按每日 3 粒用水或温水摄取；低血压、心肾疾病、用药或孕哺期情况需咨询。和其他氨基酸产品并用时，先合计成分量，避免按不同品牌各自上限叠加。','Contains gelatin. Review medicines, relevant conditions and combined amino-acid intake.','ゼラチンを含みます。服薬・疾病と他のアミノ酸補給を確認します。'),
  term:'Citrulline'
 },
 'dhc-coenzyme-q10':{
  overview:tr('包接体辅酶 Q10，20 日装 40 粒、每日 2 粒。标签列包接体 75 mg（其中 Q10 为 15 mg）及另加 Q10 75 mg，合计 Q10 为 90 mg；不能误写成 150 mg Q10。另含维生素 C 150 mg。','Two capsules contain 75 mg inclusion complex delivering 15 mg CoQ10, plus 75 mg CoQ10: total CoQ10 90 mg.','包接体75mg中のQ10は15mg、別配合75mgと合わせQ10総量90mgです。'),
  knowledge:tr('辅酶 Q10 是参与线粒体电子传递的脂溶性化合物。“包接体”指使用环糊精包合等配方方式；吸收相关厂家研究并不能直接证明对心衰、疲劳或其他疾病的治疗效果。此产品与药品辅酶 Q10 的监管属性和用途不同。','CoQ10 participates in mitochondrial electron transport. An inclusion formulation does not by itself demonstrate clinical treatment benefit.','Q10はミトコンドリアの電子伝達に関わります。包接処方だけで臨床効果は保証されません。'),
  caution:tr('含明胶。正在服华法林者尤其应核查相互作用；NCCIH 提醒 Q10 可能影响华法林及部分治疗药。按标签摄取，不用食品补充剂替代心衰等疾病的处方治疗。','Contains gelatin. CoQ10 may interact with warfarin and other medicines; review before use.','ゼラチンを含みます。ワルファリン等との相互作用を確認します。'),
  term:'Coenzyme_Q10',extra:'https://www.nccih.nih.gov/health/coenzyme-q10'
 },
 'dhc-concentrated-ukon-20':turmeric,
 'dhc-concentrated-ukon-60':turmeric,
 'dhc-fermented-black-sesamin-stamina':{
  overview:tr('发酵黑芝麻素＋活力，20 日装 120 粒、每日 6 粒。每份芝麻素 20 mg、维生素 E 54 mg，并配蜂王浆、高丽参果实、黑蒜、玛卡等多种原料；与 PREMIUM 版不是同一配方。','Six daily capsules provide 20 mg sesamin and 54 mg vitamin E, with multiple botanical/other ingredients; distinct from Premium.','1日6粒、セサミン20mgとビタミンE54mg等。プレミアムとは異なる配合です。'),
  knowledge:tr('芝麻素属于芝麻木脂素类化合物。发酵与加热是原料加工方式，不可把厂家实验或成分活性比较直接解释为临床抗衰老效果。本品复方原料较多，读标签时应同时看所有原料和过敏原。','Sesamin is a sesame lignan. Processing or laboratory activity claims are not proven anti-aging outcomes.','セサミンはゴマリグナンです。加工・実験上の活性比較を臨床効果へ直接置き換えません。'),
  caution:tr('含芝麻和明胶，另含蜂王浆等原料，相关过敏史需逐项核查。孕哺期、用药或慢性病患者先咨询；不要与其他维生素 E／芝麻素复方按全量叠加。','Contains sesame/gelatin and royal-jelly material; review allergy and combined intake.','ごま・ゼラチン等とローヤルゼリー原料を確認し、他の複合補給との重複を避けます。'),
  term:'Sesamin'
 },
 'dhc-fermented-black-sesamin-premium':{
  overview:tr('发酵黑芝麻素 PREMIUM，20 日装 120 粒、每日 6 粒。每份芝麻素 36 mg，并含中链脂肪酸油、鸡肉提取物、瓜氨酸、玛卡和 Q10 等；是独立配方，不仅是普通版加大包装。','Premium is a separate formula: six daily capsules provide 36 mg sesamin with MCT oil, chicken extract and other ingredients.','プレミアムは別処方。1日6粒にセサミン36mg、MCT油、鶏肉エキス等を配合します。'),
  knowledge:tr('同为 6 粒每日份，PREMIUM 的芝麻素为 36 mg、活力版为 20 mg，维生素 E 均为 54 mg；其他原料与过敏原也不同。“PREMIUM”是商品命名，不能作为质量认证、疗效优越或无风险的证明。','Compared with Stamina, sesamin is 36 vs 20 mg per serving; vitamin E is 54 mg in both. Other ingredients/allergens differ.','セサミンは通常版20mgに対して36mg。Eは両方54mgで、他成分・アレルゲンも異なります。'),
  caution:tr('含乳、鸡肉、芝麻和明胶。核对其他复方的维生素 E、Q10 和矿物质摄取量；过敏者不可仅因以前用过普通版就认为 PREMIUM 同样适合。','Contains milk, chicken, sesame and gelatin; check duplicates and do not assume allergy compatibility with Stamina.','乳・鶏肉・ごま・ゼラチンを含みます。通常版の使用経験だけで安全と判断しません。'),
  term:'Sesamin'
 },
 'dhc-hatomugi-coix-extract':{
  overview:tr('薏仁精华软胶囊，20 日装 20 粒、每日 1 粒。每份 13 倍浓缩薏仁提取物粉 170 mg、维生素 E 10 mg；这是食品补充剂，与药用薏苡仁制剂或汉方处方不同。','Hatomugi extract softgel: one daily, with 170 mg concentrated extract and 10 mg vitamin E; distinct from medicinal products.','1日1粒、はとむぎエキス170mgとE10mg。医薬品のヨクイニンとは区別します。'),
  knowledge:tr('薏苡（Coix lacryma-jobi）是禾本科植物，种子可用于食品；商品提取物与整粒薏米、薏仁茶并非同一营养组成。“13 倍浓缩”描述原料加工，不能解释为治疗疣、湿疹或色素问题的效果倍数。','Coix is a cereal plant; extract, whole grain and tea differ. A concentration factor does not establish skin-treatment efficacy.','ハトムギはイネ科植物です。抽出物と穀粒・茶は組成が異なり、濃縮倍率は治療効果ではありません。'),
  caution:tr('含明胶。按标签水或温水摄取；孕哺期、慢性病或用药者先咨询。皮肤出现持续异常应接受诊断，不用本食品代替皮肤科治疗。','Contains gelatin. Persistent skin problems require assessment rather than replacement with this supplement.','ゼラチンを含みます。持続する皮膚症状は診断を受け、本品で治療を代替しません。'),
  term:'Coix_lacryma-jobi'
 },
 'dhc-heme-iron':{
  overview:tr('血红素铁为营养功能食品，20 日装 40 粒、每日 2 粒。每份元素铁 10 mg、叶酸 75 μg、维生素 B12 1 μg；包装正面的“ヘム鉄 500 mg”是血红素铁原料量，不是 500 mg 元素铁。','Two daily capsules provide 10 mg elemental iron, 75 μg folate and 1 μg B12. Heme-iron material weight is not elemental iron.','1日2粒に鉄10mg、葉酸75μg、B12 1μg。ヘム鉄原料量と元素鉄量は異なります。'),
  knowledge:tr('血红素铁与非血红素铁在来源和吸收方式上不同，铁参与血红蛋白与氧运输。乏力、眩晕和贫血有多种原因，不能仅凭症状判定缺铁。补充方案应结合血常规、铁蛋白等评价，而非越多越好。','Iron supports hemoglobin and oxygen transport. Symptoms alone do not diagnose deficiency; assessment may include blood counts and ferritin.','鉄はHbと酸素運搬に関わります。症状だけで欠乏と判断せず、必要な検査で評価します。'),
  caution:tr('含明胶。铁过量可有害，尤其要防止儿童误食；铁负荷过高者需避免不当补充。铁会影响左甲状腺素等药物吸收，具体间隔由药师核查。','Contains gelatin. Prevent child ingestion and excessive iron; review interactions such as levothyroxine.','ゼラチンを含みます。小児の誤飲、鉄過剰、レボチロキシン等との相互作用に注意します。'),
  term:'Iron',extra:'https://ods.od.nih.gov/factsheets/Iron-Consumer/'
 },
 'dhc-kozu-black-vinegar':{
  overview:tr('准确日文商品名为“香酢（こうず）”，也常称香醋胶囊。20 日装 60 粒、每日 3 粒，配禄丰香醋粉 450 mg 与柠檬酸 15 mg。它不是黑醋蒜复方，也不是鹿儿岛黑醋或另一种米醋配方。','The exact product is DHC Kozu aromatic vinegar, not black-vinegar/garlic or Kagoshima black vinegar.','正式名は香酢（こうず）。黒酢ニンニクや鹿児島黒酢とは別製品です。'),
  knowledge:tr('醋属于发酵食品，胶囊采用米醋粉与橄榄油等原料。醋粉重量不能当作醋酸含量；每份柠檬酸也不等于总有机酸。传统食材的背景知识不证明本品可以减肥、降压、解毒或治疗代谢病。','Uses powdered rice vinegar with other ingredients. Powder weight is not acetic-acid content or evidence for disease treatment.','米酢粉末を使用します。粉末量は酢酸量ではなく、伝統食品の知識は疾病治療の根拠になりません。'),
  caution:tr('含大豆和明胶。按每日目安，用水或温水摄取；与其他“醋”产品比较时，应核对原料和每日份，不能只看品名相近。','Contains soy and gelatin; compare exact ingredients and daily servings.','大豆・ゼラチンを含みます。比較時は原材料と1日量を確認します。'),
  term:'Vinegar'
 },
 'dhc-liver-extract-ornithine':{
  overview:tr('肝脏精华＋鸟氨酸，20 日装 60 粒、每日 3 粒。每份猪肝提取物粉 600 mg、鸟氨酸盐酸盐 120 mg、锌 6 mg。原料肝提取物与“支持肝功能”的药品不是同一概念。','Three daily capsules contain 600 mg porcine liver extract, 120 mg ornithine hydrochloride and 6 mg zinc.','1日3粒、豚肝エキス600mg、オルニチン塩酸塩120mg、亜鉛6mgです。'),
  knowledge:tr('鸟氨酸参与尿素循环；提取物是经过加工的食品原料，其重量不是纯蛋白或所有营养素总量。不能据“肝脏精华”名称宣称治疗肝病、解酒、抵消饮酒损害；与高含量鸟氨酸单品的配方相差明显。','Ornithine participates in the urea cycle. Liver-extract naming does not establish liver-disease or alcohol-protection benefits.','オルニチンは尿素回路に関わります。肝エキスという名前は肝疾患治療・飲酒保護を示しません。'),
  caution:tr('含猪肉和明胶，素食或相关饮食限制者应核对。其他锌补充剂需合计，肝肾疾病、用药或孕哺期先咨询。','Contains pork and gelatin; check dietary restrictions and combined zinc intake.','豚肉・ゼラチンを含みます。食事制限と亜鉛の重複摂取を確認します。'),
  term:'Ornithine'
 },
 'dhc-multivitamin':{
  overview:tr('综合维生素，20 日装 20 粒、每日 1 粒，配 11 种维生素及维生素 P、β-胡萝卜素。没有本目录“完美综合维生素与矿物质”产品那套矿物质、必需氨基酸与 Q10 配方。','One daily softgel combines 11 vitamins with vitamin-P compounds and beta-carotene; distinct from Perfect Supplement.','1日1粒、11種のビタミン等を配合。パーフェクトサプリとは別処方です。'),
  knowledge:tr('维生素参与不同生理过程，脂溶性与水溶性维生素的摄取和代谢特点不同。“维生素 P”是生物类黄酮的历史称呼，不能误当成另一个有统一必需摄入量的维生素。补充剂应补充饮食，不代替均衡食物。','Vitamins serve different functions; “vitamin P” is a historical bioflavonoid name, not a separately established essential vitamin.','ビタミンPはバイオフラボノイドの歴史的呼称です。補給はバランスのよい食事を基本にします。'),
  caution:tr('含大豆和明胶。与其他复方、叶酸、维生素 D／E 产品合用时合计每日量；不要认为水溶性就可无上限摄取。核对适用人群、疾病与药物情况。','Contains soy/gelatin. Sum overlapping vitamin intake from all products.','大豆・ゼラチンを含み、他製品とビタミン量が重複しないよう確認します。'),
  term:'Multivitamin'
 },
 'dhc-natural-vitamin-e-soy':{
  overview:tr('天然维生素 E［大豆］，20 日装 20 粒、每日 1 粒，标签维生素 E 301.5 mg。厂家当前目录列为普通健康食品，应按现行产品资料和实际包装判断属性。','Natural vitamin E from soy, 301.5 mg per one daily capsule. Current manufacturer listing is ordinary food.','天然ビタミンE［大豆］は1日1粒301.5mg。現行メーカー情報では一般食品です。'),
  knowledge:tr('维生素 E 是脂溶性营养素，α-生育酚参与抗氧化保护；本品使用厂家描述的天然 d-α-生育酚。mg 与 IU 的换算与天然／合成形态有关，不可随意等同；高剂量补充不等于预防心血管病或癌症。','Vitamin E is fat-soluble; mg/IU conversion depends on form. High-dose supplementation does not establish disease prevention.','Eは脂溶性です。mg/IU換算は形態で異なり、高用量が疾病予防を保証しません。'),
  caution:tr('标签列明胶过敏原；“大豆来源”不等于厂家一定以“大豆”为过敏原标示，仍需核对实际包装。NIH 提醒高量 E 可增加抗凝／抗血小板药相关出血风险，用药者应先核查。','Label allergen: gelatin. High vitamin-E intake may increase bleeding with anticoagulant/antiplatelet medicines.','表示アレルゲンはゼラチンです。抗凝固・抗血小板薬との出血リスクを確認します。'),
  term:'Vitamin_E',extra:'https://ods.od.nih.gov/factsheets/VitaminE-Consumer/'
 },
 'dhc-ornithine':{
  overview:tr('鸟氨酸复合胶囊，20 日装 100 粒、每日 5 粒。每份鸟氨酸盐酸盐 1,280 mg（折合鸟氨酸 1,002.9 mg）、精氨酸 300 mg、赖氨酸 40 mg。盐酸盐量与鸟氨酸本体量应分开标示。','Five daily capsules: 1,280 mg ornithine HCl equivalent to 1,002.9 mg ornithine, plus arginine and lysine.','1日5粒に塩酸塩1280mg（オルニチン1002.9mg）、アルギニン300mg、リジン40mgです。'),
  knowledge:tr('鸟氨酸为非蛋白组成氨基酸，参与尿素循环；精氨酸、赖氨酸各有不同生理作用。包装“相当于多少只蚬”的比较属于原料含量换算，不证明对应的临床效果。本品与含 120 mg 鸟氨酸盐酸盐的肝精华复方不同。','Ornithine is a non-protein amino acid involved in the urea cycle. Food-equivalent marketing is not clinical efficacy evidence.','尿素回路に関わる非たんぱく質アミノ酸です。食品換算量は臨床効果を示しません。'),
  caution:tr('含明胶。合计其他氨基酸产品的每日量；肝肾疾病、用药或孕哺期先咨询。不得把本食品与治疗高氨血症的药用鸟氨酸制剂相混同。','Contains gelatin. Check combined intake and distinguish from medicinal ornithine products.','ゼラチンを含みます。他の補給との重複と医薬品製剤との違いを確認します。'),
  term:'Ornithine'
 },
 'dhc-perfect-supple-multivitamin-mineral':{
  overview:tr('完美综合维生素与矿物质为复方营养食品，20 日装 80 粒、每日 4 粒，配 13 种维生素、10 种矿物质、9 种必需氨基酸及其他原料。每种营养素及其他配合原料的每日含量均列于下表。','Four daily tablets combine 13 vitamins, 10 minerals, nine essential amino acids and other ingredients; each label amount is listed below.','1日4粒に13種ビタミン、10種ミネラル、9種必須アミノ酸等を配合。下表に各含量を示します。'),
  knowledge:tr('此配方含维生素 K、碘、铁、锌、Q10 和 CBP，不能和普通综合维生素视为等价。标签的乳酸菌／酵母为发酵杀菌原料，不应直接描述为同数量“活菌”。复方产品比较应同时核对成分、量和过敏原。','Includes vitamin K, iodine, iron, zinc, CoQ10 and CBP; inactivated bacterial/yeast material is not a live-probiotic count.','K、ヨウ素、鉄、亜鉛、Q10、CBP等を含みます。殺菌原料を生菌数と表示しません。'),
  caution:tr('含小麦、乳和大豆。厂家提示抗凝血药使用者应避免本品，乳幼儿和儿童不宜摄取；锌过量会妨碍铜吸收。尤其不要再按全量叠加其他复合维生素、矿物质或抗凝治疗。','Contains wheat, milk and soy. Manufacturer advises avoidance with anticoagulants and in infants/children; avoid excessive zinc.','小麦・乳・大豆を含みます。メーカーは抗凝血薬服用中と乳幼児・小児の摂取を避けるよう案内しています。'),
  term:'Multivitamin'
 },
 'dhc-domestic-perfect-vegetable-premium':{
  overview:tr('国产完美蔬菜 PREMIUM，20 日装 80 粒、每日 4 粒。每份 32 种蔬菜粉（含大麦嫩叶提取物）1,730 mg，维生素 E 5 mg，另有灭活乳酸菌／酵母发酵原料。不是等同于实际吃足 32 种蔬菜。','Four daily tablets contain 1,730 mg of a 32-vegetable blend plus vitamin E and inactivated fermented material.','1日4粒、32種の野菜末1730mg、E5mg等を配合します。'),
  knowledge:tr('浓缩蔬菜粉可以提供部分食品成分，但不能自动替代蔬菜的水分、体积、膳食纤维和整体饮食效果。本份膳食纤维为 0.66 g，应与真实食物摄入一起理解；“杀菌粉末”中的菌数不等于活菌剂量。','Vegetable powder does not replace the water, volume, fiber and dietary role of vegetables; this serving has 0.66 g fiber.','野菜の水分・かさ・食物繊維等を置き換えません。1日量の食物繊維は0.66gです。'),
  caution:tr('含乳、大豆和山药。按标签整片用水摄取；查看多原料中的过敏信息，不因“国产蔬菜”就判断所有人均适合。仍以主食、主菜、副菜均衡饮食为基础。','Contains milk, soy and yam. Review all ingredients and retain a balanced diet.','乳・大豆・やまいもを含みます。多原料のアレルゲンを確認し食事を基本にします。'),
  term:'Vegetable'
 },
 'dhc-sustained-release-folic-acid':{
  overview:tr('缓释叶酸，60 日装 60 粒、每日 1 粒，叶酸 400 μg；不是 400 mg，两种单位相差 1,000 倍。厂家当前目录未列营养功能食品属性，应以现行产品资料和实际包装为准。','Sustained-release folate, 60 tablets/60 days; one daily provides 400 μg, not 400 mg.','持続型葉酸は60日分60粒、1日1粒400μg。mgとは1000倍異なる単位です。'),
  knowledge:tr('叶酸属于 B 族维生素，参与一碳代谢、DNA 合成及细胞分裂。缓释是配方设计，不能单凭“持続型”推断每个人吸收更多或可以少服。备孕／孕期营养方案应合计其他孕期复方叶酸量，并按专业指导制定。','Folate supports one-carbon metabolism and DNA synthesis. Sustained release does not alone prove greater clinical benefit.','葉酸は一炭素代謝・DNA合成に関わります。持続型という名称だけで効果増大は断定しません。'),
  caution:tr('厂家此页未列特定过敏原，不等于对任何人保证无过敏风险。过量叶酸可能掩盖维生素 B12 缺乏的血液表现；用药、既往高风险妊娠或补充多个复方者应先核查。','No specific allergen is listed on this manufacturer page; review ingredients. Excess folic acid can mask hematologic signs of B12 deficiency.','メーカー頁に特定アレルゲン記載はありませんが原料を確認します。過剰葉酸はB12欠乏の血液所見を隠す場合があります。'),
  term:'Folate',extra:'https://ods.od.nih.gov/factsheets/Folate-Consumer/'
 }
};

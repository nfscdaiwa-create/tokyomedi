// Short product-level summaries, checked against the linked PMDA section 4
// (効能又は効果) on 2026-09-23. These are orientation text, not dosing advice.
export const medicineUses = {
  amlodipine: {
    'zh-hans':'主要用于高血压和心绞痛。',
    ja:'主に高血圧症と狭心症に用いられます。',
    en:'Mainly used for high blood pressure and angina.'
  },
  nivolumab: {
    'zh-hans':'用于部分癌症，如黑色素瘤、肺癌和肾癌；适用条件因癌种与治疗阶段而异。',
    ja:'悪性黒色腫、肺がん、腎がんなど一部のがんに用いられ、がん種や治療段階で条件が異なります。',
    en:'Used for selected cancers, including melanoma, lung and kidney cancer, under disease-specific conditions.'
  },
  pembrolizumab: {
    'zh-hans':'用于部分癌症，如黑色素瘤、肺癌等；是否适用取决于癌种、分期或生物标志物。',
    ja:'悪性黒色腫や肺がんなど一部のがんに用いられ、がん種、病期、バイオマーカーで条件が異なります。',
    en:'Used for selected cancers such as melanoma and lung cancer, depending on cancer type, stage or biomarkers.'
  },
  osimertinib: {
    'zh-hans':'用于 EGFR 基因变异阳性的部分非小细胞肺癌。',
    ja:'EGFR遺伝子変異陽性の一部の非小細胞肺がんに用いられます。',
    en:'Used for certain EGFR mutation-positive non-small-cell lung cancers.'
  },
  'trastuzumab-deruxtecan': {
    'zh-hans':'用于符合特定 HER2 条件的部分乳腺癌、胃癌、肺癌及其他实体瘤。',
    ja:'特定のHER2条件に該当する一部の乳がん、胃がん、肺がんなどに用いられます。',
    en:'Used for selected breast, stomach, lung and other solid cancers meeting specific HER2 criteria.'
  },
  lecanemab: {
    'zh-hans':'用于延缓阿尔茨海默病所致轻度认知障碍及轻度痴呆的进展。',
    ja:'アルツハイマー病による軽度認知障害・軽度認知症の進行を抑える目的で用いられます。',
    en:'Used to slow progression of mild cognitive impairment or mild dementia due to Alzheimer’s disease.'
  },
  'sacubitril-valsartan': {
    'zh-hans':'主要用于慢性心力衰竭；部分规格也获批用于高血压。',
    ja:'主に慢性心不全に用いられ、一部の規格は高血圧症にも承認されています。',
    en:'Mainly used for chronic heart failure; some strengths are also approved for hypertension.'
  },
  empagliflozin: {
    'zh-hans':'用于 2 型糖尿病；10 mg 规格也用于部分慢性心衰和慢性肾病。',
    ja:'2型糖尿病に用いられ、10mg製剤は一部の慢性心不全・慢性腎臓病にも用いられます。',
    en:'Used for type 2 diabetes; the 10 mg product is also used for certain chronic heart failure and kidney disease.'
  },
  semaglutide: {
    'zh-hans':'本页为「利贝尔萨斯」口服片，主要用于 2 型糖尿病。',
    ja:'このページの「リベルサス」経口錠は、2型糖尿病に用いられます。',
    en:'This Rybelsus oral-tablet record is for type 2 diabetes.'
  },
  edoxaban: {
    'zh-hans':'用于部分房颤患者预防脑卒中，以及静脉血栓栓塞症的治疗或预防。',
    ja:'一部の心房細動での脳卒中予防や、静脈血栓塞栓症の治療・予防などに用いられます。',
    en:'Used to reduce stroke risk in certain atrial fibrillation and to treat or prevent venous blood clots.'
  },
  tolvaptan: {
    'zh-hans':'按规格用于部分心衰或肝硬化体液潴留、SIADH 低钠血症及特定多囊肾。',
    ja:'規格により、心不全・肝硬変の体液貯留、SIADHの低ナトリウム血症、特定の多発性のう胞腎に用いられます。',
    en:'Depending on strength, used for fluid retention, SIADH-related low sodium, or selected polycystic kidney disease.'
  },
  pirfenidone: {
    'zh-hans':'用于特发性肺纤维化。',
    ja:'特発性肺線維症に用いられます。',
    en:'Used for idiopathic pulmonary fibrosis.'
  },
  dupilumab: {
    'zh-hans':'按剂型与条件用于部分特应性皮炎、重症哮喘等炎症性疾病。',
    ja:'剤形や条件により、アトピー性皮膚炎、重症喘息など一部の炎症性疾患に用いられます。',
    en:'Used for selected inflammatory conditions such as atopic dermatitis and severe asthma, depending on formulation.'
  },
  upadacitinib: {
    'zh-hans':'按剂型与条件用于部分类风湿关节炎、特应性皮炎及炎症性肠病。',
    ja:'剤形や条件により、関節リウマチ、アトピー性皮膚炎、炎症性腸疾患などに用いられます。',
    en:'Used for selected rheumatoid arthritis, atopic dermatitis and inflammatory bowel disease, depending on formulation.'
  },
  risankizumab: {
    'zh-hans':'本页皮下注射品项主要用于常见型银屑病、银屑病关节炎等。',
    ja:'このページの皮下注製剤は、主に尋常性乾癬、乾癬性関節炎などに用いられます。',
    en:'The subcutaneous products on this page are mainly used for plaque psoriasis and psoriatic arthritis.'
  },
  ramelteon: {
    'zh-hans':'用于改善失眠时的入睡困难。',
    ja:'不眠症における入眠困難の改善に用いられます。',
    en:'Used to improve difficulty falling asleep in insomnia.'
  }
};

export const medicineUse = (locale, medicine) => medicineUses[medicine.slug]?.[locale] || medicineUses[medicine.slug]?.en || '';

// Product-level Japanese images. Keep the represented strength and original
// source visible; a photo of one strength never claims to show every variant.
export const medicinePhotos = {
  amlodipine: {
    path:'/media/medicine/amlodipine.jpg',
    src:'https://files.bcart.jp/petmedicpro/uploads/PICT5/612170710.jpg',
    page:'https://www.petmedic-pro.com/product.php?id=3263',
    credit:'PETMEDIC PRO',
    strength:'5 mg',
    match:'Japanese Norvasc 5 mg blister pack'
  },
  nivolumab: {
    path:'/media/medicine/nivolumab.jpg',
    src:'https://www.oncology.bmshealthcare.jp/assets/buildeasy/apac-commercial/bms-healthcare-jp/ja/images/opdivo/opdivo-ivdi-product-image-03.jpg',
    page:'https://www.oncology.bmshealthcare.jp/products/opdivo/drug-info',
    credit:'BMS Oncology Japan',
    strength:'100 mg / 10 mL',
    match:'Japanese Opdivo intravenous vial'
  },
  pembrolizumab: {
    path:'/media/medicine/pembrolizumab.webp',
    src:'https://www.msdconnect.jp/wp-content/uploads/sites/5/2021/03/keytruda_inf100-new_img_001_l.jpg',
    page:'https://www.msdconnect.jp/products/keytruda/info/picture/',
    credit:'MSD Connect',
    strength:'100 mg / 4 mL',
    match:'Japanese Keytruda intravenous vial'
  },
  osimertinib: {
    path:'/media/medicine/osimertinib.jpg',
    src:'https://www.carenet.com/files/news/20250519170805-1.jpg',
    page:'https://www.carenet.com/news/general/carenet/60720',
    credit:'CareNet',
    strength:'40 mg / 80 mg',
    match:'Japanese Tagrisso 40 and 80 mg blister packs'
  },
  'trastuzumab-deruxtecan': {
    path:'/media/medicine/trastuzumab-deruxtecan.png',
    src:'https://d3ukgu32nhw07o.cloudfront.net/article/img1_file5ecb7ff751090.png',
    page:'https://www.nikkan.co.jp/articles/view/00558801',
    credit:'日刊工業新聞',
    strength:'100 mg',
    match:'Japanese Enhertu 100 mg infusion vial and box'
  },
  lecanemab: {
    path:'/media/medicine/lecanemab.webp',
    src:'https://medical.eisai.jp/hubfs/medical.eisai/DB_images/product_detail/LEQ_V_500/LEQ_V500_PIC_PH.jpg',
    page:'https://medical.eisai.jp/products/leq/leq_v_500',
    credit:'エーザイ Medical',
    strength:'500 mg / 5 mL',
    match:'Japanese Leqembi 500 mg infusion vial'
  },
  'sacubitril-valsartan': {
    path:'/media/medicine/sacubitril-valsartan.png',
    src:'https://www.pro.novartis.com/sites/pro_novartis_com_jp/files/2024-08/ph_enr_ptp_50mg_10_front.png',
    page:'https://www.pro.novartis.com/jp-ja/products/entresto/document',
    credit:'ノバルティス ファーマ',
    strength:'50 mg',
    match:'Japanese Entresto 50 mg blister pack, adult tablet'
  },
  empagliflozin: {
    path:'/media/medicine/empagliflozin.jpg',
    src:'https://www.bij-kusuri.jp/products/files/jad_t10_package2.jpg',
    page:'https://www.bij-kusuri.jp/products/jad/tablets-10/',
    credit:'ベーリンガーインゲルハイム',
    strength:'10 mg',
    match:'Japanese Jardiance 10 mg blister pack'
  },
  edoxaban: {
    path:'/media/medicine/edoxaban.jpg',
    src:'https://www.kansaiyakuhin.com/upload/save_image/08161644_66bf037b9d37d.jpg',
    page:'https://www.kansaiyakuhin.com/hanbai/products/list.php?mode=search&name_kana=%E3%83%A9',
    credit:'関西薬品',
    strength:'30 mg',
    match:'Japanese Lixiana 30 mg retail box'
  },
  tolvaptan: {
    path:'/media/medicine/tolvaptan.jpg',
    src:'https://www.otsuka.co.jp/company/newsreleases/assets/img/20191127_1_02.jpg',
    page:'https://www.otsuka.co.jp/company/newsreleases/2019/20191127_1.html',
    credit:'大塚製薬',
    strength:'OD 7.5 mg / 15 mg / 30 mg',
    match:'Japanese Samsca orally disintegrating tablet boxes and blisters'
  },
  pirfenidone: {
    path:'/media/medicine/pirfenidone.jpg',
    src:'https://med.shionogi.co.jp/content/dam/hcp/jp/product-files/medicine/f/pirespa/medicine-images/pirespa/pirespa-02.jpg',
    page:'https://med.shionogi.co.jp/products/medicine/pirespa.html',
    credit:'塩野義製薬',
    strength:'200 mg',
    match:'Japanese Pirespa 200 mg blister pack'
  },
  upadacitinib: {
    path:'/media/medicine/upadacitinib.jpg',
    src:'https://kyodonewsprwire.jp/prwfile/release/M102977/202004239299/_prw_PI2lg_nVWD5Qc1.jpg',
    page:'https://kyodonewsprwire.jp/release/202004239299',
    credit:'アッヴィ / 共同通信PRワイヤー',
    strength:'7.5 mg / 15 mg',
    match:'Japanese Rinvoq 7.5 and 15 mg boxes and blisters'
  },
  risankizumab: {
    path:'/media/medicine/risankizumab.jpg',
    src:'https://skyrizi.jp/ps/common/images/about_skyrizi/pic_treatment3.jpg',
    page:'https://skyrizi.jp/ps/about_skyrizi/treatment.html',
    credit:'スキリージ.jp / アッヴィ',
    strength:'150 mg / 1 mL pen',
    match:'Japanese Skyrizi 150 mg subcutaneous pen'
  },
  dupilumab: {
    path:'/media/medicine/dupilumab.jpg',
    src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Dupixent_Pen_and_Packaging.jpg/960px-Dupixent_Pen_and_Packaging.jpg',
    page:'https://commons.wikimedia.org/wiki/File:Dupixent_Pen_and_Packaging.jpg',
    credit:'Lyall0',
    license:'CC BY-SA 4.0',
    licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',
    strength:'300 mg / 2 mL',
    match:'Japanese-labelled Dupixent autoinjector pen'
  },
  semaglutide: {
    path:'/media/medicine/semaglutide.jpg',
    src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Rybelsus_3mg_7mg.jpg/960px-Rybelsus_3mg_7mg.jpg',
    page:'https://commons.wikimedia.org/wiki/File:Rybelsus_3mg_7mg.jpg',
    credit:'Windshear',
    license:'CC BY-SA 4.0',
    licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',
    strength:'3 mg / 7 mg',
    match:'Japanese Rybelsus oral tablets'
  },
  ramelteon: {
    path:'/media/medicine/ramelteon.jpg',
    src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/2020-05-20_Ramelteon_%E3%83%AD%E3%82%BC%E3%83%AC%E3%83%A0%E9%8C%A08mg.jpg/960px-2020-05-20_Ramelteon_%E3%83%AD%E3%82%BC%E3%83%AC%E3%83%A0%E9%8C%A08mg.jpg',
    page:'https://commons.wikimedia.org/wiki/File:2020-05-20_Ramelteon_%E3%83%AD%E3%82%BC%E3%83%AC%E3%83%A0%E9%8C%A08mg.jpg',
    credit:'松岡明芳',
    license:'CC BY-SA 4.0',
    licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',
    strength:'8 mg',
    match:'Japanese Rozerem 8 mg blister pack'
  }
};

export const SITE = 'https://tokyomedi.com';
export const EMAIL = 'beibei7jp1978@yahoo.co.jp';
export const VERSION = '2026.09.23-i18n20';
export const LOCALES = ['en','zh-hans','hi','es','ar','fr','bn','pt','id','ur','ru','de','ja','pcm','mr','vi','te','sw','ha','tr'];

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


function aiLocale(x){
  return {...UI.en,...x,nav:{...UI.en.nav,...(x.nav||{})},filters:{...UI.en.filters,...(x.filters||{})}};
}
Object.assign(UI,{
  hi:aiLocale({
    lang:'हिन्दी',nav:{medicines:'जापानी दवाइयाँ',health:'स्वास्थ्य और पोषण',guides:'चिकित्सा मार्गदर्शिका',travel:'जापान में इलाज की जानकारी',sources:'स्रोत',about:'हमारे बारे में',inquiry:'संस्थागत पूछताछ'},
    heroKicker:'जापानी दवाइयाँ · प्राथमिक स्रोत · जापान में उपचार',
    heroTitle:'जापानी दवाओं और जापान में उपचार की संदर्भ जानकारी',
    heroLead:'जापानी उत्पाद नाम, जेनेरिक नाम, विपणन-अनुमति धारक, शक्ति और PMDA के उत्पाद-स्तरीय स्रोतों को अंतरराष्ट्रीय रोगियों के लिए अस्पतालों की आधिकारिक प्रवेश जानकारी के साथ व्यवस्थित किया गया है। प्रिस्क्रिप्शन दवाओं के उपयोग और प्राप्ति के लिए डॉक्टर का मूल्यांकन और उचित चिकित्सा प्रक्रिया आवश्यक है।',
    searchPlaceholder:'दवा / घटक / जापानी या अंग्रेज़ी नाम खोजें',search:'डेटाबेस खोजें',routeTitle:'मुख्य अनुभाग',
    routeItems:[['medicines','दवा संदर्भ','उत्पाद, जेनेरिक, निर्माता या उपचार क्षेत्र से खोजें'],['health','स्वास्थ्य और पोषण','जापानी स्वास्थ्य खाद्य, सप्लीमेंट और उत्पाद जानकारी'],['guides','चिकित्सा मार्गदर्शिका','दवा जानकारी और जापानी स्वास्थ्य व्यवस्था समझें'],['travel','जापान में उपचार','अस्पताल की आधिकारिक प्रवेश और विदेशी रोगी जानकारी देखें'],['inquiry','संस्थागत पूछताछ','संस्थानों, फार्मेसियों और कंपनियों के लिए दवा पूछताछ']],
    strength:'जापान में चिकित्सा अनुसंधान और देखभाल',strengthLead:'वर्तमान दवा और उपचार जानकारी को समझने के लिए जापानी चिकित्सा अनुसंधान के चुनिंदा विकास सत्यापन योग्य स्रोतों के साथ प्रस्तुत किए जाते हैं।',
    medicineDb:'जापानी दवा संदर्भ',medicineLead:'जापानी उत्पाद नाम, जेनेरिक नाम, विपणन-अनुमति धारक, शक्ति, उपचार क्षेत्र और प्राथमिक स्रोत के अनुसार व्यवस्थित।',
    why:'संपादकीय सिद्धांत',health:'स्वास्थ्य और पोषण',healthLead:'स्वास्थ्य खाद्य और सप्लीमेंट को दवाओं से अलग रखा जाता है और खाद्य स्थिति, पैक आकार तथा उत्पाद स्रोत स्पष्ट रूप से दिए जाते हैं।',guides:'चिकित्सा मार्गदर्शिका',travel:'जापान में उपचार की जानकारी',inquiry:'संस्थागत दवा पूछताछ',rx:'प्रिस्क्रिप्शन दवा संदर्भ',
    viewAll:'सभी देखें',read:'मार्गदर्शिका पढ़ें',details:'संदर्भ देखें',official:'आधिकारिक स्रोत',updated:'सत्यापित',noBuy:'केवल संदर्भ · ऑनलाइन बिक्री नहीं',
    rxNotice:'प्रिस्क्रिप्शन दवा की जानकारी केवल संदर्भ के लिए है; यह प्रिस्क्रिप्शन, निदान या उपचार की सलाह नहीं है। उपयुक्तता, उपयोग और उपलब्धता का निर्णय लाइसेंस प्राप्त पेशेवरों और संबंधित चिकित्सा प्रक्रिया के माध्यम से होना चाहिए।',
    filters:{all:'सभी क्षेत्र',cardio:'हृदय',oncology:'ऑन्कोलॉजी',metabolic:'मेटाबॉलिक',neuro:'न्यूरोलॉजी',immune:'इम्यूनोलॉजी',respiratory:'श्वसन'},
    travelFilter:'चिकित्सा आवश्यकता के अनुसार फ़िल्टर',hospitalOfficial:'अस्पताल की आधिकारिक अंतरराष्ट्रीय रोगी जानकारी',personal:'जानकारी संपर्क',institution:'संस्थान / फार्मेसी / कंपनियाँ',
    personalDesc:'TOKYO MEDI व्यक्तिगत चिकित्सा परामर्श, अपॉइंटमेंट, निदान, प्रिस्क्रिप्शन या उपचार समन्वय प्रदान नहीं करता।',institutionDesc:'केवल संस्थानों, फार्मेसियों और कंपनियों के लिए। दवा, शक्ति, मात्रा, गंतव्य और सार्वजनिक लाइसेंस जानकारी के साथ उत्पाद पूछताछ ईमेल तैयार करें।',
    startPersonal:'जापान में उपचार की जानकारी देखें',startInstitution:'संस्थागत पूछताछ भेजें',footer:'यह साइट सामान्य दवा और स्वास्थ्य संदर्भ जानकारी देती है। यह निदान, प्रिस्क्रिप्शन या व्यक्तिगत उपचार सलाह प्रदान नहीं करती।'
  }),
  es:aiLocale({
    lang:'Español',nav:{medicines:'Medicamentos japoneses',health:'Salud y nutrición',guides:'Guías médicas',travel:'Atención médica en Japón',sources:'Fuentes',about:'Acerca de',inquiry:'Consulta institucional'},
    heroKicker:'MEDICAMENTOS JAPONESES · FUENTES PRIMARIAS · ATENCIÓN EN JAPÓN',heroTitle:'Referencia de medicamentos japoneses y atención médica en Japón',
    heroLead:'Organizamos nombres comerciales japoneses, genéricos, titulares de autorización, concentraciones y fuentes de PMDA junto con información oficial de admisión hospitalaria para pacientes internacionales. Los medicamentos con receta requieren evaluación clínica y el proceso asistencial correspondiente.',
    searchPlaceholder:'Buscar medicamento / ingrediente / nombre japonés o inglés',search:'Buscar en la base',routeTitle:'Secciones principales',
    routeItems:[['medicines','Referencia de medicamentos','Busque por producto, genérico, fabricante o área terapéutica'],['health','Salud y nutrición','Alimentos saludables, suplementos y fichas de producto de Japón'],['guides','Guías médicas','Comprenda la información farmacológica y el sistema sanitario japonés'],['travel','Atención médica en Japón','Consulte admisión hospitalaria e información para pacientes extranjeros'],['inquiry','Consulta institucional','Consultas de medicamentos para instituciones, farmacias y empresas']],
    strength:'Investigación y atención médica en Japón',strengthLead:'Presentamos avances seleccionados de la investigación médica japonesa con fuentes verificables como contexto para la información actual sobre medicamentos y atención.',
    medicineDb:'Referencia de medicamentos japoneses',medicineLead:'Organizada por nombre japonés, genérico, titular de autorización, concentración, área terapéutica y fuente primaria.',
    why:'Principios editoriales',health:'Salud y nutrición',healthLead:'Los alimentos saludables y suplementos se muestran separados de los medicamentos e indican claramente su condición de alimento, contenido y fuentes.',guides:'Guías médicas',travel:'Atención médica en Japón',inquiry:'Consulta institucional de medicamentos',rx:'Referencia de medicamentos con receta',
    viewAll:'Ver todo',read:'Leer guía',details:'Ver referencia',official:'Fuente oficial',updated:'Verificado',noBuy:'Solo referencia · sin compra en línea',
    rxNotice:'La información sobre medicamentos con receta es solo de referencia y no constituye prescripción, diagnóstico ni recomendación terapéutica. Su idoneidad, uso y acceso requieren profesionales autorizados y el proceso clínico correspondiente.',
    filters:{all:'Todas las áreas',cardio:'Cardiovascular',oncology:'Oncología',metabolic:'Metabólico',neuro:'Neurología',immune:'Inmunología',respiratory:'Respiratorio'},
    travelFilter:'Filtrar por necesidad médica',hospitalOfficial:'Información oficial para pacientes internacionales',personal:'Contacto informativo',institution:'Instituciones / farmacias / empresas',
    personalDesc:'TOKYO MEDI no ofrece consulta médica personal, citas, diagnóstico, prescripción ni coordinación asistencial.',institutionDesc:'Solo para instituciones, farmacias y empresas. Prepare una consulta con medicamento, concentración, cantidad, destino e información pública de licencia.',
    startPersonal:'Ver información de atención en Japón',startInstitution:'Enviar consulta institucional',footer:'Este sitio ofrece información general de referencia sobre medicamentos y salud. No ofrece diagnóstico, prescripción ni recomendaciones de tratamiento individualizadas.'
  }),
  ar:aiLocale({
    lang:'العربية',nav:{medicines:'الأدوية اليابانية',health:'الصحة والتغذية',guides:'أدلة طبية',travel:'العلاج في اليابان',sources:'المصادر',about:'حول الموقع',inquiry:'استفسار مؤسسي'},
    heroKicker:'أدوية يابانية · مصادر أولية · رعاية في اليابان',heroTitle:'مرجع للأدوية اليابانية ومعلومات الرعاية الطبية في اليابان',
    heroLead:'ننظم أسماء المنتجات اليابانية والأسماء العلمية وحاملي تراخيص التسويق والتركيزات ومصادر PMDA على مستوى المنتج، مع معلومات المستشفيات الرسمية لاستقبال المرضى الدوليين. تتطلب الأدوية الموصوفة تقييماً من مختص مرخص وإجراءات الرعاية المناسبة.',
    searchPlaceholder:'ابحث عن دواء / مادة فعالة / اسم ياباني أو إنجليزي',search:'بحث في قاعدة البيانات',routeTitle:'الأقسام الرئيسية',
    routeItems:[['medicines','مرجع الأدوية','البحث حسب المنتج أو الاسم العلمي أو الشركة أو المجال العلاجي'],['health','الصحة والتغذية','أغذية صحية ومكملات ومعلومات منتجات يابانية'],['guides','أدلة طبية','فهم معلومات الأدوية ونظام الرعاية الصحية الياباني'],['travel','العلاج في اليابان','معلومات رسمية عن استقبال المستشفيات والمرضى القادمين من الخارج'],['inquiry','استفسار مؤسسي','استفسارات أدوية للمؤسسات والصيدليات والشركات']],
    strength:'البحث الطبي والرعاية في اليابان',strengthLead:'نعرض تطورات مختارة في البحث الطبي الياباني مع مصادر قابلة للتحقق كخلفية لفهم معلومات الدواء والرعاية الحالية.',
    medicineDb:'مرجع الأدوية اليابانية',medicineLead:'منظم حسب اسم المنتج الياباني والاسم العلمي وحامل الترخيص والتركيز والمجال العلاجي والمصدر الأولي.',
    why:'المبادئ التحريرية',health:'الصحة والتغذية',healthLead:'تُعرض الأغذية الصحية والمكملات بشكل منفصل عن الأدوية مع توضيح صفتها الغذائية وحجم العبوة ومصادر المنتج.',guides:'أدلة طبية',travel:'العلاج في اليابان',inquiry:'استفسار دوائي مؤسسي',rx:'مرجع الأدوية الموصوفة',
    viewAll:'عرض الكل',read:'قراءة الدليل',details:'عرض المرجع',official:'مصدر رسمي',updated:'تم التحقق',noBuy:'للمرجع فقط · لا بيع عبر الإنترنت',
    rxNotice:'معلومات الأدوية الموصوفة مقدمة للمرجع فقط ولا تمثل وصفة أو تشخيصاً أو توصية علاجية. الملاءمة وطريقة الاستخدام وإمكانية الحصول على الدواء تتطلب مختصين مرخصين والإجراءات السريرية ذات الصلة.',
    filters:{all:'كل المجالات',cardio:'القلب والأوعية',oncology:'الأورام',metabolic:'الأيض',neuro:'الأعصاب',immune:'المناعة',respiratory:'التنفس'},
    travelFilter:'تصفية حسب الحاجة الطبية',hospitalOfficial:'معلومات المستشفى الرسمية للمرضى الدوليين',personal:'اتصال للمعلومات',institution:'مؤسسات / صيدليات / شركات',
    personalDesc:'لا يقدم TOKYO MEDI استشارات طبية شخصية أو مواعيد أو تشخيصاً أو وصف أدوية أو تنسيقاً للعلاج.',institutionDesc:'للمؤسسات والصيدليات والشركات فقط. يمكن إعداد استفسار يتضمن الدواء والتركيز والكمية والوجهة ومعلومات الترخيص المنشورة.',
    startPersonal:'عرض معلومات العلاج في اليابان',startInstitution:'إرسال استفسار مؤسسي',footer:'يقدم هذا الموقع معلومات مرجعية عامة عن الأدوية والرعاية الصحية، ولا يقدم تشخيصاً أو وصفاً دوائياً أو نصيحة علاجية فردية.'
  }),
  fr:aiLocale({
    lang:'Français',nav:{medicines:'Médicaments japonais',health:'Santé et nutrition',guides:'Guides médicaux',travel:'Soins au Japon',sources:'Sources',about:'À propos',inquiry:'Demande institutionnelle'},
    heroKicker:'MÉDICAMENTS JAPONAIS · SOURCES PRIMAIRES · SOINS AU JAPON',heroTitle:'Référence sur les médicaments japonais et les soins au Japon',
    heroLead:'Nous organisons les noms commerciaux japonais, DCI, titulaires d’autorisation, dosages et sources PMDA par produit, ainsi que les informations officielles d’accueil des hôpitaux pour les patients internationaux. Les médicaments sur ordonnance nécessitent une évaluation clinique et le parcours de soins approprié.',
    searchPlaceholder:'Rechercher médicament / substance / nom japonais ou anglais',search:'Rechercher',routeTitle:'Rubriques principales',
    routeItems:[['medicines','Référence médicaments','Rechercher par produit, DCI, fabricant ou domaine thérapeutique'],['health','Santé et nutrition','Aliments santé, compléments et informations produit du Japon'],['guides','Guides médicaux','Comprendre les informations médicament et le système de soins japonais'],['travel','Soins au Japon','Consulter les conditions officielles d’accueil et les informations patients internationaux'],['inquiry','Demande institutionnelle','Demandes de médicaments pour institutions, pharmacies et entreprises']],
    strength:'Recherche médicale et soins au Japon',strengthLead:'Des avancées sélectionnées de la recherche médicale japonaise sont présentées avec des sources vérifiables pour contextualiser les informations actuelles sur les médicaments et les soins.',
    medicineDb:'Référence des médicaments japonais',medicineLead:'Organisée par nom japonais, DCI, titulaire d’autorisation, dosage, domaine thérapeutique et source primaire.',
    why:'Principes éditoriaux',health:'Santé et nutrition',healthLead:'Les aliments santé et compléments sont séparés des médicaments et clairement identifiés avec leur statut alimentaire, conditionnement et sources.',guides:'Guides médicaux',travel:'Soins au Japon',inquiry:'Demande institutionnelle de médicament',rx:'Référence des médicaments sur ordonnance',
    viewAll:'Tout voir',read:'Lire le guide',details:'Voir la référence',official:'Source officielle',updated:'Vérifié',noBuy:'Référence uniquement · aucun achat en ligne',
    rxNotice:'Les informations sur les médicaments sur ordonnance sont fournies à titre de référence et ne constituent ni prescription, ni diagnostic, ni recommandation thérapeutique. L’adéquation, l’utilisation et l’accès nécessitent des professionnels autorisés et le parcours clinique approprié.',
    filters:{all:'Tous les domaines',cardio:'Cardiovasculaire',oncology:'Oncologie',metabolic:'Métabolique',neuro:'Neurologie',immune:'Immunologie',respiratory:'Respiratoire'},
    travelFilter:'Filtrer par besoin médical',hospitalOfficial:'Informations officielles pour patients internationaux',personal:'Contact information',institution:'Institutions / pharmacies / entreprises',
    personalDesc:'TOKYO MEDI ne fournit pas de consultation médicale personnelle, rendez-vous, diagnostic, prescription ni coordination de soins.',institutionDesc:'Réservé aux institutions, pharmacies et entreprises. Préparez une demande avec médicament, dosage, quantité, destination et références publiques de licence.',
    startPersonal:'Voir les informations de soins au Japon',startInstitution:'Envoyer une demande institutionnelle',footer:'Ce site fournit des informations générales de référence sur les médicaments et la santé. Il ne fournit ni diagnostic, ni prescription, ni conseil thérapeutique individualisé.'
  }),
  bn:aiLocale({
    lang:'বাংলা',nav:{medicines:'জাপানি ওষুধ',health:'স্বাস্থ্য ও পুষ্টি',guides:'চিকিৎসা নির্দেশিকা',travel:'জাপানে চিকিৎসা',sources:'উৎস',about:'পরিচিতি',inquiry:'প্রাতিষ্ঠানিক অনুসন্ধান'},
    heroKicker:'জাপানি ওষুধ · প্রাথমিক উৎস · জাপানে চিকিৎসা',heroTitle:'জাপানি ওষুধ ও জাপানে চিকিৎসার রেফারেন্স তথ্য',
    heroLead:'জাপানি পণ্যের নাম, জেনেরিক নাম, বিপণন অনুমোদনধারী, শক্তি ও PMDA-র পণ্যভিত্তিক উৎস আন্তর্জাতিক রোগীদের জন্য হাসপাতালের সরকারি গ্রহণ-তথ্যের সঙ্গে সাজানো হয়েছে। প্রেসক্রিপশন ওষুধ ব্যবহারে চিকিৎসকের মূল্যায়ন ও উপযুক্ত চিকিৎসা প্রক্রিয়া প্রয়োজন।',
    searchPlaceholder:'ওষুধ / উপাদান / জাপানি বা ইংরেজি নাম খুঁজুন',search:'ডাটাবেস খুঁজুন',routeTitle:'প্রধান বিভাগ',
    routeItems:[['medicines','ওষুধ রেফারেন্স','পণ্য, জেনেরিক, প্রস্তুতকারক বা চিকিৎসা ক্ষেত্র দিয়ে খুঁজুন'],['health','স্বাস্থ্য ও পুষ্টি','জাপানি স্বাস্থ্যপণ্য, সাপ্লিমেন্ট ও পণ্যের তথ্য'],['guides','চিকিৎসা নির্দেশিকা','ওষুধের তথ্য ও জাপানের স্বাস্থ্যব্যবস্থা বুঝুন'],['travel','জাপানে চিকিৎসা','হাসপাতালের সরকারি গ্রহণনীতি ও বিদেশি রোগীর তথ্য দেখুন'],['inquiry','প্রাতিষ্ঠানিক অনুসন্ধান','প্রতিষ্ঠান, ফার্মেসি ও কোম্পানির ওষুধ অনুসন্ধান']],
    strength:'জাপানে চিকিৎসা গবেষণা ও সেবা',strengthLead:'বর্তমান ওষুধ ও চিকিৎসা তথ্য বোঝার প্রেক্ষাপট হিসেবে যাচাইযোগ্য উৎসসহ জাপানি চিকিৎসা গবেষণার নির্বাচিত অগ্রগতি তুলে ধরা হয়।',
    medicineDb:'জাপানি ওষুধ রেফারেন্স',medicineLead:'জাপানি পণ্যের নাম, জেনেরিক, অনুমোদনধারী, শক্তি, চিকিৎসা ক্ষেত্র ও প্রাথমিক উৎস অনুযায়ী সাজানো।',
    why:'সম্পাদনা নীতি',health:'স্বাস্থ্য ও পুষ্টি',healthLead:'স্বাস্থ্যপণ্য ও সাপ্লিমেন্ট ওষুধ থেকে আলাদা রাখা হয় এবং খাদ্য হিসেবে অবস্থান, প্যাকের আকার ও উৎস স্পষ্ট করা হয়।',guides:'চিকিৎসা নির্দেশিকা',travel:'জাপানে চিকিৎসা',inquiry:'প্রাতিষ্ঠানিক ওষুধ অনুসন্ধান',rx:'প্রেসক্রিপশন ওষুধ রেফারেন্স',
    viewAll:'সব দেখুন',read:'নির্দেশিকা পড়ুন',details:'রেফারেন্স দেখুন',official:'সরকারি উৎস',updated:'যাচাইকৃত',noBuy:'শুধু রেফারেন্স · অনলাইন বিক্রি নেই',
    rxNotice:'প্রেসক্রিপশন ওষুধের তথ্য শুধু রেফারেন্স; এটি প্রেসক্রিপশন, রোগনির্ণয় বা চিকিৎসা পরামর্শ নয়। উপযোগিতা, ব্যবহার ও প্রাপ্যতা লাইসেন্সধারী পেশাজীবী ও সংশ্লিষ্ট চিকিৎসা প্রক্রিয়ার মাধ্যমে নির্ধারিত হতে হবে।',
    filters:{all:'সব ক্ষেত্র',cardio:'হৃদ্‌রোগ',oncology:'অনকোলজি',metabolic:'বিপাক',neuro:'স্নায়ুবিদ্যা',immune:'ইমিউনোলজি',respiratory:'শ্বাসতন্ত্র'},
    travelFilter:'চিকিৎসা প্রয়োজন অনুযায়ী ফিল্টার',hospitalOfficial:'আন্তর্জাতিক রোগীদের জন্য হাসপাতালের সরকারি তথ্য',personal:'তথ্য যোগাযোগ',institution:'প্রতিষ্ঠান / ফার্মেসি / কোম্পানি',
    personalDesc:'TOKYO MEDI ব্যক্তিগত চিকিৎসা পরামর্শ, অ্যাপয়েন্টমেন্ট, রোগনির্ণয়, প্রেসক্রিপশন বা চিকিৎসা সমন্বয় দেয় না।',institutionDesc:'শুধু প্রতিষ্ঠান, ফার্মেসি ও কোম্পানির জন্য। ওষুধ, শক্তি, পরিমাণ, গন্তব্য ও প্রকাশ্য লাইসেন্স তথ্যসহ অনুসন্ধান ইমেইল তৈরি করুন।',
    startPersonal:'জাপানে চিকিৎসার তথ্য দেখুন',startInstitution:'প্রাতিষ্ঠানিক অনুসন্ধান পাঠান',footer:'এই সাইট সাধারণ ওষুধ ও স্বাস্থ্য রেফারেন্স তথ্য দেয়। রোগনির্ণয়, প্রেসক্রিপশন বা ব্যক্তিকেন্দ্রিক চিকিৎসা পরামর্শ দেয় না।'
  }),
  pt:aiLocale({
    lang:'Português',nav:{medicines:'Medicamentos japoneses',health:'Saúde e nutrição',guides:'Guias médicos',travel:'Cuidados no Japão',sources:'Fontes',about:'Sobre',inquiry:'Consulta institucional'},
    heroKicker:'MEDICAMENTOS JAPONESES · FONTES PRIMÁRIAS · CUIDADOS NO JAPÃO',heroTitle:'Referência de medicamentos japoneses e cuidados de saúde no Japão',
    heroLead:'Organizamos nomes comerciais japoneses, genéricos, titulares de autorização, dosagens e fontes da PMDA por produto, junto com informações oficiais de hospitais para pacientes internacionais. Medicamentos sujeitos a receita exigem avaliação clínica e o processo assistencial adequado.',
    searchPlaceholder:'Pesquisar medicamento / ingrediente / nome japonês ou inglês',search:'Pesquisar base',routeTitle:'Seções principais',
    routeItems:[['medicines','Referência de medicamentos','Pesquise por produto, genérico, fabricante ou área terapêutica'],['health','Saúde e nutrição','Alimentos funcionais, suplementos e informações de produtos japoneses'],['guides','Guias médicos','Entenda informações de medicamentos e o sistema de saúde japonês'],['travel','Cuidados no Japão','Consulte informações oficiais de admissão e de pacientes internacionais'],['inquiry','Consulta institucional','Consultas de medicamentos para instituições, farmácias e empresas']],
    strength:'Pesquisa médica e cuidados no Japão',strengthLead:'Avanços selecionados da pesquisa médica japonesa são apresentados com fontes verificáveis como contexto para informações atuais sobre medicamentos e cuidados.',
    medicineDb:'Referência de medicamentos japoneses',medicineLead:'Organizada por nome japonês, genérico, titular da autorização, dosagem, área terapêutica e fonte primária.',
    why:'Princípios editoriais',health:'Saúde e nutrição',healthLead:'Alimentos funcionais e suplementos ficam separados dos medicamentos e são identificados com status alimentar, tamanho da embalagem e fontes.',guides:'Guias médicos',travel:'Cuidados no Japão',inquiry:'Consulta institucional de medicamentos',rx:'Referência de medicamentos sob receita',
    viewAll:'Ver tudo',read:'Ler guia',details:'Ver referência',official:'Fonte oficial',updated:'Verificado',noBuy:'Somente referência · sem compra online',
    rxNotice:'As informações sobre medicamentos sujeitos a receita são apenas de referência e não constituem prescrição, diagnóstico ou recomendação de tratamento. Adequação, uso e acesso exigem profissionais licenciados e o processo clínico pertinente.',
    filters:{all:'Todas as áreas',cardio:'Cardiovascular',oncology:'Oncologia',metabolic:'Metabólico',neuro:'Neurologia',immune:'Imunologia',respiratory:'Respiratório'},
    travelFilter:'Filtrar por necessidade médica',hospitalOfficial:'Informações oficiais para pacientes internacionais',personal:'Contato de informação',institution:'Instituições / farmácias / empresas',
    personalDesc:'O TOKYO MEDI não fornece consulta médica pessoal, marcação, diagnóstico, prescrição ou coordenação de cuidados.',institutionDesc:'Somente para instituições, farmácias e empresas. Prepare uma consulta com medicamento, dosagem, quantidade, destino e informação pública de licença.',
    startPersonal:'Ver informações de cuidados no Japão',startInstitution:'Enviar consulta institucional',footer:'Este site fornece informações gerais de referência sobre medicamentos e saúde. Não fornece diagnóstico, prescrição ou aconselhamento terapêutico individual.'
  }),
  id:aiLocale({
    lang:'Bahasa Indonesia',nav:{medicines:'Obat Jepang',health:'Kesehatan & nutrisi',guides:'Panduan medis',travel:'Perawatan di Jepang',sources:'Sumber',about:'Tentang',inquiry:'Pertanyaan institusi'},
    heroKicker:'OBAT JEPANG · SUMBER PRIMER · PERAWATAN DI JEPANG',heroTitle:'Referensi obat Jepang dan informasi perawatan medis di Jepang',
    heroLead:'Nama produk Jepang, nama generik, pemegang izin edar, kekuatan, dan sumber PMDA per produk disusun bersama informasi resmi penerimaan rumah sakit untuk pasien internasional. Obat resep memerlukan penilaian tenaga medis berizin dan proses perawatan yang sesuai.',
    searchPlaceholder:'Cari obat / bahan / nama Jepang atau Inggris',search:'Cari basis data',routeTitle:'Bagian utama',
    routeItems:[['medicines','Referensi obat','Cari berdasarkan produk, generik, produsen, atau bidang terapi'],['health','Kesehatan & nutrisi','Makanan kesehatan, suplemen, dan informasi produk Jepang'],['guides','Panduan medis','Pahami informasi obat dan sistem kesehatan Jepang'],['travel','Perawatan di Jepang','Lihat penerimaan resmi rumah sakit dan informasi pasien luar negeri'],['inquiry','Pertanyaan institusi','Pertanyaan obat untuk institusi, apotek, dan perusahaan']],
    strength:'Riset medis dan perawatan di Jepang',strengthLead:'Perkembangan terpilih dalam riset medis Jepang ditampilkan dengan sumber yang dapat diverifikasi sebagai konteks informasi obat dan perawatan saat ini.',
    medicineDb:'Referensi obat Jepang',medicineLead:'Disusun menurut nama produk Jepang, generik, pemegang izin edar, kekuatan, bidang terapi, dan sumber primer.',
    why:'Prinsip editorial',health:'Kesehatan & nutrisi',healthLead:'Makanan kesehatan dan suplemen dipisahkan dari obat serta diberi label jelas mengenai status pangan, ukuran kemasan, dan sumber produk.',guides:'Panduan medis',travel:'Perawatan di Jepang',inquiry:'Pertanyaan obat institusi',rx:'Referensi obat resep',
    viewAll:'Lihat semua',read:'Baca panduan',details:'Lihat referensi',official:'Sumber resmi',updated:'Diverifikasi',noBuy:'Hanya referensi · tidak ada pembelian online',
    rxNotice:'Informasi obat resep hanya untuk referensi dan bukan resep, diagnosis, atau rekomendasi terapi. Kesesuaian, penggunaan, dan akses harus ditentukan oleh tenaga profesional berizin melalui proses klinis yang terkait.',
    filters:{all:'Semua bidang',cardio:'Kardiovaskular',oncology:'Onkologi',metabolic:'Metabolik',neuro:'Neurologi',immune:'Imunologi',respiratory:'Pernapasan'},
    travelFilter:'Saring menurut kebutuhan medis',hospitalOfficial:'Informasi resmi pasien internasional rumah sakit',personal:'Kontak informasi',institution:'Institusi / apotek / perusahaan',
    personalDesc:'TOKYO MEDI tidak menyediakan konsultasi medis pribadi, janji temu, diagnosis, resep, atau koordinasi perawatan.',institutionDesc:'Hanya untuk institusi, apotek, dan perusahaan. Siapkan pertanyaan produk dengan obat, kekuatan, jumlah, tujuan, dan informasi izin publik.',
    startPersonal:'Lihat informasi perawatan di Jepang',startInstitution:'Kirim pertanyaan institusi',footer:'Situs ini menyediakan informasi referensi umum tentang obat dan kesehatan. Tidak menyediakan diagnosis, resep, atau saran perawatan individual.'
  }),
  ur:aiLocale({
    lang:'اردو',nav:{medicines:'جاپانی ادویات',health:'صحت اور غذائیت',guides:'طبی رہنما',travel:'جاپان میں علاج',sources:'ذرائع',about:'تعارف',inquiry:'ادارہ جاتی استفسار'},
    heroKicker:'جاپانی ادویات · بنیادی ذرائع · جاپان میں علاج',heroTitle:'جاپانی ادویات اور جاپان میں علاج کی معلومات',
    heroLead:'جاپانی تجارتی نام، عمومی نام، مارکیٹنگ اجازت رکھنے والے ادارے، طاقت اور PMDA کے پروڈکٹ سطح کے ذرائع کو بین الاقوامی مریضوں کے لیے ہسپتالوں کی سرکاری داخلہ معلومات کے ساتھ منظم کیا گیا ہے۔ نسخے کی ادویات کے لیے مجاز طبی ماہر کا جائزہ اور مناسب طبی عمل ضروری ہے۔',
    searchPlaceholder:'دوا / جزو / جاپانی یا انگریزی نام تلاش کریں',search:'ڈیٹا بیس تلاش کریں',routeTitle:'اہم حصے',
    routeItems:[['medicines','ادویات کا حوالہ','پروڈکٹ، عمومی نام، سازندہ یا علاج کے شعبے سے تلاش کریں'],['health','صحت اور غذائیت','جاپانی صحت بخش غذائیں، سپلیمنٹس اور پروڈکٹ معلومات'],['guides','طبی رہنما','ادویات کی معلومات اور جاپانی صحت نظام سمجھیں'],['travel','جاپان میں علاج','ہسپتال کے سرکاری داخلہ اور بیرون ملک مریضوں کی معلومات دیکھیں'],['inquiry','ادارہ جاتی استفسار','اداروں، فارمیسیوں اور کمپنیوں کے لیے دوا سے متعلق استفسار']],
    strength:'جاپان میں طبی تحقیق اور نگہداشت',strengthLead:'موجودہ دوا اور نگہداشت کی معلومات کو سمجھنے کے لیے جاپانی طبی تحقیق کی منتخب پیش رفت قابل تصدیق ذرائع کے ساتھ پیش کی جاتی ہے۔',
    medicineDb:'جاپانی ادویات کا حوالہ',medicineLead:'جاپانی پروڈکٹ نام، عمومی نام، اجازت رکھنے والے ادارے، طاقت، علاج کے شعبے اور بنیادی ماخذ کے مطابق منظم۔',
    why:'ادارتی اصول',health:'صحت اور غذائیت',healthLead:'صحت بخش غذاؤں اور سپلیمنٹس کو ادویات سے الگ رکھا جاتا ہے اور غذائی حیثیت، پیک سائز اور پروڈکٹ ذرائع واضح کیے جاتے ہیں۔',guides:'طبی رہنما',travel:'جاپان میں علاج',inquiry:'ادارہ جاتی دوا استفسار',rx:'نسخے کی دوا کا حوالہ',
    viewAll:'سب دیکھیں',read:'رہنما پڑھیں',details:'حوالہ دیکھیں',official:'سرکاری ماخذ',updated:'تصدیق شدہ',noBuy:'صرف حوالہ · آن لائن خریداری نہیں',
    rxNotice:'نسخے کی دوا کی معلومات صرف حوالہ کے لیے ہیں اور نسخہ، تشخیص یا علاج کی سفارش نہیں۔ موزونیت، استعمال اور رسائی کے لیے مجاز ماہرین اور متعلقہ طبی عمل ضروری ہیں۔',
    filters:{all:'تمام شعبے',cardio:'قلبی',oncology:'آنکولوجی',metabolic:'میٹابولک',neuro:'نیورولوجی',immune:'امیونولوجی',respiratory:'تنفسی'},
    travelFilter:'طبی ضرورت کے مطابق فلٹر',hospitalOfficial:'بین الاقوامی مریضوں کے لیے ہسپتال کی سرکاری معلومات',personal:'معلوماتی رابطہ',institution:'ادارے / فارمیسیاں / کمپنیاں',
    personalDesc:'TOKYO MEDI ذاتی طبی مشورہ، اپائنٹمنٹ، تشخیص، نسخہ یا علاج کی ہم آہنگی فراہم نہیں کرتا۔',institutionDesc:'صرف اداروں، فارمیسیوں اور کمپنیوں کے لیے۔ دوا، طاقت، مقدار، منزل اور عوامی لائسنس معلومات کے ساتھ استفسار تیار کریں۔',
    startPersonal:'جاپان میں علاج کی معلومات دیکھیں',startInstitution:'ادارہ جاتی استفسار بھیجیں',footer:'یہ سائٹ عمومی دوا اور صحت سے متعلق حوالہ معلومات فراہم کرتی ہے۔ یہ تشخیص، نسخہ یا انفرادی علاج کی ہدایت نہیں دیتی۔'
  }),
  ru:aiLocale({
    lang:'Русский',nav:{medicines:'Японские лекарства',health:'Здоровье и питание',guides:'Медицинские руководства',travel:'Лечение в Японии',sources:'Источники',about:'О проекте',inquiry:'Запрос для организаций'},
    heroKicker:'ЯПОНСКИЕ ЛЕКАРСТВА · ПЕРВИЧНЫЕ ИСТОЧНИКИ · ЛЕЧЕНИЕ В ЯПОНИИ',heroTitle:'Справочник по японским лекарствам и лечению в Японии',
    heroLead:'Японские торговые названия, МНН, держатели регистрационных удостоверений, дозировки и материалы PMDA по продуктам собраны вместе с официальной информацией больниц для иностранных пациентов. Рецептурные препараты требуют оценки лицензированного специалиста и соответствующего клинического процесса.',
    searchPlaceholder:'Поиск лекарства / вещества / японского или английского названия',search:'Искать в базе',routeTitle:'Основные разделы',
    routeItems:[['medicines','Справочник лекарств','Поиск по продукту, МНН, производителю или области терапии'],['health','Здоровье и питание','Японские продукты для здоровья, добавки и сведения о продукции'],['guides','Медицинские руководства','Информация о лекарствах и системе здравоохранения Японии'],['travel','Лечение в Японии','Официальные условия приема и информация для зарубежных пациентов'],['inquiry','Запрос для организаций','Запросы о лекарствах для организаций, аптек и компаний']],
    strength:'Медицинские исследования и помощь в Японии',strengthLead:'Избранные достижения японских медицинских исследований приведены с проверяемыми источниками как контекст к актуальной информации о лекарствах и лечении.',
    medicineDb:'Справочник японских лекарств',medicineLead:'Организован по японскому названию, МНН, держателю регистрации, дозировке, области терапии и первичному источнику.',
    why:'Редакционные принципы',health:'Здоровье и питание',healthLead:'Продукты для здоровья и добавки отделены от лекарств; четко указываются их пищевой статус, упаковка и источники.',guides:'Медицинские руководства',travel:'Лечение в Японии',inquiry:'Запрос о лекарствах для организаций',rx:'Справочник рецептурных лекарств',
    viewAll:'Показать все',read:'Читать руководство',details:'Открыть справку',official:'Официальный источник',updated:'Проверено',noBuy:'Только справка · без онлайн-продаж',
    rxNotice:'Информация о рецептурных препаратах предназначена только для справки и не является назначением, диагнозом или рекомендацией лечения. Пригодность, применение и доступ должны определяться лицензированными специалистами в рамках соответствующего клинического процесса.',
    filters:{all:'Все области',cardio:'Кардиология',oncology:'Онкология',metabolic:'Метаболические',neuro:'Неврология',immune:'Иммунология',respiratory:'Респираторные'},
    travelFilter:'Фильтр по медицинской потребности',hospitalOfficial:'Официальная информация больницы для иностранных пациентов',personal:'Информационный контакт',institution:'Организации / аптеки / компании',
    personalDesc:'TOKYO MEDI не предоставляет персональные медицинские консультации, запись на прием, диагностику, рецепты или координацию лечения.',institutionDesc:'Только для организаций, аптек и компаний. Сформируйте запрос с препаратом, дозировкой, количеством, назначением и общедоступными регистрационными данными.',
    startPersonal:'Информация о лечении в Японии',startInstitution:'Отправить запрос организации',footer:'Сайт предоставляет общую справочную информацию о лекарствах и здравоохранении. Он не предоставляет диагностику, рецепты или индивидуальные рекомендации по лечению.'
  }),
  de:aiLocale({
    lang:'Deutsch',nav:{medicines:'Japanische Arzneimittel',health:'Gesundheit & Ernährung',guides:'Medizinische Leitfäden',travel:'Behandlung in Japan',sources:'Quellen',about:'Über uns',inquiry:'Institutionelle Anfrage'},
    heroKicker:'JAPANISCHE ARZNEIMITTEL · PRIMÄRQUELLEN · BEHANDLUNG IN JAPAN',heroTitle:'Referenz zu japanischen Arzneimitteln und Behandlung in Japan',
    heroLead:'Japanische Produktnamen, Wirkstoffnamen, Zulassungsinhaber, Stärken und PMDA-Produktquellen werden zusammen mit offiziellen Aufnahmeinformationen japanischer Krankenhäuser für internationale Patienten geordnet. Verschreibungspflichtige Arzneimittel erfordern eine ärztliche Beurteilung und den passenden Versorgungsprozess.',
    searchPlaceholder:'Arzneimittel / Wirkstoff / japanischen oder englischen Namen suchen',search:'Datenbank durchsuchen',routeTitle:'Hauptbereiche',
    routeItems:[['medicines','Arzneimittel-Referenz','Nach Produkt, Wirkstoff, Hersteller oder Therapiegebiet suchen'],['health','Gesundheit & Ernährung','Japanische Gesundheitslebensmittel, Nahrungsergänzung und Produktinformationen'],['guides','Medizinische Leitfäden','Arzneimittelinformationen und das japanische Gesundheitssystem verstehen'],['travel','Behandlung in Japan','Offizielle Aufnahmebedingungen und Informationen für internationale Patienten'],['inquiry','Institutionelle Anfrage','Arzneimittelanfragen für Einrichtungen, Apotheken und Unternehmen']],
    strength:'Medizinische Forschung und Versorgung in Japan',strengthLead:'Ausgewählte Entwicklungen der japanischen Medizinforschung werden mit überprüfbaren Quellen als Hintergrund für aktuelle Arzneimittel- und Versorgungsinformationen dargestellt.',
    medicineDb:'Referenz japanischer Arzneimittel',medicineLead:'Nach japanischem Produktnamen, Wirkstoff, Zulassungsinhaber, Stärke, Therapiegebiet und Primärquelle geordnet.',
    why:'Redaktionelle Grundsätze',health:'Gesundheit & Ernährung',healthLead:'Gesundheitslebensmittel und Nahrungsergänzungsmittel werden von Arzneimitteln getrennt und mit Lebensmittelstatus, Packungsgröße und Quellen gekennzeichnet.',guides:'Medizinische Leitfäden',travel:'Behandlung in Japan',inquiry:'Institutionelle Arzneimittelanfrage',rx:'Referenz verschreibungspflichtiger Arzneimittel',
    viewAll:'Alle anzeigen',read:'Leitfaden lesen',details:'Referenz öffnen',official:'Offizielle Quelle',updated:'Geprüft',noBuy:'Nur Referenz · kein Onlinekauf',
    rxNotice:'Informationen zu verschreibungspflichtigen Arzneimitteln dienen nur als Referenz und sind keine Verordnung, Diagnose oder Therapieempfehlung. Eignung, Anwendung und Zugang erfordern zugelassene Fachpersonen und den entsprechenden klinischen Prozess.',
    filters:{all:'Alle Bereiche',cardio:'Kardiovaskulär',oncology:'Onkologie',metabolic:'Stoffwechsel',neuro:'Neurologie',immune:'Immunologie',respiratory:'Atemwege'},
    travelFilter:'Nach medizinischem Bedarf filtern',hospitalOfficial:'Offizielle Krankenhausinformationen für internationale Patienten',personal:'Informationskontakt',institution:'Einrichtungen / Apotheken / Unternehmen',
    personalDesc:'TOKYO MEDI bietet keine persönliche medizinische Beratung, Terminvereinbarung, Diagnose, Verschreibung oder Behandlungskoordination.',institutionDesc:'Nur für Einrichtungen, Apotheken und Unternehmen. Erstellen Sie eine Anfrage mit Arzneimittel, Stärke, Menge, Ziel und öffentlich zugänglichen Zulassungsangaben.',
    startPersonal:'Informationen zur Behandlung in Japan',startInstitution:'Institutionelle Anfrage senden',footer:'Diese Website bietet allgemeine Referenzinformationen zu Arzneimitteln und Gesundheit. Sie bietet keine Diagnose, Verschreibung oder individuelle Therapieempfehlung.'
  }),
  pcm:aiLocale({
    lang:'Nigerian Pidgin',nav:{medicines:'Japan Medicine',health:'Health & Nutrition',guides:'Medical Guide',travel:'Treatment for Japan',sources:'Sources',about:'About',inquiry:'Organisation Enquiry'},
    heroKicker:'JAPAN MEDICINE · ORIGINAL SOURCES · CARE FOR JAPAN',heroTitle:'Japan medicine reference and information about treatment for Japan',
    heroLead:'We arrange Japan product names, generic names, marketing-authorisation holders, strengths and PMDA product sources together with official hospital information for international patients. Prescription medicine need assessment from licensed health professional and the correct medical process.',
    searchPlaceholder:'Search medicine / ingredient / Japan or English name',search:'Search database',routeTitle:'Main sections',
    routeItems:[['medicines','Medicine reference','Search by product, generic name, manufacturer or treatment area'],['health','Health & nutrition','Japan health foods, supplements and product information'],['guides','Medical guide','Understand medicine information and Japan healthcare system'],['travel','Treatment for Japan','Check official hospital intake and overseas-patient information'],['inquiry','Organisation enquiry','Medicine enquiry for institutions, pharmacies and companies']],
    strength:'Medical research and care for Japan',strengthLead:'We show selected developments for Japan medical research with sources wey person fit verify, as background for current medicine and care information.',
    medicineDb:'Japan medicine reference',medicineLead:'Arrange by Japan product name, generic name, licence holder, strength, treatment area and primary source.',
    why:'Editorial principles',health:'Health & nutrition',healthLead:'Health foods and supplements dey separate from medicine and we clearly mark food status, pack size and product sources.',guides:'Medical guide',travel:'Treatment for Japan',inquiry:'Organisation medicine enquiry',rx:'Prescription medicine reference',
    viewAll:'See all',read:'Read guide',details:'See reference',official:'Official source',updated:'Verified',noBuy:'Reference only · no online purchase',
    rxNotice:'Prescription-medicine information na for reference only; e no be prescription, diagnosis or treatment recommendation. Whether e fit person, how to use am and how to get am must pass licensed professionals and the proper medical process.',
    filters:{all:'All areas',cardio:'Heart & blood vessels',oncology:'Cancer care',metabolic:'Metabolic',neuro:'Neurology',immune:'Immunology',respiratory:'Breathing'},
    travelFilter:'Filter by medical need',hospitalOfficial:'Hospital official information for international patients',personal:'Information contact',institution:'Institutions / pharmacies / companies',
    personalDesc:'TOKYO MEDI no dey give personal medical consultation, appointment, diagnosis, prescription or care coordination.',institutionDesc:'Na only for institutions, pharmacies and companies. Prepare product enquiry with medicine, strength, quantity, destination and public licence information.',
    startPersonal:'See treatment information for Japan',startInstitution:'Send organisation enquiry',footer:'This site dey provide general medicine and healthcare reference information. E no dey give diagnosis, prescription or personal treatment advice.'
  }),
  mr:aiLocale({
    lang:'मराठी',nav:{medicines:'जपानी औषधे',health:'आरोग्य व पोषण',guides:'वैद्यकीय मार्गदर्शक',travel:'जपानमधील उपचार',sources:'स्रोत',about:'माहिती',inquiry:'संस्थात्मक चौकशी'},
    heroKicker:'जपानी औषधे · प्राथमिक स्रोत · जपानमधील उपचार',heroTitle:'जपानी औषधांचा संदर्भ आणि जपानमधील उपचार माहिती',
    heroLead:'जपानी उत्पादन नावे, जेनेरिक नावे, विपणन परवानाधारक, ताकद आणि PMDA चे उत्पादन-स्तरीय स्रोत आंतरराष्ट्रीय रुग्णांसाठी रुग्णालयांच्या अधिकृत प्रवेश माहितीसह मांडले आहेत. प्रिस्क्रिप्शन औषधांसाठी परवानाधारक वैद्यकीय व्यावसायिकाचे मूल्यमापन आणि योग्य उपचार प्रक्रिया आवश्यक आहे.',
    searchPlaceholder:'औषध / घटक / जपानी किंवा इंग्रजी नाव शोधा',search:'डेटाबेस शोधा',routeTitle:'मुख्य विभाग',
    routeItems:[['medicines','औषध संदर्भ','उत्पादन, जेनेरिक, उत्पादक किंवा उपचार क्षेत्रानुसार शोधा'],['health','आरोग्य व पोषण','जपानी आरोग्य अन्न, पूरक आणि उत्पादन माहिती'],['guides','वैद्यकीय मार्गदर्शक','औषध माहिती आणि जपानी आरोग्यव्यवस्था समजून घ्या'],['travel','जपानमधील उपचार','रुग्णालयाची अधिकृत प्रवेश व परदेशी रुग्ण माहिती पहा'],['inquiry','संस्थात्मक चौकशी','संस्था, फार्मसी आणि कंपन्यांसाठी औषध चौकशी']],
    strength:'जपानमधील वैद्यकीय संशोधन व सेवा',strengthLead:'सध्याच्या औषध व उपचार माहितीचा संदर्भ समजण्यासाठी जपानी वैद्यकीय संशोधनातील निवडक प्रगती पडताळता येणाऱ्या स्रोतांसह दिली आहे.',
    medicineDb:'जपानी औषध संदर्भ',medicineLead:'जपानी उत्पादन नाव, जेनेरिक, परवानाधारक, ताकद, उपचार क्षेत्र आणि प्राथमिक स्रोत यानुसार मांडणी.',
    why:'संपादकीय तत्त्वे',health:'आरोग्य व पोषण',healthLead:'आरोग्य अन्न आणि पूरक औषधांपासून वेगळे ठेवले जातात व अन्न म्हणून स्थिती, पॅक आकार आणि स्रोत स्पष्ट दिले जातात.',guides:'वैद्यकीय मार्गदर्शक',travel:'जपानमधील उपचार',inquiry:'संस्थात्मक औषध चौकशी',rx:'प्रिस्क्रिप्शन औषध संदर्भ',
    viewAll:'सर्व पहा',read:'मार्गदर्शक वाचा',details:'संदर्भ पहा',official:'अधिकृत स्रोत',updated:'पडताळले',noBuy:'फक्त संदर्भ · ऑनलाइन खरेदी नाही',
    rxNotice:'प्रिस्क्रिप्शन औषधांची माहिती फक्त संदर्भासाठी आहे; ती प्रिस्क्रिप्शन, निदान किंवा उपचार शिफारस नाही. योग्यता, वापर आणि उपलब्धता परवानाधारक व्यावसायिक व संबंधित वैद्यकीय प्रक्रियेद्वारे ठरवली पाहिजे.',
    filters:{all:'सर्व क्षेत्रे',cardio:'हृदय व रक्तवाहिन्या',oncology:'कर्करोग',metabolic:'चयापचय',neuro:'न्यूरोलॉजी',immune:'इम्युनोलॉजी',respiratory:'श्वसन'},
    travelFilter:'वैद्यकीय गरजेनुसार फिल्टर',hospitalOfficial:'आंतरराष्ट्रीय रुग्णांसाठी रुग्णालयाची अधिकृत माहिती',personal:'माहिती संपर्क',institution:'संस्था / फार्मसी / कंपन्या',
    personalDesc:'TOKYO MEDI वैयक्तिक वैद्यकीय सल्ला, अपॉइंटमेंट, निदान, प्रिस्क्रिप्शन किंवा उपचार समन्वय देत नाही.',institutionDesc:'फक्त संस्था, फार्मसी आणि कंपन्यांसाठी. औषध, ताकद, प्रमाण, गंतव्य आणि सार्वजनिक परवाना माहिती असलेली चौकशी तयार करा.',
    startPersonal:'जपानमधील उपचार माहिती पहा',startInstitution:'संस्थात्मक चौकशी पाठवा',footer:'ही साइट सामान्य औषध व आरोग्य संदर्भ माहिती देते. निदान, प्रिस्क्रिप्शन किंवा वैयक्तिक उपचार सल्ला देत नाही.'
  }),
  vi:aiLocale({
    lang:'Tiếng Việt',nav:{medicines:'Thuốc Nhật Bản',health:'Sức khỏe & dinh dưỡng',guides:'Hướng dẫn y tế',travel:'Khám chữa bệnh tại Nhật',sources:'Nguồn',about:'Giới thiệu',inquiry:'Yêu cầu tổ chức'},
    heroKicker:'THUỐC NHẬT · NGUỒN SƠ CẤP · CHĂM SÓC TẠI NHẬT',heroTitle:'Tài liệu tham khảo thuốc Nhật và thông tin khám chữa bệnh tại Nhật',
    heroLead:'Tên sản phẩm Nhật, tên gốc, đơn vị giữ giấy phép lưu hành, hàm lượng và nguồn PMDA cấp sản phẩm được sắp xếp cùng thông tin tiếp nhận chính thức của bệnh viện dành cho bệnh nhân quốc tế. Thuốc kê đơn cần được nhân viên y tế có giấy phép đánh giá và thực hiện đúng quy trình chăm sóc.',
    searchPlaceholder:'Tìm thuốc / hoạt chất / tên tiếng Nhật hoặc tiếng Anh',search:'Tìm cơ sở dữ liệu',routeTitle:'Các mục chính',
    routeItems:[['medicines','Tham khảo thuốc','Tìm theo sản phẩm, hoạt chất, nhà sản xuất hoặc lĩnh vực điều trị'],['health','Sức khỏe & dinh dưỡng','Thực phẩm sức khỏe, thực phẩm bổ sung và thông tin sản phẩm Nhật'],['guides','Hướng dẫn y tế','Hiểu thông tin thuốc và hệ thống y tế Nhật Bản'],['travel','Khám chữa bệnh tại Nhật','Xem thông tin tiếp nhận chính thức và bệnh nhân quốc tế'],['inquiry','Yêu cầu tổ chức','Yêu cầu thuốc dành cho cơ sở, nhà thuốc và doanh nghiệp']],
    strength:'Nghiên cứu y khoa và chăm sóc tại Nhật',strengthLead:'Các tiến bộ chọn lọc trong nghiên cứu y khoa Nhật Bản được trình bày cùng nguồn có thể kiểm chứng để làm bối cảnh cho thông tin thuốc và chăm sóc hiện hành.',
    medicineDb:'Tham khảo thuốc Nhật Bản',medicineLead:'Sắp xếp theo tên sản phẩm Nhật, tên gốc, đơn vị giữ giấy phép, hàm lượng, lĩnh vực điều trị và nguồn sơ cấp.',
    why:'Nguyên tắc biên tập',health:'Sức khỏe & dinh dưỡng',healthLead:'Thực phẩm sức khỏe và thực phẩm bổ sung được tách khỏi thuốc, ghi rõ phân loại thực phẩm, quy cách đóng gói và nguồn sản phẩm.',guides:'Hướng dẫn y tế',travel:'Khám chữa bệnh tại Nhật',inquiry:'Yêu cầu thuốc cho tổ chức',rx:'Tham khảo thuốc kê đơn',
    viewAll:'Xem tất cả',read:'Đọc hướng dẫn',details:'Xem tham khảo',official:'Nguồn chính thức',updated:'Đã xác minh',noBuy:'Chỉ tham khảo · không bán trực tuyến',
    rxNotice:'Thông tin thuốc kê đơn chỉ nhằm mục đích tham khảo, không phải đơn thuốc, chẩn đoán hay khuyến nghị điều trị. Tính phù hợp, cách sử dụng và khả năng tiếp cận phải do chuyên gia có giấy phép và quy trình lâm sàng liên quan quyết định.',
    filters:{all:'Tất cả lĩnh vực',cardio:'Tim mạch',oncology:'Ung thư',metabolic:'Chuyển hóa',neuro:'Thần kinh',immune:'Miễn dịch',respiratory:'Hô hấp'},
    travelFilter:'Lọc theo nhu cầu y tế',hospitalOfficial:'Thông tin chính thức của bệnh viện cho bệnh nhân quốc tế',personal:'Liên hệ thông tin',institution:'Cơ sở / nhà thuốc / doanh nghiệp',
    personalDesc:'TOKYO MEDI không cung cấp tư vấn y tế cá nhân, đặt lịch, chẩn đoán, kê đơn hoặc điều phối điều trị.',institutionDesc:'Chỉ dành cho cơ sở, nhà thuốc và doanh nghiệp. Chuẩn bị yêu cầu gồm thuốc, hàm lượng, số lượng, nơi đến và thông tin giấy phép công khai.',
    startPersonal:'Xem thông tin khám chữa bệnh tại Nhật',startInstitution:'Gửi yêu cầu tổ chức',footer:'Trang này cung cấp thông tin tham khảo chung về thuốc và y tế. Không cung cấp chẩn đoán, kê đơn hoặc lời khuyên điều trị cá nhân.'
  }),
  te:aiLocale({
    lang:'తెలుగు',nav:{medicines:'జపాన్ ఔషధాలు',health:'ఆరోగ్యం & పోషణ',guides:'వైద్య మార్గదర్శకాలు',travel:'జపాన్‌లో చికిత్స',sources:'మూలాలు',about:'గురించి',inquiry:'సంస్థాగత విచారణ'},
    heroKicker:'జపాన్ ఔషధాలు · ప్రాథమిక మూలాలు · జపాన్‌లో చికిత్స',heroTitle:'జపాన్ ఔషధ సూచన మరియు జపాన్‌లో వైద్య సేవల సమాచారం',
    heroLead:'జపాన్ ఉత్పత్తి పేర్లు, జనరిక్ పేర్లు, మార్కెటింగ్ అనుమతి దారులు, శక్తులు మరియు PMDA ఉత్పత్తి-స్థాయి మూలాలను అంతర్జాతీయ రోగుల కోసం ఆసుపత్రుల అధికారిక స్వీకరణ సమాచారంతో సమీకరించాం. ప్రిస్క్రిప్షన్ ఔషధాలకు లైసెన్స్డ్ వైద్య నిపుణుడి అంచనా మరియు సరైన వైద్య ప్రక్రియ అవసరం.',
    searchPlaceholder:'ఔషధం / పదార్థం / జపాన్ లేదా ఇంగ్లీష్ పేరు వెతకండి',search:'డేటాబేస్ వెతకండి',routeTitle:'ప్రధాన విభాగాలు',
    routeItems:[['medicines','ఔషధ సూచన','ఉత్పత్తి, జనరిక్, తయారీదారు లేదా చికిత్సా రంగం ద్వారా వెతకండి'],['health','ఆరోగ్యం & పోషణ','జపాన్ ఆరోగ్య ఆహారాలు, సప్లిమెంట్లు మరియు ఉత్పత్తి సమాచారం'],['guides','వైద్య మార్గదర్శకాలు','ఔషధ సమాచారం మరియు జపాన్ ఆరోగ్య వ్యవస్థను అర్థం చేసుకోండి'],['travel','జపాన్‌లో చికిత్స','ఆసుపత్రి అధికారిక స్వీకరణ మరియు విదేశీ రోగుల సమాచారం చూడండి'],['inquiry','సంస్థాగత విచారణ','సంస్థలు, ఫార్మసీలు, కంపెనీల ఔషధ విచారణలు']],
    strength:'జపాన్‌లో వైద్య పరిశోధన మరియు సేవ',strengthLead:'ప్రస్తుత ఔషధ మరియు వైద్య సమాచారం అర్థం చేసుకోవడానికి జపాన్ వైద్య పరిశోధనలోని ఎంపిక చేసిన పురోగతులను ధృవీకరించగల మూలాలతో చూపిస్తాము.',
    medicineDb:'జపాన్ ఔషధ సూచన',medicineLead:'జపాన్ ఉత్పత్తి పేరు, జనరిక్, అనుమతి దారు, శక్తి, చికిత్సా రంగం మరియు ప్రాథమిక మూలం ఆధారంగా ఏర్పాటు.',
    why:'సంపాదకీయ సూత్రాలు',health:'ఆరోగ్యం & పోషణ',healthLead:'ఆరోగ్య ఆహారాలు మరియు సప్లిమెంట్లు ఔషధాల నుండి వేరు చేసి, ఆహార స్థితి, ప్యాక్ పరిమాణం మరియు ఉత్పత్తి మూలాలను స్పష్టంగా చూపిస్తాము.',guides:'వైద్య మార్గదర్శకాలు',travel:'జపాన్‌లో చికిత్స',inquiry:'సంస్థాగత ఔషధ విచారణ',rx:'ప్రిస్క్రిప్షన్ ఔషధ సూచన',
    viewAll:'అన్నీ చూడండి',read:'మార్గదర్శకం చదవండి',details:'సూచన చూడండి',official:'అధికారిక మూలం',updated:'ధృవీకరించబడింది',noBuy:'సూచన మాత్రమే · ఆన్‌లైన్ కొనుగోలు లేదు',
    rxNotice:'ప్రిస్క్రిప్షన్ ఔషధ సమాచారం సూచన కోసం మాత్రమే; ఇది ప్రిస్క్రిప్షన్, నిర్ధారణ లేదా చికిత్స సిఫార్సు కాదు. అనుకూలత, వినియోగం మరియు ప్రాప్యత లైసెన్స్డ్ నిపుణులు మరియు సంబంధిత క్లినికల్ ప్రక్రియ ద్వారా నిర్ణయించాలి.',
    filters:{all:'అన్ని రంగాలు',cardio:'హృదయ-రక్తనాళ',oncology:'ఆంకాలజీ',metabolic:'మెటబాలిక్',neuro:'న్యూరాలజీ',immune:'ఇమ్యునాలజీ',respiratory:'శ్వాసకోశ'},
    travelFilter:'వైద్య అవసరానుసారం ఫిల్టర్',hospitalOfficial:'అంతర్జాతీయ రోగుల కోసం ఆసుపత్రి అధికారిక సమాచారం',personal:'సమాచార సంప్రదింపు',institution:'సంస్థలు / ఫార్మసీలు / కంపెనీలు',
    personalDesc:'TOKYO MEDI వ్యక్తిగత వైద్య సలహా, అపాయింట్‌మెంట్, నిర్ధారణ, ప్రిస్క్రిప్షన్ లేదా చికిత్స సమన్వయం అందించదు.',institutionDesc:'సంస్థలు, ఫార్మసీలు మరియు కంపెనీలకు మాత్రమే. ఔషధం, శక్తి, పరిమాణం, గమ్యం మరియు పబ్లిక్ లైసెన్స్ సమాచారంతో విచారణ సిద్ధం చేయండి.',
    startPersonal:'జపాన్ చికిత్స సమాచారం చూడండి',startInstitution:'సంస్థాగత విచారణ పంపండి',footer:'ఈ సైట్ సాధారణ ఔషధ మరియు ఆరోగ్య సూచన సమాచారం అందిస్తుంది. నిర్ధారణ, ప్రిస్క్రిప్షన్ లేదా వ్యక్తిగత చికిత్స సలహా ఇవ్వదు.'
  }),
  sw:aiLocale({
    lang:'Kiswahili',nav:{medicines:'Dawa za Japani',health:'Afya na lishe',guides:'Miongozo ya tiba',travel:'Matibabu Japani',sources:'Vyanzo',about:'Kuhusu',inquiry:'Ulizo la taasisi'},
    heroKicker:'DAWA ZA JAPANI · VYANZO VYA MSINGI · HUDUMA JAPANI',heroTitle:'Rejea ya dawa za Japani na taarifa za matibabu nchini Japani',
    heroLead:'Majina ya bidhaa za Japani, majina ya jumla, wamiliki wa idhini ya uuzaji, nguvu na vyanzo vya PMDA kwa kila bidhaa vinaandaliwa pamoja na taarifa rasmi za hospitali kwa wagonjwa wa kimataifa. Dawa za kuandikiwa zinahitaji tathmini ya mtaalamu mwenye leseni na mchakato sahihi wa huduma.',
    searchPlaceholder:'Tafuta dawa / kiungo / jina la Kijapani au Kiingereza',search:'Tafuta hifadhidata',routeTitle:'Sehemu kuu',
    routeItems:[['medicines','Rejea ya dawa','Tafuta kwa bidhaa, jina la jumla, mtengenezaji au eneo la tiba'],['health','Afya na lishe','Vyakula vya afya, virutubisho na taarifa za bidhaa za Japani'],['guides','Miongozo ya tiba','Elewa taarifa za dawa na mfumo wa afya wa Japani'],['travel','Matibabu Japani','Angalia taarifa rasmi za mapokezi ya hospitali na wagonjwa wa kimataifa'],['inquiry','Ulizo la taasisi','Maswali ya dawa kwa taasisi, maduka ya dawa na kampuni']],
    strength:'Utafiti wa tiba na huduma Japani',strengthLead:'Maendeleo teule ya utafiti wa tiba wa Japani yanaonyeshwa pamoja na vyanzo vinavyoweza kuthibitishwa kama muktadha wa taarifa za sasa za dawa na huduma.',
    medicineDb:'Rejea ya dawa za Japani',medicineLead:'Imepangwa kwa jina la bidhaa la Japani, jina la jumla, mwenye idhini, nguvu, eneo la tiba na chanzo cha msingi.',
    why:'Kanuni za uhariri',health:'Afya na lishe',healthLead:'Vyakula vya afya na virutubisho vinatenganishwa na dawa na kuonyeshwa wazi hali ya chakula, ukubwa wa kifurushi na vyanzo.',guides:'Miongozo ya tiba',travel:'Matibabu Japani',inquiry:'Ulizo la dawa la taasisi',rx:'Rejea ya dawa za kuandikiwa',
    viewAll:'Tazama zote',read:'Soma mwongozo',details:'Tazama rejea',official:'Chanzo rasmi',updated:'Imethibitishwa',noBuy:'Rejea tu · hakuna ununuzi mtandaoni',
    rxNotice:'Taarifa za dawa za kuandikiwa ni za rejea tu na si agizo la dawa, utambuzi au pendekezo la matibabu. Ufaafu, matumizi na upatikanaji vinahitaji wataalamu wenye leseni na mchakato husika wa kliniki.',
    filters:{all:'Maeneo yote',cardio:'Moyo na mishipa',oncology:'Onkolojia',metabolic:'Metaboli',neuro:'Neurolojia',immune:'Imunolojia',respiratory:'Mfumo wa hewa'},
    travelFilter:'Chuja kwa hitaji la matibabu',hospitalOfficial:'Taarifa rasmi za hospitali kwa wagonjwa wa kimataifa',personal:'Mawasiliano ya taarifa',institution:'Taasisi / maduka ya dawa / kampuni',
    personalDesc:'TOKYO MEDI haitoi ushauri wa binafsi wa matibabu, miadi, utambuzi, maagizo ya dawa au uratibu wa huduma.',institutionDesc:'Kwa taasisi, maduka ya dawa na kampuni pekee. Andaa ulizo lenye dawa, nguvu, kiasi, mahali pa kupelekwa na taarifa ya leseni iliyo wazi.',
    startPersonal:'Tazama taarifa za matibabu Japani',startInstitution:'Tuma ulizo la taasisi',footer:'Tovuti hii hutoa taarifa za jumla za rejea kuhusu dawa na afya. Haitoi utambuzi, maagizo ya dawa au ushauri wa matibabu wa mtu binafsi.'
  }),
  ha:aiLocale({
    lang:'Hausa',nav:{medicines:'Magungunan Japan',health:'Lafiya da abinci',guides:'Jagororin lafiya',travel:'Jinya a Japan',sources:'Tushe',about:'Game da mu',inquiry:'Tambayar hukuma'},
    heroKicker:'MAGUNGUNAN JAPAN · TUSHE NA FARKO · JINYA A JAPAN',heroTitle:'Bayanin magungunan Japan da jinya a Japan',
    heroLead:'An tsara sunayen kayayyakin Japan, sunayen sinadaran magani, masu lasisin kasuwanci, ƙarfi da bayanan PMDA tare da bayanan asibitoci na hukuma ga marasa lafiya daga ƙasashen waje. Maganin takardar likita yana buƙatar tantancewar ƙwararren ma’aikacin lafiya mai lasisi da tsarin jinya da ya dace.',
    searchPlaceholder:'Nemo magani / sinadari / sunan Japan ko Turanci',search:'Nemo a bayanai',routeTitle:'Manyan sassa',
    routeItems:[['medicines','Bayanan magani','Nemo ta samfur, sunan gama-gari, masana’anta ko fannin jinya'],['health','Lafiya da abinci','Abincin lafiya, kari da bayanan kayayyakin Japan'],['guides','Jagororin lafiya','Fahimci bayanan magani da tsarin lafiya na Japan'],['travel','Jinya a Japan','Duba bayanan karɓar marasa lafiya na asibiti da bayanan ƙasashen waje'],['inquiry','Tambayar hukuma','Tambayoyin magani ga cibiyoyi, kantunan magani da kamfanoni']],
    strength:'Binciken lafiya da jinya a Japan',strengthLead:'Ana nuna zaɓaɓɓun ci gaban binciken lafiya na Japan tare da tushe da za a iya tabbatarwa domin fahimtar bayanan magani da jinya na yanzu.',
    medicineDb:'Bayanan magungunan Japan',medicineLead:'An tsara su bisa sunan samfur na Japan, sunan gama-gari, mai lasisi, ƙarfi, fannin jinya da tushe na farko.',
    why:'Ka’idojin edita',health:'Lafiya da abinci',healthLead:'Ana ware abincin lafiya da kari daga magunguna kuma a bayyana matsayin abinci, girman kunshi da tushen samfur.',guides:'Jagororin lafiya',travel:'Jinya a Japan',inquiry:'Tambayar magani ta hukuma',rx:'Bayanan maganin takardar likita',
    viewAll:'Duba duka',read:'Karanta jagora',details:'Duba bayani',official:'Tushen hukuma',updated:'An tabbatar',noBuy:'Bayani kawai · babu saye ta intanet',
    rxNotice:'Bayanin maganin takardar likita na nuni ne kawai; ba takardar magani, ganewar cuta ko shawarar jinya ba ne. Dacewa, amfani da samun magani suna buƙatar ƙwararru masu lasisi da tsarin asibiti da ya dace.',
    filters:{all:'Duk fannoni',cardio:'Zuciya da jijiyoyi',oncology:'Ciwon daji',metabolic:'Metabolism',neuro:'Jijiyoyin kwakwalwa',immune:'Garkuwar jiki',respiratory:'Numfashi'},
    travelFilter:'Tace bisa bukatar lafiya',hospitalOfficial:'Bayanan asibiti na hukuma ga marasa lafiya na ƙasashen waje',personal:'Tuntuɓar bayani',institution:'Cibiyoyi / kantunan magani / kamfanoni',
    personalDesc:'TOKYO MEDI baya bayar da shawarwarin lafiya na mutum, alƙawari, ganewar cuta, rubuta magani ko tsara jinya.',institutionDesc:'Ga cibiyoyi, kantunan magani da kamfanoni kawai. Shirya tambaya da magani, ƙarfi, adadi, wurin zuwa da bayanin lasisi na jama’a.',
    startPersonal:'Duba bayanin jinya a Japan',startInstitution:'Aika tambayar hukuma',footer:'Wannan shafin yana ba da bayanan gaba ɗaya game da magunguna da lafiya. Ba ya bayar da ganewar cuta, takardar magani ko shawarar jinya ta mutum.'
  }),
  tr:aiLocale({
    lang:'Türkçe',nav:{medicines:'Japon ilaçları',health:'Sağlık ve beslenme',guides:'Tıbbi rehberler',travel:'Japonya’da tedavi',sources:'Kaynaklar',about:'Hakkında',inquiry:'Kurumsal sorgu'},
    heroKicker:'JAPON İLAÇLARI · BİRİNCİL KAYNAKLAR · JAPONYA’DA BAKIM',heroTitle:'Japon ilaçları ve Japonya’da tedavi için referans bilgileri',
    heroLead:'Japon ürün adları, jenerik adlar, ruhsat sahipleri, dozlar ve PMDA ürün düzeyi kaynakları, uluslararası hastalar için hastanelerin resmi kabul bilgileriyle birlikte düzenlenir. Reçeteli ilaçlar lisanslı sağlık profesyoneli değerlendirmesi ve uygun klinik süreci gerektirir.',
    searchPlaceholder:'İlaç / etken madde / Japonca veya İngilizce ad ara',search:'Veritabanında ara',routeTitle:'Ana bölümler',
    routeItems:[['medicines','İlaç referansı','Ürün, jenerik, üretici veya tedavi alanına göre arayın'],['health','Sağlık ve beslenme','Japon sağlık gıdaları, takviyeler ve ürün bilgileri'],['guides','Tıbbi rehberler','İlaç bilgilerini ve Japon sağlık sistemini anlayın'],['travel','Japonya’da tedavi','Hastanelerin resmi kabul ve uluslararası hasta bilgilerini kontrol edin'],['inquiry','Kurumsal sorgu','Kurumlar, eczaneler ve şirketler için ilaç sorguları']],
    strength:'Japonya’da tıbbi araştırma ve bakım',strengthLead:'Japon tıp araştırmalarındaki seçilmiş gelişmeler, güncel ilaç ve bakım bilgilerini anlamak için doğrulanabilir kaynaklarla sunulur.',
    medicineDb:'Japon ilaç referansı',medicineLead:'Japon ürün adı, jenerik ad, ruhsat sahibi, doz, tedavi alanı ve birincil kaynağa göre düzenlenir.',
    why:'Editoryal ilkeler',health:'Sağlık ve beslenme',healthLead:'Sağlık gıdaları ve takviyeler ilaçlardan ayrı tutulur; gıda statüsü, paket boyutu ve ürün kaynakları açıkça belirtilir.',guides:'Tıbbi rehberler',travel:'Japonya’da tedavi',inquiry:'Kurumsal ilaç sorgusu',rx:'Reçeteli ilaç referansı',
    viewAll:'Tümünü gör',read:'Rehberi oku',details:'Referansı gör',official:'Resmi kaynak',updated:'Doğrulandı',noBuy:'Yalnızca referans · çevrimiçi satış yok',
    rxNotice:'Reçeteli ilaç bilgileri yalnızca referans amaçlıdır; reçete, tanı veya tedavi önerisi değildir. Uygunluk, kullanım ve erişim lisanslı profesyoneller ve ilgili klinik süreç tarafından belirlenmelidir.',
    filters:{all:'Tüm alanlar',cardio:'Kardiyovasküler',oncology:'Onkoloji',metabolic:'Metabolik',neuro:'Nöroloji',immune:'İmmünoloji',respiratory:'Solunum'},
    travelFilter:'Tıbbi ihtiyaca göre filtrele',hospitalOfficial:'Uluslararası hastalar için resmi hastane bilgisi',personal:'Bilgi iletişimi',institution:'Kurumlar / eczaneler / şirketler',
    personalDesc:'TOKYO MEDI kişisel tıbbi danışmanlık, randevu, tanı, reçete veya bakım koordinasyonu sağlamaz.',institutionDesc:'Yalnızca kurumlar, eczaneler ve şirketler içindir. İlaç, doz, miktar, varış yeri ve kamuya açık ruhsat bilgileriyle sorgu hazırlayın.',
    startPersonal:'Japonya’da tedavi bilgilerini gör',startInstitution:'Kurumsal sorgu gönder',footer:'Bu site ilaçlar ve sağlık hakkında genel referans bilgileri sağlar. Tanı, reçete veya kişiselleştirilmiş tedavi tavsiyesi vermez.'
  })
});

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

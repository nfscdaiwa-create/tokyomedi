import {SITE,EMAIL,UI} from './data.js';
import {esc,p,shell,jsonLd,breadcrumbLd,contentLang,whatsappLink} from './core.js';
const text=(l,zh,en,ja)=>l==='zh-hans'?zh:l==='ja'?ja:en;
export const legalTitle=(l,kind)=>kind==='privacy'?text(l,'隐私政策','Privacy policy','プライバシーポリシー'):text(l,'使用条款','Terms of use','利用規約');
const privacy={
 'zh-hans':[
  ['范围与联系','本政策说明 TOKYO MEDI 网站的浏览、资料查询与机构询价草稿功能如何处理信息。网站隐私事项请联系 '+EMAIL+'，注明涉及页面和请求内容。'],
  ['浏览与运行信息','浏览本站时，请求通过 Cloudflare 的托管、内容分发及安全服务处理；请求可能包含 IP 地址、请求网址、浏览器信息及技术日志。搜索词会作为网址参数发送到网站，应避免输入患者姓名、病历、证件号码或其他敏感内容。'],
  ['访问统计','正式站使用 Cloudflare Web Analytics 的浏览器统计脚本，用于访问及性能统计。根据 Cloudflare 的说明，这项统计不使用分析 Cookie，也不记录网址查询字符串。网站请求和安全日志属于另一类处理，不能将无分析 Cookie 理解为所有访问均无信息处理。'],
  ['询价表单与草稿','表单只在当前浏览器页面生成草稿，没有向本站服务器提交表单的接口，也不将草稿写入 Cookie 或浏览器持久存储。所填资料在刷新或离开页面后不由本站自动保存；点击复制会写入你的设备剪贴板，可能受设备和剪贴板同步设置影响。'],
  ['邮件及 WhatsApp','打开邮件客户端只会准备收件地址与正文；是否发送由你决定。主动发送后，收件人及相关邮件服务会处理消息和附件。打开 WhatsApp 后，其服务会处理你与联系人分享的信息。请仅发送必要的机构和品项信息，不发送患者资料、密码、证件扫描件或保密许可文件。'],
  ['目的、保存与请求','收到的机构询价或资料更正信息用于对应请求的沟通与处理。需要处理、更正或删除你主动发送的信息时，请通过上述邮箱提出，说明足以定位的消息和日期；勿在请求中附加不必要的敏感资料。邮件服务、设备副本及服务方日志适用其各自配置与政策。'],
  ['外部链接与服务','PMDA、DHC、其他厂家、医疗机构、百科及外部目录链接打开后，相关网站依据自己的政策处理访问。本站所标注的是资料来源，外部链接不等同于本站经营该网站。服务方的数据处理可能涉及其跨境服务网络；请查阅其政策。'],
  ['当前功能与更新','当前版本没有用户注册、在线支付或广告投放功能。若以后引入广告、账户或在线表单提交，会先更新本政策和相关页面，并在适用时提供相应设置。政策更新日期为 2026-10-05。']
 ],
 en:[
  ['Scope and contact','This policy covers browsing, reference searches and institutional inquiry drafts on TOKYO MEDI. Contact '+EMAIL+' about website privacy, identifying the page and your request.'],
  ['Browsing and technical information','Requests are processed through Cloudflare hosting, content delivery and security services and may include IP addresses, requested URLs, browser information and technical logs. Search terms are sent as URL parameters. Do not put patient names, records, identity numbers or other sensitive information in searches.'],
  ['Web analytics','The live site uses the Cloudflare Web Analytics browser beacon for traffic and performance statistics. Cloudflare states that this analytics service does not use analytics cookies or log URL query strings. Request and security logs are separate processing; cookie-free analytics does not mean that visits involve no information processing.'],
  ['Inquiry form and drafts','The form prepares a draft only in the current browser page. It has no endpoint that submits entered fields to this website’s server, and drafts are not written to cookies or persistent browser storage. The site does not automatically retain drafts after a reload or leaving the page. Copying writes the draft to your device clipboard, subject to your device and clipboard-sync settings.'],
  ['Email and WhatsApp','Opening your email app prepares a recipient and body; you decide whether to send. Once sent, the recipient and email services process messages and attachments. WhatsApp processes information you choose to share through its service. Send only necessary institution and item details; omit patient records, passwords, ID scans and confidential licence documents.'],
  ['Purpose, retention and requests','Institutional inquiries and corrections received are used to communicate about and handle the corresponding request. To request access, correction or deletion of information you sent, contact the email above with enough message and date details to locate it. Do not include unnecessary sensitive information. Email-service copies, device copies and provider logs follow their respective settings and policies.'],
  ['External links and providers','PMDA, DHC, other manufacturers, hospitals, encyclopedias and external catalog sites process visits under their own policies. A source link does not mean that TOKYO MEDI operates the linked site. Providers may process information across their international service networks; consult their policies.'],
  ['Current features and updates','This version has no user registration, online payment or advertising features. If accounts, advertising or server-submitted forms are introduced, this policy and the affected pages will be updated first, with relevant controls where applicable. Policy updated: 2026-10-05.']
 ],
 ja:[
  ['対象・お問い合わせ','本ポリシーはTOKYO MEDIの閲覧、資料検索、機関向け照会メール下書き機能を対象とします。プライバシーに関するお問い合わせは '+EMAIL+' へ、該当ページとご要望をお知らせください。'],
  ['閲覧・技術情報','リクエストはCloudflareのホスティング、配信、安全対策サービスを経由し、IPアドレス、URL、ブラウザー情報、技術ログ等を含む場合があります。検索語はURLパラメーターとして送信されます。患者氏名、診療記録、本人確認番号等の機微情報を検索欄に入力しないでください。'],
  ['アクセス解析','公開サイトはCloudflare Web Analyticsのブラウザースクリプトを使用し、アクセス・表示性能を集計します。Cloudflareは、この解析では分析Cookieを使用せず、URLのクエリー文字列を記録しないと説明しています。リクエスト・安全対策ログは別の処理であり、Cookieを使わないことは一切の情報処理がないことを意味しません。'],
  ['照会フォーム・下書き','フォームは現在のブラウザーページ内で下書きを作成します。入力を当サイトのサーバーに送信する窓口はなく、下書きをCookieやブラウザーの永続ストレージに保存しません。再読み込み・ページ移動後に当サイトが自動保存する機能もありません。コピーすると端末のクリップボードに書き込まれ、端末・同期設定の影響を受けます。'],
  ['メール・WhatsApp','メールアプリを開くと宛先・本文を準備しますが、送信は利用者が判断します。送信後は受信者・メールサービスが本文・添付を処理します。WhatsAppも利用者が共有した情報を処理します。必要な機関・品目情報のみを送り、患者情報、パスワード、身分証画像、機密の許可書類を送らないでください。'],
  ['目的・保存・ご要望','受信した機関照会や資料訂正の情報は、当該依頼の連絡・対応に使用します。送信した情報の確認、訂正、削除等は上記メールへ、特定できるメッセージ・日付を添えてご相談ください。不要な機微情報は含めないでください。メールサービス、端末のコピー、サービス提供者のログは各設定・ポリシーに従います。'],
  ['外部リンク・サービス','PMDA、DHC、製薬企業、医療機関、百科事典、外部カタログはそれぞれのポリシーでアクセスを処理します。出典リンクは当サイトがリンク先を運営していることを意味しません。サービス提供者の国際的なネットワークで処理される場合があります。各ポリシーをご確認ください。'],
  ['現在の機能・更新','現在は利用者登録、オンライン決済、広告配信の機能がありません。アカウント、広告、サーバー送信フォームを導入する際は、本ポリシーと対象ページを先に更新し、必要に応じて設定を提供します。更新日：2026-10-05。']
 ]
};
const terms={
 'zh-hans':[
  ['网站用途','TOKYO MEDI 提供日本医药品、健康产品、官方来源、医疗指南及赴日医疗入口的资料整理。它不是医疗机构、诊断系统、处方服务或个人购药平台。'],
  ['医学资料的使用','药品摘要指向对应日本品项的 PMDA 记录，健康产品资料按相应厂家与包装标示整理。适应症、剂量、禁忌、风险及产品状态以当前官方文书和医疗专业人员判断为准。不能用本站资料自行诊断、调整用药或替代急诊服务。'],
  ['核验与审阅范围','本站核验表示产品名称、规格、来源和公开资料的编辑比对；不等同于医师或药师对个人情况的审阅。没有明确列出具名审阅者时，不宣称该页面获得专业医学审阅。官方批准或厂家资料也不表示其认可或背书 TOKYO MEDI。'],
  ['机构询价','机构、药局及企业可整理品项询价邮件。表单生成草稿，不自动发送、不承诺报价、供货或交易。任何后续供应条件、资质审核和合同须由相关双方另行确认。本站不接受个人处方药购买请求。'],
  ['外部来源与图片','外部链接用于核对资料；其内容、服务及销售由相应网站负责。厂家名称与来源标注不表示授权代理、合作或联盟关系。图片、商标和第三方资料属于相应权利人；使用者应查阅照片注明的出处及许可，不应假定全部素材可自由转载。'],
  ['语言与版本','完整资料正文目前提供简体中文、日文和英文。其他语言入口提供翻译后的导航，正文以英语显示并明确标示。医学措辞或翻译存在差异时，请回到对应日本官方原文，并向专业人员核对。资料会随官方更新而变化。'],
  ['反馈与合理使用','发现资料错误，请提供页面网址、具体项目和官方来源联系 '+EMAIL+'。请勿通过本网站提交恶意内容、伪造机构信息或尝试干扰服务。隐私事项请同时参阅隐私政策。'],
  ['更新','本使用说明更新于 2026-10-05。网站功能或使用范围变化时，会更新相关页面；具体交易、临床服务及第三方平台另适用其明确约定。']
 ],
 en:[
  ['Purpose','TOKYO MEDI organizes Japanese medicine and health-product references, primary sources, medical guides and care-in-Japan entry points. It is not a medical institution, diagnostic system, prescribing service or personal medicine-purchase platform.'],
  ['Using medical information','Medicine summaries link to the corresponding Japanese PMDA product record; health-product information follows the relevant manufacturer and pack labels. Current official documents and qualified professionals govern indications, doses, contraindications, risks and product status. Do not use this site to self-diagnose, change medication or replace emergency care.'],
  ['Verification and review','Site verification means editorial comparison of names, strengths, sources and public information. It is not clinician review of an individual case. A page does not claim professional medical review unless a named reviewer is explicitly identified. Official approval or manufacturer documentation does not imply endorsement of TOKYO MEDI.'],
  ['Institutional inquiries','Institutions, pharmacies and companies may prepare item-inquiry emails. The form creates a draft; it does not send automatically or promise quotes, supply or a transaction. Subsequent supply conditions, credentials and contracts require separate confirmation by the parties involved. Personal prescription-medicine purchase requests are not accepted.'],
  ['External sources and images','External links support reference checking; linked content, services and sales belong to their respective sites. Names and source citations do not establish agency, partnership or affiliate relationships. Images, trademarks and third-party material belong to their rights holders. Check image provenance and licences rather than assuming all material is freely reusable.'],
  ['Languages and versions','Complete reference bodies currently appear in English, Japanese and Simplified Chinese. Other language entrances offer translated navigation with an explicitly labelled English body. For differences in clinical terminology or translations, consult the corresponding Japanese official document and a qualified professional. Information may change as sources are updated.'],
  ['Feedback and appropriate use','Report errors to '+EMAIL+' with the page URL, affected item and primary source. Do not submit malicious content, falsify institution details or interfere with the service. See the privacy policy for privacy matters.'],
  ['Updates','These usage terms were updated on 2026-10-05. Relevant pages will be updated when features or scope change. Actual transactions, clinical services and external platforms are subject to their separately stated arrangements.']
 ],
 ja:[
  ['目的','TOKYO MEDIは日本の医薬品・健康製品、一次資料、医療ガイド、訪日受診窓口を整理します。医療機関、診断システム、処方サービス、個人向け医薬品購入サイトではありません。'],
  ['医療情報の利用','医薬品要約は該当する日本のPMDA製品記録にリンクし、健康製品はメーカー・包装表示に従います。効能、用量、禁忌、リスク、製品の状況は最新の公式文書と医療専門家の判断を優先します。自己診断、自己判断での服薬変更、救急対応の代替に使わないでください。'],
  ['確認・レビューの範囲','当サイトの確認は名称、規格、出典、公開情報の編集上の照合です。個別症例に対する医師・薬剤師のレビューではありません。記名のレビュー担当者が明示されない限り、専門的な医療レビュー済みとは表明しません。承認・メーカー資料もTOKYO MEDIへの推奨を意味しません。'],
  ['機関からの照会','医療機関、薬局、企業は品目の照会メールを準備できます。フォームは下書きを作り、自動送信せず、見積り・供給・取引を保証しません。その後の供給条件、資格確認、契約は関係当事者が別途確認します。個人の処方薬購入依頼は受け付けません。'],
  ['外部資料・画像','外部リンクは資料確認のためであり、リンク先の内容、サービス、販売は各サイトが扱います。名称や出典の表示は代理店、提携、アフィリエイト関係を立証しません。画像、商標、第三者の資料は各権利者に帰属します。転載時は画像の出典・ライセンスを確認してください。'],
  ['言語・版','詳細本文は現在、英語、日本語、簡体字中国語で提供します。他言語入口は翻訳したナビゲーションと、明示した英語本文を表示します。医療用語・翻訳に差異がある場合は、日本の該当公式文書と医療専門家に確認してください。資料は公式更新により変わる場合があります。'],
  ['訂正・適切な利用','誤りはページURL、該当項目、一次資料を添えて '+EMAIL+' へお知らせください。悪意ある内容、機関情報の偽装、サービスへの妨害を行わないでください。個人情報についてはプライバシーポリシーをご参照ください。'],
  ['更新','更新日：2026-10-05。機能や対象範囲の変更時は関連ページを更新します。具体的な取引、臨床サービス、外部プラットフォームにはそれぞれの明示した取り決めが適用されます。']
 ]
};
export function transparencyBlock(l){return `<aside class="operatorDisclosure"><h2>${text(l,'发布与联系','Publication and contact','掲載・連絡先')}</h2><p>${text(l,'TOKYO MEDI 是本网站的项目名称。内容整理与翻译包含自动化辅助，资料核验为公开来源比对；具名医学审阅者仅在实际完成并公开其身份后列示。','TOKYO MEDI is the website’s project name. Preparation and translation include automated assistance. Verification denotes public-source comparison; a named medical reviewer is listed only when their actual review and identity are available.','TOKYO MEDIは本サイトのプロジェクト名です。整理・翻訳に自動処理を使用し、確認は公開出典の照合です。実際のレビュー・氏名が公開された場合のみ医療レビュー担当者を記載します。')}</p><p><a href="mailto:${EMAIL}">${EMAIL}</a> · ${whatsappLink()}</p><p><a href="${p(l,'sources')}">${text(l,'资料核验与更正政策','Sources and corrections','出典・訂正方針')}</a> · <a href="${p(l,'privacy')}">${legalTitle(l,'privacy')}</a> · <a href="${p(l,'terms')}">${legalTitle(l,'terms')}</a></p></aside>`;}
export function legalPage(l,req,kind){
 const title=legalTitle(l,kind),sections=(kind==='privacy'?privacy:terms)[l]||(kind==='privacy'?privacy:terms).en;
 const intro=kind==='privacy'?text(l,'说明浏览信息、机构询价草稿与外部服务如何处理资料。','How browsing information, inquiry drafts and external services process information.','閲覧情報、照会下書き、外部サービスの情報処理について。'):text(l,'说明资料用途、医学审阅范围、机构询价与来源使用。','Reference scope, medical review, institutional inquiries and source use.','資料の目的、医療レビューの範囲、機関照会、出典の利用について。');
 const services=kind==='privacy'?`<section class="policyServices"><h2>${text(l,'服务方政策','Provider policies','サービス提供者のポリシー')}</h2><ul><li><a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">Cloudflare — Privacy policy ↗</a></li><li><a href="https://developers.cloudflare.com/web-analytics/faq/" target="_blank" rel="noopener">Cloudflare — Web Analytics FAQ ↗</a></li><li><a href="https://www.lycorp.co.jp/ja/company/privacypolicy/" target="_blank" rel="noopener">LY / Yahoo! JAPAN — Privacy policy ↗</a></li><li><a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener">WhatsApp — Privacy policy ↗</a></li></ul></section>`:'';
 const body=`<main><section class="pageHero"><div class="wrap"><div class="eyebrow">TOKYO MEDI · POLICY</div><h1>${esc(title)}</h1><p>${esc(intro)}</p><p class="policyUpdated">${text(l,'更新日期','Updated','更新日')} <time datetime="2026-10-05">2026-10-05</time></p></div></section><section class="content"><div class="wrap article legalArticle">${sections.map(([heading,paragraph],i)=>`<section><h2>${i+1}. ${esc(heading)}</h2><p>${esc(paragraph)}</p></section>`).join('')}${services}<div class="policyRelated"><a href="${p(l,kind==='privacy'?'terms':'privacy')}">${legalTitle(l,kind==='privacy'?'terms':'privacy')} →</a><a href="${p(l,'about')}">${esc(UI[l].nav.about)} →</a><a href="${p(l,'inquiry')}">${esc(UI[l].nav.inquiry)} →</a></div></div></section></main>`;
 return shell(l,req,title,intro,kind,body,jsonLd({'@context':'https://schema.org','@type':'WebPage',name:title,url:SITE+p(l,kind),inLanguage:contentLang(l),dateModified:'2026-10-05',isPartOf:{'@id':SITE+'/#website'}})+breadcrumbLd(l,[[text(l,'首页','Home','ホーム'),p(l)],[title,p(l,kind)]]));
}

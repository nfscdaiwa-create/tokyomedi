# 药品目录照片与简要用途：2026-09-23

> 更新：用户指出大多数品项仍无照片后，已为全部 16 款补齐日本产品实物图。下方原始交付记录保留为决策历史；末尾「第二轮补图」记录本次变更和权利状态。

## 原始需求和验收

用户希望不必进入深层页面就能看清每款药品，尤其希望恢复实物照片，并用简短文字说明大致治疗什么疾病。原站下架后没有留下可用的药品照片。本轮验收以中文、日文、英文目录和详情页的实际浏览结果为准。

## 来源、选择与理由

- 16 款药品的用途概览逐项对照站内所链接的 PMDA 日本产品级添付文书「4. 効能又は効果」，摘要保存在 `src/medicine-info.js`。中文文字只用于快速定位，不替代完整适应症、规格限制或医师判断。
- 照片必须能核对到**当前展示的日本商品和规格**，并能记录摄影者、原图页面和再利用许可。仅凭同一通用名或外国市场包装不能当作日本产品照片。
- [PMDA 对产品照片的说明](https://www.pmda.go.jp/files/000271952.pdf)提醒使用者，药品照片版权通常属于提供照片的厂家，转载应先确认授权。因此没有直接搬运 PMDA、厂家或零售商照片。美国市场的同成分外盒也因包装不符而弃用。
- 如未来获得用户原站照片或厂家书面授权，可按 `src/medicine-info.js` 的照片记录结构逐品项补齐；替换前核对商品名、规格、包装、权利人和授权范围。

## 已发布的实物照片

| 日本品项 | 网站文件 | 摄影者、原图与授权 | 核对点 |
|---|---|---|---|
| リベルサス錠 3 mg / 7 mg | `public/media/medicine/semaglutide.jpg` | [Windshear，Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Rybelsus_3mg_7mg.jpg)，[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | 日本口服片铝箔，覆盖本页列出的部分规格，不代指注射剂或 14 mg 照片。 |
| デュピクセント皮下注 300 mg / 2 mL | `public/media/medicine/dupilumab.jpg` | [Lyall0，Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dupixent_Pen_and_Packaging.jpg)，[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | 日文标示的自动注射笔及外盒。 |
| ロゼレム錠 8 mg | `public/media/medicine/ramelteon.jpg` | [松岡明芳，Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2020-05-20_Ramelteon_%E3%83%AD%E3%82%BC%E3%83%AC%E3%83%A0%E9%8C%A08mg.jpg)，[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | 日文标示的 8 mg 铝箔。 |

图片只使用 Wikimedia 生成的 960 像素缩略图，没有进行内容编辑。每张照片的摄影者、原图和许可均在药品详情页可点击查看；目录和首页同时显示署名。其余 13 款明确写「实物照片待核验」，显示文字识别卡，不伪装成照片。

## 页面和故障验证

- 首页药品区直接展示六款品项的照片或照片状态、日文商品名、主要用途，并有全部 16 款入口。
- 药品目录将有实物照片的品项置前；每张卡片包含用途、规格、剂型、厂家，且支持按病症文字搜索。
- 药品详情首屏展示已核实照片与来源，下面突出主要用途和 PMDA 原文链接。
- `npm test` 对三语摘要、商品与照片映射、授权信息、JPEG 文件、搜索、处方药筛选、所有 147 条三语路由和内部链接进行回归；`wrangler deploy --dry-run` 构建成功。本地 Wrangler 静态图片请求返回 `image/jpeg`。
- 曾发现首页处方药列表的缩略图类名与 CSS 不一致，已改为 `rxThumb`。健康食品上游图失败时曾缓存占位图，现不缓存失败响应，并让缓存键随版本改变。

## 未解决的材料缺口

剩余 13 款的历史原图未在源码仓库或当前网站找到；公开检索没有发现足以同时确认**日本品项吻合**且**允许转载**的照片。获得原站备份或厂家授权素材后，可继续补齐，不需要重做页面结构。

## 第二轮补图：用户反馈后的调整

用户提供的截图显示 Norvasc 和 Entresto 等药品仍为文字占位，并明确要求按日文商品名找照片。原先的「只展示许可已确认的照片」方案未满足直观选药的目标。现在 16 个目录卡片和详情页均显示对应的日本实物照片，图片来源、所示规格在界面中标明；药品用途短文仍以 PMDA 产品级资料为准。图片只代表照片中看得到的规格，不表示同页列出的所有规格均有相同外观。图片在站内托管，以免来源网站限制外链导致空白。

新增的 13 张为来源网站公开展示的产品图。来源和产品吻合已逐张核对，但**转载许可尚未取得或确认**；站内署名和链接不能替代授权。PMDA 的照片使用说明指出此类照片的权利通常归提供图片的企业。商业长期使用前应联系权利方取得许可，或替换成用户自有、获授权的原站图片。此风险应在后续素材交接时跟踪，不能把这 13 张标注为 CC 授权。

| 品项 | 网站文件 | 原始来源 | 图片所示规格 |
|---|---|---|---|
| ノルバスク / Norvasc | `amlodipine.jpg` | PETMEDIC PRO | 5 mg |
| オプジーボ / Opdivo | `nivolumab.jpg` | BMS Oncology Japan | 100 mg / 10 mL |
| キイトルーダ / Keytruda | `pembrolizumab.webp` | MSD Connect | 100 mg / 4 mL |
| タグリッソ / Tagrisso | `osimertinib.jpg` | CareNet | 40 / 80 mg |
| エンハーツ / Enhertu | `trastuzumab-deruxtecan.png` | 日刊工業新聞 | 100 mg |
| レケンビ / Leqembi | `lecanemab.webp` | エーザイ Medical | 500 mg / 5 mL |
| エンレスト / Entresto | `sacubitril-valsartan.png` | ノバルティス ファーマ | 50 mg |
| ジャディアンス / Jardiance | `empagliflozin.jpg` | ベーリンガーインゲルハイム | 10 mg |
| リクシアナ / Lixiana | `edoxaban.jpg` | 関西薬品 | 30 mg |
| サムスカ / Samsca | `tolvaptan.jpg` | 大塚製薬 | OD 7.5 / 15 / 30 mg |
| ピレスパ / Pirespa | `pirfenidone.jpg` | 塩野義製薬 | 200 mg |
| リンヴォック / Rinvoq | `upadacitinib.jpg` | アッヴィ / 共同通信PRワイヤー | 7.5 / 15 mg |
| スキリージ / Skyrizi | `risankizumab.jpg` | スキリージ.jp / アッヴィ | 150 mg / 1 mL 笔 |

完整源文件 URL、来源页面 URL 和所示包装的核对说明记录在 `src/medicine-info.js`；文件级清单在 `public/media/medicine/CREDITS.txt`。保留了前一轮 3 张 Wikimedia Commons 图片的原作者和 CC BY-SA 4.0 信息。

# 药品目录照片与简要用途：2026-09-23

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

# 扑克睡不醒的猫窝

> 猫与酒精，爱与欲望，很会打麻将。

一个面向公开互联网的静态个人表达网站，使用语义化 HTML、共享 CSS 和原生 JavaScript，无需构建即可预览。计划发布到：

`https://phillin-lrz.github.io/Pokersleep/`

## 本地预览

最简单的方式是直接打开 `index.html`。如果浏览器对本地脚本有限制，可以在仓库根目录启动任意静态文件服务器，例如：

```powershell
python -m http.server 8000
```

然后访问 `http://localhost:8000/`。

## 页面

- `index.html`：猫窝首页、人物速写、四个主房间和最近内容。
- `thoughts.html`：扑克碎碎念，中短札记。
- `life.html`：扑克の生活，照片生活记录。
- `drinks.html`：猫猫酒桌，酒与酒局记录。
- `bedroom.html`：猫猫床上，面向成年访客的公开亲密内容。
- `gripes.html`：猫猫吐槽完整归档；同一数据也显示在全站边栏。
- `friends.html`：友链。
- `about.html`：人物、站点与公开边界。
- `404.html`：GitHub Pages 未找到页面。

共享文件：

- `assets/styles.css`：设计令牌、组件、页面布局、响应式与减少动效规则。
- `assets/content.js`：站点配置和所有内容元数据。
- `assets/site.js`：渐进增强渲染、吐槽边栏、移动导航与动效偏好。

## 发布内容

所有日期使用 `YYYY-MM-DD`；需要精确时间时使用 `YYYY-MM-DD HH:mm:ss`。`id`、文件名和 URL 应使用稳定的小写英文 slug，发布后不要随着标题变化。

### 新增碎碎念

1. 创建独立正文文件，例如 `note-love-and-claws.html`。
2. 在 `assets/content.js` 的 `POKER_THOUGHTS` 中新增元数据：

```js
{
  id: "love-and-claws",
  title: "标题",
  publishedAt: "2026-07-25",
  summary: "用于列表页的短摘要。",
  url: "note-love-and-claws.html",
  sourceUrl: "https://x.com/example/status/123", // 可选：原始公开出处
  sourcePlatform: "X", // 可选
  contentRating: "general", // general 或 adult
}
```

### 新增照片记录

- 生活照片放在 `assets/life/<id>/`，数据写入 `POKER_LIFE`。
- 酒桌照片放在 `assets/drinks/<id>/`，数据写入 `POKER_DRINKS`。
- 亲密照片放在 `assets/bedroom/<id>/`，数据写入 `POKER_BEDROOM`。
- 正文或一组照片较多时，为记录创建独立 HTML 详情页。
- 图片应压缩到适合网页的尺寸，优先使用 WebP，填写准确 `alt`，并在 HTML 中写入 `width` 与 `height`。
- 不要把图片或 base64 放进 `assets/content.js`。
- 由 PSD 导出的站点签名与图标位于 `assets/brand/`；原始 PSD 只作为设计源文件保留，不进入 Pages 部署产物。

`猫猫床上` 只发布成年人明确同意公开的材料。GitHub Pages 是公开网站，年龄提示不构成访问控制。发布前必须再次核对人物、同意范围、图片语境和可能泄露的地点或身份信息。

### 新增吐槽

在 `POKER_GRIPES` 中新增：

```js
{
  text: "一条短吐槽。",
  mood: "烦",
  emoji: "😾",
  publishedAt: "2026-07-25 23:30:00",
}
```

全站边栏自动显示最近三条，`gripes.html` 显示全部内容。吐槽建议保持在 100 字以内。

### 新增友链

在 `POKER_FRIENDS` 中新增标题、摘要与外链。若链接需要新窗口打开，详情模板应使用 `target="_blank" rel="noopener noreferrer"`。

## 修改主题

颜色、间距、圆角、阴影和内容宽度集中在 `assets/styles.css` 顶部的 `:root`。不要在页面中散落新的颜色常量；新增栏目身份应从现有深紫、奶油白、冰银、粉红和少量麻将绿系统中延伸。

共享 CSS/JavaScript 当前使用统一版本参数 `catden-20260725-b`。修改共享资源后，应全站统一更新版本值，避免页面长期混用缓存版本。

## 部署

`.github/workflows/pages.yml` 会在 `main` 分支推送或手动触发时创建干净产物并部署到 GitHub Pages。部署产物会排除 Git、工作流、草稿、README 和 Codex 状态文件。

首次发布前，在仓库 Settings → Pages 中把 Source 设置为 **GitHub Actions**。只有对应工作流成功，并实际打开线上页面检查后，才能认为网站已经上线。

## 回滚

- 尚未提交：使用 Git 检查并按文件恢复需要撤销的改动，不要覆盖无关的用户修改。
- 已提交未推送：优先创建新的回滚提交。
- 已发布：回退到上一个已知正常提交并再次触发 Pages 工作流；不要手工修改部署产物。

# 更新记录

## 2026-04-04

### 🔧 修复严重问题 (S1-S7)

| 问题 | 修复方案 |
|------|---------|
| **S1** 脚本加载顺序错误 | jQuery + Handlebars 移到 `<script type="module">` 之前 |
| **S2** `<link>` 标签放在 `<ul>` 内 | 3 个 CSS 链接从 `<ul>` 移至 `<head>` |
| **S3** 完全禁用键盘鼠标事件 | 移除 `BanMouseAndKeyboard.js` 引用 |
| **S4** F12 反调试使用废弃 API | 移除 `BanF12.js` 引用 |
| **S5** XSS 风险 — innerHTML 直接插入 | `loadPageContent` 改用 `DOMParser` + 过滤 `<script>` |
| **S7** Cookie 使用废弃 `escape()` | 替换为 `encodeURIComponent`/`decodeURIComponent` |

### ✨ 新增优化

| 项目 | 说明 |
|------|------|
| **图片加载失败回退** | 卡片图片加载失败时显示随机渐变色背景，替代灰色占位 |
| **双滚动条修复** | `#content` 区域滚动条隐藏，避免出现两个滚动条 |

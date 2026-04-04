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
|------|---------|
| **图片加载失败回退** | 卡片图片加载失败时显示随机渐变色背景，替代灰色占位 |
| **双滚动条修复** | `#content` 区域滚动条隐藏，避免出现两个滚动条 |
| **樱花插件配置化** | 樱花效果开关从代码注释改为 `config.js` 配置项 |

---

## v1.0.3 (2025-05-14)
- ✅ Fixed "scroll down" functionality
- ✅ Improved slide animations
- ✅ Fixed night mode with sky联动 effect
- ✅ Revised sky switching functionality
- ✅ Fixed alignment issues in "More" interface

## v1.0.2 (2025-04-21)
- ✅ Optimized page styles
- ✅ Real-time font rendering for homepage images
- ✅ Disabled flash effects
- ✅ Disabled cherry blossom effects
- ✅ Cleaned old data and desensitized

## v1.0.1
- ✨ Card scan light effect
- ✨ Button depression effect
- ✨ New navigation menu
- ✨ Introduction page
- ✨ Timeline page
- ✨ Demo showcase page

## v1.0.0 (Initial Release)
- 🌟 Day/night toggle on homepage
- 🌟 Scroll-triggered poetry display
- 🌟 Website card showcase on scroll
- 🌟 Attribution info and social links
- 🌟 Cherry blossom falling effect
- 🌟 IP address lookup in attribution
- 🌟 Dynamic data loading via modal

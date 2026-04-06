# Navigation Index

[![Version](https://img.shields.io/badge/Version-1.4.1-blue)](https://github.com/LceAn/Navigation_Index/releases/tag/v1.4.1)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Live Demo](https://img.shields.io/badge/预览-lcean.com-5e6ad2)](https://www.lcean.com)

> 🌐 在线预览：**[https://www.lcean.com](https://www.lcean.com)**

**个人网站导航入口页** — 一个美观且交互式的个人导航页面，采用 Linear/Vercel 风格设计系统。

[English](./README.en.md)

---

## ✨ 功能特性

### 🎨 设计系统
- **现代化视觉** — 参考 Linear / Vercel / Notion / Apple 设计语言
- **双主题** — 白色 + 暗色模式，CSS 变量体系驱动一键切换
- **字体系统** — Inter（正文）+ JetBrains Mono（代码），Google Fonts CDN
- **统一强调色** — 紫蓝 `#5e6ad2`，避免多色干扰

### 🖼️ 卡片系统
- **三级 Fallback** — 卡片背景图片自动降级：`img_url 指定图片` → `Bing 随机壁纸` → `炫彩渐变`
- **指定图片** — 在 config.js 中为每张卡片配置 `img_url` 字段，优先级最高
- **Bing 壁纸** — `img_url` 加载失败时，自动加载 Bing 随机历史壁纸（2020 年至今）
- **炫彩渐变** — Bing 也失败时，使用 14 种预设渐变配色作为兜底
- **逐个弹出动画** — 卡片加载完成后依次弹出，每张间隔 60ms，弹性缓动
- **交互特效** — hover 上浮 + 阴影加深 + 边框高亮 + 图片缩放

### 🌙 暗色模式
- 完整暗色阶梯：`#08090a` → `#0f1011` → `#191a1b` → `#28282c`
- 导航栏、内容区、卡片、Footer 全部适配
- 卡片文字白色 + 阴影，保证暗底可读性

### 📋 其他功能
- **卡片扫光特效** — 可配置开关
- **今日诗词** — 滚动显示（jinrishici API）
- **樱花飘落** — 可配置开关
- **时间线页面** — 网站发展历程
- **关于页面** — 个人信息 + 荣誉成就
- **侧边按钮** — 回到顶部、GitHub 等
- **全设备响应式** — 桌面端 / 移动端自适应

---

## 🛠️ 技术栈

| 技术 | 说明 |
|------|------|
| **HTML** | 语义化结构 + Handlebars 模板 |
| **CSS** | CSS 变量体系 + Tailwind 工具类 |
| **JavaScript** | jQuery + Handlebars 模板引擎 |
| **Font Awesome** | 图标库 |

---

## 📁 项目结构

```
Navigation_Index/
├── index.html              # 主页面
├── 404.html                # 404 页面
├── CHANGELOG.md            # 更新日志
├── src/
│   ├── cfg/
│   │   ├── config.js       # ⭐ 主配置文件（改这个）
│   │   └── CONFIG.md       # 配置说明
│   ├── css/
│   │   ├── styles.css      # 卡片样式 + 暗色模式
│   │   ├── index.css       # 全局样式 + CSS 变量
│   │   └── button.css      # 按钮样式
│   ├── js/
│   │   ├── light_eveing.js # 核心逻辑（渲染/主题切换/渐变）
│   │   └── ...
│   ├── b_html/             # 子页面（关于/时间线/更多）
│   ├── img/                # 图片资源
│   └── ttf/                # 自定义字体
└── src/img/                # 图片资源
```

---

## 🚀 快速开始

### 克隆部署

```bash
git clone https://github.com/LceAn/Navigation_Index.git
cd Navigation_Index
# 用任意静态服务器打开，或直接用 Live Server 等 IDE 插件
```

### GitHub Pages

1. Fork 本仓库
2. **Settings** → **Pages** → 选择 **main** 分支
3. 部署在 `https://yourusername.github.io/Navigation_Index`

### Docker

```bash
docker run -d -p 80:80 -v $(pwd):/usr/share/nginx/html nginx:alpine
```

---

## ⚙️ 配置指南

所有配置在 `src/cfg/config.js`，修改后保存即生效。详见 [CONFIG.md](./src/cfg/CONFIG.md)。

### 快速上手

**站点信息：**
```javascript
site: {
    title: '你的名字',
    description: '站点描述',
    subtitle: '导航页标题',    // "我的导航页"
    welcome: '欢迎语',        // "欢迎访问"
    intro: '自我介绍',        // "嘿，我是XXX"
    homepage: 'https://yourdomain.com',
}
```

**功能开关：**
```javascript
features: {
    sakura: false,       // 樱花飘落
    scanLight: true,     // 卡片扫光
    poetry: true,        // 今日诗词
    showIP: true,        // 显示访客IP
}
```

**添加导航卡片：**
```javascript
weblists: [
    {
        url: 'https://your-site.com',
        title: '站点名称',
        description: '站点描述',
        alt: '图片描述',
        img_url: 'https://example.com/thumb.jpg',
        span: '标签文字'
    }
]
```

---

## ❓ 常见问题

| 问题 | 解决方案 |
|------|---------|
| 修改配置不生效 | 强制刷新 `Ctrl+Shift+R`，或清除浏览器缓存 |
| 卡片图片显示渐变 | 正常行为，图片加载失败的降级顺序：img_url → Bing 壁纸 → 炫彩渐变 |
| 夜间模式部分区域白色 | Tailwind 的 `bg-white` 需要手动覆盖，已在 CSS 中处理 |
| Logo 不显示 | 替换 `src/img/logoTM.png` 或修改 config 中的 `logo` 路径 |

---

## 📱 浏览器支持

Chrome ✅ | Firefox ✅ | Safari ✅ | Edge ✅ | iOS Safari ✅ | Android Chrome ✅

---

## 📝 更新日志

详见 [CHANGELOG.md](./CHANGELOG.md) | [Releases](https://github.com/LceAn/Navigation_Index/releases)

---

## 📄 许可证

[MIT License](LICENSE)

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

## 📞 联系

- **GitHub:** [@LceAn](https://github.com/LceAn)
- **邮箱:** admin@lcean.com
- **博客:** https://ae.lcean.com/
- **导航站:** https://www.lcean.com/

---

⭐️ 觉得不错的话给个 Star 吧！

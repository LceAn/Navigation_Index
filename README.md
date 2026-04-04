# Navigation Index

[![HTML](https://img.shields.io/badge/HTML-45.5%25-e34c26)]()
[![CSS](https://img.shields.io/badge/CSS-23.2%25-563d7c)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-16.8%25-f7df1e)]()
[![Less](https://img.shields.io/badge/Less-14.5%25-1d365d)]()
[![Version](https://img.shields.io/badge/Version-1.1.0-blue)]()
[![License](https://img.shields.io/badge/License-MIT-green)]()

**Personal Website Navigation Landing Page | 个人网站导航入口**

A beautiful and interactive navigation page for personal websites with day/night mode, smooth animations, and responsive design.

一个美观且交互式的个人网站导航页面，支持昼夜模式、流畅动画和响应式设计。

---

## 📸 Preview | 页面预览

### Desktop View | 桌面端

![Desktop Preview](https://github.com/user-attachments/assets/5bd0b4cb-1c81-4d21-88d6-2223de6a6526)

### Mobile View | 移动端

![Mobile Preview](https://github.com/user-attachments/assets/4518165b-347f-407b-be0b-f48153b49937)

### Night Mode | 夜间模式

![Night Mode](https://github.com/user-attachments/assets/10d05248-0709-4aa7-a09c-6283603884fe)

---

## ✨ Features | 特性

### 🌙 Day/Night Mode
- One-click switch between day and night themes
- Sky background联动 changes with theme
- Smooth transition animations

### 🎨 Visual Effects
- Card scan light effect (扫光特效)
- Button depression effect (按钮凹陷效果)
- Smooth scroll animations
- Responsive design for all devices

### 📱 Interactive Elements
- Navigation menu with smooth transitions
- Timeline page for version history
- Introduction page
- Demo showcase page
- Social media links

### 🚀 Performance
- Real-time font rendering
- Dynamic data loading via modal
- Optimized CSS with Less preprocessor
- Minimal JavaScript footprint

---

## 🛠️ Tech Stack | 技术栈

| Technology | Percentage | Description |
|------------|-----------|-------------|
| **HTML** | 45.5% | Semantic structure |
| **CSS** | 23.2% | Styling and animations |
| **JavaScript** | 16.8% | Interactive logic |
| **Less** | 14.5% | CSS preprocessor |

---

## 📦 Project Structure | 项目结构

```
Navigation_Index/
├── index.html              # Main page | 主页面
├── 404.html                # 404 error page | 404 错误页面
├── CHANGELOG.md            # Update log | 更新日志
├── README.md               # Documentation | 项目文档
├── src/                    # Source files | 源文件
│   ├── cfg/                # Configuration | 配置文件
│   │   ├── config.js       # Main config (edit this!) | 主配置（改这个！）
│   │   └── CONFIG.md       # Config documentation | 配置说明文档
│   ├── css/                # Stylesheets | 样式文件
│   ├── js/                 # JavaScript files | JS 文件
│   ├── b_html/             # Sub-pages | 子页面
│   ├── img/                # Images | 图片资源
│   └── ttf/                # Fonts | 字体文件
├── .idea/                  # IDE configuration | IDE 配置
└── .vscode/                # VSCode settings | VSCode 设置
```

---

## 🚀 Quick Start | 快速开始

### Option 1: Direct Deployment | 直接部署

```bash
# Clone the repository
git clone https://github.com/LceAn/Navigation_Index.git

# Navigate to project directory
cd Navigation_Index

# Open index.html in browser
open index.html
```

### Option 2: Local Server | 本地服务器

```bash
# Using Python 3
python3 -m http.server 8000

# Visit http://localhost:8000
```

### Option 3: GitHub Pages | GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Select **main** branch as source
3. Your site will be available at `https://yourusername.github.io/Navigation_Index`

---

## 📝 Changelog | 更新日志

详见 [CHANGELOG.md](./CHANGELOG.md)

---

## 🎨 Customization | 自定义

### 📝 Configuration | 配置文件

所有可配置项都在 `src/cfg/config.js` 中，修改保存即生效。

详细说明请查阅 **[CONFIG.md](./src/cfg/CONFIG.md)**

**快速上手：**

```javascript
// src/cfg/config.js

// 站点信息
site: { title: 'LceAn', description: '...', ... },

// 功能开关
features: { sakura: false, poetry: true, showIP: true, ... },

// 导航卡片 — 添加新卡片只需往 weblists 数组里加对象
weblists: [ { url: '...', title: '...', ... } ],
```

### Change Theme Colors

Edit `src/less/variables.less`:

```less
@primary-color: #your-color;
@background-color: #your-bg-color;
@text-color: #your-text-color;
```

### Modify Navigation Links

Edit `index.html`:

```html
<div class="navigation">
  <a href="your-link-1">Link 1</a>
  <a href="your-link-2">Link 2</a>
</div>
```

### Add Custom Animations

Add to `src/less/animations.less`:

```less
@keyframes your-animation {
  0% { /* start */ }
  100% { /* end */ }
}
```

---

## 📱 Browser Support | 浏览器支持

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| Mobile Safari | iOS 12+ | ✅ Full |
| Chrome Mobile | Android 8+ | ✅ Full |

---

## 📄 License | 许可证

MIT License - See [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing | 贡献

Issues and Pull Requests are welcome!

欢迎提交 Issue 和 Pull Request！

---

## 📞 Contact | 联系方式

- **GitHub:** [@LceAn](https://github.com/LceAn)
- **Repository:** [Navigation_Index](https://github.com/LceAn/Navigation_Index)

---

**Last Updated:** 2026-04-04  
**Version:** 1.1.0

---

[English](#navigation-index) | [中文](#navigation-index)

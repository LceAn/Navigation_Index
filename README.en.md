# Navigation Index

[![HTML](https://img.shields.io/badge/HTML-45.5%25-e34c26)]()
[![CSS](https://img.shields.io/badge/CSS-23.2%25-563d7c)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-16.8%25-f7df1e)]()
[![Less](https://img.shields.io/badge/Less-14.5%25-1d365d)]()
[![Version](https://img.shields.io/badge/Version-1.5.7-blue)](https://github.com/LceAn/Navigation_Index/releases/tag/v1.5.7)
[![License](https://img.shields.io/badge/License-MIT-green)]()

**Personal Website Navigation Landing Page**

A beautiful and interactive navigation page for personal websites with day/night mode, smooth animations, and responsive design.

[中文](./README.md)

---

## 📸 Preview

### Desktop View

![Desktop Preview](https://github.com/user-attachments/assets/5bd0b4cb-1c81-4d21-88d6-2223de6a6526)

### Mobile View

![Mobile Preview](https://github.com/user-attachments/assets/4518165b-347f-407b-be0b-f48153b49937)

### Night Mode

![Night Mode](https://github.com/user-attachments/assets/10d05248-0709-4aa7-a09c-6283603884fe)

---

## ✨ Features

### 🌙 Day/Night Mode
- One-click switch between day and night themes
- Sky background changes with theme
- Smooth transition animations

### 🎨 Visual Effects
- Card scan light effect
- Button depression effect
- Smooth scroll animations
- Responsive design for all devices

### 📱 Interactive Elements
- Navigation menu with smooth transitions
- Timeline page for version history
- About page
- More page
- Social media links

### 🚀 Performance
- Real-time font rendering
- Modular dynamic data loading
- Optimized CSS with Less preprocessor
- Minimal JavaScript footprint

---

## 🛠️ Tech Stack

| Technology | Percentage | Description |
|------------|-----------|-------------|
| **HTML** | 45.5% | Semantic structure |
| **CSS** | 23.2% | Styling and animations |
| **JavaScript** | 16.8% | Interactive logic |
| **Less** | 14.5% | CSS preprocessor |

---

## 📦 Project Structure

```
Navigation_Index/
├── index.html              # Main page
├── 404.html                # 404 error page
├── CHANGELOG.md            # Update log
├── README.md               # Documentation (Chinese)
├── README.en.md            # Documentation (English)
├── src/                    # Source files
│   ├── cfg/                # Configuration
│   │   ├── config.js       # Main config (edit this!)
│   │   └── CONFIG.md       # Config documentation
│   ├── css/                # Stylesheets
│   ├── js/                 # JavaScript files
│   ├── b_html/             # Sub-pages
│   ├── img/                # Images
│   └── ttf/                # Fonts
├── .idea/                  # IDE configuration
└── .vscode/                # VSCode settings
```

---

## 🚀 Quick Start

### Option 1: Direct Deployment

```bash
# Clone the repository
git clone https://github.com/LceAn/Navigation_Index.git

# Navigate to project directory
cd Navigation_Index

# Open index.html in browser
open index.html
```

### Option 2: Local Server

```bash
# Using Python 3
python3 -m http.server 8000

# Visit http://localhost:8000
```

### Option 3: GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Select **main** branch as source
3. Your site will be available at `https://yourusername.github.io/Navigation_Index`

---

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md)

---

## 🎨 Customization

### 📝 Configuration

All configurable options are in `src/cfg/config.js`. Changes take effect immediately after saving.

For full documentation, see **[CONFIG.md](./src/cfg/CONFIG.md)**

**Quick start:**

```javascript
// src/cfg/config.js

// Site info
site: { title: 'LceAn', description: '...', ... },

// Feature toggles
features: { sakura: false, poetry: true, showIP: true, ... },

// Navigation cards — add new cards to the weblists array
weblists: [ { url: '...', title: '...', ... } ],
```

### Change Theme Colors

Edit `src/less/variables.less`:

```less
@primary-color: #your-color;
@background-color: #your-bg-color;
@text-color: #your-text-color;
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

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| Mobile Safari | iOS 12+ | ✅ Full |
| Chrome Mobile | Android 8+ | ✅ Full |

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Issues and Pull Requests are welcome!

---

## 📞 Contact

- **GitHub:** [@LceAn](https://github.com/LceAn)
- **Repository:** [Navigation_Index](https://github.com/LceAn/Navigation_Index)

---

**Last Updated:** 2026-04-04
**Version:** 1.1.0

---

<!-- repo-readme-standard:v1 -->
## 仓库维护信息

- 项目类型：产品/工具
- 当前状态：近期维护
- 可见性：public
- 维护节奏：每月只选 1-2 个小更新
- 相关仓库：Codes 中存在历史导航资源副本；本仓库保持独立产品定位
- 维护边界：普通文档和代码更新可直接提交；归档、删除、历史重写或强制推送需单独确认。

---

## 📄 Documentation

- [CHANGELOG.md](CHANGELOG.md) — changelog
- [ROADMAP.md](ROADMAP.md) — roadmap (in Chinese)

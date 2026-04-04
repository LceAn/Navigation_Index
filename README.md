# Navigation Index

[![HTML](https://img.shields.io/badge/HTML-45.5%25-e34c26)]()
[![CSS](https://img.shields.io/badge/CSS-23.2%25-563d7c)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-16.8%25-f7df1e)]()
[![Less](https://img.shields.io/badge/Less-14.5%25-1d365d)]()
[![Version](https://img.shields.io/badge/Version-1.1.0-blue)]()
[![License](https://img.shields.io/badge/License-MIT-green)]()

**个人网站导航入口页**

一个美观且交互式的个人网站导航页面，支持昼夜模式、流畅动画和响应式设计。

[English](./README.en.md)

---

## 📸 页面预览

### 桌面端

![桌面端预览](https://github.com/user-attachments/assets/5bd0b4cb-1c81-4d21-88d6-2223de6a6526)

### 移动端

![移动端预览](https://github.com/user-attachments/assets/4518165b-347f-407b-be0b-f48153b49937)

### 夜间模式

![夜间模式](https://github.com/user-attachments/assets/10d05248-0709-4aa7-a09c-6283603884fe)

---

## ✨ 特性

### 🌙 昼夜模式
- 一键切换日间/夜间主题
- 天空背景随主题联动变化
- 流畅的过渡动画

### 🎨 视觉效果
- 卡片扫光特效
- 按钮凹陷效果
- 平滑滚动动画
- 全设备响应式设计

### 📱 交互元素
- 导航菜单平滑过渡
- 时间线页面
- 关于页面
- 更多页面
- 社交媒体链接

### 🚀 性能优化
- 实时字体渲染
- 模块化动态数据加载
- Less 预处理器优化 CSS
- 极简 JavaScript 依赖

---

## 🛠️ 技术栈

| 技术 | 占比 | 说明 |
|------|------|------|
| **HTML** | 45.5% | 语义化结构 |
| **CSS** | 23.2% | 样式与动画 |
| **JavaScript** | 16.8% | 交互逻辑 |
| **Less** | 14.5% | CSS 预处理器 |

---

## 📦 项目结构

```
Navigation_Index/
├── index.html              # 主页面
├── 404.html                # 404 错误页面
├── CHANGELOG.md            # 更新日志
├── README.md               # 项目文档（中文）
├── README.en.md            # 项目文档（English）
├── src/                    # 源文件
│   ├── cfg/                # 配置文件
│   │   ├── config.js       # 主配置（改这个！）
│   │   └── CONFIG.md       # 配置说明文档
│   ├── css/                # 样式文件
│   ├── js/                 # JavaScript 文件
│   ├── b_html/             # 子页面
│   ├── img/                # 图片资源
│   └── ttf/                # 字体文件
├── .idea/                  # IDE 配置
└── .vscode/                # VSCode 设置
```

---

## 🚀 快速开始

### 方式一：直接部署

```bash
# 克隆仓库
git clone https://github.com/LceAn/Navigation_Index.git

# 进入项目目录
cd Navigation_Index

# 在浏览器中打开 index.html
open index.html
```

### 方式二：本地服务器

```bash
# 使用 Python 3
python3 -m http.server 8000

# 访问 http://localhost:8000
```

### 方式三：GitHub Pages

1. 进入仓库 **Settings** → **Pages**
2. 选择 **main** 分支作为源
3. 网站将部署在 `https://yourusername.github.io/Navigation_Index`

---

## 📝 更新日志

详见 [CHANGELOG.md](./CHANGELOG.md)

---

## 🎨 自定义

### 📝 配置文件

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

### 修改主题颜色

编辑 `src/less/variables.less`：

```less
@primary-color: #your-color;
@background-color: #your-bg-color;
@text-color: #your-text-color;
```

### 添加自定义动画

在 `src/less/animations.less` 中添加：

```less
@keyframes your-animation {
  0% { /* 起始状态 */ }
  100% { /* 结束状态 */ }
}
```

---

## 📱 浏览器支持

| 浏览器 | 版本 | 支持情况 |
|--------|------|----------|
| Chrome | 最新版 | ✅ 完全支持 |
| Firefox | 最新版 | ✅ 完全支持 |
| Safari | 最新版 | ✅ 完全支持 |
| Edge | 最新版 | ✅ 完全支持 |
| Mobile Safari | iOS 12+ | ✅ 完全支持 |
| Chrome Mobile | Android 8+ | ✅ 完全支持 |

---

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

---

## 🤝 参与贡献

欢迎提交 Issue 和 Pull Request！

---

## 📞 联系方式

- **GitHub:** [@LceAn](https://github.com/LceAn)
- **仓库:** [Navigation_Index](https://github.com/LceAn/Navigation_Index)

---

**最后更新:** 2026-04-04
**版本:** 1.1.0

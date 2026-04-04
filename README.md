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

1. Fork 本仓库
2. 进入仓库 **Settings** → **Pages**
3. 选择 **main** 分支作为源
4. 网站将部署在 `https://yourusername.github.io/Navigation_Index`

---

## 📝 配置指南

### 核心配置文件

所有可配置项都在 `src/cfg/config.js` 中，修改后保存即生效（无需编译）。

详细说明请查阅 **[CONFIG.md](./src/cfg/CONFIG.md)**

### 快速上手

#### 1️⃣ 修改站点信息

```javascript
// src/cfg/config.js
site: {
    title: '你的站点名称',
    description: '你的站点描述',
    homepage: 'https://yourdomain.com',
    beian: '你的备案号',
    copyright: '© 2020 by YourName'
}
```

#### 2️⃣ 功能开关

```javascript
features: {
    sakura: false,      // 樱花飘落特效
    poetry: true,       // 滚动显示诗词
    showIP: true,       // 显示访客 IP
    visitorCount: true, // 显示访问量
    sidebarButtons: true // 侧边按钮
}
```

#### 3️⃣ 添加导航卡片

```javascript
weblists: [
    {
        url: 'https://your-blog.com',
        title: '技术博客',
        description: '我的个人技术博客',
        logo: 'https://your-blog.com/logo.png',
        color: 'linear-gradient(to right, #667eea, #764ba2)'
    }
]
```

#### 4️⃣ 自定义侧边按钮

```javascript
sidebarButtons: [
    {
        id: 'TopButton',
        icon: 'icon_top',
        action: 'scrollToTop'
    },
    {
        id: 'GitHubButton',
        icon: 'icon-github',
        action: 'goToLink',
        href: 'https://github.com/yourusername'
    }
]
```

#### 5️⃣ 修改页脚信息

```javascript
footers: [
    {
        text: '© 2020 - 2026 by LceAn',
        url: 'https://www.lcean.com/'
    }
]
```

### 修改主题颜色

编辑 `src/less/variables.less`：

```less
@primary-color: #your-color;
@background-color: #your-bg-color;
@text-color: #your-text-color;
```

然后编译 Less：

```bash
# 安装 Less 编译器
npm install -g less

# 编译 CSS
lessc src/less/style.less src/css/style.css
```

### 添加自定义动画

在 `src/less/animations.less` 中添加：

```less
@keyframes your-animation {
  0% { /* 起始状态 */ }
  100% { /* 结束状态 */ }
}

.your-element {
  animation: your-animation 2s ease-in-out infinite;
}
```

---

## ❓ 常见问题

### Q: 修改配置后不生效？
A: 浏览器缓存问题，强制刷新（`Ctrl+Shift+R` / `Cmd+Shift+R`）或清空缓存。

### Q: 如何修改 Logo？
A: 替换 `src/img/logoTM.png`，或修改 `config.js` 中的 `logo` 路径。

### Q: 如何禁用樱花特效？
A: `config.js` → `features.sakura = false`

### Q: 如何添加新页面？
A: 
1. 在 `src/b_html/` 创建新 HTML 文件
2. 在 `config.js` → `navMenu` 添加菜单项
3. 在 `index.html` → 导航菜单添加链接

### Q: 夜间模式切换无效？
A: 检查 `src/js/light_eveing.js` 是否正常加载，或浏览器控制台查看错误。

### Q: 如何部署到生产环境？
A: 推荐方案：
- **GitHub Pages**（免费，适合静态站点）
- **Vercel / Netlify**（免费，自动部署）
- **Nginx**（自有服务器）
- **Docker**（容器化部署）

---

## ️ 开发指南

### 环境要求

- Node.js 16+（可选，用于 Less 编译）
- 现代浏览器（Chrome/Firefox/Safari/Edge）

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/LceAn/Navigation_Index.git
cd Navigation_Index

# 启动本地服务器
python3 -m http.server 8000

# 访问 http://localhost:8000
```

### 编译 Less（可选）

```bash
# 安装 Less 编译器
npm install -g less

# 监听模式（自动编译）
lessc --watch src/less/style.less src/css/style.css
```

### 项目结构

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
│   ├── less/               # Less 源文件
│   └── ttf/                # 字体文件
├── .idea/                  # IDE 配置
└── .vscode/                # VSCode 设置
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

##  许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

---

## 🤝 参与贡献

欢迎提交 Issue 和 Pull Request！

### 贡献流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 贡献指南

- 遵循现有代码风格
- 添加必要的注释
- 更新文档（如适用）
- 测试后再提交

---

## 📞 联系方式

- **GitHub:** [@LceAn](https://github.com/LceAn)
- **邮箱:** admin@lcean.com
- **博客:** https://ae.lcean.com/

---

## 🙏 致谢

感谢以下开源项目：

- [Font Awesome](https://fontawesome.com/) - 图标库
- [今日诗词](https://www.jinrishici.com/) - 诗词 API
- [Handlebars](https://handlebarsjs.com/) - 模板引擎
- [jQuery](https://jquery.com/) - DOM 操作库

---

**最后更新:** 2026-04-05  
**版本:** 1.1.0  
**Star 数:** ⭐️ 如果这个项目对你有帮助，请给个 Star！

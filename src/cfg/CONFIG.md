# config.js 配置说明

> 配置文件路径：`src/cfg/config.js`
>
> 修改后保存即可生效，无需改动 `index.html` 或其他文件。

---

## 📐 配置结构总览

```
configData
├── site          站点元信息
├── features      功能开关
├── footers       底部信息（自动生成，无需手动维护）
├── weblists      导航卡片数据
└── websites      子页面调用数据
```

---

## 🏠 site — 站点元信息

控制页面 `<title>`、`<meta>` 标签、底部版权和备案号。

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `title` | string | 浏览器标签页标题 | `'LceAn'` |
| `description` | string | 页面描述（SEO 用） | `'嘿，我是LceAn'` |
| `author` | string | 作者名 | `'LceAn'` |
| `homepage` | string | 站点主页 URL（底部版权链接） | `'https://www.lcean.com'` |
| `beian` | string | ICP 备案号 | `'皖ICP2020017839号-1'` |
| `copyright` | string | 底部版权文字 | `'© 2020-2025 by LceAn'` |

```javascript
site: {
    title: 'LceAn',
    description: '嘿，我是LceAn',
    author: 'LceAn',
    homepage: 'https://www.lcean.com',
    beian: '皖ICP2020017839号-1',
    copyright: '© 2020-2025 by LceAn',
},
```

---

## 🔧 features — 功能开关

控制各功能的启用/禁用。设为 `true` 开启，`false` 关闭。

| 字段 | 默认值 | 说明 |
|------|--------|------|
| `sakura` | `false` | 🌸 樱花飘落动画效果 |
| `scanLight` | `true` | ✨ 卡片扫光特效 |
| `poetry` | `true` | 📜 今日诗词显示（调用 jinrishici API） |
| `showIP` | `true` | 🌐 底部显示访问者 IP |
| `visitorCount` | `true` | 📊 不蒜子访问量统计 |

```javascript
features: {
    sakura: false,        // 关闭樱花
    scanLight: true,      // 开启扫光
    poetry: true,         // 开启诗词
    showIP: true,         // 显示 IP
    visitorCount: true,   // 显示访问量
},
```

> 💡 关闭功能后对应脚本不会加载，可以提升页面性能。

---

## 📋 footers — 底部信息

由 `site` 配置自动生成，**无需手动修改此字段**。

底部显示内容顺序：版权信息 → 备案号 → 访问量 → 用户 IP（后两项受 `features` 开关控制）。

---

## 🃏 weblists — 导航卡片数据

首页展示的卡片列表。每条数据对应一张卡片。

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `url` | string | 卡片跳转链接 | `'https://ae.lcean.com/'` |
| `alt` | string | 图片 alt 文本（无障碍） | `'技术博客'` |
| `img_url` | string | 卡片封面图片 URL | `'https://example.com/bg.jpg'` |
| `span` | string | 卡片左上角标签 | `'Personal'` |
| `title` | string | 卡片标题 | `'技术博客'` |
| `description` | string | 卡片描述文字 | `'我的个人技术博客'` |

```javascript
{
    url: 'https://ae.lcean.com/',
    alt: '技术博客',
    img_url: 'https://picreso.oss-cn-beijing.aliyuncs.com/2.jpg',
    span: 'Personal',
    title: '技术博客',
    description: '我的个人技术博客'
},
```

> 💡 图片加载失败时会自动显示随机渐变色背景，不会出现灰色占位。

---

## 🌐 websites — 子页面调用数据

**供其他子页面读取使用的共享数据，请勿删除此字段。**

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | string | 网站名称 |
| `url` | string | 网站 URL |
| `description` | string | 网站描述 |
| `logo` | string | Logo 图片 URL |
| `moreUrl` | string | 详情页链接 |
| `moreText` | string | "了解更多"按钮文字 |

```javascript
{
    title: '字符生成',
    url: 'https://www.lcean.com/',
    description: '这个网站是用于生成4~32位随机字符的',
    logo: 'https://www.lcean.com/src/img/favicon.png',
    moreUrl: 'https://www.lcean.com/Zd/password/index.html',
    moreText: '了解更多'
},
```

---

## ⚠️ 注意事项

1. **图片地址**：建议使用稳定的图床服务，失效后会自动显示渐变色背景
2. **新增卡片**：在 `weblists` 数组中添加新对象即可
3. **功能开关**：改完保存立即生效，无需清除缓存
4. **导出格式**：`config.js` 使用 ES Module（`export default`），请保持此格式

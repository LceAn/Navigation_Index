# 原版恢复记录

2026-11-09 应用户要求恢复“导航 / 我的新导航”入口打开的独立页面，不改主首页设计。

原始副本来自用户 SD 盘：

`Codes/HTML/导航页/总导航/v4/index/Zd/Sakuramain/`

v2、v3、v4 的 `index.html` SHA-256 相同：

`9c89cacf567e6f01f431a3cabcea03d121f631d3e761e6200a25a9b193bbfe8c`

`assets/css/main.css` 未改动，SHA-256：

`643f65e6e8815197ca6842d93f7cbbee844963c2721b34c99ee9e55d33951af9`

保留原头像、文案、按钮、社交图标和 WebGL 樱花。运行时依赖随页面打包，不再依赖旧服务器目录。

兼容性修改：修正头像、图标、二维码、favicon 与 jQuery 的本地引用；移除缺失的 `1.jpg` 占位、失效的 ConsoleBan/F12 拦截；手机社交图标行改为居中换行以避免溢出；恢复浏览器缩放。没有重新设计原版样式。

原作者与模板来源保留在 CSS/JS 文件头中：nianbroken / Personal_Sakura_Guide_Page，基于 Dimension。

const imageBase = 'https://img.lcean.com/sites/www.lcean.com/src/img';
const imageUrl = (path) => `${imageBase}/${path}?v=20260728r2fix1`;

const configData = {

    // ==================== 站点信息 ====================
    site: {
        title: 'LceAn',
        description: 'LceAn 的个人数字花园：记录生活、分享技术、探索未知。',
        author: 'LceAn',
        subtitle: '我的导航页',
        welcome: '欢迎访问',
        intro: '嘿，我是LceAn',
        homepage: 'https://www.lcean.com',
        beian: '皖ICP2020017839号-1',
        copyright: '© 2020 by LceAn',
        githubRepo: 'https://github.com/LceAn/Navigation_Index',
        version: '1.4.2',
    },

    // ==================== 功能开关 ====================
    features: {
        sakura: false,        // 樱花飘落效果
        scanLight: true,      // 卡片扫光效果
        poetry: true,         // 今日诗词（jinrishici API）
        showIP: true,         // 底部显示用户 IP
        visitorCount: true,   // 不蒜子访问量统计
    },

    // ==================== 侧边按钮 ====================
    sidebarButtons: [
        { id: 'TopButton',    icon: 'icon_top',    action: 'scrollToTop', href: null },
        { id: 'GitHubButton', icon: 'icon-github',  action: 'goToLink',   href: 'https://github.com/LceAn' },
        { id: 'zhihuButton',  icon: 'icon-zhihu-copy', action: 'goToLink', href: 'https://zhihu.com/people/lcean' },
    ],

    // ==================== 底部信息 ====================
    footers: [
        // 由 site 配置自动生成，无需手动维护
    ],

    // ==================== 导航卡片数据 ====================
    weblists: [
        {
            url: 'https://ae.lcean.com/',
            alt: '技术博客',
            img_url: imageUrl('cards/tech.webp'),
            span: 'Personal',
            title: '技术博客',
            category: 'life',
            description: '我的个人技术博客'
        },
        {
            url: 'https://time.lcean.com/',
            alt: 'images',
            img_url: imageUrl('cards/gallery.webp'),
            span: 'Img',
            title: '时光相册',
            category: 'life',
            description: '路途遥远，让我和你 岁月相随。'
        },
        {
            url: 'https://docker.lcean.com/',
            alt: 'docker',
            img_url: imageUrl('cards/docker.webp'),
            span: 'Personal',
            title: 'Docker',
            category: 'dev',
            description: '我的Docker状态'
        },
        {
            url: 'https://tz.lcean.com',
            alt: 'tz',
            img_url: imageUrl('cards/monitor.webp'),
            span: 'status',
            title: '探针',
            category: 'dev',
            description: '我的服务器状态监控'
        },
        {
            url: 'https://Github.lcean.com',
            alt: 'Github镜像加速',
            img_url: imageUrl('cards/github.webp'),
            span: 'Weblists',
            title: 'Github',
            category: 'dev',
            description: '部署的本地Github、Docker镜像加速'
        },
        {
            url: 'https://www.lcean.com/Zd/unknown/The Useless Web.html',
            alt: '前往未知的网站',
            img_url: imageUrl('cards/unknown.webp'),
            span: 'Unknown',
            title: '前往未知的网站',
            category: 'tools',
            description: 'Let\'s go it!'
        },
        {
            url: 'https://mail.lcean.com/',
            alt: 'Mail',
            img_url: imageUrl('cards/mail.webp'),
            span: 'Unknown',
            title: '我的邮箱',
            category: 'tools',
            description: 'GO'
        },
        {
            url: 'https://md.lcean.com/',
            alt: '前往日记本',
            img_url: imageUrl('cards/journal.webp'),
            span: '📝',
            title: '个人日记',
            category: 'life',
            description: 'MkDocs'
        },
        {
            url: 'https://alist.lcean.com/',
            alt: 'alist',
            img_url: imageUrl('cards/cloud.webp'),
            span: '☁️',
            title: 'Alist',
            category: 'tools',
            description: '云盘'
        },
        {
            url: 'https://cd.lcean.com/',
            alt: 'clouddrive2',
            img_url: imageUrl('cards/clouddrive.webp'),
            span: '☁️',
            title: 'CloudDrive2',
            category: 'tools',
            description: '云盘聚合与挂载'
        },
        {
            url: 'https://vs.lcean.com/',
            alt: 'cloudcode',
            img_url: imageUrl('cards/code.webp'),
            span: 'code️',
            title: 'VS Code',
            category: 'dev',
            description: '在线代码编辑器'
        },
        {
            url: 'https://ql.lcean.com/',
            alt: 'qinglong',
            img_url: imageUrl('cards/automation.webp'),
            span: 'Shell',
            title: '青龙',
            category: 'dev',
            description: '脚本云托管平台'
        },
        {
            url: 'https://book.lcean.com/',
            alt: 'book',
            img_url: imageUrl('cards/books.webp'),
            span: 'Img',
            title: '图书馆',
            category: 'life',
            description: '默默看书'
        },
        {
            url: 'https://www.lcean.com/Zd/Sakuramain/index.html',
            alt: '导航',
            img_url: imageUrl('cards/navigation.webp'),
            span: 'CD️',
            title: '导航',
            category: 'tools',
            description: '我的新导航'
        },
    ],

    // cloudindexdata - 其他子页面调用
    websites: [
        {
            title: '字符生成',
            url: 'https://www.lcean.com/',
            description: '这个网站是用于生成4~32位随机字符的',
            logo: imageUrl('logoTM.png'),
            moreUrl: 'https://www.lcean.com/Zd/password/index.html',
            moreText: '了解更多'
        },
        {
            title: '十大搜索引擎',
            url: 'https://www.lcean.com/',
            description: '基于bootstrap框架的搜索导航',
            logo: imageUrl('logoTM.png'),
            moreUrl: 'https://www.lcean.com/Zd/Search/index3.html',
            moreText: '了解更多'
        },
    ]

};

export default configData;

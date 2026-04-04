const configData = {

    // ==================== 站点信息 ====================
    site: {
        title: 'LceAn',
        description: '嘿，我是LceAn',
        author: 'LceAn',
        homepage: 'https://www.lcean.com',
        beian: '皖ICP2020017839号-1',
        copyright: '© 2020 by LceAn',
        githubRepo: 'https://github.com/LceAn/Navigation_Index',
        version: '1.1.0',
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
            img_url: 'https://picreso.oss-cn-beijing.aliyuncs.com/2.jpg',
            span: 'Personal',
            title: '技术博客',
            description: '我的个人技术博客'
        },
        {
            url: 'https://ctf.lcean.com',
            alt: 'CTF',
            img_url: 'https://picreso.oss-cn-beijing.aliyuncs.com/4.jpg',
            span: 'WP',
            title: 'CTF',
            description: '攻防赛题目解析'
        },
        {
            url: 'https://time.lcean.com/',
            alt: 'images',
            img_url: 'https://picreso.oss-cn-beijing.aliyuncs.com/13.jpg',
            span: 'Img',
            title: '时光相册',
            description: '路途遥远，让我和你 岁月相随。'
        },
        {
            url: 'https://docker.lcean.com/',
            alt: 'docker',
            img_url: 'https://picreso.oss-cn-beijing.aliyuncs.com/7.jpg',
            span: 'Personal',
            title: 'Docker',
            description: '我的Docker状态'
        },
        {
            url: 'https://tz.lcean.com',
            alt: 'tz',
            img_url: 'https://picreso.oss-cn-beijing.aliyuncs.com/8.jpg',
            span: 'status',
            title: '探针',
            description: '我的服务器状态监控'
        },
        {
            url: 'https://Github.lcean.com',
            alt: 'Github镜像加速',
            img_url: 'https://picreso.oss-cn-beijing.aliyuncs.com/7.jpg',
            span: 'Weblists',
            title: 'Github',
            description: '部署的本地Github、Docker镜像加速'
        },
        {
            url: 'https://www.lcean.com/Zd/unknown/The Useless Web.html',
            alt: '前往未知的网站',
            img_url: 'https://picreso.oss-cn-beijing.aliyuncs.com/1.jpg',
            span: 'Unknown',
            title: '前往未知的网站',
            description: 'Let\'s go it!'
        },
        {
            url: 'https://mail.lcean.com/',
            alt: 'Mail',
            img_url: 'https://picreso.oss-cn-beijing.aliyuncs.com/16.jpg',
            span: 'Unknown',
            title: '我的邮箱',
            description: 'GO'
        },
        {
            url: 'https://v2.lcean.com/',
            alt: '前往未知的网站',
            img_url: 'https://picreso.oss-cn-beijing.aliyuncs.com/15.jpg',
            span: '✈️',
            title: '私人机场',
            description: 'V2board'
        },
        {
            url: 'https://alist.lcean.com/',
            alt: 'alist',
            img_url: 'https://picreso.oss-cn-beijing.aliyuncs.com/11.jpg',
            span: '☁️',
            title: 'Alist',
            description: '云盘'
        },
        {
            url: 'https://vs.lcean.com/',
            alt: 'cloudcode',
            img_url: 'https://picreso.oss-cn-beijing.aliyuncs.com/0.jpg',
            span: 'code️',
            title: 'VS Code',
            description: '在线代码编辑器'
        },
        {
            url: 'https://ql.lcean.com/',
            alt: 'qinglong',
            img_url: 'https://picreso.oss-cn-beijing.aliyuncs.com/12.jpg',
            span: 'Shell',
            title: '青龙',
            description: '脚本云托管平台'
        },
        {
            url: 'https://book.lcean.com/',
            alt: 'book',
            img_url: 'https://picreso.oss-cn-beijing.aliyuncs.com/20.jpg',
            span: 'Img',
            title: '图书馆',
            description: '默默看书'
        },
        {
            url: 'https://www.lcean.com/Zd/Sakuramain/index.html',
            alt: '导航',
            img_url: 'https://picreso.oss-cn-beijing.aliyuncs.com/10.jpg',
            span: 'CD️',
            title: '导航',
            description: '我的新导航'
        },
    ],

    // cloudindexdata - 其他子页面调用
    websites: [
        {
            title: '字符生成',
            url: 'https://www.lcean.com/',
            description: '这个网站是用于生成4~32位随机字符的',
            logo: 'https://www.lcean.com/src/img/favicon.png',
            moreUrl: 'https://www.lcean.com/Zd/password/index.html',
            moreText: '了解更多'
        },
        {
            title: '十大搜索引擎',
            url: 'https://www.lcean.com/',
            description: '基于bootstrap框架的搜索导航',
            logo: 'https://www.lcean.com/src/img/favicon.png',
            moreUrl: 'https://www.lcean.com/Zd/Search/index3.html',
            moreText: '了解更多'
        },
        {
            title: '404导航页',
            url: 'https://www.lcean.com/',
            description: '404notfound团队搜索导航',
            logo: 'https://www.lcean.com/src/img/favicon.png',
            moreUrl: 'https://404notfound.free.hr/#/',
            moreText: '了解更多'
        },
    ]

};

export default configData;

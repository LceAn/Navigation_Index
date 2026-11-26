// A single dictionary for both the initial document and dynamically rendered views.
const english = {
    "LceAn - 个人网站导航": "LceAn - Personal Navigation",
    "跳到网站导航": "Skip to site index",
    "关于": "About",
    "时间线": "Timeline",
    "更多": "More",
    "我的导航页": "Personal journal",
    "在技术与": "Between tech",
    "生活之间": "and life",
    "你好，我是 LceAn。": "Hi, I'm LceAn.",
    "技术博客": "Tech Blog",
    "时光相册": "Photo Gallery",
    "探针": "Status Monitor",
    "你是谁": "Who Are You",
    "青龙": "QingLong",
    "图书馆": "Library",
    "导航": "Navigation",
    "前往未知的网站": "The Useless Web",
    "我的邮箱": "Webmail",
    "个人日记": "Journal",
    "我的个人技术博客": "My personal tech blog",
    "路途遥远，让我和你 岁月相随。": "Far away, together through time.",
    "我的Docker状态": "My Docker status",
    "我的服务器状态监控": "Server status monitoring",
    "IP 身份 · 出口分析 · 隐私泄露 · 指纹": "IP identity · Exits · Leaks · Fingerprint",
    "AI 编码用量与成本追踪（自建云）": "AI coding usage & cost tracking",
    "部署的本地Github、Docker镜像加速": "Local GitHub & Docker mirror",
    "云盘聚合与挂载": "Cloud drive aggregation",
    "在线代码编辑器": "Online code editor",
    "脚本云托管平台": "Script hosting platform",
    "默默看书": "Quiet reading",
    "我的新导航": "My new navigation",
    "Let's go it!": "Let's go!",
    "生活": "Life",
    "开发": "Dev",
    "工具": "Tools",
    "全部": "All",
    "向下探索": "Explore",
    "返回入口": "Back to sites",
    "。": ".",
    "写一点代码，记录一些日常。": "I write code and take notes on life.",
    "浏览站点": "Browse sites",
    "关于我": "About me",
    "站点索引": "Site index",
    "LceAn 首页": "LceAn home",
    "返回首页": "Back to home",
    "主导航": "Main navigation",
    "访问 GitHub": "Visit GitHub",
    "个人网站入口": "Personal site index",
    "按分类筛选站点": "Filter sites by category",
    "搜索站点": "Search sites",
    "搜索站点…": "Search sites…",
    "回到顶部": "Back to top",
    "站点访问数据": "Site statistics",
    "访问": "Views",
    "访客": "Visitors",
    "获取中": "Loading",
    "切换到日间主题": "Switch to light theme",
    "切换到夜间主题": "Switch to dark theme",
    "日落海岸山水": "Coastline at sunset",
    "月色海岸山水": "Coastline in moonlight",
    "日落时分的海岸、山崖与松林": "Rocky coast and pine forest at sunset",
    "月色下的海岸、山崖与松林": "Rocky coast and pine forest in moonlight",
    "这个角落还没找到": "No sites found",
    "试试站点名称、描述或域名，也可以换个分类。": "Try a name, description, domain or another category.",
    "查看全部站点": "Show all sites",
    "正在加载…": "Loading…",
    "内容暂时无法加载，请稍后重试。": "Could not load this page. Please try again.",
    "已是最新版本": "Up to date",
    "发现新版本": "Update available",
    "检测失败": "Check failed",
    "无法连接 GitHub": "Could not reach GitHub",
    "未知": "Unknown",
    "LceAn 的头像": "Portrait of LceAn",
    "社交媒体": "Social links",
    "联系信息": "Contact information",
    "邮箱": "Email",
    "地区": "Location",
    "上海市": "Shanghai",
    "个人主页": "Homepage",
    "荣誉概览": "Selected experience",
    "仅按领域展示累计经历，不公开具体赛事、时间与名次。": "A summary by field, without individual events, dates or rankings.",
    "网络安全类": "Cybersecurity",
    "攻防、安全与信息保护": "Offense, defense and information protection",
    "数据技术类": "Data technology",
    "数据应用与智能实践": "Applied data and intelligent systems",
    "软件开发类": "Software development",
    "前端、系统与创新设计": "Front-end, systems and design",
    "职业认证类": "Professional certifications",
    "专业技能与能力认证": "Technical skills and qualifications",
    "站点信息": "Site information",
    "这个导航页保持开放，也会随着我的使用习惯持续更新。": "This open-source site evolves as my workflow changes.",
    "一些没有放进主入口、但仍然值得保留的小工具与旧项目。": "Small tools and older projects worth keeping around.",
    "字符生成": "Character generator",
    "生成 4—32 位随机字符，支持自定义字符集和长度。": "Generate 4–32 random characters with a custom character set.",
    "十大搜索引擎": "Ten search engines",
    "聚合全球主流搜索引擎的简洁搜索导航。": "A simple gateway to popular search engines.",
    "404 导航页": "404 Directory",
    "404notfound 团队的搜索导航入口。": "A search directory from the 404notfound team.",
    "从第一次把页面放到本地，到持续重构设计与配置系统，这里记录网站一路生长的节点。": "Milestones in the evolution of this site, from its first local version onward.",
    "一名专注于现代网络安全和开发的专业人员。 我喜欢探索新技术，也享受拆解和解决复杂问题的过程， 并在这里记录持续构建中的思考与实践。": "I work in cybersecurity and development. This is where I record what I learn by exploring new tools and solving problems."
};

export function resolveLanguage(query, preference, browserLanguage = "zh-CN") {
    if (query === "zh" || query === "en") return query;
    if (preference === "zh" || preference === "en") return preference;
    return /^zh(?:-|$)/i.test(browserLanguage) ? "zh" : "en";
}

export function translate(text, language) {
    if (language !== "en") return text;
    const key = text.trim().replace(/\s+/g, " ");
    if (!Object.hasOwn(english, key)) return text;
    // Keep the original spacing around embedded icons and adjacent text nodes.
    return text.match(/^\s*/)[0] + english[key] + text.match(/\s*$/)[0];
}

const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const translatedAttributes = ["aria-label", "alt", "title", "placeholder"];

export function localizeTree(node, language) {
    if (node.nodeType === 3) {
        const text = originalText.get(node) ?? node.data;
        const localized = translate(text, language);
        if (localized !== node.data) {
            originalText.set(node, text);
            node.data = localized;
        }
    } else if (node.nodeType === 1 && !node.matches("[lang], script, style")) {
        for (const name of translatedAttributes) {
            const value = node.getAttribute(name);
            if (value === null) continue;
            const originals = originalAttributes.get(node) ?? {};
            const original = originals[name] ?? value;
            const localized = translate(original, language);
            if (localized !== value) {
                originals[name] = original;
                originalAttributes.set(node, originals);
                node.setAttribute(name, localized);
            }
        }
        node.childNodes.forEach((child) => localizeTree(child, language));
    }
}


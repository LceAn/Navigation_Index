import configData from "../cfg/config.js?20261020v1";

const state = {
    currentView: "directory",
    theme: "light",
    category: "all",
    query: "",
    pageRequest: 0
};
const categoryNames = { life: "记录与生活", dev: "开发与运维", tools: "工具与探索" };

const fallbackBackgrounds = [
    "linear-gradient(135deg, #304b78, #7190b8)",
    "linear-gradient(135deg, #5b3d73, #d27f68)",
    "linear-gradient(135deg, #2f625e, #82a986)",
    "linear-gradient(135deg, #603d34, #d19b64)",
    "linear-gradient(135deg, #29384f, #7286a7)",
    "linear-gradient(135deg, #475a34, #b18b4f)"
];

const pageMap = {
    about: {
        path: "./src/b_html/about.html?20260731v2",
        title: "关于我",
        eyebrow: "About LceAn"
    },
    timeline: {
        path: "./src/b_html/timeline.html?20261020v1",
        title: "时间线",
        eyebrow: "Timeline"
    },
    more: {
        path: "./src/b_html/more.html?20260731v2",
        title: "更多",
        eyebrow: "More from LceAn"
    }
};

const elements = {
    root: document.documentElement,
    body: document.body,
    siteHeader: document.getElementById("site-header"),
    metaAuthor: document.getElementById("meta-author"),
    metaDescription: document.getElementById("meta-description"),
    heroKicker: document.getElementById("hero-kicker"),
    directory: document.getElementById("directory"),
    directoryTitle: document.getElementById("directory-title"),
    sectionEyebrow: document.querySelector(".section-eyebrow"),
    directoryLabel: document.querySelector("[data-directory-label]"),
    dynamicContent: document.getElementById("dynamic-content"),
    backButton: document.querySelector("[data-back-to-directory]"),
    themeToggles: document.querySelectorAll(".theme-toggle"),
    directoryTools: document.getElementById("directory-tools"),
    search: document.getElementById("site-search"),
    filterStatus: document.getElementById("filter-status"),
    footerCopy: document.getElementById("footer-copy"),
    footerRecord: document.getElementById("footer-record")
};

function applySiteConfig() {
    const { site } = configData;
    document.title = `${site.title} - 个人网站导航`;
    elements.metaAuthor.content = site.author;
    elements.metaDescription.content = site.description;
    elements.heroKicker.textContent = site.subtitle;
    elements.footerCopy.textContent = site.copyright;
    elements.footerRecord.textContent = site.beian;
    document.getElementById("site-count").textContent = configData.weblists.length;
    document.querySelector('[data-category="all"] span').textContent = configData.weblists.length;
}

function loadDynamicPoem() {
    if (!configData.features?.poetry) return;

    const script = document.createElement("script");
    script.src = "src/js/jinrishici.js";
    script.async = true;
    script.addEventListener("load", () => {
        if (!window.jinrishici?.load) return;
        window.jinrishici.load((result) => {
            const content = result?.data?.content;
            const origin = result?.data?.origin;
            if (!content) return;

            const sentence = document.getElementById("poem-sentence");
            const source = document.getElementById("poem-source");
            sentence.textContent = content;

            if (origin && source) {
                const dynasty = origin.dynasty ? `[${origin.dynasty}] ` : "";
                const author = origin.author || "";
                const title = origin.title ? `《${origin.title}》` : "";
                source.textContent = `${dynasty}${author}${title}`.trim();
            }
        });
    }, { once: true });
    document.head.append(script);
}

function initFooterMetrics() {
    if (configData.features?.visitorCount) {
        const script = document.createElement("script");
        script.src = "src/js/busuanzi.pure.mini.js";
        script.async = true;
        document.body.append(script);
    } else {
        document.getElementById("busuanzi_container_site_pv")?.remove();
        document.getElementById("busuanzi_container_site_uv")?.remove();
    }

    const ipElement = document.getElementById("user-ip");
    if (!configData.features?.showIP) {
        document.querySelector(".footer-ip")?.remove();
        return;
    }

    fetch("https://api.ipify.org?format=json")
        .then((response) => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then((data) => {
            if (ipElement) ipElement.textContent = data.ip || "--";
        })
        .catch(() => {
            if (ipElement) ipElement.textContent = "--";
        });
}

function createCard(item, index) {
    const card = document.createElement("a");
    card.className = "nav-card";
    card.href = item.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.dataset.category = item.category || "tools";
    card.dataset.search = `${item.title} ${item.description} ${item.url}`.toLocaleLowerCase();
    card.dataset.featured = String(index < 2);
    card.setAttribute("aria-label", `${item.title}：${item.description}（新窗口打开）`);

    const media = document.createElement("div");
    media.className = "card-media";
    media.style.background = fallbackBackgrounds[index % fallbackBackgrounds.length];

    const image = document.createElement("img");
    image.className = "card-image";
    image.alt = item.alt || item.title;
    image.loading = "lazy";
    image.decoding = "async";
    image.fetchPriority = "low";
    image.referrerPolicy = "no-referrer";
    image.width = 960;
    image.height = 540;
    let triedLocal = false;
    image.addEventListener("error", () => {
        // The same artwork ships with Pages, so an R2 outage needn't break a card.
        if (!triedLocal && item.img_url) {
            triedLocal = true;
            const filename = new URL(item.img_url, location.href).pathname.split("/").pop();
            image.src = `./src/img/cards/${filename}`;
            return;
        }
        image.hidden = true;
        image.removeAttribute("src");
    });
    if (item.img_url) {
        image.src = item.img_url;
    } else {
        image.hidden = true;
    }

    const badge = document.createElement("span");
    badge.className = "card-badge";
    badge.textContent = categoryNames[item.category] || "工具与探索";

    const arrow = document.createElement("span");
    arrow.className = "card-arrow";
    arrow.textContent = "↗";
    arrow.setAttribute("aria-hidden", "true");

    const copy = document.createElement("div");
    copy.className = "card-copy";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    const domain = document.createElement("span");
    domain.className = "card-domain";
    domain.textContent = new URL(item.url, location.href).hostname.toLowerCase();
    copy.append(title, description, domain);
    media.append(image, badge, arrow, copy);
    card.append(media);
    return card;
}

function filterDirectory() {
    if (state.currentView !== "directory") return;
    const query = state.query.trim().toLocaleLowerCase();
    let count = 0;
    document.querySelectorAll(".nav-card").forEach((card) => {
        const matches = (state.category === "all" || card.dataset.category === state.category)
            && card.dataset.search.includes(query);
        card.hidden = !matches;
        card.classList.toggle("is-featured", card.dataset.featured === "true" && !query && state.category === "all");
        if (matches) count++;
    });
    document.querySelectorAll("button[data-category]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.category === state.category));
    });
    document.querySelector(".empty-state").hidden = count !== 0;
    elements.filterStatus.textContent = `找到 ${count} 个站点`;
}

function renderDirectory({ shouldScroll = false } = {}) {
    state.currentView = "directory";
    state.pageRequest++;
    elements.directory.classList.remove("is-page-view");
    elements.directoryLabel.hidden = false;
    elements.directoryTools.hidden = false;
    elements.directoryTitle.textContent = "";
    elements.sectionEyebrow.textContent = "";
    elements.backButton.hidden = true;
    document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("is-active"));

    const grid = document.createElement("div");
    grid.className = "cards-grid";
    grid.id = "cards-grid";

    configData.weblists.forEach((item, index) => {
        grid.append(createCard(item, index));
    });
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.hidden = true;
    empty.innerHTML = '<h3>这个角落还没找到</h3><p>试试站点名称、描述或域名，也可以换个分类。</p><button type="button">查看全部站点</button>';
    empty.querySelector("button").addEventListener("click", () => {
        state.category = "all";
        state.query = "";
        elements.search.value = "";
        filterDirectory();
        elements.search.focus({ preventScroll: true });
    });
    grid.append(empty);

    elements.dynamicContent.replaceChildren(grid);
    filterDirectory();

    if (shouldScroll) {
        scrollToElement(elements.directory);
    }
}

function scrollToElement(element) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
}

async function loadPage(pageName) {
    const page = pageMap[pageName];
    if (!page) return;

    state.currentView = pageName;
    const requestId = ++state.pageRequest;
    elements.directory.classList.add("is-page-view");
    elements.directoryLabel.hidden = true;
    elements.directoryTools.hidden = true;
    elements.filterStatus.textContent = "";
    elements.directoryTitle.textContent = page.title;
    elements.sectionEyebrow.textContent = page.eyebrow;
    elements.backButton.hidden = false;
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.toggle("is-active", link.dataset.page === pageName);
    });

    const loading = document.createElement("p");
    loading.className = "section-loading";
    loading.textContent = "正在加载…";
    elements.dynamicContent.replaceChildren(loading);
    scrollToElement(elements.directory);

    try {
        const response = await fetch(page.path);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const html = await response.text();
        if (requestId !== state.pageRequest) return;
        const doc = new DOMParser().parseFromString(html, "text/html");
        doc.querySelectorAll("script").forEach((script) => script.remove());

        const view = document.createElement("div");
        view.className = "content-view";
        [...doc.body.childNodes].forEach((node) => view.append(node.cloneNode(true)));
        elements.dynamicContent.replaceChildren(view);

        if (pageName === "about") {
            hydrateVersionInfo();
        }
    } catch (error) {
        if (requestId !== state.pageRequest) return;
        const message = document.createElement("p");
        message.className = "section-error";
        message.textContent = "内容暂时无法加载，请稍后重试。";
        elements.dynamicContent.replaceChildren(message);
        console.error("Failed to load page content:", error);
    }
}

async function hydrateVersionInfo() {
    const local = document.getElementById("local-version");
    const remote = document.getElementById("remote-version");
    const status = document.getElementById("version-status");

    if (local) local.textContent = `v${configData.site.version}`;

    try {
        const response = await fetch("https://api.github.com/repos/LceAn/Navigation_Index/releases/latest");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const release = await response.json();
        const latest = release.tag_name || "未知";
        if (remote) remote.textContent = latest;
        if (status) {
            status.textContent = latest.replace(/^v/, "") === configData.site.version
                ? "已是最新版本"
                : "发现新版本";
        }
    } catch {
        if (remote) remote.textContent = "检测失败";
        if (status) status.textContent = "无法连接 GitHub";
    }
}

function setTheme(theme, { persist = true } = {}) {
    state.theme = theme;
    const isDark = theme === "dark";
    elements.root.classList.toggle("theme-dark", isDark);
    document.querySelector(".hero-art").setAttribute("aria-label", isDark ? "月色海岸山水" : "日落海岸山水");
    document.querySelector(".hero-image-day").alt = isDark ? "月色下的海岸、山崖与松林" : "日落时分的海岸、山崖与松林";
    elements.themeToggles.forEach((button) => {
        button.setAttribute("aria-pressed", String(isDark));
        button.setAttribute("aria-label", isDark ? "切换到日间主题" : "切换到夜间主题");
    });
    document.querySelector('meta[name="theme-color"]').content = isDark ? "#111d1b" : "#f7f7f0";
    if (persist) {
        try { localStorage.setItem("lcean-theme", theme); } catch { /* Private storage may be unavailable. */ }
    }
}

function initTheme() {
    let saved;
    try { saved = localStorage.getItem("lcean-theme"); } catch { /* Fall back to system theme. */ }
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(["light", "dark"].includes(saved) ? saved : preferred, { persist: false });

    elements.themeToggles.forEach((button) => {
        button.addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark"));
    });
}

function initHeaderReveal() {
    let animationFrame = 0;
    let resizeFrame = 0;
    let revealThreshold = 160;
    let isHeaderVisible = null;

    const updateHeader = () => {
        animationFrame = 0;
        const shouldReveal = window.scrollY > revealThreshold;

        if (shouldReveal === isHeaderVisible) return;
        isHeaderVisible = shouldReveal;
        elements.body.classList.toggle("is-header-visible", shouldReveal);
        elements.siteHeader.toggleAttribute("inert", !shouldReveal);
        elements.siteHeader.setAttribute("aria-hidden", String(!shouldReveal));
    };

    const requestUpdate = () => {
        if (animationFrame) return;
        animationFrame = window.requestAnimationFrame(updateHeader);
    };

    const recalculateThreshold = () => {
        resizeFrame = 0;
        const heroHeight = Math.max(elements.directory.offsetTop, window.innerHeight);
        revealThreshold = Math.max(160, heroHeight - Math.max(110, window.innerHeight * 0.14));
        requestUpdate();
    };

    const requestRecalculation = () => {
        if (resizeFrame) return;
        resizeFrame = window.requestAnimationFrame(recalculateThreshold);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestRecalculation);
    window.addEventListener("pageshow", recalculateThreshold);
    recalculateThreshold();
}

function bindNavigation() {
    document.querySelectorAll("[data-page]").forEach((button) => {
        button.addEventListener("click", () => loadPage(button.dataset.page));
    });

    document.querySelector("[data-home-link]").addEventListener("click", (event) => {
        if (state.currentView !== "directory") renderDirectory();
        if (window.scrollY < elements.directory.offsetTop - 20) return;
        event.preventDefault();
        scrollToElement(document.getElementById("home"));
    });

    elements.backButton.addEventListener("click", () => renderDirectory());
    document.querySelectorAll('a[href="#directory"]').forEach((link) => {
        link.addEventListener("click", () => {
            if (state.currentView !== "directory") renderDirectory();
        });
    });
    document.querySelectorAll("button[data-category]").forEach((button) => {
        button.addEventListener("click", () => {
            state.category = button.dataset.category;
            filterDirectory();
        });
    });
    elements.search.addEventListener("input", () => {
        state.query = elements.search.value;
        filterDirectory();
    });
    document.addEventListener("keydown", (event) => {
        const target = event.target;
        if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey
            || target.closest("input, textarea, select, [contenteditable]")) return;
        event.preventDefault();
        if (state.currentView !== "directory") renderDirectory();
        elements.search.focus({ preventScroll: true });
        scrollToElement(elements.directory);
    });
}

function init() {
    applySiteConfig();
    initTheme();
    initHeaderReveal();
    bindNavigation();
    renderDirectory();
    const deferNonCritical = window.requestIdleCallback
        ? (callback) => window.requestIdleCallback(callback, { timeout: 1500 })
        : (callback) => window.setTimeout(callback, 0);

    deferNonCritical(loadDynamicPoem);
    deferNonCritical(initFooterMetrics);
}

init();

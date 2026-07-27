import configData from "../cfg/config.js?20260727v4";

const state = {
    currentView: "directory",
    theme: "light"
};

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
        path: "./src/b_html/about.html",
        title: "关于我",
        eyebrow: "About LceAn"
    },
    timeline: {
        path: "./src/b_html/timeline.html?20260727v2",
        title: "时间线",
        eyebrow: "Timeline"
    },
    more: {
        path: "./src/b_html/more.html",
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
    themeToggle: document.querySelector(".theme-toggle"),
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
    card.style.transitionDelay = `${Math.min(index, 8) * 55}ms`;
    card.setAttribute("aria-label", `${item.title}：${item.description}`);

    const media = document.createElement("div");
    media.className = "card-media";
    media.style.background = fallbackBackgrounds[index % fallbackBackgrounds.length];

    const image = document.createElement("img");
    image.className = "card-image";
    image.alt = item.alt || item.title;
    image.loading = index < 3 ? "eager" : "lazy";
    image.decoding = "async";
    image.referrerPolicy = "no-referrer";
    image.addEventListener("error", () => {
        image.hidden = true;
        image.removeAttribute("src");
    }, { once: true });
    if (item.img_url) {
        image.src = item.img_url;
    } else {
        image.hidden = true;
    }

    const badge = document.createElement("span");
    badge.className = "card-badge";
    badge.textContent = item.span || "Link";

    const copy = document.createElement("div");
    copy.className = "card-copy";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    copy.append(title, description);
    media.append(image, badge, copy);
    card.append(media);
    return card;
}

function revealCards() {
    const cards = document.querySelectorAll(".nav-card");
    if (!("IntersectionObserver" in window)) {
        cards.forEach((card) => card.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    cards.forEach((card) => observer.observe(card));
}

function renderDirectory({ shouldScroll = false } = {}) {
    state.currentView = "directory";
    elements.directory.classList.remove("is-page-view");
    elements.directoryLabel.hidden = false;
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

    elements.dynamicContent.replaceChildren(grid);
    revealCards();

    if (shouldScroll) {
        elements.directory.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

async function loadPage(pageName) {
    const page = pageMap[pageName];
    if (!page) return;

    state.currentView = pageName;
    elements.directory.classList.add("is-page-view");
    elements.directoryLabel.hidden = true;
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
    elements.directory.scrollIntoView({ behavior: "smooth", block: "start" });

    try {
        const response = await fetch(page.path);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const html = await response.text();
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
    elements.themeToggle.setAttribute("aria-pressed", String(isDark));
    elements.themeToggle.setAttribute("aria-label", isDark ? "切换到日间主题" : "切换到夜间主题");
    document.querySelector('meta[name="theme-color"]').content = isDark ? "#0d1118" : "#fbf8f1";
    if (persist) localStorage.setItem("lcean-theme", theme);
}

function initTheme() {
    const saved = localStorage.getItem("lcean-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(saved || preferred, { persist: false });

    elements.themeToggle.addEventListener("click", () => {
        setTheme(state.theme === "dark" ? "light" : "dark");
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
        document.getElementById("home").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    elements.backButton.addEventListener("click", () => renderDirectory());
}

function init() {
    applySiteConfig();
    initTheme();
    initHeaderReveal();
    bindNavigation();
    renderDirectory();
    loadDynamicPoem();
    initFooterMetrics();
    requestAnimationFrame(() => elements.body.classList.add("is-ready"));
}

init();

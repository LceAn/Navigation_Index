// 侧边按钮配置化 — 链接从 config.js 读取
// scroll.js 在 module 脚本之前加载，config 可能还没加载
// 所以用全局事件方式，由 module 脚本初始化后触发

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof currentSection !== 'undefined') {
        currentSection = 0;
        var sections = document.querySelectorAll('.fullpage-section');
        if (sections.length > 0) {
            sections[0].scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// 通用链接跳转函数
function goToLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// 由 module 脚本调用，根据 config 注册按钮事件
function initSidebarButtons(buttons) {
    if (!buttons || !Array.isArray(buttons)) return;
    buttons.forEach(function(btn) {
        var el = document.getElementById(btn.id);
        if (!el) return;
        // 清除旧事件
        el.onclick = null;
        if (btn.action === 'scrollToTop') {
            el.addEventListener('click', scrollToTop);
        } else if (btn.action === 'goToLink' && btn.href) {
            el.addEventListener('click', function() { goToLink(btn.href); });
        }
    });
}

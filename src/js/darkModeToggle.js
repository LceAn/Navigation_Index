// darkModeToggle.js — 自动根据时间切换暗色模式

function toggleDarkMode() {
    var hours = new Date().getHours();
    var body = document.body;
    if (hours >= 20 || hours < 6) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    toggleDarkMode();
    // 每分钟检查一次，保存引用以便清理
    var darkModeTimer = setInterval(toggleDarkMode, 60000);

    // 页面隐藏时停止检查，节省资源
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            clearInterval(darkModeTimer);
        } else {
            darkModeTimer = setInterval(toggleDarkMode, 60000);
            toggleDarkMode(); // 页面可见时立即更新
        }
    });
});

// darkModeToggle.js

function toggleDarkMode() {
    var hours = new Date().getHours();
    var body = document.body;
    if (hours >= 20 || hours < 6) { // 如果当前时间是晚上8点到早上6点之间，则切换到黑暗模式
        body.classList.add('dark-mode');
    } else { // 否则切换回正常模式
        body.classList.remove('dark-mode');
    }
}

// 在页面加载时调用 toggleDarkMode 函数
document.addEventListener('DOMContentLoaded', function () {
    toggleDarkMode();
    // 每分钟检查一次是否切换黑暗模式
    setInterval(toggleDarkMode, 60000);
});

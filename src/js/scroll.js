<!--侧边按钮设定js -->
// 滚动到页面顶部的函数
function scrollToTop() {
    // 滚动到顶部的行为
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
}

// 前往 GitHub 的函数
function goToGitHub() {
    // 你的 GitHub 页面链接
    window.location.href = 'https://github.com/LceAn';
}

// 前往 Blog 的函数
function goTozhihu() {
    // 你的 Blog 页面链接
    window.location.href = 'https://zhihu.com/people/lcean';
}

// 监听页面滚动事件，根据滚动位置控制按钮显示/隐藏
window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('TopButton');
    var goToGitHubButton = document.getElementById('GitHubButton');
    var goTozhihuButton = document.getElementById('zhihuButton');
    var footer_scroll = document.getElementById('footer_scroll');
    if (window.scrollY > 1) { // 当页面滚动超过300像素时显示按钮
        scrollToTopButton.style.display = 'block';
        goToGitHubButton.style.display = 'block';
        goTozhihuButton.style.display = 'block';
        footer_scroll.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
        goToGitHubButton.style.display = 'none';
        goTozhihuButton.style.display = 'none';
        footer_scroll.style.display = 'none';
    }
});
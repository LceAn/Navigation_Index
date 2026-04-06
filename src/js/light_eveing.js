// 夜间模式按钮 js
function toggleNightMode() {
    // 1. 触发天空和太阳/月亮的动画切换
    var isDark = $("body").toggleClass("mk-dark-mode").hasClass("mk-dark-mode");

    // 2. 旋转太阳/月亮
    var angle = $('.mk-dark-mode-planet').data('angle') + 360 || 360;
    $('.mk-dark-mode-planet').css({'transform': 'rotate(' + angle + 'deg)' });
    $('.mk-dark-mode-planet').data('angle', angle);

    // 3. 每次切换到夜间模式时随机月牙大小 (80~140px)
    if (isDark) {
        var moonSize = Math.floor(Math.random() * 61) + 80;
        document.documentElement.style.setProperty('--moon-size', moonSize + 'px');
    }
}

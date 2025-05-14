// 夜间模式按钮js
function toggleNightMode() {
    // 1. 触发天空和太阳/月亮的动画切换
    $("body").toggleClass("mk-dark-mode");
    
    // 2. 旋转太阳/月亮
    var angle = $('.mk-dark-mode-planet').data('angle') + 360 || 360;
    $('.mk-dark-mode-planet').css({'transform': 'rotate(' + angle + 'deg)' });
    $('.mk-dark-mode-planet').data('angle', angle);
    
    // 3. 应用滤镜效果
    const docStyle = document.documentElement.style;
    if (!window.modeIndex) {
        window.modeIndex = 0;
    }
    const styleList = [
        '',
        'invert(100%) hue-rotate(180deg)',
    ];
    window.modeIndex = window.modeIndex >= styleList.length - 1 ? 0 : window.modeIndex + 1;
    docStyle.filter = styleList[window.modeIndex];
    document.body.querySelectorAll('img, picture, video').forEach(el => el.style.filter = window.modeIndex ? 'invert(1) hue-rotate(180deg)' : '');
}
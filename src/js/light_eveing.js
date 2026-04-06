// 夜间模式按钮 js
function toggleNightMode() {
    // 1. 触发天空和太阳/月亮的动画切换
    $("body").toggleClass("mk-dark-mode");
    
    // 2. 旋转太阳/月亮
    var angle = $('.mk-dark-mode-planet').data('angle') + 360 || 360;
    $('.mk-dark-mode-planet').css({'transform': 'rotate(' + angle + 'deg)' });
    $('.mk-dark-mode-planet').data('angle', angle);
}

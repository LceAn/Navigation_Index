<!--夜间模式按钮js -->
function toggleNightMode() {
    const docStyle = document.documentElement.style;
    if (!window.modeIndex) {
        window.modeIndex = 0;
    }
    const styleList = [
        '',
        // 'invert(85%) hue-rotate(180deg)',
        'invert(100%) hue-rotate(180deg)',
    ];
    window.modeIndex = window.modeIndex >= styleList.length - 1 ? 0 : window.modeIndex + 1;
    docStyle.filter = styleList[window.modeIndex];
    document.body.querySelectorAll('img, picture, video').forEach(el => el.style.filter = window.modeIndex ? 'invert(1) hue-rotate(180deg)' : '');
}
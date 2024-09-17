//禁用右键（防止右键查看源代码）
window.oncontextmenu = function () {
    return false;
}
//禁止任何键盘敲击事件（防止F12和shift+ctrl+i调起开发者工具）
window.onkeydown = window.onkeyup = window.onkeypress = function () {
    window.event.returnValue = false;
    return false;
}

window.addEventListener("keydown", function (e) {
    //可以判断是不是mac，如果是mac,ctrl变为花键
    //event.preventDefault() 方法阻止元素发生默认的行为。
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        // Process event...
        document.getElementById("test").innerHTML = "ctrl+s成功";
    }
}, false);
<!-- Cookie计数 -->

    function www_helpor_net(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1)
    endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}


    function GetCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)
    return www_helpor_net(j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0)
    break;
}
    return null;
}


    function SetCookie(name, value) {
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    var expires = (2 < argc) ? argv[2] : null;
    var path = (3 < argc) ? argv[3] : null;
    var domain = (4 < argc) ? argv[4] : null;
    var secure = (5 < argc) ? argv[5] : false;
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain)) + ((secure == true) ? "; secure" : "");
}

    var expdate = new Date();
    var visits;

    expdate.setTime(expdate.getTime() + (24 * 60 * 60 * 1000 * 365)); //设置COOKIES时间为1年,自己随便设置该时间

    if (!(visits = GetCookie("visits")))
    visits = 0;
    visits++;
    SetCookie("visits", visits, expdate, "/", null, false);
    //以下信息显示可以使用标准的HTML语法,自己随便设置
    document.write("你已经光临本页" + visits + "次！");
    //-->

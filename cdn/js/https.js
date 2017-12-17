if(location.protocol == "http:")
{
    var s = location.href;
    s = s.replace("http:","https:");
    window.location = s;
}
var cnzz_script = document.createElement("script");
cnzz_script.src="https://s19.cnzz.com/z_stat.php?id=1271202395&web_id=1271202395";
document.getElementsByTagName("head")[0].appendChild(cnzz_script);

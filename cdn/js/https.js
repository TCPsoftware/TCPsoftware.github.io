if(location.protocol == "http:")
{
    var s = location.href;
    s = s.replace("http:","https:");
    window.location = s;
}
var cnzz_script = document.createElement("script");
cnzz_script.src="https://tcpsoft.me/cdn/js/cnzz.js";
document.getElementsByTagName("head")[0].appendChild(cnzz_script);

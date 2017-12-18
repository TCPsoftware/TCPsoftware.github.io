if(location.protocol == "http:")
{
    var s = location.href;
    s = s.substring(4);
    s = "https" + s;
//    s = s.replace("http:","https:");
    window.location = s;
}

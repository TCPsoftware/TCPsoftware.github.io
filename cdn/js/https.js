if(location.protocol == "http:")
{
    var s = location.href;
    s = s.replace("http:","https:");
    window.location = s;
}

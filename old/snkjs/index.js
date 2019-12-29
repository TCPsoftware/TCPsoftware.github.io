window.onload=loading();
function $$(id)
{
	return document.getElementById(id);
}
function change (str)
{
	$$("timer").innerHTML=str;
}
function add (str)
{
	$$("timer").innerHTML+=str;
}
function turn()
{
	//add(" 0 ");
	window.location.href="https://snkjs.github.io";
	//alert("已跳转");
}
function loading()
{
	//var t=setTimeout("",5000);
	var t5=setTimeout("add(' 5 ')",1000);
	var t4=setTimeout("add(' 4 ')",2000);
	var t3=setTimeout("add(' 3 ')",3000);
	var t2=setTimeout("add(' 2 ')",4000);
	var t1=setTimeout("add(' 1 ')",5000);
	var t23333=setTimeout("turn();",6000);
}

//	//重复执行某个方法 
//	var t1 = window.setInterval(hello,1000); 
//	var t2 = window.setInterval("hello()",3000); 
//	//去掉定时器的方法 
//	window.clearInterval(t1); 

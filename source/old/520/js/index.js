function $(id_name)
{
	return document.getElementById(id_name);
}
//function $$class(class_name)
//{
//	return Document.getElementsByClassName(class_name);
//}
function init(value_)
{
	set_music_valume(value_);
	set_playing_music_mp3("yesterday once more");
	//set_playing_music_ogg("yesterday once more");
	//document.getElementById("music").src = "music/mp3/yesterday once more.mp3";
	alert("更新日志：\n\n\
		1.将搜索按钮的功能修改为：添加音乐\n\
		\n\
		注意:\n\
		1.为保证视觉良好,请不要使浏览器界面太小\n\
		2.建议浏览器大小最小为横：800px ， 高700px。\n\
		");
	//$("search_button").onclick = Function("alert('51');");//funciton fuck () {search();};
	add_song_from_js_txt();
}
/*document.getElementById("search_button").onclick = function fuck () {//正确
	search();
}*/
function search()
{
	alert("抱歉！暂未开通搜索功能。");
}
function nav()
{
	alert("抱歉！暂未开通导航功能。");
}
/*添加事件检测器
if(window.addEventListener){ // Mozilla, Netscape, Firefox
	//element.addEventListener(type,listener,useCapture);
	button.addEventListener('click', alert('11'), false);
	button.addEventListener('click', alert('12'), false);//执行顺序11 -> 12
}
else { // IE
	button.attachEvent('onclick', function(){alert('21');});
	button.attachEvent('onclick', function(){alert('22');});执行顺序22 -> 21
}
*/
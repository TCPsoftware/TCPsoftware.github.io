function set_music_valume(val)
{
	//var userName="xiaoming";
	//alert("已加载完页面。"); 
	//ele=document.getElementById("sound1");
	$("music").volume = 0;
	$("music").volume = val;
}
function set_music(name_of_song)
{
	set_playing_music_mp3(name_of_song);
	set_playing_music_ogg(name_of_song);
}
function set_playing_music_mp3(str)
{
	var s = 'music/mp3/'+str+'.mp3';
	//$("music").innerHTML += "<source id="+'"'+"music_sourse_mp3"+'"'+" src="+'"music/mp3/'+str+'.mp3"'+" type="+'"'+"audio/mp3"+'"'+" />\n";
	//$("music_sourse_mp3").src = '"music/mp3/'+str+'.mp3"';
	//$("music").src = "music/mp3/"+str+".mp3";
	$("music").setAttribute("src",s);
	//$("music").play;
}
function set_playing_music_ogg(str)
{
	$("music").src = "music/ogg/"+str+".ogg";
}
function add_song(filename)
{
	var str = $("search-input").value;
	var s = $("select_music_ul").innerHTML;
	s = s+"\n"+
		"<input value='"+str+"' "+
		"class='select_music_button' "+
		"type='button' "+
		'onclick="set_playing_music_mp3('+"'"+str+"'"+')" />\n'+
		"<br />";
	$("select_music_ul").innerHTML = s;
}
function add_song_from_js_txt()
{
	var s = $("select_music_ul").innerHTML;
	for(var i=1;i<song_name.length;i++)
	{
		s = s+"\n"+
			"<input value='"+song_name[i]+"' "+
			"class='select_music_button' "+
			"type='button' "+
			'onclick="set_playing_music_mp3('+"'"+song_name[i]+"'"+')" />\n'+
			"<br />";
	}
	$("select_music_ul").innerHTML = s;
}

/*测试加载的小例子
	var board = document.getElementById("board");
	var e = document.createElement("input");
	e.type = "button";
	e.value = "这是测试加载的小例子";
	var object = board.appendChild(e);
*/

/*打开文件，因风险性被阻止了。
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var f = fso.OpenTextFile(filename,1,false,TristateUseDefault);
	var s = "";
	while (!f.AtEndOfStream)
	{
		s = f.ReadLine()+"\n";
		ele = document.createElement("input");
		ele.type = "button";
		ele.class = "select_music_button";
		ele.value="yesterday once more";
		method_name="set_playing_music_mp3('" + s + "')";
		ele.onclick=method_name;
		var obj = $("select_music_div").appendChild(ele);
	}
	f.Close();
*/

/*失败的代码：添加音乐按钮。
		var ele = document.createElement("input");
		ele.type = "button";
		ele.class = "select_music_button";
		ele.value=s;
		var method_name="set_playing_music_mp3('" + s + "')";
		ele.onclick=method_name;
		$("select_music_div").appendChild(ele);
		$("select_music_div").appendChild(document.createElement("br"));
*/

/*添加音乐代码-2
	var ele = document.createElement("input");
	$("select_music_div").appendChild(ele);
	$("select_music_div").
		appendChild(document.createElement("br"));
	ele.value = str;
	ele.class = "select_music_button";
	ele.type = "button";
	var method_name = "set_playing_music_mp3('" + str + "')";
	ele.onclick = method_name;
*/
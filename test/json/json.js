function updatetimus(timus)
{
	var p = document.getElementsByTagName("p")[0];
	p.innerHTML = "updatetimus p 已经正常运行";
	//alert(JSON.stringify(timus));
	var timus_div = document.getElementById("timus_div");
	timus_div.innerHTML="updatetimus函数已经正常运行";
	for(var i=0;i<timus.length;i++)
	{
		var timu = timus[i];
		var new_timu = document.createElement("div");
		new_timu.innerHTML = timu.name + " ans= " + timu.ans;
		timus_div.appendChild(new_timu);
	}
	//p.innerHTML = JSON.stringify(timus);
	p.innerHTML = timus[0].name + " " + timus[0].ans;
}
function init()
{
	var str='[\
	  {\
		"name": "first",\
		"ans": "1"\
	  },\
	  {\
		"name": "second",\
		"ans": "2"\
	  },\
	  {\
		"name": "third",\
		"ans": "3"\
	  },\
	  {\
		"name": "forth",\
		"ans": "4"\
	  }\
	]';
	//var head = document.getElementsByTagName("head")[0];
	//var new_script = document.createElement("script");
	//new_script.setAttribute("src","http://tcpsoftware.github.io/test/json/ti.json?callback=updatetimus");
	//head.appendChild(new_script);
	var url = "./ti.json";
	//var request = new XMLHttpRequest();
	//request.open("GET",url);
	//request.onload = function()
	//{
	//	if(request.status == 200)
	//	{
	//		updatetimus(JSON.parse(request.responseText));
	//	}
	//}
	//request.send(null);
	updatetimus(JSON.parse(str));
}
window.onload=init;

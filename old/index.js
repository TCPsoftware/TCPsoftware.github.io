function $$(id)
{
	return document.getElementById(id);
}
function mOver(obj)
{
	obj.innerHTML="<a href="+'"'+"https://github.com/tcpsoftware"+'"'+" target="+'"'+"_blank"+'"'+"><span style="+'"'+"color="+"'"+"red"+"';"+'"'+">点击前往<br />我的<br />GitHub</span></a>";
}

function mOut(obj)
{
	obj.innerHTML="";
}
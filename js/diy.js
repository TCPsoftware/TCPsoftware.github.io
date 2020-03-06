//添加<script>到 \themes\next\layout\_scripts\index.swig
//<script src="/js/diy.js"></script>

//link = document.getElementsByClassName("post-copyright-link")[0].children[1];
//href = link.getAttribute("href").replace("/http:/","https://");
//link.setAttribute("href",href);
//link.innerHTML=link.innerHTML.replace("http://","https://")

// window.onload = function(){
$(document).ready(function(){
	img=document.getElementsByTagName("img")
	for(i=0;i<img.length;i++ ){
		//console.log(img[i] )
		//console.log(i )
		src=img[i].getAttribute("src")
		src=src.replace("../../","https://blogsrc-1301043685.cos.ap-chengdu.myqcloud.com/")
		img[i].setAttribute("src",src)
	}
	a_tag=document.getElementsByTagName("a")
	for(i=0;i<a_tag.length;i++ ){
		//console.log(a_tag[i] )
		//console.log(i )
		href=a_tag[i].getAttribute("href")
		//console.log(href)
		if(href!=null){
			href=href.replace("../../","https://blogsrc-1301043685.cos.ap-chengdu.myqcloud.com/")
			a_tag[i].setAttribute("href",href)
		}
	}
});
// }

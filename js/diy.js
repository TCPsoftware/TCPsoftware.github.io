//添加<script>到 \themes\next\layout\_scripts\index.swig
//<script src="/js/diy.js"></script>

link = document.getElementsByClassName("post-copyright-link")[0].children[1];
href = link.getAttribute("href").replace("/http:/","http://");
link.setAttribute("href",href);

window.onload = function(){
	img=document.getElementsByTagName("img")
	for(i=0;i<img.length;i++ ){
		//console.log(img[i] )
		//console.log(i )
		src=img[i].getAttribute("src")
		src=src.replace("../../","https://blogsrc-1301043685.cos.ap-chengdu.myqcloud.com/")
		img[i].setAttribute("src",src)
	}
}

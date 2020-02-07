//添加<script>到 \themes\next\layout\_scripts\index.swig
//<script src="/js/diy.js"></script>

link = document.getElementsByClassName("post-copyright-link")[0].children[1];
href = link.getAttribute("href").replace("/http:/","http://");
link.setAttribute("href",href);
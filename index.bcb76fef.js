window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".customer-wrapper__header"),n=document.querySelector(".prev"),t=document.querySelector(".next"),c=1;function o(){c>e.length&&(c=1),c<1&&(c=e.length),e.forEach((function(e){e.style.display="none"})),e[c-1].style.display="block"}function r(e){o(c+=e)}o(),n.addEventListener("click",(function(){r(-1)})),t.addEventListener("click",(function(){r(1)}))}));
//# sourceMappingURL=index.bcb76fef.js.map

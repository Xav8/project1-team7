window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".customer-wrapper__header"),t=document.querySelector(".prev"),n=document.querySelector(".next");let c=1;function o(){c>e.length&&(c=1),c<1&&(c=e.length),e.forEach((e=>{e.style.display="none"})),e[c-1].style.display="block"}function d(e){o(c+=e)}o(),t.addEventListener("click",(()=>{d(-1)})),n.addEventListener("click",(()=>{d(1)}))}));
//# sourceMappingURL=index.049795ed.js.map

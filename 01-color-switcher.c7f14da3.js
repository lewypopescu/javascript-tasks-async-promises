!function(){var t=document.getElementById("startB"),e=document.getElementById("stopB"),n=null;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)}));e.addEventListener("click",(function(){clearInterval(n),e.disabled=!0,t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.c7f14da3.js.map

"use strict";console.log("js loading");var closeButton=document.querySelector(".close-nav"),openButton=document.querySelector(".open-nav"),nav=document.querySelector(".nav");function redirect(){setTimeout((function(){window.location.replace("/")}),5e3)}closeButton.addEventListener("click",(function(){nav.classList.remove("navigation-open")})),openButton.addEventListener("click",(function(){nav.classList.add("navigation-open")})),document.body.addEventListener("onload",redirect());
//# sourceMappingURL=script.js.map
console.log("js loading");

const closeButton = document.querySelector(".close-nav");
const openButton = document.querySelector(".open-nav");
const nav = document.querySelector(".nav");

closeButton.addEventListener("click", () => {
  nav.classList.remove("navigation-open");
});

openButton.addEventListener("click", () => {
  nav.classList.add("navigation-open");
});

function redirect() {
  setTimeout(function () {
    window.location.replace("/");
  }, 5000);
}

document.body.addEventListener("onload", redirect());

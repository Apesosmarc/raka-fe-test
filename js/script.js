// console.log("js loading");

// const closeButton = document.querySelector(".close-nav");
// const openButton = document.querySelector(".open-nav");
// const nav = document.querySelector(".nav");

// closeButton.addEventListener("click", () => {
//   nav.classList.remove("navigation-open");
// });

// openButton.addEventListener("click", () => {
//   nav.classList.add("navigation-open");
// });

const getYear = () => {
  const copyright = document.querySelector(".footer__fineprint");
  const year = new Date().getFullYear();

  copyright.innerHTML = `© ${year} Raka. All Rights Reserved`;
};

document.addEventListener("onload", getYear());

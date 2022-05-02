// changes copyright year automatically
const getYear = () => {
  const copyright = document.querySelector(".footer__fineprint");
  const year = new Date().getFullYear();

  copyright.innerHTML = `© ${year} Raka. All Rights Reserved`;
};

document.addEventListener("onload", getYear());

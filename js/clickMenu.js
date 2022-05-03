const makeResponsive = () => {
  const menu = document.querySelector(".header__nav__open-nav");
  const mobile = document.querySelector(".mobile-menu");
  const exit = document.querySelector(".mobile__exit");
  // stops mobile menu from scrolling
  let isOpen = false;
  const lockScrollToggle = () => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  };

  menu.addEventListener("click", (e) => {
    isOpen = true;
    mobile.style.display = "flex";
    lockScrollToggle();
  });

  exit.addEventListener("click", (e) => {
    isOpen = false;
    mobile.style.display = "none";
    lockScrollToggle();
  });
};

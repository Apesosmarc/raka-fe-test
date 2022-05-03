const menuHTML = `
<button class="mobile__exit">X</button>

<ul>
    <li>
        <a href="#">about</a>
    </li>
    <li>
        <a href="#">services</a>
    </li>
    <li>
        <a href="#">industries</a>
    </li>
    <li>
        <a href="#">blog</a>
    </li>
    <li>  
        <a href="#">contact</a>
    </li>
</ul>
`;

window.addEventListener("resize", () => {
  addMenu(window);
});

window.onload = (e) => {
  addMenu(window);
};

let navInDom = false;

const createMenu = () => {
  navInDom = true;
  const mobNav = document.createElement("nav");
  mobNav.classList.add("mobile-menu");
  document.body.prepend(mobNav);
  mobNav.innerHTML = menuHTML;

  makeResponsive();
};

const addMenu = (window) => {
  const width = window.innerWidth;
  if (width > 1000) return;

  if (!navInDom) {
    createMenu();
  }
};

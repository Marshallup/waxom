const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu__waxom");

burger.onclick = () => {
  menu.classList.add("menu__waxom_active");
  document.body.classList.add("no-scroll");
};
menu.onclick = () => {
  menu.classList.remove("menu__waxom_active");
  document.body.classList.remove("no-scroll");
};

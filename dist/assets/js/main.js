"use strict";

var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu__waxom");

burger.onclick = function () {
  menu.classList.add("menu__waxom_active");
  document.body.classList.add("no-scroll");
};

menu.onclick = function () {
  menu.classList.remove("menu__waxom_active");
  document.body.classList.remove("no-scroll");
};
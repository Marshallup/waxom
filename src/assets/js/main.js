const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu__waxom");
const link = document.querySelector(".menu__waxom_link").querySelector("a");

burger.onclick = () => {
  menu.classList.toggle("menu__waxom_active");
  burger.classList.toggle("burger_active");
  document.body.classList.toggle("no-scroll");
};
menu.onclick = () => {
  menu.classList.remove("menu__waxom_active");
  burger.classList.remove("burger_active");
  document.body.classList.remove("no-scroll");
};

// Smoth Scroll

function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function elmYPosition(eID) {
  var elm = document.getElementById(eID);
  if (elm === null) {
    return null;
  }
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}

function smoothScroll(eID) {
  if (elmYPosition(eID) === null) {
    return;
  }
  var startY = currentYPosition();
  var stopY = elmYPosition(eID);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollTo(0, stopY);
    return;
  }
  var speed = Math.round(distance / 150);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 50);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (var i = startY; i > stopY; i -= step) {
    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
}

let links = document.querySelectorAll("a");
links.forEach((elem) => {
  elem.onclick = (e) => {
    e.preventDefault();
    let reg = /[a-z]/gi;
    if (reg.test(elem.getAttribute("href"))) {
      let anchor = elem.getAttribute("href").match(reg).join("");
      smoothScroll(anchor);
    }
  };
});

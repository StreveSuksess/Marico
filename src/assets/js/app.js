let nav = document.getElementById("header__nav");
let burger = document.getElementById("burger");
burger.addEventListener("click", () => nav.classList.toggle("show"));

let title = document.getElementsByTagName("title")[0].innerHTML;
let activeLinks = [document.getElementById("header" + title), document.getElementById("footer" + title)]
activeLinks.forEach((elem) => elem.classList.add("nav__link--active"));

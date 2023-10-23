const hamburger_button = document.querySelector("#hamburger_button");
const navbar = document.querySelector("#navbar");
const navbarList = document.querySelector(".navbar__list");
const body = document.querySelector("body");

navbarList.addEventListener("click", (event) => {
  close();
});

hamburger_button.addEventListener("click", (event) => {
  close();
});

const close = () => {
  const links = [...navbarList.getElementsByTagName("a")];

  navbar.classList.toggle("navbar-phone");

  links.forEach((elem) => {
    elem.classList.toggle("navbar-phone--item");
  });

  const ButtonSrc = hamburger_button.src;

  hamburger_button.src = ButtonSrc.includes("/assets/images/ham-icon.svg")
    ? "/assets/images/x.svg"
    : "/assets/images/ham-icon.svg";
};

const hamburger_button = document.querySelector("#hamburger_button");
const navbar = document.querySelector("#navbar");
const navbarList = document.querySelector(".navbar__list");

hamburger_button.addEventListener("click", () => {
  const links = [...navbarList.getElementsByTagName("a")];

  navbar.classList.toggle("navbar-phone");

  links.forEach((elem) => {
    elem.classList.toggle("navbar-phone--item");
  });
  hamburger_button.src =
    hamburger_button.src === "/assets/images/ham-icon.svg"
      ? "/assets/images/phone-icon.svg"
      : "/assets/images/ham-icon.svg";
});

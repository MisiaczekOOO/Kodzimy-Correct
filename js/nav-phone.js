const hamburger_button = document.querySelector("#hamburger_button");
const navbar = document.querySelector("#navbar");
const navbarList = document.querySelector(".navbar__list");
const body = document.querySelector("body");

navbarList.addEventListener("click", () => {
  if (hamburger_button.style.display == "block") {
    close();
  }
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

// console.log("k = " + document.querySelector("#p1").getTotalLength());
// console.log("o = " + document.querySelector("#p2").getTotalLength());
// console.log("d = " + document.querySelector("#p3").getTotalLength());
// console.log("z = " + document.querySelector("#p4").getTotalLength());
// console.log("i = " + document.querySelector("#p5").getTotalLength());
// console.log("m = " + document.querySelector("#p6").getTotalLength());
// console.log("y = " + document.querySelector("#p7").getTotalLength());

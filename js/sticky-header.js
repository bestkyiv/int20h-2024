const header = document.querySelector(".header__timer");
const topLogo = document.querySelector(".header__row");

document.addEventListener("scroll", (e) => {
  if (
    header.getBoundingClientRect().bottom >= topLogo.getBoundingClientRect().top
  ) {
    header.style.backgroundColor = "#040019";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

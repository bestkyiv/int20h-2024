const REGISTRATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf8sZp_m58k-s0LuYZOYknVVNc-4yaIkogZ_a5yLLVfWOAqdQ/viewform";
const HOW_IT_WAS_VIDEO = "https://youtu.be/_iTZSztuIeA?si=IwzbNdwvE1lnRtd6";
document.addEventListener("DOMContentLoaded", function () {
  const registrationButtons = document.querySelectorAll(".registration-button");
  const howItWasButton = document.querySelector(".header__how-it-was-button");

  registrationButtons.forEach((button) => {
    button.onclick = () => window.open(REGISTRATION_FORM_URL, "_blank");
  });

  howItWasButton.onclick = () => window.open(HOW_IT_WAS_VIDEO, "_blank");
});

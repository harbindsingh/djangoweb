// hamburger click event
const hamburgerUp = document.querySelector(".hamburgerUp");
const hamburgerList = document.querySelector(".hamburgerList");
const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".navItem");
hamburger.addEventListener("click", () => {
  hamburgerList.classList.toggle("d-none");
  hamburgerUp.classList.toggle("d-none");
  navItems.classList.toggle("d-none");
});

const dropDownItem = document.querySelector(".dropdownItem");

const drpdwnbox1 = document.querySelector(".dropdownBox-1");

if (window.screen.width <= 1024) {
  drpdwnbox1.style.display = "none";
  dropDownItem.addEventListener("click", () => {
    if (drpdwnbox1.style.display == "none") {
      drpdwnbox1.style.display = "block";
    } else {
      drpdwnbox1.style.display = "none";
    }
  });
}

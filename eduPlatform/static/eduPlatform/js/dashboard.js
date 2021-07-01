const menuItems = document.querySelectorAll(".menuitemsLi");
const alldivs = document.querySelectorAll(".dashboardDivs");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const targetdiv = item.getAttribute("targerdiv");
    const selectedDiv = document.querySelector(`#${targetdiv}`);
    alldivs.forEach((div, i) => {
      div.classList.add("d-none");
      div.classList.remove("showdiv");
      menuItems[i].classList.remove("showdiv");
    });
    selectedDiv.classList.add("d-block");
    selectedDiv.classList.remove("d-none");
    item.classList.add("showdiv");
  });
});

const coursebtns = document.querySelectorAll(".coursebtns");
coursebtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    coursebtns.forEach((btn1) => {
      btn.classList.remove("btn-dark");
      btn.classList.add("btn-outline-dark");
    });
    btn.classList.add("btn-dark");
    btn.classList.remove("btn-outline-dark");
  });
});

const certificates = document.querySelector("#certificates");
if (certificates.childElementCount <= 1) {
  certificates.innerHTML = "<h3>No Certificate Yet</h3>";
}
